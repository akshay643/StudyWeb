import { ScrollArea } from '@/components/ui/scroll-area'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react'

export interface ConsoleLog {
  id: string
  type: 'log' | 'error' | 'warn' | 'info'
  content: string
  timestamp: Date
}

interface ConsoleOutputProps {
  logs: ConsoleLog[]
}

const logIcons = {
  log: null,
  error: AlertCircle,
  warn: AlertTriangle,
  info: Info,
}

const logStyles = {
  log: 'text-foreground',
  error: 'text-red-500 bg-red-500/10',
  warn: 'text-yellow-500 bg-yellow-500/10',
  info: 'text-blue-500 bg-blue-500/10',
}

export function ConsoleOutput({ logs }: ConsoleOutputProps) {
  return (
    <div className="h-full flex flex-col rounded-lg border bg-card">
      <div className="flex items-center justify-between px-4 py-2 border-b bg-muted/50">
        <span className="text-sm font-medium">Console</span>
        <span className="text-xs text-muted-foreground">
          {logs.length} {logs.length === 1 ? 'message' : 'messages'}
        </span>
      </div>
      
      <ScrollArea className="flex-1">
        <div className="p-2 space-y-1 font-mono text-sm">
          {logs.length === 0 ? (
            <div className="flex items-center gap-2 text-muted-foreground p-2">
              <Info className="h-4 w-4" />
              <span>Console output will appear here...</span>
            </div>
          ) : (
            logs.map((log) => {
              const Icon = logIcons[log.type]
              return (
                <div
                  key={log.id}
                  className={cn(
                    'flex items-start gap-2 px-2 py-1.5 rounded',
                    logStyles[log.type]
                  )}
                >
                  {Icon && <Icon className="h-4 w-4 shrink-0 mt-0.5" />}
                  <pre className="whitespace-pre-wrap break-all flex-1">
                    {log.content}
                  </pre>
                  <span className="text-xs text-muted-foreground shrink-0">
                    {log.timestamp.toLocaleTimeString()}
                  </span>
                </div>
              )
            })
          )}
        </div>
      </ScrollArea>
    </div>
  )
}
