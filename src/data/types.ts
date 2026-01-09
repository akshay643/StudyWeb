export interface Lesson {
  id: string
  title: string
  content: string
  codeExample: string
  language: string
}

export interface Topic {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  topics: string[]
  lessons: Lesson[]
}
