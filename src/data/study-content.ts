export interface Topic {
  id: string
  title: string
  description: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  duration: string
  topics: string[]
  lessons: Lesson[]
}

export interface Lesson {
  id: string
  title: string
  content: string
  codeExample?: string
  language?: 'javascript' | 'typescript' | 'html' | 'css' | 'python' | 'cpp'
}

// Import topics from separate files
import { htmlCssTopics } from './topics/html-css'
import { reactTopics } from './topics/react'
import { javascriptTopics } from './topics/javascript'

// Re-export for convenience
export { htmlCssTopics, reactTopics, javascriptTopics }

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

Closures are a fundamental concept in JavaScript that allow functions to remember and access variables from their outer scope even after the outer function has finished executing. They are widely used in real-world applications and are essential for understanding JavaScript deeply.

## What is a Closure?

A closure is created when a function is defined inside another function and the inner function uses variables from the outer function. The inner function "closes over" the outer variables, meaning it retains access to them even after the outer function returns.

In simple terms, a closure allows a function to remember data from where it was created.

## How Closures Work (Simple Explanation)

When a function runs, JavaScript creates a scope for it. Normally, once the function finishes execution, its variables are removed from memory. However, if an inner function references those variables, JavaScript preserves them in memory. This preserved scope is called the lexical environment, and together with the function, it forms a closure.


## Key Points
- A closure is a combination of a function and its lexical environment
- Inner functions can access variables of their outer functions
- Variables are referenced, not copied
- Each closure has its own independent scope
- Closures are created at function definition time, not execution time
- Closures remain in memory as long as they are referenced

## Simple Example

\`\`\`js
function outer() {
  let message = "Hello World";

  function inner() {
    console.log(message);
  }

  return inner;
}

const greet = outer();
greet(); // Hello World
\`\`\`

Even though the outer function has completed execution, the inner function still has access to the message variable.

---

## Why Closures Are Important

Closures help JavaScript:
- Maintain state between function calls
- Create private variables
- Share data across asynchronous operations
- Build reusable and flexible functions

---

## Common Real-World Use Cases

### Data Encapsulation (Private Variables)

\`\`\`js
function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
counter(); // 1
counter(); // 2
\`\`\`

The count variable cannot be accessed directly from outside, making it private.

---

## Closures in Loops (Very Common Interview Question)

\`\`\`js
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
\`\`\`

### Output:
3  
3  
3  

### Why?
var has function scope, so all callbacks share the same variable reference.

### Correct Approach:

\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
\`\`\`

let creates a new block-scoped variable for each iteration.

---

## Memory Considerations

Closures keep variables in memory, which can lead to memory leaks if not managed properly. Always clean up unused timers, listeners, and references when they are no longer needed.

---

## Interview One-Liners

- A closure is a function that remembers its outer scope
- Closures allow variables to persist after function execution
- Variables in closures are referenced, not copied
- Closures are created when functions are defined

---

## Final Takeaway

Closures are a powerful JavaScript feature that enable state retention, data encapsulation, and reliable asynchronous behavior. Mastering closures is essential for writing clean code and succeeding in JavaScript interviews.
`,
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
    increment() {
      return ++count;
    },
    getCount() {
      return count;
    }
  };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.count); // undefined - private!
`,
  language: 'javascript'
}

,

    {
  id: 'interview-hoisting',
  title: 'Hoisting - Complete Guide',
  content: `# Hoisting – Complete Guide
Hoisting is a fundamental JavaScript concept that explains how variables and functions are processed before code execution. Understanding hoisting helps avoid unexpected bugs and is essential for writing predictable and clean JavaScript code.
## What is Hoisting?
Hoisting is JavaScript’s default behavior of moving **declarations** (not initializations) to the top of their scope during the compilation phase. This means variables and functions can sometimes be used before they are written in the code.
In simple terms, JavaScript **knows about variables and functions before running the code**, but how it treats them depends on how they are declared.

## How Hoisting Works (Simple Explanation)

Before executing your code, JavaScript scans it and registers:
- Variable declarations
- Function declarations
- Class declarations

Only the declarations are hoisted. Assignments and initializations remain in place.

## Key Points
- Function declarations are fully hoisted
- var declarations are hoisted and initialized with undefined
- let and const are hoisted but stay in the Temporal Dead Zone (TDZ)
- Class declarations are hoisted but not initialized
- Function expressions and arrow functions are not hoisted

## Variable Hoisting Explained

### var Hoisting

\`\`\`js
console.log(a); // undefined
var a = 5;
console.log(a); // 5
\`\`\`
JavaScript treats this as:
\`\`\`js
var a;
console.log(a);
a = 5;
\`\`\`

### let and const Hoisting (Temporal Dead Zone)

\`\`\`js
// console.log(b); // ReferenceError
let b = 10;
\`\`\`

Although let and const are hoisted, they cannot be accessed before their declaration. This phase is called the **Temporal Dead Zone (TDZ)**.


## What is Temporal Dead Zone (TDZ)?

TDZ is the time between entering a scope and declaring a variable using let or const. Accessing the variable during this period results in a ReferenceError.


## Function Hoisting

### Function Declaration (Fully Hoisted)

\`\`\`js
console.log(greet()); // "Hello!"

function greet() {
  return "Hello!";
}
\`\`\`

### Function Expression (Not Hoisted)

\`\`\`js
// console.log(sayHi()); // TypeError
var sayHi = function () {
  return "Hi!";
};
\`\`\`

### Arrow Function (Not Hoisted)

\`\`\`js
// console.log(sayBye()); // TypeError
var sayBye = () => "Bye!";
\`\`\`


## Hoisting Priority Rule

When a variable and function share the same name, **function declarations take priority** over variable declarations during hoisting.


## Hoisting Inside Functions

\`\`\`js
var x = 1;

function foo() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}

foo();
\`\`\`

The local variable x is hoisted inside the function, shadowing the global variable.

## Hoisting in Loops (let vs var)

\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}
// Output: 0, 1, 2
\`\`\`

let creates a new binding for each iteration, avoiding common hoisting-related bugs.


## const Hoisting

const behaves like let in terms of hoisting but must be initialized immediately.

\`\`\`js
// console.log(PI); // ReferenceError
const PI = 3.14;
\`\`\`

---

## Class Hoisting

Classes are hoisted but remain in the TDZ until declared.

\`\`\`js
// const obj = new MyClass(); // ReferenceError
class MyClass {
  constructor() {
    this.name = "MyClass";
  }
}
\`\`\`


## Common Interview Questions

- What is hoisting in JavaScript?
- What is the Temporal Dead Zone?
- Difference between var, let, and const hoisting?
- Why do function declarations work before definition?
- Are classes hoisted in JavaScript?


## Interview One-Liners

- Hoisting moves declarations, not initializations
- var is hoisted and initialized with undefined
- let and const are hoisted but inaccessible due to TDZ
- Function declarations are fully hoisted
- Function expressions and arrow functions are not hoisted


## Final Takeaway

Hoisting explains many confusing behaviors in JavaScript. Understanding how different declarations are hoisted helps write safer, cleaner, and more predictable code and is a must-know topic for JavaScript interviews.
`,
  codeExample: `// ===== QUESTION 1: Variable Hoisting =====
console.log(a); // undefined (hoisted, initialized to undefined)
var a = 5;
console.log(a); // 5

// ===== QUESTION 2: Temporal Dead Zone (TDZ) =====
// console.log(b); // ReferenceError
let b = 10;

// TDZ exists from start of block until declaration
function checkTDZ() {
  console.log(typeof undeclaredVar); // "undefined"
  // console.log(typeof x); // ReferenceError
  let x = 10;
  console.log(typeof x); // "number"
}

// ===== QUESTION 3: Function Hoisting =====
console.log(greet()); // "Hello!"

function greet() {
  return "Hello!";
}

// Function Expression - NOT hoisted
// console.log(sayHi()); // TypeError
var sayHi = function () {
  return "Hi!";
};

// Arrow Function - NOT hoisted
// console.log(sayBye()); // TypeError
var sayBye = () => "Bye!";

// ===== QUESTION 4: Tricky Hoisting =====
var x = 1;
function foo() {
  console.log(x); // undefined
  var x = 2;
  console.log(x); // 2
}
foo();

// ===== QUESTION 5: Function vs Variable Hoisting =====
console.log(typeof myFunc); // "function"
var myFunc = "string";
function myFunc() {
  return "function";
}
console.log(typeof myFunc); // "string"

// ===== QUESTION 6: let in loops =====
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}

// ===== QUESTION 7: const Hoisting =====
// console.log(PI); // ReferenceError
const PI = 3.14;

// ===== QUESTION 8: Class Hoisting =====
// const obj = new MyClass(); // ReferenceError
class MyClass {
  constructor() {
    this.name = "MyClass";
  }
}

// ===== QUESTION 9: Hoisting in Block Scope =====
{
  // console.log(blockLet); // ReferenceError
  let blockLet = "block scoped";
  console.log(blockLet);
}
// console.log(blockLet); // ReferenceError
`,
  language: 'javascript'
}
,

    {
  id: 'interview-this-keyword',
  title: 'The "this" Keyword - Mastery',
  content: `# The "this" Keyword – Mastery
The **this** keyword refers to the object that is responsible for executing the current function. Its value is determined at runtime and depends entirely on **how the function is called**, not where it is written. This is one of the most frequently tested concepts in JavaScript interviews.
## How "this" Works
In JavaScript, **this is dynamic**. Each time a function is invoked, JavaScript decides the value of this based on specific binding rules.
## Rules of "this" (Order of Precedence)
1. **new binding** – when a function is called using new, this refers to the newly created object
2. **Explicit binding** – call, apply, or bind explicitly set this
3. **Implicit binding** – when a function is called as an object method
4. **Default binding** – global object (undefined in strict mode)
5. **Arrow functions** – do not have their own this, they inherit it from parent scope
## Default Binding
When a function is called normally, this falls back to the default binding.
\`\`\`js
function showThis() {
  console.log(this);
}
showThis();
\`\`\`
In browsers this refers to window, in Node.js it refers to global, and in strict mode it is undefined.

## Implicit Binding
When a function is called as a method of an object, this refers to that object.
\`\`\`js
const person = {
  name: 'John',
  greet() {
    console.log('Hello ' + this.name);
  }
};
person.greet();
\`\`\`
Here, this refers to person because greet is called using person.greet().
## Lost Context (Very Common Interview Question)
\`\`\`js
const greetFunc = person.greet;
greetFunc();
\`\`\`
The context is lost because the function is no longer called as a method of the object. this falls back to default binding.
## Explicit Binding (call, apply, bind)
Explicit binding allows us to manually set the value of this.
\`\`\`js
greetFunc.call(person);
greetFunc.apply(person);
const boundGreet = person.greet.bind(person);
boundGreet();
\`\`\`
call and apply invoke immediately, while bind returns a new function with permanently bound this.
## new Binding
When a function is called with new, JavaScript creates a new object and binds this to it.
\`\`\`js
function User(name) {
  this.name = name;
}
const user = new User('Alice');
console.log(user.name);
\`\`\`
This pattern is commonly used in constructor functions.
## Arrow Functions (Lexical this)
Arrow functions do not create their own this. They inherit this from the surrounding scope.
\`\`\`js
const team = {
  name: 'Dev Team',
  members: ['Alice', 'Bob'],
  showMembers() {
    this.members.forEach(member => {
      console.log(member + ' is in ' + this.name);
    });
  }
};
team.showMembers();
\`\`\`
Arrow functions are useful to avoid context loss in callbacks.
## Problem with Regular Functions Inside Methods
\`\`\`js
const broken = {
  name: 'Team',
  members: ['A', 'B'],
  show() {
    this.members.forEach(function(m) {
      console.log(m + ' in ' + this.name);
    });
  }
};
broken.show();
\`\`\`
Here, this inside the callback refers to the global object, not the parent object.
## Tricky Interview Case: Arrow vs Regular Function
\`\`\`js
const obj = {
  name: 'Object',
  regular() {
    console.log(this.name);
  },
  arrow: () => {
    console.log(this.name);
  }
};
obj.regular();
obj.arrow();
\`\`\`
Regular functions use the calling object as this, arrow functions use lexical this.
## Callback Context Loss
\`\`\`js
const button = {
  text: 'Click me',
  click() {
    console.log(this.text + ' clicked');
  }
};
setTimeout(button.click, 100);
setTimeout(button.click.bind(button), 100);
\`\`\`
Passing a method as a callback loses its context unless bind or arrow functions are used.
## Custom bind Implementation (Advanced Interview Question)
\`\`\`js
Function.prototype.myBind = function(ctx, ...args) {
  const fn = this;
  return function(...newArgs) {
    return fn.apply(ctx, [...args, ...newArgs]);
  };
};
\`\`\`
This demonstrates how bind works internally using closures and apply.
## Interview One-Liners
- this depends on how a function is called
- Arrow functions inherit this from parent scope
- bind permanently sets this
- call and apply invoke immediately
- new creates a new this binding
## Final Takeaway
Understanding the this keyword is essential for avoiding context-related bugs and answering advanced JavaScript interview questions with confidence.
`,
  codeExample: `// Default binding
function showThis() {
  console.log(this);
}
showThis();

// Implicit binding
const person = {
  name: 'John',
  greet() {
    console.log(this.name);
  }
};
person.greet();

// Explicit binding
const greet = person.greet;
greet.call(person);

// new binding
function User(name) {
  this.name = name;
}
const u = new User('Alice');
console.log(u.name);

// Arrow function
const obj = {
  name: 'Obj',
  arrow: () => console.log(this.name)
};
obj.arrow();
`,
  language: 'javascript'
}

,

   {
  id: 'interview-scope',
  title: 'Scope & var/let/const',
  content: `# Scope & var/let/const – Complete Guide
Scope defines where variables and functions are accessible in JavaScript. It controls variable visibility, lifetime, and helps prevent naming conflicts. Understanding scope is essential for writing predictable code and answering JavaScript interview questions.
## What is Scope?
Scope determines the visibility of variables. JavaScript follows lexical scoping, meaning scope is decided by where variables are written in the code.
## Types of Scope
1. Global Scope – variables accessible everywhere
2. Function Scope – variables declared with var inside functions
3. Block Scope – variables declared with let and const inside {}
4. Module Scope – variables scoped to ES modules using import/export
## Global Scope
Variables declared outside functions belong to the global scope. In browsers, var declarations become properties of the window object, while let and const do not. Overusing global scope leads to bugs and conflicts.
## Function Scope
var is function-scoped, not block-scoped. Variables declared with var inside a function are accessible throughout the entire function, even inside blocks.
## Block Scope
let and const are block-scoped and exist only within the nearest braces. This prevents accidental overwrites and makes code safer.
## var vs let vs const
| Feature | var | let | const |
| Scope | Function | Block | Block |
| Hoisting | Yes (undefined) | Yes (TDZ) | Yes (TDZ) |
| Redeclaration | Allowed | Not allowed | Not allowed |
| Reassignment | Allowed | Allowed | Not allowed |
| Global object property | Yes | No | No |
## Hoisting and Temporal Dead Zone
var is hoisted and initialized with undefined. let and const are hoisted but remain in the Temporal Dead Zone until declared, causing ReferenceError if accessed early.
## const Does Not Mean Immutable
const prevents reassignment but allows mutation of objects and arrays. True immutability requires Object.freeze.
## Scope Chain
When accessing a variable, JavaScript first looks in the current scope, then outer scopes, until it reaches the global scope. This lookup process is called the scope chain.
## Lexical Scope
Lexical scope means a function remembers variables from where it was defined, not where it is called. This concept is fundamental to closures.
## Variable Shadowing
Shadowing happens when a variable in an inner scope has the same name as one in an outer scope. The inner variable takes precedence within its scope.
## IIFE and Scope Isolation
Before ES6 modules, IIFEs were used to create private scopes and avoid polluting the global namespace.
## Interview One-Liners
- Scope defines where variables are accessible
- JavaScript uses lexical scoping
- var is function-scoped, let and const are block-scoped
- const prevents reassignment, not mutation
- Scope chain controls variable lookup
## Final Takeaway
Mastering scope and var/let/const behavior helps prevent bugs, improves code clarity, and is critical for JavaScript interviews.`,
  codeExample: `// GLOBAL SCOPE
var globalVar = 'global var';
let globalLet = 'global let';
console.log(window.globalVar);
console.log(window.globalLet);
// FUNCTION SCOPE
function testVar() {
  var x = 1;
  if (true) {
    var x = 2;
    console.log(x);
  }
  console.log(x);
}
function testLet() {
  let x = 1;
  if (true) {
    let x = 2;
    console.log(x);
  }
  console.log(x);
}
// BLOCK SCOPE
{
  var blockVar = 'I escape blocks';
  let blockLet = 'I stay in blocks';
  const blockConst = 'Me too';
}
console.log(blockVar);
// CONST MUTABILITY
const obj = { name: 'John' };
obj.name = 'Jane';
console.log(obj);
const arr = [1, 2, 3];
arr.push(4);
console.log(arr);
// IMMUTABILITY
const frozen = Object.freeze({ name: 'John' });
frozen.name = 'Jane';
console.log(frozen.name);
// REDECLARATION
var a = 1;
var a = 2;
let b = 1;
// SCOPE CHAIN
const globalVal = 'global';
function outer() {
  const outerVal = 'outer';
  function inner() {
    const innerVal = 'inner';
    console.log(globalVal, outerVal, innerVal);
  }
  inner();
}
outer();
// LEXICAL SCOPE
function createFunctions() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(() => i);
  }
  return funcs;
}
const functions = createFunctions();
console.log(functions[0](), functions[1](), functions[2]());
// SHADOWING
const x = 10;
function shadow() {
  const x = 20;
  console.log(x);
  if (true) {
    const x = 30;
    console.log(x);
  }
  console.log(x);
}
shadow();
console.log(x);
// IIFE
(function() {
  var privateVar = 'private';
  console.log(privateVar);
})();`,
  language: 'javascript'
}

,

    // ==========================================
    // SECTION 2: ASYNCHRONOUS JAVASCRIPT
    // ==========================================
    {
  id: 'interview-event-loop',
  title: 'Event Loop & Concurrency',
  content: `# Event Loop & Concurrency – Complete Guide
The Event Loop is the core mechanism that allows JavaScript to handle asynchronous operations despite being single-threaded. It decides the execution order of synchronous code, promises, timers, and async callbacks. Understanding the event loop is critical for predicting output-based interview questions.
## What is the Event Loop?
The event loop is a continuous process that monitors the call stack and task queues. When the call stack becomes empty, the event loop pushes queued tasks into the stack for execution.
## Why Event Loop Exists
JavaScript runs on a single thread, meaning it can execute only one task at a time. The event loop enables non-blocking behavior by offloading asynchronous tasks and executing them later.
## Main Components
1. Call Stack – Executes synchronous code line by line
2. Web APIs – Browser or Node APIs that handle async operations
3. Microtask Queue – Promise callbacks, queueMicrotask, MutationObserver
4. Macrotask Queue – setTimeout, setInterval, I/O, UI events
## Execution Order Rule
1. Execute all synchronous code in Call Stack
2. Execute all Microtasks until the queue is empty
3. Execute one Macrotask
4. Repeat the cycle
## Key Interview Rule
All microtasks are executed completely before moving to the next macrotask.
## Microtasks
Microtasks have higher priority than macrotasks. Promise.then, async/await continuation, and queueMicrotask are microtasks.
## Macrotasks
Macrotasks include setTimeout, setInterval, setImmediate, I/O callbacks, and UI events.
## Async/Await and Event Loop
async functions execute synchronously until the first await. After await, the remaining code is scheduled as a microtask.
## requestAnimationFrame
requestAnimationFrame runs before the browser repaint and after microtasks. Its timing can vary depending on rendering cycles.
## Common Interview Traps
- Promises always run before setTimeout
- await pauses execution but does not block the call stack
- Nested promises inside timers still execute before the next macrotask
## Interview One-Liners
- JavaScript is single-threaded but asynchronous
- Microtasks always run before macrotasks
- Promises have higher priority than timers
- async/await is syntax sugar over promises
- The event loop controls execution order
## Final Takeaway
Mastering the event loop allows you to confidently solve output-based questions, avoid race conditions, and write efficient asynchronous JavaScript code.`,
  codeExample: `// BASIC EVENT LOOP
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');
// Output: 1 4 3 2
// COMPLEX ORDER
console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
Promise.resolve().then(() => console.log('Promise 1')).then(() => console.log('Promise 2'));
setTimeout(() => {
  console.log('Timeout 2');
  Promise.resolve().then(() => console.log('Promise inside Timeout'));
}, 0);
Promise.resolve().then(() => console.log('Promise 3'));
console.log('End');
// Output: Start End Promise1 Promise3 Promise2 Timeout1 Timeout2 Promise inside Timeout
// NESTED TASKS
setTimeout(() => {
  console.log('timeout 1');
  setTimeout(() => console.log('timeout 2'), 0);
  Promise.resolve().then(() => console.log('promise in timeout'));
}, 0);
setTimeout(() => console.log('timeout 3'), 0);
// Output: timeout1 promise in timeout timeout3 timeout2
// ASYNC AWAIT
async function async1() {
  console.log('async1 start');
  await async2();
  console.log('async1 end');
}
async function async2() {
  console.log('async2');
}
console.log('script start');
setTimeout(() => console.log('setTimeout'), 0);
async1();
new Promise(resolve => {
  console.log('promise1');
  resolve();
}).then(() => console.log('promise2'));
console.log('script end');
// queueMicrotask
console.log('1');
queueMicrotask(() => console.log('2'));
Promise.resolve().then(() => console.log('3'));
console.log('4');
// requestAnimationFrame
console.log('A');
requestAnimationFrame(() => console.log('rAF'));
setTimeout(() => console.log('timeout'), 0);
Promise.resolve().then(() => console.log('promise'));
console.log('B');`,
  language: 'javascript'
}
,

    {
  id: 'interview-promises',
  title: 'Promises - Complete Guide',
  content: `# Promises – Complete Guide
Promises are a core JavaScript feature used to handle asynchronous operations in a clean and predictable way. They help avoid callback hell and are heavily tested in JavaScript interviews, especially with output-based and event loop questions.
## What is a Promise?
A Promise is an object that represents the eventual completion or failure of an asynchronous operation. It acts as a placeholder for a value that will be available in the future.
## Why Promises Exist
Promises solve problems related to deeply nested callbacks, error handling, and async flow control. They allow chaining, centralized error handling, and better readability.
## Promise States
1. Pending – initial state, neither fulfilled nor rejected
2. Fulfilled – operation completed successfully
3. Rejected – operation failed with an error
A promise can move only once from pending to fulfilled or rejected.
## How Promises Work Internally
When a promise is resolved or rejected, its callbacks are pushed into the microtask queue. These callbacks run after the current call stack finishes but before any macrotasks.
## Core Promise Methods
then() handles successful resolution and returns a new promise
catch() handles errors and rejected promises
finally() runs regardless of success or failure
## Promise Chaining
then() always returns a new promise, allowing multiple asynchronous steps to be chained in sequence. Returning a value passes it to the next then, returning a promise waits for it to resolve.
## Error Handling in Promises
Errors thrown inside then are automatically passed to the nearest catch. A single catch can handle errors from the entire chain.
## Promise.all
Promise.all runs multiple promises in parallel and resolves only when all promises resolve. It fails fast if any promise rejects.
## Promise.allSettled
Promise.allSettled waits for all promises to finish, regardless of success or failure, and returns detailed results for each promise.
## Promise.race
Promise.race resolves or rejects as soon as the first promise settles, regardless of outcome.
## Promise.any
Promise.any resolves as soon as the first promise fulfills. If all promises reject, it throws an AggregateError.
## Promises vs Async/Await
async/await is syntax sugar over promises. await pauses execution of the async function and resumes it as a microtask.
## Common Interview Traps
- Promise callbacks run before setTimeout
- then callbacks are microtasks
- Errors inside then go to catch
- Promise.all fails fast
- Promise.any ignores rejected promises until all fail
## Interview One-Liners
- Promises represent future values
- then returns a new promise
- catch handles rejected promises
- Microtasks have higher priority than timers
- async/await is built on promises
## Final Takeaway
Understanding promises deeply allows you to reason about async execution order, avoid race conditions, and confidently solve JavaScript interview questions.`,
  codeExample: `// CREATING A PROMISE
const promise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) resolve('Data loaded');
    else reject(new Error('Failed to load'));
  }, 1000);
});
promise.then(data => console.log(data)).catch(err => console.error(err)).finally(() => console.log('Cleanup'));
// PROMISE CHAINING
function fetchUser(id) {
  return new Promise(resolve => {
    setTimeout(() => resolve({ id, name: 'John' }), 100);
  });
}
function fetchPosts(userId) {
  return new Promise(resolve => {
    setTimeout(() => resolve([{ id: 1, title: 'Post 1' }]), 100);
  });
}
fetchUser(1).then(user => {
  console.log('User:', user);
  return fetchPosts(user.id);
}).then(posts => {
  console.log('Posts:', posts);
  return posts.length;
}).then(count => console.log('Post count:', count)).catch(err => console.error(err));
// PROMISE.ALL
const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);
Promise.all([p1, p2, p3]).then(values => console.log(values));
const p4 = Promise.reject('Error!');
Promise.all([p1, p4, p3]).catch(err => console.log('Caught:', err));
// PROMISE.ALLSETTLED
Promise.allSettled([p1, p4, p3]).then(results => console.log(results));
// PROMISE.RACE
const slow = new Promise(r => setTimeout(() => r('slow'), 200));
const fast = new Promise(r => setTimeout(() => r('fast'), 100));
Promise.race([slow, fast]).then(result => console.log(result));
// PROMISE.ANY
const fail1 = Promise.reject('fail1');
const fail2 = Promise.reject('fail2');
const success1 = new Promise(r => setTimeout(() => r('success'), 100));
Promise.any([fail1, fail2, success1]).then(result => console.log(result)).catch(err => console.log(err.errors));
// ERROR HANDLING
Promise.resolve().then(() => {
  throw new Error('Error in then');
}).then(() => {
  console.log('This will not run');
}).catch(err => {
  console.log('Caught:', err.message);
  return 'recovered';
}).then(val => console.log('Recovered with:', val));
// ORDER OF EXECUTION
Promise.resolve().then(() => console.log(1)).then(() => console.log(2));
Promise.resolve().then(() => console.log(3)).then(() => console.log(4));
// IMPLEMENT PROMISE.ALL
function myPromiseAll(promises) {
  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;
    if (promises.length === 0) resolve(results);
    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(value => {
        results[index] = value;
        completed++;
        if (completed === promises.length) resolve(results);
      }).catch(reject);
    });
  });
}
// IMPLEMENT PROMISE.RACE
function myPromiseRace(promises) {
  return new Promise((resolve, reject) => {
    promises.forEach(promise => {
      Promise.resolve(promise).then(resolve).catch(reject);
    });
  });
}
// PROMISIFY CALLBACK
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
function callbackFn(a, b, callback) {
  setTimeout(() => callback(null, a + b), 100);
}
const promiseFn = promisify(callbackFn);
promiseFn(1, 2).then(result => console.log(result));`,
  language: 'javascript'
}
,

    {
  id: 'interview-async-await',
  title: 'Async/Await - Mastery',
  content: `# Async/Await – Mastery
Async/await is a modern JavaScript feature built on top of Promises that allows asynchronous code to be written in a synchronous-looking manner. It improves readability, error handling, and control flow and is heavily tested in JavaScript interviews.
## What is Async/Await?
async/await is syntactic sugar over Promises. An async function always returns a Promise, and await pauses the execution of the async function until the awaited Promise settles.
## Why Async/Await Exists
Async/await solves problems related to deeply nested then chains, unclear control flow, and scattered error handling in promise-based code.
## How async Works
When a function is marked async, JavaScript automatically wraps its return value inside a Promise. Returning a value resolves the Promise, and throwing an error rejects it.
## How await Works
await pauses execution of the current async function until the Promise resolves or rejects. It does not block the call stack; instead, it schedules the remaining code as a microtask.
## Execution Order with Async/Await
Code before await runs synchronously. Code after await runs asynchronously as a microtask once the awaited Promise resolves.
## Error Handling
Errors inside async functions should be handled using try/catch. A thrown error inside async behaves like a rejected Promise.
## Sequential vs Parallel Execution
Using await sequentially inside a function runs operations one after another. To run tasks in parallel, Promise.all should be used with await.
## await Limitations
await can only be used inside async functions or at the top level of ES modules. Using await inside forEach does not work as expected.
## Async/Await and Event Loop
await resumes execution via the microtask queue, giving it higher priority than timers like setTimeout.
## Common Interview Traps
- async functions always return Promises
- await does not block the main thread
- forEach does not work with await
- try/catch is required for proper error handling
- async/await is built on Promises
## Interview One-Liners
- async returns a Promise
- await pauses async function execution
- Errors in async reject the Promise
- async/await uses microtasks
- Promise.all enables parallel execution
## Final Takeaway
Mastering async/await helps write clean asynchronous code, understand execution order, and confidently solve output-based JavaScript interview questions.`,
  codeExample: `// BASIC ASYNC AWAIT
async function fetchData() {
  const response = await fetch('https://api.example.com/data');
  const data = await response.json();
  return data;
}
// PROMISE EQUIVALENT
function fetchDataPromise() {
  return fetch('https://api.example.com/data').then(r => r.json());
}
// ERROR HANDLING
async function fetchWithError() {
  try {
    const response = await fetch('https://invalid-url');
    return await response.json();
  } catch (error) {
    console.error(error.message);
    throw error;
  } finally {
    console.log('Cleanup');
  }
}
// PARALLEL VS SEQUENTIAL
async function fetchParallel() {
  const user = await fetchUser(1);
  const posts = await fetchPosts(1);
  const [user2, posts2] = await Promise.all([fetchUser(1), fetchPosts(1)]);
  return { user2, posts2 };
}
// SEQUENTIAL LOOP
async function processSequentially(items) {
  const results = [];
  for (const item of items) {
    results.push(await processItem(item));
  }
  return results;
}
// forEach PITFALL
async function wrongWay(items) {
  items.forEach(async item => {
    await processItem(item);
  });
  console.log('Done');
}
// CORRECT for...of
async function correctWay(items) {
  for (const item of items) {
    await processItem(item);
  }
  console.log('Done');
}
// PROMISE.ALL WAY
async function parallelWay(items) {
  await Promise.all(items.map(item => processItem(item)));
  console.log('Done');
}
// ASYNC IIFE
(async () => {
  const data = await fetchData();
  console.log(data);
})();
// RETURN VALUE
async function getNumber() {
  return 42;
}
getNumber().then(num => console.log(num));
// THROW ERROR
async function throwError() {
  throw new Error('Oops');
}
throwError().catch(err => console.log(err.message));
// AWAIT NON PROMISE
async function awaitNonPromise() {
  const value = await 42;
  console.log(value);
}
// OUTPUT QUESTION
async function foo() {
  console.log('foo start');
  await bar();
  console.log('foo end');
}
async function bar() {
  console.log('bar');
}
console.log('script start');
foo();
console.log('script end');
// ASYNC RETRY
async function retry(fn, retries = 3, delayMs = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (e) {
      if (i === retries - 1) throw e;
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}
// ASYNC DELAY
const delay = ms => new Promise(r => setTimeout(r, ms));
async function delayedLog() {
  console.log('Start');
  await delay(1000);
  console.log('After 1 second');
  await delay(1000);
  console.log('After 2 seconds');
}
// CONCURRENCY LIMIT
async function asyncPool(limit, items, fn) {
  const results = [];
  const executing = [];
  for (const item of items) {
    const p = Promise.resolve().then(() => fn(item));
    results.push(p);
    if (limit <= items.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= limit) await Promise.race(executing);
    }
  }
  return Promise.all(results);
}`,
  language: 'javascript'
}
,
{
  id: 'interview-callbacks',
  title: 'Callbacks & Callback Hell',
  content: `# Callbacks - Complete Interview Guide

## What is a Callback?
A callback is a function passed as an argument to another function, to be executed later (synchronously or asynchronously). The term "callback" refers to the fact that we're "calling back" into our code from within another function.

## Why Callbacks Exist
JavaScript is single-threaded and uses an event-driven, non-blocking I/O model. Callbacks allow us to:
- Handle asynchronous operations without blocking the main thread
- Write code that responds to events (clicks, API responses, timers)
- Create reusable higher-order functions (map, filter, reduce)

## Types of Callbacks
1. Synchronous - Executed immediately within the calling function (Array methods)
2. Asynchronous - Scheduled to execute later via event loop (setTimeout, API calls, file I/O)

## Error-First Pattern (Node.js Convention)
First argument is always the error object, second is the data. If no error occurred, first arg is null. This standardization allows consistent error handling across all async operations.

## Callback Hell (Pyramid of Doom)
Deeply nested callbacks causing:
- Poor readability - code moves horizontally more than vertically
- Difficult debugging - hard to trace execution flow
- Hard to maintain - changes require modifying deeply nested code
- Error handling complexity - try/catch doesn't work with async callbacks
- Tight coupling - each level depends on the previous

## Solutions to Callback Hell
1. Named functions - extract anonymous functions into named ones
2. Modularization - separate concerns into different modules
3. Promises - chain operations instead of nesting
4. Async/Await - write async code that looks synchronous
5. Control flow libraries (async.js) - utilities for managing async operations
6. Event emitters - pub/sub pattern for decoupled communication

---

## BASIC CALLBACK CONCEPT
A callback is simply a function passed to another function as an argument. The receiving function can then "call back" (execute) that function whenever it's appropriate - immediately, after some operation, or in response to an event.

\`\`\`js
// Basic callback example - synchronous execution
// Here, the callback is executed immediately within the greet function
function greet(name, callback) {
  console.log('Hello, ' + name);
  // The callback is invoked after the greeting
  // This allows the caller to define what happens next
  callback();
}
greet('John', function() {
  console.log('Callback executed');
});
// Output: "Hello, John" then "Callback executed"
// The callback runs synchronously - it executes before greet() returns

// Callback with parameters - passing data to the callback
// This pattern allows the function to share computed results with the callback
function calculate(a, b, callback) {
  // The callback receives the two numbers and can perform any operation
  // This makes calculate() extremely flexible - it doesn't need to know
  // what operation will be performed
  const result = callback(a, b);
  console.log('Result:', result);
  return result;
}
// Same function, different callbacks - demonstrating flexibility
calculate(5, 3, (x, y) => x + y); // Result: 8 (addition)
calculate(5, 3, (x, y) => x * y); // Result: 15 (multiplication)
calculate(5, 3, (x, y) => x ** y); // Result: 125 (exponentiation)
// This is the foundation of functional programming in JavaScript
\`\`\`

### Real-world Analogy
Think of ordering food at a restaurant:
1. You place an order (call a function)
2. You give the waiter your table number (pass a callback)
3. The kitchen prepares food (async operation)
4. Waiter brings food to your table (callback is executed)
You don't wait at the counter - you're free to do other things!

---

## SYNCHRONOUS VS ASYNCHRONOUS CALLBACKS
Understanding this difference is CRUCIAL for JavaScript interviews. It's the foundation of how JavaScript handles concurrency.

### Synchronous Callbacks
- Execute immediately, one after another
- Block the execution until complete
- Run on the main thread in the current call stack
- Examples: Array methods (map, filter, forEach, reduce)

### Asynchronous Callbacks
- Scheduled to execute later
- Don't block execution - code continues immediately
- Run after the current call stack is empty
- Examples: setTimeout, setInterval, fetch, event handlers, I/O operations

\`\`\`js
// SYNCHRONOUS CALLBACKS
console.log('Start');
[1, 2, 3].forEach(num => console.log(num)); // Sync callback - runs immediately
console.log('End');
// Output: Start, 1, 2, 3, End (in exact order)
// The forEach callback executes synchronously - the loop completes before 'End' prints

// ASYNCHRONOUS CALLBACKS
console.log('Start');
setTimeout(() => console.log('Timeout'), 0); // Async - even with 0ms delay!
console.log('End');
// Output: Start, End, Timeout
// Even with 0ms delay, setTimeout callback goes to the task queue
// It only executes AFTER the current synchronous code completes

// Detailed comparison showing the execution flow
function syncOperation(callback) {
  console.log('Before callback');
  callback(); // Executes RIGHT NOW, in this exact spot
  console.log('After callback');
}
function asyncOperation(callback) {
  console.log('Before callback');
  setTimeout(callback, 0); // Schedules for LATER, continues immediately
  console.log('After callback');
}
// Sync: Before -> Callback -> After (callback in the middle)
syncOperation(() => console.log('Sync callback'));
// Async: Before -> After -> Callback (callback at the end)
asyncOperation(() => console.log('Async callback'));
\`\`\`

**Why this matters for interviews:** This is the foundation of the JavaScript Event Loop. Understanding this helps you predict code output and debug timing issues.

---

## ERROR-FIRST CALLBACK PATTERN (NODE.JS CONVENTION)
This is the standard pattern used throughout Node.js and many JS libraries.

**Convention:** callback(error, data)
- First parameter is ALWAYS the error (null if no error)
- Second parameter is the result data
- This allows consistent error handling across all async operations

\`\`\`js
function readFile(path, callback) {
  // Simulating async file reading with setTimeout
  setTimeout(() => {
    // Error case: invalid path
    if (!path || path === 'invalid') {
      // Pass error as FIRST argument, data as null
      callback(new Error('File not found'), null);
    } else {
      // Success case: null error, data as SECOND argument
      callback(null, 'File content: Hello World');
    }
  }, 100);
}
// Proper error handling with error-first pattern
readFile('valid.txt', (err, data) => {
  // ALWAYS check for error first
  if (err) {
    console.error('Error:', err.message);
    return; // Early return prevents executing success code
  }
  // Only process data if no error
  console.log('Data:', data);
});
\`\`\`

### Why Error-First?
1. **Consistency** - every callback has the same signature
2. **Forces error handling** - you can't forget to check errors
3. **try/catch doesn't work** with async callbacks
4. **Allows for generic** error handling utilities

\`\`\`js
// More complex example with multiple error conditions
function writeFile(path, content, callback) {
  setTimeout(() => {
    // Validate inputs and provide specific error messages
    if (!path) {
      callback(new Error('Path is required'));
      return; // Always return after calling callback with error
    }
    if (!content) {
      callback(new Error('Content is required'));
      return;
    }
    if (path.includes('..')) {
      callback(new Error('Invalid path: directory traversal not allowed'));
      return;
    }
    // Success - null error, result object
    callback(null, { 
      success: true, 
      bytesWritten: content.length,
      timestamp: Date.now()
    });
  }, 100);
}
writeFile('test.txt', 'Hello', (err, result) => {
  if (err) return console.error(err.message);
  console.log('Written:', result.bytesWritten, 'bytes');
});
\`\`\`

### Common Mistake
Forgetting to return after error callback causes success code to run even after an error!

\`\`\`js
// BAD:
if (err) { callback(err); } // Missing return!
callback(null, data); // This still runs!

// GOOD:
if (err) { return callback(err); } // Return stops execution
callback(null, data); // Only runs if no error
\`\`\`

---

## CALLBACK HELL - THE PROBLEM
Callback Hell (also called "Pyramid of Doom") occurs when we have multiple asynchronous operations that depend on each other's results. Each nested callback adds indentation, making code hard to read and maintain.

\`\`\`js
// Setting up our async functions that simulate API calls
function getUser(id, callback) {
  setTimeout(() => {
    console.log('Fetched user');
    callback({ id, name: 'John', email: 'john@example.com' });
  }, 100);
}
function getPosts(userId, callback) {
  setTimeout(() => {
    console.log('Fetched posts');
    callback([
      { id: 1, title: 'Post 1', userId },
      { id: 2, title: 'Post 2', userId }
    ]);
  }, 100);
}
function getComments(postId, callback) {
  setTimeout(() => {
    console.log('Fetched comments');
    callback([
      { id: 1, text: 'Great post!', postId },
      { id: 2, text: 'Thanks for sharing', postId }
    ]);
  }, 100);
}
function getLikes(commentId, callback) {
  setTimeout(() => {
    console.log('Fetched likes');
    callback({ count: 42, commentId });
  }, 100);
}

// THE PYRAMID OF DOOM - Classic callback hell
// Each operation depends on the previous one's result
// Notice how the code moves more RIGHT than DOWN
getUser(1, (user) => {
  console.log('User:', user.name);
  getPosts(user.id, (posts) => {
    console.log('Posts:', posts.length);
    getComments(posts[0].id, (comments) => {
      console.log('Comments:', comments.length);
      getLikes(comments[0].id, (likes) => {
        console.log('Likes:', likes.count);
        // Imagine adding more levels...
        // The indentation keeps growing
        // Error handling would make this even worse
        // Debugging becomes a nightmare
      });
    });
  });
});
\`\`\`

### Problems with Callback Hell
1. **READABILITY**: Hard to follow the flow of logic
2. **MAINTAINABILITY**: Adding/removing steps requires restructuring
3. **ERROR HANDLING**: Where do errors go? How do we handle them consistently?
4. **REUSABILITY**: Can't easily reuse parts of this chain
5. **TESTING**: Difficult to test individual parts

\`\`\`js
// WITH ERROR HANDLING - The pyramid gets worse!
function getUserWithError(id, callback) {
  setTimeout(() => {
    if (!id) return callback(new Error('ID required'), null);
    callback(null, { id, name: 'John' });
  }, 100);
}
function getPostsWithError(userId, callback) {
  setTimeout(() => {
    if (!userId) return callback(new Error('User ID required'), null);
    callback(null, [{ id: 1, title: 'Post 1' }]);
  }, 100);
}
// Error handling makes callback hell even more painful
// Every level needs its own if (err) check
getUserWithError(1, (err, user) => {
  if (err) {
    console.error('User error:', err.message);
    return; // Must return to prevent continuing
  }
  getPostsWithError(user.id, (err, posts) => {
    if (err) {
      console.error('Posts error:', err.message);
      return;
    }
    getComments(posts[0].id, (comments) => {
      // Even more error handling...
      // The repetition is exhausting
      // Easy to forget error handling at any level
    });
  });
});
// This is why Promises and async/await were introduced!
\`\`\`

---

## SOLUTION 1: NAMED FUNCTIONS
The simplest solution: extract anonymous callbacks into named functions.

### Benefits
- Flattens the pyramid structure
- Functions have descriptive names showing their purpose
- Easier to debug (function names appear in stack traces)
- Functions can be reused elsewhere
- Easier to test individual functions

\`\`\`js
function handleLikes(likes) {
  console.log('Final likes count:', likes.count);
  // Processing is complete
  // In real code, you might update UI or call another callback here
}
function handleComments(comments) {
  console.log('Processing comments:', comments.length);
  // Each function calls the next in the chain
  getLikes(comments[0].id, handleLikes);
}
function handlePosts(posts) {
  console.log('Processing posts:', posts.length);
  getComments(posts[0].id, handleComments);
}
function handleUser(user) {
  console.log('Processing user:', user.name);
  getPosts(user.id, handlePosts);
}
// Now the entry point is clean and simple
getUser(1, handleUser);
// The code flows vertically, not horizontally
// Each function has a single responsibility
// Stack traces will show: handleLikes <- handleComments <- handlePosts <- handleUser
\`\`\`

**Drawback:** Functions are defined in reverse order of execution. You read the definitions bottom-to-top to understand the flow.

---

## SOLUTION 2: MODULARIZATION
Organize related callbacks into service objects or modules. This adds structure and separates concerns. Each service handles one type of entity (users, posts, comments).

\`\`\`js
const UserService = {
  get(id, callback) {
    setTimeout(() => {
      if (!id) return callback(new Error('ID required'), null);
      callback(null, { id, name: 'John', email: 'john@example.com' });
    }, 100);
  },
  update(id, data, callback) {
    setTimeout(() => callback(null, { ...data, id, updated: true }), 100);
  }
};
const PostService = {
  getByUser(userId, callback) {
    setTimeout(() => {
      callback(null, [
        { id: 1, title: 'Post 1', userId },
        { id: 2, title: 'Post 2', userId }
      ]);
    }, 100);
  },
  create(data, callback) {
    setTimeout(() => callback(null, { id: Date.now(), ...data }), 100);
  }
};
const CommentService = {
  getByPost(postId, callback) {
    setTimeout(() => {
      callback(null, [
        { id: 1, text: 'Great!', postId },
        { id: 2, text: 'Thanks!', postId }
      ]);
    }, 100);
  }
};
// Usage is cleaner with clear service names
UserService.get(1, (err, user) => {
  if (err) return console.error(err);
  PostService.getByUser(user.id, (err, posts) => {
    if (err) return console.error(err);
    console.log('Modular approach - User:', user.name, 'Posts:', posts.length);
  });
});
\`\`\`

### Benefits
- Code is organized by domain/feature
- Easy to find related functionality
- Services can be tested independently
- Clear separation of concerns

---

## SOLUTION 3: PROMISIFY CALLBACKS
Convert callback-based functions to Promises. This allows using .then() chains or async/await. Many libraries provide promisify utilities (util.promisify in Node.js).

\`\`\`js
// Generic promisify function for error-first callbacks
// This works with any function that follows the Node.js callback convention
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) => {
      // Call the original function with a callback that resolves/rejects
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
// Example callback function following error-first pattern
function getUserCallback(id, callback) {
  setTimeout(() => {
    if (!id) callback(new Error('ID required'), null);
    else callback(null, { id, name: 'John' });
  }, 100);
}
// Promisify it
const getUserPromise = promisify(getUserCallback);
// Now we can use async/await - much cleaner!
async function fetchUserData() {
  try {
    const user = await getUserPromise(1);
    console.log('User via promise:', user);
    return user;
  } catch (err) {
    console.error('Error:', err.message);
    throw err;
  }
}
\`\`\`

### For Non-Error-First Callbacks
\`\`\`js
// For callbacks that don't use error-first pattern
// (just pass the result directly to callback)
function wrapAsPromise(fn) {
  return function(...args) {
    return new Promise(resolve => {
      fn(...args, resolve);
    });
  };
}
// Promisify our non-error-first callbacks
const getUserP = wrapAsPromise(getUser);
const getPostsP = wrapAsPromise(getPosts);
const getCommentsP = wrapAsPromise(getComments);
// Beautiful async/await code - reads like synchronous code!
async function fetchAll() {
  const user = await getUserP(1);
  const posts = await getPostsP(user.id);
  const comments = await getCommentsP(posts[0].id);
  console.log('Fetched all:', { user, posts, comments });
  return { user, posts, comments };
}
// Compare this to the pyramid of doom above
// Same functionality, infinitely more readable
\`\`\`

---

## SOLUTION 4: CONTROL FLOW PATTERNS
Sometimes we need to manage multiple async operations. These patterns help coordinate callbacks without promises.

### SERIES EXECUTION
Run tasks one after another in order. Each task completes before the next starts. Useful when order matters or tasks depend on previous results.

\`\`\`js
function series(tasks, finalCallback) {
  let index = 0;
  const results = [];
  function next(err, result) {
    if (err) return finalCallback(err);
    // Store result (skip first call which has no result)
    if (index > 0) results.push(result);
    // Check if all tasks complete
    if (index >= tasks.length) {
      return finalCallback(null, results);
    }
    // Execute next task, passing 'next' as the callback
    const task = tasks[index++];
    task(next);
  }
  next(); // Start the chain
}
// Usage - tasks run in order: First, then Second, then Third
series([
  (cb) => setTimeout(() => cb(null, 'First'), 100),
  (cb) => setTimeout(() => cb(null, 'Second'), 50),
  (cb) => setTimeout(() => cb(null, 'Third'), 75)
], (err, results) => {
  console.log('Series results:', results);
  // ['First', 'Second', 'Third'] - always in this order
  // Total time: 100 + 50 + 75 = 225ms
});
\`\`\`

### PARALLEL EXECUTION
Run all tasks simultaneously. Collect results when all complete. Useful for independent operations - faster than series!

\`\`\`js
function parallel(tasks, finalCallback) {
  let completed = 0;
  const results = new Array(tasks.length); // Pre-sized for correct order
  let hasError = false;
  if (tasks.length === 0) {
    return finalCallback(null, []);
  }
  tasks.forEach((task, index) => {
    task((err, result) => {
      // Ignore if already errored
      if (hasError) return;
      if (err) {
        hasError = true;
        return finalCallback(err);
      }
      // Store result at correct index (maintains order)
      results[index] = result;
      completed++;
      // Check if all complete
      if (completed === tasks.length) {
        finalCallback(null, results);
      }
    });
  });
}
// Usage - tasks run simultaneously, results maintain order
parallel([
  (cb) => setTimeout(() => cb(null, 'A'), 300), // Slowest
  (cb) => setTimeout(() => cb(null, 'B'), 100), // Fastest
  (cb) => setTimeout(() => cb(null, 'C'), 200)  // Middle
], (err, results) => {
  console.log('Parallel results:', results);
  // ['A', 'B', 'C'] - order preserved despite different timings
  // Total time: ~300ms (max of all, not sum)
});
\`\`\`

### WATERFALL
Run tasks in series, but pass each result to the next task. Each task receives the result of the previous task. Perfect for dependent operations.

\`\`\`js
function waterfall(tasks, finalCallback) {
  let index = 0;
  function next(err, ...args) {
    if (err) return finalCallback(err);
    // All tasks complete, pass final result
    if (index >= tasks.length) {
      return finalCallback(null, ...args);
    }
    // Run next task with previous results
    const task = tasks[index++];
    task(...args, next);
  }
  next(null); // Start with no initial arguments
}
// Usage - each task receives and transforms the previous result
waterfall([
  (cb) => cb(null, 1),           // Start with 1
  (num, cb) => cb(null, num + 1), // 1 + 1 = 2
  (num, cb) => cb(null, num * 2), // 2 * 2 = 4
  (num, cb) => cb(null, num ** 2) // 4 ** 2 = 16
], (err, result) => {
  console.log('Waterfall result:', result); // 16
});
// These patterns are what async.js library provides
// Now you understand how they work internally!
\`\`\`

---

## HIGHER-ORDER FUNCTIONS WITH CALLBACKS
Higher-order functions either:
1. Take a function as an argument (callbacks)
2. Return a function
3. Both

Array methods are the most common example of callbacks in JavaScript.

\`\`\`js
const numbers = [1, 2, 3, 4, 5];

// MAP - Transform each element using the callback
// Returns a NEW array with transformed values
// Original array is unchanged (immutable operation)
// Callback receives: (element, index, originalArray)
const doubled = numbers.map(function(num, index, arr) {
  // num: current element
  // index: current index
  // arr: the original array
  return num * 2; // Return value becomes the new element
});
console.log('Doubled:', doubled); // [2, 4, 6, 8, 10]
console.log('Original unchanged:', numbers); // [1, 2, 3, 4, 5]

// FILTER - Keep elements that pass a test
// Returns a NEW array with only elements where callback returns true
// Callback should return a boolean
const evens = numbers.filter(num => num % 2 === 0);
console.log('Evens:', evens); // [2, 4]

// More complex filter example
const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 17, active: true },
  { name: 'Bob', age: 30, active: false }
];
const activeAdults = users.filter(user => user.active && user.age >= 18);
console.log('Active adults:', activeAdults); // [{ name: 'John', ... }]

// REDUCE - Accumulate all elements into a single value
// Most powerful array method - can implement map, filter, and more
// Callback receives: (accumulator, currentElement, index, array)
const sum = numbers.reduce((acc, num) => acc + num, 0);
// Step by step: 0+1=1, 1+2=3, 3+3=6, 6+4=10, 10+5=15
console.log('Sum:', sum); // 15

// Reduce to find max
const max = numbers.reduce((acc, num) => num > acc ? num : acc, -Infinity);
console.log('Max:', max); // 5

// Reduce to group items
const items = ['apple', 'banana', 'apple', 'cherry', 'banana', 'apple'];
const counts = items.reduce((acc, item) => {
  acc[item] = (acc[item] || 0) + 1;
  return acc;
}, {});
console.log('Counts:', counts); // { apple: 3, banana: 2, cherry: 1 }

// FIND - Return first element that passes test
// Returns the element itself, or undefined if not found
const firstEven = numbers.find(num => num % 2 === 0);
console.log('First even:', firstEven); // 2

// FINDINDEX - Return index of first element that passes test
// Returns -1 if not found
const firstEvenIndex = numbers.findIndex(num => num % 2 === 0);
console.log('First even index:', firstEvenIndex); // 1

// SOME - Check if at least one element passes test
// Returns true if ANY callback returns true, false otherwise
// Short-circuits: stops as soon as it finds a true
const hasEven = numbers.some(num => num % 2 === 0);
console.log('Has even:', hasEven); // true

// EVERY - Check if all elements pass test
// Returns true only if ALL callbacks return true
// Short-circuits: stops as soon as it finds a false
const allPositive = numbers.every(num => num > 0);
console.log('All positive:', allPositive); // true
const allEven = numbers.every(num => num % 2 === 0);
console.log('All even:', allEven); // false

// FOREACH - Iterate without returning anything
// Used for side effects (logging, updating external variables)
// Returns undefined - can't chain after forEach
numbers.forEach((num, i) => console.log(\`Index \${i}: \${num}\`));

// SORT - Sort array in place using comparison callback
// Comparison callback returns:
//   negative: a comes before b
//   positive: b comes before a
//   zero: order unchanged
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
const sorted = [...unsorted].sort((a, b) => a - b); // Ascending
console.log('Sorted:', sorted); // [1, 1, 2, 3, 4, 5, 6, 9]
const descending = [...unsorted].sort((a, b) => b - a); // Descending
console.log('Descending:', descending); // [9, 6, 5, 4, 3, 2, 1, 1]
\`\`\`

---

## IMPLEMENT ARRAY METHODS FROM SCRATCH
Understanding how these work internally is crucial for interviews. It demonstrates deep understanding of callbacks and iteration.

### Custom MAP Implementation
Key points:
- Create new array (don't modify original)
- Call callback for each element
- Push callback's return value to result
- Handle sparse arrays with 'in' operator

\`\`\`js
function myMap(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    // 'in' checks if index exists (handles sparse arrays)
    // [1, , 3] has no index 1, so we skip it
    if (i in arr) {
      result[i] = callback(arr[i], i, arr);
    }
  }
  return result;
}
console.log(myMap([1, 2, 3], x => x * 2)); // [2, 4, 6]
\`\`\`

### Custom FILTER Implementation
Key points:
- Only push elements where callback returns truthy value
- Result array may be smaller than original

\`\`\`js
function myFilter(arr, callback) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
}
console.log(myFilter([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]
\`\`\`

### Custom REDUCE Implementation
Key points:
- Handle optional initial value
- If no initial value, use first element and start from index 1
- Throw error for empty array with no initial value

\`\`\`js
function myReduce(arr, callback, initialValue) {
  let accumulator;
  let startIndex;
  // Determine starting point and initial accumulator
  if (initialValue !== undefined) {
    accumulator = initialValue;
    startIndex = 0;
  } else {
    // No initial value - use first element
    if (arr.length === 0) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
    accumulator = arr[0];
    startIndex = 1; // Skip first element since it's the initial value
  }
  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
}
console.log(myReduce([1, 2, 3, 4], (a, b) => a + b, 0)); // 10
console.log(myReduce([1, 2, 3, 4], (a, b) => a + b)); // 10 (no initial value)
\`\`\`

### Custom FIND Implementation
Returns first matching element or undefined.

\`\`\`js
function myFind(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      return arr[i]; // Return immediately on first match
    }
  }
  return undefined; // No match found
}
console.log(myFind([1, 2, 3, 4], x => x > 2)); // 3
\`\`\`

### Custom FINDINDEX Implementation
Returns index of first match or -1.

\`\`\`js
function myFindIndex(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      return i; // Return index, not element
    }
  }
  return -1; // Convention: -1 means "not found"
}
console.log(myFindIndex([1, 2, 3, 4], x => x > 2)); // 2
\`\`\`

### Custom SOME Implementation
Returns true if any element passes, false otherwise.

\`\`\`js
function mySome(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && callback(arr[i], i, arr)) {
      return true; // Short-circuit: found one, stop looking
    }
  }
  return false; // None matched
}
console.log(mySome([1, 2, 3], x => x > 2)); // true
\`\`\`

### Custom EVERY Implementation
Returns true only if ALL elements pass.

\`\`\`js
function myEvery(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr && !callback(arr[i], i, arr)) {
      return false; // Short-circuit: found failure, stop looking
    }
  }
  return true; // All passed
}
console.log(myEvery([1, 2, 3], x => x > 0)); // true
\`\`\`

### Custom FOREACH Implementation
No return value - just executes callback for each element.

\`\`\`js
function myForEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      callback(arr[i], i, arr);
    }
  }
  // Returns undefined implicitly
}
\`\`\`

### Custom FLAT Implementation
Flattens nested arrays to specified depth.

\`\`\`js
function myFlat(arr, depth = 1) {
  const result = [];
  function flatten(array, d) {
    for (let i = 0; i < array.length; i++) {
      if (Array.isArray(array[i]) && d > 0) {
        // Recursively flatten with reduced depth
        flatten(array[i], d - 1);
      } else {
        result.push(array[i]);
      }
    }
  }
  flatten(arr, depth);
  return result;
}
console.log(myFlat([1, [2, [3, [4]]]], 1)); // [1, 2, [3, [4]]]
console.log(myFlat([1, [2, [3, [4]]]], 2)); // [1, 2, 3, [4]]
console.log(myFlat([1, [2, [3, [4]]]], Infinity)); // [1, 2, 3, 4]
\`\`\`

### Custom FLATMAP Implementation
Map then flatten by 1 level - more efficient than map().flat().

\`\`\`js
function myFlatMap(arr, callback) {
  return myFlat(myMap(arr, callback), 1);
}
console.log(myFlatMap([1, 2, 3], x => [x, x * 2]));
// [1, 2, 2, 4, 3, 6]
\`\`\`

---

## CALLBACK COMPOSITION PATTERNS
Advanced patterns for combining and enhancing callbacks.

### COMPOSE - Chain Async Callbacks Together
Each callback's result feeds into the next. Similar to waterfall but creates a reusable composed function.

\`\`\`js
function compose(...callbacks) {
  return function(initialValue, finalCallback) {
    function executeNext(index, value) {
      // All callbacks executed, return final result
      if (index >= callbacks.length) {
        return finalCallback(null, value);
      }
      // Execute current callback with current value
      callbacks[index](value, (err, result) => {
        if (err) return finalCallback(err);
        // Move to next callback with this result
        executeNext(index + 1, result);
      });
    }
    executeNext(0, initialValue);
  };
}
// Define individual transformation callbacks
const addOne = (x, cb) => setTimeout(() => cb(null, x + 1), 50);
const double = (x, cb) => setTimeout(() => cb(null, x * 2), 50);
const square = (x, cb) => setTimeout(() => cb(null, x * x), 50);
// Compose them into a single function
const composed = compose(addOne, double, square);
// Use the composed function
composed(3, (err, result) => {
  console.log('Composed result:', result);
  // Step by step: 3 -> 4 (addOne) -> 8 (double) -> 64 (square)
});
\`\`\`

### RETRY PATTERN
Automatically retry failed operations with delay between attempts. Essential for handling flaky network requests or transient errors.

\`\`\`js
function retry(fn, retries, delay, callback) {
  fn((err, result) => {
    // Success - no need to retry
    if (!err) return callback(null, result);
    // Out of retries - return the error
    if (retries <= 0) return callback(err);
    // Retry after delay
    console.log(\`Retrying... \${retries} attempts left\`);
    setTimeout(() => {
      retry(fn, retries - 1, delay, callback);
    }, delay);
  });
}
// Simulate an unreliable operation that fails twice then succeeds
let attempts = 0;
const unreliableOperation = (cb) => {
  attempts++;
  console.log(\`Attempt \${attempts}\`);
  if (attempts < 3) {
    cb(new Error('Random failure'));
  } else {
    cb(null, 'Success!');
  }
};
retry(unreliableOperation, 5, 100, (err, result) => {
  console.log('Retry result:', err?.message || result);
  // Output: Attempt 1, Retry..., Attempt 2, Retry..., Attempt 3, Success!
});
\`\`\`

### TIMEOUT WRAPPER
Ensure callbacks complete within a time limit. Prevents hanging operations from blocking indefinitely.

\`\`\`js
function withTimeout(fn, timeout, callback) {
  let timedOut = false;
  // Set timeout to fire error
  const timer = setTimeout(() => {
    timedOut = true;
    callback(new Error(\`Operation timed out after \${timeout}ms\`));
  }, timeout);
  // Execute the function
  fn((err, result) => {
    // If already timed out, ignore this callback
    if (timedOut) return;
    // Clear timeout and return result
    clearTimeout(timer);
    callback(err, result);
  });
}
// Test with a slow operation
const slowOperation = (cb) => setTimeout(() => cb(null, 'Done'), 2000);
withTimeout(slowOperation, 1000, (err, result) => {
  console.log('Timeout test:', err?.message || result);
  // "Operation timed out after 1000ms" (operation takes 2000ms)
});
\`\`\`

---

## DEBOUNCE AND THROTTLE WITH CALLBACKS
Essential patterns for performance optimization. Often asked in interviews for front-end positions.

### DEBOUNCE
Delays execution until after a quiet period. Only the LAST call in a burst of calls will execute.

**Use case:** Search input - wait until user stops typing.

\`\`\`js
function debounce(callback, delay) {
  let timeoutId;
  return function(...args) {
    // Clear any existing timeout
    clearTimeout(timeoutId);
    // Set new timeout
    timeoutId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  };
}
const debouncedSearch = debounce((query) => {
  console.log('Searching for:', query);
}, 300);
// Simulating rapid typing
debouncedSearch('h');    // Cancelled by next call
debouncedSearch('he');   // Cancelled by next call
debouncedSearch('hel');  // Cancelled by next call
debouncedSearch('hell'); // Cancelled by next call
debouncedSearch('hello'); // This one executes after 300ms
\`\`\`

### DEBOUNCE WITH IMMEDIATE OPTION
Execute immediately on first call, then debounce subsequent calls.

**Use case:** Submit button - prevent double-clicks but respond immediately.

\`\`\`js
function debounceImmediate(callback, delay, immediate = false) {
  let timeoutId;
  return function(...args) {
    const callNow = immediate && !timeoutId;
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) callback.apply(this, args);
    }, delay);
    // Execute immediately if requested and not in debounce period
    if (callNow) callback.apply(this, args);
  };
}
\`\`\`

### THROTTLE
Execute at most once per time interval. FIRST call in each interval executes, subsequent calls are ignored.

**Use case:** Scroll events - update position but not on every pixel.

\`\`\`js
function throttle(callback, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      callback.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}
const throttledScroll = throttle((position) => {
  console.log('Scroll position:', position);
}, 1000);
// Even with 100 calls, only executes once per second
for (let i = 0; i < 100; i++) {
  throttledScroll(i);
}
\`\`\`

### THROTTLE WITH TRAILING CALL
Execute first call, then queue the last call to execute when throttle ends. Ensures you always get the final state.

\`\`\`js
function throttleTrailing(callback, limit) {
  let lastArgs;
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      callback.apply(this, args);
      inThrottle = true;
      setTimeout(() => {
        inThrottle = false;
        // Execute queued call if exists
        if (lastArgs) {
          callback.apply(this, lastArgs);
          lastArgs = null;
        }
      }, limit);
    } else {
      // Queue this call (overwrites previous queued call)
      lastArgs = args;
    }
  };
}
\`\`\`

---

## MEMOIZATION WITH CALLBACKS
Cache expensive async operation results. Avoid redundant computations or API calls.

\`\`\`js
function memoizeAsync(fn) {
  const cache = new Map();
  return function(arg, callback) {
    const key = JSON.stringify(arg);
    // Return cached result if available
    if (cache.has(key)) {
      console.log('Cache hit for:', arg);
      // Use setTimeout to keep it async (consistent behavior)
      return setTimeout(() => callback(null, cache.get(key)), 0);
    }
    // Execute function and cache result
    fn(arg, (err, result) => {
      if (!err) {
        cache.set(key, result);
        console.log('Cached result for:', arg);
      }
      callback(err, result);
    });
  };
}
const expensiveOperation = (n, cb) => {
  console.log('Computing expensive operation for:', n);
  setTimeout(() => cb(null, n * n), 500);
};
const memoized = memoizeAsync(expensiveOperation);
memoized(5, (e, r) => console.log('Result:', r)); // Computes (500ms)
// Later...
memoized(5, (e, r) => console.log('Result:', r)); // From cache (instant)
\`\`\`

---

## EVENT EMITTER PATTERN (Callback Based)
Pub/Sub pattern for decoupled communication. Callbacks are registered as event listeners. This is how Node.js EventEmitter works internally.

\`\`\`js
class EventEmitter {
  constructor() {
    this.events = {}; // Map of event name -> array of callbacks
  }
  // Register a callback for an event
  on(event, callback) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(callback);
    return this; // Allow chaining
  }
  // Remove a callback from an event
  off(event, callback) {
    if (!this.events[event]) return this;
    this.events[event] = this.events[event].filter(cb => cb !== callback);
    return this;
  }
  // Trigger an event - call all registered callbacks
  emit(event, ...args) {
    if (!this.events[event]) return false;
    this.events[event].forEach(callback => callback(...args));
    return true;
  }
  // Register a callback that only fires once
  once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      this.off(event, wrapper); // Remove after first call
    };
    this.on(event, wrapper);
    return this;
  }
}
// Usage example
const emitter = new EventEmitter();
// Register event handlers
emitter.on('data', (data) => console.log('Received:', data));
emitter.on('data', (data) => console.log('Also received:', data));
emitter.once('connect', () => console.log('Connected!'));
// Emit events
emitter.emit('connect'); // "Connected!" - fires once
emitter.emit('connect'); // Nothing - once handler removed
emitter.emit('data', { id: 1 }); // Both handlers fire
\`\`\`

---

## COMMON INTERVIEW QUESTIONS

### Q1: What's the output? (Tests understanding of event loop)
\`\`\`js
console.log('Start');
setTimeout(() => console.log('Timeout 1'), 0);
Promise.resolve().then(() => console.log('Promise'));
setTimeout(() => console.log('Timeout 2'), 0);
console.log('End');
// Answer: Start, End, Promise, Timeout 1, Timeout 2
// Explanation:
// 1. Sync code runs first: "Start", "End"
// 2. Microtasks (Promises) run before macrotasks: "Promise"
// 3. Macrotasks (setTimeout) run in order: "Timeout 1", "Timeout 2"
\`\`\`

### Q2: Implement sequential async execution
\`\`\`js
function fetchSequentially(urls, callback) {
  const results = [];
  function fetchNext(index) {
    if (index >= urls.length) {
      return callback(null, results);
    }
    simulateFetch(urls[index], (err, data) => {
      if (err) return callback(err);
      results.push(data);
      fetchNext(index + 1); // Recursively fetch next
    });
  }
  fetchNext(0);
}
function simulateFetch(url, cb) {
  setTimeout(() => cb(null, \`Data from \${url}\`), 100);
}
\`\`\`

### Q3: Convert any callback function to Promise
\`\`\`js
function callbackToPromise(fn) {
  return (...args) => {
    return new Promise((resolve, reject) => {
      fn(...args, (err, result) => {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}
\`\`\`

### Q4: Implement once() - function that only executes once
\`\`\`js
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result; // Return cached result on subsequent calls
  };
}
const initOnce = once(() => {
  console.log('Initialized!');
  return 'done';
});
initOnce(); // "Initialized!", returns 'done'
initOnce(); // Returns 'done' (no log)
initOnce(); // Returns 'done' (no log)
\`\`\`

### Q5: Implement after() - callback fires after n invocations
\`\`\`js
function after(n, callback) {
  let count = 0;
  return function(...args) {
    count++;
    if (count >= n) {
      return callback.apply(this, args);
    }
  };
}
const afterThree = after(3, () => console.log('Called 3 times!'));
afterThree(); // Nothing (count = 1)
afterThree(); // Nothing (count = 2)
afterThree(); // "Called 3 times!" (count = 3)
afterThree(); // "Called 3 times!" (count = 4, still fires)
\`\`\`

### Q6: Implement before() - callback only fires first n times
\`\`\`js
function before(n, callback) {
  let count = 0;
  let result;
  return function(...args) {
    if (count < n) {
      result = callback.apply(this, args);
      count++;
    }
    return result;
  };
}
const beforeThree = before(3, (x) => x * 2);
console.log(beforeThree(5)); // 10 (fires)
console.log(beforeThree(10)); // 20 (fires)
console.log(beforeThree(15)); // 30 (fires)
console.log(beforeThree(20)); // 30 (returns last result)
\`\`\`

---

## QUICK REFERENCE CHEAT SHEET

| Pattern | Purpose | When to Use |
|---------|---------|-------------|
| Error-First | Consistent error handling | Node.js async operations |
| Named Functions | Flatten callback hell | Multiple nested callbacks |
| Promisify | Convert to Promises | Use async/await with callbacks |
| Series | Sequential execution | Order-dependent operations |
| Parallel | Concurrent execution | Independent operations |
| Waterfall | Pass results through chain | Dependent transformations |
| Debounce | Delay until quiet | Search inputs, resize events |
| Throttle | Limit frequency | Scroll events, rate limiting |
| Memoize | Cache results | Expensive computations |
| Event Emitter | Pub/Sub communication | Decoupled components |

---

## KEY TAKEAWAYS FOR INTERVIEWS

1. **Callbacks are foundational** - They're the basis for Promises and async/await
2. **Understand sync vs async** - This is the foundation of the event loop
3. **Error-first is standard** - Always use this pattern in Node.js
4. **Know how to escape callback hell** - Named functions, Promises, async/await
5. **Implement array methods** - Shows deep understanding of callbacks
6. **Master debounce/throttle** - Essential for front-end performance
7. **Understand event loop** - Predict output of async code
8. **Practice composition** - Combine callbacks effectively`,

  language: 'javascript'
},

    // ==========================================
    // SECTION 3: OBJECTS & PROTOTYPES
    // ==========================================
 {
  id: 'interview-prototypes',
  title: 'Prototypes & Inheritance',
  content: `# Prototypes & Inheritance - Complete Interview Guide

## What is a Prototype?
Every JavaScript object has a hidden internal property called [[Prototype]] (accessed via __proto__ or Object.getPrototypeOf()) that references another object. This creates a chain of objects known as the prototype chain. When you access a property on an object, JavaScript first looks at the object itself, then walks up the prototype chain until it finds the property or reaches null.

## Why Prototypes Matter
JavaScript uses prototypal inheritance, not classical inheritance like Java or C++. Understanding prototypes is essential because:
- It's how JavaScript implements inheritance
- Methods are shared across instances (memory efficient)
- It's the foundation for ES6 classes (which are syntactic sugar)
- Many interview questions test this knowledge

## Key Concepts
1. **[[Prototype]]** - Internal hidden property linking objects
2. **__proto__** - Accessor property to get/set [[Prototype]] (deprecated but widely used)
3. **prototype** - Property on constructor functions, becomes __proto__ of instances
4. **Prototype Chain** - Linked list of objects for property lookup
5. **Object.create()** - Creates object with specified prototype
6. **Constructor Functions** - Functions used with 'new' to create objects
7. **ES6 Classes** - Syntactic sugar over prototype-based inheritance

## The Prototype Chain Lookup
When accessing a property:
1. Check the object itself (own property)
2. Check object's [[Prototype]]
3. Check [[Prototype]]'s [[Prototype]]
4. Continue until property found or reach null
5. Return undefined if not found

---

## PROTOTYPE BASICS
Every object in JavaScript has a prototype. The prototype is another object that the current object inherits properties and methods from. This creates a chain of inheritance.

\`\`\`js
// Creating an object with a prototype
// The 'animal' object will serve as a prototype for other objects
const animal = {
  eats: true,
  walk() {
    console.log('Animal walks');
  },
  sleep() {
    console.log('Animal sleeps');
  }
};

// Creating 'rabbit' with 'animal' as its prototype
// __proto__ is the accessor to set/get the [[Prototype]]
const rabbit = {
  jumps: true,
  __proto__: animal // Sets animal as rabbit's prototype
};

// Property lookup demonstration
console.log(rabbit.jumps); // true - own property (found on rabbit itself)
console.log(rabbit.eats);  // true - inherited from animal prototype
rabbit.walk(); // "Animal walks" - method inherited from animal

// The rabbit doesn't have 'walk' as its own property
// JavaScript looks up the prototype chain and finds it on animal
console.log(rabbit.hasOwnProperty('jumps')); // true - own property
console.log(rabbit.hasOwnProperty('eats'));  // false - inherited
console.log(rabbit.hasOwnProperty('walk'));  // false - inherited

// You can override inherited properties
rabbit.walk = function() {
  console.log('Rabbit hops');
};
rabbit.walk(); // "Rabbit hops" - now uses own property

// The original animal.walk is unchanged
animal.walk(); // "Animal walks"
\`\`\`

### How Property Lookup Works
When you access \`rabbit.eats\`:
1. JavaScript checks if \`rabbit\` has own property \`eats\` → No
2. JavaScript checks \`rabbit.__proto__\` (which is \`animal\`) → Found! Returns \`true\`

\`\`\`js
// Demonstrating the lookup process
const base = { 
  x: 10,
  getX() { return this.x; }
};
const derived = { 
  y: 20,
  __proto__: base 
};
const leaf = { 
  z: 30,
  __proto__: derived 
};

console.log(leaf.z); // 30 - own property
console.log(leaf.y); // 20 - from derived
console.log(leaf.x); // 10 - from base
console.log(leaf.getX()); // 10 - method from base, 'this' is leaf

// 'this' in inherited methods refers to the object that called the method
leaf.x = 100; // Creates own property, doesn't modify base.x
console.log(leaf.getX()); // 100 - now uses leaf.x
console.log(base.x); // 10 - unchanged
\`\`\`

---

## PROTOTYPE CHAIN
The prototype chain is a linked list of objects. Each object's [[Prototype]] points to another object, until the chain ends with null. Object.prototype is typically at the top of the chain (its [[Prototype]] is null).

\`\`\`js
// Building a prototype chain
const grandparent = { 
  a: 1,
  greet() { return 'Hello from grandparent'; }
};
const parent = { 
  b: 2, 
  __proto__: grandparent 
};
const child = { 
  c: 3, 
  __proto__: parent 
};

// Accessing properties through the chain
console.log(child.c); // 3 - own property
console.log(child.b); // 2 - from parent (1 step up)
console.log(child.a); // 1 - from grandparent (2 steps up)
console.log(child.greet()); // "Hello from grandparent"

// Checking the chain
console.log(child.__proto__ === parent); // true
console.log(parent.__proto__ === grandparent); // true
console.log(grandparent.__proto__ === Object.prototype); // true
console.log(Object.prototype.__proto__ === null); // true - end of chain

// The complete chain for 'child':
// child -> parent -> grandparent -> Object.prototype -> null
\`\`\`

### Visualizing the Prototype Chain
\`\`\`js
// Helper function to visualize the chain
function getPrototypeChain(obj) {
  const chain = [];
  let current = obj;
  while (current !== null) {
    chain.push(current);
    current = Object.getPrototypeOf(current);
  }
  chain.push(null);
  return chain;
}

const myObj = { name: 'test' };
console.log(getPrototypeChain(myObj));
// [{ name: 'test' }, Object.prototype, null]

// Arrays have an extra link in the chain
const myArr = [1, 2, 3];
console.log(getPrototypeChain(myArr));
// [[1, 2, 3], Array.prototype, Object.prototype, null]

// Functions also have their own prototype chain
function myFunc() {}
console.log(getPrototypeChain(myFunc));
// [myFunc, Function.prototype, Object.prototype, null]
\`\`\`

### Property Shadowing
When an object has an own property with the same name as a prototype property, the own property "shadows" the inherited one.

\`\`\`js
const proto = {
  value: 100,
  getValue() {
    return this.value;
  }
};

const obj = {
  __proto__: proto
};

console.log(obj.value); // 100 - inherited
console.log(obj.getValue()); // 100

// Creating an own property that shadows the inherited one
obj.value = 200;
console.log(obj.value); // 200 - own property (shadows proto.value)
console.log(proto.value); // 100 - unchanged
console.log(obj.getValue()); // 200 - 'this' refers to obj

// Deleting the own property reveals the inherited one again
delete obj.value;
console.log(obj.value); // 100 - back to inherited value
\`\`\`

---

## __proto__ VS prototype
This is one of the most confusing aspects of JavaScript and a common interview question. They are related but different!

### __proto__ (Dunder Proto)
- Every object has it
- Points to the object's prototype (the object it inherits from)
- Accessor property (getter/setter for [[Prototype]])
- Deprecated in favor of Object.getPrototypeOf() / Object.setPrototypeOf()

### prototype (Property)
- Only exists on functions
- Used when the function is called with 'new'
- Becomes the __proto__ of instances created by that constructor
- Not the function's own prototype (that's __proto__)

\`\`\`js
// Understanding the difference
function Person(name) {
  this.name = name;
}

// 'prototype' is a property on the Person function
// It's an object that will become __proto__ of instances
Person.prototype.greet = function() {
  return 'Hello, ' + this.name;
};

// Create an instance using 'new'
const john = new Person('John');

// john's __proto__ points to Person.prototype
console.log(john.__proto__ === Person.prototype); // true

// Person (the function) also has a __proto__
// It points to Function.prototype (because functions are objects too!)
console.log(Person.__proto__ === Function.prototype); // true

// The prototype object has a 'constructor' property pointing back
console.log(Person.prototype.constructor === Person); // true
console.log(john.constructor === Person); // true (inherited)

// Diagram:
// john (instance)
//   ├── name: 'John' (own property)
//   └── __proto__ ──→ Person.prototype
//                         ├── greet: function
//                         ├── constructor ──→ Person
//                         └── __proto__ ──→ Object.prototype
//                                               └── __proto__ ──→ null
\`\`\`

### Deep Dive: What Happens with 'new'
\`\`\`js
// When you call: new Person('John')
// JavaScript does approximately this:

function simulateNew(Constructor, ...args) {
  // 1. Create a new empty object
  const obj = {};
  
  // 2. Set its __proto__ to Constructor.prototype
  Object.setPrototypeOf(obj, Constructor.prototype);
  // Or: obj.__proto__ = Constructor.prototype;
  
  // 3. Execute Constructor with 'this' bound to new object
  const result = Constructor.apply(obj, args);
  
  // 4. Return the object (unless Constructor returns an object)
  return result instanceof Object ? result : obj;
}

// Usage
const jane = simulateNew(Person, 'Jane');
console.log(jane.name); // 'Jane'
console.log(jane.greet()); // 'Hello, Jane'
console.log(jane instanceof Person); // true
\`\`\`

### Common Confusion Points
\`\`\`js
function Dog(name) {
  this.name = name;
}

const buddy = new Dog('Buddy');

// ❌ WRONG: Trying to access 'prototype' on an instance
console.log(buddy.prototype); // undefined - instances don't have 'prototype'

// ✅ RIGHT: Access __proto__ on instance
console.log(buddy.__proto__ === Dog.prototype); // true

// ❌ WRONG: Confusing function's __proto__ with prototype
console.log(Dog.__proto__ === Dog.prototype); // false!

// ✅ RIGHT: Function's __proto__ is Function.prototype
console.log(Dog.__proto__ === Function.prototype); // true

// Function.prototype vs instance prototype
console.log(Dog.prototype); // { constructor: Dog } - for instances
console.log(Dog.__proto__); // Function.prototype - Dog's own prototype

// The prototype property is for instances, __proto__ is for the object itself
\`\`\`

### Modern Way: Object.getPrototypeOf / Object.setPrototypeOf
\`\`\`js
// __proto__ is deprecated, use these instead:

// Getting the prototype
const proto1 = Object.getPrototypeOf(buddy);
console.log(proto1 === Dog.prototype); // true

// Setting the prototype (not recommended for performance)
const newProto = {
  speak() { return 'Woof!'; }
};
Object.setPrototypeOf(buddy, newProto);
console.log(buddy.speak()); // 'Woof!'

// Check if prototype changed
console.log(Object.getPrototypeOf(buddy) === newProto); // true
console.log(Object.getPrototypeOf(buddy) === Dog.prototype); // false

// Warning: Changing prototype after object creation is slow!
// Prefer Object.create() for setting prototype at creation time
\`\`\`

---

## CONSTRUCTOR FUNCTIONS
Before ES6 classes, constructor functions were the primary way to create objects with shared behavior. Understanding them is crucial for interviews.

\`\`\`js
// A constructor function (by convention, starts with capital letter)
function Animal(name, species) {
  // 'this' refers to the newly created object
  this.name = name;
  this.species = species;
  this.isAlive = true;
  
  // Don't define methods inside constructor!
  // This creates a new function for each instance (inefficient)
  // this.speak = function() { ... } // BAD!
}

// Define methods on the prototype (shared across all instances)
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

Animal.prototype.die = function() {
  this.isAlive = false;
  console.log(this.name + ' has died');
};

// Static method (on constructor, not prototype)
Animal.kingdom = 'Animalia';
Animal.isAnimal = function(obj) {
  return obj instanceof Animal;
};

// Create instances
const lion = new Animal('Leo', 'Lion');
const eagle = new Animal('Eddie', 'Eagle');

// Methods are shared (same function reference)
console.log(lion.speak === eagle.speak); // true - same function!

// Own properties are not shared
console.log(lion.name === eagle.name); // false

lion.speak(); // "Leo makes a sound"
eagle.speak(); // "Eddie makes a sound"

// Static method usage
console.log(Animal.kingdom); // 'Animalia'
console.log(Animal.isAnimal(lion)); // true
console.log(Animal.isAnimal({})); // false
\`\`\`

### Inheritance with Constructor Functions
This is how we implemented inheritance before ES6 classes. It's more verbose but understanding it helps you understand what classes do under the hood.

\`\`\`js
// Parent constructor
function Animal(name) {
  this.name = name;
  this.isAlive = true;
}

Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

Animal.prototype.eat = function() {
  console.log(this.name + ' is eating');
};

// Child constructor
function Dog(name, breed) {
  // Step 1: Call parent constructor with 'this' context
  // This sets up the parent's properties on the new object
  Animal.call(this, name);
  
  // Add child-specific properties
  this.breed = breed;
  this.legs = 4;
}

// Step 2: Set up prototype chain
// Create a new object with Animal.prototype as its prototype
// This becomes Dog.prototype
Dog.prototype = Object.create(Animal.prototype);

// Step 3: Fix the constructor property
// Object.create made Dog.prototype.constructor point to Animal
// We need to fix it to point to Dog
Dog.prototype.constructor = Dog;

// Step 4: Add child-specific methods
Dog.prototype.bark = function() {
  console.log(this.name + ' barks: Woof!');
};

// Step 5: Override parent methods (optional)
Dog.prototype.speak = function() {
  console.log(this.name + ' says: Woof woof!');
};

// Create a Dog instance
const buddy = new Dog('Buddy', 'Golden Retriever');

// Test own properties
console.log(buddy.name);  // 'Buddy' (from Animal via call)
console.log(buddy.breed); // 'Golden Retriever' (from Dog)
console.log(buddy.legs);  // 4 (from Dog)

// Test methods
buddy.speak(); // "Buddy says: Woof woof!" (overridden)
buddy.eat();   // "Buddy is eating" (inherited from Animal)
buddy.bark();  // "Buddy barks: Woof!" (Dog's own)

// Test prototype chain
console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
console.log(buddy instanceof Object); // true

// Verify constructor
console.log(buddy.constructor === Dog); // true
\`\`\`

### Why Each Step Matters
\`\`\`js
// Let's see what happens without each step

// Without Animal.call(this, name):
function BadDog1(name, breed) {
  // Forgot to call parent constructor!
  this.breed = breed;
}
BadDog1.prototype = Object.create(Animal.prototype);
const bad1 = new BadDog1('Rex', 'German Shepherd');
console.log(bad1.name); // undefined! Parent properties not set

// Without Object.create (wrong way):
function BadDog2(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
BadDog2.prototype = Animal.prototype; // WRONG! Same object reference
BadDog2.prototype.bark = function() {
  console.log('Woof!');
};
// Now Animal.prototype also has bark method! We polluted the parent!
console.log(Animal.prototype.bark); // function! BAD!

// Without fixing constructor:
function BadDog3(name, breed) {
  Animal.call(this, name);
  this.breed = breed;
}
BadDog3.prototype = Object.create(Animal.prototype);
// Forgot: BadDog3.prototype.constructor = BadDog3;
const bad3 = new BadDog3('Max', 'Bulldog');
console.log(bad3.constructor === BadDog3); // false!
console.log(bad3.constructor === Animal);  // true (inherited)
\`\`\`

---

## OBJECT.CREATE()
Object.create() is a powerful method that creates a new object with a specified prototype. It's cleaner than manipulating __proto__ and is preferred for prototype-based programming.

\`\`\`js
// Basic usage - create object with specific prototype
const personProto = {
  greet() {
    return 'Hello, I am ' + this.name;
  },
  introduce() {
    return this.greet() + ', aged ' + this.age;
  }
};

// Create an object with personProto as its prototype
const john = Object.create(personProto);
john.name = 'John';
john.age = 30;

console.log(john.greet()); // "Hello, I am John"
console.log(john.introduce()); // "Hello, I am John, aged 30"

// Verify the prototype
console.log(Object.getPrototypeOf(john) === personProto); // true
console.log(john.__proto__ === personProto); // true
\`\`\`

### Object.create with Property Descriptors
The second argument allows you to define properties with full control over their attributes.

\`\`\`js
// Create object with property descriptors
const person = Object.create(personProto, {
  // Each property is defined with a descriptor object
  name: {
    value: 'Jane',
    writable: true,     // Can be changed
    enumerable: true,   // Shows up in for...in
    configurable: true  // Can be deleted/reconfigured
  },
  age: {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: true
  },
  ssn: {
    value: '123-45-6789',
    writable: false,    // Cannot be changed
    enumerable: false,  // Hidden from for...in
    configurable: false // Cannot be deleted/reconfigured
  }
});

console.log(person.name); // 'Jane'
console.log(person.ssn);  // '123-45-6789'

// Test writable
person.name = 'Janet'; // Works
person.ssn = '000-00-0000'; // Silently fails (or throws in strict mode)
console.log(person.name); // 'Janet'
console.log(person.ssn);  // '123-45-6789' (unchanged)

// Test enumerable
console.log(Object.keys(person)); // ['name', 'age'] - ssn not included

for (let key in person) {
  if (person.hasOwnProperty(key)) {
    console.log(key); // 'name', 'age' - ssn hidden
  }
}

// Test configurable
delete person.ssn; // Silently fails
console.log(person.ssn); // '123-45-6789' (still exists)
\`\`\`

### Object.create(null) - Pure Dictionary
Creating an object with no prototype is useful for creating pure key-value stores without inherited properties.

\`\`\`js
// Normal object inherits from Object.prototype
const normalObj = {};
console.log(normalObj.toString); // function (inherited)
console.log(normalObj.hasOwnProperty); // function (inherited)
console.log('toString' in normalObj); // true

// Object with null prototype - pure dictionary
const pureDict = Object.create(null);
console.log(pureDict.toString); // undefined
console.log(pureDict.hasOwnProperty); // undefined
console.log('toString' in pureDict); // false

// Useful for:
// 1. Storing user-provided keys without collision with built-in methods
pureDict['toString'] = 'my value'; // Safe! No collision
pureDict['constructor'] = 'my constructor'; // Safe!

// 2. Slightly faster property access (no prototype chain to check)
// 3. JSON-like data structures

// Common use case: caching/memoization
function createCache() {
  const cache = Object.create(null);
  return {
    get(key) { return cache[key]; },
    set(key, value) { cache[key] = value; },
    has(key) { return key in cache; }
  };
}
\`\`\`

### Factory Pattern with Object.create
\`\`\`js
// Using Object.create for a factory pattern
const vehicleProto = {
  init(make, model) {
    this.make = make;
    this.model = model;
    return this;
  },
  start() {
    console.log(\`\${this.make} \${this.model} is starting\`);
  },
  stop() {
    console.log(\`\${this.make} \${this.model} is stopping\`);
  }
};

// Factory function
function createVehicle(make, model) {
  return Object.create(vehicleProto).init(make, model);
}

const car1 = createVehicle('Toyota', 'Camry');
const car2 = createVehicle('Honda', 'Accord');

car1.start(); // "Toyota Camry is starting"
car2.start(); // "Honda Accord is starting"

// Both share the same prototype
console.log(Object.getPrototypeOf(car1) === vehicleProto); // true
console.log(Object.getPrototypeOf(car2) === vehicleProto); // true
\`\`\`

---

## ES6 CLASSES
ES6 classes are syntactic sugar over prototype-based inheritance. They provide a cleaner, more familiar syntax for creating objects and implementing inheritance.

\`\`\`js
// Class declaration
class Vehicle {
  // Constructor method - called when 'new' is used
  constructor(make, model) {
    this.make = make;
    this.model = model;
    this.isRunning = false;
  }
  
  // Instance methods - added to Vehicle.prototype
  start() {
    this.isRunning = true;
    console.log(\`\${this.make} \${this.model} is starting...\`);
  }
  
  stop() {
    this.isRunning = false;
    console.log(\`\${this.make} \${this.model} has stopped.\`);
  }
  
  // Static method - on Vehicle itself, not prototype
  static compare(v1, v2) {
    return v1.make === v2.make && v1.model === v2.model;
  }
  
  // Static property (ES2022+)
  static category = 'Transportation';
  
  // Getter - accessed like a property
  get description() {
    return \`\${this.make} \${this.model}\`;
  }
  
  // Setter - assigned like a property
  set description(value) {
    const parts = value.split(' ');
    this.make = parts[0];
    this.model = parts[1];
  }
}

// Usage
const car = new Vehicle('Toyota', 'Camry');
car.start(); // "Toyota Camry is starting..."

console.log(car.description); // "Toyota Camry" (getter)
car.description = 'Honda Accord'; // setter
console.log(car.make); // "Honda"

// Static members
console.log(Vehicle.category); // "Transportation"
const car2 = new Vehicle('Honda', 'Accord');
console.log(Vehicle.compare(car, car2)); // true (both now Honda Accord)

// Classes are still functions!
console.log(typeof Vehicle); // "function"
console.log(Vehicle.prototype.start); // function
\`\`\`

### Class Inheritance with extends and super
\`\`\`js
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  
  start() {
    console.log(\`\${this.make} \${this.model} starting...\`);
  }
  
  stop() {
    console.log(\`\${this.make} \${this.model} stopping...\`);
  }
  
  static isVehicle(obj) {
    return obj instanceof Vehicle;
  }
}

// Child class extending Vehicle
class Car extends Vehicle {
  constructor(make, model, doors) {
    // MUST call super() before using 'this' in derived class
    super(make, model); // Calls Vehicle constructor
    this.doors = doors;
    this.wheels = 4;
  }
  
  // Override parent method
  start() {
    super.start(); // Call parent's start method
    console.log('Engine revving...');
    console.log('Ready to drive!');
  }
  
  // Add new method
  honk() {
    console.log('Beep beep!');
  }
  
  // Override getter
  get description() {
    return \`\${this.make} \${this.model} with \${this.doors} doors\`;
  }
}

// Another child class
class Motorcycle extends Vehicle {
  constructor(make, model, type) {
    super(make, model);
    this.type = type; // 'sport', 'cruiser', etc.
    this.wheels = 2;
  }
  
  wheelie() {
    console.log(\`\${this.make} \${this.model} doing a wheelie!\`);
  }
}

// Usage
const myCar = new Car('Toyota', 'Camry', 4);
myCar.start();
// "Toyota Camry starting..."
// "Engine revving..."
// "Ready to drive!"

const myBike = new Motorcycle('Harley', 'Sportster', 'cruiser');
myBike.start(); // "Harley Sportster starting..." (inherited)
myBike.wheelie(); // "Harley Sportster doing a wheelie!"

// Inheritance checks
console.log(myCar instanceof Car);      // true
console.log(myCar instanceof Vehicle);  // true
console.log(myBike instanceof Car);     // false
console.log(Vehicle.isVehicle(myCar));  // true
console.log(Vehicle.isVehicle(myBike)); // true
\`\`\`

### Important: super() Rules
\`\`\`js
class Parent {
  constructor(name) {
    this.name = name;
  }
}

class Child extends Parent {
  constructor(name, age) {
    // ❌ WRONG: Cannot use 'this' before super()
    // this.age = age; // ReferenceError!
    
    // ✅ RIGHT: Call super first
    super(name);
    this.age = age;
  }
}

// If no constructor in child, it implicitly does this:
class ImplicitChild extends Parent {
  // Implicit constructor:
  // constructor(...args) {
  //   super(...args);
  // }
}

const child = new ImplicitChild('Test');
console.log(child.name); // 'Test'
\`\`\`

### Static Members Inheritance
\`\`\`js
class Animal {
  static kingdom = 'Animalia';
  
  static describe() {
    return \`All animals belong to kingdom \${this.kingdom}\`;
  }
}

class Dog extends Animal {
  static species = 'Canis familiaris';
  
  static describe() {
    // Call parent static method
    return super.describe() + \`, Dog species: \${this.species}\`;
  }
}

console.log(Animal.kingdom); // 'Animalia'
console.log(Dog.kingdom);    // 'Animalia' (inherited)
console.log(Dog.species);    // 'Canis familiaris'

console.log(Animal.describe()); 
// "All animals belong to kingdom Animalia"

console.log(Dog.describe());
// "All animals belong to kingdom Animalia, Dog species: Canis familiaris"
\`\`\`

---

## PRIVATE FIELDS AND METHODS (ES2022)
JavaScript now supports truly private class members using the # prefix.

\`\`\`js
class BankAccount {
  // Private fields (must be declared)
  #balance = 0;
  #accountNumber;
  #transactionHistory = [];
  
  // Public field
  ownerName;
  
  constructor(ownerName, accountNumber, initialDeposit = 0) {
    this.ownerName = ownerName;
    this.#accountNumber = accountNumber;
    this.#balance = initialDeposit;
    this.#logTransaction('OPEN', initialDeposit);
  }
  
  // Private method
  #logTransaction(type, amount) {
    this.#transactionHistory.push({
      type,
      amount,
      date: new Date(),
      balance: this.#balance
    });
  }
  
  // Public methods that use private fields
  deposit(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    this.#balance += amount;
    this.#logTransaction('DEPOSIT', amount);
    return this.#balance;
  }
  
  withdraw(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.#logTransaction('WITHDRAW', amount);
    return this.#balance;
  }
  
  // Getter for private field (controlled access)
  get balance() {
    return this.#balance;
  }
  
  // Cannot set balance directly
  // No setter provided
  
  getStatement() {
    // Private fields accessible within class methods
    return {
      account: this.#maskAccountNumber(),
      owner: this.ownerName,
      balance: this.#balance,
      transactions: this.#transactionHistory.length
    };
  }
  
  #maskAccountNumber() {
    const str = String(this.#accountNumber);
    return '****' + str.slice(-4);
  }
  
  // Static private field
  static #bankName = 'MyBank';
  
  // Static private method
  static #generateId() {
    return Math.random().toString(36).substr(2, 9);
  }
  
  static getBankInfo() {
    return {
      name: BankAccount.#bankName,
      id: BankAccount.#generateId()
    };
  }
}

// Usage
const account = new BankAccount('John Doe', 1234567890, 1000);

console.log(account.ownerName);  // 'John Doe' (public)
console.log(account.balance);    // 1000 (via getter)

account.deposit(500);
console.log(account.balance);    // 1500

// ❌ Cannot access private fields from outside
// console.log(account.#balance); // SyntaxError!
// account.#balance = 1000000;    // SyntaxError!
// account.#logTransaction();     // SyntaxError!

// ❌ Private fields don't exist on the object externally
console.log(Object.keys(account)); // ['ownerName']
console.log('balance' in account); // true (the getter)
// console.log('#balance' in account); // SyntaxError

console.log(account.getStatement());
// { account: '****7890', owner: 'John Doe', balance: 1500, transactions: 2 }

console.log(BankAccount.getBankInfo());
// { name: 'MyBank', id: 'abc123xyz' }
\`\`\`

### Private Fields vs Closures
\`\`\`js
// Old way: Using closures for privacy
function createCounter() {
  let count = 0; // Private via closure
  
  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount() { return count; }
  };
}

const counter = createCounter();
console.log(counter.getCount()); // 0
console.log(counter.increment()); // 1
// counter.count is undefined - truly private

// New way: Using private fields
class Counter {
  #count = 0;
  
  increment() { return ++this.#count; }
  decrement() { return --this.#count; }
  get count() { return this.#count; }
}

const counter2 = new Counter();
console.log(counter2.count); // 0
console.log(counter2.increment()); // 1
// counter2.#count is inaccessible
\`\`\`

---

## GETTERS AND SETTERS
Getters and setters allow you to define properties that are computed or validated when accessed or assigned.

\`\`\`js
class Temperature {
  constructor(celsius) {
    this._celsius = celsius; // Convention: underscore for "private"
  }
  
  // Getter - accessed like a property
  get celsius() {
    return this._celsius;
  }
  
  // Setter - assigned like a property
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero!');
    }
    this._celsius = value;
  }
  
  // Computed property via getter
  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }
  
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
  
  get kelvin() {
    return this._celsius + 273.15;
  }
  
  set kelvin(value) {
    this._celsius = value - 273.15;
  }
}

const temp = new Temperature(25);

// Using getters (no parentheses - it's a property)
console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77
console.log(temp.kelvin);     // 298.15

// Using setters (assignment)
temp.fahrenheit = 100;
console.log(temp.celsius);    // 37.777...

temp.celsius = -300; // Error: Temperature below absolute zero!
\`\`\`

### Getters/Setters in Object Literals
\`\`\`js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  
  // Setter
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1] || '';
  }
};

console.log(person.fullName); // "John Doe"
person.fullName = 'Jane Smith';
console.log(person.firstName); // "Jane"
console.log(person.lastName);  // "Smith"
\`\`\`

### Using Object.defineProperty for Getters/Setters
\`\`\`js
const obj = {
  _value: 0
};

Object.defineProperty(obj, 'value', {
  get() {
    console.log('Getting value');
    return this._value;
  },
  set(newValue) {
    console.log('Setting value to', newValue);
    this._value = newValue;
  },
  enumerable: true,
  configurable: true
});

obj.value = 10; // "Setting value to 10"
console.log(obj.value); // "Getting value" then 10
\`\`\`

---

## MIXINS
Mixins are a way to add functionality to classes without using inheritance. JavaScript doesn't support multiple inheritance, but mixins provide a workaround.

\`\`\`js
// Mixin objects containing reusable functionality
const canSwim = {
  swim() {
    console.log(\`\${this.name} is swimming\`);
  }
};

const canFly = {
  fly() {
    console.log(\`\${this.name} is flying\`);
  }
};

const canWalk = {
  walk() {
    console.log(\`\${this.name} is walking\`);
  }
};

// Base class
class Animal {
  constructor(name) {
    this.name = name;
  }
}

// Apply mixins using Object.assign
class Duck extends Animal {
  constructor(name) {
    super(name);
  }
  quack() {
    console.log(\`\${this.name} says: Quack!\`);
  }
}

// Add mixin methods to Duck's prototype
Object.assign(Duck.prototype, canSwim, canFly, canWalk);

const donald = new Duck('Donald');
donald.quack(); // "Donald says: Quack!"
donald.swim();  // "Donald is swimming"
donald.fly();   // "Donald is flying"
donald.walk();  // "Donald is walking"
\`\`\`

### Mixin Factory Function
\`\`\`js
// Function that creates mixins with options
function createTimestampMixin(options = {}) {
  const { autoUpdate = false } = options;
  
  return {
    createdAt: null,
    updatedAt: null,
    
    initTimestamps() {
      this.createdAt = new Date();
      this.updatedAt = new Date();
    },
    
    touch() {
      this.updatedAt = new Date();
    },
    
    getAge() {
      return Date.now() - this.createdAt.getTime();
    }
  };
}

// Serialization mixin
const serializableMixin = {
  toJSON() {
    return JSON.stringify(this);
  },
  
  toObject() {
    return { ...this };
  }
};

// Event mixin
const eventMixin = {
  _events: null,
  
  on(event, handler) {
    if (!this._events) this._events = {};
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(handler);
    return this;
  },
  
  off(event, handler) {
    if (!this._events?.[event]) return this;
    this._events[event] = this._events[event].filter(h => h !== handler);
    return this;
  },
  
  emit(event, ...args) {
    if (!this._events?.[event]) return this;
    this._events[event].forEach(handler => handler.apply(this, args));
    return this;
  }
};

// Usage
class User {
  constructor(name) {
    this.name = name;
    this.initTimestamps?.();
  }
}

Object.assign(User.prototype, 
  createTimestampMixin(),
  serializableMixin,
  eventMixin
);

const user = new User('John');
user.initTimestamps();

// Use timestamp methods
console.log(user.createdAt);
user.touch();
console.log(user.updatedAt);

// Use serialization
console.log(user.toJSON());

// Use events
user.on('change', (prop, value) => {
  console.log(\`Property \${prop} changed to \${value}\`);
});
user.emit('change', 'name', 'Jane');
\`\`\`

### Class-based Mixin Pattern
\`\`\`js
// Mixin as a function that takes a superclass
const TimestampMixin = (superclass) => class extends superclass {
  constructor(...args) {
    super(...args);
    this.createdAt = new Date();
    this.updatedAt = new Date();
  }
  
  touch() {
    this.updatedAt = new Date();
  }
};

const SerializableMixin = (superclass) => class extends superclass {
  toJSON() {
    return JSON.stringify({ ...this });
  }
};

// Base class
class Entity {
  constructor(id) {
    this.id = id;
  }
}

// Compose mixins
class User extends TimestampMixin(SerializableMixin(Entity)) {
  constructor(id, name) {
    super(id);
    this.name = name;
  }
}

const user = new User(1, 'John');
console.log(user.id);        // 1
console.log(user.name);      // 'John'
console.log(user.createdAt); // Date
console.log(user.toJSON());  // JSON string
\`\`\`

---

## INSTANCEOF AND TYPE CHECKING
Understanding how to check types and prototype relationships is crucial for interviews.

\`\`\`js
// instanceof checks if an object's prototype chain contains a constructor's prototype
class Animal {}
class Dog extends Animal {}
class Cat extends Animal {}

const buddy = new Dog();

console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
console.log(buddy instanceof Object); // true
console.log(buddy instanceof Cat);    // false

// How instanceof works internally
function myInstanceof(obj, Constructor) {
  let proto = Object.getPrototypeOf(obj);
  
  while (proto !== null) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}

console.log(myInstanceof(buddy, Dog));    // true
console.log(myInstanceof(buddy, Animal)); // true
console.log(myInstanceof(buddy, Cat));    // false
\`\`\`

### isPrototypeOf() Method
\`\`\`js
// isPrototypeOf checks if an object exists in another object's prototype chain
const animal = { eats: true };
const rabbit = Object.create(animal);
const whiteRabbit = Object.create(rabbit);

console.log(animal.isPrototypeOf(rabbit));      // true
console.log(animal.isPrototypeOf(whiteRabbit)); // true
console.log(rabbit.isPrototypeOf(whiteRabbit)); // true
console.log(rabbit.isPrototypeOf(animal));      // false

// With classes
console.log(Dog.prototype.isPrototypeOf(buddy));    // true
console.log(Animal.prototype.isPrototypeOf(buddy)); // true
\`\`\`

### Object.getPrototypeOf()
\`\`\`js
// Get the prototype of an object
const proto = Object.getPrototypeOf(buddy);
console.log(proto === Dog.prototype); // true

const grandProto = Object.getPrototypeOf(proto);
console.log(grandProto === Animal.prototype); // true

const greatGrandProto = Object.getPrototypeOf(grandProto);
console.log(greatGrandProto === Object.prototype); // true

console.log(Object.getPrototypeOf(greatGrandProto)); // null
\`\`\`

### Checking Types Properly
\`\`\`js
// typeof for primitives and functions
console.log(typeof 'hello');     // 'string'
console.log(typeof 42);          // 'number'
console.log(typeof true);        // 'boolean'
console.log(typeof undefined);   // 'undefined'
console.log(typeof null);        // 'object' (historical bug!)
console.log(typeof {});          // 'object'
console.log(typeof []);          // 'object' (arrays are objects)
console.log(typeof function(){}); // 'function'
console.log(typeof Symbol());    // 'symbol'
console.log(typeof 1n);          // 'bigint'

// Array.isArray for arrays
console.log(Array.isArray([]));           // true
console.log(Array.isArray({}));           // false
console.log(Array.isArray('array'));      // false

// Object.prototype.toString for detailed type
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}

console.log(getType('hello'));     // 'String'
console.log(getType(42));          // 'Number'
console.log(getType(true));        // 'Boolean'
console.log(getType(undefined));   // 'Undefined'
console.log(getType(null));        // 'Null'
console.log(getType({}));          // 'Object'
console.log(getType([]));          // 'Array'
console.log(getType(function(){})); // 'Function'
console.log(getType(/regex/));     // 'RegExp'
console.log(getType(new Date()));  // 'Date'
console.log(getType(new Map()));   // 'Map'
console.log(getType(new Set()));   // 'Set'
\`\`\`

---

## hasOwnProperty VS in OPERATOR
Understanding the difference between own properties and inherited properties is essential.

\`\`\`js
const parent = { inherited: true };
const child = Object.create(parent);
child.own = true;

// 'in' operator checks own AND prototype chain
console.log('own' in child);       // true (own property)
console.log('inherited' in child); // true (from prototype)
console.log('toString' in child);  // true (from Object.prototype)

// hasOwnProperty checks ONLY own properties
console.log(child.hasOwnProperty('own'));       // true
console.log(child.hasOwnProperty('inherited')); // false
console.log(child.hasOwnProperty('toString'));  // false

// Safe way to check own properties
// (in case hasOwnProperty is overridden or object has null prototype)
console.log(Object.prototype.hasOwnProperty.call(child, 'own')); // true
console.log(Object.hasOwn(child, 'own')); // true (ES2022+)
\`\`\`

### Iterating Own vs Inherited Properties
\`\`\`js
const proto = { inherited: 'from proto' };
const obj = Object.create(proto);
obj.own1 = 'own property 1';
obj.own2 = 'own property 2';

// for...in iterates own AND enumerable inherited properties
console.log('for...in:');
for (let key in obj) {
  console.log(key); // 'own1', 'own2', 'inherited'
}

// Filter to only own properties
console.log('for...in with hasOwnProperty:');
for (let key in obj) {
  if (obj.hasOwnProperty(key)) {
    console.log(key); // 'own1', 'own2'
  }
}

// Object.keys() returns only own enumerable properties
console.log('Object.keys:', Object.keys(obj)); // ['own1', 'own2']

// Object.values() returns values of own enumerable properties
console.log('Object.values:', Object.values(obj)); // ['own property 1', 'own property 2']

// Object.entries() returns [key, value] pairs
console.log('Object.entries:', Object.entries(obj));
// [['own1', 'own property 1'], ['own2', 'own property 2']]

// Object.getOwnPropertyNames() includes non-enumerable own properties
Object.defineProperty(obj, 'hidden', {
  value: 'non-enumerable',
  enumerable: false
});
console.log(Object.keys(obj)); // ['own1', 'own2']
console.log(Object.getOwnPropertyNames(obj)); // ['own1', 'own2', 'hidden']
\`\`\`

### Potential Pitfall: hasOwnProperty Override
\`\`\`js
// Someone might override hasOwnProperty (bad practice, but possible)
const malicious = {
  hasOwnProperty: function() {
    return false; // Always returns false!
  },
  realProperty: 'exists'
};

console.log(malicious.hasOwnProperty('realProperty')); // false (wrong!)

// Safe way: call from Object.prototype
console.log(Object.prototype.hasOwnProperty.call(malicious, 'realProperty')); // true

// Even safer: Object.hasOwn (ES2022+)
console.log(Object.hasOwn(malicious, 'realProperty')); // true

// Object with null prototype doesn't have hasOwnProperty at all
const nullProto = Object.create(null);
nullProto.foo = 'bar';
// nullProto.hasOwnProperty('foo'); // TypeError: not a function
console.log(Object.hasOwn(nullProto, 'foo')); // true
\`\`\`

---

## PROPERTY DESCRIPTORS
Every property has attributes (descriptors) that control its behavior.

\`\`\`js
const person = {
  name: 'John'
};

// Get descriptor of a property
const descriptor = Object.getOwnPropertyDescriptor(person, 'name');
console.log(descriptor);
// {
//   value: 'John',
//   writable: true,
//   enumerable: true,
//   configurable: true
// }

// Define property with custom descriptors
Object.defineProperty(person, 'ssn', {
  value: '123-45-6789',
  writable: false,     // Cannot change value
  enumerable: false,   // Won't show in for...in or Object.keys
  configurable: false  // Cannot delete or reconfigure
});

person.ssn = '000-00-0000'; // Fails silently (throws in strict mode)
console.log(person.ssn);    // '123-45-6789'

delete person.ssn;          // Fails silently
console.log(person.ssn);    // '123-45-6789'

console.log(Object.keys(person)); // ['name'] - ssn not included
\`\`\`

### Object.defineProperties
\`\`\`js
const product = {};

Object.defineProperties(product, {
  _price: {
    value: 0,
    writable: true,
    enumerable: false
  },
  price: {
    get() { return '$' + this._price.toFixed(2); },
    set(value) { this._price = parseFloat(value) || 0; },
    enumerable: true
  },
  id: {
    value: Date.now(),
    writable: false,
    enumerable: true,
    configurable: false
  }
});

product.price = 29.99;
console.log(product.price); // '$29.99'
console.log(product._price); // 29.99
console.log(Object.keys(product)); // ['price', 'id']
\`\`\`

### Object Prevention Methods
\`\`\`js
// Object.preventExtensions - can't add new properties
const obj1 = { a: 1 };
Object.preventExtensions(obj1);
obj1.b = 2; // Fails silently
console.log(obj1.b); // undefined
obj1.a = 10; // Works - can still modify existing
console.log(Object.isExtensible(obj1)); // false

// Object.seal - can't add/delete, but can modify existing
const obj2 = { a: 1 };
Object.seal(obj2);
obj2.b = 2; // Fails
delete obj2.a; // Fails
obj2.a = 10; // Works
console.log(Object.isSealed(obj2)); // true

// Object.freeze - can't add/delete/modify (shallow freeze)
const obj3 = { a: 1, nested: { b: 2 } };
Object.freeze(obj3);
obj3.a = 10; // Fails
obj3.b = 2;  // Fails
obj3.nested.b = 20; // Works! Freeze is shallow
console.log(Object.isFrozen(obj3)); // true

// Deep freeze helper
function deepFreeze(obj) {
  Object.keys(obj).forEach(key => {
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      deepFreeze(obj[key]);
    }
  });
  return Object.freeze(obj);
}

const frozen = deepFreeze({ a: { b: { c: 1 } } });
frozen.a.b.c = 999; // Fails - deeply frozen
console.log(frozen.a.b.c); // 1
\`\`\`

---

## PROTOTYPE POLLUTION
Prototype pollution is a security vulnerability where attackers can modify Object.prototype, affecting all objects. Understanding this is important for interviews at security-conscious companies.

\`\`\`js
// NEVER modify Object.prototype in production!
// This is just to demonstrate the danger

// ❌ BAD: Polluting Object.prototype
Object.prototype.polluted = 'gotcha';

const innocent = {};
console.log(innocent.polluted); // 'gotcha' - affected!

const arr = [];
console.log(arr.polluted); // 'gotcha' - even arrays!

// This can break code that checks for properties
for (let key in {}) {
  console.log(key); // 'polluted' - unexpected!
}

// How attackers exploit this (common vulnerability in old code)
function merge(target, source) {
  for (let key in source) {
    if (typeof source[key] === 'object') {
      target[key] = merge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Attacker sends malicious payload
const maliciousPayload = JSON.parse('{"__proto__": {"isAdmin": true}}');
merge({}, maliciousPayload);

// Now ALL objects have isAdmin!
const user = {};
console.log(user.isAdmin); // true (vulnerability!)

// Clean up
delete Object.prototype.polluted;
delete Object.prototype.isAdmin;
\`\`\`

### Preventing Prototype Pollution
\`\`\`js
// Safe merge function
function safeMerge(target, source) {
  for (let key in source) {
    // Skip __proto__ and constructor
    if (key === '__proto__' || key === 'constructor' || key === 'prototype') {
      continue;
    }
    
    // Only copy own properties
    if (!source.hasOwnProperty(key)) continue;
    
    if (typeof source[key] === 'object' && source[key] !== null) {
      target[key] = safeMerge(target[key] || {}, source[key]);
    } else {
      target[key] = source[key];
    }
  }
  return target;
}

// Use Object.create(null) for dictionaries
const safeDict = Object.create(null);
safeDict.__proto__ = 'test'; // Just a regular property, not prototype!
console.log(Object.getPrototypeOf(safeDict)); // null

// Use Map instead of objects for user-provided keys
const userPrefs = new Map();
userPrefs.set('__proto__', 'safe'); // Just a key, no pollution
\`\`\`

---

## COMMON INTERVIEW QUESTIONS

### Q1: Explain the difference between __proto__ and prototype
\`\`\`js
// Answer:
// - prototype is a property on FUNCTIONS (specifically constructors)
// - __proto__ is a property on ALL OBJECTS pointing to their prototype

function Dog(name) {
  this.name = name;
}

const buddy = new Dog('Buddy');

// prototype is what instances will inherit from
console.log(Dog.prototype); // { constructor: Dog }

// __proto__ is the actual prototype of an instance
console.log(buddy.__proto__ === Dog.prototype); // true

// A function's own __proto__ is Function.prototype
console.log(Dog.__proto__ === Function.prototype); // true
\`\`\`

### Q2: Implement your own 'new' operator
\`\`\`js
function myNew(Constructor, ...args) {
  // 1. Create empty object with Constructor.prototype as its prototype
  const obj = Object.create(Constructor.prototype);
  
  // 2. Execute Constructor with 'this' bound to new object
  const result = Constructor.apply(obj, args);
  
  // 3. Return object (unless Constructor returns a different object)
  return result instanceof Object ? result : obj;
}

// Test
function Person(name, age) {
  this.name = name;
  this.age = age;
}
Person.prototype.greet = function() {
  return \`Hi, I'm \${this.name}\`;
};

const john = myNew(Person, 'John', 30);
console.log(john.name);    // 'John'
console.log(john.greet()); // "Hi, I'm John"
console.log(john instanceof Person); // true
\`\`\`

### Q3: Implement inheritance without ES6 classes
\`\`\`js
// Parent
function Animal(name) {
  this.name = name;
}
Animal.prototype.speak = function() {
  console.log(this.name + ' makes a sound');
};

// Child
function Dog(name, breed) {
  Animal.call(this, name); // Call parent constructor
  this.breed = breed;
}

// Set up prototype chain
Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;

// Add child methods
Dog.prototype.bark = function() {
  console.log(this.name + ' barks');
};

// Test
const buddy = new Dog('Buddy', 'Lab');
buddy.speak(); // "Buddy makes a sound"
buddy.bark();  // "Buddy barks"
console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
\`\`\`

### Q4: What's the output?
\`\`\`js
function Parent() {
  this.name = 'Parent';
}
Parent.prototype.getName = function() {
  return this.name;
};

function Child() {
  this.name = 'Child';
}
Child.prototype = new Parent(); // Anti-pattern, but valid
Child.prototype.constructor = Child;

const child = new Child();
console.log(child.getName()); // 'Child'
console.log(child.hasOwnProperty('name')); // true
console.log(child.hasOwnProperty('getName')); // false

// Explanation:
// - child.name is 'Child' (set in Child constructor)
// - getName() uses 'this', which is child
// - name is own property, getName is inherited
\`\`\`

### Q5: Implement Object.create polyfill
\`\`\`js
if (typeof Object.create !== 'function') {
  Object.create = function(proto, propertiesObject) {
    if (typeof proto !== 'object' && typeof proto !== 'function') {
      throw new TypeError('Object prototype may only be an Object or null');
    }
    
    function F() {}
    F.prototype = proto;
    const obj = new F();
    
    if (propertiesObject !== undefined) {
      Object.defineProperties(obj, propertiesObject);
    }
    
    return obj;
  };
}

// Test
const parent = { greet() { return 'Hello'; } };
const child = Object.create(parent);
console.log(child.greet()); // 'Hello'
console.log(Object.getPrototypeOf(child) === parent); // true
\`\`\`

### Q6: Implement instanceof
\`\`\`js
function myInstanceof(obj, Constructor) {
  // Handle primitives
  if (obj === null || (typeof obj !== 'object' && typeof obj !== 'function')) {
    return false;
  }
  
  let proto = Object.getPrototypeOf(obj);
  
  while (proto !== null) {
    if (proto === Constructor.prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }
  
  return false;
}

// Test
console.log(myInstanceof([], Array));   // true
console.log(myInstanceof([], Object));  // true
console.log(myInstanceof({}, Array));   // false
console.log(myInstanceof(null, Object)); // false
\`\`\`

### Q7: Class vs Function Constructor - What's the difference?
\`\`\`js
// ES6 Class
class PersonClass {
  constructor(name) {
    this.name = name;
  }
  greet() {
    return 'Hello ' + this.name;
  }
}

// Function Constructor
function PersonFunc(name) {
  this.name = name;
}
PersonFunc.prototype.greet = function() {
  return 'Hello ' + this.name;
};

// Differences:
// 1. Classes must be called with 'new'
new PersonClass('John'); // OK
// PersonClass('John'); // TypeError: Class constructor cannot be invoked without 'new'

PersonFunc('John'); // Works (but wrong - sets global.name)
new PersonFunc('John'); // OK

// 2. Class methods are non-enumerable by default
console.log(Object.keys(PersonClass.prototype)); // []
console.log(Object.keys(PersonFunc.prototype));  // ['greet']

// 3. Classes are in strict mode by default
// 4. Classes are not hoisted like function declarations
// 5. Class methods don't have [[Construct]] - can't be used with 'new'
\`\`\`

### Q8: Create a chain of prototype methods (fluent interface)
\`\`\`js
class Calculator {
  constructor(value = 0) {
    this.value = value;
  }
  
  add(n) {
    this.value += n;
    return this; // Return this for chaining
  }
  
  subtract(n) {
    this.value -= n;
    return this;
  }
  
  multiply(n) {
    this.value *= n;
    return this;
  }
  
  divide(n) {
    if (n === 0) throw new Error('Cannot divide by zero');
    this.value /= n;
    return this;
  }
  
  result() {
    return this.value;
  }
}

const result = new Calculator(10)
  .add(5)      // 15
  .multiply(2) // 30
  .subtract(5) // 25
  .divide(5)   // 5
  .result();

console.log(result); // 5
\`\`\`

---

## QUICK REFERENCE CHEAT SHEET

| Concept | Description | Example |
|---------|-------------|---------|
| \`__proto__\` | Object's internal prototype reference | \`obj.__proto__\` |
| \`prototype\` | Constructor's prototype for instances | \`Array.prototype\` |
| \`Object.create()\` | Create object with specific prototype | \`Object.create(proto)\` |
| \`Object.getPrototypeOf()\` | Get object's prototype | \`Object.getPrototypeOf(obj)\` |
| \`instanceof\` | Check prototype chain | \`obj instanceof Class\` |
| \`isPrototypeOf()\` | Check if object is in chain | \`proto.isPrototypeOf(obj)\` |
| \`hasOwnProperty()\` | Check own property | \`obj.hasOwnProperty('key')\` |
| \`Object.hasOwn()\` | Safe own property check (ES2022) | \`Object.hasOwn(obj, 'key')\` |
| \`extends\` | Class inheritance | \`class Child extends Parent\` |
| \`super\` | Call parent constructor/method | \`super(args)\` |

---

## KEY TAKEAWAYS FOR INTERVIEWS

1. **Understand the prototype chain** - Every object has a prototype, forming a chain to null
2. **Know __proto__ vs prototype** - __proto__ is on objects, prototype is on functions
3. **Master Object.create()** - Creates objects with specified prototype
4. **ES6 classes are sugar** - They compile down to prototype-based inheritance
5. **Private fields use #** - Truly private, not accessible outside class
6. **Use hasOwn for safety** - Object.hasOwn() is safer than hasOwnProperty()
7. **Beware prototype pollution** - Never modify Object.prototype in production
8. **Know how 'new' works** - Creates object, links prototype, calls constructor
9. **Understand instanceof** - Walks the prototype chain to find constructor.prototype
10. **Static vs instance** - Static on constructor, instance on prototype`,

  language: 'javascript'
},

  {
  id: 'interview-objects',
  title: 'Objects - Deep Dive',
  content: `# Objects - Complete Interview Guide

## What is an Object?
An object is a collection of key-value pairs (properties) where keys are strings (or Symbols) and values can be any type. Objects are the fundamental building blocks of JavaScript - almost everything in JS is an object or behaves like one.

## Why Objects Matter
Objects are central to JavaScript because:
- They store and organize data with meaningful keys
- They represent real-world entities
- Functions, arrays, dates, regex are all objects
- They enable OOP patterns
- They're the basis for JSON data exchange
- Understanding objects deeply is essential for interviews

## Object Creation Methods
1. **Object Literal** - Most common, simple syntax
2. **Constructor Function** - Pre-ES6 OOP pattern
3. **Object.create()** - Create with specific prototype
4. **ES6 Class** - Modern OOP syntax
5. **new Object()** - Constructor (rarely used)
6. **Object.assign()** - Create by merging

## Key Concepts
- Property descriptors (writable, enumerable, configurable)
- Getters and setters
- Computed property names
- Object destructuring
- Shallow vs deep cloning
- Object comparison
- Prototypal inheritance
- Immutability (freeze, seal)

---

## OBJECT CREATION
Multiple ways to create objects in JavaScript, each with different use cases.

### Object Literal
The most common and concise way to create objects.

\`\`\`js
// ========================================
// BASIC OBJECT LITERAL
// ========================================
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  isEmployed: true,
  
  // Method
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
};

console.log(person.firstName);     // 'John'
console.log(person.getFullName()); // 'John Doe'

// Empty object
const empty = {};

// Nested objects
const company = {
  name: 'TechCorp',
  address: {
    street: '123 Main St',
    city: 'New York',
    country: 'USA'
  },
  employees: [
    { name: 'John', role: 'Developer' },
    { name: 'Jane', role: 'Designer' }
  ]
};

console.log(company.address.city); // 'New York'
console.log(company.employees[0].name); // 'John'

// ========================================
// SHORTHAND PROPERTIES (ES6)
// ========================================
// When variable name matches property name
const name = 'John';
const age = 30;
const city = 'NYC';

// Old way
const oldPerson = {
  name: name,
  age: age,
  city: city
};

// Shorthand (ES6)
const newPerson = { name, age, city };
console.log(newPerson); // { name: 'John', age: 30, city: 'NYC' }

// ========================================
// METHOD SHORTHAND (ES6)
// ========================================
// Old way
const oldObj = {
  greet: function() {
    return 'Hello';
  }
};

// Shorthand
const newObj = {
  greet() {
    return 'Hello';
  },
  
  // Async method
  async fetchData() {
    return await fetch('/api/data');
  },
  
  // Generator method
  *generateIds() {
    let id = 1;
    while (true) yield id++;
  }
};

// ========================================
// COMPUTED PROPERTY NAMES (ES6)
// ========================================
const propName = 'dynamicKey';
const index = 5;

const computed = {
  [propName]: 'dynamic value',
  ['key_' + index]: 'key_5 value',
  ['method_' + propName]() {
    return this[propName];
  }
};

console.log(computed.dynamicKey);     // 'dynamic value'
console.log(computed.key_5);          // 'key_5 value'
console.log(computed.method_dynamicKey()); // 'dynamic value'

// Common use case: creating object from array
const keys = ['a', 'b', 'c'];
const values = [1, 2, 3];

const fromArrays = keys.reduce((obj, key, i) => {
  obj[key] = values[i];
  return obj;
}, {});
console.log(fromArrays); // { a: 1, b: 2, c: 3 }

// Symbol as property key
const uniqueKey = Symbol('unique');
const withSymbol = {
  [uniqueKey]: 'hidden value',
  visible: 'normal value'
};

console.log(withSymbol[uniqueKey]); // 'hidden value'
console.log(Object.keys(withSymbol)); // ['visible'] - Symbol not included!
\`\`\`

### Constructor Function
Pre-ES6 way to create objects with shared behavior.

\`\`\`js
// ========================================
// BASIC CONSTRUCTOR FUNCTION
// ========================================
function Person(firstName, lastName, age) {
  // 'this' refers to the new object being created
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  
  // Method (not recommended - creates new function per instance)
  // this.greet = function() { return 'Hello, ' + this.firstName; };
}

// Add methods to prototype (shared across all instances)
Person.prototype.greet = function() {
  return \`Hello, I'm \${this.firstName}\`;
};

Person.prototype.getFullName = function() {
  return \`\${this.firstName} \${this.lastName}\`;
};

// Create instances with 'new'
const john = new Person('John', 'Doe', 30);
const jane = new Person('Jane', 'Smith', 25);

console.log(john.firstName);     // 'John'
console.log(john.greet());       // "Hello, I'm John"
console.log(jane.getFullName()); // 'Jane Smith'

// Methods are shared (same reference)
console.log(john.greet === jane.greet); // true

// Check instance
console.log(john instanceof Person); // true
console.log(john.constructor === Person); // true

// ========================================
// WHAT 'new' DOES
// ========================================
// When you call new Person('John', 'Doe', 30):
// 1. Creates empty object: {}
// 2. Sets prototype: Object.setPrototypeOf({}, Person.prototype)
// 3. Binds 'this' to new object and calls constructor
// 4. Returns the object (unless constructor returns different object)

function simulateNew(Constructor, ...args) {
  // Step 1 & 2: Create object with correct prototype
  const obj = Object.create(Constructor.prototype);
  
  // Step 3: Call constructor with 'this' bound to new object
  const result = Constructor.apply(obj, args);
  
  // Step 4: Return object (or constructor's return value if it's an object)
  return result instanceof Object ? result : obj;
}

const bob = simulateNew(Person, 'Bob', 'Johnson', 35);
console.log(bob.greet()); // "Hello, I'm Bob"

// ========================================
// CONSTRUCTOR WITHOUT 'new' (DANGEROUS)
// ========================================
// Without 'new', 'this' is undefined (strict mode) or global object
const wrong = Person('Wrong', 'Way', 99); // No 'new'!
console.log(wrong); // undefined
// In non-strict mode, this pollutes global scope!

// Protection pattern
function SafePerson(name) {
  if (!(this instanceof SafePerson)) {
    return new SafePerson(name);
  }
  this.name = name;
}

const safe1 = new SafePerson('John');
const safe2 = SafePerson('Jane'); // Also works!
console.log(safe2.name); // 'Jane'
\`\`\`

### Object.create()
Create an object with a specific prototype.

\`\`\`js
// ========================================
// BASIC OBJECT.CREATE
// ========================================
// Create object with specified prototype
const personProto = {
  greet() {
    return \`Hello, I'm \${this.name}\`;
  },
  introduce() {
    return \`\${this.name}, age \${this.age}\`;
  }
};

const john = Object.create(personProto);
john.name = 'John';
john.age = 30;

console.log(john.greet());     // "Hello, I'm John"
console.log(john.introduce()); // "John, age 30"

// Check prototype
console.log(Object.getPrototypeOf(john) === personProto); // true

// ========================================
// WITH PROPERTY DESCRIPTORS
// ========================================
const jane = Object.create(personProto, {
  name: {
    value: 'Jane',
    writable: true,
    enumerable: true,
    configurable: true
  },
  age: {
    value: 25,
    writable: true,
    enumerable: true,
    configurable: true
  },
  ssn: {
    value: '123-45-6789',
    writable: false,
    enumerable: false,  // Hidden from iteration
    configurable: false
  }
});

console.log(jane.name);           // 'Jane'
console.log(jane.ssn);            // '123-45-6789'
console.log(Object.keys(jane));   // ['name', 'age'] - ssn not included

// ========================================
// OBJECT.CREATE(NULL) - Pure Dictionary
// ========================================
// No prototype = no inherited properties
const pureDict = Object.create(null);
pureDict.key = 'value';

console.log(pureDict.toString);    // undefined (no inherited methods)
console.log(pureDict.hasOwnProperty); // undefined

// Safe to use any key
pureDict.constructor = 'safe';
pureDict.__proto__ = 'also safe';
pureDict.toString = 'no collision';

// Useful for:
// 1. Clean hash maps with user-provided keys
// 2. Avoiding prototype pollution
// 3. Slightly faster property access

// Compare with regular object
const regular = {};
console.log(regular.toString); // [Function: toString]
console.log('toString' in regular); // true

console.log(pureDict.toString); // 'no collision' (our value)
console.log('toString' in pureDict); // true (our property)

// ========================================
// FACTORY PATTERN WITH OBJECT.CREATE
// ========================================
const carProto = {
  start() {
    this.running = true;
    console.log(\`\${this.make} \${this.model} started\`);
  },
  stop() {
    this.running = false;
    console.log(\`\${this.make} \${this.model} stopped\`);
  }
};

function createCar(make, model, year) {
  const car = Object.create(carProto);
  car.make = make;
  car.model = model;
  car.year = year;
  car.running = false;
  return car;
}

const myCar = createCar('Toyota', 'Camry', 2020);
myCar.start(); // 'Toyota Camry started'
\`\`\`

### ES6 Class
Modern OOP syntax (syntactic sugar over prototypes).

\`\`\`js
// ========================================
// BASIC CLASS
// ========================================
class Person {
  // Constructor - called when using 'new'
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  // Instance method (on prototype)
  greet() {
    return \`Hello, I'm \${this.firstName}\`;
  }
  
  getFullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  }
  
  // Getter
  get info() {
    return \`\${this.getFullName()}, age \${this.age}\`;
  }
  
  // Setter
  set info(value) {
    const [name, age] = value.split(',');
    const [first, last] = name.trim().split(' ');
    this.firstName = first;
    this.lastName = last || '';
    this.age = parseInt(age) || this.age;
  }
  
  // Static method (on class itself, not instances)
  static species() {
    return 'Homo sapiens';
  }
  
  // Static property
  static count = 0;
}

const john = new Person('John', 'Doe', 30);
console.log(john.greet());      // "Hello, I'm John"
console.log(john.info);         // 'John Doe, age 30'
john.info = 'Jane Smith, 25';
console.log(john.firstName);    // 'Jane'
console.log(Person.species());  // 'Homo sapiens'

// ========================================
// PRIVATE FIELDS (ES2022)
// ========================================
class BankAccount {
  // Private fields (must be declared)
  #balance = 0;
  #accountNumber;
  #transactions = [];
  
  constructor(accountNumber, initialBalance = 0) {
    this.#accountNumber = accountNumber;
    this.#balance = initialBalance;
    this.#log('Account opened');
  }
  
  // Private method
  #log(message) {
    this.#transactions.push({
      message,
      timestamp: new Date()
    });
  }
  
  deposit(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    this.#balance += amount;
    this.#log(\`Deposited \${amount}\`);
    return this.#balance;
  }
  
  withdraw(amount) {
    if (amount <= 0) throw new Error('Invalid amount');
    if (amount > this.#balance) throw new Error('Insufficient funds');
    this.#balance -= amount;
    this.#log(\`Withdrew \${amount}\`);
    return this.#balance;
  }
  
  get balance() {
    return this.#balance;
  }
  
  // Cannot set balance directly
  
  getStatement() {
    return {
      account: this.#maskAccount(),
      balance: this.#balance,
      transactions: this.#transactions.length
    };
  }
  
  #maskAccount() {
    return '****' + String(this.#accountNumber).slice(-4);
  }
}

const account = new BankAccount(1234567890, 1000);
console.log(account.balance);     // 1000
account.deposit(500);
console.log(account.balance);     // 1500
// account.#balance = 1000000;    // SyntaxError - can't access private!
// console.log(account.#balance); // SyntaxError

// ========================================
// CLASS INHERITANCE
// ========================================
class Animal {
  constructor(name) {
    this.name = name;
  }
  
  speak() {
    console.log(\`\${this.name} makes a sound\`);
  }
  
  static kingdom = 'Animalia';
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Must call super first!
    this.breed = breed;
  }
  
  speak() {
    console.log(\`\${this.name} barks: Woof!\`);
  }
  
  fetch() {
    console.log(\`\${this.name} fetches the ball\`);
  }
}

const buddy = new Dog('Buddy', 'Golden Retriever');
buddy.speak();  // 'Buddy barks: Woof!'
buddy.fetch();  // 'Buddy fetches the ball'

console.log(buddy instanceof Dog);    // true
console.log(buddy instanceof Animal); // true
console.log(Dog.kingdom);             // 'Animalia' (inherited static)

// ========================================
// CLASS VS CONSTRUCTOR FUNCTION
// ========================================
// Classes are syntactic sugar, but with some differences:

// 1. Classes must be called with 'new'
// Person('John'); // TypeError with class

// 2. Class methods are non-enumerable
console.log(Object.keys(Person.prototype)); // []

// 3. Classes are always in strict mode

// 4. Classes are not hoisted
// const p = new MyClass(); // ReferenceError
// class MyClass {}

// 5. Class methods don't have [[Construct]]
// new john.greet(); // TypeError
\`\`\`

---

## OBJECT PROPERTIES

### Accessing Properties
\`\`\`js
const person = {
  firstName: 'John',
  lastName: 'Doe',
  'full-name': 'John Doe',  // Needs quotes (invalid identifier)
  123: 'numeric key',       // Numbers converted to strings
  [Symbol('id')]: 'symbol key'
};

// ========================================
// DOT NOTATION
// ========================================
console.log(person.firstName); // 'John'

// Limitations:
// - Property must be valid identifier
// - Cannot use variables
// - Cannot use reserved words as properties (old JS)

// ========================================
// BRACKET NOTATION
// ========================================
console.log(person['firstName']);   // 'John'
console.log(person['full-name']);   // 'John Doe'
console.log(person[123]);           // 'numeric key'
console.log(person['123']);         // 'numeric key' (same)

// Using variables
const prop = 'lastName';
console.log(person[prop]);          // 'Doe'

// Dynamic property access
function getProperty(obj, key) {
  return obj[key];
}
console.log(getProperty(person, 'firstName')); // 'John'

// ========================================
// OPTIONAL CHAINING (?.)
// ========================================
const user = {
  name: 'John',
  address: {
    city: 'New York'
  }
};

// Without optional chaining (verbose)
const zip1 = user && user.address && user.address.zipCode;
console.log(zip1); // undefined

// With optional chaining
const zip2 = user?.address?.zipCode;
console.log(zip2); // undefined (no error!)

// Deeply nested
const company = {
  departments: {
    engineering: {
      teams: {
        frontend: {
          lead: 'John'
        }
      }
    }
  }
};

const lead = company?.departments?.engineering?.teams?.frontend?.lead;
console.log(lead); // 'John'

const missing = company?.departments?.sales?.teams?.enterprise?.lead;
console.log(missing); // undefined (no error)

// With methods
const obj = {
  method() { return 'called'; }
};

console.log(obj.method?.());     // 'called'
console.log(obj.missing?.());    // undefined (no error)

// With arrays
const arr = [1, 2, 3];
console.log(arr?.[0]);           // 1
console.log(arr?.[100]);         // undefined

// ========================================
// NULLISH COALESCING (??)
// ========================================
// Returns right side only if left is null or undefined

const config = {
  timeout: 0,
  retries: null,
  debug: false,
  name: ''
};

// Using || (returns right if left is falsy)
console.log(config.timeout || 1000);  // 1000 (0 is falsy!)
console.log(config.debug || true);    // true (false is falsy!)
console.log(config.name || 'default'); // 'default' ('' is falsy!)

// Using ?? (returns right only if left is null/undefined)
console.log(config.timeout ?? 1000);  // 0 (0 is not nullish)
console.log(config.retries ?? 3);     // 3 (null is nullish)
console.log(config.debug ?? true);    // false (false is not nullish)
console.log(config.name ?? 'default'); // '' ('' is not nullish)
console.log(config.missing ?? 'default'); // 'default'

// Common pattern: default values
function greet(name) {
  const displayName = name ?? 'Guest';
  return \`Hello, \${displayName}!\`;
}

console.log(greet('John')); // 'Hello, John!'
console.log(greet(null));   // 'Hello, Guest!'
console.log(greet());       // 'Hello, Guest!'

// Combining with optional chaining
const data = { user: { settings: { theme: null } } };
const theme = data?.user?.settings?.theme ?? 'light';
console.log(theme); // 'light'
\`\`\`

### Adding, Modifying, and Deleting Properties
\`\`\`js
const obj = { a: 1 };

// ========================================
// ADDING PROPERTIES
// ========================================
obj.b = 2;          // Dot notation
obj['c'] = 3;       // Bracket notation
obj[Symbol('d')] = 4; // Symbol key

console.log(obj); // { a: 1, b: 2, c: 3, [Symbol(d)]: 4 }

// ========================================
// MODIFYING PROPERTIES
// ========================================
obj.a = 100;
console.log(obj.a); // 100

// ========================================
// DELETING PROPERTIES
// ========================================
delete obj.b;
console.log(obj.b); // undefined
console.log('b' in obj); // false

// Delete returns true even if property doesn't exist
console.log(delete obj.nonexistent); // true

// Cannot delete non-configurable properties
const frozen = Object.freeze({ x: 1 });
console.log(delete frozen.x); // false (strict mode throws)

// Cannot delete variables or function declarations
// delete someVariable; // Returns false or throws

// ========================================
// CHECKING PROPERTY EXISTENCE
// ========================================
const person = { name: 'John', age: undefined };

// 'in' operator - checks own AND prototype chain
console.log('name' in person);      // true
console.log('age' in person);       // true (exists, even if undefined)
console.log('toString' in person);  // true (inherited)
console.log('missing' in person);   // false

// hasOwnProperty - checks ONLY own properties
console.log(person.hasOwnProperty('name'));      // true
console.log(person.hasOwnProperty('toString')); // false

// Object.hasOwn (ES2022) - safer version
console.log(Object.hasOwn(person, 'name'));     // true
console.log(Object.hasOwn(person, 'toString')); // false

// Why Object.hasOwn is safer:
const badObj = Object.create(null); // No prototype
badObj.name = 'John';
// badObj.hasOwnProperty('name'); // TypeError!
console.log(Object.hasOwn(badObj, 'name')); // true - works!

// Checking for undefined vs non-existent
const check = { value: undefined };
console.log(check.value === undefined);    // true
console.log(check.missing === undefined);  // true (can't distinguish!)
console.log('value' in check);             // true
console.log('missing' in check);           // false (distinguishes!)
\`\`\`

---

## OBJECT METHODS

### Object.keys(), values(), entries()
\`\`\`js
const person = {
  name: 'John',
  age: 30,
  city: 'NYC'
};

// ========================================
// OBJECT.KEYS() - Get property names
// ========================================
const keys = Object.keys(person);
console.log(keys); // ['name', 'age', 'city']

// Only own enumerable properties
Object.defineProperty(person, 'ssn', {
  value: '123',
  enumerable: false
});
console.log(Object.keys(person)); // ['name', 'age', 'city'] - ssn excluded

// Use cases
// 1. Iterate over properties
Object.keys(person).forEach(key => {
  console.log(\`\${key}: \${person[key]}\`);
});

// 2. Count properties
console.log(Object.keys(person).length); // 3

// 3. Check if object is empty
const isEmpty = Object.keys({}).length === 0;
console.log(isEmpty); // true

// ========================================
// OBJECT.VALUES() - Get property values
// ========================================
const values = Object.values(person);
console.log(values); // ['John', 30, 'NYC']

// Sum numeric values
const nums = { a: 1, b: 2, c: 3 };
const sum = Object.values(nums).reduce((a, b) => a + b, 0);
console.log(sum); // 6

// ========================================
// OBJECT.ENTRIES() - Get [key, value] pairs
// ========================================
const entries = Object.entries(person);
console.log(entries);
// [['name', 'John'], ['age', 30], ['city', 'NYC']]

// Iterate with destructuring
for (const [key, value] of Object.entries(person)) {
  console.log(\`\${key}: \${value}\`);
}

// Transform object
const doubled = Object.fromEntries(
  Object.entries(nums).map(([key, value]) => [key, value * 2])
);
console.log(doubled); // { a: 2, b: 4, c: 6 }

// Filter object properties
const filtered = Object.fromEntries(
  Object.entries(person).filter(([key, value]) => typeof value === 'string')
);
console.log(filtered); // { name: 'John', city: 'NYC' }

// ========================================
// OBJECT.FROMENTRIES() - Create object from entries
// ========================================
// Convert Map to object
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
const objFromMap = Object.fromEntries(map);
console.log(objFromMap); // { a: 1, b: 2, c: 3 }

// Convert URLSearchParams
const params = new URLSearchParams('name=John&age=30');
const objFromParams = Object.fromEntries(params);
console.log(objFromParams); // { name: 'John', age: '30' }

// Convert array of pairs
const pairs = [['x', 10], ['y', 20], ['z', 30]];
const objFromPairs = Object.fromEntries(pairs);
console.log(objFromPairs); // { x: 10, y: 20, z: 30 }

// ========================================
// ITERATION COMPARISON
// ========================================
const obj = { a: 1, b: 2 };
Object.prototype.inherited = 'inherited';

// for...in (includes inherited enumerable)
for (const key in obj) {
  console.log(key); // 'a', 'b', 'inherited'
}

// for...in with hasOwn check
for (const key in obj) {
  if (Object.hasOwn(obj, key)) {
    console.log(key); // 'a', 'b'
  }
}

// Object.keys (only own enumerable)
Object.keys(obj).forEach(key => {
  console.log(key); // 'a', 'b'
});

// Cleanup
delete Object.prototype.inherited;
\`\`\`

### Object.assign()
\`\`\`js
// ========================================
// BASIC USAGE - Merge objects
// ========================================
const target = { a: 1, b: 2 };
const source1 = { b: 3, c: 4 };
const source2 = { c: 5, d: 6 };

// Merges into target (mutates it!)
const result = Object.assign(target, source1, source2);

console.log(target); // { a: 1, b: 3, c: 5, d: 6 }
console.log(result); // Same object as target
console.log(result === target); // true

// Later sources override earlier ones
// b: 2 → 3 (from source1)
// c: 4 → 5 (from source2)

// ========================================
// SHALLOW CLONE
// ========================================
const original = { a: 1, b: { c: 2 } };

// Clone (create new object)
const clone = Object.assign({}, original);

console.log(clone);           // { a: 1, b: { c: 2 } }
console.log(clone === original); // false (different objects)

// But nested objects are same reference (shallow!)
console.log(clone.b === original.b); // true!
clone.b.c = 999;
console.log(original.b.c);   // 999 (affected!)

// ========================================
// SPREAD OPERATOR ALTERNATIVE (ES2018)
// ========================================
const spreadClone = { ...original };
const spreadMerge = { ...target, ...source1, ...source2 };

// Spread is often cleaner and doesn't mutate
const immutableMerge = {
  ...{ a: 1 },
  ...{ b: 2 },
  ...{ a: 3 } // Override a
};
console.log(immutableMerge); // { a: 3, b: 2 }

// ========================================
// ONLY COPIES ENUMERABLE OWN PROPERTIES
// ========================================
const withDescriptors = {};
Object.defineProperty(withDescriptors, 'hidden', {
  value: 'secret',
  enumerable: false
});
withDescriptors.visible = 'shown';

const copied = Object.assign({}, withDescriptors);
console.log(copied); // { visible: 'shown' } - hidden not copied!

// ========================================
// COMMON PATTERNS
// ========================================
// Default options
function configure(options) {
  const defaults = {
    timeout: 1000,
    retries: 3,
    debug: false
  };
  const config = Object.assign({}, defaults, options);
  return config;
}

console.log(configure({ timeout: 5000 }));
// { timeout: 5000, retries: 3, debug: false }

// Spread version (preferred)
function configureSpread(options) {
  return {
    timeout: 1000,
    retries: 3,
    debug: false,
    ...options
  };
}

// Adding properties immutably
const user = { name: 'John', age: 30 };
const updatedUser = { ...user, age: 31, city: 'NYC' };
console.log(user);        // { name: 'John', age: 30 } - unchanged
console.log(updatedUser); // { name: 'John', age: 31, city: 'NYC' }

// Removing properties immutably
const { age, ...withoutAge } = user;
console.log(withoutAge); // { name: 'John' }
\`\`\`

### Object.freeze(), seal(), preventExtensions()
\`\`\`js
// ========================================
// OBJECT.FREEZE - Most restrictive
// ========================================
// Cannot: add, delete, or modify properties
const frozen = Object.freeze({
  name: 'John',
  nested: { value: 1 }
});

frozen.name = 'Jane';     // Fails silently (throws in strict mode)
frozen.age = 30;          // Fails silently
delete frozen.name;       // Fails silently

console.log(frozen.name); // 'John' - unchanged

// BUT: Nested objects are NOT frozen (shallow freeze)
frozen.nested.value = 999;
console.log(frozen.nested.value); // 999 - changed!

// Check if frozen
console.log(Object.isFrozen(frozen)); // true

// ========================================
// DEEP FREEZE (Recursive)
// ========================================
function deepFreeze(obj) {
  // Get all properties including non-enumerable
  Object.getOwnPropertyNames(obj).forEach(name => {
    const value = obj[name];
    if (value && typeof value === 'object') {
      deepFreeze(value);
    }
  });
  return Object.freeze(obj);
}

const deepFrozen = deepFreeze({
  level1: {
    level2: {
      level3: { value: 'deep' }
    }
  }
});

deepFrozen.level1.level2.level3.value = 'changed';
console.log(deepFrozen.level1.level2.level3.value); // 'deep' - unchanged!

// ========================================
// OBJECT.SEAL - Medium restrictive
// ========================================
// Cannot: add or delete properties
// CAN: modify existing properties
const sealed = Object.seal({
  name: 'John',
  age: 30
});

sealed.name = 'Jane';     // Works! Can modify
sealed.age = 31;          // Works!
sealed.city = 'NYC';      // Fails silently
delete sealed.name;       // Fails silently

console.log(sealed); // { name: 'Jane', age: 31 }

console.log(Object.isSealed(sealed)); // true

// ========================================
// OBJECT.PREVENTEXTENSIONS - Least restrictive
// ========================================
// Cannot: add new properties
// CAN: modify and delete existing properties
const noExtend = Object.preventExtensions({
  name: 'John',
  age: 30
});

noExtend.name = 'Jane';   // Works!
delete noExtend.age;      // Works!
noExtend.city = 'NYC';    // Fails silently

console.log(noExtend); // { name: 'Jane' }

console.log(Object.isExtensible(noExtend)); // false

// ========================================
// COMPARISON TABLE
// ========================================
/*
                    | preventExtensions | seal    | freeze
--------------------|-------------------|---------|--------
Add properties      | ❌                | ❌      | ❌
Delete properties   | ✅                | ❌      | ❌
Modify properties   | ✅                | ✅      | ❌
*/

// ========================================
// USE CASES
// ========================================
// 1. Configuration objects
const CONFIG = Object.freeze({
  API_URL: 'https://api.example.com',
  TIMEOUT: 5000,
  MAX_RETRIES: 3
});

// 2. Enum-like objects
const STATUS = Object.freeze({
  PENDING: 'pending',
  ACTIVE: 'active',
  COMPLETED: 'completed'
});

// 3. Immutable default values
const DEFAULT_OPTIONS = Object.freeze({
  enabled: true,
  timeout: 1000
});

function process(options) {
  // Safe to spread frozen object
  const config = { ...DEFAULT_OPTIONS, ...options };
  // ...
}
\`\`\`

---

## PROPERTY DESCRIPTORS
Every property has hidden attributes that control its behavior.

\`\`\`js
// ========================================
// GET PROPERTY DESCRIPTOR
// ========================================
const obj = { name: 'John' };

const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(descriptor);
/*
{
  value: 'John',
  writable: true,     // Can change value
  enumerable: true,   // Shows in for...in, Object.keys
  configurable: true  // Can delete or change descriptor
}
*/

// Get all descriptors
console.log(Object.getOwnPropertyDescriptors(obj));

// ========================================
// DEFINE PROPERTY
// ========================================
const user = {};

Object.defineProperty(user, 'id', {
  value: 1,
  writable: false,      // Cannot change
  enumerable: false,    // Hidden from iteration
  configurable: false   // Cannot delete or reconfigure
});

user.id = 2;            // Fails silently
console.log(user.id);   // 1

delete user.id;         // Fails silently
console.log(user.id);   // 1

console.log(Object.keys(user)); // [] - id not included

// ========================================
// WRITABLE
// ========================================
const withWritable = {};

Object.defineProperty(withWritable, 'constant', {
  value: 'CANNOT_CHANGE',
  writable: false
});

withWritable.constant = 'NEW_VALUE';
console.log(withWritable.constant); // 'CANNOT_CHANGE'

// In strict mode, throws TypeError
// 'use strict';
// withWritable.constant = 'NEW_VALUE'; // TypeError!

// ========================================
// ENUMERABLE
// ========================================
const withEnumerable = { visible: true };

Object.defineProperty(withEnumerable, 'hidden', {
  value: 'secret',
  enumerable: false
});

console.log(Object.keys(withEnumerable));      // ['visible']
console.log(Object.values(withEnumerable));    // [true]
console.log(JSON.stringify(withEnumerable));   // '{"visible":true}'

// But still accessible directly
console.log(withEnumerable.hidden);            // 'secret'

// for...in also skips non-enumerable
for (const key in withEnumerable) {
  console.log(key); // Only 'visible'
}

// ========================================
// CONFIGURABLE
// ========================================
const withConfigurable = {};

Object.defineProperty(withConfigurable, 'locked', {
  value: 'initial',
  writable: true,
  configurable: false
});

// Can still write (writable is true)
withConfigurable.locked = 'changed';
console.log(withConfigurable.locked); // 'changed'

// Cannot delete
delete withConfigurable.locked; // Fails
console.log(withConfigurable.locked); // 'changed'

// Cannot redefine (even to same config!)
// Object.defineProperty(withConfigurable, 'locked', {
//   writable: false // TypeError: Cannot redefine property
// });

// ========================================
// DEFINE MULTIPLE PROPERTIES
// ========================================
const product = {};

Object.defineProperties(product, {
  id: {
    value: 1,
    writable: false,
    enumerable: true
  },
  name: {
    value: 'Widget',
    writable: true,
    enumerable: true
  },
  _price: {
    value: 99.99,
    writable: true,
    enumerable: false // "Private"
  }
});

// ========================================
// ACCESSOR DESCRIPTORS (Getters/Setters)
// ========================================
const account = {
  _balance: 0
};

Object.defineProperty(account, 'balance', {
  get() {
    return '$' + this._balance.toFixed(2);
  },
  set(value) {
    if (typeof value !== 'number' || value < 0) {
      throw new Error('Invalid balance');
    }
    this._balance = value;
  },
  enumerable: true,
  configurable: true
});

account.balance = 1000;
console.log(account.balance); // '$1000.00'
// account.balance = -100; // Error: Invalid balance

// Accessor descriptor structure:
/*
{
  get: function,       // Getter function
  set: function,       // Setter function
  enumerable: boolean,
  configurable: boolean
  // NO 'value' or 'writable' - mutually exclusive!
}
*/

// ========================================
// COPY WITH DESCRIPTORS
// ========================================
// Object.assign doesn't preserve descriptors
const original = {};
Object.defineProperty(original, 'readonly', {
  value: 'cannot change',
  writable: false
});

const normalCopy = Object.assign({}, original);
console.log(Object.getOwnPropertyDescriptor(normalCopy, 'readonly'));
// { value: 'cannot change', writable: true, ... } - writable changed!

// Use getOwnPropertyDescriptors for full copy
const fullCopy = Object.defineProperties(
  {},
  Object.getOwnPropertyDescriptors(original)
);
console.log(Object.getOwnPropertyDescriptor(fullCopy, 'readonly'));
// { value: 'cannot change', writable: false, ... } - preserved!
\`\`\`

---

## GETTERS AND SETTERS

\`\`\`js
// ========================================
// OBJECT LITERAL SYNTAX
// ========================================
const person = {
  firstName: 'John',
  lastName: 'Doe',
  
  // Getter - accessed like a property
  get fullName() {
    return \`\${this.firstName} \${this.lastName}\`;
  },
  
  // Setter - assigned like a property
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0] || '';
    this.lastName = parts[1] || '';
  }
};

// Use getter (no parentheses!)
console.log(person.fullName); // 'John Doe'

// Use setter
person.fullName = 'Jane Smith';
console.log(person.firstName); // 'Jane'
console.log(person.lastName);  // 'Smith'

// ========================================
// CLASS SYNTAX
// ========================================
class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }
  
  // Getter for celsius
  get celsius() {
    return this._celsius;
  }
  
  // Setter for celsius
  set celsius(value) {
    if (value < -273.15) {
      throw new Error('Temperature below absolute zero!');
    }
    this._celsius = value;
  }
  
  // Computed property - fahrenheit from celsius
  get fahrenheit() {
    return this._celsius * 9/5 + 32;
  }
  
  set fahrenheit(value) {
    this._celsius = (value - 32) * 5/9;
  }
  
  get kelvin() {
    return this._celsius + 273.15;
  }
  
  set kelvin(value) {
    this._celsius = value - 273.15;
  }
}

const temp = new Temperature(25);
console.log(temp.celsius);    // 25
console.log(temp.fahrenheit); // 77
console.log(temp.kelvin);     // 298.15

temp.fahrenheit = 100;
console.log(temp.celsius);    // 37.78

// temp.celsius = -300; // Error!

// ========================================
// LAZY CALCULATION / CACHING
// ========================================
const data = {
  _items: [1, 2, 3, 4, 5],
  _sumCache: null,
  
  get sum() {
    if (this._sumCache === null) {
      console.log('Calculating sum...');
      this._sumCache = this._items.reduce((a, b) => a + b, 0);
    }
    return this._sumCache;
  },
  
  addItem(item) {
    this._items.push(item);
    this._sumCache = null; // Invalidate cache
  }
};

console.log(data.sum); // "Calculating sum..." 15
console.log(data.sum); // 15 (cached, no log)
data.addItem(6);
console.log(data.sum); // "Calculating sum..." 21

// ========================================
// VALIDATION
// ========================================
const user = {
  _email: '',
  
  get email() {
    return this._email;
  },
  
  set email(value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      throw new Error('Invalid email format');
    }
    this._email = value.toLowerCase();
  }
};

user.email = 'JOHN@Example.COM';
console.log(user.email); // 'john@example.com'
// user.email = 'invalid'; // Error!

// ========================================
// DERIVED PROPERTIES
// ========================================
const rectangle = {
  width: 10,
  height: 5,
  
  get area() {
    return this.width * this.height;
  },
  
  get perimeter() {
    return 2 * (this.width + this.height);
  },
  
  get diagonal() {
    return Math.sqrt(this.width ** 2 + this.height ** 2);
  }
};

console.log(rectangle.area);      // 50
console.log(rectangle.perimeter); // 30
console.log(rectangle.diagonal);  // 11.18

rectangle.width = 20;
console.log(rectangle.area);      // 100 (automatically updated)

// ========================================
// PRIVATE BACKING FIELD WITH #
// ========================================
class Circle {
  #radius;
  
  constructor(radius) {
    this.#radius = radius;
  }
  
  get radius() {
    return this.#radius;
  }
  
  set radius(value) {
    if (value <= 0) throw new Error('Radius must be positive');
    this.#radius = value;
  }
  
  get diameter() {
    return this.#radius * 2;
  }
  
  get area() {
    return Math.PI * this.#radius ** 2;
  }
  
  get circumference() {
    return 2 * Math.PI * this.#radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius);       // 5
console.log(circle.diameter);     // 10
console.log(circle.area);         // 78.54
// circle.#radius = 10;           // SyntaxError - truly private!
\`\`\`

---

## OBJECT CLONING

### Shallow Clone
\`\`\`js
const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'NYC',
    zip: '10001'
  },
  hobbies: ['reading', 'gaming']
};

// ========================================
// METHOD 1: Spread operator (ES2018)
// ========================================
const clone1 = { ...original };

console.log(clone1);           // Same structure
console.log(clone1 === original); // false (different object)

// But nested objects are same reference!
console.log(clone1.address === original.address); // true!
clone1.address.city = 'LA';
console.log(original.address.city); // 'LA' - affected!

// ========================================
// METHOD 2: Object.assign
// ========================================
const clone2 = Object.assign({}, original);

// Same shallow behavior
console.log(clone2.hobbies === original.hobbies); // true

// ========================================
// METHOD 3: Object.fromEntries + Object.entries
// ========================================
const clone3 = Object.fromEntries(Object.entries(original));

// Also shallow
console.log(clone3.address === original.address); // true

// ========================================
// WHEN SHALLOW IS FINE
// ========================================
// When object has only primitives
const simple = { a: 1, b: 'two', c: true };
const simpleClone = { ...simple };
simpleClone.a = 999;
console.log(simple.a); // 1 - unaffected
\`\`\`

### Deep Clone
\`\`\`js
const original = {
  name: 'John',
  nested: {
    deep: {
      value: 'deeply nested'
    }
  },
  array: [1, [2, 3], { four: 4 }],
  date: new Date('2024-01-01'),
  regex: /test/gi,
  fn: function() { return 'hello'; }
};

// ========================================
// METHOD 1: JSON.parse/stringify (Limited!)
// ========================================
const jsonClone = JSON.parse(JSON.stringify(original));

console.log(jsonClone.nested.deep === original.nested.deep); // false - cloned!

// But has major limitations:
console.log(jsonClone.date);   // String! Not Date object
console.log(jsonClone.regex);  // {} Empty object!
console.log(jsonClone.fn);     // undefined! Functions lost!

// Also fails with:
// - undefined (becomes null in arrays, omitted in objects)
// - Symbols (omitted)
// - Infinity, NaN (become null)
// - Circular references (throws error!)

// ========================================
// METHOD 2: structuredClone (Modern - Node 17+, browsers)
// ========================================
const structuredCloneObj = {
  name: 'John',
  nested: { value: 1 },
  array: [1, 2, 3],
  date: new Date(),
  map: new Map([['a', 1]]),
  set: new Set([1, 2, 3]),
  buffer: new ArrayBuffer(8)
};

const structuredCopy = structuredClone(structuredCloneObj);

console.log(structuredCopy.date instanceof Date);   // true!
console.log(structuredCopy.map instanceof Map);     // true!
console.log(structuredCopy.nested === structuredCloneObj.nested); // false

// But still doesn't clone:
// - Functions
// - DOM nodes
// - Property descriptors
// - Prototype chain

// ========================================
// METHOD 3: Custom deep clone (Recursive)
// ========================================
function deepClone(obj, seen = new WeakMap()) {
  // Handle primitives and null
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  
  // Handle circular references
  if (seen.has(obj)) {
    return seen.get(obj);
  }
  
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  
  // Handle RegExp
  if (obj instanceof RegExp) {
    return new RegExp(obj.source, obj.flags);
  }
  
  // Handle Array
  if (Array.isArray(obj)) {
    const arrCopy = [];
    seen.set(obj, arrCopy);
    obj.forEach((item, index) => {
      arrCopy[index] = deepClone(item, seen);
    });
    return arrCopy;
  }
  
  // Handle Map
  if (obj instanceof Map) {
    const mapCopy = new Map();
    seen.set(obj, mapCopy);
    obj.forEach((value, key) => {
      mapCopy.set(deepClone(key, seen), deepClone(value, seen));
    });
    return mapCopy;
  }
  
  // Handle Set
  if (obj instanceof Set) {
    const setCopy = new Set();
    seen.set(obj, setCopy);
    obj.forEach(value => {
      setCopy.add(deepClone(value, seen));
    });
    return setCopy;
  }
  
  // Handle Object
  const objCopy = Object.create(Object.getPrototypeOf(obj));
  seen.set(obj, objCopy);
  
  // Copy all own properties with their descriptors
  const descriptors = Object.getOwnPropertyDescriptors(obj);
  for (const key of Reflect.ownKeys(descriptors)) {
    const descriptor = descriptors[key];
    if ('value' in descriptor) {
      descriptor.value = deepClone(descriptor.value, seen);
    }
    Object.defineProperty(objCopy, key, descriptor);
  }
  
  return objCopy;
}

// Test with circular reference
const circular = { name: 'circular' };
circular.self = circular;

const circularClone = deepClone(circular);
console.log(circularClone.self === circularClone); // true (handled!)

// ========================================
// LIBRARY OPTIONS
// ========================================
// lodash.cloneDeep
// import cloneDeep from 'lodash/cloneDeep';
// const clone = cloneDeep(original);

// Ramda
// import { clone } from 'ramda';
// const clone = clone(original);
\`\`\`

---

## OBJECT COMPARISON

\`\`\`js
// ========================================
// REFERENCE COMPARISON
// ========================================
const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj1;

console.log(obj1 === obj2); // false (different references)
console.log(obj1 === obj3); // true (same reference)
console.log(obj1 == obj2);  // false (== also compares reference)

// ========================================
// OBJECT.IS (Similar to ===, but handles edge cases)
// ========================================
console.log(Object.is(obj1, obj2)); // false
console.log(Object.is(obj1, obj3)); // true

// Difference from ===:
console.log(NaN === NaN);           // false
console.log(Object.is(NaN, NaN));   // true

console.log(0 === -0);              // true
console.log(Object.is(0, -0));      // false

// ========================================
// SHALLOW EQUALITY
// ========================================
function shallowEqual(obj1, obj2) {
  // Same reference?
  if (obj1 === obj2) return true;
  
  // Different types or null?
  if (typeof obj1 !== 'object' || typeof obj2 !== 'object') return false;
  if (obj1 === null || obj2 === null) return false;
  
  // Different number of keys?
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  if (keys1.length !== keys2.length) return false;
  
  // All keys and values equal?
  for (const key of keys1) {
    if (!keys2.includes(key) || obj1[key] !== obj2[key]) {
      return false;
    }
  }
  
  return true;
}

console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 2 }));     // true
console.log(shallowEqual({ a: 1, b: 2 }, { a: 1, b: 3 }));     // false
console.log(shallowEqual({ a: { x: 1 } }, { a: { x: 1 } }));   // false (nested)

// ========================================
// DEEP EQUALITY
// ========================================
function deepEqual(obj1, obj2) {
  // Same reference?
  if (obj1 === obj2) return true;
  
  // Handle null
  if (obj1 === null || obj2 === null) return obj1 === obj2;
  
  // Different types?
  if (typeof obj1 !== typeof obj2) return false;
  
  // Primitives
  if (typeof obj1 !== 'object') return obj1 === obj2;
  
  // Arrays
  if (Array.isArray(obj1) !== Array.isArray(obj2)) return false;
  if (Array.isArray(obj1)) {
    if (obj1.length !== obj2.length) return false;
    return obj1.every((item, index) => deepEqual(item, obj2[index]));
  }
  
  // Objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  
  if (keys1.length !== keys2.length) return false;
  
  return keys1.every(key => 
    keys2.includes(key) && deepEqual(obj1[key], obj2[key])
  );
}

const a = { x: 1, y: { z: [1, 2, 3] } };
const b = { x: 1, y: { z: [1, 2, 3] } };
const c = { x: 1, y: { z: [1, 2, 4] } };

console.log(deepEqual(a, b)); // true
console.log(deepEqual(a, c)); // false

// ========================================
// JSON.stringify COMPARISON (Quick & Dirty)
// ========================================
// Only works if:
// - Key order is same
// - No undefined, functions, Symbols
// - No circular references

const simple1 = { a: 1, b: 2 };
const simple2 = { a: 1, b: 2 };

console.log(JSON.stringify(simple1) === JSON.stringify(simple2)); // true

// Gotcha: key order matters!
const ordered1 = { a: 1, b: 2 };
const ordered2 = { b: 2, a: 1 };
console.log(JSON.stringify(ordered1) === JSON.stringify(ordered2)); // false!

// Fix: sort keys
const sortedStringify = (obj) => 
  JSON.stringify(obj, Object.keys(obj).sort());

console.log(sortedStringify(ordered1) === sortedStringify(ordered2)); // true
\`\`\`

---

## OBJECT ITERATION

\`\`\`js
const person = {
  name: 'John',
  age: 30,
  city: 'NYC'
};

// Add non-enumerable property
Object.defineProperty(person, 'ssn', {
  value: '123-45-6789',
  enumerable: false
});

// Add inherited property
Object.prototype.inherited = 'from prototype';

// ========================================
// FOR...IN (Own + Inherited Enumerable)
// ========================================
console.log('for...in:');
for (const key in person) {
  console.log(key);
  // name, age, city, inherited (not ssn - non-enumerable)
}

// Filter to own properties only
console.log('for...in with hasOwn:');
for (const key in person) {
  if (Object.hasOwn(person, key)) {
    console.log(key); // name, age, city
  }
}

// ========================================
// OBJECT.KEYS (Own Enumerable Only)
// ========================================
console.log('Object.keys:', Object.keys(person));
// ['name', 'age', 'city']

for (const key of Object.keys(person)) {
  console.log(\`\${key}: \${person[key]}\`);
}

// ========================================
// OBJECT.VALUES (Own Enumerable Values)
// ========================================
console.log('Object.values:', Object.values(person));
// ['John', 30, 'NYC']

// ========================================
// OBJECT.ENTRIES (Own Enumerable [key, value])
// ========================================
console.log('Object.entries:', Object.entries(person));
// [['name', 'John'], ['age', 30], ['city', 'NYC']]

for (const [key, value] of Object.entries(person)) {
  console.log(\`\${key}: \${value}\`);
}

// ========================================
// OBJECT.GETOWNPROPERTYNAMES (Own, including non-enumerable)
// ========================================
console.log('getOwnPropertyNames:', Object.getOwnPropertyNames(person));
// ['name', 'age', 'city', 'ssn'] - includes ssn!

// ========================================
// OBJECT.GETOWNPROPERTYSYMBOLS (Own Symbol keys)
// ========================================
const sym = Symbol('id');
person[sym] = 42;

console.log('getOwnPropertySymbols:', Object.getOwnPropertySymbols(person));
// [Symbol(id)]

// ========================================
// REFLECT.OWNKEYS (All Own Keys - strings + symbols)
// ========================================
console.log('Reflect.ownKeys:', Reflect.ownKeys(person));
// ['name', 'age', 'city', 'ssn', Symbol(id)]

// ========================================
// COMPARISON TABLE
// ========================================
/*
Method                      | Own | Inherited | Enumerable | Non-enum | Symbol
----------------------------|-----|-----------|------------|----------|-------
for...in                    | ✅  | ✅        | ✅         | ❌       | ❌
Object.keys()               | ✅  | ❌        | ✅         | ❌       | ❌
Object.values()             | ✅  | ❌        | ✅         | ❌       | ❌
Object.entries()            | ✅  | ❌        | ✅         | ❌       | ❌
Object.getOwnPropertyNames()| ✅  | ❌        | ✅         | ✅       | ❌
Object.getOwnPropertySymbols()| ✅| ❌        | ✅         | ✅       | ✅
Reflect.ownKeys()           | ✅  | ❌        | ✅         | ✅       | ✅
*/

// Cleanup
delete Object.prototype.inherited;
\`\`\`

---

## OBJECT DESTRUCTURING

\`\`\`js
// ========================================
// BASIC DESTRUCTURING
// ========================================
const person = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
  city: 'NYC'
};

// Extract specific properties
const { firstName, lastName } = person;
console.log(firstName); // 'John'
console.log(lastName);  // 'Doe'

// ========================================
// RENAMING (Aliases)
// ========================================
const { firstName: fName, lastName: lName } = person;
console.log(fName); // 'John'
console.log(lName); // 'Doe'

// ========================================
// DEFAULT VALUES
// ========================================
const { firstName: first, country = 'USA' } = person;
console.log(first);   // 'John'
console.log(country); // 'USA' (default, not in person)

// Default only used if undefined (not null)
const { value = 'default' } = { value: null };
console.log(value); // null (not 'default')

// ========================================
// NESTED DESTRUCTURING
// ========================================
const company = {
  name: 'TechCorp',
  address: {
    street: '123 Main St',
    city: 'New York',
    coords: {
      lat: 40.7128,
      lng: -74.0060
    }
  }
};

const { 
  name: companyName,
  address: { 
    city,
    coords: { lat, lng }
  }
} = company;

console.log(companyName); // 'TechCorp'
console.log(city);        // 'New York'
console.log(lat);         // 40.7128

// ========================================
// REST PATTERN
// ========================================
const { firstName: fname, ...rest } = person;
console.log(fname); // 'John'
console.log(rest);  // { lastName: 'Doe', age: 30, city: 'NYC' }

// Useful for removing properties
const { password, ...safeUser } = { 
  name: 'John', 
  password: 'secret123' 
};
console.log(safeUser); // { name: 'John' }

// ========================================
// FUNCTION PARAMETERS
// ========================================
function greet({ firstName, lastName, greeting = 'Hello' }) {
  return \`\${greeting}, \${firstName} \${lastName}!\`;
}

console.log(greet(person)); // 'Hello, John Doe!'
console.log(greet({ firstName: 'Jane', lastName: 'Smith', greeting: 'Hi' }));
// 'Hi, Jane Smith!'

// With default for entire object
function configure({ timeout = 1000, retries = 3 } = {}) {
  return { timeout, retries };
}

console.log(configure());              // { timeout: 1000, retries: 3 }
console.log(configure({ timeout: 5000 })); // { timeout: 5000, retries: 3 }

// ========================================
// COMPUTED PROPERTY NAMES
// ========================================
const key = 'dynamicKey';
const { [key]: value } = { dynamicKey: 'found it!' };
console.log(value); // 'found it!'

// ========================================
// COMBINING WITH ARRAYS
// ========================================
const data = {
  users: [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ]
};

const { users: [firstUser, secondUser] } = data;
console.log(firstUser);  // { id: 1, name: 'John' }
console.log(secondUser); // { id: 2, name: 'Jane' }

const { users: [{ name: firstName1 }, { name: firstName2 }] } = data;
console.log(firstName1); // 'John'
console.log(firstName2); // 'Jane'

// ========================================
// SWAPPING VARIABLES
// ========================================
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// ========================================
// ASSIGNMENT TO EXISTING VARIABLES
// ========================================
let x, y;
// Need parentheses when not declaring!
({ x, y } = { x: 10, y: 20 });
console.log(x, y); // 10, 20
\`\`\`

---

## COMMON PATTERNS AND UTILITIES

### Object Utility Functions
\`\`\`js
// ========================================
// PICK - Select specific properties
// ========================================
function pick(obj, keys) {
  return keys.reduce((result, key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
    return result;
  }, {});
}

const user = { id: 1, name: 'John', email: 'john@test.com', password: 'secret' };
const publicUser = pick(user, ['id', 'name', 'email']);
console.log(publicUser); // { id: 1, name: 'John', email: 'john@test.com' }

// ========================================
// OMIT - Exclude specific properties
// ========================================
function omit(obj, keys) {
  const keysToOmit = new Set(keys);
  return Object.fromEntries(
    Object.entries(obj).filter(([key]) => !keysToOmit.has(key))
  );
}

const safeUser = omit(user, ['password']);
console.log(safeUser); // { id: 1, name: 'John', email: 'john@test.com' }

// ========================================
// GET NESTED VALUE SAFELY
// ========================================
function get(obj, path, defaultValue = undefined) {
  const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let result = obj;
  
  for (const key of keys) {
    if (result == null) return defaultValue;
    result = result[key];
  }
  
  return result === undefined ? defaultValue : result;
}

const data = { 
  users: [
    { name: 'John', address: { city: 'NYC' } }
  ] 
};

console.log(get(data, 'users[0].name'));           // 'John'
console.log(get(data, 'users[0].address.city'));   // 'NYC'
console.log(get(data, 'users[0].address.zip'));    // undefined
console.log(get(data, 'users[0].address.zip', 'N/A')); // 'N/A'
console.log(get(data, 'users[5].name'));           // undefined

// ========================================
// SET NESTED VALUE
// ========================================
function set(obj, path, value) {
  const keys = path.replace(/\[(\d+)\]/g, '.$1').split('.');
  let current = obj;
  
  for (let i = 0; i < keys.length - 1; i++) {
    const key = keys[i];
    const nextKey = keys[i + 1];
    
    if (!(key in current)) {
      // Create array or object based on next key
      current[key] = /^\d+$/.test(nextKey) ? [] : {};
    }
    current = current[key];
  }
  
  current[keys[keys.length - 1]] = value;
  return obj;
}

const obj = {};
set(obj, 'a.b.c', 42);
console.log(obj); // { a: { b: { c: 42 } } }

set(obj, 'users[0].name', 'John');
console.log(obj); // { a: { b: { c: 42 } }, users: [{ name: 'John' }] }

// ========================================
// MERGE DEEP
// ========================================
function mergeDeep(target, ...sources) {
  if (!sources.length) return target;
  const source = sources.shift();
  
  if (isObject(target) && isObject(source)) {
    for (const key in source) {
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} });
        mergeDeep(target[key], source[key]);
      } else {
        Object.assign(target, { [key]: source[key] });
      }
    }
  }
  
  return mergeDeep(target, ...sources);
}

function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item);
}

const merged = mergeDeep(
  { a: 1, b: { c: 2, d: 3 } },
  { b: { c: 20, e: 4 }, f: 5 }
);
console.log(merged); // { a: 1, b: { c: 20, d: 3, e: 4 }, f: 5 }

// ========================================
// FLATTEN OBJECT
// ========================================
function flatten(obj, prefix = '') {
  return Object.keys(obj).reduce((acc, key) => {
    const pre = prefix.length ? prefix + '.' : '';
    
    if (typeof obj[key] === 'object' && obj[key] !== null && !Array.isArray(obj[key])) {
      Object.assign(acc, flatten(obj[key], pre + key));
    } else {
      acc[pre + key] = obj[key];
    }
    
    return acc;
  }, {});
}

const nested = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3
    }
  }
};

console.log(flatten(nested));
// { 'a': 1, 'b.c': 2, 'b.d.e': 3 }

// ========================================
// UNFLATTEN OBJECT
// ========================================
function unflatten(obj) {
  const result = {};
  
  for (const key in obj) {
    const keys = key.split('.');
    let current = result;
    
    for (let i = 0; i < keys.length - 1; i++) {
      const k = keys[i];
      current[k] = current[k] || {};
      current = current[k];
    }
    
    current[keys[keys.length - 1]] = obj[key];
  }
  
  return result;
}

const flat = { 'a': 1, 'b.c': 2, 'b.d.e': 3 };
console.log(unflatten(flat));
// { a: 1, b: { c: 2, d: { e: 3 } } }

// ========================================
// INVERT OBJECT
// ========================================
function invert(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [value, key])
  );
}

const original = { a: 1, b: 2, c: 3 };
console.log(invert(original)); // { 1: 'a', 2: 'b', 3: 'c' }

// ========================================
// MAP OBJECT VALUES
// ========================================
function mapValues(obj, fn) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, fn(value, key, obj)])
  );
}

const prices = { apple: 1, banana: 2, orange: 3 };
const doubled = mapValues(prices, v => v * 2);
console.log(doubled); // { apple: 2, banana: 4, orange: 6 }

// ========================================
// FILTER OBJECT
// ========================================
function filterObject(obj, predicate) {
  return Object.fromEntries(
    Object.entries(obj).filter(([key, value]) => predicate(value, key, obj))
  );
}

const nums = { a: 1, b: 2, c: 3, d: 4 };
const evens = filterObject(nums, v => v % 2 === 0);
console.log(evens); // { b: 2, d: 4 }
\`\`\`

---

## COMMON INTERVIEW QUESTIONS

### Q1: What's the difference between Object.freeze() and Object.seal()?
\`\`\`js
// freeze: Cannot add, delete, OR modify properties
const frozen = Object.freeze({ a: 1 });
frozen.a = 2;    // No effect
frozen.b = 2;    // No effect
delete frozen.a; // No effect
console.log(frozen); // { a: 1 }

// seal: Cannot add or delete, but CAN modify
const sealed = Object.seal({ a: 1 });
sealed.a = 2;    // Works!
sealed.b = 2;    // No effect
delete sealed.a; // No effect
console.log(sealed); // { a: 2 }

// Both are shallow - nested objects are not affected
\`\`\`

### Q2: How do you deep clone an object?
\`\`\`js
// Simple solution (limitations with functions, undefined, dates, etc.)
const clone = JSON.parse(JSON.stringify(original));

// Modern solution (Node 17+, modern browsers)
const clone = structuredClone(original);

// Custom recursive function for full control
// (See deep clone section above)

// Library: lodash.cloneDeep
\`\`\`

### Q3: How do you check if two objects are equal?
\`\`\`js
// Reference equality
obj1 === obj2

// Shallow equality
function shallowEqual(a, b) {
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  return keysA.every(key => a[key] === b[key]);
}

// Deep equality (recursive)
function deepEqual(a, b) {
  if (a === b) return true;
  if (typeof a !== 'object' || typeof b !== 'object') return false;
  if (a === null || b === null) return false;
  
  const keysA = Object.keys(a);
  const keysB = Object.keys(b);
  if (keysA.length !== keysB.length) return false;
  
  return keysA.every(key => deepEqual(a[key], b[key]));
}
\`\`\`

### Q4: What's the difference between Object.keys() and for...in?
\`\`\`js
// Object.keys() - own enumerable properties only
// for...in - own AND inherited enumerable properties

const parent = { inherited: true };
const child = Object.create(parent);
child.own = true;

console.log(Object.keys(child)); // ['own']

for (const key in child) {
  console.log(key); // 'own', 'inherited'
}
\`\`\`

### Q5: How do you merge objects?
\`\`\`js
// Shallow merge
const merged = { ...obj1, ...obj2 };
const merged = Object.assign({}, obj1, obj2);

// Deep merge (custom function needed)
function deepMerge(target, source) {
  for (const key in source) {
    if (source[key] instanceof Object && key in target) {
      Object.assign(source[key], deepMerge(target[key], source[key]));
    }
  }
  return { ...target, ...source };
}
\`\`\`

### Q6: How do you create an object without a prototype?
\`\`\`js
const pureDict = Object.create(null);

console.log(pureDict.toString); // undefined
console.log('toString' in pureDict); // false

// Useful for:
// - Clean hash maps
// - Avoiding prototype pollution
// - User-provided keys
\`\`\`

### Q7: What's the output?
\`\`\`js
const obj = { a: 1 };
Object.defineProperty(obj, 'b', { value: 2 });
console.log(Object.keys(obj));
// ['a'] - 'b' is non-enumerable by default with defineProperty!

const obj2 = { a: 1 };
obj2.b = 2;
console.log(Object.keys(obj2));
// ['a', 'b'] - normal assignment is enumerable

// With defineProperty, defaults are:
// writable: false, enumerable: false, configurable: false
\`\`\`

### Q8: Implement Object.assign polyfill
\`\`\`js
if (typeof Object.assign !== 'function') {
  Object.assign = function(target, ...sources) {
    if (target == null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }
    
    const to = Object(target);
    
    for (const source of sources) {
      if (source != null) {
        for (const key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            to[key] = source[key];
          }
        }
      }
    }
    
    return to;
  };
}
\`\`\`

### Q9: What is optional chaining and nullish coalescing?
\`\`\`js
// Optional chaining (?.) - safe property access
const name = user?.profile?.name; // undefined if any is null/undefined

// Nullish coalescing (??) - default only for null/undefined
const value = input ?? 'default';

// Difference from ||:
0 || 'default'  // 'default' (0 is falsy)
0 ?? 'default'  // 0 (0 is not nullish)

'' || 'default' // 'default' ('' is falsy)
'' ?? 'default' // '' ('' is not nullish)

// Combining them:
const theme = user?.preferences?.theme ?? 'light';
\`\`\`

### Q10: How do property descriptors work?
\`\`\`js
// Every property has 4 attributes:
// - value: the value
// - writable: can change value
// - enumerable: shows in for...in, Object.keys
// - configurable: can delete or change attributes

Object.defineProperty(obj, 'prop', {
  value: 42,
  writable: false,     // Cannot change
  enumerable: false,   // Hidden from iteration
  configurable: false  // Cannot delete or reconfigure
});

// Accessor properties have:
// - get: getter function
// - set: setter function
// - enumerable
// - configurable
// (No value or writable - they're mutually exclusive)
\`\`\`

---

## QUICK REFERENCE CHEAT SHEET

| Method/Property | Purpose |
|-----------------|---------|
| \`Object.keys()\` | Own enumerable keys |
| \`Object.values()\` | Own enumerable values |
| \`Object.entries()\` | Own enumerable [key, value] pairs |
| \`Object.fromEntries()\` | Create object from entries |
| \`Object.assign()\` | Shallow merge/clone |
| \`Object.freeze()\` | Make immutable |
| \`Object.seal()\` | Prevent add/delete |
| \`Object.preventExtensions()\` | Prevent adding |
| \`Object.isFrozen()\` | Check if frozen |
| \`Object.isSealed()\` | Check if sealed |
| \`Object.isExtensible()\` | Check if extensible |
| \`Object.create()\` | Create with prototype |
| \`Object.getPrototypeOf()\` | Get prototype |
| \`Object.setPrototypeOf()\` | Set prototype |
| \`Object.defineProperty()\` | Define single property |
| \`Object.defineProperties()\` | Define multiple properties |
| \`Object.getOwnPropertyDescriptor()\` | Get property descriptor |
| \`Object.getOwnPropertyDescriptors()\` | Get all descriptors |
| \`Object.getOwnPropertyNames()\` | All own string keys |
| \`Object.getOwnPropertySymbols()\` | All own symbol keys |
| \`Object.hasOwn()\` | Check own property (ES2022) |
| \`in\` operator | Check own + inherited |
| \`delete\` operator | Remove property |

---

## KEY TAKEAWAYS FOR INTERVIEWS

1. **Know creation methods** - Literal, constructor, Object.create, class
2. **Understand mutability** - freeze vs seal vs preventExtensions
3. **Master property descriptors** - writable, enumerable, configurable
4. **Deep vs shallow** - Know when each matters for cloning/comparison
5. **Optional chaining & nullish coalescing** - Modern safe access patterns
6. **Iteration methods** - keys, values, entries, for...in differences
7. **Destructuring** - With defaults, renaming, rest, nested
8. **Prototype relationship** - How objects inherit from prototypes
9. **Object.create(null)** - When and why to use pure dictionaries
10. **Common utilities** - pick, omit, get, set, merge, flatten`,

  language: 'javascript'
},

    // ==========================================
    // SECTION 4: ARRAYS & DATA MANIPULATION
    // ==========================================
 {
  id: 'interview-arrays',
  title: 'Array Methods - Complete Reference',
  content: `# Array Methods - Complete Interview Guide
## What is an Array?
An array is an ordered collection of elements that can hold multiple values of any type. In JavaScript, arrays are objects with special behavior - they maintain element order and have a length property that automatically updates.
## Why Arrays Matter
Arrays are fundamental data structures used constantly in JavaScript:
- Storing collections of data
- Iterating and transforming data
- Implementing stacks, queues, and other structures
- Working with API responses
- DOM manipulation (NodeLists)
## Array Method Categories
### Mutating Methods (modify original array)
push, pop, shift, unshift, splice, sort, reverse, fill, copyWithin
### Non-Mutating Methods (return new array/value)
map, filter, reduce, slice, concat, flat, flatMap, toSorted, toReversed, toSpliced
### Search Methods
find, findIndex, findLast, findLastIndex, indexOf, lastIndexOf, includes, some, every
### Iteration Methods
forEach, map, filter, reduce, reduceRight, every, some, find, findIndex
## Key Concepts
- Mutability vs Immutability
- Callback functions in array methods
- Method chaining
- Sparse arrays
- Array-like objects
---
## CREATING ARRAYS
Multiple ways to create arrays in JavaScript.
\`\`\`js
// ========================================
// ARRAY LITERAL (Most common)
// ========================================
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];
const mixed = [1, 'two', { three: 3 }, [4], true];
const empty = [];
// ========================================
// ARRAY CONSTRUCTOR
// ========================================
const arr3 = new Array(1, 2, 3); // [1, 2, 3]
const arr4 = new Array(5);       // [empty × 5] - Creates sparse array!
const arr5 = new Array('5');     // ['5']
// Gotcha: Single number creates empty slots
console.log(new Array(3)); // [empty × 3] - NOT [3]!
console.log(new Array(3).length); // 3
// ========================================
// ARRAY.OF() - Avoids the constructor gotcha
// ========================================
console.log(Array.of(1, 2, 3)); // [1, 2, 3]
console.log(Array.of(5));       // [5] - NOT [empty × 5]!
console.log(Array.of());        // []
// ========================================
// ARRAY.FROM() - Create from iterables/array-like
// ========================================
// From string
console.log(Array.from('hello')); // ['h', 'e', 'l', 'l', 'o']
// From Set
console.log(Array.from(new Set([1, 2, 2, 3]))); // [1, 2, 3]
// From Map
const map = new Map([['a', 1], ['b', 2]]);
console.log(Array.from(map)); // [['a', 1], ['b', 2]]
console.log(Array.from(map.keys())); // ['a', 'b']
console.log(Array.from(map.values())); // [1, 2]
// From array-like object (has length and indexed elements)
const arrayLike = { 0: 'a', 1: 'b', 2: 'c', length: 3 };
console.log(Array.from(arrayLike)); // ['a', 'b', 'c']
// From NodeList
const divs = document.querySelectorAll('div');
const divsArray = Array.from(divs);
// With mapping function (second argument)
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]
// Generate sequence
console.log(Array.from({ length: 5 }, (_, i) => i)); // [0, 1, 2, 3, 4]
console.log(Array.from({ length: 5 }, (_, i) => i + 1)); // [1, 2, 3, 4, 5]
// Generate range
const range = (start, end) => 
  Array.from({ length: end - start }, (_, i) => start + i);
console.log(range(5, 10)); // [5, 6, 7, 8, 9]
// ========================================
// SPREAD OPERATOR - Clone/Combine arrays
// ========================================
const original = [1, 2, 3];
const clone = [...original]; // Shallow clone
const combined = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]
// Convert iterable to array
const str = 'hello';
console.log([...str]); // ['h', 'e', 'l', 'l', 'o']
// ========================================
// FILL - Create array with same value
// ========================================
console.log(new Array(5).fill(0)); // [0, 0, 0, 0, 0]
console.log(new Array(3).fill('x')); // ['x', 'x', 'x']
// Gotcha with objects - same reference!
const objArray = new Array(3).fill({});
objArray[0].name = 'John';
console.log(objArray); // [{name:'John'}, {name:'John'}, {name:'John'}]
// Fix: Use Array.from
const objArrayFixed = Array.from({ length: 3 }, () => ({}));
objArrayFixed[0].name = 'John';
console.log(objArrayFixed); // [{name:'John'}, {}, {}]
\`\`\`
---
## MUTATING METHODS
These methods modify the original array. Be careful when using them in functional programming!
### push() and pop() - End of Array
\`\`\`js
// ========================================
// PUSH - Add to end, returns new length
// ========================================
const arr = [1, 2, 3];
const newLength = arr.push(4);
console.log(arr);       // [1, 2, 3, 4]
console.log(newLength); // 4
// Push multiple values
arr.push(5, 6, 7);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7]
// Push array elements (spread)
arr.push(...[8, 9]);
console.log(arr); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
// Common mistake: push returns length, not array
const result = [1, 2].push(3); // result is 3 (length), not [1,2,3]
// ========================================
// POP - Remove from end, returns removed element
// ========================================
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.pop();
console.log(arr2);    // [1, 2, 3, 4]
console.log(removed); // 5
// Pop from empty array
console.log([].pop()); // undefined
// Stack implementation using push/pop
class Stack {
  constructor() {
    this.items = [];
  }
  push(item) { this.items.push(item); }
  pop() { return this.items.pop(); }
  peek() { return this.items[this.items.length - 1]; }
  isEmpty() { return this.items.length === 0; }
}
\`\`\`
### shift() and unshift() - Beginning of Array
\`\`\`js
// ========================================
// UNSHIFT - Add to beginning, returns new length
// ========================================
const arr = [3, 4, 5];
const newLength = arr.unshift(1, 2);
console.log(arr);       // [1, 2, 3, 4, 5]
console.log(newLength); // 5
// ========================================
// SHIFT - Remove from beginning, returns removed element
// ========================================
const arr2 = [1, 2, 3, 4, 5];
const removed = arr2.shift();
console.log(arr2);    // [2, 3, 4, 5]
console.log(removed); // 1
// Queue implementation using push/shift
class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) { this.items.push(item); }
  dequeue() { return this.items.shift(); }
  front() { return this.items[0]; }
  isEmpty() { return this.items.length === 0; }
}
// Performance note:
// push/pop are O(1) - very fast
// shift/unshift are O(n) - must re-index all elements
\`\`\`
### splice() - The Swiss Army Knife
Splice can add, remove, and replace elements anywhere in the array. It modifies the original array and returns removed elements.
\`\`\`js
// Syntax: splice(startIndex, deleteCount, ...itemsToInsert)
const arr = [1, 2, 3, 4, 5];
// ========================================
// REMOVE ELEMENTS
// ========================================
// Remove 2 elements starting at index 1
const removed = arr.splice(1, 2);
console.log(arr);     // [1, 4, 5]
console.log(removed); // [2, 3]
// Remove 1 element at index 0
const arr2 = ['a', 'b', 'c'];
arr2.splice(0, 1);
console.log(arr2); // ['b', 'c']
// Remove all elements from index 2
const arr3 = [1, 2, 3, 4, 5];
arr3.splice(2);
console.log(arr3); // [1, 2]
// ========================================
// INSERT ELEMENTS (deleteCount = 0)
// ========================================
const arr4 = [1, 2, 5];
arr4.splice(2, 0, 3, 4); // At index 2, delete 0, insert 3 and 4
console.log(arr4); // [1, 2, 3, 4, 5]
// Insert at beginning
const arr5 = [2, 3];
arr5.splice(0, 0, 1);
console.log(arr5); // [1, 2, 3]
// ========================================
// REPLACE ELEMENTS
// ========================================
const arr6 = [1, 2, 3, 4, 5];
arr6.splice(2, 2, 'a', 'b', 'c'); // Remove 2, insert 3
console.log(arr6); // [1, 2, 'a', 'b', 'c', 5]
// ========================================
// NEGATIVE INDICES
// ========================================
const arr7 = [1, 2, 3, 4, 5];
arr7.splice(-2, 1); // Start 2 from end, remove 1
console.log(arr7); // [1, 2, 3, 5]
// ========================================
// COMMON PATTERNS
// ========================================
// Remove element by value
function removeByValue(arr, value) {
  const index = arr.indexOf(value);
  if (index !== -1) {
    arr.splice(index, 1);
  }
  return arr;
}
// Remove all occurrences
function removeAllByValue(arr, value) {
  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] === value) {
      arr.splice(i, 1);
    }
  }
  return arr;
}
// Insert at specific index
function insertAt(arr, index, ...items) {
  arr.splice(index, 0, ...items);
  return arr;
}
// Move element from one index to another
function moveElement(arr, fromIndex, toIndex) {
  const [element] = arr.splice(fromIndex, 1);
  arr.splice(toIndex, 0, element);
  return arr;
}
const arr8 = ['a', 'b', 'c', 'd'];
moveElement(arr8, 0, 2);
console.log(arr8); // ['b', 'c', 'a', 'd']
\`\`\`
### sort() - Sorting Arrays
\`\`\`js
// ========================================
// DEFAULT SORT (String comparison)
// ========================================
const letters = ['d', 'b', 'a', 'c'];
letters.sort(); // MUTATES!
console.log(letters); // ['a', 'b', 'c', 'd']
// GOTCHA: Numbers are converted to strings!
const numbers = [10, 2, 33, 4, 100];
numbers.sort();
console.log(numbers); // [10, 100, 2, 33, 4] - WRONG!
// ========================================
// NUMERIC SORT (Use compare function)
// ========================================
// Compare function: (a, b) => negative | 0 | positive
// negative: a comes before b
// positive: b comes before a
// 0: order unchanged
const nums = [10, 2, 33, 4, 100];
// Ascending
nums.sort((a, b) => a - b);
console.log(nums); // [2, 4, 10, 33, 100]
// Descending
nums.sort((a, b) => b - a);
console.log(nums); // [100, 33, 10, 4, 2]
// ========================================
// SORTING OBJECTS
// ========================================
const people = [
  { name: 'John', age: 30 },
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 35 }
];
// Sort by age (ascending)
people.sort((a, b) => a.age - b.age);
console.log(people.map(p => p.name)); // ['Alice', 'John', 'Bob']
// Sort by name (alphabetical)
people.sort((a, b) => a.name.localeCompare(b.name));
console.log(people.map(p => p.name)); // ['Alice', 'Bob', 'John']
// Sort by multiple criteria
const students = [
  { name: 'John', grade: 'A', age: 20 },
  { name: 'Jane', grade: 'B', age: 20 },
  { name: 'Bob', grade: 'A', age: 22 }
];
// Sort by grade, then by age
students.sort((a, b) => {
  if (a.grade !== b.grade) {
    return a.grade.localeCompare(b.grade);
  }
  return a.age - b.age;
});
// ========================================
// STABLE SORT
// ========================================
// As of ES2019, sort() is guaranteed to be stable
// Equal elements maintain their relative order
// ========================================
// NON-MUTATING SORT (toSorted - ES2023)
// ========================================
const original = [3, 1, 4, 1, 5];
const sorted = original.toSorted((a, b) => a - b);
console.log(original); // [3, 1, 4, 1, 5] - unchanged
console.log(sorted);   // [1, 1, 3, 4, 5]
// Polyfill for older environments
const sortedCopy = [...original].sort((a, b) => a - b);
// ========================================
// COMMON SORTING PATTERNS
// ========================================
// Random shuffle (Fisher-Yates)
function shuffle(arr) {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}
// Don't use: arr.sort(() => Math.random() - 0.5)
// It's not uniformly random!
// Sort by property with null handling
const items = [
  { date: new Date('2024-01-01') },
  { date: null },
  { date: new Date('2023-06-15') }
];
items.sort((a, b) => {
  if (!a.date && !b.date) return 0;
  if (!a.date) return 1;  // nulls last
  if (!b.date) return -1;
  return a.date - b.date;
});
\`\`\`
### reverse() and fill()
\`\`\`js
// ========================================
// REVERSE - Reverses array in place
// ========================================
const arr = [1, 2, 3, 4, 5];
arr.reverse(); // MUTATES!
console.log(arr); // [5, 4, 3, 2, 1]
// Non-mutating reverse (toReversed - ES2023)
const original = [1, 2, 3];
const reversed = original.toReversed();
console.log(original); // [1, 2, 3] - unchanged
console.log(reversed); // [3, 2, 1]
// Polyfill
const reversedCopy = [...original].reverse();
// ========================================
// FILL - Fill array with static value
// ========================================
// Syntax: fill(value, startIndex?, endIndex?)
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(0);
console.log(arr2); // [0, 0, 0, 0, 0]
const arr3 = [1, 2, 3, 4, 5];
arr3.fill(0, 2, 4); // Fill from index 2 to 4 (exclusive)
console.log(arr3); // [1, 2, 0, 0, 5]
const arr4 = [1, 2, 3, 4, 5];
arr4.fill(0, 2); // Fill from index 2 to end
console.log(arr4); // [1, 2, 0, 0, 0]
// Negative indices
const arr5 = [1, 2, 3, 4, 5];
arr5.fill(0, -3, -1);
console.log(arr5); // [1, 2, 0, 0, 5]
// Create array filled with value
const zeros = new Array(5).fill(0); // [0, 0, 0, 0, 0]
// GOTCHA: Same reference for objects!
const objArr = new Array(3).fill({ x: 0 });
objArr[0].x = 1;
console.log(objArr); // [{x:1}, {x:1}, {x:1}] - All changed!
// Fix with map
const objArrFixed = new Array(3).fill(null).map(() => ({ x: 0 }));
objArrFixed[0].x = 1;
console.log(objArrFixed); // [{x:1}, {x:0}, {x:0}]
\`\`\`
### copyWithin()
\`\`\`js
// copyWithin(targetIndex, startIndex, endIndex?)
// Copies part of array to another location in same array
const arr = [1, 2, 3, 4, 5];
// Copy elements 3-4 to position 0
arr.copyWithin(0, 3, 5);
console.log(arr); // [4, 5, 3, 4, 5]
const arr2 = [1, 2, 3, 4, 5];
arr2.copyWithin(0, 3); // Copy from index 3 to end, paste at 0
console.log(arr2); // [4, 5, 3, 4, 5]
const arr3 = [1, 2, 3, 4, 5];
arr3.copyWithin(2, 0, 2); // Copy 0-1, paste at 2
console.log(arr3); // [1, 2, 1, 2, 5]
// Negative indices
const arr4 = [1, 2, 3, 4, 5];
arr4.copyWithin(-2, 0, 2);
console.log(arr4); // [1, 2, 3, 1, 2]
// Use case: Efficient array rotation
function rotateLeft(arr, positions) {
  const n = arr.length;
  positions = positions % n;
  arr.copyWithin(0, positions);
  return arr;
}
\`\`\`
---
## NON-MUTATING TRANSFORMATION METHODS
These methods return a new array without modifying the original.
### map() - Transform Each Element
\`\`\`js
// map(callback(element, index, array))
// Returns a NEW array with transformed elements
const numbers = [1, 2, 3, 4, 5];
// ========================================
// BASIC TRANSFORMATION
// ========================================
const doubled = numbers.map(n => n * 2);
console.log(doubled);  // [2, 4, 6, 8, 10]
console.log(numbers);  // [1, 2, 3, 4, 5] - unchanged
// Square each number
const squared = numbers.map(n => n * n);
console.log(squared); // [1, 4, 9, 16, 25]
// ========================================
// WITH INDEX PARAMETER
// ========================================
const indexed = numbers.map((n, i) => ({ value: n, index: i }));
console.log(indexed);
// [{value:1, index:0}, {value:2, index:1}, ...]
// Multiply by index
const byIndex = numbers.map((n, i) => n * i);
console.log(byIndex); // [0, 2, 6, 12, 20]
// ========================================
// TRANSFORMING OBJECTS
// ========================================
const users = [
  { firstName: 'John', lastName: 'Doe', age: 30 },
  { firstName: 'Jane', lastName: 'Smith', age: 25 }
];
// Extract property
const names = users.map(user => user.firstName);
console.log(names); // ['John', 'Jane']
// Create new object structure
const transformed = users.map(user => ({
  fullName: \`\${user.firstName} \${user.lastName}\`,
  isAdult: user.age >= 18
}));
// Add new property
const withId = users.map((user, i) => ({
  ...user,
  id: i + 1
}));
// ========================================
// COMMON PATTERNS
// ========================================
// Parse numbers from strings
const strings = ['1', '2', '3', '4', '5'];
const nums = strings.map(Number);
console.log(nums); // [1, 2, 3, 4, 5]
// GOTCHA with parseInt
console.log(['1', '2', '3'].map(parseInt));
// [1, NaN, NaN] - Because map passes index as second argument!
// parseInt('1', 0) = 1
// parseInt('2', 1) = NaN (base 1 is invalid)
// parseInt('3', 2) = NaN (3 is not valid in base 2)
// Fix:
console.log(['1', '2', '3'].map(s => parseInt(s, 10))); // [1, 2, 3]
console.log(['1', '2', '3'].map(Number)); // [1, 2, 3]
// Convert to different format
const dates = ['2024-01-01', '2024-06-15', '2024-12-31'];
const formatted = dates.map(d => new Date(d).toLocaleDateString());
// Normalize data
const rawData = ['  HELLO ', 'World  ', '  TEST'];
const normalized = rawData.map(s => s.trim().toLowerCase());
console.log(normalized); // ['hello', 'world', 'test']
// ========================================
// MAP VS FOREACH
// ========================================
// map returns a new array, forEach returns undefined
// Use map when you need the transformed array
// Use forEach for side effects only
const result1 = [1, 2, 3].map(n => n * 2);    // [2, 4, 6]
const result2 = [1, 2, 3].forEach(n => n * 2); // undefined
// Don't use map for side effects (it's wasteful)
// BAD:
users.map(user => console.log(user.name)); // Creates useless array
// GOOD:
users.forEach(user => console.log(user.name));
\`\`\`
### filter() - Select Elements
\`\`\`js
// filter(callback(element, index, array))
// Returns NEW array with elements that pass the test
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// ========================================
// BASIC FILTERING
// ========================================
// Keep even numbers
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]
// Keep numbers greater than 5
const large = numbers.filter(n => n > 5);
console.log(large); // [6, 7, 8, 9, 10]
// Keep numbers between 3 and 8
const range = numbers.filter(n => n >= 3 && n <= 8);
console.log(range); // [3, 4, 5, 6, 7, 8]
// ========================================
// FILTERING OBJECTS
// ========================================
const products = [
  { name: 'Laptop', price: 999, inStock: true },
  { name: 'Phone', price: 699, inStock: false },
  { name: 'Tablet', price: 499, inStock: true },
  { name: 'Watch', price: 299, inStock: true }
];
// Filter by property
const inStock = products.filter(p => p.inStock);
console.log(inStock.length); // 3
// Filter by multiple conditions
const affordable = products.filter(p => p.price < 500 && p.inStock);
console.log(affordable.map(p => p.name)); // ['Tablet', 'Watch']
// ========================================
// REMOVING VALUES
// ========================================
// Remove falsy values
const mixed = [0, 1, '', 'hello', null, undefined, false, true, NaN];
const truthy = mixed.filter(Boolean);
console.log(truthy); // [1, 'hello', true]
// How it works:
// Boolean(0) = false, Boolean(1) = true, etc.
// Remove specific value
const withoutThree = numbers.filter(n => n !== 3);
console.log(withoutThree); // [1, 2, 4, 5, 6, 7, 8, 9, 10]
// Remove nulls and undefined
const data = [1, null, 2, undefined, 3, null];
const clean = data.filter(x => x != null); // Uses loose equality
console.log(clean); // [1, 2, 3]
// Or strict:
const cleanStrict = data.filter(x => x !== null && x !== undefined);
// ========================================
// UNIQUE VALUES
// ========================================
const duplicates = [1, 2, 2, 3, 3, 3, 4];
const unique = duplicates.filter((value, index, arr) => 
  arr.indexOf(value) === index
);
console.log(unique); // [1, 2, 3, 4]
// Better: Use Set
const uniqueSet = [...new Set(duplicates)];
console.log(uniqueSet); // [1, 2, 3, 4]
// Unique objects by property
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' } // Duplicate
];
const uniqueUsers = users.filter((user, index, arr) =>
  arr.findIndex(u => u.id === user.id) === index
);
// ========================================
// FILTER WITH INDEX
// ========================================
// Keep every other element
const everyOther = numbers.filter((_, i) => i % 2 === 0);
console.log(everyOther); // [1, 3, 5, 7, 9]
// Keep first 5 elements (prefer slice though)
const firstFive = numbers.filter((_, i) => i < 5);
// ========================================
// SEARCH/FILTER PATTERNS
// ========================================
// Search by partial match
const names = ['John', 'Jane', 'Bob', 'Alice', 'Johnny'];
const searchTerm = 'jo';
const matches = names.filter(name => 
  name.toLowerCase().includes(searchTerm.toLowerCase())
);
console.log(matches); // ['John', 'Johnny']
// Filter by array of allowed values
const allowedIds = [1, 3, 5];
const users2 = [
  { id: 1, name: 'A' },
  { id: 2, name: 'B' },
  { id: 3, name: 'C' }
];
const filtered = users2.filter(u => allowedIds.includes(u.id));
// Exclude by array of values
const excluded = users2.filter(u => !allowedIds.includes(u.id));
\`\`\`
### reduce() - Accumulate to Single Value
Reduce is the most powerful array method. It can implement map, filter, and more.
\`\`\`js
// reduce(callback(accumulator, currentValue, index, array), initialValue)
// Returns a single accumulated value
const numbers = [1, 2, 3, 4, 5];
// ========================================
// BASIC REDUCTION - Sum
// ========================================
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // 15
// How it works:
// Initial: acc = 0
// Step 1: acc = 0 + 1 = 1
// Step 2: acc = 1 + 2 = 3
// Step 3: acc = 3 + 3 = 6
// Step 4: acc = 6 + 4 = 10
// Step 5: acc = 10 + 5 = 15
// Without initial value (uses first element)
const sum2 = numbers.reduce((acc, curr) => acc + curr);
console.log(sum2); // 15
// IMPORTANT: Always provide initial value!
// Empty array without initial value throws error
// [].reduce((a, b) => a + b); // TypeError!
// [].reduce((a, b) => a + b, 0); // 0 - Safe
// ========================================
// COMMON REDUCTIONS
// ========================================
// Product
const product = numbers.reduce((acc, curr) => acc * curr, 1);
console.log(product); // 120
// Maximum
const max = numbers.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
console.log(max); // 5
// Or simpler:
const max2 = numbers.reduce((a, b) => a > b ? a : b);
// Minimum
const min = numbers.reduce((a, b) => a < b ? a : b);
// Average
const avg = numbers.reduce((acc, curr, i, arr) => {
  acc += curr;
  if (i === arr.length - 1) {
    return acc / arr.length;
  }
  return acc;
}, 0);
// ========================================
// COUNT OCCURRENCES
// ========================================
const letters = ['a', 'b', 'a', 'c', 'b', 'a', 'd'];
const counts = letters.reduce((acc, letter) => {
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
}, {});
console.log(counts); // { a: 3, b: 2, c: 1, d: 1 }
// Count by property
const orders = [
  { status: 'pending' },
  { status: 'shipped' },
  { status: 'pending' },
  { status: 'delivered' }
];
const statusCounts = orders.reduce((acc, order) => {
  acc[order.status] = (acc[order.status] || 0) + 1;
  return acc;
}, {});
console.log(statusCounts); // { pending: 2, shipped: 1, delivered: 1 }
// ========================================
// GROUP BY
// ========================================
const people = [
  { name: 'John', age: 25, city: 'NYC' },
  { name: 'Jane', age: 30, city: 'LA' },
  { name: 'Bob', age: 25, city: 'NYC' },
  { name: 'Alice', age: 30, city: 'LA' }
];
// Group by age
const byAge = people.reduce((acc, person) => {
  const key = person.age;
  acc[key] = acc[key] || [];
  acc[key].push(person);
  return acc;
}, {});
console.log(byAge);
// { 25: [{name:'John'...}, {name:'Bob'...}], 30: [...] }
// Generic groupBy function
function groupBy(arr, keyFn) {
  return arr.reduce((acc, item) => {
    const key = typeof keyFn === 'function' ? keyFn(item) : item[keyFn];
    acc[key] = acc[key] || [];
    acc[key].push(item);
    return acc;
  }, {});
}
const byCity = groupBy(people, 'city');
const byDecade = groupBy(people, p => Math.floor(p.age / 10) * 10);
// Note: Object.groupBy() is now available in modern browsers (ES2024)
const grouped = Object.groupBy(people, p => p.city);
// ========================================
// FLATTEN ARRAY
// ========================================
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.reduce((acc, curr) => acc.concat(curr), []);
console.log(flat); // [1, 2, 3, 4, 5, 6]
// Or better: use flat()
const flat2 = nested.flat();
// ========================================
// IMPLEMENT MAP WITH REDUCE
// ========================================
const mapWithReduce = (arr, fn) => 
  arr.reduce((acc, curr, i) => {
    acc.push(fn(curr, i, arr));
    return acc;
  }, []);
console.log(mapWithReduce([1, 2, 3], x => x * 2)); // [2, 4, 6]
// ========================================
// IMPLEMENT FILTER WITH REDUCE
// ========================================
const filterWithReduce = (arr, fn) =>
  arr.reduce((acc, curr, i) => {
    if (fn(curr, i, arr)) {
      acc.push(curr);
    }
    return acc;
  }, []);
console.log(filterWithReduce([1, 2, 3, 4], x => x % 2 === 0)); // [2, 4]
// ========================================
// CHAINING OPERATIONS
// ========================================
// Instead of multiple passes:
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// Multiple passes (less efficient)
const result1 = data
  .filter(n => n % 2 === 0)
  .map(n => n * 2)
  .reduce((sum, n) => sum + n, 0);
// Single pass with reduce (more efficient for large arrays)
const result2 = data.reduce((acc, n) => {
  if (n % 2 === 0) {
    acc += n * 2;
  }
  return acc;
}, 0);
// ========================================
// REDUCE RIGHT (Right to Left)
// ========================================
const arr = ['a', 'b', 'c'];
const leftToRight = arr.reduce((acc, curr) => acc + curr, '');
console.log(leftToRight); // 'abc'
const rightToLeft = arr.reduceRight((acc, curr) => acc + curr, '');
console.log(rightToLeft); // 'cba'
// Use case: Function composition (right to left)
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);
// ========================================
// PIPELINE WITH REDUCE
// ========================================
const pipeline = (...fns) => initial =>
  fns.reduce((acc, fn) => fn(acc), initial);
const process = pipeline(
  x => x + 1,
  x => x * 2,
  x => x - 5
);
console.log(process(5)); // 7: ((5+1)*2)-5
\`\`\`
### slice() - Extract Portion
\`\`\`js
// slice(startIndex?, endIndex?)
// Returns NEW array with portion of original
// Does NOT mutate original
const arr = [1, 2, 3, 4, 5];
// ========================================
// BASIC SLICING
// ========================================
console.log(arr.slice(1, 3));  // [2, 3] - from 1 to 3 (exclusive)
console.log(arr.slice(2));     // [3, 4, 5] - from 2 to end
console.log(arr.slice());      // [1, 2, 3, 4, 5] - shallow copy!
// ========================================
// NEGATIVE INDICES
// ========================================
console.log(arr.slice(-2));    // [4, 5] - last 2 elements
console.log(arr.slice(-3, -1)); // [3, 4] - from 3rd last to 2nd last
console.log(arr.slice(1, -1)); // [2, 3, 4] - from 1 to second-to-last
// ========================================
// COMMON PATTERNS
// ========================================
// Get first N elements
const firstThree = arr.slice(0, 3); // [1, 2, 3]
// Get last N elements
const lastTwo = arr.slice(-2); // [4, 5]
// Remove first element (immutably)
const withoutFirst = arr.slice(1); // [2, 3, 4, 5]
// Remove last element (immutably)
const withoutLast = arr.slice(0, -1); // [1, 2, 3, 4]
// Shallow clone
const clone = arr.slice();
const clone2 = [...arr]; // Equivalent
// ========================================
// SLICE VS SPLICE
// ========================================
// slice: Non-mutating, returns extracted portion
// splice: Mutating, modifies original, returns removed elements
const test1 = [1, 2, 3, 4, 5];
const sliced = test1.slice(1, 3);
console.log(test1);   // [1, 2, 3, 4, 5] - unchanged
console.log(sliced);  // [2, 3]
const test2 = [1, 2, 3, 4, 5];
const spliced = test2.splice(1, 2);
console.log(test2);   // [1, 4, 5] - modified!
console.log(spliced); // [2, 3]
// ========================================
// TOOSPLICED (ES2023) - Non-mutating splice
// ========================================
const original = [1, 2, 3, 4, 5];
const modified = original.toSpliced(1, 2, 'a', 'b');
console.log(original); // [1, 2, 3, 4, 5] - unchanged
console.log(modified); // [1, 'a', 'b', 4, 5]
\`\`\`
### concat() and flat()
\`\`\`js
// ========================================
// CONCAT - Merge arrays
// ========================================
const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];
// Concat two arrays
const merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4]
// Concat multiple arrays
const all = arr1.concat(arr2, arr3);
console.log(all); // [1, 2, 3, 4, 5, 6]
// Concat with values
const withValues = arr1.concat(3, 4, [5, 6]);
console.log(withValues); // [1, 2, 3, 4, 5, 6]
// Original arrays unchanged
console.log(arr1); // [1, 2]
// Spread operator alternative (often preferred)
const spreadMerge = [...arr1, ...arr2, ...arr3];
console.log(spreadMerge); // [1, 2, 3, 4, 5, 6]
// ========================================
// FLAT - Flatten nested arrays
// ========================================
const nested = [1, [2, 3], [4, [5, 6]]];
// Flatten 1 level (default)
console.log(nested.flat()); // [1, 2, 3, 4, [5, 6]]
// Flatten 2 levels
console.log(nested.flat(2)); // [1, 2, 3, 4, 5, 6]
// Flatten all levels
const deepNested = [1, [2, [3, [4, [5]]]]];
console.log(deepNested.flat(Infinity)); // [1, 2, 3, 4, 5]
// Flat also removes empty slots
const sparse = [1, , 3, , 5];
console.log(sparse.flat()); // [1, 3, 5]
// ========================================
// FLATMAP - Map then flat(1)
// ========================================
// More efficient than .map().flat()
const sentences = ['Hello World', 'How are you'];
const words = sentences.flatMap(s => s.split(' '));
console.log(words); // ['Hello', 'World', 'How', 'are', 'you']
// Map would give: [['Hello', 'World'], ['How', 'are', 'you']]
// flatMap flattens one level
// Duplicate elements
const nums = [1, 2, 3];
const duplicated = nums.flatMap(n => [n, n]);
console.log(duplicated); // [1, 1, 2, 2, 3, 3]
// Filter and map in one
const data = [1, 2, 3, 4, 5];
const evenDoubled = data.flatMap(n => n % 2 === 0 ? [n * 2] : []);
console.log(evenDoubled); // [4, 8]
// Equivalent to:
const evenDoubled2 = data.filter(n => n % 2 === 0).map(n => n * 2);
\`\`\`
---
## SEARCH AND FIND METHODS
### find() and findIndex()
\`\`\`js
// find(callback) - Returns first element that matches
// findIndex(callback) - Returns index of first element that matches
const users = [
  { id: 1, name: 'John', role: 'admin' },
  { id: 2, name: 'Jane', role: 'user' },
  { id: 3, name: 'Bob', role: 'user' }
];
// ========================================
// FIND - Returns element or undefined
// ========================================
const admin = users.find(u => u.role === 'admin');
console.log(admin); // { id: 1, name: 'John', role: 'admin' }
const manager = users.find(u => u.role === 'manager');
console.log(manager); // undefined
// Find by id
const user = users.find(u => u.id === 2);
console.log(user.name); // 'Jane'
// ========================================
// FINDINDEX - Returns index or -1
// ========================================
const adminIndex = users.findIndex(u => u.role === 'admin');
console.log(adminIndex); // 0
const managerIndex = users.findIndex(u => u.role === 'manager');
console.log(managerIndex); // -1
// ========================================
// FINDLAST & FINDLASTINDEX (ES2023)
// ========================================
const numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
const lastGreaterThan3 = numbers.findLast(n => n > 3);
console.log(lastGreaterThan3); // 4
const lastGreaterThan3Index = numbers.findLastIndex(n => n > 3);
console.log(lastGreaterThan3Index); // 5
// ========================================
// FIND VS FILTER
// ========================================
// find: Returns first match (single element)
// filter: Returns all matches (array)
const allUsers = users.filter(u => u.role === 'user');
console.log(allUsers.length); // 2
const firstUser = users.find(u => u.role === 'user');
console.log(firstUser.name); // 'Jane'
\`\`\`
### indexOf(), lastIndexOf(), includes()
\`\`\`js
const arr = [1, 2, 3, 4, 5, 3, 2, 1];
// ========================================
// INDEXOF - First occurrence
// ========================================
console.log(arr.indexOf(3));  // 2
console.log(arr.indexOf(10)); // -1 (not found)
// Start from index
console.log(arr.indexOf(3, 3)); // 5 (search from index 3)
// ========================================
// LASTINDEXOF - Last occurrence
// ========================================
console.log(arr.lastIndexOf(3)); // 5
console.log(arr.lastIndexOf(2)); // 6
// ========================================
// INCLUDES - Check existence (ES7)
// ========================================
console.log(arr.includes(3));  // true
console.log(arr.includes(10)); // false
// Start from index
console.log(arr.includes(3, 6)); // false (search from index 6)
// ========================================
// NaN HANDLING
// ========================================
const withNaN = [1, 2, NaN, 4];
// indexOf doesn't work with NaN
console.log(withNaN.indexOf(NaN)); // -1 (wrong!)
// includes handles NaN correctly
console.log(withNaN.includes(NaN)); // true
// ========================================
// CHECKING FOR ELEMENT
// ========================================
// Old way
if (arr.indexOf(3) !== -1) {
  console.log('Found!');
}
// Modern way (cleaner)
if (arr.includes(3)) {
  console.log('Found!');
}
// ========================================
// WITH OBJECTS
// ========================================
const users = [{ id: 1 }, { id: 2 }];
// indexOf/includes check reference, not value!
console.log(users.indexOf({ id: 1 })); // -1 (different reference)
console.log(users.includes({ id: 1 })); // false
// Use find instead for objects
const found = users.find(u => u.id === 1);
console.log(found); // { id: 1 }
\`\`\`
### some() and every()
\`\`\`js
// some() - At least ONE element passes test
// every() - ALL elements pass test
const numbers = [1, 2, 3, 4, 5];
// ========================================
// SOME - Returns true if ANY element matches
// ========================================
console.log(numbers.some(n => n > 3));  // true
console.log(numbers.some(n => n > 10)); // false
// Check if any user is admin
const users = [
  { name: 'John', role: 'user' },
  { name: 'Jane', role: 'admin' }
];
const hasAdmin = users.some(u => u.role === 'admin');
console.log(hasAdmin); // true
// Empty array
console.log([].some(n => n > 0)); // false (vacuous truth)
// ========================================
// EVERY - Returns true if ALL elements match
// ========================================
console.log(numbers.every(n => n > 0)); // true
console.log(numbers.every(n => n > 3)); // false
// Check if all items in stock
const products = [
  { name: 'A', inStock: true },
  { name: 'B', inStock: true },
  { name: 'C', inStock: false }
];
const allInStock = products.every(p => p.inStock);
console.log(allInStock); // false
// Empty array
console.log([].every(n => n > 100)); // true (vacuous truth)
// ========================================
// SHORT-CIRCUIT BEHAVIOR
// ========================================
// some: Stops when first true found
// every: Stops when first false found
const data = [1, 2, 3, 4, 5];
data.some(n => {
  console.log('Checking:', n);
  return n === 3;
});
// Logs: Checking: 1, Checking: 2, Checking: 3 (stops early)
data.every(n => {
  console.log('Checking:', n);
  return n < 3;
});
// Logs: Checking: 1, Checking: 2, Checking: 3 (stops at first fail)
// ========================================
// PRACTICAL PATTERNS
// ========================================
// Validation
const isValidForm = [
  { field: 'name', value: 'John' },
  { field: 'email', value: 'john@example.com' }
].every(f => f.value.length > 0);
// Check array intersection
const arr1 = [1, 2, 3];
const arr2 = [3, 4, 5];
const hasCommon = arr1.some(x => arr2.includes(x));
console.log(hasCommon); // true
// Check if array is subset
const isSubset = arr1.every(x => [1, 2, 3, 4, 5].includes(x));
console.log(isSubset); // true
\`\`\`
---
## ITERATION METHODS
### forEach()
\`\`\`js
// forEach(callback(element, index, array))
// Executes callback for each element
// Returns undefined - can't chain!
const numbers = [1, 2, 3, 4, 5];
// ========================================
// BASIC USAGE
// ========================================
numbers.forEach(n => console.log(n));
// 1, 2, 3, 4, 5
// With index
numbers.forEach((n, i) => console.log(\`\${i}: \${n}\`));
// 0: 1, 1: 2, 2: 3, 3: 4, 4: 5
// ========================================
// SIDE EFFECTS
// ========================================
// forEach is for side effects (logging, updating external state)
let sum = 0;
numbers.forEach(n => sum += n);
console.log(sum); // 15
// Update DOM
document.querySelectorAll('.item').forEach((el, i) => {
  el.textContent = \`Item \${i + 1}\`;
});
// ========================================
// CANNOT BREAK OUT OF FOREACH
// ========================================
// return only skips current iteration, doesn't break
numbers.forEach(n => {
  if (n === 3) return; // Doesn't stop loop!
  console.log(n);
}); // 1, 2, 4, 5
// To break early, use:
// 1. for...of with break
for (const n of numbers) {
  if (n === 3) break;
  console.log(n);
} // 1, 2
// 2. some() (returns true to stop)
numbers.some(n => {
  if (n === 3) return true; // Stops iteration
  console.log(n);
  return false;
}); // 1, 2
// 3. Regular for loop
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] === 3) break;
  console.log(numbers[i]);
}
// ========================================
// ASYNC GOTCHA
// ========================================
// forEach doesn't wait for async callbacks!
// WRONG:
async function processItems(items) {
  items.forEach(async (item) => {
    await processItem(item); // Doesn't wait!
  });
  console.log('Done'); // Runs immediately!
}
// RIGHT: Use for...of
async function processItemsCorrect(items) {
  for (const item of items) {
    await processItem(item);
  }
  console.log('Done'); // Runs after all processed
}
// Or use Promise.all for parallel:
async function processItemsParallel(items) {
  await Promise.all(items.map(item => processItem(item)));
  console.log('Done');
}
// ========================================
// THISARG PARAMETER
// ========================================
const obj = {
  multiplier: 2,
  multiply(arr) {
    const result = [];
    arr.forEach(function(n) {
      result.push(n * this.multiplier);
    }, this); // Pass 'this' as second argument
    return result;
  }
};
console.log(obj.multiply([1, 2, 3])); // [2, 4, 6]
// Or just use arrow function (inherits this)
const obj2 = {
  multiplier: 2,
  multiply(arr) {
    const result = [];
    arr.forEach(n => {
      result.push(n * this.multiplier);
    });
    return result;
  }
};
\`\`\`
### entries(), keys(), values()
\`\`\`js
const arr = ['a', 'b', 'c'];
// ========================================
// ENTRIES - [index, value] pairs
// ========================================
const entries = arr.entries();
console.log([...entries]); // [[0,'a'], [1,'b'], [2,'c']]
for (const [index, value] of arr.entries()) {
  console.log(\`\${index}: \${value}\`);
}
// 0: a
// 1: b
// 2: c
// ========================================
// KEYS - Indices
// ========================================
const keys = arr.keys();
console.log([...keys]); // [0, 1, 2]
for (const index of arr.keys()) {
  console.log(index);
} // 0, 1, 2
// ========================================
// VALUES - Values (default iterator)
// ========================================
const values = arr.values();
console.log([...values]); // ['a', 'b', 'c']
for (const value of arr.values()) {
  console.log(value);
} // a, b, c
// Same as:
for (const value of arr) {
  console.log(value);
}
\`\`\`
---
## STATIC ARRAY METHODS
\`\`\`js
// ========================================
// ARRAY.ISARRAY()
// ========================================
console.log(Array.isArray([1, 2, 3]));    // true
console.log(Array.isArray('hello'));       // false
console.log(Array.isArray({ length: 3 })); // false
console.log(Array.isArray(new Array()));   // true
// Why not use instanceof?
// instanceof fails across different JavaScript contexts (iframes)
const iframe = document.createElement('iframe');
document.body.appendChild(iframe);
const iframeArray = iframe.contentWindow.Array;
const arr = new iframeArray(1, 2, 3);
console.log(arr instanceof Array);  // false (different Array constructor)
console.log(Array.isArray(arr));    // true (works correctly)
// ========================================
// ARRAY.FROM() - See earlier section
// ========================================
// ========================================
// ARRAY.OF() - See earlier section
// ========================================
\`\`\`
---
## IMPLEMENT ARRAY METHODS FROM SCRATCH
Understanding the internals helps in interviews and deepens understanding.
### Implement map()
\`\`\`js
Array.prototype.myMap = function(callback, thisArg) {
  // Handle null/undefined 'this'
  if (this == null) {
    throw new TypeError('Cannot read properties of null/undefined');
  }
  // Ensure callback is a function
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const result = [];
  const arr = Object(this); // Convert to object
  const len = arr.length >>> 0; // Ensure non-negative integer
  for (let i = 0; i < len; i++) {
    // Check if index exists (handles sparse arrays)
    if (i in arr) {
      result[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return result;
};
// Test
console.log([1, 2, 3].myMap(x => x * 2)); // [2, 4, 6]
console.log([1, , 3].myMap(x => x * 2)); // [2, empty, 6] - sparse
\`\`\`
### Implement filter()
\`\`\`js
Array.prototype.myFilter = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('Cannot read properties of null/undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const result = [];
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      const value = arr[i];
      // Only push if callback returns truthy
      if (callback.call(thisArg, value, i, arr)) {
        result.push(value);
      }
    }
  }
  return result;
};
// Test
console.log([1, 2, 3, 4, 5].myFilter(x => x % 2 === 0)); // [2, 4]
\`\`\`
### Implement reduce()
\`\`\`js
Array.prototype.myReduce = function(callback, initialValue) {
  if (this == null) {
    throw new TypeError('Cannot read properties of null/undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const arr = Object(this);
  const len = arr.length >>> 0;
  let accumulator;
  let startIndex = 0;
  // Check if initialValue provided
  if (arguments.length >= 2) {
    accumulator = initialValue;
  } else {
    // Find first existing index for initial value
    let found = false;
    while (startIndex < len && !found) {
      if (startIndex in arr) {
        accumulator = arr[startIndex];
        found = true;
      }
      startIndex++;
    }
    if (!found) {
      throw new TypeError('Reduce of empty array with no initial value');
    }
  }
  for (let i = startIndex; i < len; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }
  return accumulator;
};
// Test
console.log([1, 2, 3, 4].myReduce((a, b) => a + b, 0)); // 10
console.log([1, 2, 3, 4].myReduce((a, b) => a + b));    // 10
\`\`\`
### Implement find()
\`\`\`js
Array.prototype.myFind = function(callback, thisArg) {
  if (this == null) {
    throw new TypeError('Cannot read properties of null/undefined');
  }
  if (typeof callback !== 'function') {
    throw new TypeError(callback + ' is not a function');
  }
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr) {
      const value = arr[i];
      if (callback.call(thisArg, value, i, arr)) {
        return value; // Return first matching element
      }
    }
  }
  return undefined; // Not found
};
// Test
console.log([1, 2, 3, 4].myFind(x => x > 2)); // 3
console.log([1, 2, 3, 4].myFind(x => x > 10)); // undefined
\`\`\`
### Implement flat()
\`\`\`js
Array.prototype.myFlat = function(depth = 1) {
  if (this == null) {
    throw new TypeError('Cannot read properties of null/undefined');
  }
  const arr = Object(this);
  const result = [];
  function flatten(arr, d) {
    for (let i = 0; i < arr.length; i++) {
      if (i in arr) {
        const value = arr[i];
        if (Array.isArray(value) && d > 0) {
          flatten(value, d - 1);
        } else {
          result.push(value);
        }
      }
    }
  }
  flatten(arr, depth);
  return result;
};
// Test
console.log([1, [2, [3, [4]]]].myFlat(1)); // [1, 2, [3, [4]]]
console.log([1, [2, [3, [4]]]].myFlat(2)); // [1, 2, 3, [4]]
console.log([1, [2, [3, [4]]]].myFlat(Infinity)); // [1, 2, 3, 4]
\`\`\`
### Implement some() and every()
\`\`\`js
Array.prototype.mySome = function(callback, thisArg) {
  if (this == null) throw new TypeError();
  if (typeof callback !== 'function') throw new TypeError();
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr && callback.call(thisArg, arr[i], i, arr)) {
      return true; // Short-circuit on first true
    }
  }
  return false;
};
Array.prototype.myEvery = function(callback, thisArg) {
  if (this == null) throw new TypeError();
  if (typeof callback !== 'function') throw new TypeError();
  const arr = Object(this);
  const len = arr.length >>> 0;
  for (let i = 0; i < len; i++) {
    if (i in arr && !callback.call(thisArg, arr[i], i, arr)) {
      return false; // Short-circuit on first false
    }
  }
  return true;
};
// Test
console.log([1, 2, 3].mySome(x => x > 2));  // true
console.log([1, 2, 3].myEvery(x => x > 0)); // true
\`\`\`
---
## COMMON INTERVIEW QUESTIONS
### Q1: What's the difference between map() and forEach()?
\`\`\`js
// forEach:
// - Returns undefined
// - Used for side effects
// - Cannot chain
// map:
// - Returns new array
// - Used for transformation
// - Can chain
const arr = [1, 2, 3];
const forEachResult = arr.forEach(x => x * 2);
console.log(forEachResult); // undefined
const mapResult = arr.map(x => x * 2);
console.log(mapResult); // [2, 4, 6]
// Chaining
arr.map(x => x * 2).filter(x => x > 2); // Works
// arr.forEach(x => x * 2).filter(x => x > 2); // Error!
\`\`\`
### Q2: What's the difference between slice() and splice()?
\`\`\`js
// slice: NON-MUTATING, returns portion
// splice: MUTATING, modifies original
const arr1 = [1, 2, 3, 4, 5];
const sliced = arr1.slice(1, 3);
console.log(arr1);   // [1, 2, 3, 4, 5] - unchanged
console.log(sliced); // [2, 3]
const arr2 = [1, 2, 3, 4, 5];
const spliced = arr2.splice(1, 2);
console.log(arr2);   // [1, 4, 5] - modified!
console.log(spliced); // [2, 3] - removed elements
\`\`\`
### Q3: How do you remove duplicates from an array?
\`\`\`js
const arr = [1, 2, 2, 3, 3, 3, 4];
// Method 1: Set (most common)
const unique1 = [...new Set(arr)];
console.log(unique1); // [1, 2, 3, 4]
// Method 2: filter with indexOf
const unique2 = arr.filter((value, index) => 
  arr.indexOf(value) === index
);
// Method 3: reduce
const unique3 = arr.reduce((acc, value) => {
  if (!acc.includes(value)) acc.push(value);
  return acc;
}, []);
// For objects - use Map or custom logic
const users = [
  { id: 1, name: 'John' },
  { id: 2, name: 'Jane' },
  { id: 1, name: 'John' }
];
const uniqueUsers = [...new Map(users.map(u => [u.id, u])).values()];
\`\`\`
### Q4: How do you flatten an array?
\`\`\`js
const nested = [1, [2, [3, [4]]]];
// Method 1: flat()
console.log(nested.flat(Infinity)); // [1, 2, 3, 4]
// Method 2: reduce + recursion
function flatten(arr) {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
}
// Method 3: Stack-based (no recursion)
function flattenIterative(arr) {
  const stack = [...arr];
  const result = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);
    } else {
      result.unshift(next);
    }
  }
  return result;
}
\`\`\`
### Q5: Find the intersection of two arrays
\`\`\`js
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [3, 4, 5, 6, 7];
// Method 1: filter + includes
const intersection = arr1.filter(x => arr2.includes(x));
console.log(intersection); // [3, 4, 5]
// Method 2: Set (more efficient for large arrays)
const set2 = new Set(arr2);
const intersection2 = arr1.filter(x => set2.has(x));
// Find union
const union = [...new Set([...arr1, ...arr2])];
console.log(union); // [1, 2, 3, 4, 5, 6, 7]
// Find difference (in arr1 but not in arr2)
const difference = arr1.filter(x => !arr2.includes(x));
console.log(difference); // [1, 2]
\`\`\`
### Q6: Find the most frequent element
\`\`\`js
const arr = ['a', 'b', 'a', 'c', 'a', 'b'];
function mostFrequent(arr) {
  const counts = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).reduce((a, b) => 
    b[1] > a[1] ? b : a
  )[0];
}
console.log(mostFrequent(arr)); // 'a'
\`\`\`
### Q7: Chunk an array into smaller arrays
\`\`\`js
function chunk(arr, size) {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
}
console.log(chunk([1, 2, 3, 4, 5], 2));
// [[1, 2], [3, 4], [5]]
// Using reduce
function chunkReduce(arr, size) {
  return arr.reduce((acc, _, i) => {
    if (i % size === 0) {
      acc.push(arr.slice(i, i + size));
    }
    return acc;
  }, []);
}
\`\`\`
### Q8: Rotate an array
\`\`\`js
// Rotate right by k positions
function rotateRight(arr, k) {
  const n = arr.length;
  k = k % n; // Handle k > n
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
console.log(rotateRight([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]
// Rotate left by k positions
function rotateLeft(arr, k) {
  const n = arr.length;
  k = k % n;
  return [...arr.slice(k), ...arr.slice(0, k)];
}
console.log(rotateLeft([1, 2, 3, 4, 5], 2)); // [3, 4, 5, 1, 2]
\`\`\`
### Q9: What's the output?
\`\`\`js
// Question 1
console.log(['1', '2', '3'].map(parseInt));
// Answer: [1, NaN, NaN]
// Why: map passes (value, index), parseInt uses index as radix
// parseInt('1', 0) = 1, parseInt('2', 1) = NaN, parseInt('3', 2) = NaN
// Question 2
const arr = [1, 2, 3];
arr[10] = 11;
console.log(arr.length); // 11
console.log(arr.filter(x => x)); // [1, 2, 3, 11] - empty slots skipped
// Question 3
console.log([1, 2, 3].fill(4, 1, 2)); // [1, 4, 3]
// Question 4
console.log([...'hello']); // ['h', 'e', 'l', 'l', 'o']
// Question 5
const a = [1, 2, 3];
const b = a;
b.push(4);
console.log(a); // [1, 2, 3, 4] - same reference!
\`\`\`
---
## PERFORMANCE CONSIDERATIONS
\`\`\`js
// ========================================
// TIME COMPLEXITY
// ========================================
// push, pop: O(1)
// shift, unshift: O(n) - must re-index
// splice: O(n)
// slice: O(n)
// concat: O(n)
// indexOf, includes: O(n)
// find, findIndex: O(n)
// map, filter, reduce: O(n)
// sort: O(n log n)
// ========================================
// AVOID MULTIPLE ITERATIONS
// ========================================
// BAD: Multiple passes
const result = arr
  .filter(x => x > 0)
  .map(x => x * 2)
  .reduce((a, b) => a + b, 0);
// BETTER: Single pass with reduce
const result2 = arr.reduce((acc, x) => {
  if (x > 0) acc += x * 2;
  return acc;
}, 0);
// ========================================
// USE SET FOR LOOKUPS
// ========================================
// BAD: O(n) lookup with includes
const large = [/* thousands of items */];
arr.filter(x => large.includes(x)); // O(n*m)
// GOOD: O(1) lookup with Set
const largeSet = new Set(large);
arr.filter(x => largeSet.has(x)); // O(n)
// ========================================
// AVOID ARRAY MODIFICATIONS IN LOOPS
// ========================================
// BAD: Growing array in loop
let result3 = [];
for (const item of data) {
  result3 = result3.concat([item]); // Creates new array each time!
}
// GOOD: Push to existing array
const result4 = [];
for (const item of data) {
  result4.push(item);
}
\`\`\`
---
## QUICK REFERENCE CHEAT SHEET
| Method | Mutates | Returns | Purpose |
|--------|---------|---------|---------|
| push() | Yes | length | Add to end |
| pop() | Yes | element | Remove from end |
| shift() | Yes | element | Remove from start |
| unshift() | Yes | length | Add to start |
| splice() | Yes | removed[] | Add/remove anywhere |
| sort() | Yes | array | Sort in place |
| reverse() | Yes | array | Reverse in place |
| fill() | Yes | array | Fill with value |
| map() | No | array | Transform elements |
| filter() | No | array | Filter elements |
| reduce() | No | any | Accumulate to value |
| slice() | No | array | Extract portion |
| concat() | No | array | Merge arrays |
| flat() | No | array | Flatten nested |
| find() | No | element | First match |
| findIndex() | No | number | Index of first match |
| indexOf() | No | number | Index of value |
| includes() | No | boolean | Check existence |
| some() | No | boolean | Any match? |
| every() | No | boolean | All match? |
| forEach() | No | undefined | Iterate (side effects) |
---
## KEY TAKEAWAYS FOR INTERVIEWS
1. **Know which methods mutate** - splice, sort, reverse, push, pop, shift, unshift
2. **Use immutable patterns** - spread, slice, map, filter for React/Redux
3. **Understand reduce** - Can implement map, filter, and more
4. **Handle edge cases** - Empty arrays, sparse arrays, NaN
5. **Be able to implement methods** - Shows deep understanding
6. **Know performance** - shift/unshift are O(n), use Set for lookups
7. **Avoid common gotchas** - parseInt with map, sort without compare function
8. **Chain appropriately** - map/filter/reduce, not forEach
9. **ES2023 methods** - toSorted, toReversed, toSpliced, findLast
10. **Array.from** - Create arrays from iterables and array-likes`,
  language: 'javascript'
},

    // ==========================================
    // SECTION 5: FUNCTIONS & FUNCTIONAL PROGRAMMING
    // ==========================================
     {
  id: 'interview-functions',
  title: 'Functions - All Types',
  content: `# Functions - Complete Interview Guide
## What is a Function?
A function is a reusable block of code designed to perform a specific task. In JavaScript, functions are first-class citizens, meaning they can be assigned to variables, passed as arguments, returned from other functions, and have properties and methods.
## Why Functions Matter
Functions are fundamental to JavaScript because:
- They enable code reuse and modularity
- They create scope and closures
- They're the building blocks of functional programming
- They enable powerful patterns like callbacks, promises, and higher-order functions
- Understanding functions deeply is crucial for interviews
## Function Types in JavaScript
1. **Function Declaration** - Hoisted, named function
2. **Function Expression** - Not hoisted, can be anonymous
3. **Arrow Function** - Concise syntax, lexical 'this'
4. **IIFE** - Immediately Invoked Function Expression
5. **Generator Function** - Can pause and resume execution
6. **Async Function** - Built-in promise handling
## Key Concepts
- First-class functions (functions as values)
- Higher-order functions (functions operating on functions)
- Pure functions (no side effects, deterministic)
- Function composition (combining functions)
- Closures (functions remembering their scope)
- Currying and partial application
---
## FUNCTION DECLARATION
Function declarations are the most traditional way to define functions. They are hoisted, meaning you can call them before they appear in the code.
\`\`\`js
// Function Declaration - Hoisted to the top of its scope
// Can be called BEFORE the declaration appears in code
console.log(greet('John')); // "Hello, John!" - Works due to hoisting
function greet(name) {
  return 'Hello, ' + name + '!';
}
// Function declarations are hoisted completely
// Both the name AND the implementation are available
// This works:
sayHi(); // "Hi there!"
function sayHi() {
  console.log('Hi there!');
}
// Function declarations create a variable with the function name
// in the current scope
console.log(typeof greet); // "function"
// Hoisting example - what JavaScript actually does:
// JavaScript moves declarations to the top, like this:
// function greet(name) { return 'Hello, ' + name + '!'; }
// console.log(greet('John'));
\`\`\`
### Function Declaration in Blocks
\`\`\`js
// In strict mode, function declarations are block-scoped
'use strict';
if (true) {
  function blockFunction() {
    return 'Inside block';
  }
  console.log(blockFunction()); // "Inside block"
}
// console.log(blockFunction()); // ReferenceError in strict mode
// In non-strict mode, behavior varies by browser - avoid this pattern!
// Better approach: use function expressions
let myFunc;
if (true) {
  myFunc = function() {
    return 'Inside block';
  };
}
console.log(myFunc()); // "Inside block"
\`\`\`
---
## FUNCTION EXPRESSION
Function expressions assign a function to a variable. They are NOT hoisted, so you must define them before use.
\`\`\`js
// Function Expression - NOT hoisted
// console.log(greet2('John')); // TypeError: greet2 is not a function
const greet2 = function(name) {
  return 'Hello, ' + name;
};
console.log(greet2('John')); // "Hello, John" - Works after definition
// The variable declaration IS hoisted, but the assignment is not
// JavaScript sees it like this:
// var greet2; // hoisted (undefined)
// console.log(greet2('John')); // Error: greet2 is not a function
// greet2 = function(name) { ... }; // assigned later
// Anonymous function expression (no name after 'function')
const anonymous = function(x) {
  return x * 2;
};
// Named function expression - the name is only available inside
const factorial = function fact(n) {
  if (n <= 1) return 1;
  return n * fact(n - 1); // 'fact' can be used for recursion
};
console.log(factorial(5)); // 120
// console.log(fact(5)); // ReferenceError: fact is not defined
// Benefits of named function expressions:
// 1. Self-reference for recursion
// 2. Better stack traces for debugging
// 3. More descriptive code
\`\`\`
### Why Use Function Expressions?
\`\`\`js
// 1. Conditional function creation
let calculate;
if (useNewAlgorithm) {
  calculate = function(x) { return x * 2; };
} else {
  calculate = function(x) { return x + x; };
}
// 2. As arguments to other functions (callbacks)
setTimeout(function() {
  console.log('Delayed message');
}, 1000);
// 3. As object methods
const calculator = {
  add: function(a, b) { return a + b; },
  subtract: function(a, b) { return a - b; }
};
// 4. As IIFE (Immediately Invoked Function Expression)
const result = (function(x) {
  return x * 2;
})(5);
console.log(result); // 10
// 5. Creating closures
function createCounter() {
  let count = 0;
  return function() {
    return ++count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
\`\`\`
---
## ARROW FUNCTIONS
Arrow functions provide a concise syntax and have lexical 'this' binding. Introduced in ES6, they're now widely used.
\`\`\`js
// Basic arrow function syntax
const greet = (name) => {
  return 'Hello, ' + name;
};
// Concise body - implicit return (no braces, no return keyword)
const greetShort = (name) => 'Hello, ' + name;
// Single parameter - parentheses optional
const double = x => x * 2;
// No parameters - empty parentheses required
const sayHello = () => 'Hello!';
// Multiple parameters - parentheses required
const add = (a, b) => a + b;
// Returning object literal - wrap in parentheses
// Without parens, braces are interpreted as function body
const createPerson = (name, age) => ({ name, age });
console.log(createPerson('John', 30)); // { name: 'John', age: 30 }
// Multi-line with explicit return
const calculate = (a, b, operation) => {
  const result = operation(a, b);
  console.log('Result:', result);
  return result;
};
// Arrow functions in array methods - very common pattern
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
const evens = numbers.filter(n => n % 2 === 0);
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log(doubled); // [2, 4, 6, 8, 10]
console.log(evens);   // [2, 4]
console.log(sum);     // 15
\`\`\`
### Arrow Functions vs Regular Functions - Key Differences
This is a very common interview question. Understanding these differences is crucial.
\`\`\`js
// ========================================
// DIFFERENCE 1: 'this' BINDING
// ========================================
// Regular functions have their own 'this' based on HOW they're called
// Arrow functions inherit 'this' from their enclosing scope (lexical this)
const obj = {
  name: 'MyObject',
  // Regular function - 'this' is the object when called as method
  regularMethod: function() {
    console.log('Regular:', this.name); // 'MyObject'
    // Nested regular function - 'this' is undefined/global
    function nestedRegular() {
      console.log('Nested regular:', this.name); // undefined
    }
    nestedRegular();
    // Arrow function - inherits 'this' from regularMethod
    const nestedArrow = () => {
      console.log('Nested arrow:', this.name); // 'MyObject'
    };
    nestedArrow();
  },
  // Arrow method - 'this' is from enclosing scope (NOT the object!)
  arrowMethod: () => {
    console.log('Arrow:', this.name); // undefined (global scope)
  }
};
obj.regularMethod();
obj.arrowMethod();
// Common use case: Callbacks in methods
const timer = {
  seconds: 0,
  // WRONG: regular function loses 'this'
  startWrong: function() {
    setInterval(function() {
      this.seconds++; // 'this' is not timer!
      console.log(this.seconds); // NaN
    }, 1000);
  },
  // FIX 1: Save 'this' reference
  startWithThat: function() {
    const that = this;
    setInterval(function() {
      that.seconds++;
      console.log(that.seconds);
    }, 1000);
  },
  // FIX 2: Use bind
  startWithBind: function() {
    setInterval(function() {
      this.seconds++;
      console.log(this.seconds);
    }.bind(this), 1000);
  },
  // FIX 3: Arrow function (best approach)
  startWithArrow: function() {
    setInterval(() => {
      this.seconds++; // 'this' is timer
      console.log(this.seconds);
    }, 1000);
  }
};
// ========================================
// DIFFERENCE 2: NO 'arguments' OBJECT
// ========================================
function regularWithArgs() {
  console.log(arguments); // [1, 2, 3] - array-like object
  console.log(arguments[0]); // 1
}
regularWithArgs(1, 2, 3);
const arrowWithArgs = () => {
  // console.log(arguments); // ReferenceError: arguments is not defined
};
// Arrow functions can access arguments from enclosing regular function
function outer() {
  const inner = () => {
    console.log(arguments); // arguments from outer
  };
  inner();
}
outer(1, 2, 3); // [1, 2, 3]
// Use rest parameters instead
const arrowWithRest = (...args) => {
  console.log(args); // Real array: [1, 2, 3]
};
arrowWithRest(1, 2, 3);
// ========================================
// DIFFERENCE 3: CANNOT BE CONSTRUCTORS
// ========================================
function RegularPerson(name) {
  this.name = name;
}
const john = new RegularPerson('John'); // Works
console.log(john.name); // 'John'
const ArrowPerson = (name) => {
  this.name = name;
};
// const jane = new ArrowPerson('Jane'); // TypeError: ArrowPerson is not a constructor
// Arrow functions don't have [[Construct]] internal method
// They also don't have a 'prototype' property
console.log(RegularPerson.prototype); // { constructor: ... }
console.log(ArrowPerson.prototype);   // undefined
// ========================================
// DIFFERENCE 4: NO 'new.target'
// ========================================
function RegularConstructor() {
  console.log(new.target); // RegularConstructor when called with new
}
new RegularConstructor();
const ArrowConstructor = () => {
  // console.log(new.target); // SyntaxError
};
// ========================================
// DIFFERENCE 5: CANNOT HAVE DUPLICATE PARAMETERS
// ========================================
// Regular function (non-strict mode)
function duplicateParams(a, a) {
  return a; // Returns second 'a'
}
console.log(duplicateParams(1, 2)); // 2
// Arrow function - always error
// const arrowDuplicate = (a, a) => a; // SyntaxError
// ========================================
// DIFFERENCE 6: NO PROTOTYPE PROPERTY
// ========================================
function regularFunc() {}
console.log(regularFunc.prototype); // { constructor: regularFunc }
const arrowFunc = () => {};
console.log(arrowFunc.prototype); // undefined
\`\`\`
### When to Use Arrow Functions
\`\`\`js
// ✅ USE Arrow Functions:
// 1. Short callbacks
array.map(x => x * 2);
array.filter(x => x > 5);
array.reduce((acc, x) => acc + x, 0);
// 2. Preserving 'this' in callbacks
class MyClass {
  constructor() {
    this.value = 42;
  }
  method() {
    setTimeout(() => {
      console.log(this.value); // 42 - 'this' preserved
    }, 100);
  }
}
// 3. Functional programming patterns
const compose = (f, g) => x => f(g(x));
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
// 4. Simple, single-expression functions
const isEven = n => n % 2 === 0;
const square = n => n * n;
// ❌ AVOID Arrow Functions:
// 1. Object methods (when you need 'this' to be the object)
const obj = {
  value: 42,
  getValue: () => this.value // undefined! Use regular function
};
// 2. Constructors
const Person = (name) => { this.name = name; }; // Can't use 'new'
// 3. When you need 'arguments'
function sum() {
  return Array.from(arguments).reduce((a, b) => a + b, 0);
}
// 4. Event handlers that need 'this' to be the element
button.addEventListener('click', function() {
  this.classList.toggle('active'); // 'this' is the button
});
// 5. Prototype methods
function MyClass() {}
MyClass.prototype.method = function() {
  return this.value; // 'this' is the instance
};
// MyClass.prototype.method = () => this.value; // 'this' is not the instance!
\`\`\`
---
## IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
An IIFE is a function that runs immediately after it's defined. It creates a private scope, avoiding global namespace pollution.
\`\`\`js
// Basic IIFE with function expression
(function() {
  console.log('I run immediately!');
  const privateVar = 'I am private';
  // privateVar is not accessible outside
})();
// The parentheses around the function make it an expression
// The () at the end immediately invokes it
// IIFE with arrow function
(() => {
  console.log('Arrow IIFE!');
})();
// IIFE with parameters
(function(name, age) {
  console.log(\`\${name} is \${age} years old\`);
})('John', 30);
// Arrow IIFE with parameters
((x, y) => {
  console.log('Sum:', x + y);
})(5, 3);
// IIFE that returns a value
const result = (function() {
  const a = 5;
  const b = 10;
  return a + b;
})();
console.log(result); // 15
// Named IIFE (useful for debugging)
(function myIIFE() {
  console.log('Named IIFE');
})();
// Alternative syntax (less common)
(function() {
  console.log('Alternative 1');
}());
!function() {
  console.log('Alternative 2 - using !');
}();
+function() {
  console.log('Alternative 3 - using +');
}();
\`\`\`
### IIFE Use Cases
\`\`\`js
// ========================================
// USE CASE 1: Creating Private Scope
// ========================================
// Avoid polluting global namespace
(function() {
  // These variables are private to this IIFE
  const apiKey = 'secret-key-123';
  const baseUrl = 'https://api.example.com';
  function makeRequest(endpoint) {
    return fetch(baseUrl + endpoint, {
      headers: { 'X-API-Key': apiKey }
    });
  }
  // Expose only what's needed
  window.myAPI = {
    getUsers: () => makeRequest('/users'),
    getPosts: () => makeRequest('/posts')
  };
})();
// apiKey and baseUrl are not accessible
// console.log(apiKey); // ReferenceError
// ========================================
// USE CASE 2: Module Pattern
// ========================================
const Counter = (function() {
  // Private state
  let count = 0;
  // Private function
  function logChange(action) {
    console.log(\`Count \${action}: \${count}\`);
  }
  // Public API
  return {
    increment() {
      count++;
      logChange('incremented');
      return count;
    },
    decrement() {
      count--;
      logChange('decremented');
      return count;
    },
    getCount() {
      return count;
    }
  };
})();
Counter.increment(); // "Count incremented: 1"
Counter.increment(); // "Count incremented: 2"
console.log(Counter.getCount()); // 2
// Counter.count is undefined - truly private
// ========================================
// USE CASE 3: Avoiding Variable Hoisting Issues
// ========================================
// Classic problem with var and loops
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 3, 3, 3 (all reference the same i)
  }, 100);
}
// IIFE solution (before 'let' existed)
for (var i = 0; i < 3; i++) {
  (function(j) {
    setTimeout(function() {
      console.log(j); // 0, 1, 2 (each has its own j)
    }, 100);
  })(i);
}
// Modern solution with let
for (let i = 0; i < 3; i++) {
  setTimeout(function() {
    console.log(i); // 0, 1, 2 (let creates block scope)
  }, 100);
}
// ========================================
// USE CASE 4: Initialization Code
// ========================================
const config = (function() {
  const env = process.env.NODE_ENV || 'development';
  const configs = {
    development: {
      apiUrl: 'http://localhost:3000',
      debug: true
    },
    production: {
      apiUrl: 'https://api.example.com',
      debug: false
    }
  };
  return configs[env];
})();
// ========================================
// USE CASE 5: Singleton Pattern
// ========================================
const Database = (function() {
  let instance = null;
  function createConnection() {
    return {
      host: 'localhost',
      port: 5432,
      query(sql) {
        console.log('Executing:', sql);
      }
    };
  }
  return {
    getInstance() {
      if (!instance) {
        instance = createConnection();
        console.log('New connection created');
      } else {
        console.log('Returning existing connection');
      }
      return instance;
    }
  };
})();
const db1 = Database.getInstance(); // "New connection created"
const db2 = Database.getInstance(); // "Returning existing connection"
console.log(db1 === db2); // true - same instance
\`\`\`
---
## GENERATOR FUNCTIONS
Generator functions can pause execution and resume later. They produce a sequence of values on-demand (lazy evaluation).
\`\`\`js
// Generator function declaration (note the *)
function* simpleGenerator() {
  console.log('Start');
  yield 1;
  console.log('After first yield');
  yield 2;
  console.log('After second yield');
  yield 3;
  console.log('End');
}
// Calling a generator function returns a Generator object
// The function body doesn't execute yet!
const gen = simpleGenerator();
console.log(gen.next()); // "Start" then { value: 1, done: false }
console.log(gen.next()); // "After first yield" then { value: 2, done: false }
console.log(gen.next()); // "After second yield" then { value: 3, done: false }
console.log(gen.next()); // "End" then { value: undefined, done: true }
// Generator expression (less common)
const genExp = function*() {
  yield 'a';
  yield 'b';
};
// Generators are iterable
function* letterGenerator() {
  yield 'a';
  yield 'b';
  yield 'c';
}
for (const letter of letterGenerator()) {
  console.log(letter); // 'a', 'b', 'c'
}
// Spread operator works too
console.log([...letterGenerator()]); // ['a', 'b', 'c']
\`\`\`
### Generator Features
\`\`\`js
// ========================================
// PASSING VALUES INTO GENERATORS
// ========================================
function* twoWayGenerator() {
  const x = yield 'First yield';
  console.log('Received:', x);
  const y = yield 'Second yield';
  console.log('Received:', y);
  return 'Done';
}
const gen = twoWayGenerator();
console.log(gen.next());        // { value: 'First yield', done: false }
console.log(gen.next('Hello')); // "Received: Hello" { value: 'Second yield', done: false }
console.log(gen.next('World')); // "Received: World" { value: 'Done', done: true }
// ========================================
// DELEGATING TO OTHER GENERATORS (yield*)
// ========================================
function* innerGenerator() {
  yield 'inner 1';
  yield 'inner 2';
}
function* outerGenerator() {
  yield 'outer 1';
  yield* innerGenerator(); // Delegate to inner
  yield 'outer 2';
}
console.log([...outerGenerator()]); 
// ['outer 1', 'inner 1', 'inner 2', 'outer 2']
// Works with any iterable
function* yieldArray() {
  yield* [1, 2, 3];
  yield* 'abc';
}
console.log([...yieldArray()]); // [1, 2, 3, 'a', 'b', 'c']
// ========================================
// ERROR HANDLING IN GENERATORS
// ========================================
function* errorGenerator() {
  try {
    yield 1;
    yield 2;
  } catch (e) {
    console.log('Caught:', e);
  }
  yield 3;
}
const errGen = errorGenerator();
console.log(errGen.next()); // { value: 1, done: false }
console.log(errGen.throw(new Error('Oops'))); // "Caught: Error: Oops" { value: 3, done: false }
// ========================================
// GENERATOR.return()
// ========================================
function* countUp() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const counter = countUp();
console.log(counter.next()); // { value: 0, done: false }
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.return('Stopped')); // { value: 'Stopped', done: true }
console.log(counter.next()); // { value: undefined, done: true }
\`\`\`
### Practical Generator Use Cases
\`\`\`js
// ========================================
// USE CASE 1: Infinite Sequences
// ========================================
function* infiniteSequence() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
function* fibonacciSequence() {
  let [prev, curr] = [0, 1];
  while (true) {
    yield curr;
    [prev, curr] = [curr, prev + curr];
  }
}
// Take only what you need (lazy evaluation)
function take(n, iterable) {
  const result = [];
  const iterator = iterable[Symbol.iterator]();
  for (let i = 0; i < n; i++) {
    const { value, done } = iterator.next();
    if (done) break;
    result.push(value);
  }
  return result;
}
console.log(take(5, fibonacciSequence())); // [1, 1, 2, 3, 5]
console.log(take(10, infiniteSequence())); // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
// ========================================
// USE CASE 2: ID Generator
// ========================================
function* idGenerator(prefix = 'id') {
  let id = 1;
  while (true) {
    yield \`\${prefix}_\${id++}\`;
  }
}
const userIds = idGenerator('user');
console.log(userIds.next().value); // 'user_1'
console.log(userIds.next().value); // 'user_2'
const orderIds = idGenerator('order');
console.log(orderIds.next().value); // 'order_1'
// ========================================
// USE CASE 3: Paginated Data
// ========================================
async function* fetchPages(url) {
  let page = 1;
  let hasMore = true;
  while (hasMore) {
    const response = await fetch(\`\${url}?page=\${page}\`);
    const data = await response.json();
    yield data.items;
    hasMore = data.hasNextPage;
    page++;
  }
}
// Usage
async function processAllPages() {
  for await (const items of fetchPages('/api/products')) {
    for (const item of items) {
      console.log(item);
    }
  }
}
// ========================================
// USE CASE 4: State Machine
// ========================================
function* trafficLight() {
  while (true) {
    yield 'green';
    yield 'yellow';
    yield 'red';
  }
}
const light = trafficLight();
console.log(light.next().value); // 'green'
console.log(light.next().value); // 'yellow'
console.log(light.next().value); // 'red'
console.log(light.next().value); // 'green' (cycles)
// ========================================
// USE CASE 5: Tree Traversal
// ========================================
function* traverseTree(node) {
  if (!node) return;
  yield node.value;
  yield* traverseTree(node.left);
  yield* traverseTree(node.right);
}
const tree = {
  value: 1,
  left: {
    value: 2,
    left: { value: 4 },
    right: { value: 5 }
  },
  right: {
    value: 3,
    right: { value: 6 }
  }
};
console.log([...traverseTree(tree)]); // [1, 2, 4, 5, 3, 6]
\`\`\`
---
## ASYNC FUNCTIONS
Async functions provide a cleaner way to work with Promises. They make asynchronous code look synchronous.
\`\`\`js
// Async function declaration
async function fetchUserData(userId) {
  // 'await' pauses execution until Promise resolves
  const response = await fetch(\`/api/users/\${userId}\`);
  const data = await response.json();
  return data; // Automatically wrapped in Promise
}
// Async function expression
const fetchPosts = async function(userId) {
  const response = await fetch(\`/api/users/\${userId}/posts\`);
  return response.json();
};
// Async arrow function
const fetchComments = async (postId) => {
  const response = await fetch(\`/api/posts/\${postId}/comments\`);
  return response.json();
};
// Async method in object
const api = {
  async getUser(id) {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  }
};
// Async method in class
class UserService {
  async getUser(id) {
    const response = await fetch(\`/api/users/\${id}\`);
    return response.json();
  }
}
// Async functions ALWAYS return a Promise
async function returnValue() {
  return 42; // Same as: return Promise.resolve(42)
}
returnValue().then(value => console.log(value)); // 42
\`\`\`
### Error Handling in Async Functions
\`\`\`js
// ========================================
// try/catch for error handling
// ========================================
async function fetchWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(\`HTTP error! status: \${response.status}\`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Fetch failed:', error.message);
    // Re-throw, return default, or handle as needed
    throw error;
  }
}
// ========================================
// Multiple await with shared error handling
// ========================================
async function fetchUserWithPosts(userId) {
  try {
    const user = await fetchUser(userId);
    const posts = await fetchPosts(userId);
    const comments = await fetchCommentsForPosts(posts);
    return { user, posts, comments };
  } catch (error) {
    // Catches errors from any of the awaits
    console.error('Error fetching user data:', error);
    return null;
  }
}
// ========================================
// Individual error handling
// ========================================
async function fetchWithFallback(userId) {
  let user;
  try {
    user = await fetchUser(userId);
  } catch (error) {
    user = { id: userId, name: 'Unknown' }; // Fallback
  }
  let posts;
  try {
    posts = await fetchPosts(userId);
  } catch (error) {
    posts = []; // Fallback to empty array
  }
  return { user, posts };
}
// ========================================
// Handling errors with .catch() on individual awaits
// ========================================
async function fetchWithInlineCatch(userId) {
  const user = await fetchUser(userId).catch(e => ({ id: userId, name: 'Unknown' }));
  const posts = await fetchPosts(userId).catch(e => []);
  return { user, posts };
}
\`\`\`
### Parallel vs Sequential Execution
\`\`\`js
// ========================================
// SEQUENTIAL (Slower) - Each await waits for previous
// ========================================
async function sequential() {
  console.time('sequential');
  const user = await fetchUser(1);       // Wait 1 second
  const posts = await fetchPosts(1);      // Wait 1 second
  const comments = await fetchComments(1); // Wait 1 second
  // Total: ~3 seconds
  console.timeEnd('sequential');
  return { user, posts, comments };
}
// ========================================
// PARALLEL (Faster) - All requests start together
// ========================================
async function parallel() {
  console.time('parallel');
  // Start all requests at once
  const userPromise = fetchUser(1);
  const postsPromise = fetchPosts(1);
  const commentsPromise = fetchComments(1);
  // Wait for all to complete
  const user = await userPromise;
  const posts = await postsPromise;
  const comments = await commentsPromise;
  // Total: ~1 second (max of all)
  console.timeEnd('parallel');
  return { user, posts, comments };
}
// ========================================
// PARALLEL with Promise.all (preferred)
// ========================================
async function parallelWithAll() {
  const [user, posts, comments] = await Promise.all([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);
  return { user, posts, comments };
}
// ========================================
// PARALLEL with Promise.allSettled (handle partial failures)
// ========================================
async function parallelWithSettled() {
  const results = await Promise.allSettled([
    fetchUser(1),
    fetchPosts(1),
    fetchComments(1)
  ]);
  return results.map((result, index) => {
    if (result.status === 'fulfilled') {
      return result.value;
    } else {
      console.error(\`Request \${index} failed:\`, result.reason);
      return null;
    }
  });
}
// ========================================
// Processing array items in parallel
// ========================================
async function fetchAllUsers(userIds) {
  // ❌ WRONG: Sequential (each await waits)
  const users = [];
  for (const id of userIds) {
    const user = await fetchUser(id);
    users.push(user);
  }
  return users;
  // ✅ RIGHT: Parallel with Promise.all
  return Promise.all(userIds.map(id => fetchUser(id)));
}
// ========================================
// Processing with concurrency limit
// ========================================
async function fetchWithLimit(urls, limit = 3) {
  const results = [];
  const executing = [];
  for (const url of urls) {
    const promise = fetch(url).then(r => r.json());
    results.push(promise);
    const e = promise.then(() => executing.splice(executing.indexOf(e), 1));
    executing.push(e);
    if (executing.length >= limit) {
      await Promise.race(executing);
    }
  }
  return Promise.all(results);
}
\`\`\`
---
## HIGHER-ORDER FUNCTIONS
A higher-order function is a function that takes one or more functions as arguments, returns a function, or both. This is a core concept in functional programming.
\`\`\`js
// ========================================
// FUNCTION AS ARGUMENT
// ========================================
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}
repeat(3, console.log); // 0, 1, 2
repeat(3, i => console.log('Hello ' + i)); // Hello 0, Hello 1, Hello 2
// Array methods are higher-order functions
const numbers = [1, 2, 3, 4, 5];
// map - transform each element
const doubled = numbers.map(n => n * 2); // [2, 4, 6, 8, 10]
// filter - keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0); // [2, 4]
// reduce - accumulate to single value
const sum = numbers.reduce((acc, n) => acc + n, 0); // 15
// find - first element that passes test
const firstEven = numbers.find(n => n % 2 === 0); // 2
// some - at least one passes
const hasEven = numbers.some(n => n % 2 === 0); // true
// every - all pass
const allPositive = numbers.every(n => n > 0); // true
// ========================================
// FUNCTION AS RETURN VALUE
// ========================================
function multiplier(factor) {
  // Returns a new function that "remembers" factor
  return function(number) {
    return number * factor;
  };
}
const double = multiplier(2);
const triple = multiplier(3);
console.log(double(5));  // 10
console.log(triple(5));  // 15
// Arrow function version
const multiplierArrow = factor => number => number * factor;
// ========================================
// BOTH: Takes and Returns Functions
// ========================================
function compose(f, g) {
  return function(x) {
    return f(g(x));
  };
}
const addOne = x => x + 1;
const square = x => x * x;
const addOneThenSquare = compose(square, addOne);
console.log(addOneThenSquare(4)); // 25: (4+1)² = 25
const squareThenAddOne = compose(addOne, square);
console.log(squareThenAddOne(4)); // 17: 4² + 1 = 17
\`\`\`
### Creating Custom Higher-Order Functions
\`\`\`js
// ========================================
// once - Function that only runs once
// ========================================
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
const initialize = once(() => {
  console.log('Initializing...');
  return 'Initialized';
});
console.log(initialize()); // "Initializing..." "Initialized"
console.log(initialize()); // "Initialized" (no log, returns cached)
// ========================================
// after - Function that runs after n calls
// ========================================
function after(n, fn) {
  let count = 0;
  return function(...args) {
    count++;
    if (count >= n) {
      return fn.apply(this, args);
    }
  };
}
const afterThree = after(3, () => console.log('Third time!'));
afterThree(); // nothing
afterThree(); // nothing
afterThree(); // "Third time!"
// ========================================
// before - Function that only runs first n times
// ========================================
function before(n, fn) {
  let count = 0;
  let result;
  return function(...args) {
    if (count < n) {
      result = fn.apply(this, args);
      count++;
    }
    return result;
  };
}
const onlyThrice = before(3, () => console.log('Called!'));
onlyThrice(); // "Called!"
onlyThrice(); // "Called!"
onlyThrice(); // "Called!"
onlyThrice(); // (nothing, returns last result)
// ========================================
// delay - Delay function execution
// ========================================
function delay(fn, ms, ...args) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(fn(...args));
    }, ms);
  });
}
await delay(console.log, 1000, 'Delayed message');
// ========================================
// retry - Retry failed function
// ========================================
async function retry(fn, retries = 3, delayMs = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      console.log(\`Retry \${i + 1}/\${retries}...\`);
      await new Promise(r => setTimeout(r, delayMs));
    }
  }
}
// ========================================
// wrap - Wrap function with before/after logic
// ========================================
function wrap(fn, wrapper) {
  return function(...args) {
    return wrapper.call(this, fn, ...args);
  };
}
const greet = name => console.log('Hello, ' + name);
const loggedGreet = wrap(greet, function(original, name) {
  console.log('Before:', name);
  original(name);
  console.log('After:', name);
});
loggedGreet('John');
// "Before: John"
// "Hello, John"
// "After: John"
\`\`\`
---
## FUNCTION COMPOSITION
Function composition combines simple functions to build more complex ones. It's a fundamental concept in functional programming.
\`\`\`js
// Simple functions to compose
const add10 = x => x + 10;
const multiply2 = x => x * 2;
const subtract5 = x => x - 5;
const square = x => x * x;
// ========================================
// MANUAL COMPOSITION (Nested calls)
// ========================================
const result = subtract5(multiply2(add10(5)));
// Step by step: add10(5)=15, multiply2(15)=30, subtract5(30)=25
console.log(result); // 25
// Hard to read when deeply nested!
// ========================================
// COMPOSE FUNCTION (Right to Left)
// ========================================
// compose(f, g, h)(x) = f(g(h(x)))
// Last function is called first
const compose = (...fns) => (x) => 
  fns.reduceRight((acc, fn) => fn(acc), x);
const composed = compose(subtract5, multiply2, add10);
console.log(composed(5)); // 25: 5 → 15 → 30 → 25
// With more functions
const complex = compose(subtract5, square, multiply2, add10);
console.log(complex(5)); // 895: 5 → 15 → 30 → 900 → 895
// ========================================
// PIPE FUNCTION (Left to Right)
// ========================================
// pipe(f, g, h)(x) = h(g(f(x)))
// First function is called first (more intuitive)
const pipe = (...fns) => (x) => 
  fns.reduce((acc, fn) => fn(acc), x);
const piped = pipe(add10, multiply2, subtract5);
console.log(piped(5)); // 25: 5 → 15 → 30 → 25
// Reading left to right matches the data flow
const transform = pipe(
  x => x + 10,    // First: add 10
  x => x * 2,     // Then: multiply by 2
  x => x - 5      // Finally: subtract 5
);
// ========================================
// ASYNC COMPOSITION
// ========================================
const pipeAsync = (...fns) => (x) =>
  fns.reduce(
    (promise, fn) => promise.then(fn),
    Promise.resolve(x)
  );
const fetchAndProcess = pipeAsync(
  userId => fetch(\`/api/users/\${userId}\`),
  response => response.json(),
  user => user.name.toUpperCase(),
  name => \`Hello, \${name}!\`
);
const greeting = await fetchAndProcess(1);
console.log(greeting); // "Hello, JOHN!"
\`\`\`
### Practical Composition Examples
\`\`\`js
// ========================================
// Data transformation pipeline
// ========================================
const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 30, active: false },
  { name: 'Bob', age: 35, active: true },
  { name: 'Alice', age: 28, active: true }
];
// Composable utility functions
const filter = predicate => array => array.filter(predicate);
const map = fn => array => array.map(fn);
const sort = compareFn => array => [...array].sort(compareFn);
const take = n => array => array.slice(0, n);
const prop = key => obj => obj[key];
// Build transformation pipeline
const getActiveUserNames = pipe(
  filter(user => user.active),
  map(prop('name')),
  sort((a, b) => a.localeCompare(b))
);
console.log(getActiveUserNames(users)); // ['Alice', 'Bob', 'John']
// Another pipeline
const getTop2ActiveByAge = pipe(
  filter(user => user.active),
  sort((a, b) => b.age - a.age),
  take(2),
  map(user => \`\${user.name} (\${user.age})\`)
);
console.log(getTop2ActiveByAge(users)); // ['Bob (35)', 'Alice (28)']
// ========================================
// String transformation
// ========================================
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const split = separator => str => str.split(separator);
const join = separator => arr => arr.join(separator);
const replace = (pattern, replacement) => str => str.replace(pattern, replacement);
const slugify = pipe(
  trim,
  toLowerCase,
  replace(/[^\w\s-]/g, ''),
  replace(/\s+/g, '-'),
  replace(/-+/g, '-')
);
console.log(slugify('  Hello World! This is a Test  ')); // 'hello-world-this-is-a-test'
// ========================================
// Validation pipeline
// ========================================
const validate = (...validators) => (value) => {
  for (const validator of validators) {
    const result = validator(value);
    if (result !== true) return result;
  }
  return true;
};
const required = value => 
  value !== '' || 'Field is required';
const minLength = min => value => 
  value.length >= min || \`Minimum length is \${min}\`;
const maxLength = max => value => 
  value.length <= max || \`Maximum length is \${max}\`;
const pattern = (regex, message) => value => 
  regex.test(value) || message;
const validatePassword = validate(
  required,
  minLength(8),
  maxLength(20),
  pattern(/[A-Z]/, 'Must contain uppercase'),
  pattern(/[a-z]/, 'Must contain lowercase'),
  pattern(/[0-9]/, 'Must contain number')
);
console.log(validatePassword('')); // 'Field is required'
console.log(validatePassword('short')); // 'Minimum length is 8'
console.log(validatePassword('ValidPass123')); // true
\`\`\`
---
## PURE FUNCTIONS
A pure function always produces the same output for the same input and has no side effects. Understanding pure functions is essential for functional programming and predictable code.
\`\`\`js
// ========================================
// PURE FUNCTIONS
// ========================================
// Same input → Same output, no side effects
// ✅ PURE: Only depends on inputs
function add(a, b) {
  return a + b;
}
console.log(add(2, 3)); // Always 5
// ✅ PURE: Creates new array, doesn't mutate
function appendPure(arr, item) {
  return [...arr, item];
}
const original = [1, 2, 3];
const newArr = appendPure(original, 4);
console.log(original); // [1, 2, 3] (unchanged)
console.log(newArr);   // [1, 2, 3, 4]
// ✅ PURE: Object transformation
function updateAge(person, newAge) {
  return { ...person, age: newAge };
}
// ========================================
// IMPURE FUNCTIONS
// ========================================
// ❌ IMPURE: Depends on external state
let multiplier = 2;
function impureMultiply(x) {
  return x * multiplier; // Different if multiplier changes
}
console.log(impureMultiply(5)); // 10
multiplier = 3;
console.log(impureMultiply(5)); // 15 (different result!)
// ❌ IMPURE: Modifies input (side effect)
function impureAppend(arr, item) {
  arr.push(item); // Mutates the original array!
  return arr;
}
const myArr = [1, 2, 3];
impureAppend(myArr, 4);
console.log(myArr); // [1, 2, 3, 4] (mutated!)
// ❌ IMPURE: Has side effects
let total = 0;
function impureAdd(x) {
  total += x; // Modifies external state
  return total;
}
// ❌ IMPURE: Depends on random/time
function impureRandom(max) {
  return Math.floor(Math.random() * max);
}
function impureTimestamp() {
  return Date.now();
}
// ❌ IMPURE: Console output is a side effect
function impureLog(message) {
  console.log(message); // Side effect
  return message;
}
\`\`\`
### Benefits of Pure Functions
\`\`\`js
// ========================================
// 1. TESTABILITY
// ========================================
// Pure functions are easy to test - predictable!
function calculateTax(amount, rate) {
  return amount * rate;
}
// Easy to test
console.assert(calculateTax(100, 0.1) === 10);
console.assert(calculateTax(200, 0.2) === 40);
// ========================================
// 2. MEMOIZATION
// ========================================
// Since same input = same output, we can cache results
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Cache hit!');
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
// Expensive pure function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
const memoizedFib = memoize(fibonacci);
console.log(memoizedFib(10)); // Calculates
console.log(memoizedFib(10)); // "Cache hit!" - returns cached
// ========================================
// 3. REFERENTIAL TRANSPARENCY
// ========================================
// Can replace function call with its result
const double = x => x * 2;
const add = (a, b) => a + b;
// These are equivalent:
const result1 = add(double(5), double(10));
const result2 = add(10, 20);
const result3 = 30;
console.log(result1 === result2 && result2 === result3); // true
// ========================================
// 4. PARALLELIZATION
// ========================================
// Pure functions can run in parallel safely
const numbers = [1, 2, 3, 4, 5];
// These could run in parallel (conceptually)
const squared = numbers.map(n => n * n);
// No shared state to worry about!
// ========================================
// 5. DEBUGGING
// ========================================
// No hidden state means easier debugging
function processData(data) {
  const step1 = normalize(data);
  const step2 = validate(step1);
  const step3 = transform(step2);
  return step3;
}
// You can inspect each step independently
// Each function's output only depends on its input
\`\`\`
### Converting Impure to Pure
\`\`\`js
// ========================================
// IMPURE TO PURE PATTERNS
// ========================================
// ❌ IMPURE: Mutates input
function impureSort(arr) {
  return arr.sort((a, b) => a - b); // Mutates original!
}
// ✅ PURE: Returns new sorted array
function pureSort(arr) {
  return [...arr].sort((a, b) => a - b);
}
// ❌ IMPURE: Depends on Date.now()
function impureCreateUser(name) {
  return {
    name,
    createdAt: Date.now() // Different each time
  };
}
// ✅ PURE: Accept time as parameter
function pureCreateUser(name, timestamp) {
  return {
    name,
    createdAt: timestamp
  };
}
// ❌ IMPURE: Makes HTTP request
async function impureFetchUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  return response.json();
}
// ✅ PURE: Accept fetch function as dependency (DI)
async function pureFetchUser(id, fetchFn) {
  const response = await fetchFn(\`/api/users/\${id}\`);
  return response.json();
}
// ❌ IMPURE: Writes to database
async function impureSaveUser(user) {
  await db.users.insert(user);
}
// ✅ Separate pure logic from side effects
function prepareUserForSave(user) {
  return {
    ...user,
    updatedAt: user.timestamp,
    normalized: user.name.toLowerCase()
  };
}
// Side effects at the edges of your application
async function saveUser(user, timestamp, db) {
  const prepared = prepareUserForSave({ ...user, timestamp });
  await db.users.insert(prepared);
}
\`\`\`
---
## DEFAULT PARAMETERS
Default parameters allow you to set default values for function parameters.
\`\`\`js
// ========================================
// BASIC DEFAULT PARAMETERS
// ========================================
function greet(name = 'Guest', greeting = 'Hello') {
  return \`\${greeting}, \${name}!\`;
}
console.log(greet());                 // "Hello, Guest!"
console.log(greet('John'));           // "Hello, John!"
console.log(greet('John', 'Hi'));     // "Hi, John!"
console.log(greet(undefined, 'Hey')); // "Hey, Guest!" (undefined triggers default)
console.log(greet(null, 'Hey'));      // "Hey, null!" (null doesn't trigger default)
// ========================================
// DEFAULT WITH EXPRESSIONS
// ========================================
function getDefaultName() {
  console.log('Getting default name...');
  return 'Default User';
}
function greetLazy(name = getDefaultName()) {
  return 'Hello, ' + name;
}
console.log(greetLazy('John')); // "Hello, John" (getDefaultName not called)
console.log(greetLazy());       // "Getting default name..." "Hello, Default User"
// ========================================
// DEFAULTS CAN REFERENCE EARLIER PARAMETERS
// ========================================
function createUser(name, role = 'user', id = \`\${role}_\${Date.now()}\`) {
  return { name, role, id };
}
console.log(createUser('John'));
// { name: 'John', role: 'user', id: 'user_1234567890' }
console.log(createUser('Admin', 'admin'));
// { name: 'Admin', role: 'admin', id: 'admin_1234567890' }
// ========================================
// DESTRUCTURING WITH DEFAULTS
// ========================================
function setupOptions({ 
  host = 'localhost', 
  port = 3000, 
  debug = false 
} = {}) {
  return { host, port, debug };
}
console.log(setupOptions());                    // { host: 'localhost', port: 3000, debug: false }
console.log(setupOptions({}));                  // { host: 'localhost', port: 3000, debug: false }
console.log(setupOptions({ port: 8080 }));      // { host: 'localhost', port: 8080, debug: false }
console.log(setupOptions({ host: 'example.com', debug: true })); 
// { host: 'example.com', port: 3000, debug: true }
// Note the = {} at the end - this allows calling with no argument
// Without it: setupOptions() would throw an error
// ========================================
// ARRAY DESTRUCTURING WITH DEFAULTS
// ========================================
function parseCoordinates([x = 0, y = 0, z = 0] = []) {
  return { x, y, z };
}
console.log(parseCoordinates());          // { x: 0, y: 0, z: 0 }
console.log(parseCoordinates([10]));      // { x: 10, y: 0, z: 0 }
console.log(parseCoordinates([10, 20]));  // { x: 10, y: 20, z: 0 }
console.log(parseCoordinates([10, 20, 30])); // { x: 10, y: 20, z: 30 }
\`\`\`
---
## REST PARAMETERS
Rest parameters allow you to represent an indefinite number of arguments as an array.
\`\`\`js
// ========================================
// BASIC REST PARAMETERS
// ========================================
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}
console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum());              // 0
// Rest parameter is a real array (unlike 'arguments')
function showType(...args) {
  console.log(Array.isArray(args)); // true
  console.log(args.length);
}
// ========================================
// REST MUST BE LAST PARAMETER
// ========================================
function formatMessage(template, ...values) {
  return values.reduce((msg, val, i) => 
    msg.replace(\`{\${i}}\`, val), template);
}
console.log(formatMessage('Hello {0}, you have {1} messages', 'John', 5));
// "Hello John, you have 5 messages"
function createTeam(leader, ...members) {
  return {
    leader,
    members,
    size: members.length + 1
  };
}
console.log(createTeam('John', 'Jane', 'Bob', 'Alice'));
// { leader: 'John', members: ['Jane', 'Bob', 'Alice'], size: 4 }
// ========================================
// REST VS ARGUMENTS
// ========================================
function oldWay() {
  // 'arguments' is array-like but not a real array
  console.log(arguments);             // { '0': 1, '1': 2, '2': 3 }
  console.log(Array.isArray(arguments)); // false
  // To use array methods, must convert
  const args = Array.from(arguments);
  // Or: const args = [...arguments];
  return args.reduce((a, b) => a + b, 0);
}
function newWay(...args) {
  // Rest params give you a real array
  console.log(args);                  // [1, 2, 3]
  console.log(Array.isArray(args));   // true
  return args.reduce((a, b) => a + b, 0);
}
// 'arguments' not available in arrow functions
const arrowFunc = () => {
  // console.log(arguments); // ReferenceError
};
// Rest parameters work in arrow functions
const arrowWithRest = (...args) => {
  console.log(args); // Works!
};
// ========================================
// DESTRUCTURING WITH REST
// ========================================
function processFirst(first, ...rest) {
  console.log('First:', first);
  console.log('Rest:', rest);
}
processFirst(1, 2, 3, 4, 5);
// First: 1
// Rest: [2, 3, 4, 5]
// In destructuring assignment
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
const { name, ...otherProps } = { name: 'John', age: 30, city: 'NYC' };
console.log(name);       // 'John'
console.log(otherProps); // { age: 30, city: 'NYC' }
\`\`\`
---
## CURRYING
Currying transforms a function with multiple arguments into a sequence of functions each taking a single argument.
\`\`\`js
// ========================================
// BASIC CURRYING
// ========================================
// Non-curried function
function add(a, b, c) {
  return a + b + c;
}
console.log(add(1, 2, 3)); // 6
// Curried version - manually
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6
// Arrow function version (more concise)
const curriedAddArrow = a => b => c => a + b + c;
console.log(curriedAddArrow(1)(2)(3)); // 6
// ========================================
// PARTIAL APPLICATION WITH CURRYING
// ========================================
const addOne = curriedAdd(1);
const addOneAndTwo = addOne(2);
console.log(addOneAndTwo(3)); // 6
console.log(addOneAndTwo(10)); // 13
// Practical example: logging
const log = level => timestamp => message => 
  console.log(\`[\${level}] [\${timestamp}] \${message}\`);
const errorLog = log('ERROR');
const errorLogNow = errorLog(new Date().toISOString());
errorLogNow('Something went wrong');
// [ERROR] [2024-01-01T12:00:00.000Z] Something went wrong
// ========================================
// GENERIC CURRY FUNCTION
// ========================================
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      // All arguments received, call original function
      return fn.apply(this, args);
    } else {
      // Not enough arguments, return function that collects more
      return function(...moreArgs) {
        return curried.apply(this, args.concat(moreArgs));
      };
    }
  };
}
// Usage
function multiply(a, b, c) {
  return a * b * c;
}
const curriedMultiply = curry(multiply);
console.log(curriedMultiply(2)(3)(4));     // 24
console.log(curriedMultiply(2, 3)(4));     // 24
console.log(curriedMultiply(2)(3, 4));     // 24
console.log(curriedMultiply(2, 3, 4));     // 24
// ========================================
// PRACTICAL CURRYING EXAMPLES
// ========================================
// Filtering
const filter = predicate => array => array.filter(predicate);
const isGreaterThan = min => value => value > min;
const isGreaterThan10 = isGreaterThan(10);
const filterGreaterThan10 = filter(isGreaterThan10);
console.log(filterGreaterThan10([5, 10, 15, 20])); // [15, 20]
// Mapping
const map = fn => array => array.map(fn);
const multiply = factor => value => value * factor;
const double = multiply(2);
const doubleAll = map(double);
console.log(doubleAll([1, 2, 3])); // [2, 4, 6]
// String manipulation
const replace = pattern => replacement => str => str.replace(pattern, replacement);
const sanitize = replace(/[<>]/g)('');
console.log(sanitize('<script>alert("xss")</script>')); 
// 'scriptalert("xss")/script'
// API calls
const request = method => url => data => 
  fetch(url, { method, body: JSON.stringify(data) });
const post = request('POST');
const postToUsers = post('/api/users');
await postToUsers({ name: 'John' });
\`\`\`
---
## PARTIAL APPLICATION
Partial application creates a new function by pre-filling some arguments of an existing function.
\`\`\`js
// ========================================
// PARTIAL APPLICATION WITH bind()
// ========================================
function greet(greeting, punctuation, name) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}
// Partially apply with bind
const sayHello = greet.bind(null, 'Hello', '!');
console.log(sayHello('John')); // "Hello, John!"
console.log(sayHello('Jane')); // "Hello, Jane!"
const askQuestion = greet.bind(null, 'How are you', '?');
console.log(askQuestion('John')); // "How are you, John?"
// ========================================
// CUSTOM PARTIAL FUNCTION
// ========================================
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}
const add = (a, b, c) => a + b + c;
const add5 = partial(add, 5);
const add5And10 = partial(add, 5, 10);
console.log(add5(10, 15));    // 30 (5 + 10 + 15)
console.log(add5And10(15));   // 30 (5 + 10 + 15)
// ========================================
// PARTIAL WITH PLACEHOLDERS
// ========================================
const _ = Symbol('placeholder');
function partialWithPlaceholders(fn, ...args) {
  return function(...laterArgs) {
    let laterIndex = 0;
    const finalArgs = args.map(arg => 
      arg === _ ? laterArgs[laterIndex++] : arg
    );
    return fn(...finalArgs, ...laterArgs.slice(laterIndex));
  };
}
const divide = (a, b) => a / b;
// Normal partial: always divides by 2
const divideBy2 = partial(divide, _, 2);
// Wait, that doesn't work with normal partial!
// With placeholders: divide something by 2
const divideByTwo = partialWithPlaceholders(divide, _, 2);
console.log(divideByTwo(10)); // 5 (10 / 2)
// Divide 100 by something
const divide100By = partialWithPlaceholders(divide, 100, _);
console.log(divide100By(5)); // 20 (100 / 5)
// ========================================
// CURRYING VS PARTIAL APPLICATION
// ========================================
// Currying: Transforms f(a, b, c) into f(a)(b)(c)
// Always produces unary functions
// Partial: Pre-fills some arguments
// Can pre-fill any number at once
function original(a, b, c, d) {
  return a + b + c + d;
}
// Curried: must call one arg at a time
const curried = curry(original);
curried(1)(2)(3)(4); // Works
// curried(1, 2)(3, 4); // Also works with our curry implementation
// Partial: pre-fill whatever you want
const partial1 = partial(original, 1, 2);
partial1(3, 4); // 10
// ========================================
// PRACTICAL EXAMPLES
// ========================================
// Event handling
function handleEvent(eventType, handler, element) {
  element.addEventListener(eventType, handler);
}
const onClick = partial(handleEvent, 'click');
const onClickLog = partial(onClick, (e) => console.log('Clicked:', e.target));
// onClickLog(someButton); // Attaches click handler
// API configuration
function fetchWithConfig(baseUrl, headers, endpoint) {
  return fetch(baseUrl + endpoint, { headers });
}
const apiClient = partial(fetchWithConfig, 
  'https://api.example.com',
  { 'Authorization': 'Bearer token123' }
);
await apiClient('/users');
await apiClient('/posts');
\`\`\`
---
## MEMOIZATION
Memoization caches the results of expensive function calls and returns the cached result when the same inputs occur again.
\`\`\`js
// ========================================
// BASIC MEMOIZATION
// ========================================
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      console.log('Cache hit for:', key);
      return cache.get(key);
    }
    console.log('Computing for:', key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
// Expensive function
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
// Without memoization: fibonacci(40) takes seconds
// With memoization: instant after first call
const memoizedFib = memoize(function fib(n) {
  if (n <= 1) return n;
  return memoizedFib(n - 1) + memoizedFib(n - 2);
});
console.log(memoizedFib(40)); // Computes once
console.log(memoizedFib(40)); // Cache hit!
// ========================================
// MEMOIZATION WITH CUSTOM KEY FUNCTION
// ========================================
function memoizeWithKeyFn(fn, keyFn) {
  const cache = new Map();
  return function(...args) {
    const key = keyFn ? keyFn(...args) : JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}
// For objects, we might want a custom key
const getUser = memoizeWithKeyFn(
  async function(query) {
    const response = await fetch(\`/api/users?\${new URLSearchParams(query)}\`);
    return response.json();
  },
  (query) => query.id // Use only id for cache key
);
// ========================================
// MEMOIZATION WITH TTL (Time To Live)
// ========================================
function memoizeWithTTL(fn, ttlMs) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    const cached = cache.get(key);
    if (cached && Date.now() - cached.timestamp < ttlMs) {
      console.log('Cache hit (not expired)');
      return cached.value;
    }
    console.log('Computing (cache miss or expired)');
    const result = fn.apply(this, args);
    cache.set(key, { value: result, timestamp: Date.now() });
    return result;
  };
}
const getPrice = memoizeWithTTL(
  function(productId) {
    // Expensive API call
    return fetchProductPrice(productId);
  },
  60000 // Cache for 1 minute
);
// ========================================
// MEMOIZATION WITH MAX SIZE (LRU-like)
// ========================================
function memoizeWithMaxSize(fn, maxSize = 100) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      // Move to end (most recently used)
      const value = cache.get(key);
      cache.delete(key);
      cache.set(key, value);
      return value;
    }
    const result = fn.apply(this, args);
    if (cache.size >= maxSize) {
      // Delete oldest (first item)
      const firstKey = cache.keys().next().value;
      cache.delete(firstKey);
    }
    cache.set(key, result);
    return result;
  };
}
// ========================================
// WHEN TO USE MEMOIZATION
// ========================================
// ✅ GOOD USE CASES:
// 1. Pure functions (same input = same output)
// 2. Expensive computations
// 3. Functions called frequently with same args
// 4. Recursive functions (like fibonacci)
// ❌ BAD USE CASES:
// 1. Functions with side effects
// 2. Functions that return different values for same input (Date.now())
// 3. Functions with object/array args that change (use custom key fn)
// 4. When memory is limited
\`\`\`
---
## RECURSION
Recursion is when a function calls itself. It's essential for tree traversal, divide-and-conquer algorithms, and many other patterns.
\`\`\`js
// ========================================
// BASIC RECURSION
// ========================================
function factorial(n) {
  // Base case: stop recursion
  if (n <= 1) return 1;
  // Recursive case: call itself
  return n * factorial(n - 1);
}
console.log(factorial(5)); // 120 (5 * 4 * 3 * 2 * 1)
// How it works:
// factorial(5)
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1
// 120
// ========================================
// TAIL RECURSION
// ========================================
// The recursive call is the LAST operation
// Some engines optimize this (Tail Call Optimization)
function factorialTail(n, accumulator = 1) {
  if (n <= 1) return accumulator;
  return factorialTail(n - 1, n * accumulator);
}
console.log(factorialTail(5)); // 120
// ========================================
// COMMON RECURSIVE PATTERNS
// ========================================
// 1. Sum array
function sumArray(arr, index = 0) {
  if (index >= arr.length) return 0;
  return arr[index] + sumArray(arr, index + 1);
}
console.log(sumArray([1, 2, 3, 4, 5])); // 15
// 2. Flatten nested arrays
function flatten(arr) {
  let result = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      result = result.concat(flatten(item));
    } else {
      result.push(item);
    }
  }
  return result;
}
console.log(flatten([1, [2, [3, [4]], 5]])); // [1, 2, 3, 4, 5]
// 3. Deep clone
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}
// 4. Tree traversal
function traverseTree(node, callback) {
  if (!node) return;
  callback(node.value);
  traverseTree(node.left, callback);
  traverseTree(node.right, callback);
}
const tree = {
  value: 1,
  left: { value: 2, left: { value: 4 }, right: { value: 5 } },
  right: { value: 3, right: { value: 6 } }
};
const values = [];
traverseTree(tree, v => values.push(v));
console.log(values); // [1, 2, 4, 5, 3, 6]
// 5. Find in nested object
function findKey(obj, targetKey) {
  for (const key in obj) {
    if (key === targetKey) {
      return obj[key];
    }
    if (typeof obj[key] === 'object' && obj[key] !== null) {
      const result = findKey(obj[key], targetKey);
      if (result !== undefined) return result;
    }
  }
  return undefined;
}
const nested = { a: { b: { c: { target: 'found!' } } } };
console.log(findKey(nested, 'target')); // 'found!'
\`\`\`
### Avoiding Stack Overflow
\`\`\`js
// ========================================
// PROBLEM: Stack Overflow
// ========================================
function countDown(n) {
  if (n <= 0) return;
  console.log(n);
  countDown(n - 1);
}
// countDown(100000); // RangeError: Maximum call stack size exceeded
// ========================================
// SOLUTION 1: Convert to Iteration
// ========================================
function countDownIterative(n) {
  while (n > 0) {
    console.log(n);
    n--;
  }
}
countDownIterative(100000); // Works fine
// ========================================
// SOLUTION 2: Trampoline
// ========================================
function trampoline(fn) {
  return function trampolined(...args) {
    let result = fn.apply(this, args);
    while (typeof result === 'function') {
      result = result();
    }
    return result;
  };
}
// Wrap recursive function
function countDownTrampoline(n) {
  if (n <= 0) return 'done';
  console.log(n);
  // Return a function instead of calling recursively
  return () => countDownTrampoline(n - 1);
}
const safeCountDown = trampoline(countDownTrampoline);
safeCountDown(100000); // Works!
// ========================================
// SOLUTION 3: Continuation Passing Style (CPS)
// ========================================
function factorialCPS(n, continuation = (x) => x) {
  if (n <= 1) return continuation(1);
  return factorialCPS(n - 1, (result) => continuation(n * result));
}
// Still can overflow, but can be combined with trampoline
\`\`\`
---
## COMMON INTERVIEW QUESTIONS
### Q1: What's the difference between function declaration and expression?
\`\`\`js
// Declaration - Hoisted, can call before definition
sayHello(); // Works!
function sayHello() {
  console.log('Hello');
}
// Expression - NOT hoisted
// greet(); // TypeError: greet is not a function
const greet = function() {
  console.log('Greet');
};
greet(); // Works here
// Key differences:
// 1. Hoisting behavior
// 2. Named expressions have name only inside function
// 3. Declarations must have names
\`\`\`
### Q2: Explain 'this' in arrow functions
\`\`\`js
const obj = {
  name: 'Object',
  regular() {
    console.log(this.name); // 'Object'
  },
  arrow: () => {
    console.log(this.name); // undefined (from enclosing scope)
  },
  nested() {
    setTimeout(function() {
      console.log(this.name); // undefined
    }, 100);
    setTimeout(() => {
      console.log(this.name); // 'Object' (inherited from nested)
    }, 100);
  }
};
// Arrow functions don't have their own 'this'
// They inherit from enclosing lexical scope
\`\`\`
### Q3: Implement curry function
\`\`\`js
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}
const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
\`\`\`
### Q4: Implement compose and pipe
\`\`\`js
// compose: right to left
const compose = (...fns) => x => 
  fns.reduceRight((acc, fn) => fn(acc), x);
// pipe: left to right
const pipe = (...fns) => x => 
  fns.reduce((acc, fn) => fn(acc), x);
const add1 = x => x + 1;
const mult2 = x => x * 2;
console.log(compose(mult2, add1)(5)); // 12: (5+1)*2
console.log(pipe(add1, mult2)(5));    // 12: (5+1)*2
\`\`\`
### Q5: Implement memoize
\`\`\`js
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (!cache.has(key)) {
      cache.set(key, fn.apply(this, args));
    }
    return cache.get(key);
  };
}
const expensiveOp = memoize((n) => {
  console.log('Computing...');
  return n * n;
});
console.log(expensiveOp(5)); // "Computing..." 25
console.log(expensiveOp(5)); // 25 (cached)
\`\`\`
### Q6: What's the output?
\`\`\`js
var a = 1;
function outer() {
  var a = 2;
  function inner() {
    console.log(a);
    var a = 3;
  }
  inner();
}
outer();
// Output: undefined
// Because 'var a = 3' is hoisted inside inner()
// So 'a' exists but is undefined when logged
\`\`\`
### Q7: Implement once function
\`\`\`js
function once(fn) {
  let called = false;
  let result;
  return function(...args) {
    if (!called) {
      called = true;
      result = fn.apply(this, args);
    }
    return result;
  };
}
const init = once(() => {
  console.log('Initializing...');
  return 'done';
});
console.log(init()); // "Initializing..." "done"
console.log(init()); // "done" (no log)
console.log(init()); // "done" (no log)
\`\`\`
### Q8: Explain IIFE and its use cases
\`\`\`js
// IIFE = Immediately Invoked Function Expression
(function() {
  // Private scope
  var secret = 'hidden';
})();
// Use cases:
// 1. Avoid global pollution
// 2. Module pattern
// 3. Initialization code
// 4. Creating closures in loops
const counter = (function() {
  let count = 0;
  return {
    increment: () => ++count,
    getCount: () => count
  };
})();
counter.increment();
console.log(counter.getCount()); // 1
\`\`\`
---
## QUICK REFERENCE CHEAT SHEET
| Type | Syntax | Hoisted | Has 'this' | Has 'arguments' |
|------|--------|---------|------------|-----------------|
| Declaration | \`function name() {}\` | Yes | Yes | Yes |
| Expression | \`const fn = function() {}\` | No | Yes | Yes |
| Arrow | \`const fn = () => {}\` | No | No (lexical) | No |
| Generator | \`function* gen() {}\` | Yes | Yes | Yes |
| Async | \`async function fn() {}\` | Yes | Yes | Yes |
---
## KEY TAKEAWAYS FOR INTERVIEWS
1. **Know all function types** - Declaration, expression, arrow, IIFE, generator, async
2. **Understand hoisting** - Declarations are hoisted, expressions are not
3. **Master arrow functions** - Lexical this, no arguments, can't be constructors
4. **Know this binding** - Regular functions vs arrow functions
5. **Understand closures** - Functions remember their lexical scope
6. **Pure functions matter** - Same input = same output, no side effects
7. **Higher-order functions** - Functions that take/return functions
8. **Composition patterns** - compose, pipe, curry, partial application
9. **Memoization** - Cache expensive computations
10. **Recursion** - Base case + recursive case, watch for stack overflow`,
  language: 'javascript'
},

    {
  id: 'interview-currying',
  title: 'Currying & Partial Application',
  content: `# Currying & Partial Application - Complete Interview Guide

## What is Currying?
Currying is transforming a function that takes multiple arguments into a sequence of functions, each taking one argument at a time. Instead of calling f(a, b, c), you call f(a)(b)(c).

## Simple Analogy
Think of ordering a custom pizza:
- **Normal function**: "I want a large pepperoni pizza with extra cheese" (all at once)
- **Curried function**: "I want large" → "pepperoni" → "extra cheese" (one choice at a time)

Each step returns a function waiting for the next piece of information!

## Why Do Interviewers Ask About Currying?
- Tests understanding of closures and higher-order functions
- Shows functional programming knowledge
- Common in libraries like Lodash, Ramda, and React (Redux)
- Demonstrates ability to write reusable, composable code

## Real-World Uses
- Configuration functions (logging, API calls)
- Event handlers with pre-set parameters
- Creating specialized functions from general ones
- Function composition and pipelines

---

# UNDERSTANDING CURRYING STEP BY STEP

## Regular Function vs Curried Function
\`\`\`js
// Regular function - takes all arguments at once
function regularAdd(a, b, c) {
  return a + b + c;
}
console.log(regularAdd(1, 2, 3)); // 6

// Curried function - takes one argument at a time
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(curriedAdd(1)(2)(3)); // 6

// How it works step by step:
const step1 = curriedAdd(1);    // Returns function waiting for b
const step2 = step1(2);         // Returns function waiting for c
const step3 = step2(3);         // Returns 6
console.log(step1); // [Function]
console.log(step2); // [Function]
console.log(step3); // 6
\`\`\`

## Arrow Function Syntax (Cleaner!)
\`\`\`js
// Regular curried function (verbose)
function curriedAdd(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}

// Arrow function curried (concise)
const curriedAddArrow = a => b => c => a + b + c;

// Both work the same way
console.log(curriedAdd(1)(2)(3));      // 6
console.log(curriedAddArrow(1)(2)(3)); // 6

// Reading arrow curry: a => b => c => a + b + c
// "Takes a, returns function that takes b, 
//  returns function that takes c, returns a + b + c"
\`\`\`

## Why Does Currying Work? (Closures!)
\`\`\`js
// Currying works because of closures
// Each inner function "remembers" the outer variables

const curriedAdd = a => {
  // 'a' is captured in this closure
  return b => {
    // 'a' and 'b' are captured in this closure
    return c => {
      // 'a', 'b', and 'c' are all available here
      return a + b + c;
    };
  };
};

// When we call curriedAdd(1), it returns a function
// that has access to a=1 via closure

const add1 = curriedAdd(1);
// add1 has a=1 "baked in"

const add1and2 = add1(2);
// add1and2 has a=1, b=2 "baked in"

console.log(add1and2(3)); // 6 (1 + 2 + 3)
console.log(add1and2(10)); // 13 (1 + 2 + 10)
\`\`\`

---

# INTERVIEW FAVORITE: sum(1)(2)(3)

## Basic Implementation
\`\`\`js
// Question: Implement a function where sum(1)(2)(3) returns 6

// Solution 1: Fixed number of arguments
function sum(a) {
  return function(b) {
    return function(c) {
      return a + b + c;
    };
  };
}
console.log(sum(1)(2)(3)); // 6

// Solution 2: Arrow function
const sumArrow = a => b => c => a + b + c;
console.log(sumArrow(1)(2)(3)); // 6
\`\`\`

## Follow-up: Make It Work for Any Number of Arguments
\`\`\`js
// Question: What if we want sum(1)(2)(3)(4)(5)...?

// Solution 1: Call with empty () to get result
function infiniteSum(a) {
  return function(b) {
    if (b === undefined) {
      return a; // No more arguments, return sum
    }
    return infiniteSum(a + b); // Continue summing
  };
}

console.log(infiniteSum(1)(2)(3)(4)()); // 10
console.log(infiniteSum(5)(10)());       // 15

// How it works:
// infiniteSum(1) returns function, stores a=1
// (2) returns infiniteSum(3), stores a=3
// (3) returns infiniteSum(6), stores a=6
// (4) returns infiniteSum(10), stores a=10
// () calls with b=undefined, returns 10
\`\`\`

## Advanced: Using valueOf/toString
\`\`\`js
// Question: Make sum(1)(2)(3) work without final ()

// When JavaScript needs a primitive value (like in arithmetic),
// it calls valueOf() or toString()

function sum(a) {
  const innerFunc = function(b) {
    return sum(a + b);
  };
  
  // Called when JS needs a number
  innerFunc.valueOf = function() {
    return a;
  };
  
  // Called when JS needs a string
  innerFunc.toString = function() {
    return String(a);
  };
  
  return innerFunc;
}

// Works because valueOf is called when coercing to number
console.log(sum(1)(2)(3) + 0);  // 6
console.log(sum(1)(2)(3) == 6); // true
console.log(+sum(1)(2)(3));     // 6

// Works because toString is called
console.log(\`Result: \${sum(1)(2)(3)}\`); // "Result: 6"

// But direct comparison doesn't work (no coercion)
console.log(sum(1)(2)(3) === 6); // false (it's a function!)
console.log(typeof sum(1)(2)(3)); // "function"
\`\`\`

## Using Reduce for Cleaner Code
\`\`\`js
function sum(...args) {
  const total = args.reduce((acc, val) => acc + val, 0);
  
  const innerFunc = function(...moreArgs) {
    return sum(total, ...moreArgs);
  };
  
  innerFunc.valueOf = () => total;
  innerFunc.toString = () => String(total);
  
  return innerFunc;
}

// Now supports multiple arguments at each call!
console.log(sum(1, 2)(3, 4)(5) + 0); // 15
console.log(sum(1)(2)(3)(4)(5) + 0); // 15
\`\`\`

---

# GENERIC CURRY FUNCTION

## The Classic Interview Question
\`\`\`js
// Question: Implement a curry function that can curry any function

function curry(fn) {
  // Return a curried version of fn
  return function curried(...args) {
    // If we have enough arguments, call the original function
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    // Otherwise, return a function that waits for more arguments
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// fn.length gives the number of expected parameters
function add(a, b, c) {
  return a + b + c;
}
console.log(add.length); // 3

// Usage
const curriedAdd = curry(add);

// All these work!
console.log(curriedAdd(1)(2)(3));   // 6 - one at a time
console.log(curriedAdd(1, 2)(3));   // 6 - two then one
console.log(curriedAdd(1)(2, 3));   // 6 - one then two
console.log(curriedAdd(1, 2, 3));   // 6 - all at once
\`\`\`

## Step-by-Step Walkthrough
\`\`\`js
function curry(fn) {
  return function curried(...args) {
    console.log('Called with:', args, 'Need:', fn.length);
    
    if (args.length >= fn.length) {
      console.log('Enough args! Calling original function');
      return fn.apply(this, args);
    }
    
    console.log('Not enough args, returning new function');
    return function(...moreArgs) {
      console.log('More args:', moreArgs);
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

const add = (a, b, c) => a + b + c;
const curriedAdd = curry(add);

curriedAdd(1)(2)(3);
// Called with: [1] Need: 3
// Not enough args, returning new function
// More args: [2]
// Called with: [1, 2] Need: 3
// Not enough args, returning new function
// More args: [3]
// Called with: [1, 2, 3] Need: 3
// Enough args! Calling original function
// 6
\`\`\`

## Arrow Function Version
\`\`\`js
const curry = fn => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...moreArgs) => curried(...args, ...moreArgs);
  return curried;
};

// Usage
const multiply = (a, b, c) => a * b * c;
const curriedMultiply = curry(multiply);

console.log(curriedMultiply(2)(3)(4)); // 24
\`\`\`

## Handling Edge Cases
\`\`\`js
function curry(fn) {
  // Handle functions with no parameters
  if (fn.length === 0) {
    return fn;
  }
  
  return function curried(...args) {
    // Handle extra arguments
    if (args.length >= fn.length) {
      return fn.apply(this, args.slice(0, fn.length));
    }
    return function(...moreArgs) {
      return curried.apply(this, args.concat(moreArgs));
    };
  };
}

// Edge case: function with default parameters
// Note: fn.length doesn't count parameters with defaults!
const withDefault = (a, b = 2) => a + b;
console.log(withDefault.length); // 1 (only counts 'a')

const curriedDefault = curry(withDefault);
console.log(curriedDefault(5)); // 7 (uses default b=2)

// Edge case: rest parameters
// fn.length doesn't count rest parameters
const withRest = (a, ...rest) => a + rest.length;
console.log(withRest.length); // 1 (only counts 'a')
\`\`\`

---

# PARTIAL APPLICATION

## What is Partial Application?
Partial application is fixing some arguments of a function and returning a new function that takes the remaining arguments. Unlike currying, you can fix multiple arguments at once.

## Currying vs Partial Application
\`\`\`js
// Original function
function add(a, b, c) {
  return a + b + c;
}

// CURRYING: Transforms into sequence of single-argument functions
// f(a, b, c) → f(a)(b)(c)
const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6

// PARTIAL APPLICATION: Pre-fills some arguments
// f(a, b, c) with a=1 → g(b, c)
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

const add1 = partial(add, 1);        // a is fixed to 1
console.log(add1(2, 3));             // 6

const add1and2 = partial(add, 1, 2); // a and b are fixed
console.log(add1and2(3));            // 6
\`\`\`

## Implementing Partial Application
\`\`\`js
// Basic partial application
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

// Example: Greeting function
function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Create specialized functions
const sayHello = partial(greet, 'Hello');
console.log(sayHello('John', '!'));     // "Hello, John!"
console.log(sayHello('Jane', '?'));     // "Hello, Jane?"

const sayHelloToJohn = partial(greet, 'Hello', 'John');
console.log(sayHelloToJohn('!'));       // "Hello, John!"
console.log(sayHelloToJohn('...'));     // "Hello, John..."

const exactGreeting = partial(greet, 'Hi', 'Bob', '!');
console.log(exactGreeting());           // "Hi, Bob!"
\`\`\`

## Using bind() for Partial Application
\`\`\`js
// JavaScript's bind() can do partial application!
// First argument is 'this', rest are preset arguments

function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Using bind (first arg is 'this' context, use null if not needed)
const sayHi = greet.bind(null, 'Hi');
console.log(sayHi('Jane', '.')); // "Hi, Jane."

const sayHiToJane = greet.bind(null, 'Hi', 'Jane');
console.log(sayHiToJane('!')); // "Hi, Jane!"

// With methods (preserving 'this')
const obj = {
  multiplier: 2,
  multiply(a, b, c) {
    return (a + b + c) * this.multiplier;
  }
};

const multiplyWith5 = obj.multiply.bind(obj, 5);
console.log(multiplyWith5(3, 2)); // (5 + 3 + 2) * 2 = 20
\`\`\`

## Partial Application with Placeholders
\`\`\`js
// Advanced: Allow filling arguments in any order using placeholders

const _ = Symbol('placeholder'); // Unique placeholder

function partialWithPlaceholders(fn, ...presetArgs) {
  return function(...laterArgs) {
    // Replace placeholders with actual arguments
    const args = presetArgs.map(arg => 
      arg === _ ? laterArgs.shift() : arg
    );
    // Add any remaining arguments
    return fn(...args, ...laterArgs);
  };
}

function greet(greeting, name, punctuation) {
  return \`\${greeting}, \${name}\${punctuation}\`;
}

// Fix just the name (middle argument)
const greetJohn = partialWithPlaceholders(greet, _, 'John', _);
console.log(greetJohn('Hello', '!'));  // "Hello, John!"
console.log(greetJohn('Hi', '?'));     // "Hi, John?"

// Fix first and last
const helloWith = partialWithPlaceholders(greet, 'Hello', _, '!');
console.log(helloWith('Jane'));        // "Hello, Jane!"
console.log(helloWith('Bob'));         // "Hello, Bob!"
\`\`\`

---

# PRACTICAL REAL-WORLD EXAMPLES

## Example 1: Logging with Curry
\`\`\`js
// Create a configurable logger
const log = level => component => message => {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [\${level}] [\${component}] \${message}\`);
};

// Create specialized loggers
const errorLog = log('ERROR');
const authErrorLog = errorLog('AUTH');
const dbErrorLog = errorLog('DATABASE');

const infoLog = log('INFO');
const apiInfoLog = infoLog('API');

// Use them
authErrorLog('Invalid credentials');
// [2024-01-15T10:30:00.000Z] [ERROR] [AUTH] Invalid credentials

dbErrorLog('Connection failed');
// [2024-01-15T10:30:00.000Z] [ERROR] [DATABASE] Connection failed

apiInfoLog('Request received');
// [2024-01-15T10:30:00.000Z] [INFO] [API] Request received

// Each specialized logger "remembers" its configuration via closures!
\`\`\`

## Example 2: API URL Builder
\`\`\`js
// Curried URL builder
const createURL = baseURL => endpoint => params => {
  const queryString = new URLSearchParams(params).toString();
  return queryString 
    ? \`\${baseURL}\${endpoint}?\${queryString}\`
    : \`\${baseURL}\${endpoint}\`;
};

// Create specialized builders
const apiURL = createURL('https://api.example.com');
const usersEndpoint = apiURL('/users');
const productsEndpoint = apiURL('/products');

// Build specific URLs
console.log(usersEndpoint({ page: 1, limit: 10 }));
// "https://api.example.com/users?page=1&limit=10"

console.log(usersEndpoint({ id: 123 }));
// "https://api.example.com/users?id=123"

console.log(productsEndpoint({ category: 'electronics', sort: 'price' }));
// "https://api.example.com/products?category=electronics&sort=price"

// Different base URL for testing
const testURL = createURL('http://localhost:3000');
const testUsers = testURL('/users');
console.log(testUsers({ test: true }));
// "http://localhost:3000/users?test=true"
\`\`\`

## Example 3: Event Handler Factory
\`\`\`js
// Curried event handler creator
const createHandler = eventType => element => callback => {
  element.addEventListener(eventType, callback);
  // Return cleanup function
  return () => element.removeEventListener(eventType, callback);
};

// Create specialized handlers
const onClick = createHandler('click');
const onSubmit = createHandler('submit');
const onKeyPress = createHandler('keypress');

// Usage (in a real app with DOM elements)
// const button = document.querySelector('#myButton');
// const form = document.querySelector('#myForm');

// const removeClickListener = onClick(button)(() => {
//   console.log('Button clicked!');
// });

// const removeSubmitListener = onSubmit(form)((e) => {
//   e.preventDefault();
//   console.log('Form submitted!');
// });

// Later: cleanup
// removeClickListener();
// removeSubmitListener();
\`\`\`

## Example 4: Validation Functions
\`\`\`js
// Curried validators
const validate = type => config => value => {
  switch(type) {
    case 'minLength':
      return value.length >= config.min;
    case 'maxLength':
      return value.length <= config.max;
    case 'pattern':
      return config.regex.test(value);
    case 'range':
      return value >= config.min && value <= config.max;
    default:
      return true;
  }
};

// Create specific validators
const minLength = validate('minLength');
const maxLength = validate('maxLength');
const pattern = validate('pattern');
const range = validate('range');

// Create even more specific validators
const minLength5 = minLength({ min: 5 });
const maxLength20 = maxLength({ max: 20 });
const isEmail = pattern({ regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ });
const isAdult = range({ min: 18, max: 120 });

// Use them
console.log(minLength5('hello'));     // true
console.log(minLength5('hi'));        // false
console.log(isEmail('test@email.com')); // true
console.log(isEmail('invalid'));      // false
console.log(isAdult(25));             // true
console.log(isAdult(15));             // false

// Combine validators
const validateUsername = value => 
  minLength5(value) && maxLength20(value);

console.log(validateUsername('john')); // false (too short)
console.log(validateUsername('john_doe')); // true
\`\`\`

## Example 5: Math Operations
\`\`\`js
// Curried math functions
const add = a => b => a + b;
const multiply = a => b => a * b;
const subtract = a => b => a - b;
const divide = a => b => a / b;
const power = base => exponent => Math.pow(base, exponent);

// Create specialized functions
const add10 = add(10);
const double = multiply(2);
const triple = multiply(3);
const half = divide(2); // Note: divide(2)(10) = 10/2, not 2/10!
const square = power(2); // Hmm, this is exponent 2, not base 2

// Wait, let me fix the divide and power for intuition:
const divideBy = divisor => value => value / divisor;
const powerOf = exponent => base => Math.pow(base, exponent);

const halve = divideBy(2);
const square2 = powerOf(2);
const cube = powerOf(3);

console.log(add10(5));     // 15
console.log(double(7));    // 14
console.log(triple(4));    // 12
console.log(halve(10));    // 5
console.log(square2(5));   // 25
console.log(cube(3));      // 27

// Chain operations
const process = value => cube(double(add10(value)));
console.log(process(5)); // ((5 + 10) * 2)^3 = 30^3 = 27000
\`\`\`

## Example 6: React/Redux Style Patterns
\`\`\`js
// Redux-style action creator (curried)
const createAction = type => payload => ({
  type,
  payload,
  timestamp: Date.now()
});

const addUser = createAction('ADD_USER');
const removeUser = createAction('REMOVE_USER');
const updateUser = createAction('UPDATE_USER');

console.log(addUser({ name: 'John', age: 30 }));
// { type: 'ADD_USER', payload: { name: 'John', age: 30 }, timestamp: ... }

console.log(removeUser({ id: 123 }));
// { type: 'REMOVE_USER', payload: { id: 123 }, timestamp: ... }

// Higher-order component pattern (simplified)
const withLoading = Component => props => {
  if (props.isLoading) {
    return 'Loading...';
  }
  return Component(props);
};

// Usage:
// const EnhancedList = withLoading(List);
\`\`\`

---

# CURRY WITH PLACEHOLDER (ADVANCED)

## Interview Challenge: Implement Placeholder Support
\`\`\`js
// Question: Implement curry that supports placeholders
// curry(fn)(_, 2)(1, 3) should work like fn(1, 2, 3)

const _ = Symbol('placeholder');

function curry(fn) {
  return function curried(...args) {
    // Check if we have enough non-placeholder arguments
    const complete = args.length >= fn.length &&
                     !args.slice(0, fn.length).includes(_);
    
    if (complete) {
      return fn.apply(this, args);
    }
    
    // Return function to accept more arguments
    return function(...newArgs) {
      // Replace placeholders with new arguments
      const mergedArgs = args.map(arg => {
        if (arg === _ && newArgs.length > 0) {
          return newArgs.shift(); // Take from newArgs
        }
        return arg;
      });
      
      // Add any remaining new arguments
      return curried.apply(this, [...mergedArgs, ...newArgs]);
    };
  };
}

// Usage
const join = (a, b, c) => \`\${a}-\${b}-\${c}\`;
const curriedJoin = curry(join);

console.log(curriedJoin(1, 2, 3));      // "1-2-3"
console.log(curriedJoin(1)(2)(3));      // "1-2-3"
console.log(curriedJoin(1, 2)(3));      // "1-2-3"
console.log(curriedJoin(_, 2)(1, 3));   // "1-2-3"
console.log(curriedJoin(_, _, 3)(1)(2)); // "1-2-3"
console.log(curriedJoin(_, 2, _)(1, 3)); // "1-2-3"
console.log(curriedJoin(_, _, _)(1)(2)(3)); // "1-2-3"
\`\`\`

## Step-by-Step Explanation
\`\`\`js
const _ = Symbol('placeholder');

function curry(fn) {
  return function curried(...args) {
    console.log('Current args:', args.map(a => a === _ ? '_' : a));
    
    const complete = args.length >= fn.length &&
                     !args.slice(0, fn.length).includes(_);
    
    console.log('Complete?', complete);
    
    if (complete) {
      return fn.apply(this, args);
    }
    
    return function(...newArgs) {
      console.log('New args:', newArgs);
      
      const mergedArgs = args.map(arg => {
        if (arg === _ && newArgs.length > 0) {
          const replacement = newArgs.shift();
          console.log('Replacing _ with', replacement);
          return replacement;
        }
        return arg;
      });
      
      console.log('Merged args:', mergedArgs.map(a => a === _ ? '_' : a));
      return curried.apply(this, [...mergedArgs, ...newArgs]);
    };
  };
}

const join = (a, b, c) => \`\${a}-\${b}-\${c}\`;
const curriedJoin = curry(join);

curriedJoin(_, 2, _)(1)(3);
// Current args: ['_', 2, '_']
// Complete? false
// New args: [1]
// Replacing _ with 1
// Merged args: [1, 2, '_']
// Current args: [1, 2, '_']
// Complete? false
// New args: [3]
// Replacing _ with 3
// Merged args: [1, 2, 3]
// Current args: [1, 2, 3]
// Complete? true
// "1-2-3"
\`\`\`

---

# FUNCTION COMPOSITION WITH CURRY

## Compose and Pipe
\`\`\`js
// Compose: Right to left execution
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

// Pipe: Left to right execution  
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

// Curried utility functions
const add = a => b => a + b;
const multiply = a => b => a * b;
const subtract = a => b => b - a; // Note: b - a for easier composition

// Create specialized functions
const add5 = add(5);
const double = multiply(2);
const subtract3 = subtract(3);

// Compose them
const processCompose = compose(subtract3, double, add5);
// Reads right to left: add 5, then double, then subtract 3

const processPipe = pipe(add5, double, subtract3);
// Reads left to right: add 5, then double, then subtract 3

console.log(processCompose(10)); // ((10 + 5) * 2) - 3 = 27
console.log(processPipe(10));    // ((10 + 5) * 2) - 3 = 27

// More readable pipeline
const calculateTax = pipe(
  add(100),      // Add base fee
  multiply(1.1), // Add 10% tax
  Math.round     // Round to whole number
);

console.log(calculateTax(500)); // (500 + 100) * 1.1 = 660
\`\`\`

## Real-World Composition Example
\`\`\`js
// Data transformation pipeline
const users = [
  { name: 'John', age: 25, active: true },
  { name: 'Jane', age: 17, active: true },
  { name: 'Bob', age: 30, active: false },
  { name: 'Alice', age: 22, active: true }
];

// Curried array methods
const filter = predicate => array => array.filter(predicate);
const map = transform => array => array.map(transform);
const sort = compareFn => array => [...array].sort(compareFn);

// Curried predicates and transforms
const isActive = user => user.active;
const isAdult = user => user.age >= 18;
const getName = user => user.name;
const alphabetical = (a, b) => a.localeCompare(b);

// Compose the pipeline
const getActiveAdultNames = pipe(
  filter(isActive),
  filter(isAdult),
  map(getName),
  sort(alphabetical)
);

console.log(getActiveAdultNames(users));
// ['Alice', 'John']
\`\`\`

---

# COMMON INTERVIEW QUESTIONS

## Question 1: Implement multiply(2)(3)(4)
\`\`\`js
// Basic solution
const multiply = a => b => c => a * b * c;
console.log(multiply(2)(3)(4)); // 24

// Flexible solution (any number of args)
function multiply(...args) {
  const product = args.reduce((acc, val) => acc * val, 1);
  
  const inner = function(...moreArgs) {
    return multiply(product, ...moreArgs);
  };
  
  inner.valueOf = () => product;
  inner.toString = () => String(product);
  
  return inner;
}

console.log(multiply(2)(3)(4) + 0); // 24
console.log(multiply(2, 3)(4, 5) + 0); // 120
\`\`\`

## Question 2: Implement add(1, 2)(3, 4)(5)
\`\`\`js
// Variable arguments per call
function add(...args) {
  let sum = args.reduce((a, b) => a + b, 0);
  
  const inner = function(...moreArgs) {
    sum += moreArgs.reduce((a, b) => a + b, 0);
    return inner;
  };
  
  inner.valueOf = () => sum;
  inner.toString = () => String(sum);
  
  return inner;
}

console.log(add(1, 2)(3, 4)(5) + 0); // 15
console.log(add(1)(2)(3)(4)(5) + 0); // 15
\`\`\`

## Question 3: What's the Output?
\`\`\`js
const curry = fn => {
  const curried = (...args) =>
    args.length >= fn.length
      ? fn(...args)
      : (...more) => curried(...args, ...more);
  return curried;
};

const sum = curry((a, b, c) => a + b + c);

console.log(sum(1)(2)(3));   // 6
console.log(sum(1, 2)(3));   // 6
console.log(sum(1)(2, 3));   // 6
console.log(sum(1, 2, 3));   // 6
console.log(sum()(1)(2)(3)); // [Function] - empty call returns new function!
console.log(sum(1, 2, 3, 4)); // 6 - extra arg ignored
\`\`\`

## Question 4: Why Use Currying?
\`\`\`js
// Answer: Creates reusable, specialized functions

// Without currying - repetitive
fetch('/api/users?status=active');
fetch('/api/posts?status=active');
fetch('/api/comments?status=active');

// With currying - reusable
const fetchWithStatus = status => endpoint => 
  fetch(\`\${endpoint}?status=\${status}\`);

const fetchActive = fetchWithStatus('active');
fetchActive('/api/users');
fetchActive('/api/posts');
fetchActive('/api/comments');

// Benefits:
// 1. Code reuse
// 2. Better readability
// 3. Easier testing (test each layer separately)
// 4. Function composition
// 5. Delayed execution
\`\`\`

---

# QUICK REFERENCE

## Currying vs Partial Application
| Feature | Currying | Partial Application |
|---------|----------|---------------------|
| Transformation | f(a,b,c) → f(a)(b)(c) | f(a,b,c) → g(c) |
| Arguments per call | One at a time | Any number |
| Returns | Function (until complete) | Function with preset args |
| Use case | Function composition | Creating specialized functions |

## Key Formulas
\`\`\`js
// Basic curry
const curry = a => b => c => a + b + c;

// Generic curry
const curry = fn => (...args) =>
  args.length >= fn.length
    ? fn(...args)
    : (...more) => curry(fn)(...args, ...more);

// Partial application
const partial = (fn, ...preset) => (...later) => fn(...preset, ...later);

// Using bind
const partial = fn.bind(null, arg1, arg2);

// Infinite curry with valueOf
function sum(a) {
  const f = b => sum(a + b);
  f.valueOf = () => a;
  return f;
}
\`\`\``,
  codeExample: `// Currying & Partial Application Cheat Sheet
// ==========================================

// BASIC CURRY
const add = a => b => c => a + b + c;
add(1)(2)(3); // 6

// GENERIC CURRY FUNCTION
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
    }
    return (...more) => curried(...args, ...more);
  };
}

// PARTIAL APPLICATION
function partial(fn, ...preset) {
  return (...later) => fn(...preset, ...later);
}

// USING BIND FOR PARTIAL
const greet = (a, b, c) => \`\${a}, \${b}\${c}\`;
const sayHello = greet.bind(null, 'Hello');
sayHello('John', '!'); // "Hello, John!"

// INFINITE SUM
function sum(a) {
  return function(b) {
    return b !== undefined ? sum(a + b) : a;
  };
}
sum(1)(2)(3)(); // 6

// WITH VALUEOF (no final call needed)
function sum(a) {
  const f = b => sum(a + b);
  f.valueOf = () => a;
  return f;
}
sum(1)(2)(3) + 0; // 6

// PRACTICAL: LOGGER
const log = level => module => msg =>
  console.log(\`[\${level}] [\${module}] \${msg}\`);
const errorLog = log('ERROR');
const dbError = errorLog('DB');
dbError('Connection failed');

// PRACTICAL: URL BUILDER
const url = base => path => params =>
  \`\${base}\${path}?\${new URLSearchParams(params)}\`;
const api = url('https://api.com');
const users = api('/users');
users({ page: 1 }); // "https://api.com/users?page=1"`,
  language: 'javascript'
},

    // ==========================================
    // SECTION 6: TYPE COERCION & COMPARISONS
    // ==========================================
    {
  id: 'interview-coercion',
  title: 'Type Coercion & Equality',
  content: `# Type Coercion & Equality - Complete Interview Guide

## What is Type Coercion?
Type coercion is JavaScript automatically converting one data type to another when needed. Think of it like JavaScript being "helpful" by converting values behind the scenes - but this "help" often causes unexpected bugs!

## Why Do Interviewers Love This Topic?
- Tests deep understanding of JavaScript behavior
- Reveals if you know the quirky parts of JS
- Shows awareness of common bug sources
- Essential for debugging weird issues

## Simple Analogy
Imagine you're a translator. When someone speaks French to an English speaker, you translate automatically. JavaScript does the same with data types - it "translates" numbers to strings, strings to numbers, etc. Sometimes the translation makes sense, sometimes it's bizarre!

---

# TYPES IN JAVASCRIPT

## Primitive Types (7 types)
\`\`\`js
// 1. String
const str = "Hello";
console.log(typeof str); // "string"

// 2. Number
const num = 42;
const float = 3.14;
console.log(typeof num); // "number"

// 3. Boolean
const bool = true;
console.log(typeof bool); // "boolean"

// 4. Undefined
let undef;
console.log(typeof undef); // "undefined"

// 5. Null (famous bug!)
const nothing = null;
console.log(typeof nothing); // "object" - THIS IS A BUG!

// 6. Symbol (ES6)
const sym = Symbol('id');
console.log(typeof sym); // "symbol"

// 7. BigInt (ES2020)
const big = 123n;
console.log(typeof big); // "bigint"
\`\`\`

## Non-Primitive Types
\`\`\`js
// Objects
const obj = { name: 'John' };
console.log(typeof obj); // "object"

// Arrays (are objects!)
const arr = [1, 2, 3];
console.log(typeof arr); // "object"
console.log(Array.isArray(arr)); // true - proper way to check

// Functions
const func = function() {};
console.log(typeof func); // "function"

// Special: Date, RegExp, Map, Set - all "object"
console.log(typeof new Date()); // "object"
console.log(typeof /regex/);    // "object"
\`\`\`

## Interview Favorite: typeof Quirks
\`\`\`js
// The famous quirks!
console.log(typeof null);           // "object" (historical bug since 1995!)
console.log(typeof undefined);      // "undefined"
console.log(typeof NaN);            // "number" (Not-a-Number is a number!)
console.log(typeof Infinity);       // "number"
console.log(typeof []);             // "object"
console.log(typeof {});             // "object"
console.log(typeof function(){});   // "function"

// How to properly check types
console.log(Array.isArray([]));           // true
console.log(value === null);              // check for null
console.log(Number.isNaN(NaN));           // true
console.log(Object.prototype.toString.call([])); // "[object Array]"
\`\`\`

---

# EXPLICIT COERCION (Type Casting)

Explicit coercion is when YOU tell JavaScript to convert a type. It's intentional and clear.

## Converting to String
\`\`\`js
// Method 1: String() constructor
console.log(String(123));       // "123"
console.log(String(true));      // "true"
console.log(String(false));     // "false"
console.log(String(null));      // "null"
console.log(String(undefined)); // "undefined"
console.log(String([1, 2, 3])); // "1,2,3"
console.log(String({a: 1}));    // "[object Object]"

// Method 2: .toString() method
console.log((123).toString());  // "123"
console.log(true.toString());   // "true"
// null.toString();              // TypeError!
// undefined.toString();         // TypeError!

// Method 3: Template literal
const num = 42;
console.log(\`\${num}\`);         // "42"

// Method 4: Concatenate with empty string
console.log(123 + '');          // "123"
console.log(true + '');         // "true"
\`\`\`

## Converting to Number
\`\`\`js
// Method 1: Number() constructor
console.log(Number('123'));     // 123
console.log(Number('123.45'));  // 123.45
console.log(Number(''));        // 0
console.log(Number('  '));      // 0 (whitespace only)
console.log(Number('hello'));   // NaN
console.log(Number('123abc'));  // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number([]));        // 0
console.log(Number([1]));       // 1
console.log(Number([1, 2]));    // NaN
console.log(Number({}));        // NaN

// Method 2: parseInt() and parseFloat()
console.log(parseInt('123'));       // 123
console.log(parseInt('123.45'));    // 123 (truncates)
console.log(parseInt('123abc'));    // 123 (parses until non-digit)
console.log(parseInt('abc123'));    // NaN (starts with non-digit)
console.log(parseInt('  123  '));   // 123 (trims whitespace)
console.log(parseFloat('123.45'));  // 123.45
console.log(parseFloat('3.14more')); // 3.14

// Method 3: Unary plus (+)
console.log(+'123');     // 123
console.log(+'');        // 0
console.log(+true);      // 1
console.log(+false);     // 0
console.log(+null);      // 0
console.log(+undefined); // NaN
console.log(+[]);        // 0
console.log(+{});        // NaN

// Method 4: Multiply by 1 or subtract 0
console.log('123' * 1);  // 123
console.log('123' - 0);  // 123
\`\`\`

## Converting to Boolean
\`\`\`js
// Method 1: Boolean() constructor
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean('hello'));    // true
console.log(Boolean(''));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean([]));         // true (empty array is truthy!)
console.log(Boolean({}));         // true (empty object is truthy!)

// Method 2: Double NOT (!!)
console.log(!!1);          // true
console.log(!!0);          // false
console.log(!!'hello');    // true
console.log(!!'');         // false
console.log(!![]);         // true
console.log(!!null);       // false

// How !! works:
// !1 = false (NOT of truthy is false)
// !!1 = !false = true (NOT of false is true)
\`\`\`

---

# TRUTHY AND FALSY VALUES

## The 7 Falsy Values (MEMORIZE THESE!)
\`\`\`js
// There are exactly 7 falsy values in JavaScript:
console.log(Boolean(false));     // false - the boolean false
console.log(Boolean(0));         // false - zero
console.log(Boolean(-0));        // false - negative zero
console.log(Boolean(0n));        // false - BigInt zero
console.log(Boolean(''));        // false - empty string
console.log(Boolean(null));      // false - null
console.log(Boolean(undefined)); // false - undefined
console.log(Boolean(NaN));       // false - Not a Number

// Memory trick: "0, empty, nothing, and false itself"
\`\`\`

## Everything Else is Truthy
\`\`\`js
// Common truthy values that trick people:
console.log(Boolean([]));           // true - empty array!
console.log(Boolean({}));           // true - empty object!
console.log(Boolean('0'));          // true - string with zero!
console.log(Boolean('false'));      // true - string with "false"!
console.log(Boolean(new Boolean(false))); // true - Boolean object!
console.log(Boolean(-1));           // true - negative numbers
console.log(Boolean(Infinity));     // true
console.log(Boolean(-Infinity));    // true
console.log(Boolean(' '));          // true - string with space
console.log(Boolean('null'));       // true - string "null"
console.log(Boolean(function(){})); // true - functions
console.log(Boolean(new Date()));   // true - objects
console.log(Boolean(/regex/));      // true - regex

// Common interview trap:
if ([]) console.log('Empty array is truthy!');  // This runs!
if ({}) console.log('Empty object is truthy!'); // This runs!
if ('0') console.log('String "0" is truthy!');  // This runs!
\`\`\`

## Truthy/Falsy in Practice
\`\`\`js
// Conditional checking
const user = null;
if (user) {
  console.log('User exists');
} else {
  console.log('No user'); // This runs
}

// Gotcha with 0
const count = 0;
if (count) {
  console.log('Has items');
} else {
  console.log('No items'); // This runs, but 0 might be valid!
}

// Better approach for 0
if (count !== undefined && count !== null) {
  console.log('Count is defined:', count); // Now 0 works
}

// Or use nullish coalescing
const displayCount = count ?? 'No count';
console.log(displayCount); // 0 (not 'No count')
\`\`\`

---

# IMPLICIT COERCION

Implicit coercion is when JavaScript automatically converts types without you asking. This is where the "weird" behavior comes from!

## String Coercion (+ operator with strings)
\`\`\`js
// Rule: If any operand is string, + does concatenation
console.log('5' + 3);         // "53" (3 becomes "3")
console.log(3 + '5');         // "35" (3 becomes "3")
console.log('5' + true);      // "5true"
console.log('5' + false);     // "5false"
console.log('5' + null);      // "5null"
console.log('5' + undefined); // "5undefined"
console.log('5' + [1, 2]);    // "51,2"
console.log('5' + {});        // "5[object Object]"

// Multiple operations (left to right)
console.log(1 + 2 + '3');     // "33" (1+2=3, then 3+"3"="33")
console.log('1' + 2 + 3);     // "123" (string from start)
console.log(1 + '2' + 3);     // "123" (string after '2')

// Interview question:
console.log(1 + 2 + 3 + '4' + 5 + 6);
// Step by step:
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + '4' = '64'
// '64' + 5 = '645'
// '645' + 6 = '6456'
// Answer: "6456"
\`\`\`

## Number Coercion (-, *, /, % operators)
\`\`\`js
// Rule: -, *, /, % always try to convert to numbers
console.log('5' - 3);         // 2
console.log('5' * '2');       // 10
console.log('10' / '2');      // 5
console.log('10' % '3');      // 1
console.log('5' - true);      // 4 (true = 1)
console.log('5' - false);     // 5 (false = 0)
console.log('5' - null);      // 5 (null = 0)
console.log('5' - undefined); // NaN (undefined = NaN)
console.log('5' * []);        // 0 ([] = 0)
console.log('5' * [2]);       // 10 ([2] = 2)
console.log('5' * [1, 2]);    // NaN ([1,2] can't convert)

// Interesting cases
console.log('5' - '3');       // 2
console.log('abc' - 1);       // NaN
console.log('5abc' - 1);      // NaN
\`\`\`

## Boolean Coercion
\`\`\`js
// Logical operators and conditions trigger boolean coercion
if ('hello') {
  console.log('Truthy!'); // Runs
}

// Logical NOT forces boolean
console.log(!0);          // true
console.log!'hello');     // false
console.log(!!'hello');   // true (double NOT = Boolean())

// Comparison with boolean
console.log(true + true);   // 2 (1 + 1)
console.log(true + false);  // 1 (1 + 0)
console.log(true - true);   // 0 (1 - 1)
console.log(false * 10);    // 0 (0 * 10)
\`\`\`

---

# THE + OPERATOR COMPLEXITY

## The Rules
\`\`\`js
// + operator has two modes:
// 1. Addition (when both operands are numbers)
// 2. Concatenation (when any operand is string)

// Rule: If either side is string, concatenate
// Otherwise, convert both to numbers and add

console.log(1 + 1);       // 2 (both numbers)
console.log('1' + '1');   // "11" (both strings)
console.log(1 + '1');     // "11" (one is string)
console.log('1' + 1);     // "11" (one is string)

// What about objects and arrays?
// They get converted to primitives first using ToPrimitive

// Arrays convert to string
console.log([1, 2] + [3, 4]); // "1,23,4"
// Step: [1,2].toString() = "1,2", [3,4].toString() = "3,4"
// Then: "1,2" + "3,4" = "1,23,4"

// Empty array converts to empty string
console.log([] + []);     // ""
// Step: "".toString() = "", "" + "" = ""

// Objects convert to "[object Object]"
console.log({} + {});     // "[object Object][object Object]"
console.log({} + []);     // "[object Object]"
console.log([] + {});     // "[object Object]"
\`\`\`

## The {} + [] Gotcha
\`\`\`js
// This is context-dependent!

// In browser console:
{} + []  // 0
// Why? {} is treated as empty block, not object!
// So it becomes: + [] which is +'' which is 0

// But in expression context:
console.log({} + []); // "[object Object]"
// Here {} is definitely an object

// Force it to be an object:
({}) + []  // "[object Object]"
\`\`\`

---

# EQUALITY OPERATORS (== vs ===)

## Strict Equality (===)
\`\`\`js
// === compares value AND type
// No coercion happens!

console.log(5 === 5);       // true
console.log(5 === '5');     // false (different types)
console.log(true === 1);    // false (different types)
console.log(null === null); // true
console.log(undefined === undefined); // true
console.log(null === undefined);      // false (different types)

// NaN is never equal to anything, including itself!
console.log(NaN === NaN);   // false
console.log(Number.isNaN(NaN)); // true (proper way to check)

// Objects compare by reference, not value
console.log([] === []);     // false (different references)
console.log({} === {});     // false (different references)

const arr = [1, 2, 3];
const sameArr = arr;
console.log(arr === sameArr); // true (same reference)
\`\`\`

## Loose Equality (==)
\`\`\`js
// == compares values with type coercion
// Complex rules apply!

console.log(5 == 5);        // true
console.log(5 == '5');      // true (string converted to number)
console.log(true == 1);     // true (boolean converted to number)
console.log(false == 0);    // true
console.log(null == undefined); // true (special rule!)
console.log(null == null);  // true
console.log(undefined == undefined); // true

// But null is NOT == to other falsy values
console.log(null == 0);     // false
console.log(null == '');    // false
console.log(null == false); // false
console.log(undefined == 0); // false
\`\`\`

## == Coercion Rules
\`\`\`js
// The algorithm (simplified):
// 1. If same type, compare directly
// 2. null == undefined is true
// 3. Number vs String: convert string to number
// 4. Boolean vs anything: convert boolean to number first
// 5. Object vs primitive: convert object to primitive

// Examples with explanation:
console.log('5' == 5);
// String vs Number → '5' becomes 5 → 5 == 5 → true

console.log(true == '1');
// Boolean vs String → true becomes 1 → 1 == '1'
// Number vs String → '1' becomes 1 → 1 == 1 → true

console.log([] == false);
// Object vs Boolean → false becomes 0 → [] == 0
// Object vs Number → [] becomes '' → '' == 0
// String vs Number → '' becomes 0 → 0 == 0 → true

console.log([] == '');
// Object vs String → [] becomes '' → '' == '' → true

console.log([1] == 1);
// Object vs Number → [1] becomes '1' → '1' == 1
// String vs Number → '1' becomes 1 → 1 == 1 → true

console.log([1, 2] == '1,2');
// Object vs String → [1,2] becomes '1,2' → '1,2' == '1,2' → true
\`\`\`

## Interview Favorite: Weird Comparisons
\`\`\`js
console.log([] == ![]);      // true!
// Step by step:
// ![] = false (array is truthy, NOT makes it false)
// [] == false
// [] == 0 (false to number)
// '' == 0 (array to string)
// 0 == 0 → true!

console.log([] == []);       // false (different references)
console.log(![] == []);      // true (as shown above)

console.log('' == false);    // true (both become 0)
console.log('0' == false);   // true ('0' → 0, false → 0)
console.log('' == '0');      // false (both strings, compared directly)

// Transitivity broken!
console.log('' == 0);        // true
console.log(0 == '0');       // true
console.log('' == '0');      // false! (not transitive)

// More weirdness
console.log(false == 'false');  // false ('false' → NaN)
console.log(false == '0');      // true ('0' → 0, false → 0)
console.log(false == undefined); // false
console.log(false == null);     // false

// Recommendation: ALWAYS use === unless you have specific reason for ==
\`\`\`

---

# NaN (Not a Number)

## Understanding NaN
\`\`\`js
// NaN represents a failed number conversion
console.log(Number('hello'));  // NaN
console.log(parseInt('abc'));  // NaN
console.log(Math.sqrt(-1));    // NaN
console.log(0 / 0);            // NaN
console.log(Infinity - Infinity); // NaN

// NaN is the only value not equal to itself
console.log(NaN === NaN);      // false
console.log(NaN == NaN);       // false

// How to check for NaN
// Method 1: Number.isNaN() - RECOMMENDED
console.log(Number.isNaN(NaN));        // true
console.log(Number.isNaN('hello'));    // false (doesn't coerce)
console.log(Number.isNaN(undefined));  // false

// Method 2: isNaN() - NOT recommended (coerces first)
console.log(isNaN(NaN));       // true
console.log(isNaN('hello'));   // true (coerces to NaN first!)
console.log(isNaN(undefined)); // true (coerces to NaN!)

// Method 3: Object.is()
console.log(Object.is(NaN, NaN)); // true

// Method 4: Self comparison (clever trick)
const value = NaN;
console.log(value !== value); // true only for NaN!
\`\`\`

## NaN Propagates
\`\`\`js
// Any operation with NaN produces NaN
console.log(NaN + 1);      // NaN
console.log(NaN * 100);    // NaN
console.log(NaN / NaN);    // NaN
console.log(Math.max(1, 2, NaN)); // NaN

// Except comparison which gives false
console.log(NaN > 0);      // false
console.log(NaN < 0);      // false
console.log(NaN >= 0);     // false
console.log(NaN <= 0);     // false
\`\`\`

---

# COMPARISON OPERATORS QUIRKS

## Comparing Different Types
\`\`\`js
// < > <= >= convert both to numbers (usually)
console.log('5' > 3);       // true ('5' → 5)
console.log('5' < '10');    // false! (string comparison: '5' > '1')
console.log(5 < '10');      // true ('10' → 10)

// String comparison is lexicographic (character by character)
console.log('apple' < 'banana'); // true ('a' < 'b')
console.log('10' < '9');    // true! ('1' < '9')
console.log('10' < 9);      // false (10 < 9)
\`\`\`

## The null/undefined Comparison Trap
\`\`\`js
// This is a famous interview question!
console.log(null == undefined);  // true (special rule)
console.log(null === undefined); // false

// But with comparisons:
console.log(null > 0);   // false (null → 0, 0 > 0)
console.log(null == 0);  // false (special rule: null only == undefined)
console.log(null >= 0);  // true! (null → 0, 0 >= 0)

// So null is NOT > 0, NOT == 0, but IS >= 0???
// This is because == and >= use different algorithms!

// undefined is even weirder
console.log(undefined > 0);  // false (undefined → NaN)
console.log(undefined < 0);  // false (NaN comparison)
console.log(undefined == 0); // false
console.log(undefined >= 0); // false (NaN >= 0 is false)
\`\`\`

## Chained Comparisons Trap
\`\`\`js
// JavaScript doesn't work like math!
console.log(1 < 2 < 3);  // true
// But not for the reason you think!
// 1 < 2 → true
// true < 3 → 1 < 3 → true

console.log(3 > 2 > 1);  // false!
// 3 > 2 → true
// true > 1 → 1 > 1 → false

console.log(1 < 2 < 1);  // true!
// 1 < 2 → true
// true < 1 → 1 < 1 → false... wait, that's false

// Let me recalculate:
console.log(1 < 2);      // true
console.log(true < 1);   // false (1 < 1 is false)
// So 1 < 2 < 1 should be false, let me verify...
// Actually: 1 < 2 < 1
// 1 < 2 = true
// true < 1 = 1 < 1 = false
// Result: false
\`\`\`

---

# SHORT-CIRCUIT EVALUATION

## OR Operator (||)
\`\`\`js
// || returns first truthy value, or last value if all falsy
console.log('hello' || 'default');  // 'hello' (first truthy)
console.log('' || 'default');       // 'default' ('' is falsy)
console.log(0 || 'default');        // 'default' (0 is falsy)
console.log(null || 'default');     // 'default'
console.log(undefined || 'default'); // 'default'
console.log(false || 'default');    // 'default'

// Returns the actual value, not boolean
console.log(false || 0 || '' || 'found'); // 'found'
console.log(false || 0 || '' || null);    // null (last value)

// Practical: Default values
function greet(name) {
  name = name || 'Guest';
  console.log('Hello, ' + name);
}
greet('John');  // 'Hello, John'
greet('');      // 'Hello, Guest' - But what if empty string is valid?
greet(0);       // 'Hello, Guest' - Bug if 0 is a valid name!
\`\`\`

## AND Operator (&&)
\`\`\`js
// && returns first falsy value, or last value if all truthy
console.log('hello' && 'world');    // 'world' (both truthy, returns last)
console.log('' && 'world');         // '' (first falsy)
console.log('hello' && 0 && 'world'); // 0 (first falsy)
console.log(null && 'anything');    // null

// Practical: Conditional execution
const user = { name: 'John' };
user && console.log(user.name); // 'John'

const noUser = null;
noUser && console.log(noUser.name); // Nothing (short-circuits)

// Practical: Conditional rendering (React)
// {isLoggedIn && <Dashboard />}
// {items.length > 0 && <ItemList items={items} />}
\`\`\`

## Nullish Coalescing (??)
\`\`\`js
// ?? only checks for null/undefined, not all falsy values
console.log(0 || 'default');    // 'default' (0 is falsy)
console.log(0 ?? 'default');    // 0 (0 is not null/undefined)

console.log('' || 'default');   // 'default' ('' is falsy)
console.log('' ?? 'default');   // '' ('' is not null/undefined)

console.log(false || 'default'); // 'default'
console.log(false ?? 'default'); // false

console.log(null ?? 'default');  // 'default'
console.log(undefined ?? 'default'); // 'default'

// Use ?? when 0, '', or false are valid values
const count = 0;
const displayCount = count ?? 'No count'; // 0 (correct!)
const wrongCount = count || 'No count';   // 'No count' (wrong!)
\`\`\`

---

# FLOATING POINT PRECISION

## The Famous 0.1 + 0.2 Problem
\`\`\`js
console.log(0.1 + 0.2);          // 0.30000000000000004
console.log(0.1 + 0.2 === 0.3);  // false!

// Why? Binary floating point can't represent 0.1 exactly
// Just like 1/3 can't be represented exactly in decimal

// Other examples:
console.log(0.1 + 0.7);  // 0.7999999999999999
console.log(1.1 + 1.3);  // 2.4000000000000004
console.log(0.3 - 0.1);  // 0.19999999999999998
\`\`\`

## Solutions
\`\`\`js
// Solution 1: Use epsilon comparison
function areEqual(a, b) {
  return Math.abs(a - b) < Number.EPSILON;
}
console.log(areEqual(0.1 + 0.2, 0.3)); // true

// Solution 2: Round to fixed decimal places
console.log((0.1 + 0.2).toFixed(1) === '0.3'); // true
console.log(parseFloat((0.1 + 0.2).toFixed(10))); // 0.3

// Solution 3: Use integers (cents instead of dollars)
const price1 = 10; // cents
const price2 = 20; // cents
const total = (price1 + price2) / 100; // $0.30

// Solution 4: Use a library (decimal.js, big.js)
\`\`\`

---

# CLASSIC INTERVIEW QUESTIONS

## Question 1: The "banana" Question
\`\`\`js
console.log('b' + 'a' + + 'a' + 'a');
// Answer: "baNaNa"

// Explanation:
// 'b' + 'a' = 'ba'
// + 'a' = NaN (unary + tries to convert 'a' to number)
// 'ba' + NaN = 'baNaN'
// 'baNaN' + 'a' = 'baNaNa'
\`\`\`

## Question 2: Array Equality
\`\`\`js
console.log([] == false);  // true
console.log(![] == false); // true
console.log([] == ![]);    // true

// But:
console.log([] == []);     // false
console.log([] === []);    // false
\`\`\`

## Question 3: What Will This Output?
\`\`\`js
console.log(typeof typeof 1);
// Answer: "string"

// Explanation:
// typeof 1 = "number" (a string)
// typeof "number" = "string"
\`\`\`

## Question 4: Double Bang
\`\`\`js
console.log(!!null);       // false
console.log(!!'');         // false
console.log(!!0);          // false
console.log(!!NaN);        // false
console.log(!!undefined);  // false
console.log(!!'false');    // true (non-empty string)
console.log(!!'0');        // true (non-empty string)
console.log(!![]);         // true (empty array is truthy)
console.log(!!{});         // true (empty object is truthy)
\`\`\`

## Question 5: Increment Operators
\`\`\`js
let a = '5';
console.log(++a);  // 6 (converts to number first)
console.log(a);    // 6 (now a number)

let b = '5';
console.log(b++);  // "5" (returns before increment? No!)
// Actually: b++ converts to number, returns 5, then increments
console.log(b);    // 6
\`\`\`

## Question 6: Object Coercion
\`\`\`js
const obj = {
  valueOf() {
    return 42;
  },
  toString() {
    return 'hello';
  }
};

console.log(obj + 1);   // 43 (valueOf used for number context)
console.log(\`\${obj}\`);  // 'hello' (toString used for string context)
console.log(String(obj)); // 'hello'
console.log(Number(obj)); // 42
\`\`\`

---

# BEST PRACTICES

## Avoid Implicit Coercion When Possible
\`\`\`js
// BAD: Relies on implicit coercion
if (value) { }
const display = value || 'default';

// GOOD: Explicit checks
if (value !== null && value !== undefined) { }
if (value != null) { } // OK for null/undefined check
const display = value ?? 'default';
\`\`\`

## Always Use === (Mostly)
\`\`\`js
// Always use ===
if (a === b) { }

// Only exception: checking for null/undefined together
if (value == null) { } // checks both null and undefined
// Equivalent to:
if (value === null || value === undefined) { }
\`\`\`

## Be Explicit with Conversions
\`\`\`js
// BAD: Implicit
const num = +string;
const str = number + '';
const bool = !!value;

// GOOD: Explicit
const num = Number(string);
const num = parseInt(string, 10); // Always specify radix!
const str = String(number);
const bool = Boolean(value);
\`\`\``,
  codeExample: `// Type Coercion Quick Reference
// ==============================

// FALSY VALUES (memorize these 7!)
// false, 0, -0, 0n, '', null, undefined, NaN

// TRUTHY GOTCHAS
Boolean([]);        // true - empty array!
Boolean({});        // true - empty object!
Boolean('0');       // true - string with zero!
Boolean('false');   // true - string "false"!

// TYPE CONVERSION
String(123);        // "123"
Number('123');      // 123
Boolean(1);         // true
parseInt('42px');   // 42
parseFloat('3.14'); // 3.14

// == vs ===
5 == '5';           // true (coercion)
5 === '5';          // false (strict)
null == undefined;  // true
null === undefined; // false

// NaN checks
NaN === NaN;        // false (always!)
Number.isNaN(NaN);  // true (correct way)
isNaN('hello');     // true (wrong - coerces first)

// || vs ??
0 || 'default';     // 'default' (0 is falsy)
0 ?? 'default';     // 0 (only null/undefined)

// Classic traps
[] + [];            // ""
[] + {};            // "[object Object]"
{} + [];            // 0 or "[object Object]"
0.1 + 0.2 === 0.3;  // false!

// The "banana" trick
'b' + 'a' + + 'a' + 'a'; // "baNaNa"

// Type checking
typeof null;        // "object" (bug!)
typeof NaN;         // "number"
typeof [];          // "object"
Array.isArray([]);  // true`,
  language: 'javascript'
},

    // ==========================================
    // SECTION 7: ES6+ FEATURES
    // ==========================================
    {
  id: 'interview-es6',
  title: 'ES6+ Features Overview',
  content: `# ES6+ Features - Complete Interview Guide
## What is ES6?
ES6 (ECMAScript 2015) is a major update to JavaScript that introduced many new features we use daily. Think of it as JavaScript getting a massive upgrade with new tools that make coding easier and cleaner.
## Why Do Interviewers Ask About ES6?
- Shows you write modern JavaScript
- Many features solve common problems elegantly
- Understanding ES6+ is essential for React, Node.js, and modern frameworks
## Timeline of Features
- **ES6 (2015)**: let/const, arrow functions, classes, promises, destructuring, spread/rest, modules, symbols, Map/Set
- **ES7 (2016)**: Array.includes(), exponentiation operator (**)
- **ES8 (2017)**: async/await, Object.entries/values, string padding
- **ES9 (2018)**: Rest/spread for objects, Promise.finally()
- **ES10 (2019)**: Array.flat(), Object.fromEntries(), optional catch binding
- **ES11 (2020)**: Optional chaining (?.), nullish coalescing (??), BigInt, Promise.allSettled()
- **ES12 (2021)**: String.replaceAll(), Promise.any(), logical assignment operators
---
# LET, CONST, AND VAR
## The Problem with var
\`\`\`js
// var has function scope, not block scope
function varProblem() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 - x is accessible outside the block!
}
// var gets hoisted
console.log(hoisted); // undefined (not error!)
var hoisted = 'I am hoisted';
// var allows redeclaration
var name = 'John';
var name = 'Jane'; // No error - can cause bugs!
\`\`\`
## let and const Fix These Issues
\`\`\`js
// Block scoped
if (true) {
  let blockScoped = 'only here';
  const alsoBlockScoped = 'only here too';
}
// console.log(blockScoped); // ReferenceError!
// No hoisting (actually hoisted but in "temporal dead zone")
// console.log(tdzVariable); // ReferenceError!
let tdzVariable = 'value';
// No redeclaration
let unique = 'first';
// let unique = 'second'; // SyntaxError!
// const must be initialized and can't be reassigned
const PI = 3.14159;
// PI = 3.14; // TypeError!
// const EMPTY; // SyntaxError - must initialize
// BUT const objects/arrays can be mutated
const person = { name: 'John' };
person.name = 'Jane'; // This works!
person.age = 30;      // This works!
// person = {};       // This fails - can't reassign
const numbers = [1, 2, 3];
numbers.push(4);      // This works! [1, 2, 3, 4]
// numbers = [];      // This fails - can't reassign
\`\`\`
## Interview Question: When to Use What?
\`\`\`js
// Use const by default (most variables don't need reassignment)
const API_URL = 'https://api.example.com';
const user = { name: 'John' };
const items = [1, 2, 3];
// Use let only when you need to reassign
let counter = 0;
counter++;
let status = 'pending';
status = 'completed';
// Never use var in modern JavaScript
\`\`\`
---
# ARROW FUNCTIONS
## Basic Syntax
\`\`\`js
// Regular function
function add(a, b) {
  return a + b;
}
// Arrow function - full syntax
const addArrow = (a, b) => {
  return a + b;
};
// Arrow function - implicit return (single expression)
const addShort = (a, b) => a + b;
// Single parameter - no parentheses needed
const double = x => x * 2;
// No parameters - empty parentheses required
const greet = () => 'Hello!';
// Returning object - wrap in parentheses
const makeUser = (name, age) => ({ name, age });
console.log(makeUser('John', 30)); // { name: 'John', age: 30 }
\`\`\`
## The "this" Difference (VERY IMPORTANT!)
\`\`\`js
// Regular function: "this" depends on HOW it's called
const obj1 = {
  name: 'Object 1',
  regularMethod: function() {
    console.log(this.name); // 'Object 1'
    setTimeout(function() {
      console.log(this.name); // undefined! "this" is window/undefined
    }, 100);
  }
};
// Arrow function: "this" is inherited from surrounding scope (lexical)
const obj2 = {
  name: 'Object 2',
  arrowMethod: function() {
    console.log(this.name); // 'Object 2'
    setTimeout(() => {
      console.log(this.name); // 'Object 2'! Arrow inherits "this"
    }, 100);
  }
};
// Old workaround before arrow functions
const obj3 = {
  name: 'Object 3',
  method: function() {
    const self = this; // Save reference
    setTimeout(function() {
      console.log(self.name); // 'Object 3'
    }, 100);
  }
};
\`\`\`
## When NOT to Use Arrow Functions
\`\`\`js
// 1. Object methods that need their own "this"
const person = {
  name: 'John',
  // BAD - arrow doesn't have its own "this"
  greetArrow: () => {
    console.log('Hello, ' + this.name); // undefined!
  },
  // GOOD - regular function has its own "this"
  greetRegular() {
    console.log('Hello, ' + this.name); // 'Hello, John'
  }
};
// 2. Constructor functions
// const Person = (name) => { this.name = name; }; // Can't use "new"
// new Person('John'); // TypeError!
// 3. When you need "arguments" object
function regularWithArgs() {
  console.log(arguments); // Works!
}
const arrowWithArgs = () => {
  // console.log(arguments); // ReferenceError!
};
// Use rest parameters instead
const arrowWithRest = (...args) => {
  console.log(args); // Works!
};
\`\`\`
---
# TEMPLATE LITERALS
## Basic Usage
\`\`\`js
const name = 'John';
const age = 30;
// Old way - string concatenation
const oldMessage = 'Hello, ' + name + '! You are ' + age + ' years old.';
// New way - template literals
const newMessage = \`Hello, \${name}! You are \${age} years old.\`;
// Expressions inside \${}
const price = 19.99;
const quantity = 3;
const total = \`Total: $\${(price * quantity).toFixed(2)}\`; // 'Total: $59.97'
// Function calls inside \${}
const upper = \`Name: \${name.toUpperCase()}\`; // 'Name: JOHN'
// Conditional expressions
const greeting = \`Hello, \${age >= 18 ? 'Adult' : 'Minor'}!\`;
\`\`\`
## Multi-line Strings
\`\`\`js
// Old way - concatenation or escape characters
const oldMulti = 'Line 1\\n' +
                 'Line 2\\n' +
                 'Line 3';
// New way - just press Enter
const newMulti = \`
  Line 1
  Line 2
  Line 3
\`;
// Practical: HTML templates
const html = \`
  <div class="card">
    <h2>\${name}</h2>
    <p>Age: \${age}</p>
  </div>
\`;
\`\`\`
## Tagged Templates (Advanced - But Asked in Interviews!)
\`\`\`js
// Tagged template is a function that processes template literal
function highlight(strings, ...values) {
  // strings: array of string parts
  // values: array of interpolated values
  console.log(strings); // ['Hello, ', '! You are ', ' years old.']
  console.log(values);  // ['John', 30]
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`<b>\${values[i]}</b>\` : '';
    return result + str + value;
  }, '');
}
const highlighted = highlight\`Hello, \${name}! You are \${age} years old.\`;
console.log(highlighted); // 'Hello, <b>John</b>! You are <b>30</b> years old.'
// Practical: SQL query sanitization
function sql(strings, ...values) {
  // Escape values to prevent SQL injection
  const escaped = values.map(v => 
    typeof v === 'string' ? v.replace(/'/g, "''") : v
  );
  return strings.reduce((result, str, i) => 
    result + str + (escaped[i] ?? ''), ''
  );
}
const userInput = "John'; DROP TABLE users; --";
const query = sql\`SELECT * FROM users WHERE name = '\${userInput}'\`;
// Safely escaped!
// Practical: Styled components (React)
// const Button = styled.button\`
//   background: \${props => props.primary ? 'blue' : 'white'};
//   color: \${props => props.primary ? 'white' : 'blue'};
// \`;
\`\`\`
---
# DESTRUCTURING
## Array Destructuring
\`\`\`js
const numbers = [1, 2, 3, 4, 5];
// Basic destructuring
const [a, b, c] = numbers;
console.log(a, b, c); // 1, 2, 3
// Skip elements
const [first, , third] = numbers;
console.log(first, third); // 1, 3
// Rest pattern - collect remaining
const [head, ...tail] = numbers;
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
// Default values
const [x, y, z = 0] = [1, 2];
console.log(x, y, z); // 1, 2, 0
// Swapping variables (classic interview question!)
let m = 1, n = 2;
[m, n] = [n, m];
console.log(m, n); // 2, 1
// Nested arrays
const nested = [1, [2, 3], 4];
const [one, [two, three], four] = nested;
console.log(two, three); // 2, 3
// From function return
function getCoordinates() {
  return [10, 20];
}
const [lat, lng] = getCoordinates();
\`\`\`
## Object Destructuring
\`\`\`js
const person = {
  name: 'John',
  age: 30,
  city: 'New York',
  country: 'USA'
};
// Basic destructuring
const { name, age } = person;
console.log(name, age); // 'John', 30
// Rename variables
const { name: personName, age: personAge } = person;
console.log(personName, personAge); // 'John', 30
// Default values
const { name: n, phone = 'N/A' } = person;
console.log(phone); // 'N/A'
// Rest pattern
const { name: userName, ...otherInfo } = person;
console.log(otherInfo); // { age: 30, city: 'New York', country: 'USA' }
// Nested destructuring
const data = {
  user: {
    profile: {
      firstName: 'John',
      lastName: 'Doe'
    }
  }
};
const { user: { profile: { firstName, lastName } } } = data;
console.log(firstName, lastName); // 'John', 'Doe'
// With default for nested
const { user: { profile: { middleName = 'N/A' } } } = data;
console.log(middleName); // 'N/A'
\`\`\`
## Function Parameter Destructuring
\`\`\`js
// Object parameter destructuring
function greet({ name, age = 18, city = 'Unknown' }) {
  return \`\${name}, \${age}, from \${city}\`;
}
console.log(greet({ name: 'John', age: 30 }));
// 'John, 30, from Unknown'
// With renaming
function processUser({ name: userName, id: oderId }) {
  console.log(userName, oderId);
}
// Array parameter destructuring
function getFirstTwo([first, second]) {
  return first + second;
}
console.log(getFirstTwo([10, 20, 30])); // 30
// Common pattern: Options object
function createServer({
  port = 3000,
  host = 'localhost',
  protocol = 'http'
} = {}) {
  return \`\${protocol}://\${host}:\${port}\`;
}
console.log(createServer()); // 'http://localhost:3000'
console.log(createServer({ port: 8080 })); // 'http://localhost:8080'
// React props destructuring
// function Component({ title, onClick, children }) {
//   return <button onClick={onClick}>{title}{children}</button>;
// }
\`\`\`
## Interview Favorite: Complex Destructuring
\`\`\`js
// API response handling
const apiResponse = {
  status: 200,
  data: {
    users: [
      { id: 1, name: 'John', email: 'john@email.com' },
      { id: 2, name: 'Jane', email: 'jane@email.com' }
    ],
    pagination: {
      page: 1,
      total: 100
    }
  }
};
// Extract what you need
const {
  status,
  data: {
    users: [firstUser, secondUser],
    pagination: { page, total }
  }
} = apiResponse;
console.log(status);    // 200
console.log(firstUser); // { id: 1, name: 'John', email: 'john@email.com' }
console.log(page);      // 1
\`\`\`
---
# SYMBOLS
## What are Symbols?
Symbols are a primitive data type that creates unique identifiers. Think of them as guaranteed unique IDs that can never collide with anything else.
## Basic Symbol Usage
\`\`\`js
// Creating symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');
// Even with same description, symbols are unique
console.log(sym1 === sym2); // false
console.log(sym1 === sym1); // true
// Symbols as object keys
const SECRET_KEY = Symbol('secret');
const user = {
  name: 'John',
  age: 30,
  [SECRET_KEY]: 'hidden password'
};
// Regular iteration doesn't show symbols
console.log(Object.keys(user));    // ['name', 'age']
console.log(Object.values(user));  // ['John', 30]
console.log(JSON.stringify(user)); // '{"name":"John","age":30}'
// But you can access it directly
console.log(user[SECRET_KEY]); // 'hidden password'
// Get all symbol keys
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]
\`\`\`
## Why Use Symbols?
\`\`\`js
// 1. Prevent property name collisions
const INTERNAL_STATE = Symbol('internal');
class MyClass {
  constructor() {
    this[INTERNAL_STATE] = 'private-ish';
  }
}
// 2. Define "hidden" properties
const metadata = Symbol('metadata');
const document = {
  title: 'My Document',
  content: 'Hello World',
  [metadata]: { created: new Date(), author: 'John' }
};
// 3. Create unique constants
const STATUS = {
  PENDING: Symbol('pending'),
  APPROVED: Symbol('approved'),
  REJECTED: Symbol('rejected')
};
// Can never accidentally equal something else
\`\`\`
## Global Symbol Registry
\`\`\`js
// Symbol.for() creates/retrieves from global registry
const globalSym1 = Symbol.for('app.id');
const globalSym2 = Symbol.for('app.id');
console.log(globalSym1 === globalSym2); // true! Same symbol
// Get key from symbol
console.log(Symbol.keyFor(globalSym1)); // 'app.id'
// Regular Symbol() not in registry
const localSym = Symbol('local');
console.log(Symbol.keyFor(localSym)); // undefined
\`\`\`
## Well-Known Symbols (Advanced)
\`\`\`js
// Symbol.iterator - makes object iterable
const customIterable = {
  data: [1, 2, 3],
  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.data.length) {
          return { value: this.data[index++], done: false };
        }
        return { done: true };
      }
    };
  }
};
for (const item of customIterable) {
  console.log(item); // 1, 2, 3
}
// Symbol.toStringTag - customize Object.prototype.toString()
class MyClass {
  get [Symbol.toStringTag]() {
    return 'MyClass';
  }
}
console.log(Object.prototype.toString.call(new MyClass())); 
// '[object MyClass]'
\`\`\`
---
# MAP AND SET
## Map - Key-Value Pairs with Any Key Type
\`\`\`js
// Object limitation: keys are always strings
const objMap = {};
objMap[1] = 'one';
objMap['1'] = 'string one';
console.log(objMap); // { '1': 'string one' } - key converted to string!
// Map can use any type as key
const map = new Map();
// Different key types
map.set('string', 'value1');
map.set(1, 'value2');
map.set(true, 'value3');
map.set({ key: 'obj' }, 'value4');
map.set(function() {}, 'value5');
console.log(map.get('string')); // 'value1'
console.log(map.get(1));        // 'value2'
console.log(map.size);          // 5
// Map methods
console.log(map.has('string')); // true
map.delete('string');
console.log(map.has('string')); // false
// Initialize with array of arrays
const map2 = new Map([
  ['name', 'John'],
  ['age', 30],
  ['city', 'NYC']
]);
// Iteration
for (const [key, value] of map2) {
  console.log(\`\${key}: \${value}\`);
}
// Convert to array
const entries = [...map2];          // [['name','John'], ['age',30], ['city','NYC']]
const keys = [...map2.keys()];      // ['name', 'age', 'city']
const values = [...map2.values()];  // ['John', 30, 'NYC']
// Clear all entries
map2.clear();
\`\`\`
## Map vs Object - When to Use Which?
\`\`\`js
// Use Map when:
// 1. Keys are not strings
// 2. You need to iterate in insertion order
// 3. You need frequent additions/deletions
// 4. You need to know the size easily
// Use Object when:
// 1. Simple string keys
// 2. You need JSON serialization
// 3. You need to work with object methods
// 4. You're using it as a record/struct
// Map preserves insertion order
const orderMap = new Map();
orderMap.set('z', 1);
orderMap.set('a', 2);
orderMap.set('m', 3);
console.log([...orderMap.keys()]); // ['z', 'a', 'm'] - order preserved!
// Object also preserves order (for string keys) in modern JS
// But numeric keys are sorted numerically
const obj = { 3: 'three', 1: 'one', 2: 'two' };
console.log(Object.keys(obj)); // ['1', '2', '3'] - sorted!
\`\`\`
## Set - Unique Values Only
\`\`\`js
// Creating a Set
const set = new Set();
set.add(1);
set.add(2);
set.add(2); // Duplicate - ignored!
set.add(3);
console.log(set); // Set { 1, 2, 3 }
console.log(set.size); // 3
// Initialize with array
const set2 = new Set([1, 2, 2, 3, 3, 3, 4, 4, 4, 4]);
console.log([...set2]); // [1, 2, 3, 4]
// Most common use: Remove duplicates
const duplicates = [1, 2, 2, 3, 3, 3, 'a', 'a', 'b'];
const unique = [...new Set(duplicates)];
console.log(unique); // [1, 2, 3, 'a', 'b']
// Set methods
set.has(2);     // true
set.delete(2);  // removes 2
set.clear();    // removes all
// Iteration
const fruits = new Set(['apple', 'banana', 'orange']);
for (const fruit of fruits) {
  console.log(fruit);
}
// Set operations (not built-in, but easy to implement)
const setA = new Set([1, 2, 3, 4]);
const setB = new Set([3, 4, 5, 6]);
// Union
const union = new Set([...setA, ...setB]);
console.log([...union]); // [1, 2, 3, 4, 5, 6]
// Intersection
const intersection = new Set([...setA].filter(x => setB.has(x)));
console.log([...intersection]); // [3, 4]
// Difference
const difference = new Set([...setA].filter(x => !setB.has(x)));
console.log([...difference]); // [1, 2]
\`\`\`
## WeakMap and WeakSet
\`\`\`js
// WeakMap - keys must be objects, garbage collected when no other references
// Use case: Storing metadata about objects without preventing garbage collection
let user = { name: 'John' };
const weakMap = new WeakMap();
weakMap.set(user, 'some metadata');
console.log(weakMap.get(user)); // 'some metadata'
user = null; // Now the object can be garbage collected
// The weakMap entry is automatically removed
// WeakSet - same concept for unique values
let obj = { data: 'test' };
const weakSet = new WeakSet();
weakSet.add(obj);
console.log(weakSet.has(obj)); // true
obj = null; // Object can be garbage collected
// Practical use: Track visited objects
const visited = new WeakSet();
function processObject(obj) {
  if (visited.has(obj)) {
    return; // Already processed
  }
  visited.add(obj);
  // Process object...
}
\`\`\`
---
# OPTIONAL CHAINING (?.)
## The Problem It Solves
\`\`\`js
const user = {
  name: 'John',
  address: {
    city: 'NYC'
  }
};
// Old way - verbose null checks
const city = user && user.address && user.address.city;
// Or with ternary
const city2 = user ? (user.address ? user.address.city : undefined) : undefined;
// New way - optional chaining
const city3 = user?.address?.city; // 'NYC'
\`\`\`
## Different Usage Patterns
\`\`\`js
const user = {
  name: 'John',
  address: {
    city: 'NYC',
    coordinates: {
      lat: 40.7128,
      lng: -74.0060
    }
  },
  friends: ['Alice', 'Bob'],
  greet() {
    return 'Hello!';
  }
};
// Property access
console.log(user?.name);                    // 'John'
console.log(user?.email);                   // undefined
console.log(user?.address?.city);           // 'NYC'
console.log(user?.address?.country);        // undefined
console.log(user?.phone?.number);           // undefined (no error!)
// Method calls
console.log(user?.greet?.());               // 'Hello!'
console.log(user?.nonExistent?.());         // undefined
// Array access
console.log(user?.friends?.[0]);            // 'Alice'
console.log(user?.friends?.[10]);           // undefined
console.log(user?.enemies?.[0]);            // undefined
// Combining with nullish coalescing
const country = user?.address?.country ?? 'Unknown';
console.log(country); // 'Unknown'
\`\`\`
## Common Interview Patterns
\`\`\`js
// API response handling
const response = {
  data: {
    users: [
      { id: 1, profile: { avatar: 'url1' } },
      { id: 2 }
    ]
  }
};
const firstAvatar = response?.data?.users?.[0]?.profile?.avatar;
console.log(firstAvatar); // 'url1'
const secondAvatar = response?.data?.users?.[1]?.profile?.avatar;
console.log(secondAvatar); // undefined (profile doesn't exist)
// With functions
const callback = null;
callback?.(); // Does nothing, no error
// Delete with optional chaining
delete user?.address?.temp;
// Cannot use with assignment
// user?.name = 'Jane'; // SyntaxError!
\`\`\`
---
# NULLISH COALESCING (??)
## The Problem with ||
\`\`\`js
// || returns first truthy value
// Problem: 0, '', false are valid values but falsy!
const count = 0;
const message = '';
const isActive = false;
// Using || - wrong results!
console.log(count || 10);      // 10 (but we wanted 0!)
console.log(message || 'N/A'); // 'N/A' (but we wanted ''!)
console.log(isActive || true); // true (but we wanted false!)
// Using ?? - correct results!
console.log(count ?? 10);      // 0 (correct!)
console.log(message ?? 'N/A'); // '' (correct!)
console.log(isActive ?? true); // false (correct!)
\`\`\`
## How It Works
\`\`\`js
// ?? only checks for null or undefined
// Returns right side only if left side is null/undefined
console.log(null ?? 'default');      // 'default'
console.log(undefined ?? 'default'); // 'default'
console.log(0 ?? 'default');         // 0
console.log('' ?? 'default');        // ''
console.log(false ?? 'default');     // false
console.log(NaN ?? 'default');       // NaN
// Comparison
const value = 0;
console.log(value || 100); // 100 (treats 0 as falsy)
console.log(value ?? 100); // 0 (only null/undefined trigger default)
\`\`\`
## Combining with Optional Chaining
\`\`\`js
const config = {
  settings: {
    timeout: 0,
    retries: null
  }
};
// Get timeout (0 is valid)
const timeout = config?.settings?.timeout ?? 5000;
console.log(timeout); // 0 (not 5000!)
// Get retries (null should use default)
const retries = config?.settings?.retries ?? 3;
console.log(retries); // 3
// Get missing property
const maxSize = config?.settings?.maxSize ?? 1024;
console.log(maxSize); // 1024
\`\`\`
## Logical Assignment Operators (ES2021)
\`\`\`js
// Nullish assignment (??=)
let a = null;
a ??= 'default';
console.log(a); // 'default'
let b = 'existing';
b ??= 'default';
console.log(b); // 'existing'
// Logical OR assignment (||=)
let c = '';
c ||= 'default';
console.log(c); // 'default' (empty string is falsy)
// Logical AND assignment (&&=)
let d = 'value';
d &&= 'new value';
console.log(d); // 'new value' (only assigns if truthy)
let e = null;
e &&= 'new value';
console.log(e); // null (doesn't assign if falsy)
\`\`\`
---
# BIGINT
## Why Do We Need BigInt?
\`\`\`js
// JavaScript numbers have a safe integer limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
// Beyond this, precision is lost
console.log(9007199254740991 + 1); // 9007199254740992 (correct)
console.log(9007199254740991 + 2); // 9007199254740992 (WRONG!)
console.log(9007199254740991 + 3); // 9007199254740994 (WRONG!)
// BigInt solves this
console.log(9007199254740991n + 1n); // 9007199254740992n (correct)
console.log(9007199254740991n + 2n); // 9007199254740993n (correct!)
console.log(9007199254740991n + 3n); // 9007199254740994n (correct!)
\`\`\`
## Creating BigInt
\`\`\`js
// Using n suffix
const big1 = 9007199254740991n;
const big2 = 123456789012345678901234567890n;
// Using BigInt() constructor
const big3 = BigInt(9007199254740991);
const big4 = BigInt('123456789012345678901234567890');
// Operations
console.log(big1 + 1n);  // 9007199254740992n
console.log(big1 * 2n);  // 18014398509481982n
console.log(big1 / 2n);  // 4503599627370495n (truncates decimal)
console.log(big1 % 3n);  // 1n
console.log(big1 ** 2n); // 81129638414606663681390495662081n
\`\`\`
## BigInt Limitations
\`\`\`js
// Cannot mix BigInt and Number
const big = 10n;
const num = 5;
// console.log(big + num); // TypeError!
// Must convert first
console.log(big + BigInt(num)); // 15n
console.log(Number(big) + num); // 15
// Cannot use Math methods
// Math.max(1n, 2n); // TypeError!
// Comparison works across types
console.log(10n > 5);   // true
console.log(10n === 10); // false (different types)
console.log(10n == 10);  // true (loose equality)
// JSON.stringify doesn't work
// JSON.stringify({ big: 10n }); // TypeError!
// Workaround
const data = { big: 10n };
JSON.stringify(data, (key, value) =>
  typeof value === 'bigint' ? value.toString() : value
);
\`\`\`
---
# PROMISE METHODS (ADVANCED)
## Promise.all vs Promise.allSettled vs Promise.race vs Promise.any
\`\`\`js
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.reject('Error!');
// Promise.all - fails if ANY promise rejects
Promise.all([promise1, promise2])
  .then(results => console.log(results)); // [1, 2]
Promise.all([promise1, promise2, promise3])
  .catch(error => console.log(error)); // 'Error!'
// Promise.allSettled - waits for all, never rejects
Promise.allSettled([promise1, promise2, promise3])
  .then(results => console.log(results));
// [
//   { status: 'fulfilled', value: 1 },
//   { status: 'fulfilled', value: 2 },
//   { status: 'rejected', reason: 'Error!' }
// ]
// Promise.race - returns first settled (fulfilled or rejected)
Promise.race([
  new Promise(r => setTimeout(() => r('slow'), 100)),
  new Promise(r => setTimeout(() => r('fast'), 50))
]).then(result => console.log(result)); // 'fast'
// Promise.any - returns first fulfilled (ignores rejections)
Promise.any([
  Promise.reject('Error 1'),
  Promise.resolve('Success!'),
  Promise.reject('Error 2')
]).then(result => console.log(result)); // 'Success!'
// Promise.any fails only if ALL reject
Promise.any([
  Promise.reject('Error 1'),
  Promise.reject('Error 2')
]).catch(error => console.log(error)); // AggregateError
\`\`\`
---
# QUICK REFERENCE SUMMARY
| Feature | Purpose | Example |
|---------|---------|---------|
| let/const | Block scoped variables | const x = 1; let y = 2; |
| Arrow functions | Shorter syntax, lexical this | const fn = (x) => x * 2 |
| Template literals | String interpolation | \\\`Hello \${name}\\\` |
| Destructuring | Extract values | const {a, b} = obj |
| Spread | Expand elements | [...arr1, ...arr2] |
| Rest | Collect elements | function(...args) |
| Symbol | Unique identifier | Symbol('id') |
| Map | Key-value (any key type) | new Map() |
| Set | Unique values | new Set([1,2,2,3]) |
| Optional chaining | Safe property access | obj?.prop?.nested |
| Nullish coalescing | Default for null/undefined | value ?? 'default' |
| BigInt | Large integers | 9007199254740991n |`,
  codeExample: `// ES6+ Quick Cheat Sheet
// ======================
// let/const (block scoped)
const PI = 3.14;
let count = 0;
// Arrow functions
const add = (a, b) => a + b;
const double = x => x * 2;
// Template literals
const greeting = \`Hello, \${name}!\`;
// Destructuring
const [first, ...rest] = [1, 2, 3, 4];
const { name, age = 18 } = person;
// Spread operator
const merged = [...arr1, ...arr2];
const clone = { ...original };
// Default parameters
function greet(name = 'Guest') {}
// Symbol
const SECRET = Symbol('secret');
obj[SECRET] = 'hidden';
// Map & Set
const map = new Map([['key', 'value']]);
const unique = [...new Set([1, 2, 2, 3])];
// Optional chaining
const city = user?.address?.city;
// Nullish coalescing
const value = input ?? 'default';
// BigInt
const big = 9007199254740991n;
// Promise methods
await Promise.all([p1, p2]);
await Promise.allSettled([p1, p2]);
await Promise.race([p1, p2]);
await Promise.any([p1, p2]);`,
  language: 'javascript'
    },

    {
  id: 'interview-spread-rest',
  title: 'Spread & Rest Operators',
  content: `# Spread & Rest Operators - Complete Interview Guide

## What are These Operators?
Both spread and rest use the same three dots (...) syntax but they do completely opposite things. This is one of the most confusing topics for beginners but very simple once you understand the context.

## Simple Analogy
- **Spread**: Imagine you have a box of chocolates. Spread is like opening the box and spreading all chocolates on the table individually.
- **Rest**: Imagine chocolates are scattered on table. Rest is like collecting all remaining chocolates and putting them back in a box.

## The Golden Rule
- If ... is on the RIGHT side of = or in function CALL → It's SPREAD (expanding)
- If ... is on the LEFT side of = or in function DEFINITION → It's REST (collecting)

---

# REST PARAMETER (...rest)

## What is Rest Parameter?
Rest parameter allows a function to accept any number of arguments and collects them into a single array. The word "rest" literally means "the rest of the arguments".

## Basic Syntax
\`\`\`js
function functionName(param1, param2, ...restParams) {
  // restParams is an array containing all remaining arguments
}
\`\`\`

## Example 1: Sum of Any Number of Arguments
\`\`\`js
// Without rest parameter (old way using arguments object)
function sumOld() {
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}

// With rest parameter (modern and clean)
function sum(...numbers) {
  return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2));           // 3
console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum(10, 20, 30));     // 60
\`\`\`

## Interview Question: Why is Rest Better Than arguments Object?
\`\`\`js
// arguments object problems:
function oldWay() {
  console.log(arguments);           // { '0': 1, '1': 2, '2': 3 }
  console.log(Array.isArray(arguments)); // false (it's array-like, not real array)
  // arguments.map(x => x * 2);     // TypeError! map doesn't exist
  
  // Need to convert first
  const arr = Array.from(arguments);
  return arr.map(x => x * 2);
}

// Rest parameter gives real array directly
function newWay(...nums) {
  console.log(nums);                // [1, 2, 3]
  console.log(Array.isArray(nums)); // true
  return nums.map(x => x * 2);      // Works directly!
}
oldWay(1, 2, 3);
newWay(1, 2, 3);
\`\`\`

## Example 2: Rest Must Be Last Parameter
\`\`\`js
// Correct - rest at the end
function greet(greeting, ...names) {
  return names.map(name => greeting + ' ' + name);
}
console.log(greet('Hello', 'John', 'Jane', 'Bob'));
// ['Hello John', 'Hello Jane', 'Hello Bob']

// Correct - first few params separate, rest collects remaining
function calculate(operation, ...numbers) {
  if (operation === 'add') {
    return numbers.reduce((a, b) => a + b, 0);
  } else if (operation === 'multiply') {
    return numbers.reduce((a, b) => a * b, 1);
  }
}
console.log(calculate('add', 1, 2, 3, 4));      // 10
console.log(calculate('multiply', 1, 2, 3, 4)); // 24

// WRONG - SyntaxError!
// function wrong(...rest, last) { } // Rest must be last!
// function wrong(...a, ...b) { }    // Only one rest allowed!
\`\`\`

## Example 3: Extracting First Few and Rest
\`\`\`js
function introduceTeam(leader, coLeader, ...members) {
  console.log('Leader:', leader);
  console.log('Co-Leader:', coLeader);
  console.log('Team Members:', members);
}
introduceTeam('Alice', 'Bob', 'Charlie', 'David', 'Eve');
// Leader: Alice
// Co-Leader: Bob
// Team Members: ['Charlie', 'David', 'Eve']
\`\`\`

---

# SPREAD OPERATOR (...spread)

## What is Spread Operator?
Spread operator expands an iterable (array, string, object) into individual elements. It's like unpacking a suitcase and laying out all items separately.

## Spread in Function Calls
\`\`\`js
// Problem: Math.max expects individual arguments, not array
const scores = [85, 92, 78, 96, 88];
// console.log(Math.max(scores)); // NaN - doesn't work!

// Solution: Spread the array
console.log(Math.max(...scores)); // 96
console.log(Math.min(...scores)); // 78

// What spread does internally:
// Math.max(...scores) becomes Math.max(85, 92, 78, 96, 88)

// Mix spread with other values
console.log(Math.max(0, ...scores, 100)); // 100
console.log(Math.min(-10, ...scores));    // -10
\`\`\`

## Spread in Arrays

### Copying Arrays
\`\`\`js
const original = [1, 2, 3];

// Spread creates a new array (shallow copy)
const copy = [...original];
copy.push(4);
console.log(original); // [1, 2, 3] - unchanged!
console.log(copy);     // [1, 2, 3, 4]

// Without spread (reference copy - both point to same array)
const wrongCopy = original;
wrongCopy.push(4);
console.log(original); // [1, 2, 3, 4] - original changed!
\`\`\`

### Merging Arrays
\`\`\`js
const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Python', 'Java'];
const database = ['MongoDB', 'PostgreSQL'];

// Merge all arrays
const fullStack = [...frontend, ...backend, ...database];
console.log(fullStack);
// ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Python', 'Java', 'MongoDB', 'PostgreSQL']

// Insert in between
const skills = [...frontend, 'React', 'Vue', ...backend];
console.log(skills);
// ['HTML', 'CSS', 'JavaScript', 'React', 'Vue', 'Node.js', 'Python', 'Java']

// Add at beginning and end
const complete = ['Fundamentals', ...frontend, 'Advanced'];
console.log(complete);
// ['Fundamentals', 'HTML', 'CSS', 'JavaScript', 'Advanced']
\`\`\`

### Converting Iterables to Arrays
\`\`\`js
// String to array of characters
const word = 'Hello';
const letters = [...word];
console.log(letters); // ['H', 'e', 'l', 'l', 'o']

// Set to array (removes duplicates)
const numbersWithDupes = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4];
const unique = [...new Set(numbersWithDupes)];
console.log(unique); // [1, 2, 3, 4]

// Map to array
const map = new Map([['a', 1], ['b', 2]]);
const mapArray = [...map];
console.log(mapArray); // [['a', 1], ['b', 2]]

// NodeList to array (DOM)
// const divs = [...document.querySelectorAll('div')];
\`\`\`

## Spread in Objects

### Copying Objects
\`\`\`js
const user = { name: 'John', age: 30 };

// Spread creates new object (shallow copy)
const userCopy = { ...user };
userCopy.age = 31;
console.log(user.age);     // 30 - unchanged!
console.log(userCopy.age); // 31
\`\`\`

### Merging Objects
\`\`\`js
const personalInfo = { name: 'John', age: 30 };
const contactInfo = { email: 'john@email.com', phone: '123-456' };
const jobInfo = { company: 'Google', role: 'Developer' };

// Merge all objects
const profile = { ...personalInfo, ...contactInfo, ...jobInfo };
console.log(profile);
// { name: 'John', age: 30, email: 'john@email.com', phone: '123-456', company: 'Google', role: 'Developer' }
\`\`\`

### Property Override (Last One Wins)
\`\`\`js
const defaults = { theme: 'light', fontSize: 14, language: 'en' };
const userPrefs = { theme: 'dark', fontSize: 18 };

// User preferences override defaults
const settings = { ...defaults, ...userPrefs };
console.log(settings);
// { theme: 'dark', fontSize: 18, language: 'en' }

// Order matters!
const wrongOrder = { ...userPrefs, ...defaults };
console.log(wrongOrder);
// { theme: 'light', fontSize: 14, language: 'en' } - defaults override user prefs!
\`\`\`

### Adding or Updating Properties
\`\`\`js
const product = { id: 1, name: 'Phone', price: 999 };

// Add new property
const withStock = { ...product, inStock: true };
console.log(withStock);
// { id: 1, name: 'Phone', price: 999, inStock: true }

// Update existing property
const discounted = { ...product, price: 799 };
console.log(discounted);
// { id: 1, name: 'Phone', price: 799 }

// Add and update together
const updated = { ...product, price: 799, inStock: true, category: 'Electronics' };
console.log(updated);
// { id: 1, name: 'Phone', price: 799, inStock: true, category: 'Electronics' }
\`\`\`

---

# REST IN DESTRUCTURING

## Array Destructuring with Rest
\`\`\`js
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Get first two, rest in array
const [first, second, ...remaining] = numbers;
console.log(first);     // 1
console.log(second);    // 2
console.log(remaining); // [3, 4, 5, 6, 7, 8, 9, 10]

// Skip some values
const [a, , , d, ...rest] = numbers;
console.log(a);    // 1
console.log(d);    // 4
console.log(rest); // [5, 6, 7, 8, 9, 10]

// Practical: Head and Tail
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]
\`\`\`

## Object Destructuring with Rest
\`\`\`js
const employee = {
  id: 101,
  name: 'John',
  age: 30,
  department: 'Engineering',
  salary: 75000,
  password: 'secret123'
};

// Extract specific properties, collect rest
const { id, name, ...otherDetails } = employee;
console.log(id);           // 101
console.log(name);         // 'John'
console.log(otherDetails); // { age: 30, department: 'Engineering', salary: 75000, password: 'secret123' }

// Practical: Remove sensitive data
const { password, salary, ...publicInfo } = employee;
console.log(publicInfo);
// { id: 101, name: 'John', age: 30, department: 'Engineering' }
\`\`\`

---

# INTERVIEW FAVORITE QUESTIONS

## Q1: Remove Property Immutably (Without Mutating Original)
\`\`\`js
// Common requirement in React/Redux
const user = {
  id: 1,
  name: 'John',
  email: 'john@email.com',
  password: 'secret123'
};

// Method 1: Using rest in destructuring
const removeProperty = (obj, propToRemove) => {
  const { [propToRemove]: removed, ...rest } = obj;
  return rest;
};

const safeUser = removeProperty(user, 'password');
console.log(safeUser); // { id: 1, name: 'John', email: 'john@email.com' }
console.log(user);     // Original unchanged

// Method 2: Remove multiple properties
const { password, email, ...minimal } = user;
console.log(minimal); // { id: 1, name: 'John' }
\`\`\`

## Q2: Conditional Object Properties
\`\`\`js
// Add property only if condition is true
const isAdmin = true;
const hasSubscription = false;

const user = {
  name: 'John',
  age: 30,
  ...(isAdmin && { role: 'admin', permissions: ['read', 'write', 'delete'] }),
  ...(hasSubscription && { plan: 'premium', expiryDate: '2025-12-31' })
};

console.log(user);
// { name: 'John', age: 30, role: 'admin', permissions: ['read', 'write', 'delete'] }
// Note: hasSubscription properties not added because condition is false

// Why this works:
// true && { role: 'admin' } = { role: 'admin' } -> spread adds the properties
// false && { plan: 'premium' } = false -> spread of false adds nothing
\`\`\`

## Q3: Function with Options Object
\`\`\`js
// Common pattern in libraries and APIs
function createUser({ name, email, ...options }) {
  const user = {
    name,
    email,
    createdAt: new Date(),
    ...options
  };
  return user;
}

const newUser = createUser({
  name: 'John',
  email: 'john@email.com',
  age: 30,
  role: 'developer',
  department: 'Engineering'
});

console.log(newUser);
// { name: 'John', email: 'john@email.com', createdAt: Date, age: 30, role: 'developer', department: 'Engineering' }
\`\`\`

## Q4: Merge Arrays Without Duplicates
\`\`\`js
const array1 = [1, 2, 3, 4, 5];
const array2 = [4, 5, 6, 7, 8];

// Combine and remove duplicates
const merged = [...new Set([...array1, ...array2])];
console.log(merged); // [1, 2, 3, 4, 5, 6, 7, 8]

// Step by step:
// 1. [...array1, ...array2] = [1, 2, 3, 4, 5, 4, 5, 6, 7, 8]
// 2. new Set([...]) = Set { 1, 2, 3, 4, 5, 6, 7, 8 }
// 3. [...Set] = [1, 2, 3, 4, 5, 6, 7, 8]
\`\`\`

## Q5: Clone and Modify in One Line
\`\`\`js
const state = {
  user: 'John',
  isLoggedIn: true,
  cart: ['item1', 'item2']
};

// Add item to cart immutably (common in React)
const newState = {
  ...state,
  cart: [...state.cart, 'item3']
};

console.log(state.cart);    // ['item1', 'item2'] - unchanged
console.log(newState.cart); // ['item1', 'item2', 'item3']
\`\`\`

## Q6: Convert Arguments to Array and Transform
\`\`\`js
function doubleAll(...numbers) {
  return numbers.map(n => n * 2);
}
console.log(doubleAll(1, 2, 3, 4, 5)); // [2, 4, 6, 8, 10]

// Practical: Logger function
function log(level, ...messages) {
  const timestamp = new Date().toISOString();
  console.log(\`[\${timestamp}] [\${level.toUpperCase()}]\`, ...messages);
}
log('info', 'User logged in', 'userId:', 123);
// [2024-01-15T10:30:00.000Z] [INFO] User logged in userId: 123
\`\`\`

---

# SHALLOW VS DEEP COPY (CRITICAL FOR INTERVIEWS!)

## Understanding Shallow Copy
\`\`\`js
// Spread creates SHALLOW copy
// Shallow = Only first level is copied, nested objects are still referenced

const original = {
  name: 'John',
  age: 30,
  address: {
    city: 'New York',
    country: 'USA'
  },
  hobbies: ['reading', 'gaming']
};

const shallowCopy = { ...original };

// Modifying primitive (first level) - SAFE
shallowCopy.name = 'Jane';
shallowCopy.age = 25;
console.log(original.name); // 'John' - unchanged
console.log(original.age);  // 30 - unchanged

// Modifying nested object - DANGER!
shallowCopy.address.city = 'Los Angeles';
console.log(original.address.city); // 'Los Angeles' - CHANGED!

// Modifying nested array - DANGER!
shallowCopy.hobbies.push('cooking');
console.log(original.hobbies); // ['reading', 'gaming', 'cooking'] - CHANGED!
\`\`\`

## Why Does This Happen?
\`\`\`js
// Visual explanation:
// original.address -----> { city: 'New York', country: 'USA' }
//                              ^
// shallowCopy.address -------- | (points to same object!)

// After spread:
// - Primitives (name, age) are copied by value
// - Objects/Arrays (address, hobbies) are copied by reference
\`\`\`

## Deep Copy Solutions

### Solution 1: JSON Method
\`\`\`js
const original = {
  name: 'John',
  address: { city: 'NYC' }
};

const deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = 'LA';
console.log(original.address.city); // 'NYC' - unchanged!

// LIMITATIONS of JSON method:
const problematic = {
  date: new Date(),           // Becomes string
  func: function() {},        // Lost completely
  undef: undefined,           // Lost completely
  symbol: Symbol('test'),     // Lost completely
  infinity: Infinity,         // Becomes null
  nan: NaN,                   // Becomes null
  regex: /test/g              // Becomes empty object {}
};
const jsonCopy = JSON.parse(JSON.stringify(problematic));
console.log(jsonCopy);
// { date: '2024-01-15T...', infinity: null, nan: null, regex: {} }
// func, undef, symbol are missing!
\`\`\`

### Solution 2: structuredClone (Modern - Recommended)
\`\`\`js
const original = {
  name: 'John',
  address: { city: 'NYC' },
  date: new Date(),
  numbers: [1, 2, 3],
  nested: { deep: { deeper: { value: 42 } } }
};

const deepCopy = structuredClone(original);
deepCopy.address.city = 'LA';
deepCopy.nested.deep.deeper.value = 100;

console.log(original.address.city);           // 'NYC' - unchanged!
console.log(original.nested.deep.deeper.value); // 42 - unchanged!

// LIMITATIONS of structuredClone:
// - Cannot clone functions
// - Cannot clone DOM nodes
// - Cannot clone certain objects (Error, WeakMap, WeakSet)
\`\`\`

### Solution 3: Custom Recursive Function
\`\`\`js
function deepClone(obj) {
  // Handle null and primitives
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }
  // Handle Date
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }
  // Handle Array
  if (Array.isArray(obj)) {
    return obj.map(item => deepClone(item));
  }
  // Handle Object
  const cloned = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      cloned[key] = deepClone(obj[key]);
    }
  }
  return cloned;
}

const original = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
  arr: [1, [2, 3], { f: 4 }]
};
const deep = deepClone(original);
deep.b.d.e = 100;
console.log(original.b.d.e); // 3 - unchanged!
\`\`\`

### Solution 4: Lodash Library
\`\`\`js
// Using lodash (most reliable for complex cases)
// import _ from 'lodash';
// const deepCopy = _.cloneDeep(original);
\`\`\`

---

# COMMON INTERVIEW MISTAKES AND TRAPS

## Mistake 1: Thinking Spread Does Deep Copy
\`\`\`js
const nested = { arr: [1, 2, 3] };
const copy = { ...nested };
copy.arr.push(4);
console.log(nested.arr); // [1, 2, 3, 4] - Original modified!

// Fix: Deep clone nested parts too
const correctCopy = { ...nested, arr: [...nested.arr] };
correctCopy.arr.push(4);
console.log(nested.arr); // [1, 2, 3] - Original safe!
\`\`\`

## Mistake 2: Spreading Non-Iterables
\`\`\`js
// These will throw errors:
// const spreadNumber = [...123];      // TypeError
// const spreadNull = [...null];       // TypeError
// const spreadUndefined = [...undefined]; // TypeError

// These work:
const spreadString = [..."hello"];     // ['h', 'e', 'l', 'l', 'o']
const spreadArray = [...[1, 2, 3]];    // [1, 2, 3]
const spreadSet = [...new Set([1])];  // [1]
\`\`\`

## Mistake 3: Rest Not at the End
\`\`\`js
// WRONG - SyntaxError
// function wrong(...rest, last) { }
// const [first, ...middle, last] = [1, 2, 3, 4];

// CORRECT
function correct(first, ...rest) { }
const [head, ...tail] = [1, 2, 3, 4];
\`\`\`

## Mistake 4: Spreading Object into Array
\`\`\`js
const obj = { a: 1, b: 2 };
// const arr = [...obj]; // TypeError! Objects aren't iterable

// Correct ways:
const keys = Object.keys(obj);     // ['a', 'b']
const values = Object.values(obj); // [1, 2]
const entries = Object.entries(obj); // [['a', 1], ['b', 2]]
\`\`\`

---

# QUICK REFERENCE TABLE

| Feature | Spread | Rest |
|---------|--------|------|
| Syntax | ...array | ...params |
| Purpose | Expand elements | Collect elements |
| Location | Right side / Function call | Left side / Function definition |
| Result | Individual elements | Array |
| Example | Math.max(...arr) | function(...args) |

---

# PRACTICAL REAL-WORLD EXAMPLES

## React State Update
\`\`\`js
// Adding item to array in state
const [items, setItems] = useState(['item1', 'item2']);
setItems([...items, 'newItem']);

// Updating object in state
const [user, setUser] = useState({ name: 'John', age: 30 });
setUser({ ...user, age: 31 });

// Removing item from array
const removeItem = (index) => {
  setItems(items.filter((_, i) => i !== index));
};
\`\`\`

## API Response Handling
\`\`\`js
const apiResponse = {
  data: { id: 1, name: 'Product' },
  meta: { timestamp: '2024-01-15' },
  status: 200
};

const { data, ...metadata } = apiResponse;
console.log(data);     // { id: 1, name: 'Product' }
console.log(metadata); // { meta: {...}, status: 200 }
\`\`\`

## Config Merging
\`\`\`js
const defaultConfig = {
  timeout: 5000,
  retries: 3,
  baseURL: 'https://api.example.com',
  headers: { 'Content-Type': 'application/json' }
};

function createClient(userConfig = {}) {
  return {
    ...defaultConfig,
    ...userConfig,
    headers: {
      ...defaultConfig.headers,
      ...userConfig.headers
    }
  };
}

const client = createClient({
  timeout: 10000,
  headers: { 'Authorization': 'Bearer token' }
});
console.log(client);
// { timeout: 10000, retries: 3, baseURL: '...', headers: { 'Content-Type': '...', 'Authorization': '...' } }
\`\`\``,
  codeExample: `// Quick Cheat Sheet for Interview
// ================================

// REST - Collects arguments into array
function sum(...nums) { return nums.reduce((a,b) => a+b, 0); }

// SPREAD - Expands array into arguments
Math.max(...[1, 2, 3]); // 3

// SPREAD - Copy array
const copy = [...original];

// SPREAD - Merge arrays
const merged = [...arr1, ...arr2];

// SPREAD - Copy object
const clone = { ...obj };

// SPREAD - Merge objects (last wins)
const merged = { ...defaults, ...userPrefs };

// REST in destructuring
const [first, ...rest] = [1, 2, 3, 4];
const { name, ...others } = person;

// Remove property immutably
const { password, ...safeUser } = user;

// Conditional spread
const obj = { a: 1, ...(condition && { b: 2 }) };

// REMEMBER: Spread = SHALLOW copy only!
const shallow = { ...nested }; // Nested objects still referenced`,
  language: 'javascript'
    },
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

// Helper function to get all topics for a category
export function getTopicsByCategory(category: string): Topic[] {
  switch (category) {
    case 'interview':
      return interviewTopics
    case 'html-css':
      return htmlCssTopics
    case 'react':
      return reactTopics
    case 'javascript':
      return javascriptTopics
    default:
      return []
  }
}

// Helper to find a specific topic
export function findTopic(category: string, topicId: string): Topic | undefined {
  const topics = getTopicsByCategory(category)
  return topics.find(t => t.id === topicId)
}

// Helper to find a specific lesson
export function findLesson(category: string, topicId: string, lessonId: string): Lesson | undefined {
  const topic = findTopic(category, topicId)
  return topic?.lessons.find(l => l.id === lessonId)
}
