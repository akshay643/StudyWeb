import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Lesson, Topic } from '@/data/study-content'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ScrollArea } from '@/components/ui/scroll-area'
import { 
  ChevronLeft, 
  ChevronRight, 
  BookOpen, 
  Code2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react'
import { cn } from '@/lib/utils'
import { motion } from 'framer-motion'

interface LessonViewerProps {
  topic: Topic
  lesson: Lesson
  lessonIndex: number
  basePath: string
}

export function LessonViewer({ topic, lesson, lessonIndex, basePath }: LessonViewerProps) {
  const navigate = useNavigate()
  const [copied, setCopied] = useState(false)

  const prevLesson = topic.lessons[lessonIndex - 1]
  const nextLesson = topic.lessons[lessonIndex + 1]

  const language = lesson.language || 'javascript'

  const copyCode = async () => {
    if (lesson.codeExample) {
      await navigator.clipboard.writeText(lesson.codeExample)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const openInPlayground = () => {
    navigate('/playground', { state: { code: lesson.codeExample, language } })
  }

  const renderContent = (content: string): JSX.Element[] => {
    const elements: JSX.Element[] = []
    const lines = content.split('\n')
    let i = 0
    let elementIndex = 0

    while (i < lines.length) {
      const line = lines[i]

      // Check for fenced code block start (```js, ```javascript, ```typescript, etc.)
      const codeBlockMatch = line.match(/^```(\w*)/)
      if (codeBlockMatch) {
        const lang = codeBlockMatch[1] || 'javascript'
        const codeLines: string[] = []
        i++ // Move past the opening ```

        // Collect lines until closing ```
        while (i < lines.length && !lines[i].startsWith('```')) {
          codeLines.push(lines[i])
          i++
        }
        i++ // Move past the closing ```

        const codeContent = codeLines.join('\n')
        elements.push(
          <div key={elementIndex++} className="my-4">
            <div className="rounded-lg border bg-card overflow-hidden">
              <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
                <div className="flex items-center gap-2">
                  <Code2 className="h-4 w-4 text-muted-foreground" />
                  <Badge variant="secondary" className="text-xs">{lang}</Badge>
                </div>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-7 text-xs gap-1"
                  onClick={() => {
                    navigator.clipboard.writeText(codeContent)
                  }}
                >
                  <Copy className="h-3 w-3" />
                  Copy
                </Button>
              </div>
              <div className="overflow-x-auto">
                <pre className="p-4 text-sm font-mono leading-relaxed">
                  <code>
                    {codeContent.split('\n').map((codeLine, idx) => (
                      <div key={idx} className="table-row">
                        <span className="table-cell pr-4 text-muted-foreground select-none text-right w-8 opacity-50">
                          {idx + 1}
                        </span>
                        <span className="table-cell">
                          {highlightSyntax(codeLine, lang)}
                        </span>
                      </div>
                    ))}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        )
        continue
      }

      // Check for markdown table (line starts with |)
      if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
        const tableLines: string[] = []
        
        // Collect all table lines
        while (i < lines.length && lines[i].trim().startsWith('|') && lines[i].trim().endsWith('|')) {
          tableLines.push(lines[i])
          i++
        }

        // Parse table if we have at least header + separator + one row
        if (tableLines.length >= 2) {
          const parseRow = (row: string): string[] => {
            return row
              .split('|')
              .slice(1, -1) // Remove empty first and last elements
              .map(cell => cell.trim())
          }

          const headerCells = parseRow(tableLines[0])
          // Skip separator row (contains dashes like |---|---|)
          const isSeparator = (row: string) => /^\|[\s\-:]+\|$/.test(row.replace(/\|/g, '|').replace(/[^|\-:\s]/g, ''))
          
          let dataStartIndex = 1
          if (tableLines.length > 1 && isSeparator(tableLines[1])) {
            dataStartIndex = 2
          }

          const bodyRows = tableLines.slice(dataStartIndex).map(parseRow)

          elements.push(
            <div key={elementIndex++} className="my-4 overflow-x-auto">
              <table className="w-full border-collapse border border-border rounded-lg text-sm">
                <thead>
                  <tr className="bg-muted/50">
                    {headerCells.map((cell, cellIdx) => (
                      <th 
                        key={cellIdx} 
                        className="border border-border px-4 py-2 text-left font-semibold"
                      >
                        {renderInlineCode(cell)}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {bodyRows.map((row, rowIdx) => (
                    <tr key={rowIdx} className={rowIdx % 2 === 0 ? 'bg-background' : 'bg-muted/20'}>
                      {row.map((cell, cellIdx) => (
                        <td 
                          key={cellIdx} 
                          className="border border-border px-4 py-2"
                        >
                          {renderInlineCode(cell)}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )
          continue
        }
      }

      // Regular content parsing
      if (line.startsWith('# ')) {
        elements.push(
          <h1 key={elementIndex++} className="text-3xl font-bold mt-8 mb-4 first:mt-0">
            {line.slice(2)}
          </h1>
        )
      } else if (line.startsWith('## ')) {
        elements.push(
          <h2 key={elementIndex++} className="text-2xl font-semibold mt-8 mb-3">
            {line.slice(3)}
          </h2>
        )
      } else if (line.startsWith('### ')) {
        elements.push(
          <h3 key={elementIndex++} className="text-xl font-semibold mt-6 mb-2">
            {line.slice(4)}
          </h3>
        )
      } else if (line.startsWith('- ')) {
        elements.push(
          <li key={elementIndex++} className="ml-6 mb-1 list-disc">
            {renderInlineCode(line.slice(2))}
          </li>
        )
      } else if (line.match(/^\d+\. /)) {
        elements.push(
          <li key={elementIndex++} className="ml-6 mb-1 list-decimal">
            {renderInlineCode(line.replace(/^\d+\. /, ''))}
          </li>
        )
      } else if (line.startsWith('---')) {
        elements.push(
          <hr key={elementIndex++} className="my-6 border-border" />
        )
      } else if (line.trim() === '') {
        elements.push(<div key={elementIndex++} className="h-2" />)
      } else {
        elements.push(
          <p key={elementIndex++} className="mb-3 text-muted-foreground leading-relaxed">
            {renderInlineCode(line)}
          </p>
        )
      }

      i++
    }

    return elements
  }

  const renderInlineCode = (text: string): React.ReactNode => {
    const parts = text.split(/(`[^`]+`)/)
    return parts.map((part, i) => {
      if (part.startsWith('`') && part.endsWith('`')) {
        return (
          <code key={i} className="bg-muted px-1.5 py-0.5 rounded text-sm font-mono text-primary">
            {part.slice(1, -1)}
          </code>
        )
      }
      const boldParts = part.split(/(\*\*[^*]+\*\*)/)
      return boldParts.map((bp, j) => {
        if (bp.startsWith('**') && bp.endsWith('**')) {
          return <strong key={`${i}-${j}`} className="text-foreground font-semibold">{bp.slice(2, -2)}</strong>
        }
        return <span key={`${i}-${j}`}>{bp}</span>
      })
    })
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="h-[calc(100vh-4rem)] flex flex-col"
    >
      {/* Header */}
      <div className="border-b bg-card px-6 py-4 shrink-0">
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
          <BookOpen className="h-4 w-4" />
          <span>{topic.title}</span>
          <ChevronRight className="h-4 w-4" />
          <span className="text-foreground font-medium">{lesson.title}</span>
        </div>
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">{lesson.title}</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 min-h-0 overflow-hidden">
        <ScrollArea className="h-full">
          <div className="p-6 max-w-4xl mx-auto">
            {/* Lesson Content */}
            <div className="prose prose-slate dark:prose-invert max-w-none">
              {renderContent(lesson.content)}
            </div>

            {/* Code Example Block */}
            {lesson.codeExample && (
              <div className="mt-8">
                <div className="rounded-lg border bg-card overflow-hidden">
                  {/* Code Block Header */}
                  <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
                    <div className="flex items-center gap-2">
                      <Code2 className="h-4 w-4 text-muted-foreground" />
                      <span className="text-sm font-medium">Code Example</span>
                      <Badge variant="secondary" className="text-xs">{language}</Badge>
                    </div>
                    <div className="flex items-center gap-1">
                      <Button onClick={copyCode} variant="ghost" size="sm" className="gap-1 h-7 text-xs">
                        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                        {copied ? 'Copied!' : 'Copy'}
                      </Button>
                      <Button onClick={openInPlayground} variant="ghost" size="sm" className="gap-1 h-7 text-xs">
                        <ExternalLink className="h-3 w-3" />
                        Try in Playground
                      </Button>
                    </div>
                  </div>
                  
                  {/* Code Block Content */}
                  <div className="overflow-x-auto">
                    <pre className="p-4 text-sm font-mono leading-relaxed">
                      <code className={cn(
                        "block whitespace-pre",
                        language === 'javascript' && "language-javascript",
                        language === 'typescript' && "language-typescript",
                        language === 'html' && "language-html",
                        language === 'css' && "language-css",
                        language === 'python' && "language-python",
                        language === 'cpp' && "language-cpp"
                      )}>
                        {lesson.codeExample.split('\n').map((line, i) => (
                          <div key={i} className="table-row">
                            <span className="table-cell pr-4 text-muted-foreground select-none text-right w-8">
                              {i + 1}
                            </span>
                            <span className="table-cell">
                              {highlightSyntax(line, language)}
                            </span>
                          </div>
                        ))}
                      </code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>
      </div>

      {/* Navigation Footer - Always at Bottom */}
      <div className="border-t bg-card px-6 py-4 shrink-0">
        <div className="flex items-center justify-between max-w-4xl mx-auto">
          <Button
            variant="outline"
            onClick={() => prevLesson && navigate(`${basePath}/${topic.id}/${prevLesson.id}`)}
            disabled={!prevLesson}
            className="gap-2"
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="hidden sm:inline">{prevLesson?.title || 'Previous'}</span>
            <span className="sm:hidden">Prev</span>
          </Button>
          
          <span className="text-sm text-muted-foreground">
            {lessonIndex + 1} / {topic.lessons.length}
          </span>

          <Button
            onClick={() => nextLesson && navigate(`${basePath}/${topic.id}/${nextLesson.id}`)}
            disabled={!nextLesson}
            className="gap-2"
          >
            <span className="hidden sm:inline">{nextLesson?.title || 'Next'}</span>
            <span className="sm:hidden">Next</span>
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  )
}

// Simple syntax highlighting function
function highlightSyntax(line: string, language: string): React.ReactNode {
  if (!line) return ' '
  
  const keywords: Record<string, string[]> = {
    javascript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'true', 'false', 'null', 'undefined', 'typeof', 'instanceof'],
    js: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'true', 'false', 'null', 'undefined', 'typeof', 'instanceof'],
    typescript: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'true', 'false', 'null', 'undefined', 'interface', 'type', 'extends', 'implements', 'typeof', 'instanceof'],
    ts: ['const', 'let', 'var', 'function', 'return', 'if', 'else', 'for', 'while', 'class', 'import', 'export', 'from', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'true', 'false', 'null', 'undefined', 'interface', 'type', 'extends', 'implements', 'typeof', 'instanceof'],
    python: ['def', 'return', 'if', 'else', 'elif', 'for', 'while', 'class', 'import', 'from', 'try', 'except', 'raise', 'with', 'as', 'True', 'False', 'None', 'and', 'or', 'not', 'in', 'is', 'lambda', 'yield', 'async', 'await'],
    cpp: ['int', 'float', 'double', 'char', 'void', 'bool', 'string', 'return', 'if', 'else', 'for', 'while', 'class', 'struct', 'public', 'private', 'protected', 'include', 'using', 'namespace', 'std', 'cout', 'cin', 'endl', 'true', 'false', 'nullptr', 'new', 'delete'],
  }

  const langKeywords = keywords[language] || keywords.javascript || []

  // Handle comments
  if (line.trim().startsWith('//') || line.trim().startsWith('#')) {
    return <span className="text-muted-foreground italic">{line}</span>
  }

  // Simple tokenization
  const tokens = line.split(/(\s+|[(){}[\];,.<>]|"[^"]*"|'[^']*'|`[^`]*`)/)
  
  return tokens.map((token, i) => {
    // Strings
    if (token.startsWith('"') || token.startsWith("'") || token.startsWith('`')) {
      return <span key={i} className="text-green-600 dark:text-green-400">{token}</span>
    }
    // Numbers
    if (/^\d+$/.test(token)) {
      return <span key={i} className="text-orange-600 dark:text-orange-400">{token}</span>
    }
    // Keywords
    if (langKeywords.includes(token)) {
      return <span key={i} className="text-purple-600 dark:text-purple-400 font-medium">{token}</span>
    }
    // Console, print, etc.
    if (['console', 'print', 'cout', 'log', 'error', 'warn'].includes(token)) {
      return <span key={i} className="text-blue-600 dark:text-blue-400">{token}</span>
    }
    // Default
    return <span key={i}>{token}</span>
  })
}
