import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import {
  Code2,
  Home,
  Terminal,
  FileCode,
  Palette,
  Atom,
  MessageSquareCode,
  ChevronLeft,
  BookOpen,
  Sparkles,
} from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

interface SidebarProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

const navigation = [
  { name: 'Home', href: '/', icon: Home },
  { name: 'Playground', href: '/playground', icon: Terminal },
]

const studyMaterials = [
  { name: 'JavaScript', href: '/javascript', icon: FileCode, color: 'text-yellow-500' },
  { name: 'HTML & CSS', href: '/html-css', icon: Palette, color: 'text-orange-500' },
  { name: 'React', href: '/react', icon: Atom, color: 'text-cyan-500' },
  { name: 'Interview Prep', href: '/interview', icon: MessageSquareCode, color: 'text-purple-500' },
]

export function Sidebar({ open, onOpenChange }: SidebarProps) {
  const location = useLocation()

  return (
    <>
      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => onOpenChange(false)}
            className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <motion.aside
        initial={false}
        animate={{ width: open ? 280 : 0, opacity: open ? 1 : 0 }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        className={cn(
          "fixed md:relative z-50 h-screen border-r bg-card overflow-hidden",
          "flex flex-col"
        )}
      >
        <div className="flex h-16 items-center justify-between px-4 border-b">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <Code2 className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-bold text-lg">StudyWeb</span>
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => onOpenChange(false)}
            className="h-8 w-8"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
        </div>

        <ScrollArea className="flex-1 px-3 py-4">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive = location.pathname === item.href
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={cn(
                      "w-full justify-start gap-3",
                      isActive && "bg-secondary"
                    )}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>

          <Separator className="my-4" />

          <div className="mb-2 px-2">
            <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider flex items-center gap-2">
              <BookOpen className="h-3 w-3" />
              Study Materials
            </span>
          </div>

          <div className="space-y-1">
            {studyMaterials.map((item) => {
              const isActive = location.pathname.startsWith(item.href)
              return (
                <Link key={item.name} to={item.href}>
                  <Button
                    variant={isActive ? 'secondary' : 'ghost'}
                    className={cn(
                      "w-full justify-start gap-3",
                      isActive && "bg-secondary"
                    )}
                  >
                    <item.icon className={cn("h-4 w-4", item.color)} />
                    {item.name}
                  </Button>
                </Link>
              )
            })}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="rounded-lg bg-gradient-to-r from-primary/10 to-primary/5 p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <span className="font-semibold text-sm">Pro Tip</span>
            </div>
            <p className="text-xs text-muted-foreground">
              Use the Playground to practice code examples from any lesson!
            </p>
          </div>
        </div>
      </motion.aside>
    </>
  )
}
