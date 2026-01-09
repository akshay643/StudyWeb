import { useState, useEffect, useCallback } from 'react'

interface PyodideInterface {
  runPython: (code: string) => any
  runPythonAsync: (code: string) => Promise<any>
  loadPackage: (packages: string | string[]) => Promise<void>
}

interface WindowWithPyodide {
  loadPyodide?: (config?: { indexURL?: string }) => Promise<PyodideInterface>
  pyodideInstance?: PyodideInterface
}

export function usePyodide() {
  const [isLoading, setIsLoading] = useState(false)
  const [isReady, setIsReady] = useState(false)
  const [error, setError] = useState<Error | null>(null)
  const [pyodide, setPyodide] = useState<PyodideInterface | null>(null)

  // Check if Pyodide is already loaded
  useEffect(() => {
    const win = window as unknown as WindowWithPyodide
    if (win.pyodideInstance) {
      setPyodide(win.pyodideInstance)
      setIsReady(true)
    }
  }, [])

  const loadPyodideInstance = useCallback(async () => {
    const win = window as unknown as WindowWithPyodide
    
    if (pyodide || win.pyodideInstance) {
      return win.pyodideInstance || pyodide
    }

    if (!win.loadPyodide) {
      throw new Error('Pyodide script not loaded. Please wait and try again.')
    }

    setIsLoading(true)
    setError(null)

    try {
      const instance = await win.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
      })
      win.pyodideInstance = instance
      setPyodide(instance)
      setIsReady(true)
      return instance
    } catch (err) {
      const error = err instanceof Error ? err : new Error('Failed to load Pyodide')
      setError(error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }, [pyodide])

  const runPython = useCallback(async (code: string): Promise<{ output: string; error: string | null }> => {
    try {
      const instance = await loadPyodideInstance()
      if (!instance) {
        return { output: '', error: 'Pyodide not loaded' }
      }

      // Redirect stdout/stderr
      instance.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
      `)

      try {
        await instance.runPythonAsync(code)
        
        const stdout = instance.runPython('sys.stdout.getvalue()')
        const stderr = instance.runPython('sys.stderr.getvalue()')

        // Reset stdout/stderr
        instance.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
        `)

        return {
          output: stdout || '',
          error: stderr || null
        }
      } catch (pythonError: unknown) {
        // Reset stdout/stderr on error too
        instance.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
        `)
        
        return {
          output: '',
          error: pythonError instanceof Error ? pythonError.message : 'Python execution error'
        }
      }
    } catch (err) {
      return {
        output: '',
        error: err instanceof Error ? err.message : 'Failed to run Python'
      }
    }
  }, [loadPyodideInstance])

  return {
    runPython,
    isLoading,
    isReady,
    error,
    pyodide
  }
}
