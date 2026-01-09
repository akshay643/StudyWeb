import { useLocation } from 'react-router-dom'
import { Playground } from '@/components/playground/playground'
import { Language } from '@/components/playground/code-editor'

export default function PlaygroundPage() {
  const location = useLocation()
  const state = location.state as { code?: string; language?: Language } | null

  return (
    <div className="h-[calc(100vh-4rem)]">
      <Playground 
        initialCode={state?.code} 
        initialLanguage={state?.language || 'javascript'} 
      />
    </div>
  )
}
