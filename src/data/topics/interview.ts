import { Topic } from '../types'

export const interviewTopics: Topic[] = [
  {
    id: 'interview-js',
    title: 'JavaScript Interview',
    description: 'Common JavaScript interview questions and answers.',
    difficulty: 'intermediate',
    duration: '4 hours',
    topics: ['Closures', 'this keyword', 'Event Loop', 'Hoisting'],
    lessons: [
      {
        id: 'interview-closures',
        title: 'Closures Interview Questions',
        content: `# Closures – Interview Questions

Closures are a fundamental concept in JavaScript that allow functions to remember and access variables from their outer scope even after the outer function has finished executing.

## What is a Closure?

A closure is created when a function is defined inside another function and the inner function uses variables from the outer function.

## Key Points
- A closure is a combination of a function and its lexical environment
- Inner functions can access variables of their outer functions
- Variables are referenced, not copied
- Each closure has its own independent scope`,
        codeExample: `// Classic Question: What will this print?
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var loop:", i), 100);
}
// Answer: 3, 3, 3

// Fix with let
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let loop:", j), 200);
}
// Answer: 0, 1, 2

// Private Counter Question
function createCounter() {
  let count = 0;
  return {
    increment() { return ++count; },
    getCount() { return count; }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.count); // undefined - private!`,
        language: 'javascript'
      },
      // Add remaining interview lessons...
    ]
  },
  {
    id: 'interview-react',
    title: 'React Interview',
    description: 'React-specific interview questions and patterns.',
    difficulty: 'intermediate',
    duration: '3 hours',
    topics: ['Virtual DOM', 'Lifecycle', 'Hooks', 'State Management'],
    lessons: []
  },
  {
    id: 'interview-coding',
    title: 'Coding Challenges',
    description: 'Practice common coding challenges for interviews.',
    difficulty: 'advanced',
    duration: '6 hours',
    topics: ['Arrays', 'Strings', 'Objects', 'Algorithms'],
    lessons: [
      {
        id: 'interview-array-challenges',
        title: 'Array Challenges',
        content: `# Array Coding Challenges

Practice common array manipulation problems.`,
        codeExample: `// Remove Duplicates
const removeDuplicates = arr => [...new Set(arr)];
console.log("Remove duplicates:", removeDuplicates([1,2,2,3,3,3]));

// Find Duplicates
const findDuplicates = arr => {
  const seen = new Set();
  const dupes = new Set();
  arr.forEach(x => seen.has(x) ? dupes.add(x) : seen.add(x));
  return [...dupes];
};
console.log("Find duplicates:", findDuplicates([1,2,2,3,3,4]));

// Array Intersection
const intersection = (a, b) => a.filter(x => new Set(b).has(x));
console.log("Intersection:", intersection([1,2,3], [2,3,4]));

// Flatten Array
const flatten = arr => arr.flat(Infinity);
console.log("Flatten:", flatten([1,[2,[3,[4]]]]));

// Chunk Array
const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};
console.log("Chunk:", chunk([1,2,3,4,5], 2));`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'interview-system',
    title: 'System Design',
    description: 'Frontend system design interview preparation.',
    difficulty: 'advanced',
    duration: '4 hours',
    topics: ['Architecture', 'Performance', 'Scalability', 'Best Practices'],
    lessons: []
  }
]
