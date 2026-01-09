import { Link, useLocation } from 'react-router-dom'
import { ChevronRight, Home } from 'lucide-react'
import { cn } from '@/lib/utils'

const routeNames: Record<string, string> = {
  '': 'Home',
  'playground': 'Playground',
  'javascript': 'JavaScript',
  'html-css': 'HTML & CSS',
  'react': 'React',
  'interview': 'Interview Prep',
  'basics': 'Basics',
  'advanced': 'Advanced',
  'async': 'Async Programming',
  'dom': 'DOM Manipulation',
}

export function BreadcrumbNav() {
  const location = useLocation()
  const pathnames = location.pathname.split('/').filter((x) => x)

  if (pathnames.length === 0) {
    return null
  }

  return (
    <nav className="flex items-center text-sm text-muted-foreground">
      <Link
        to="/"
        className="flex items-center hover:text-foreground transition-colors"
      >
        <Home className="h-4 w-4" />
      </Link>

      {pathnames.map((name, index) => {
        const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`
        const isLast = index === pathnames.length - 1
        const displayName = routeNames[name] || name.charAt(0).toUpperCase() + name.slice(1)

        return (
          <div key={name} className="flex items-center">
            <ChevronRight className="h-4 w-4 mx-2" />
            {isLast ? (
              <span className="font-medium text-foreground">{displayName}</span>
            ) : (
              <Link
                to={routeTo}
                className={cn(
                  "hover:text-foreground transition-colors",
                  isLast && "text-foreground font-medium"
                )}
              >
                {displayName}
              </Link>
            )}
          </div>
        )
      })}
    </nav>
  )
}
