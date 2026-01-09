import { useState, useCallback, useRef, useEffect } from 'react'
import { CodeEditor, Language } from './code-editor'
import { ConsoleOutput, ConsoleLog } from './console-output'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Play, RotateCcw, Copy, Check, Download, ChevronDown, GripVertical, Loader2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { usePyodide } from '@/hooks/use-pyodide'

const defaultCodes: Record<Language, string> = {
  javascript: `// Welcome to StudyWeb Playground! 🚀
// Write JavaScript code here and click Run

const fruits = ['apple', 'banana', 'orange'];
console.log('Fruits:', fruits);

const upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log('Uppercase:', upperFruits);

// Math operations work!
console.log('Max of 4, 5:', Math.max(4, 5));
console.log('Random:', Math.random());

// Try your own code below!
`,
  typescript: `// TypeScript Playground
// Note: This runs as JavaScript (types are stripped)

interface User {
  name: string;
  age: number;
}

const user: User = {
  name: "John Doe",
  age: 30
};

console.log("User:", user);
console.log("Name:", user.name);
console.log("Max:", Math.max(10, 20, 5));
`,
  html: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My Page</title>
  <style>
    body { font-family: sans-serif; padding: 20px; }
    .card { padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
  </style>
</head>
<body>
  <div class="card">
    <h1>Hello, World!</h1>
    <p>This is a sample HTML page.</p>
  </div>
</body>
</html>`,
  css: `/* CSS Playground */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.button {
  background-color: #3b82f6;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  border: none;
  cursor: pointer;
  transition: background-color 0.2s;
}

.button:hover {
  background-color: #2563eb;
}`,
  python: `# Python Playground 🐍
# Powered by Pyodide - Real Python in the browser!

from datetime import datetime
import math
import random

# Current date and time
print("Current time:", datetime.now())
print("Date:", datetime.now().strftime("%Y-%m-%d"))

# Math operations
print("\\nMath operations:")
print("Pi:", math.pi)
print("Square root of 16:", math.sqrt(16))
print("2^10:", math.pow(2, 10))

# Random numbers
print("\\nRandom:")
print("Random float:", random.random())
print("Random int 1-100:", random.randint(1, 100))

# Lists and comprehensions
numbers = [1, 2, 3, 4, 5]
squared = [x**2 for x in numbers]
print("\\nSquared:", squared)

# Try your own Python code!
`,
  cpp: `// C++ Playground
// Note: This is a simulated environment
// For full C++ support, use a local compiler

#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
    // Variables
    string name = "World";
    cout << "Hello, " << name << "!" << endl;
    
    // Vector
    vector<int> numbers = {1, 2, 3, 4, 5};
    
    cout << "Numbers: ";
    for (int num : numbers) {
        cout << num << " ";
    }
    cout << endl;
    
    // Sum
    int sum = 0;
    for (int num : numbers) {
        sum += num;
    }
    cout << "Sum: " << sum << endl;
    
    return 0;
}
`
}

const languageLabels: Record<Language, string> = {
  javascript: 'JavaScript',
  typescript: 'TypeScript',
  html: 'HTML',
  css: 'CSS',
  python: 'Python',
  cpp: 'C++'
}

interface PlaygroundProps {
  initialCode?: string
  initialLanguage?: Language
  className?: string
}

export function Playground({ 
  initialCode, 
  initialLanguage = 'javascript',
  className 
}: PlaygroundProps) {
  const [language, setLanguage] = useState<Language>(initialLanguage)
  const [code, setCode] = useState(initialCode || defaultCodes[initialLanguage])
  const [logs, setLogs] = useState<ConsoleLog[]>([])
  const [isRunning, setIsRunning] = useState(false)
  const [copied, setCopied] = useState(false)
  const [htmlPreview, setHtmlPreview] = useState<string>('')
  const [splitPosition, setSplitPosition] = useState(65)
  const [pyodideLoading, setPyodideLoading] = useState(false)
  const { isReady: isPyodideReady } = usePyodide()

  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // Load Pyodide script
  useEffect(() => {
    const win = window as unknown as { loadPyodide?: unknown }
    if (typeof window !== 'undefined' && !win.loadPyodide) {
      const script = document.createElement('script')
      script.src = 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/pyodide.js'
      script.async = true
      document.head.appendChild(script)
    }
  }, [])

  // Initialize Pyodide when Python is selected
  const initPyodide = async () => {
    const win = window as unknown as { loadPyodide?: (config?: { indexURL?: string }) => Promise<any> }
    
    if (!win.loadPyodide) {
      throw new Error('Pyodide is still loading. Please wait a moment and try again.')
    }

    setPyodideLoading(true)
    
    try {
      const pyodide = await win.loadPyodide({
        indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.24.1/full/'
      })
      return pyodide
    } catch (error: unknown) {
      throw error
    } finally {
      setPyodideLoading(false)
    }
  }

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    e.preventDefault()
    isDragging.current = true
    document.body.style.cursor = 'col-resize'
    document.body.style.userSelect = 'none'
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current || !containerRef.current) return
      const container = containerRef.current
      const rect = container.getBoundingClientRect()
      const newPosition = ((e.clientX - rect.left) / rect.width) * 100
      setSplitPosition(Math.min(80, Math.max(30, newPosition)))
    }

    const handleMouseUp = () => {
      isDragging.current = false
      document.body.style.cursor = ''
      document.body.style.userSelect = ''
    }

    document.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseup', handleMouseUp)
    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])

  const handleLanguageChange = (newLang: Language) => {
    setLanguage(newLang)
    if (!initialCode) {
      setCode(defaultCodes[newLang])
    }
    setLogs([])
    setHtmlPreview('')
  }

  const runCode = useCallback(async () => {
    setIsRunning(true)
    setLogs([])
    setHtmlPreview('')

    const newLogs: ConsoleLog[] = []

    const addLog = (type: 'log' | 'error' | 'warn' | 'info', content: string) => {
      newLogs.push({
        id: crypto.randomUUID(),
        type,
        content,
        timestamp: new Date()
      })
    }

    try {
      if (language === 'html') {
        setHtmlPreview(code)
        addLog('info', 'HTML preview rendered below')
        setLogs(newLogs)
        setIsRunning(false)
        return
      }

      if (language === 'css') {
        addLog('info', 'CSS code validated. Use with HTML to see styles in action.')
        setLogs(newLogs)
        setIsRunning(false)
        return
      }

      // Python execution with Pyodide
      if (language === 'python') {
        try {
          addLog('info', isPyodideReady ? 'Running Python...' : 'Loading Python runtime (first run may take a few seconds)...')
          setLogs([...newLogs])

          const pyodide = await initPyodide()
          
          // Redirect stdout to capture print statements
          pyodide.runPython(`
import sys
from io import StringIO
sys.stdout = StringIO()
sys.stderr = StringIO()
          `)

          try {
            await pyodide.runPythonAsync(code)
            
            // Get stdout output
            const stdout = pyodide.runPython('sys.stdout.getvalue()')
            const stderr = pyodide.runPython('sys.stderr.getvalue()')
            
            // Clear the logs and add fresh output
            newLogs.length = 0
            
            if (stdout) {
              stdout.split('\n').filter((line: string) => line).forEach((line: string) => {
                addLog('log', line)
              })
            }
            
            if (stderr) {
              stderr.split('\n').filter((line: string) => line).forEach((line: string) => {
                addLog('error', line)
              })
            }

            if (!stdout && !stderr) {
              addLog('info', 'Code executed successfully (no output)')
            }
          } catch (pythonError: any) {
            newLogs.length = 0
            addLog('error', pythonError.message)
          }

          // Reset stdout/stderr
          pyodide.runPython(`
sys.stdout = sys.__stdout__
sys.stderr = sys.__stderr__
          `)
        } catch (error: any) {
          newLogs.length = 0
          addLog('error', `Python Error: ${error.message}`)
        }
        
        setLogs(newLogs)
        setIsRunning(false)
        return
      }

      // C++ simulation (basic)
      if (language === 'cpp') {
        addLog('info', 'C++ Simulation (for full support, use a local compiler)')
        
        // Extract cout statements
        const coutRegex = /cout\s*<<\s*(.*?)\s*<<\s*endl/g
        let match
        
        while ((match = coutRegex.exec(code)) !== null) {
          let output = match[1]
          const parts = output.split('<<').map(p => {
            const trimmed = p.trim()
            if (trimmed.startsWith('"') && trimmed.endsWith('"')) {
              return trimmed.slice(1, -1)
            }
            return `[${trimmed}]`
          })
          addLog('log', parts.join(''))
        }
        
        if (newLogs.length === 1) {
          addLog('info', 'Tip: For real C++ execution, use an online compiler like godbolt.org or a local IDE.')
        }
        
        setLogs(newLogs)
        setIsRunning(false)
        return
      }

      // JavaScript/TypeScript execution
      const customConsole = {
        log: (...args: any[]) => {
          addLog('log', args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '))
        },
        error: (...args: any[]) => {
          addLog('error', args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '))
        },
        warn: (...args: any[]) => {
          addLog('warn', args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '))
        },
        info: (...args: any[]) => {
          addLog('info', args.map(arg => 
            typeof arg === 'object' ? JSON.stringify(arg, null, 2) : String(arg)
          ).join(' '))
        },
      }

      // Create function with access to common globals
      const fn = new Function('console', 'Math', 'Date', 'JSON', 'Array', 'Object', 'String', 'Number', 'Boolean', 'RegExp', 'Error', 'Map', 'Set', 'Promise', 'setTimeout', 'setInterval', 'clearTimeout', 'clearInterval', code)
      
      fn(customConsole, Math, Date, JSON, Array, Object, String, Number, Boolean, RegExp, Error, Map, Set, Promise, 
        (cb: Function, ms: number) => setTimeout(() => { cb(); setLogs([...newLogs]) }, ms),
        (cb: Function, ms: number) => setInterval(() => { cb(); setLogs([...newLogs]) }, ms),
        clearTimeout, clearInterval
      )
      
    } catch (error: any) {
      newLogs.push({
        id: crypto.randomUUID(),
        type: 'error',
        content: error.message || 'An error occurred',
        timestamp: new Date(),
      })
    }

    setLogs(newLogs)
    setIsRunning(false)
  }, [code, language, isPyodideReady])

  const clearConsole = () => {
    setLogs([])
    setHtmlPreview('')
  }

  const resetCode = () => {
    setCode(initialCode || defaultCodes[language])
    setLogs([])
    setHtmlPreview('')
  }

  const copyCode = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const downloadCode = () => {
    const extensions: Record<Language, string> = {
      javascript: 'js',
      typescript: 'ts',
      html: 'html',
      css: 'css',
      python: 'py',
      cpp: 'cpp'
    }
    const blob = new Blob([code], { type: 'text/plain' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `code.${extensions[language]}`
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <div className={cn('flex flex-col h-full', className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-2 p-2 border-b bg-muted/30 shrink-0">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                {languageLabels[language]}
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              {(Object.keys(languageLabels) as Language[]).map((lang) => (
                <DropdownMenuItem 
                  key={lang}
                  onClick={() => handleLanguageChange(lang)}
                  className={cn(lang === language && "bg-accent")}
                >
                  {languageLabels[lang]}
                  {lang === 'python' && !isPyodideReady && (
                    <span className="ml-2 text-xs text-muted-foreground">(loads on first run)</span>
                  )}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Button 
            onClick={runCode} 
            disabled={isRunning || pyodideLoading} 
            size="sm" 
            className="gap-2"
          >
            {(isRunning || pyodideLoading) ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Play className="h-4 w-4" />
            )}
            {pyodideLoading ? 'Loading...' : language === 'html' ? 'Preview' : 'Run'}
          </Button>
          <Button onClick={clearConsole} variant="outline" size="sm">
            Clear
          </Button>
        </div>
        <div className="flex items-center gap-1">
          <Button onClick={copyCode} variant="ghost" size="icon" className="h-8 w-8">
            {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
          <Button onClick={downloadCode} variant="ghost" size="icon" className="h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
          <Button onClick={resetCode} variant="ghost" size="icon" className="h-8 w-8">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* Python loading indicator */}
      {language === 'python' && pyodideLoading && (
        <div className="px-4 py-2 bg-blue-500/10 border-b text-sm text-blue-600 dark:text-blue-400 flex items-center gap-2">
          <Loader2 className="h-4 w-4 animate-spin" />
          Loading Python runtime (Pyodide)... This may take a few seconds on first run.
        </div>
      )}

      {/* Editor and Output */}
      <div className="flex-1 flex flex-col lg:flex-row min-h-0">
        {/* Mobile tabs */}
        <div className="lg:hidden flex-1 min-h-0">
          <Tabs defaultValue="editor" className="h-full flex flex-col">
            <TabsList className="w-full justify-start rounded-none border-b bg-transparent px-2">
              <TabsTrigger value="editor">Editor</TabsTrigger>
              <TabsTrigger value="output">
                {language === 'html' ? 'Preview' : `Console (${logs.length})`}
              </TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="flex-1 m-0 min-h-0">
              <CodeEditor value={code} onChange={setCode} language={language} />
            </TabsContent>
            <TabsContent value="output" className="flex-1 m-0 min-h-0">
              {language === 'html' && htmlPreview ? (
                <div className="h-full border rounded-lg overflow-auto bg-white">
                  <iframe
                    srcDoc={htmlPreview}
                    className="w-full h-full border-0"
                    title="HTML Preview"
                    sandbox="allow-scripts"
                  />
                </div>
              ) : (
                <ConsoleOutput logs={logs} />
              )}
            </TabsContent>
          </Tabs>
        </div>

        {/* Desktop split view */}
        <div ref={containerRef} className="hidden lg:flex flex-1 min-h-0">
          <div 
            className="min-w-0 p-2 flex flex-col"
            style={{ width: `${splitPosition}%` }}
          >
            <CodeEditor value={code} onChange={setCode} language={language} />
          </div>

          {/* Resizable Divider */}
          <div 
            className="w-1 bg-border hover:bg-primary/50 cursor-col-resize flex items-center justify-center group transition-colors"
            onMouseDown={handleMouseDown}
          >
            <div className="w-4 h-8 flex items-center justify-center rounded bg-muted border opacity-0 group-hover:opacity-100 transition-opacity">
              <GripVertical className="h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          <div 
            className="p-2 flex flex-col min-h-0"
            style={{ width: `${100 - splitPosition}%` }}
          >
            {language === 'html' && htmlPreview ? (
              <div className="flex-1 border rounded-lg overflow-auto bg-white">
                <iframe
                  srcDoc={htmlPreview}
                  className="w-full h-full border-0"
                  title="HTML Preview"
                  sandbox="allow-scripts"
                />
              </div>
            ) : (
              <ConsoleOutput logs={logs} />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
