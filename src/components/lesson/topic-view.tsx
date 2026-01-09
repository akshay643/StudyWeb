import { useNavigate } from 'react-router-dom'
import { Topic } from '@/data/study-content'
import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  ArrowLeft, 
  Clock, 
  BookOpen, 
  Play
} from 'lucide-react'
import { motion } from 'framer-motion'

interface TopicViewProps {
  topic: Topic
  basePath: string
  categoryTitle: string
  onBack: () => void
}

export function TopicView({ topic, basePath, categoryTitle, onBack }: TopicViewProps) {
  const navigate = useNavigate()

  const startLesson = (lessonId: string) => {
    navigate(`${basePath}/${topic.id}/${lessonId}`)
  }

  const difficultyVariant = topic.difficulty === 'beginner' ? 'success' : 
                            topic.difficulty === 'intermediate' ? 'warning' : 'destructive'

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="container mx-auto px-4 py-8"
    >
      <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
        <ArrowLeft className="h-4 w-4" />
        Back to {categoryTitle}
      </Button>

      <div className="mb-8">
        <div className="flex items-start justify-between flex-wrap gap-4">
          <div>
            <h1 className="text-3xl font-bold mb-2">{topic.title}</h1>
            <p className="text-muted-foreground max-w-2xl">{topic.description}</p>
          </div>
          <Badge variant={difficultyVariant} className="text-sm">
            {topic.difficulty}
          </Badge>
        </div>

        <div className="flex items-center gap-6 mt-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>{topic.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            <span>{topic.lessons.length} lessons</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mt-4">
          {topic.topics.map((t) => (
            <Badge key={t} variant="outline">{t}</Badge>
          ))}
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold flex items-center gap-2">
          <BookOpen className="h-5 w-5" />
          Lessons
        </h2>

        {topic.lessons.length === 0 ? (
          <Card className="border-dashed">
            <CardContent className="py-12 text-center">
              <p className="text-muted-foreground">
                Lessons for this topic are coming soon!
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="grid gap-4">
            {topic.lessons.map((lesson, index) => (
              <motion.div
                key={lesson.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card 
                  className="hover:shadow-md transition-all hover:border-primary/50 cursor-pointer group"
                  onClick={() => startLesson(lesson.id)}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary font-semibold">
                          {index + 1}
                        </div>
                        <div>
                          <h3 className="font-medium group-hover:text-primary transition-colors">
                            {lesson.title}
                          </h3>
                          {lesson.language && (
                            <Badge variant="secondary" className="mt-1 text-xs">
                              {lesson.language}
                            </Badge>
                          )}
                        </div>
                      </div>
                      <Button variant="ghost" size="icon" className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <Play className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {topic.lessons.length > 0 && (
        <div className="mt-8 flex justify-center">
          <Button 
            size="lg" 
            onClick={() => startLesson(topic.lessons[0].id)}
            className="gap-2"
          >
            <Play className="h-5 w-5" />
            Start Learning
          </Button>
        </div>
      )}
    </motion.div>
  )
}
