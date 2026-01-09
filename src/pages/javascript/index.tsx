import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { findTopic, findLesson } from '@/data/study-content'
import { javascriptTopics } from '@/data/topics/javascript'
import { Clock, ArrowRight, Code, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { TopicView } from '@/components/lesson/topic-view'
import { LessonViewer } from '@/components/lesson/lesson-viewer'

const difficultyColors = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'destructive',
} as const

function TopicsList() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center">
            <Code className="h-6 w-6 text-yellow-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">JavaScript</h1>
            <p className="text-muted-foreground">Master the language of the web</p>
          </div>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          From basics to advanced concepts, learn JavaScript step by step with practical examples
          and hands-on exercises.
        </p>
      </div>

      {/* Topics Grid */}
      <div className="grid md:grid-cols-2 gap-6">
        {javascriptTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              className="h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer"
              onClick={() => navigate(`/javascript/${topic.id}`)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <CardTitle className="text-xl">{topic.title}</CardTitle>
                  <Badge variant={difficultyColors[topic.difficulty]}>
                    {topic.difficulty}
                  </Badge>
                </div>
                <CardDescription>{topic.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{topic.duration}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Play className="h-4 w-4" />
                    <span>{topic.lessons.length} lessons</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {topic.topics.map((t) => (
                    <Badge key={t} variant="outline" className="text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full group-hover:bg-primary group-hover:text-primary-foreground" variant="outline">
                  Start Learning
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

function TopicPage() {
  const { topicId } = useParams()
  const navigate = useNavigate()
  const topic = findTopic('javascript', topicId || '')

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
        <Button onClick={() => navigate('/javascript')}>Back to JavaScript</Button>
      </div>
    )
  }

  return (
    <TopicView
      topic={topic}
      basePath="/javascript"
      categoryTitle="JavaScript"
      onBack={() => navigate('/javascript')}
    />
  )
}

function LessonPage() {
  const { topicId, lessonId } = useParams()
  const navigate = useNavigate()
  const topic = findTopic('javascript', topicId || '')
  const lesson = findLesson('javascript', topicId || '', lessonId || '')

  if (!topic || !lesson) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        <Button onClick={() => navigate('/javascript')}>Back to JavaScript</Button>
      </div>
    )
  }

  const lessonIndex = topic.lessons.findIndex(l => l.id === lessonId)

  return (
    <LessonViewer
      topic={topic}
      lesson={lesson}
      lessonIndex={lessonIndex}
      basePath="/javascript"
    />
  )
}

export default function JavaScriptPage() {
  return (
    <Routes>
      <Route index element={<TopicsList />} />
      <Route path=":topicId" element={<TopicPage />} />
      <Route path=":topicId/:lessonId" element={<LessonPage />} />
    </Routes>
  )
}
