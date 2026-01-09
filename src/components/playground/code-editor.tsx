import Editor, { OnMount } from '@monaco-editor/react'
import { useTheme } from '@/hooks/use-theme'
import { useRef, useEffect, useState } from 'react'

export type Language = 'javascript' | 'typescript' | 'html' | 'css' | 'python' | 'cpp'

interface CodeEditorProps {
  value: string
  onChange: (value: string) => void
  language?: Language
  readOnly?: boolean
  height?: string
}

export function CodeEditor({ 
  value, 
  onChange, 
  language = 'javascript',
  readOnly = false,
  height = "100%"
}: CodeEditorProps) {
  const { theme } = useTheme()
  const editorRef = useRef<any>(null)
  const [editorTheme, setEditorTheme] = useState('vs-dark')

  useEffect(() => {
    const getTheme = () => {
      if (theme === 'system') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'vs-dark'
          : 'light'
      }
      return theme === 'dark' ? 'vs-dark' : 'light'
    }
    setEditorTheme(getTheme())
  }, [theme])

  const handleEditorDidMount: OnMount = (editor) => {
    editorRef.current = editor
    if (!readOnly) {
      editor.focus()
    }
  }

  const getMonacoLanguage = (lang: Language): string => {
    const languageMap: Record<Language, string> = {
      javascript: 'javascript',
      typescript: 'typescript',
      html: 'html',
      css: 'css',
      python: 'python',
      cpp: 'cpp'
    }
    return languageMap[lang] || 'javascript'
  }

  return (
    <div className="h-full w-full overflow-hidden rounded-lg border bg-card">
      <Editor
        height={height}
        language={getMonacoLanguage(language)}
        value={value}
        theme={editorTheme}
        onChange={(value) => onChange(value || '')}
        onMount={handleEditorDidMount}
        options={{
          minimap: { enabled: false },
          fontSize: 14,
          lineNumbers: 'on',
          roundedSelection: true,
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 2,
          wordWrap: 'on',
          padding: { top: 16, bottom: 16 },
          fontFamily: 'JetBrains Mono, Menlo, Monaco, Consolas, monospace',
          fontLigatures: true,
          readOnly,
          domReadOnly: readOnly,
        }}
      />
    </div>
  )
}
