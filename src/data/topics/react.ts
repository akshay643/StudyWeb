import { Topic } from '../study-content'

export const reactTopics: Topic[] = [
  {
    id: 'react-basics',
    title: 'React Basics',
    description: 'Learn the fundamentals of React including components, JSX, and props.',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['Components', 'JSX', 'Props', 'State'],
    lessons: [
      {
        id: 'react-intro',
        title: 'Introduction to React',
        content: `# Introduction to React

React is a JavaScript library for building user interfaces.`,
        codeExample: `import React from 'react';

function Welcome() {
  return <h1>Hello, React!</h1>;
}

export default Welcome;`,
        language: 'javascript'
      }
    ]
  }
]
