import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Code2, 
  Terminal, 
  FileCode, 
  Palette, 
  Atom, 
  MessageSquareCode,
  ArrowRight,
  Sparkles,
  BookOpen,
  Zap
} from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Terminal,
    title: 'Interactive Playground',
    description: 'Write and run JavaScript, TypeScript, HTML & CSS directly in your browser.',
    href: '/playground',
    color: 'bg-green-500/10 text-green-500',
  },
  {
    icon: FileCode,
    title: 'JavaScript Mastery',
    description: 'From basics to advanced concepts, master JavaScript step by step.',
    href: '/javascript',
    color: 'bg-yellow-500/10 text-yellow-500',
  },
  {
    icon: Palette,
    title: 'HTML & CSS',
    description: 'Build beautiful, responsive layouts with modern CSS techniques.',
    href: '/html-css',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Atom,
    title: 'React Development',
    description: 'Learn React from fundamentals to advanced patterns and hooks.',
    href: '/react',
    color: 'bg-cyan-500/10 text-cyan-500',
  },
  {
    icon: MessageSquareCode,
    title: 'Interview Prep',
    description: 'Prepare for frontend interviews with curated questions and challenges.',
    href: '/interview',
    color: 'bg-purple-500/10 text-purple-500',
  },
]

export default function HomePage() {
  const navigate = useNavigate()

  const handleNavigate = (path: string) => {
    navigate(path)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b bg-gradient-to-b from-primary/5 via-background to-background">
        {/* <div className="absolute inset-0 bg-grid-pattern opacity-5" /> */}
        <div className="container mx-auto px-4 py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge variant="secondary" className="mb-4">
              <Sparkles className="h-3 w-3 mr-1" />
              Learn Frontend Development
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              Master{' '}
              <span className="text-primary">Frontend Development</span>
              {' '}the Right Way
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Interactive learning platform with hands-on coding exercises, 
              comprehensive study materials, and interview preparation resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={() => handleNavigate('/playground')}>
                <Terminal className="h-5 w-5 mr-2" />
                Try Playground
              </Button>
              <Button size="lg" variant="outline" onClick={() => handleNavigate('/javascript')}>
                <BookOpen className="h-5 w-5 mr-2" />
                Start Learning
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive learning resources designed to take you from beginner to job-ready developer.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card 
                className="h-full hover:shadow-lg transition-all hover:border-primary/50 group cursor-pointer"
                onClick={() => handleNavigate(feature.href)}
              >
                <CardHeader>
                  <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <CardTitle className="flex items-center justify-between">
                    {feature.title}
                    <ArrowRight className="h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t bg-muted/30">
        <div className="container mx-auto px-4 py-16">
          <Card className="bg-gradient-to-r from-primary/10 to-primary/5 border-primary/20">
            <CardContent className="p-8 md:p-12 text-center">
              <Zap className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to Start Coding?
              </h3>
              <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
                Jump into our interactive playground and start experimenting with JavaScript right away.
                No setup required!
              </p>
              <Button size="lg" onClick={() => handleNavigate('/playground')}>
                <Code2 className="h-5 w-5 mr-2" />
                Open Playground
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
