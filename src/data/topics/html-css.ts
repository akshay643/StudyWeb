import { Topic } from '../study-content'

export const htmlCssTopics: Topic[] = [
  {
    id: 'html-basics',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web pages with HTML.',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['Elements', 'Attributes', 'Semantic HTML', 'Forms'],
    lessons: [
      {
        id: 'html-intro',
        title: 'Introduction to HTML',
        content: `# Introduction to HTML

HTML (HyperText Markup Language) is the standard markup language for creating web pages.`,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>My First Page</title>
</head>
<body>
  <h1>Welcome to HTML</h1>
</body>
</html>`,
        language: 'html'
      }
    ]
  }
]
