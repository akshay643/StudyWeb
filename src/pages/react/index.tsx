import { Routes, Route, useNavigate, useParams } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {  findTopic, findLesson } from '@/data/study-content'
import {reactTopics} from '@/data/topics/react';
import { Clock, ArrowRight, Atom, Play } from 'lucide-react'
import { motion } from 'framer-motion'
import { TopicView } from '@/components/lesson/topic-view'
import { LessonViewer } from '@/components/lesson/lesson-viewer'

const difficultyColors = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'destructive',
} as const

console.log(reactTopics);

function TopicsList() {
  const navigate = useNavigate()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-lg bg-cyan-500/10 flex items-center justify-center">
            <Atom className="h-6 w-6 text-cyan-500" />
          </div>
          <div>
            <h1 className="text-3xl font-bold">React</h1>
            <p className="text-muted-foreground">Build modern user interfaces</p>
          </div>
        </div>
        <p className="text-muted-foreground max-w-3xl">
          Learn React from the ground up. Master components, hooks, state management, 
          and advanced patterns used in production applications.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {reactTopics.map((topic, index) => (
          <motion.div
            key={topic.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <Card 
              className="h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer"
              onClick={() => navigate(`/react/${topic.id}`)}
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
  
  console.log('Looking for topicId:', topicId)
  console.log('Available topics:', reactTopics)
  
  const topic = findTopic('react', topicId || '')
  
  console.log('Found topic:', topic)

  if (!topic) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Topic not found</h1>
        <p className="text-muted-foreground mb-4">Looking for: {topicId}</p>
        <Button onClick={() => navigate('/react')}>Back to React</Button>
      </div>
    )
  }

  return (
    <TopicView
      topic={topic}
      basePath="/react"
      categoryTitle="React"
      onBack={() => navigate('/react')}
    />
  )
}

function LessonPage() {
  const { topicId, lessonId } = useParams()
  const navigate = useNavigate()
  const topic = findTopic('react', topicId || '')
  const lesson = findLesson('react', topicId || '', lessonId || '')

  if (!topic || !lesson) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold mb-4">Lesson not found</h1>
        <Button onClick={() => navigate('/react')}>Back to React</Button>
      </div>
    )
  }

  const lessonIndex = topic.lessons.findIndex(l => l.id === lessonId)

  return (
    <LessonViewer
      topic={topic}
      lesson={lesson}
      lessonIndex={lessonIndex}
      basePath="/react"
    />
  )
}

export default function ReactPage() {
  return (
    <Routes>
      <Route index element={<TopicsList />} />
      <Route path=":topicId" element={<TopicPage />} />
      <Route path=":topicId/:lessonId" element={<LessonPage />} />
    </Routes>
  )
}
