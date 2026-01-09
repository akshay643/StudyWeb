import type { Topic } from '../study-content'

export const javascriptTopics: Topic[] = [
  {
    id: 'js-basics',
    title: 'JavaScript Basics',
    description: 'Learn the fundamentals of JavaScript including variables, data types, and operators.',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['Variables', 'Data Types', 'Operators', 'Type Coercion'],
    lessons: [
      {
        id: 'js-variables',
        title: 'Variables in JavaScript',
        content: `# Variables in JavaScript

Variables are containers for storing data values. In JavaScript, we have three ways to declare variables:

## var (Legacy)
The oldest way to declare variables. Has function scope and can be redeclared.

## let (Modern)
Block-scoped variable that can be reassigned but not redeclared in the same scope.

## const (Modern)
Block-scoped variable that cannot be reassigned. Must be initialized when declared.

### Best Practices
- Use \`const\` by default
- Use \`let\` when you need to reassign
- Avoid \`var\` in modern code`,
        codeExample: `// Using var (avoid in modern code)
var oldWay = "I can be redeclared";
var oldWay = "See?";

// Using let (for values that change)
let counter = 0;
counter = 1;
console.log("let counter:", counter);

// Using const (for values that don't change)
const PI = 3.14159;
console.log("const PI:", PI);

const user = { name: "John" };
user.name = "Jane"; // Can modify properties
console.log("const object:", user);`,
        language: 'javascript'
      },
      {
        id: 'js-data-types',
        title: 'Data Types',
        content: `# Data Types in JavaScript

JavaScript has 8 data types divided into two categories:

## Primitive Types (7)
1. **String** - Text data
2. **Number** - Integers and floats
3. **BigInt** - Large integers
4. **Boolean** - true/false
5. **undefined** - Uninitialized variable
6. **null** - Intentional empty value
7. **Symbol** - Unique identifier

## Reference Type (1)
- **Object** - Collections of data`,
        codeExample: `// Primitive Types
const str = "Hello World";
const num = 42;
const bool = true;
let undef;
const empty = null;

// Type checking
console.log("String:", typeof str);
console.log("Number:", typeof num);
console.log("Boolean:", typeof bool);
console.log("Undefined:", typeof undef);
console.log("Null:", typeof empty);

// Reference Types
const obj = { name: "John", age: 30 };
const arr = [1, 2, 3, 4, 5];

console.log("Object:", typeof obj);
console.log("Array:", Array.isArray(arr));`,
        language: 'javascript'
      },
      {
        id: 'js-operators',
        title: 'Operators',
        content: `# Operators in JavaScript

## Arithmetic Operators
Used for mathematical operations: +, -, *, /, %, **

## Comparison Operators
Used to compare values. Always prefer === over ==.

## Logical Operators
Used to combine boolean expressions: &&, ||, !`,
        codeExample: `// Arithmetic Operators
console.log("5 + 3 =", 5 + 3);
console.log("10 - 4 =", 10 - 4);
console.log("4 * 3 =", 4 * 3);
console.log("15 / 3 =", 15 / 3);
console.log("17 % 5 =", 17 % 5);
console.log("2 ** 3 =", 2 ** 3);

// Comparison Operators
console.log("\\n5 == '5':", 5 == '5');
console.log("5 === '5':", 5 === '5');
console.log("10 > 5:", 10 > 5);

// Logical Operators
console.log("\\ntrue && false:", true && false);
console.log("true || false:", true || false);
console.log("!true:", !true);`,
        language: 'javascript'
      },
      {
        id: 'js-type-coercion',
        title: 'Type Coercion',
        content: `# Type Coercion in JavaScript

Type coercion is the automatic conversion of values from one type to another.

## Implicit Coercion
JavaScript automatically converts types when needed.

## Explicit Coercion
Manual conversion using built-in functions.

## Truthy and Falsy Values
Values that evaluate to true or false in boolean context.

### Falsy Values
- false, 0, -0, 0n, "", null, undefined, NaN

### Truthy Values
- Everything else (including [], {}, "0")`,
        codeExample: `// Implicit Coercion
console.log("5" + 3);        // "53" (string)
console.log("5" - 3);        // 2 (number)
console.log("5" * "2");      // 10 (number)
console.log(true + 1);       // 2

// Explicit Coercion
console.log(Number("42"));   // 42
console.log(String(42));     // "42"
console.log(Boolean(1));     // true
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14

// Truthy and Falsy
console.log("\\nFalsy values:");
console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false

console.log("\\nTruthy values:");
console.log(Boolean([]));      // true
console.log(Boolean({}));      // true
console.log(Boolean("0"));     // true`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-control-flow',
    title: 'Control Flow',
    description: 'Master conditional statements, loops, and control structures.',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['If/Else', 'Switch', 'For Loops', 'While Loops', 'Loop Control'],
    lessons: [
      {
        id: 'js-conditionals',
        title: 'Conditional Statements',
        content: `# Conditional Statements

Control the flow of your program based on conditions.

## if...else
Execute code blocks based on conditions.

## Ternary Operator
Shorthand for simple if...else statements.

## Nullish Coalescing (??)
Returns right operand when left is null/undefined.

## Optional Chaining (?.)
Safely access nested properties.`,
        codeExample: `// if...else
const age = 18;

if (age < 13) {
  console.log("Child");
} else if (age < 20) {
  console.log("Teenager");
} else {
  console.log("Adult");
}

// Ternary Operator
const status = age >= 18 ? "Adult" : "Minor";
console.log("Status:", status);

// Nullish Coalescing
const username = null;
const displayName = username ?? "Guest";
console.log("Display name:", displayName);

// Optional Chaining
const user = { profile: { name: "John" } };
console.log(user?.profile?.name);  // "John"
console.log(user?.settings?.theme); // undefined (no error)

// Short-circuit Evaluation
const isLoggedIn = true;
isLoggedIn && console.log("Welcome back!");

const defaultValue = "" || "fallback";
console.log("Default:", defaultValue);`,
        language: 'javascript'
      },
      {
        id: 'js-switch',
        title: 'Switch Statement',
        content: `# Switch Statement

Execute different code blocks based on different cases.

## Key Points
- Uses strict equality (===)
- Break prevents fall-through
- Default handles no match
- Can group cases together`,
        codeExample: `// Basic Switch
const day = new Date().getDay();
let dayName;

switch (day) {
  case 0:
    dayName = "Sunday";
    break;
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  default:
    dayName = "Unknown";
}

console.log("Today is:", dayName);

// Grouped Cases
const grade = "B";
switch (grade) {
  case "A":
  case "B":
    console.log("Great job!");
    break;
  case "C":
    console.log("Good effort!");
    break;
  case "D":
  case "F":
    console.log("Needs improvement");
    break;
  default:
    console.log("Invalid grade");
}`,
        language: 'javascript'
      },
      {
        id: 'js-for-loops',
        title: 'For Loops',
        content: `# For Loops

Repeat code a specific number of times.

## Types of For Loops
- **for** - Classic loop with counter
- **for...of** - Iterate over iterable values
- **for...in** - Iterate over object keys
- **forEach** - Array method for iteration`,
        codeExample: `// Classic for loop
console.log("Classic for loop:");
for (let i = 0; i < 5; i++) {
  console.log("Iteration:", i);
}

// for...of (arrays, strings, etc.)
const fruits = ["apple", "banana", "cherry"];
console.log("\\nfor...of loop:");
for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in (object properties)
const person = { name: "John", age: 30, city: "NYC" };
console.log("\\nfor...in loop:");
for (const key in person) {
  console.log(\`\${key}: \${person[key]}\`);
}

// forEach method
console.log("\\nforEach method:");
fruits.forEach((fruit, index) => {
  console.log(\`\${index}: \${fruit}\`);
});

// Iterating with entries
console.log("\\nWith entries:");
for (const [index, fruit] of fruits.entries()) {
  console.log(\`\${index}: \${fruit}\`);
}`,
        language: 'javascript'
      },
      {
        id: 'js-while-loops',
        title: 'While Loops',
        content: `# While Loops

Repeat code while a condition is true.

## while
Checks condition before each iteration.

## do...while
Executes at least once, then checks condition.

## Use Cases
- Unknown number of iterations
- Reading data until complete
- Game loops`,
        codeExample: `// while loop
console.log("while loop:");
let count = 0;
while (count < 5) {
  console.log("Count:", count);
  count++;
}

// do...while loop
console.log("\\ndo...while loop:");
let num = 0;
do {
  console.log("Number:", num);
  num++;
} while (num < 3);

// Difference: do...while runs at least once
console.log("\\nDifference demo:");
let x = 10;
do {
  console.log("This runs once even though x > 5");
} while (x < 5);

// Practical example: Random number game
console.log("\\nNumber guessing simulation:");
let target = 7;
let guess = 0;
let attempts = 0;

while (guess !== target) {
  guess = Math.floor(Math.random() * 10) + 1;
  attempts++;
  console.log(\`Attempt \${attempts}: Guessed \${guess}\`);
  if (attempts > 10) break; // Safety limit
}
console.log(\`Found \${target} in \${attempts} attempts!\`);`,
        language: 'javascript'
      },
      {
        id: 'js-loop-control',
        title: 'Loop Control',
        content: `# Loop Control Statements

Control the flow within loops.

## break
Exit the loop immediately.

## continue
Skip current iteration, continue to next.

## Labels
Name loops for nested loop control.`,
        codeExample: `// break - Exit loop early
console.log("break example:");
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}

// continue - Skip iteration
console.log("\\ncontinue example (skip evens):");
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue;
  console.log(i);
}

// Labeled statements for nested loops
console.log("\\nLabeled break:");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) {
      console.log("Breaking outer loop");
      break outerLoop;
    }
    console.log(\`i=\${i}, j=\${j}\`);
  }
}

// Finding element in 2D array
console.log("\\nSearch in 2D array:");
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

const target = 5;
let found = false;

search: for (let row = 0; row < matrix.length; row++) {
  for (let col = 0; col < matrix[row].length; col++) {
    if (matrix[row][col] === target) {
      console.log(\`Found \${target} at [\${row}][\${col}]\`);
      found = true;
      break search;
    }
  }
}`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-strings',
    title: 'Strings & String Methods',
    description: 'Master string manipulation and template literals.',
    difficulty: 'beginner',
    duration: '2 hours',
    topics: ['String Creation', 'String Methods', 'Template Literals', 'Regular Expressions Basics'],
    lessons: [
      {
        id: 'js-string-basics',
        title: 'String Basics',
        content: `# Strings in JavaScript

Strings are sequences of characters used to represent text.

## Creating Strings
- Single quotes: 'Hello'
- Double quotes: "Hello"
- Backticks: \`Hello\` (template literals)

## String Properties
- Strings are immutable
- Have a length property
- Can be accessed by index`,
        codeExample: `// Creating strings
const single = 'Hello';
const double = "World";
const backtick = \`Hello World\`;

// String length
console.log("Length:", single.length);

// Accessing characters
const str = "JavaScript";
console.log("First char:", str[0]);
console.log("Last char:", str[str.length - 1]);
console.log("charAt(4):", str.charAt(4));

// Strings are immutable
let greeting = "Hello";
greeting[0] = "J"; // This doesn't work
console.log(greeting); // Still "Hello"

// String comparison
console.log("\\nString comparison:");
console.log("'a' < 'b':", 'a' < 'b');
console.log("'A' < 'a':", 'A' < 'a');
console.log("'10' < '9':", '10' < '9'); // String comparison!

// Unicode
console.log("\\nUnicode:");
console.log("Char code of 'A':", "A".charCodeAt(0));
console.log("From char code 65:", String.fromCharCode(65));`,
        language: 'javascript'
      },
      {
        id: 'js-string-methods',
        title: 'String Methods',
        content: `# Essential String Methods

## Search Methods
- indexOf, lastIndexOf, includes, startsWith, endsWith

## Extraction Methods
- slice, substring, substr (deprecated)

## Transformation Methods
- toUpperCase, toLowerCase, trim, replace, split`,
        codeExample: `const text = "  Hello, JavaScript World!  ";

// Search methods
console.log("includes('Java'):", text.includes("Java"));
console.log("startsWith('  Hello'):", text.startsWith("  Hello"));
console.log("endsWith('!  '):", text.endsWith("!  "));
console.log("indexOf('o'):", text.indexOf("o"));
console.log("lastIndexOf('o'):", text.lastIndexOf("o"));

// Extraction methods
console.log("\\nslice(2, 7):", text.slice(2, 7));
console.log("slice(-8, -2):", text.slice(-8, -2));
console.log("substring(2, 7):", text.substring(2, 7));

// Transformation methods
console.log("\\ntoUpperCase:", text.toUpperCase());
console.log("toLowerCase:", text.toLowerCase());
console.log("trim:", text.trim());
console.log("trimStart:", text.trimStart());
console.log("trimEnd:", text.trimEnd());

// Replace
console.log("\\nreplace:", text.replace("World", "Universe"));
console.log("replaceAll:", "a-b-c".replaceAll("-", "_"));

// Split and Join
const words = text.trim().split(" ");
console.log("\\nsplit:", words);
console.log("join:", words.join("-"));

// Padding
console.log("\\npadStart:", "5".padStart(3, "0"));
console.log("padEnd:", "5".padEnd(3, "0"));

// Repeat
console.log("repeat:", "Ha".repeat(3));`,
        language: 'javascript'
      },
      {
        id: 'js-template-literals',
        title: 'Template Literals',
        content: `# Template Literals

Modern way to work with strings using backticks.

## Features
- String interpolation with \${expression}
- Multi-line strings
- Tagged templates for advanced processing`,
        codeExample: `// String Interpolation
const name = "Alice";
const age = 25;

console.log(\`Hello, \${name}! You are \${age} years old.\`);
console.log(\`Next year you'll be \${age + 1}.\`);

// Multi-line strings
const poem = \`
  Roses are red,
  Violets are blue,
  JavaScript is awesome,
  And so are you!
\`;
console.log(poem);

// Expression interpolation
const items = ["apple", "banana", "cherry"];
console.log(\`Items: \${items.join(", ")}\`);
console.log(\`Random: \${Math.floor(Math.random() * 100)}\`);

// Nested templates
const data = { user: { name: "Bob", role: "Admin" } };
console.log(\`User: \${data.user.name} (\${data.user.role})\`);

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) => {
    const value = values[i] ? \`**\${values[i]}**\` : '';
    return result + str + value;
  }, '');
}

const product = "laptop";
const price = 999;
console.log(highlight\`The \${product} costs $\${price}.\`);

// HTML template
const createCard = (title, content) => \`
  <div class="card">
    <h2>\${title}</h2>
    <p>\${content}</p>
  </div>
\`;

console.log(createCard("Welcome", "Hello World"));`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-functions',
    title: 'Functions & Scope',
    description: 'Master functions, closures, and understand how scope works in JavaScript.',
    difficulty: 'beginner',
    duration: '3 hours',
    topics: ['Function Declaration', 'Arrow Functions', 'Closures', 'Scope Chain'],
    lessons: [
      {
        id: 'js-function-basics',
        title: 'Function Basics',
        content: `# Functions in JavaScript

Functions are reusable blocks of code.

## Function Declaration
Traditional way, hoisted to the top.

## Function Expression
Stored in a variable, not hoisted.

## Arrow Functions
Concise syntax with lexical this binding.`,
        codeExample: `// Function Declaration
function greet(name) {
  return "Hello, " + name + "!";
}

// Function Expression
const sayGoodbye = function(name) {
  return "Goodbye, " + name + "!";
};

// Arrow Function
const add = (a, b) => a + b;

// Default Parameters
const welcome = (name = "Guest") => \`Welcome, \${name}!\`;

// Rest Parameters
const sum = (...numbers) => numbers.reduce((a, b) => a + b, 0);

console.log(greet("Alice"));
console.log(sayGoodbye("Bob"));
console.log("2 + 3 =", add(2, 3));
console.log(welcome());
console.log("Sum 1-5:", sum(1, 2, 3, 4, 5));`,
        language: 'javascript'
      },
      {
        id: 'js-closures',
        title: 'Closures',
        content: `# Closures in JavaScript

A closure is a function that remembers variables from its outer scope.

## Key Concepts
1. Functions create new scopes
2. Inner functions access outer variables
3. The connection persists after outer function returns`,
        codeExample: `// Basic Closure
function outer() {
  const message = "Hello from outer!";
  return function inner() {
    console.log(message);
  };
}

const myFunc = outer();
myFunc();

// Private Variables with Closure
function createCounter() {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
    getCount: () => count
  };
}

const counter = createCounter();
console.log("Increment:", counter.increment());
console.log("Increment:", counter.increment());
console.log("Decrement:", counter.decrement());
console.log("Count:", counter.getCount());`,
        language: 'javascript'
      },
      {
        id: 'js-scope',
        title: 'Scope & Hoisting',
        content: `# Scope in JavaScript

Scope determines the accessibility of variables.

## Types of Scope
- **Global Scope** - Accessible everywhere
- **Function Scope** - Accessible within function
- **Block Scope** - Accessible within {} (let/const)

## Hoisting
Variable and function declarations are moved to the top.`,
        codeExample: `// Global Scope
const globalVar = "I'm global";

function scopeDemo() {
  // Function Scope
  var functionVar = "I'm function-scoped";
  
  if (true) {
    // Block Scope
    let blockLet = "I'm block-scoped (let)";
    const blockConst = "I'm block-scoped (const)";
    var notBlockScoped = "I'm function-scoped (var)";
    
    console.log(blockLet);
    console.log(blockConst);
  }
  
  // console.log(blockLet); // Error!
  console.log(notBlockScoped); // Works
  console.log(functionVar);
}

scopeDemo();
console.log(globalVar);

// Hoisting
console.log("\\nHoisting Demo:");

// Function declarations are hoisted
hoistedFunc();
function hoistedFunc() {
  console.log("I'm hoisted!");
}

// var is hoisted (but not initialized)
console.log("hoistedVar:", hoistedVar); // undefined
var hoistedVar = "Now I have a value";

// let/const are NOT hoisted (temporal dead zone)
// console.log(notHoisted); // ReferenceError
let notHoisted = "I'm not hoisted";`,
        language: 'javascript'
      },
      {
        id: 'js-higher-order',
        title: 'Higher-Order Functions',
        content: `# Higher-Order Functions

Functions that take or return other functions.

## Common Uses
- Callbacks
- Function factories
- Decorators/Wrappers
- Composition`,
        codeExample: `// Function as argument (callback)
function processArray(arr, callback) {
  const result = [];
  for (const item of arr) {
    result.push(callback(item));
  }
  return result;
}

const numbers = [1, 2, 3, 4, 5];
const doubled = processArray(numbers, n => n * 2);
console.log("Doubled:", doubled);

// Function returning function (factory)
function multiplier(factor) {
  return function(number) {
    return number * factor;
  };
}

const double = multiplier(2);
const triple = multiplier(3);
console.log("double(5):", double(5));
console.log("triple(5):", triple(5));

// Function wrapper (decorator)
function withLogging(fn) {
  return function(...args) {
    console.log(\`Calling with args: \${args}\`);
    const result = fn(...args);
    console.log(\`Result: \${result}\`);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(3, 4);

// Function composition
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const addOne = x => x + 1;
const square = x => x * x;
const composed = compose(square, addOne);
console.log("\\ncomposed(4):", composed(4)); // (4+1)² = 25`,
        language: 'javascript'
      },
      {
        id: 'js-iife',
        title: 'IIFE & Modules Pattern',
        content: `# IIFE - Immediately Invoked Function Expression

A function that runs as soon as it's defined.

## Use Cases
- Avoid polluting global scope
- Create private variables
- Module pattern (pre-ES6)`,
        codeExample: `// Basic IIFE
(function() {
  console.log("I run immediately!");
})();

// IIFE with parameters
(function(name) {
  console.log(\`Hello, \${name}!\`);
})("World");

// Arrow function IIFE
(() => {
  console.log("Arrow IIFE!");
})();

// Module Pattern
const Calculator = (function() {
  // Private variables
  let result = 0;
  
  // Private function
  function log(operation) {
    console.log(\`\${operation}: \${result}\`);
  }
  
  // Public interface
  return {
    add(n) {
      result += n;
      log("Add");
      return this;
    },
    subtract(n) {
      result -= n;
      log("Subtract");
      return this;
    },
    multiply(n) {
      result *= n;
      log("Multiply");
      return this;
    },
    getResult() {
      return result;
    },
    reset() {
      result = 0;
      log("Reset");
      return this;
    }
  };
})();

Calculator.add(10).multiply(2).subtract(5);
console.log("Final result:", Calculator.getResult());

// Revealing Module Pattern
const CounterModule = (function() {
  let count = 0;
  
  function increment() { count++; }
  function decrement() { count--; }
  function getCount() { return count; }
  
  return { increment, decrement, getCount };
})();

CounterModule.increment();
CounterModule.increment();
console.log("Counter:", CounterModule.getCount());`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-arrays',
    title: 'Arrays & Objects',
    description: 'Deep dive into arrays, objects, and their built-in methods.',
    difficulty: 'intermediate',
    duration: '4 hours',
    topics: ['Array Methods', 'Object Methods', 'Destructuring', 'Spread Operator'],
    lessons: [
      {
        id: 'js-array-methods',
        title: 'Array Methods',
        content: `# Essential Array Methods

## Transformation Methods
- map() - Transform each element
- filter() - Keep elements that pass a test
- reduce() - Reduce to a single value

## Search Methods
- find() - Find first matching element
- includes() - Check if element exists`,
        codeExample: `const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map - Transform each element
const doubled = numbers.map(n => n * 2);
console.log("Doubled:", doubled);

// filter - Keep elements that pass test
const evens = numbers.filter(n => n % 2 === 0);
console.log("Evens:", evens);

// reduce - Reduce to single value
const sum = numbers.reduce((acc, n) => acc + n, 0);
console.log("Sum:", sum);

// find - Find first match
const firstOver5 = numbers.find(n => n > 5);
console.log("First > 5:", firstOver5);

// Chaining methods
const result = numbers
  .filter(n => n % 2 === 0)
  .map(n => n * 3)
  .reduce((a, b) => a + b);
console.log("Chain result:", result);`,
        language: 'javascript'
      },
      {
        id: 'js-array-methods-advanced',
        title: 'Advanced Array Methods',
        content: `# More Array Methods

## Iteration Methods
- forEach, every, some

## Transformation Methods  
- flat, flatMap, sort, reverse

## Search Methods
- findIndex, indexOf, lastIndexOf`,
        codeExample: `// every - Check if ALL pass test
const numbers = [2, 4, 6, 8, 10];
console.log("All even?", numbers.every(n => n % 2 === 0));

// some - Check if ANY pass test
console.log("Any > 5?", numbers.some(n => n > 5));

// findIndex - Find index of match
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Bob" }
];
const janeIndex = users.findIndex(u => u.name === "Jane");
console.log("Jane's index:", janeIndex);

// flat - Flatten nested arrays
const nested = [1, [2, 3], [4, [5, 6]]];
console.log("flat(1):", nested.flat(1));
console.log("flat(2):", nested.flat(2));

// flatMap - Map then flatten
const sentences = ["Hello World", "How are you"];
const words = sentences.flatMap(s => s.split(" "));
console.log("flatMap:", words);

// sort - Sort array (mutates!)
const names = ["Charlie", "Alice", "Bob"];
console.log("Sorted:", [...names].sort());

const nums = [10, 5, 8, 1, 7];
console.log("Sorted nums:", [...nums].sort((a, b) => a - b));

// reverse - Reverse array (mutates!)
console.log("Reversed:", [...nums].reverse());

// Array.from - Create array from iterable
console.log("Array.from:", Array.from("hello"));
console.log("Range:", Array.from({ length: 5 }, (_, i) => i + 1));

// Array.of - Create array from arguments
console.log("Array.of:", Array.of(1, 2, 3));`,
        language: 'javascript'
      },
      {
        id: 'js-array-manipulation',
        title: 'Array Manipulation',
        content: `# Array Manipulation Methods

## Adding/Removing Elements
- push, pop, unshift, shift
- splice, slice

## Combining Arrays
- concat, spread operator

## Other Useful Methods
- join, fill, copyWithin`,
        codeExample: `// push/pop - Add/remove from end
const arr = [1, 2, 3];
arr.push(4);
console.log("After push:", arr);
const popped = arr.pop();
console.log("Popped:", popped, "Array:", arr);

// unshift/shift - Add/remove from start
arr.unshift(0);
console.log("After unshift:", arr);
const shifted = arr.shift();
console.log("Shifted:", shifted, "Array:", arr);

// splice - Add/remove at any position
const colors = ["red", "green", "blue"];
colors.splice(1, 1, "yellow", "purple");
console.log("After splice:", colors);

// slice - Extract portion (doesn't mutate)
const sliced = colors.slice(1, 3);
console.log("Sliced:", sliced);

// concat vs spread
const arr1 = [1, 2];
const arr2 = [3, 4];
console.log("concat:", arr1.concat(arr2));
console.log("spread:", [...arr1, ...arr2]);

// fill - Fill array with value
const filled = new Array(5).fill(0);
console.log("Filled:", filled);

// join - Convert to string
console.log("Joined:", colors.join(" | "));

// includes with fromIndex
const items = [1, 2, 3, 4, 5];
console.log("includes 3 from index 2:", items.includes(3, 2));

// at - Access with negative index
console.log("at(-1):", items.at(-1));
console.log("at(-2):", items.at(-2));`,
        language: 'javascript'
      },
      {
        id: 'js-object-basics',
        title: 'Object Fundamentals',
        content: `# Objects in JavaScript

Objects store collections of key-value pairs.

## Creating Objects
- Object literal
- Constructor
- Object.create()

## Accessing Properties
- Dot notation
- Bracket notation`,
        codeExample: `// Creating Objects
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 30,
  "favorite color": "blue",
  greet() {
    console.log(\`Hello, I'm \${this.firstName}\`);
  }
};

// Accessing properties
console.log("Dot:", person.firstName);
console.log("Bracket:", person["lastName"]);
console.log("Dynamic:", person["favorite color"]);

// Modifying properties
person.age = 31;
person.email = "john@example.com";
delete person["favorite color"];

console.log("Modified:", person);

// Method shorthand
const calculator = {
  value: 0,
  add(n) { this.value += n; return this; },
  subtract(n) { this.value -= n; return this; },
  multiply(n) { this.value *= n; return this; },
  result() { return this.value; }
};

console.log("Calc:", calculator.add(10).multiply(2).subtract(5).result());

// Computed property names
const propName = "dynamicKey";
const obj = {
  [propName]: "dynamic value",
  [\`computed_\${1 + 1}\`]: "computed"
};
console.log("Dynamic obj:", obj);

// Property shorthand
const name = "Alice";
const age = 25;
const user = { name, age };
console.log("Shorthand:", user);`,
        language: 'javascript'
      },
      {
        id: 'js-object-methods',
        title: 'Object Methods',
        content: `# Object Static Methods

## Keys, Values, Entries
Get arrays of object data.

## Merging Objects
Combine objects with assign or spread.

## Property Descriptors
Control property behavior.`,
        codeExample: `const user = {
  name: "John",
  age: 30,
  city: "NYC"
};

// Object.keys, values, entries
console.log("Keys:", Object.keys(user));
console.log("Values:", Object.values(user));
console.log("Entries:", Object.entries(user));

// Iterating with entries
for (const [key, value] of Object.entries(user)) {
  console.log(\`\${key}: \${value}\`);
}

// Object.assign - Merge objects
const defaults = { theme: "dark", fontSize: 14 };
const userPrefs = { fontSize: 16 };
const merged = Object.assign({}, defaults, userPrefs);
console.log("\\nMerged:", merged);

// Spread operator (better!)
const merged2 = { ...defaults, ...userPrefs };
console.log("Spread merge:", merged2);

// Object.freeze - Prevent modifications
const frozen = Object.freeze({ x: 1 });
frozen.x = 2; // Silently fails
console.log("\\nFrozen:", frozen);

// Object.seal - Prevent add/delete
const sealed = Object.seal({ y: 1 });
sealed.y = 2; // This works
sealed.z = 3; // This doesn't
console.log("Sealed:", sealed);

// Check status
console.log("Is frozen?", Object.isFrozen(frozen));
console.log("Is sealed?", Object.isSealed(sealed));

// Object.fromEntries - Create object from entries
const entries = [["a", 1], ["b", 2], ["c", 3]];
const fromEntries = Object.fromEntries(entries);
console.log("\\nFrom entries:", fromEntries);`,
        language: 'javascript'
      },
      {
        id: 'js-destructuring',
        title: 'Destructuring',
        content: `# Destructuring Assignment

Extract values from arrays and objects into variables.

## Array Destructuring
Extract by position.

## Object Destructuring
Extract by property name.

## Use Cases
- Swap variables
- Function parameters
- Module imports`,
        codeExample: `// Array Destructuring
const colors = ["red", "green", "blue", "yellow"];

const [first, second] = colors;
console.log("First two:", first, second);

// Skip elements
const [, , third] = colors;
console.log("Third:", third);

// Rest pattern
const [primary, ...rest] = colors;
console.log("Primary:", primary, "Rest:", rest);

// Default values
const [a, b, c, d, e = "purple"] = colors;
console.log("With default:", e);

// Swap variables
let x = 1, y = 2;
[x, y] = [y, x];
console.log("\\nSwapped:", x, y);

// Object Destructuring
const person = {
  name: "John",
  age: 30,
  city: "NYC",
  country: "USA"
};

const { name, age } = person;
console.log("\\nName and age:", name, age);

// Rename variables
const { name: personName, city: location } = person;
console.log("Renamed:", personName, location);

// Default values
const { phone = "N/A" } = person;
console.log("With default:", phone);

// Nested destructuring
const company = {
  name: "Tech Corp",
  address: {
    street: "123 Main St",
    city: "San Francisco"
  }
};

const { address: { city: companyCity } } = company;
console.log("\\nNested:", companyCity);

// Function parameters
function greet({ name, age = 0 }) {
  console.log(\`Hello \${name}, you are \${age}\`);
}
greet({ name: "Alice", age: 25 });`,
        language: 'javascript'
      },
      {
        id: 'js-spread-rest',
        title: 'Spread & Rest Operators',
        content: `# Spread and Rest Operators

The ... syntax has two uses:

## Spread Operator
Expands an iterable into individual elements.

## Rest Operator
Collects multiple elements into an array.`,
        codeExample: `// Spread in Arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// Copy array (shallow)
const copy = [...arr1];
console.log("Copy:", copy);

// Insert in middle
const inserted = [0, ...arr1, 4];
console.log("Inserted:", inserted);

// Spread in Objects
const defaults = { theme: "dark", size: "medium" };
const custom = { size: "large", color: "blue" };

const merged = { ...defaults, ...custom };
console.log("\\nMerged:", merged);

// Copy with modification
const user = { name: "John", age: 30 };
const updated = { ...user, age: 31, email: "john@test.com" };
console.log("Updated:", updated);

// Spread in function calls
const numbers = [5, 2, 8, 1, 9];
console.log("\\nMax:", Math.max(...numbers));
console.log("Min:", Math.min(...numbers));

// Rest in function parameters
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
console.log("\\nSum:", sum(1, 2, 3, 4, 5));

// Rest with other parameters
function greet(greeting, ...names) {
  names.forEach(name => console.log(\`\${greeting}, \${name}!\`));
}
greet("Hello", "Alice", "Bob", "Charlie");

// Rest in destructuring
const [first, second, ...others] = [1, 2, 3, 4, 5];
console.log("\\nFirst:", first, "Others:", others);

const { a, ...remaining } = { a: 1, b: 2, c: 3 };
console.log("Remaining:", remaining);`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-async',
    title: 'Asynchronous JavaScript',
    description: 'Learn callbacks, promises, and async/await patterns.',
    difficulty: 'intermediate',
    duration: '4 hours',
    topics: ['Callbacks', 'Promises', 'Async/Await', 'Error Handling'],
    lessons: [
      {
        id: 'js-callbacks',
        title: 'Callbacks',
        content: `# Callbacks in JavaScript

A callback is a function passed as an argument to another function.

## Synchronous Callbacks
Execute immediately (like array methods).

## Asynchronous Callbacks
Execute later (like setTimeout, event handlers).

## Callback Hell
Nested callbacks become hard to manage.`,
        codeExample: `// Synchronous callback
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(function(n) {
  return n * 2;
});
console.log("Sync callback:", doubled);

// Asynchronous callback
console.log("\\n1. Starting...");

setTimeout(function() {
  console.log("3. Timeout callback executed!");
}, 1000);

console.log("2. Continuing...");

// Callback with error-first pattern
function fetchData(callback) {
  setTimeout(() => {
    const success = Math.random() > 0.3;
    if (success) {
      callback(null, { data: "Success!" });
    } else {
      callback(new Error("Failed to fetch"), null);
    }
  }, 500);
}

console.log("\\nFetching data...");
fetchData((error, result) => {
  if (error) {
    console.log("Error:", error.message);
  } else {
    console.log("Result:", result);
  }
});

// Callback Hell (avoid this!)
function step1(callback) {
  setTimeout(() => {
    console.log("\\nStep 1 complete");
    callback();
  }, 300);
}

function step2(callback) {
  setTimeout(() => {
    console.log("Step 2 complete");
    callback();
  }, 300);
}

function step3(callback) {
  setTimeout(() => {
    console.log("Step 3 complete");
    callback();
  }, 300);
}

// Nested callbacks
step1(() => {
  step2(() => {
    step3(() => {
      console.log("All steps complete!");
    });
  });
});`,
        language: 'javascript'
      },
      {
        id: 'js-promises',
        title: 'Promises',
        content: `# Promises in JavaScript

A Promise represents the eventual completion or failure of an async operation.

## Promise States
1. Pending - Initial state
2. Fulfilled - Operation completed
3. Rejected - Operation failed`,
        codeExample: `// Creating a Promise
const fetchData = (success) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve({ data: "Success!" });
      } else {
        reject(new Error("Failed"));
      }
    }, 1000);
  });
};

console.log("Fetching data...");

fetchData(true)
  .then(data => console.log("Resolved:", data))
  .catch(err => console.log("Error:", err))
  .finally(() => console.log("Done!"));

// Promise.all
Promise.all([
  Promise.resolve(1),
  Promise.resolve(2),
  Promise.resolve(3)
]).then(values => console.log("All:", values));`,
        language: 'javascript'
      },
      {
        id: 'js-promise-methods',
        title: 'Promise Static Methods',
        content: `# Promise Static Methods

## Promise.all
Wait for all promises to resolve.

## Promise.race
Return first settled promise.

## Promise.allSettled
Wait for all to settle (resolve or reject).

## Promise.any
Return first fulfilled promise.`,
        codeExample: `// Helper function
const delay = (ms, value, shouldFail = false) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) {
        reject(new Error(\`Failed: \${value}\`));
      } else {
        resolve(value);
      }
    }, ms);
  });
};

// Promise.all - All must succeed
console.log("Promise.all:");
Promise.all([
  delay(100, "First"),
  delay(200, "Second"),
  delay(150, "Third")
])
.then(results => console.log("All results:", results))
.catch(err => console.log("Error:", err.message));

// Promise.race - First to settle wins
console.log("\\nPromise.race:");
Promise.race([
  delay(100, "Fast"),
  delay(200, "Medium"),
  delay(300, "Slow")
])
.then(result => console.log("Race winner:", result));

// Promise.allSettled - Get all results
console.log("\\nPromise.allSettled:");
Promise.allSettled([
  delay(100, "Success 1"),
  delay(150, "Fail 1", true),
  delay(200, "Success 2")
])
.then(results => {
  results.forEach((result, i) => {
    if (result.status === "fulfilled") {
      console.log(\`\${i}: Fulfilled - \${result.value}\`);
    } else {
      console.log(\`\${i}: Rejected - \${result.reason.message}\`);
    }
  });
});

// Promise.any - First success wins
console.log("\\nPromise.any:");
Promise.any([
  delay(200, "Fail 1", true),
  delay(100, "Success"),
  delay(150, "Fail 2", true)
])
.then(result => console.log("Any result:", result))
.catch(err => console.log("All failed"));

// Promise.resolve and Promise.reject
const resolved = Promise.resolve("Already resolved");
const rejected = Promise.reject(new Error("Already rejected"));

resolved.then(v => console.log("\\n" + v));
rejected.catch(e => console.log(e.message));`,
        language: 'javascript'
      },
      {
        id: 'js-async-await',
        title: 'Async/Await',
        content: `# Async/Await

Modern syntax for working with promises.

## async Functions
Always return a promise.

## await Keyword
Pause until promise settles.

## Error Handling
Use try/catch blocks.`,
        codeExample: `// Basic async/await
async function fetchUser(id) {
  // Simulate API call
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ id, name: \`User \${id}\` });
    }, 500);
  });
}

async function getUser() {
  console.log("Fetching user...");
  const user = await fetchUser(1);
  console.log("User:", user);
  return user;
}

getUser();

// Error handling with try/catch
async function fetchWithError() {
  return new Promise((_, reject) => {
    setTimeout(() => reject(new Error("Network error")), 500);
  });
}

async function handleErrors() {
  try {
    const result = await fetchWithError();
    console.log(result);
  } catch (error) {
    console.log("\\nCaught error:", error.message);
  } finally {
    console.log("Cleanup done");
  }
}

handleErrors();

// Sequential vs Parallel
async function sequential() {
  console.log("\\nSequential:");
  const start = Date.now();
  const user1 = await fetchUser(1);
  const user2 = await fetchUser(2);
  console.log("Time:", Date.now() - start, "ms");
  console.log("Users:", user1, user2);
}

async function parallel() {
  console.log("\\nParallel:");
  const start = Date.now();
  const [user1, user2] = await Promise.all([
    fetchUser(1),
    fetchUser(2)
  ]);
  console.log("Time:", Date.now() - start, "ms");
  console.log("Users:", user1, user2);
}

sequential().then(() => parallel());

// Async iteration
async function* asyncGenerator() {
  yield await Promise.resolve(1);
  yield await Promise.resolve(2);
  yield await Promise.resolve(3);
}

async function useAsyncGenerator() {
  console.log("\\nAsync iteration:");
  for await (const num of asyncGenerator()) {
    console.log("Value:", num);
  }
}

useAsyncGenerator();`,
        language: 'javascript'
      },
      {
        id: 'js-error-handling-async',
        title: 'Async Error Handling',
        content: `# Error Handling in Async Code

## Patterns
- try/catch with async/await
- .catch() with promises
- Error boundaries
- Graceful degradation`,
        codeExample: `// Central error handler
function handleError(error, context) {
  console.error(\`[\${context}] \${error.message}\`);
  // In real app: log to service, show notification
}

// Wrapper for async functions
function asyncHandler(fn) {
  return async (...args) => {
    try {
      return await fn(...args);
    } catch (error) {
      handleError(error, fn.name);
      throw error; // Re-throw if needed
    }
  };
}

// Usage
const riskyOperation = asyncHandler(async function riskyOperation() {
  throw new Error("Something went wrong!");
});

riskyOperation().catch(() => console.log("Handled in catch"));

// Multiple operations with individual handling
async function fetchMultiple() {
  const results = await Promise.allSettled([
    fetch("https://api.example.com/users"),
    fetch("https://api.example.com/posts"),
    fetch("https://api.example.com/comments")
  ]);

  results.forEach((result, index) => {
    if (result.status === "rejected") {
      console.log(\`Request \${index} failed:\`, result.reason);
    }
  });

  // Filter successful results
  const successfulResults = results
    .filter(r => r.status === "fulfilled")
    .map(r => r.value);
  
  return successfulResults;
}

// Retry pattern
async function withRetry(fn, retries = 3, delay = 1000) {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      console.log(\`Attempt \${i + 1} failed: \${error.message}\`);
      if (i < retries - 1) {
        await new Promise(r => setTimeout(r, delay));
      }
    }
  }
  throw new Error(\`Failed after \${retries} attempts\`);
}

// Example usage
let attemptCount = 0;
async function unreliableOperation() {
  attemptCount++;
  if (attemptCount < 3) {
    throw new Error("Random failure");
  }
  return "Success!";
}

withRetry(unreliableOperation)
  .then(result => console.log("\\nRetry result:", result))
  .catch(err => console.log("Final error:", err.message));`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-this',
    title: 'The this Keyword',
    description: 'Understand how this works in different contexts.',
    difficulty: 'intermediate',
    duration: '2 hours',
    topics: ['Global Context', 'Object Methods', 'Constructors', 'Arrow Functions', 'Explicit Binding'],
    lessons: [
      {
        id: 'js-this-basics',
        title: 'Understanding this',
        content: `# The this Keyword

The value of this depends on HOW a function is called.

## Different Contexts
1. Global context
2. Object methods
3. Constructor functions
4. Event handlers
5. Arrow functions (lexical)`,
        codeExample: `// Global context (in browser: window, in Node: global/undefined in strict mode)
console.log("Global this:", typeof this);

// Object method - this = the object
const person = {
  name: "John",
  greet() {
    console.log("Object this:", this.name);
  },
  greetArrow: () => {
    console.log("Arrow this:", this.name); // undefined (lexical)
  }
};

person.greet();
person.greetArrow();

// Lost context
const greetFunc = person.greet;
// greetFunc(); // this would be undefined in strict mode

// Constructor function - this = new instance
function Animal(name) {
  this.name = name;
  console.log("Constructor this:", this);
}

const cat = new Animal("Whiskers");

// Class methods - this = instance
class Dog {
  constructor(name) {
    this.name = name;
  }
  
  bark() {
    console.log(\`\${this.name} barks!\`);
  }
  
  // Arrow function preserves this
  delayedBark = () => {
    setTimeout(() => {
      console.log(\`\${this.name} barks (delayed)!\`);
    }, 100);
  }
}

const dog = new Dog("Max");
dog.bark();
dog.delayedBark();`,
        language: 'javascript'
      },
      {
        id: 'js-this-binding',
        title: 'Explicit this Binding',
        content: `# Binding this Explicitly

## Methods
- **call** - Invoke with this and individual args
- **apply** - Invoke with this and args array
- **bind** - Return new function with bound this`,
        codeExample: `function greet(greeting, punctuation) {
  console.log(\`\${greeting}, \${this.name}\${punctuation}\`);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

// call - individual arguments
greet.call(person1, "Hello", "!");
greet.call(person2, "Hi", "?");

// apply - arguments as array
greet.apply(person1, ["Hey", "!!"]);
greet.apply(person2, ["Yo", "..."]);

// bind - returns new function
const greetAlice = greet.bind(person1);
greetAlice("Welcome", "!");

// Partial application with bind
const sayHiTo = greet.bind(null, "Hi");
sayHiTo.call(person1, "!");

// Practical example: event handlers
const button = {
  text: "Click me",
  handleClick: function() {
    console.log(\`Button "\${this.text}" clicked\`);
  }
};

// In real DOM:
// element.addEventListener('click', button.handleClick.bind(button));

// Using bind to fix lost context
const boundHandler = button.handleClick.bind(button);
boundHandler();

// Borrowing methods
const numbers = { 0: "a", 1: "b", 2: "c", length: 3 };
const arr = Array.prototype.slice.call(numbers);
console.log("Borrowed slice:", arr);

// Modern alternative
console.log("Array.from:", Array.from(numbers));`,
        language: 'javascript'
      },
      {
        id: 'js-arrow-this',
        title: 'Arrow Functions and this',
        content: `# Arrow Functions and this

Arrow functions don't have their own this.
They inherit this from the enclosing scope (lexical).

## When to Use
- Callbacks inside methods
- When you need to preserve outer this

## When NOT to Use
- Object methods
- Constructors
- Event handlers (usually)`,
        codeExample: `// Arrow functions inherit this
const team = {
  name: "Engineering",
  members: ["Alice", "Bob", "Charlie"],
  
  // Regular function - this = team
  showMembers() {
    console.log(\`Team: \${this.name}\`);
    
    // Arrow function inherits this from showMembers
    this.members.forEach(member => {
      console.log(\`\${member} is in \${this.name}\`);
    });
  },
  
  // Problem with regular function callback
  showMembersOld() {
    const self = this; // Old pattern
    this.members.forEach(function(member) {
      // console.log(this.name); // undefined!
      console.log(\`\${member} is in \${self.name}\`);
    });
  }
};

team.showMembers();

// Nested arrow functions
const outer = {
  value: 42,
  
  getValueGetter() {
    return () => () => this.value;
  }
};

const getter = outer.getValueGetter();
console.log("\\nNested arrow:", getter()());

// Common mistake: Arrow as method
const badObject = {
  name: "Bad",
  getName: () => this.name // this is not the object!
};
console.log("Arrow method:", badObject.getName()); // undefined

// Correct way
const goodObject = {
  name: "Good",
  getName() { return this.name; }
};
console.log("Regular method:", goodObject.getName());

// Class with arrow functions
class Timer {
  constructor() {
    this.seconds = 0;
  }
  
  // Arrow function as class field
  start = () => {
    setInterval(() => {
      this.seconds++;
      console.log(\`Timer: \${this.seconds}s\`);
    }, 1000);
  }
}

// const timer = new Timer();
// timer.start(); // Would work correctly`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-dom',
    title: 'DOM Manipulation',
    description: 'Interact with the Document Object Model and handle events.',
    difficulty: 'intermediate',
    duration: '3 hours',
    topics: ['DOM Selection', 'Event Handling', 'DOM Traversal', 'Dynamic Content'],
    lessons: [
      {
        id: 'js-dom-selection',
        title: 'DOM Selection',
        content: `# Selecting DOM Elements

## Modern Methods
- querySelector - First match
- querySelectorAll - All matches

## Legacy Methods
- getElementById
- getElementsByClassName
- getElementsByTagName`,
        codeExample: `// Note: These examples show DOM concepts
// They would work in a browser environment

// querySelector - Returns first match
const header = document.querySelector('h1');
const firstButton = document.querySelector('.btn');
const submitBtn = document.querySelector('#submit');
const navLink = document.querySelector('nav a.active');

// querySelectorAll - Returns NodeList
const allButtons = document.querySelectorAll('.btn');
const allParagraphs = document.querySelectorAll('p');
const formInputs = document.querySelectorAll('form input');

// Converting NodeList to Array
const buttonsArray = Array.from(allButtons);
// or
const buttonsArray2 = [...allButtons];

// Legacy methods
const byId = document.getElementById('myId');
const byClass = document.getElementsByClassName('myClass');
const byTag = document.getElementsByTagName('div');

// Differences:
// - querySelector: Returns Element or null
// - getElementById: Returns Element or null
// - getElementsBy*: Returns live HTMLCollection
// - querySelectorAll: Returns static NodeList

// Simulating for demo purposes
console.log("DOM Selection Examples");
console.log("querySelector returns:", typeof document.querySelector);
console.log("Use CSS selectors: 'div.class#id[attr=value]'");

// Complex selectors
const examples = [
  'div.container > p',          // Direct child
  'ul li:first-child',          // First li in ul
  'input[type="text"]',         // Input with type
  '.item:not(.disabled)',       // Not selector
  'tr:nth-child(odd)',          // Odd rows
  '[data-active="true"]'        // Data attribute
];

examples.forEach(sel => console.log("Selector:", sel));`,
        language: 'javascript'
      },
      {
        id: 'js-dom-manipulation',
        title: 'DOM Manipulation',
        content: `# Manipulating DOM Elements

## Content
- textContent, innerHTML, innerText

## Attributes
- getAttribute, setAttribute, dataset

## Styles and Classes
- style, classList`,
        codeExample: `// Creating elements
const div = document.createElement('div');
const text = document.createTextNode('Hello');

// Setting content
div.textContent = 'Plain text content';
div.innerHTML = '<strong>HTML</strong> content';
div.innerText = 'Visible text only';

// Attributes
div.setAttribute('id', 'myDiv');
div.getAttribute('id');
div.removeAttribute('id');
div.hasAttribute('id');

// Data attributes
div.dataset.userId = '123';
div.dataset.userName = 'john';
// Creates: data-user-id="123" data-user-name="john"

// Classes
div.classList.add('active', 'visible');
div.classList.remove('hidden');
div.classList.toggle('expanded');
div.classList.contains('active'); // true
div.classList.replace('old-class', 'new-class');

// Inline styles
div.style.backgroundColor = 'blue';
div.style.fontSize = '16px';
div.style.cssText = 'color: white; padding: 10px;';

// Getting computed styles
// const styles = getComputedStyle(div);
// console.log(styles.backgroundColor);

// Inserting elements
const parent = document.createElement('ul');
const child = document.createElement('li');

parent.appendChild(child);
parent.prepend(child);               // Add at start
parent.append(child);                // Add at end
parent.insertBefore(child, parent.firstChild);

// Modern insertion methods
div.insertAdjacentHTML('beforebegin', '<p>Before</p>');
div.insertAdjacentHTML('afterbegin', '<p>First child</p>');
div.insertAdjacentHTML('beforeend', '<p>Last child</p>');
div.insertAdjacentHTML('afterend', '<p>After</p>');

// Removing elements
child.remove();
parent.removeChild(child);

// Cloning
const clone = div.cloneNode(true); // true = deep clone

console.log("DOM Manipulation methods demonstrated");`,
        language: 'javascript'
      },
      {
        id: 'js-events',
        title: 'Event Handling',
        content: `# DOM Events

## Adding Listeners
- addEventListener
- removeEventListener

## Event Object
Contains info about the event.

## Event Flow
- Capturing (down)
- Target
- Bubbling (up)`,
        codeExample: `// Adding event listeners
const button = document.createElement('button');

function handleClick(event) {
  console.log('Button clicked!');
  console.log('Event type:', event.type);
  console.log('Target:', event.target);
  console.log('Current target:', event.currentTarget);
}

button.addEventListener('click', handleClick);

// Remove listener (must use same function reference)
button.removeEventListener('click', handleClick);

// One-time listener
button.addEventListener('click', () => {
  console.log('Only runs once!');
}, { once: true });

// Event delegation
const list = document.createElement('ul');
list.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    console.log('List item clicked:', event.target.textContent);
  }
});

// Stopping propagation
button.addEventListener('click', (event) => {
  event.stopPropagation(); // Stop bubbling
  event.stopImmediatePropagation(); // Stop all handlers
});

// Prevent default behavior
const link = document.createElement('a');
link.addEventListener('click', (event) => {
  event.preventDefault(); // Don't navigate
  console.log('Link click prevented');
});

// Common events
const events = [
  // Mouse
  'click', 'dblclick', 'mouseenter', 'mouseleave', 'mousemove',
  // Keyboard
  'keydown', 'keyup', 'keypress',
  // Form
  'submit', 'change', 'input', 'focus', 'blur',
  // Document
  'DOMContentLoaded', 'load', 'scroll', 'resize'
];

console.log("Common events:", events);

// Keyboard event example
document.addEventListener('keydown', (event) => {
  console.log('Key:', event.key);
  console.log('Code:', event.code);
  console.log('Ctrl:', event.ctrlKey);
  console.log('Shift:', event.shiftKey);
});

// Custom events
const customEvent = new CustomEvent('userLoggedIn', {
  detail: { userId: 123, name: 'John' }
});

document.addEventListener('userLoggedIn', (event) => {
  console.log('User logged in:', event.detail);
});

document.dispatchEvent(customEvent);`,
        language: 'javascript'
      },
      {
        id: 'js-event-delegation',
        title: 'Event Delegation',
        content: `# Event Delegation Pattern

Attach one listener to parent instead of many to children.

## Benefits
- Better performance
- Works with dynamic content
- Less memory usage`,
        codeExample: `// Without delegation - Bad for many items
function setupBadExample() {
  const items = document.querySelectorAll('.item');
  items.forEach(item => {
    item.addEventListener('click', handleClick);
  });
  // Problem: New items won't have listeners!
}

// With delegation - Better!
function setupGoodExample() {
  const container = document.querySelector('.container');
  
  container.addEventListener('click', (event) => {
    // Check if clicked element matches
    if (event.target.matches('.item')) {
      handleItemClick(event.target);
    }
    
    // Or check for closest matching parent
    const item = event.target.closest('.item');
    if (item) {
      handleItemClick(item);
    }
  });
}

function handleItemClick(item) {
  console.log('Item clicked:', item);
}

// Practical example: Todo list
class TodoList {
  constructor(container) {
    this.container = container;
    this.todos = [];
    this.setupListeners();
  }
  
  setupListeners() {
    // Single listener handles all actions
    this.container.addEventListener('click', (event) => {
      const target = event.target;
      
      if (target.matches('.delete-btn')) {
        const todoItem = target.closest('.todo-item');
        this.deleteTodo(todoItem.dataset.id);
      }
      
      if (target.matches('.toggle-btn')) {
        const todoItem = target.closest('.todo-item');
        this.toggleTodo(todoItem.dataset.id);
      }
      
      if (target.matches('.edit-btn')) {
        const todoItem = target.closest('.todo-item');
        this.editTodo(todoItem.dataset.id);
      }
    });
  }
  
  deleteTodo(id) {
    console.log('Delete:', id);
  }
  
  toggleTodo(id) {
    console.log('Toggle:', id);
  }
  
  editTodo(id) {
    console.log('Edit:', id);
  }
}

// Data attributes for delegation
const html = \`
<ul class="container">
  <li class="todo-item" data-id="1" data-priority="high">
    <span>Todo 1</span>
    <button class="toggle-btn">Toggle</button>
    <button class="edit-btn">Edit</button>
    <button class="delete-btn">Delete</button>
  </li>
</ul>
\`;

console.log("Event delegation example with data attributes");`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-error-handling',
    title: 'Error Handling',
    description: 'Learn to handle errors gracefully with try/catch and custom errors.',
    difficulty: 'intermediate',
    duration: '2 hours',
    topics: ['Try/Catch', 'Error Types', 'Custom Errors', 'Debugging'],
    lessons: [
      {
        id: 'js-try-catch',
        title: 'Try/Catch/Finally',
        content: `# Error Handling with Try/Catch

Handle runtime errors gracefully.

## Syntax
- try: Code that might throw
- catch: Handle the error
- finally: Always runs

## Error Object
Contains name, message, and stack.`,
        codeExample: `// Basic try/catch
try {
  const result = riskyOperation();
  console.log(result);
} catch (error) {
  console.error("Error caught:", error.message);
}

// Try/catch/finally
function processFile(filename) {
  let file = null;
  try {
    file = openFile(filename);
    processData(file);
  } catch (error) {
    console.error("Processing failed:", error.message);
  } finally {
    // Always runs - cleanup
    if (file) {
      console.log("Closing file...");
      // closeFile(file);
    }
  }
}

// Throwing errors
function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));
  console.log(divide(10, 0)); // Throws
} catch (error) {
  console.error("Math error:", error.message);
}

// Error object properties
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.log("\\nError properties:");
  console.log("Name:", error.name);
  console.log("Message:", error.message);
  console.log("Stack:", error.stack?.substring(0, 100) + "...");
}

// Re-throwing errors
function outer() {
  try {
    inner();
  } catch (error) {
    if (error.message.includes("critical")) {
      throw error; // Re-throw critical errors
    }
    console.log("Handled non-critical error");
  }
}

function inner() {
  throw new Error("Non-critical failure");
}

outer();`,
        language: 'javascript'
      },
      {
        id: 'js-error-types',
        title: 'Error Types',
        content: `# Built-in Error Types

JavaScript has several built-in error types:

## Error Types
- **Error** - Generic error
- **SyntaxError** - Invalid syntax
- **ReferenceError** - Invalid reference
- **TypeError** - Wrong type operation
- **RangeError** - Number out of range
- **URIError** - Invalid URI`,
        codeExample: `// TypeError - Wrong type
try {
  const num = 42;
  num.toUpperCase();
} catch (error) {
  console.log("TypeError:", error.message);
}

// ReferenceError - Undefined variable
try {
  console.log(undefinedVariable);
} catch (error) {
  console.log("ReferenceError:", error.message);
}

// RangeError - Out of range
try {
  const arr = new Array(-1);
} catch (error) {
  console.log("RangeError:", error.message);
}

// SyntaxError (caught during parsing, not runtime)
try {
  eval("const x = ;");
} catch (error) {
  console.log("SyntaxError:", error.message);
}

// URIError
try {
  decodeURIComponent('%');
} catch (error) {
  console.log("URIError:", error.message);
}

// Checking error types
function handleError(error) {
  if (error instanceof TypeError) {
    console.log("Type problem - check your types");
  } else if (error instanceof ReferenceError) {
    console.log("Reference problem - variable undefined");
  } else if (error instanceof RangeError) {
    console.log("Range problem - value out of bounds");
  } else {
    console.log("Unknown error:", error.message);
  }
}

try {
  null.toString();
} catch (error) {
  handleError(error);
}`,
        language: 'javascript'
      },
      {
        id: 'js-custom-errors',
        title: 'Custom Errors',
        content: `# Creating Custom Errors

Extend Error class for specific error types.

## Benefits
- Better error identification
- Custom properties
- Cleaner error handling`,
        codeExample: `// Custom Error Class
class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = "ValidationError";
    this.field = field;
  }
}

class NetworkError extends Error {
  constructor(status, message) {
    super(message);
    this.name = "NetworkError";
    this.status = status;
  }
}

class AuthenticationError extends Error {
  constructor(message = "Authentication failed") {
    super(message);
    this.name = "AuthenticationError";
  }
}

// Using custom errors
function validateUser(user) {
  if (!user.email) {
    throw new ValidationError("email", "Email is required");
  }
  if (!user.email.includes("@")) {
    throw new ValidationError("email", "Invalid email format");
  }
  if (!user.password || user.password.length < 8) {
    throw new ValidationError("password", "Password must be 8+ chars");
  }
  return true;
}

// Handling specific error types
function processUser(user) {
  try {
    validateUser(user);
    console.log("User is valid!");
  } catch (error) {
    if (error instanceof ValidationError) {
      console.log(\`Validation failed for \${error.field}: \${error.message}\`);
    } else if (error instanceof AuthenticationError) {
      console.log("Please log in again");
    } else {
      throw error; // Re-throw unknown errors
    }
  }
}

processUser({ email: "test", password: "123" });
processUser({ email: "test@example.com", password: "password123" });

// Error factory
const ErrorFactory = {
  validation: (field, msg) => new ValidationError(field, msg),
  network: (status, msg) => new NetworkError(status, msg),
  auth: (msg) => new AuthenticationError(msg)
};

throw ErrorFactory.validation("username", "Username taken");`,
        language: 'javascript'
      }
    ]
  },
  {
    id: 'js-regex',
    title: 'Regular Expressions',
    description: 'Master pattern matching with regular expressions.',
    difficulty: 'intermediate',
    duration: '3 hours',
    topics: ['Pattern Syntax', 'Methods', 'Common Patterns', 'Groups & Lookaheads'],
    lessons: [
      {
        id: 'js-regex-basics',
        title: 'RegEx Basics',
        content: `# Regular Expressions

Patterns for matching text.

## Creating RegEx
- Literal: /pattern/flags
- Constructor: new RegExp("pattern", "flags")

## Common Flags
- g: Global (all matches)
- i: Case insensitive
- m: Multiline`,
        codeExample: `// Creating regular expressions
const regex1 = /hello/i;
const regex2 = new RegExp("hello", "i");

// Basic patterns
const text = "Hello World! hello again.";

console.log("Test:", regex1.test(text)); // true
console.log("Match:", text.match(regex1)); // First match

// Global flag - find all
const globalRegex = /hello/gi;
console.log("All matches:", text.match(globalRegex));

// Character classes
const digits = "My phone: 123-456-7890";
console.log("\\nDigits:", digits.match(/\\d+/g));

const words = "Hello World 123";
console.log("Words:", words.match(/\\w+/g));
console.log("Non-digits:", words.match(/\\D+/g));

// Quantifiers
console.log("\\nQuantifiers:");
console.log("a*:", "aaa".match(/a*/g));      // 0 or more
console.log("a+:", "aaa".match(/a+/g));      // 1 or more
console.log("a?:", "aaa".match(/a?/g));      // 0 or 1
console.log("a{2}:", "aaa".match(/a{2}/g));  // Exactly 2
console.log("a{1,2}:", "aaa".match(/a{1,2}/g)); // 1 to 2

// Anchors
console.log("\\nAnchors:");
console.log("^Hello:", /^Hello/.test("Hello World")); // Start
console.log("World$:", /World$/.test("Hello World")); // End
console.log("\\\\bword\\\\b:", "a word here".match(/\\bword\\b/)); // Word boundary`,
        language: 'javascript'
      },
      {
        id: 'js-regex-methods',
        title: 'RegEx Methods',
        content: `# RegEx Methods

## RegExp Methods
- test() - Returns boolean
- exec() - Returns match details

## String Methods
- match() - Find matches
- matchAll() - Iterator of all matches
- replace() - Replace matches
- split() - Split by pattern
- search() - Find index`,
        codeExample: `const text = "The quick brown fox jumps over the lazy dog";

// test() - Returns boolean
console.log("Has 'fox':", /fox/.test(text));

// exec() - Returns match with details
const regex = /\\w+/g;
let match;
console.log("\\nexec() results:");
while ((match = regex.exec(text)) !== null) {
  if (match.index < 20) { // Limit output
    console.log(\`Found "\${match[0]}" at index \${match.index}\`);
  }
}

// match() - Returns array of matches
console.log("\\nmatch():", text.match(/\\b\\w{4}\\b/g)); // 4-letter words

// matchAll() - Returns iterator with details
console.log("\\nmatchAll():");
const matches = text.matchAll(/\\b(\\w{3})\\b/g);
for (const m of matches) {
  console.log(\`"\${m[0]}" at \${m.index}\`);
}

// replace() - Replace matches
console.log("\\nreplace():", text.replace(/fox/, "cat"));
console.log("replaceAll:", text.replace(/the/gi, "a"));

// Replace with function
const result = text.replace(/\\b\\w+\\b/g, (word) => {
  return word.length > 4 ? word.toUpperCase() : word;
});
console.log("Function replace:", result);

// split() - Split by pattern
const csv = "apple, banana,  cherry,orange";
console.log("\\nsplit():", csv.split(/,\\s*/));

// search() - Returns index
console.log("\\nsearch():", text.search(/brown/)); // 10`,
        language: 'javascript'
      },
      {
        id: 'js-regex-groups',
        title: 'Groups & Lookaheads',
        content: `# Groups and Lookaheads

## Capturing Groups
Capture parts of the match with ().

## Non-Capturing Groups
Group without capturing with (?:).

## Lookaheads
Match based on what follows.`,
        codeExample: `// Capturing groups
const dateStr = "2024-01-15";
const dateRegex = /(\\d{4})-(\\d{2})-(\\d{2})/;
const dateMatch = dateStr.match(dateRegex);
console.log("Full match:", dateMatch[0]);
console.log("Year:", dateMatch[1]);
console.log("Month:", dateMatch[2]);
console.log("Day:", dateMatch[3]);

// Named groups
const namedRegex = /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/;
const namedMatch = dateStr.match(namedRegex);
console.log("\\nNamed groups:", namedMatch.groups);

// Non-capturing groups
const urlRegex = /https?:\\/\\/(?:www\\.)?([\\w.]+)/;
const url = "https://www.example.com";
console.log("\\nDomain:", url.match(urlRegex)[1]);

// Backreferences
const repeated = "hello hello world";
const dupRegex = /\\b(\\w+)\\s+\\1\\b/;
console.log("\\nDuplicate:", repeated.match(dupRegex));

// Lookahead - Match if followed by
const prices = "100 dollars 50 euros 75 dollars";
console.log("\\nPositive lookahead:");
console.log("Before 'dollars':", prices.match(/\\d+(?= dollars)/g));

// Negative lookahead - Match if NOT followed by
console.log("Not before 'dollars':", prices.match(/\\d+(?! dollars)/g));

// Lookbehind - Match if preceded by
const data = "$100 and €50";
console.log("\\nPositive lookbehind:");
console.log("After $:", data.match(/(?<=\\$)\\d+/g));

// Replace with groups
const name = "John Doe";
const reversed = name.replace(/(\\w+)\\s(\\w+)/, "$2, $1");
console.log("\\nReversed:", reversed);

// Complex example: Extract info
const log = "[ERROR] 2024-01-15 10:30:45 - User not found";
const logRegex = /\\[(?<level>\\w+)\\]\\s(?<date>[\\d-]+)\\s(?<time>[\\d:]+)\\s-\\s(?<message>.+)/;
const logMatch = log.match(logRegex);
console.log("\\nLog parsed:", logMatch.groups);`,
        language: 'javascript'
      },
      {
        id: 'js-regex-patterns',
        title: 'Common Patterns',
        content: `# Common RegEx Patterns

Useful patterns for validation and extraction.`,
        codeExample: `// Email validation
const emailRegex = /^[\\w.-]+@[\\w.-]+\\.\\w{2,}$/;
console.log("Email valid:", emailRegex.test("user@example.com"));
console.log("Email invalid:", emailRegex.test("invalid-email"));

// Phone number (US format)
const phoneRegex = /^\\(?\\d{3}\\)?[-.\\s]?\\d{3}[-.\\s]?\\d{4}$/;
console.log("\\nPhone tests:");
console.log(phoneRegex.test("(123) 456-7890")); // true
console.log(phoneRegex.test("123-456-7890"));   // true
console.log(phoneRegex.test("1234567890"));     // true

// URL validation
const urlRegex = /^(https?:\\/\\/)?(www\\.)?[\\w-]+\\.[a-z]{2,}(\\/\\S*)?$/i;
console.log("\\nURL tests:");
console.log(urlRegex.test("https://www.example.com")); // true
console.log(urlRegex.test("example.com/path"));        // true

// Password strength
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$/;
console.log("\\nPassword tests:");
console.log(passwordRegex.test("Weak1!"));           // false (too short)
console.log(passwordRegex.test("StrongPass1!"));     // true

// Extract hashtags
const tweet = "Learning #JavaScript and #WebDevelopment is fun! #coding";
const hashtags = tweet.match(/#\\w+/g);
console.log("\\nHashtags:", hashtags);

// Extract URLs from text
const textWithUrls = "Visit https://google.com or http://example.com";
const urls = textWithUrls.match(/https?:\\/\\/[\\w.-]+/g);
console.log("URLs:", urls);

// Validate credit card (basic)
const ccRegex = /^\\d{4}[- ]?\\d{4}[- ]?\\d{4}[- ]?\\d{4}$/;
console.log("\\nCC valid:", ccRegex.test("1234-5678-9012-3456"));

// Remove HTML tags
const html = "<p>Hello <b>World</b>!</p>";
const plainText = html.replace(/<[^>]*>/g, "");
console.log("\\nPlain text:", plainText);

// Sanitize input
const input = "  Hello   World!  ";
const sanitized = input.trim().replace(/\\s+/g, " ");
console.log("Sanitized:", sanitized);`,
        language: 'javascript'
      }
    ]
  },
]
