import { Topic } from '../types'

export const htmlCssTopics: Topic[] = [
  {
    id: 'html-basics',
    title: 'HTML Fundamentals',
    description: 'Learn the building blocks of web pages with semantic HTML.',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['HTML Structure', 'Semantic Elements', 'Forms', 'Accessibility'],
    lessons: [
      {
        id: 'html-structure',
        title: 'HTML Document Structure',
        content: `# HTML Document Structure

Every HTML document follows a basic structure.

## Essential Elements
- <!DOCTYPE html> - Declares HTML5
- <html> - Root element
- <head> - Metadata container
- <body> - Visible content`,
        codeExample: `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My Website</title>
</head>
<body>
  <header>
    <nav>
      <a href="/">Home</a>
      <a href="/about">About</a>
    </nav>
  </header>
  
  <main>
    <h1>Welcome to My Website</h1>
    <p>This is a paragraph of text.</p>
  </main>
  
  <footer>
    <p>&copy; 2024 My Website</p>
  </footer>
</body>
</html>`,
        language: 'html'
      }
    ]
  },
  {
    id: 'css-basics',
    title: 'CSS Basics',
    description: 'Style your web pages with CSS fundamentals.',
    difficulty: 'beginner',
    duration: '3 hours',
    topics: ['Selectors', 'Box Model', 'Colors & Typography', 'Units'],
    lessons: [
      {
        id: 'css-selectors',
        title: 'CSS Selectors',
        content: `# CSS Selectors

Selectors determine which HTML elements to style.

## Basic Selectors
- Element: p { }
- Class: .classname { }
- ID: #idname { }`,
        codeExample: `/* Element Selector */
p {
  color: #333;
  line-height: 1.6;
}

/* Class Selector */
.highlight {
  background-color: yellow;
  padding: 0.25rem;
}

/* ID Selector */
#main-title {
  font-size: 2.5rem;
  color: #1a1a1a;
}

/* Pseudo-classes */
a:hover {
  color: #3b82f6;
  text-decoration: underline;
}

button:focus {
  outline: 2px solid #3b82f6;
}

li:first-child {
  font-weight: bold;
}`,
        language: 'css'
      }
    ]
  },
  {
    id: 'css-layout',
    title: 'CSS Layout',
    description: 'Master Flexbox and Grid for modern layouts.',
    difficulty: 'intermediate',
    duration: '4 hours',
    topics: ['Flexbox', 'CSS Grid', 'Positioning', 'Responsive Design'],
    lessons: [
      {
        id: 'css-flexbox',
        title: 'Flexbox',
        content: `# Flexbox Layout

Flexbox is a one-dimensional layout method.

## Container Properties
- display: flex
- flex-direction
- justify-content
- align-items`,
        codeExample: `.flex-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.navbar {
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
}

.card-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
}

.card {
  flex: 1 1 300px;
}

.center-content {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}`,
        language: 'css'
      }
    ]
  },
  {
    id: 'css-advanced',
    title: 'Advanced CSS',
    description: 'Animations, transitions, and modern CSS features.',
    difficulty: 'advanced',
    duration: '3 hours',
    topics: ['Animations', 'Transitions', 'CSS Variables', 'Modern Features'],
    lessons: []
  }
]
