import { Topic } from '../study-content'

export const reactTopics: Topic[] = [
    {
  id: 'react-basics',
  title: 'React Basics',
  description: 'Learn the fundamentals of React including components, JSX, props, state, and essential hooks.',
  difficulty: 'beginner',
  duration: '4 hours',
  topics: ['Components', 'JSX', 'Props', 'State', 'Hooks', 'Events', 'Forms', 'Lists'],
  lessons: [
    {
      id: 'react-intro',
      title: 'Introduction to React',
      content: `# Introduction to React

## What is React?
React is a JavaScript library for building user interfaces, developed and maintained by Facebook (Meta). It's used to create single-page applications (SPAs) where the UI updates dynamically without requiring full page reloads.

## Why React?
React has become one of the most popular front-end libraries because of:

1. **Component-Based Architecture** - Build encapsulated components that manage their own state, then compose them to create complex UIs
2. **Virtual DOM** - React uses a virtual representation of the DOM for efficient updates
3. **Declarative** - Describe what your UI should look like, and React handles the DOM manipulation
4. **Learn Once, Write Anywhere** - Use React for web (React DOM), mobile (React Native), desktop, and more
5. **Large Ecosystem** - Huge community, extensive libraries, and excellent tooling

## How React Works

### The Virtual DOM
When state changes in a React application:
1. React creates a new Virtual DOM tree
2. It compares the new tree with the previous one (diffing)
3. It calculates the minimum number of changes needed
4. It updates only those specific parts of the real DOM

This makes React applications fast and efficient.

### Components
Everything in React is a component. A component is a reusable piece of UI that can contain its own logic, styling, and markup.

\`\`\`js
// A simple React component
function Welcome() {
  return <h1>Hello, React!</h1>;
}
\`\`\`

## Setting Up a React Project

### Using Create React App (Traditional)
\`\`\`bash
npx create-react-app my-app
cd my-app
npm start
\`\`\`

### Using Vite (Modern & Faster)
\`\`\`bash
npm create vite@latest my-app -- --template react
cd my-app
npm install
npm run dev
\`\`\`

### Using Next.js (Full Framework)
\`\`\`bash
npx create-next-app@latest my-app
cd my-app
npm run dev
\`\`\`

## Project Structure
A typical React project looks like this:

\`\`\`
my-app/
├── node_modules/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   ├── App.js
│   ├── App.css
│   └── index.js
├── package.json
└── README.md
\`\`\`

## Your First React Application

\`\`\`js
// src/index.js - Entry point
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
\`\`\`

\`\`\`js
// src/App.js - Main App component
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Welcome to React!</h1>
      <p>This is my first React application.</p>
    </div>
  );
}

export default App;
\`\`\`

## React.StrictMode
StrictMode is a development tool that helps identify potential problems in your application:
- Identifies components with unsafe lifecycles
- Warns about deprecated API usage
- Detects unexpected side effects
- Ensures reusable state

\`\`\`js
<React.StrictMode>
  <App />
</React.StrictMode>
\`\`\`

Note: StrictMode intentionally double-invokes certain functions in development to help detect side effects. This doesn't happen in production.

## Key Takeaways
- React is a library for building UIs with reusable components
- It uses a Virtual DOM for efficient updates
- Components are the building blocks of React applications
- Modern tools like Vite provide fast development experience
- React.StrictMode helps catch common mistakes during development`,
      language: 'javascript'
    },   
    {
      id: 'components',
      title: 'React Components',
      content: `# React Components

## What are Components?
Components are the building blocks of React applications. They are reusable pieces of UI that can contain their own logic, styling, and markup. Think of them as custom HTML elements that you define.

## Types of Components

### 1. Functional Components (Recommended)
Modern React uses functional components with hooks. They are simpler, easier to test, and the recommended approach.

\`\`\`js
// Basic functional component
function Welcome() {
  return <h1>Hello, World!</h1>;
}

// Arrow function component
const Greeting = () => {
  return <h1>Hello, World!</h1>;
};

// Arrow function with implicit return
const SimpleGreeting = () => <h1>Hello, World!</h1>;

// Component with logic
function UserProfile() {
  const name = 'Alice';
  const isOnline = true;
  
  return (
    <div className="profile">
      <h2>{name}</h2>
      <span className={isOnline ? 'online' : 'offline'}>
        {isOnline ? '🟢 Online' : '⚫ Offline'}
      </span>
    </div>
  );
}
\`\`\`

### 2. Class Components (Legacy)
Class components were the original way to create stateful components. While still supported, functional components with hooks are preferred.

\`\`\`js
import React, { Component } from 'react';

class Welcome extends Component {
  render() {
    return <h1>Hello, World!</h1>;
  }
}

// Class component with state
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 0 };
  }
  
  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };
  
  render() {
    return (
      <div>
        <p>Count: {this.state.count}</p>
        <button onClick={this.increment}>Increment</button>
      </div>
    );
  }
}
\`\`\`

## Component Naming Conventions

\`\`\`js
// ✅ Components must start with uppercase letter
function UserProfile() { ... }
function NavBar() { ... }
function TodoList() { ... }

// ❌ Lowercase names are treated as HTML elements
function userProfile() { ... } // Wrong!

// File naming conventions:
// UserProfile.js or UserProfile.jsx
// NavBar.js or NavBar.jsx
\`\`\`

## Composing Components
Components can include other components, allowing you to build complex UIs from simple pieces.

\`\`\`js
// Small, focused components
function Avatar({ src, alt }) {
  return <img src={src} alt={alt} className="avatar" />;
}

function UserInfo({ name, title }) {
  return (
    <div className="user-info">
      <h3>{name}</h3>
      <p>{title}</p>
    </div>
  );
}

function UserActions() {
  return (
    <div className="actions">
      <button>Follow</button>
      <button>Message</button>
    </div>
  );
}

// Composed component
function UserCard({ user }) {
  return (
    <div className="user-card">
      <Avatar src={user.avatarUrl} alt={user.name} />
      <UserInfo name={user.name} title={user.title} />
      <UserActions />
    </div>
  );
}

// Using the composed component
function App() {
  const user = {
    name: 'Alice Johnson',
    title: 'Software Engineer',
    avatarUrl: '/avatars/alice.jpg'
  };
  
  return (
    <div>
      <h1>User Profile</h1>
      <UserCard user={user} />
    </div>
  );
}
\`\`\`

## Component Organization

### File Structure Approaches

\`\`\`
// Approach 1: Group by feature
src/
├── features/
│   ├── auth/
│   │   ├── LoginForm.jsx
│   │   ├── SignupForm.jsx
│   │   └── AuthContext.jsx
│   ├── users/
│   │   ├── UserProfile.jsx
│   │   ├── UserList.jsx
│   │   └── UserCard.jsx
│   └── products/
│       ├── ProductList.jsx
│       └── ProductCard.jsx
├── components/
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   └── Modal.jsx
│   └── layout/
│       ├── Header.jsx
│       ├── Footer.jsx
│       └── Sidebar.jsx
└── App.jsx

// Approach 2: Component folders
src/
├── components/
│   ├── Button/
│   │   ├── Button.jsx
│   │   ├── Button.css
│   │   ├── Button.test.js
│   │   └── index.js
│   └── UserCard/
│       ├── UserCard.jsx
│       ├── UserCard.css
│       └── index.js
└── App.jsx
\`\`\`

### Exporting Components

\`\`\`js
// Default export (one per file)
function UserProfile() {
  return <div>Profile</div>;
}
export default UserProfile;

// Import default export
import UserProfile from './UserProfile';

// Named exports (multiple per file)
export function Button() {
  return <button>Click</button>;
}

export function Input() {
  return <input />;
}

// Import named exports
import { Button, Input } from './FormElements';

// Mix of both
export function helper() { ... }
export default function MainComponent() { ... }

// Import both
import MainComponent, { helper } from './Component';

// Re-export from index.js (barrel file)
// components/index.js
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Modal } from './Modal';

// Import from barrel
import { Button, Input, Modal } from './components';
\`\`\`

## Pure Components
A pure component is a component that always renders the same output for the same props. They are predictable and easier to test.

\`\`\`js
// ✅ Pure component - same input, same output
function PureGreeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}

// ✅ Pure component - no side effects
function PureUserCard({ user }) {
  return (
    <div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
    </div>
  );
}

// ❌ Impure - depends on external state
let globalCounter = 0;
function ImpureCounter() {
  globalCounter++;
  return <div>Count: {globalCounter}</div>;
}

// ❌ Impure - has side effects
function ImpureLogger({ message }) {
  console.log(message); // Side effect!
  return <div>{message}</div>;
}

// React.memo for performance optimization
const MemoizedComponent = React.memo(function ExpensiveComponent({ data }) {
  // Only re-renders if props change
  return <div>{data}</div>;
});
\`\`\`

## Component Best Practices

\`\`\`js
// 1. Keep components small and focused
// ❌ Too many responsibilities
function UserDashboard() {
  return (
    <div>
      <header>...</header>
      <nav>...</nav>
      <main>
        <aside>...</aside>
        <section>
          <form>...</form>
          <table>...</table>
        </section>
      </main>
      <footer>...</footer>
    </div>
  );
}

// ✅ Split into focused components
function UserDashboard() {
  return (
    <div>
      <Header />
      <Navigation />
      <main>
        <Sidebar />
        <Content>
          <UserForm />
          <UserTable />
        </Content>
      </main>
      <Footer />
    </div>
  );
}

// 2. Use descriptive names
// ❌ Vague names
function Item() { ... }
function Data() { ... }
function Box() { ... }

// ✅ Descriptive names
function ProductCard() { ... }
function UserProfile() { ... }
function CommentList() { ... }

// 3. One component per file (usually)
// UserProfile.jsx
export default function UserProfile() { ... }

// 4. Co-locate related code
// UserProfile/
//   UserProfile.jsx
//   UserProfile.css
//   UserProfile.test.js
//   useUserProfile.js (custom hook)
\`\`\`

## Fragments
Fragments let you group elements without adding extra DOM nodes.

\`\`\`js
import React, { Fragment } from 'react';

// Using Fragment
function TableColumns() {
  return (
    <Fragment>
      <td>Name</td>
      <td>Age</td>
      <td>Email</td>
    </Fragment>
  );
}

// Short syntax (recommended)
function ShortTableColumns() {
  return (
    <>
      <td>Name</td>
      <td>Age</td>
      <td>Email</td>
    </>
  );
}

// Fragment with key (required in lists)
function GlossaryTerms({ items }) {
  return (
    <dl>
      {items.map(item => (
        <Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.definition}</dd>
        </Fragment>
      ))}
    </dl>
  );
}
\`\`\`

## Key Takeaways
- Functional components are the modern, recommended approach
- Components must start with an uppercase letter
- Components can be composed together like building blocks
- Keep components small, focused, and pure when possible
- Use Fragments to avoid unnecessary wrapper elements
- Organize components in a consistent, logical structure
- Export components for reuse across your application`,
      language: 'javascript'
    },
    {
      id: 'props',
      title: 'Props (Properties)',
      content: `# Props (Properties)

## What are Props?
Props (short for properties) are how you pass data from a parent component to a child component. They are read-only and flow in one direction: from parent to child. Think of props as function arguments for components.

## Basic Props Usage

\`\`\`js
// Parent component passes props
function App() {
  return (
    <div>
      <Greeting name="Alice" />
      <Greeting name="Bob" />
      <Greeting name="Charlie" />
    </div>
  );
}

// Child component receives props
function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

// With destructuring (preferred)
function Greeting({ name }) {
  return <h1>Hello, {name}!</h1>;
}
\`\`\`

## Passing Different Types of Props

\`\`\`js
function App() {
  const user = { name: 'Alice', age: 25 };
  const colors = ['red', 'green', 'blue'];
  
  return (
    <UserProfile
      // String
      title="Profile"
      
      // Number
      age={25}
      
      // Boolean
      isActive={true}
      isVerified  // shorthand for isVerified={true}
      
      // Object
      user={user}
      
      // Inline object
      settings={{ theme: 'dark', language: 'en' }}
      
      // Array
      colors={colors}
      
      // Function
      onClick={() => console.log('clicked')}
      onSubmit={handleSubmit}
      
      // JSX / React elements
      icon={<StarIcon />}
      header={<h1>Welcome</h1>}
      
      // Variable
      username={user.name}
      
      // Expression
      fullName={user.name + ' Smith'}
    />
  );
}

function UserProfile({
  title,
  age,
  isActive,
  isVerified,
  user,
  settings,
  colors,
  onClick,
  onSubmit,
  icon,
  header,
  username,
  fullName
}) {
  return (
    <div>
      {header}
      <h2>{title}</h2>
      <p>Name: {username}</p>
      <p>Full Name: {fullName}</p>
      <p>Age: {age}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      {isVerified && <span>✓ Verified</span>}
      <p>Theme: {settings.theme}</p>
      <ul>
        {colors.map(color => <li key={color}>{color}</li>)}
      </ul>
      {icon}
      <button onClick={onClick}>Click</button>
    </div>
  );
}
\`\`\`

## Destructuring Props

\`\`\`js
// In function parameters (recommended)
function UserCard({ name, email, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// In function body
function UserCard(props) {
  const { name, email, avatar } = props;
  
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  );
}

// With renaming
function UserCard({ name: userName, email: userEmail }) {
  return (
    <div>
      <h3>{userName}</h3>
      <p>{userEmail}</p>
    </div>
  );
}

// With rest operator
function UserCard({ name, ...otherProps }) {
  return (
    <div>
      <h3>{name}</h3>
      {/* Pass remaining props to child */}
      <UserDetails {...otherProps} />
    </div>
  );
}
\`\`\`

## Default Props

\`\`\`js
// Method 1: Default parameters (recommended)
function Button({ 
  text = 'Click me', 
  color = 'blue', 
  size = 'medium',
  disabled = false 
}) {
  return (
    <button 
      className={\`btn btn-\${color} btn-\${size}\`}
      disabled={disabled}
    >
      {text}
    </button>
  );
}

// Usage
<Button />  // Uses all defaults
<Button text="Submit" color="green" />  // Override some

// Method 2: defaultProps (older, still works)
function Button({ text, color, size }) {
  return (
    <button className={\`btn btn-\${color} btn-\${size}\`}>
      {text}
    </button>
  );
}

Button.defaultProps = {
  text: 'Click me',
  color: 'blue',
  size: 'medium'
};

// Default with object/array (be careful!)
// ❌ Don't use mutable default
function List({ items = [] }) { ... }  // New array each render

// ✅ Better: define outside or use useMemo
const DEFAULT_ITEMS = [];
function List({ items = DEFAULT_ITEMS }) { ... }
\`\`\`

## Props Validation with PropTypes

\`\`\`js
import PropTypes from 'prop-types';

function UserCard({ name, age, email, avatar, isActive, friends, onClick }) {
  return (
    <div>
      <img src={avatar} alt={name} />
      <h3>{name}</h3>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Status: {isActive ? 'Active' : 'Inactive'}</p>
      <p>Friends: {friends.length}</p>
      <button onClick={onClick}>View Profile</button>
    </div>
  );
}

UserCard.propTypes = {
  // Basic types
  name: PropTypes.string.isRequired,
  age: PropTypes.number,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  isActive: PropTypes.bool,
  
  // Arrays
  friends: PropTypes.array,
  // Or more specific:
  friends: PropTypes.arrayOf(PropTypes.string),
  
  // Objects
  user: PropTypes.object,
  // Or with shape:
  user: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string
  }),
  
  // Functions
  onClick: PropTypes.func.isRequired,
  
  // One of specific values
  status: PropTypes.oneOf(['active', 'inactive', 'pending']),
  
  // One of types
  id: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  
  // Any renderable (string, number, element, array of these)
  children: PropTypes.node,
  
  // A React element
  icon: PropTypes.element,
  
  // Instance of a class
  date: PropTypes.instanceOf(Date),
  
  // Custom validator
  customProp: function(props, propName, componentName) {
    if (!/^[a-z]+$/.test(props[propName])) {
      return new Error('Invalid prop');
    }
  }
};

UserCard.defaultProps = {
  avatar: '/default-avatar.png',
  isActive: true,
  friends: []
};
\`\`\`

## Children Prop
The special \`children\` prop allows you to pass elements between opening and closing tags.

\`\`\`js
// Basic children
function Card({ children }) {
  return (
    <div className="card">
      {children}
    </div>
  );
}

// Usage
function App() {
  return (
    <Card>
      <h2>Title</h2>
      <p>This is the card content.</p>
      <button>Click me</button>
    </Card>
  );
}

// Multiple children slots
function Layout({ header, sidebar, children, footer }) {
  return (
    <div className="layout">
      <header>{header}</header>
      <div className="content">
        <aside>{sidebar}</aside>
        <main>{children}</main>
      </div>
      <footer>{footer}</footer>
    </div>
  );
}

// Usage
function App() {
  return (
    <Layout
      header={<NavBar />}
      sidebar={<SideMenu />}
      footer={<Copyright />}
    >
      <h1>Main Content</h1>
      <p>This goes in the main area.</p>
    </Layout>
  );
}

// Working with children
import React, { Children } from 'react';

function List({ children }) {
  // Count children
  const count = Children.count(children);
  
  // Map over children
  const items = Children.map(children, (child, index) => (
    <li key={index}>{child}</li>
  ));
  
  // Convert to array
  const childArray = Children.toArray(children);
  
  return (
    <div>
      <p>Items: {count}</p>
      <ul>{items}</ul>
    </div>
  );
}
\`\`\`

## Render Props Pattern
Pass a function as a prop to share logic between components.

\`\`\`js
// Component with render prop
function MouseTracker({ render }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  const handleMouseMove = (event) => {
    setPosition({
      x: event.clientX,
      y: event.clientY
    });
  };
  
  return (
    <div onMouseMove={handleMouseMove} style={{ height: '100vh' }}>
      {render(position)}
    </div>
  );
}

// Usage
function App() {
  return (
    <MouseTracker
      render={({ x, y }) => (
        <div>
          <h1>Move the mouse around!</h1>
          <p>Current position: ({x}, {y})</p>
        </div>
      )}
    />
  );
}

// Using children as render prop
function MouseTracker({ children }) {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });
  
  // ... mouse tracking logic
  
  return (
    <div onMouseMove={handleMouseMove}>
      {children(position)}
    </div>
  );
}

// Usage
<MouseTracker>
  {({ x, y }) => <p>Position: ({x}, {y})</p>}
</MouseTracker>
\`\`\`

## Prop Drilling and Solutions
When props need to pass through many levels, it's called "prop drilling."

\`\`\`js
// ❌ Prop drilling - passing through many levels
function App() {
  const user = { name: 'Alice', theme: 'dark' };
  return <Layout user={user} />;
}

function Layout({ user }) {
  return <Sidebar user={user} />;
}

function Sidebar({ user }) {
  return <UserPanel user={user} />;
}

function UserPanel({ user }) {
  return <UserName user={user} />;
}

function UserName({ user }) {
  return <span>{user.name}</span>;
}

// ✅ Solution 1: Component composition
function App() {
  const user = { name: 'Alice' };
  
  return (
    <Layout>
      <Sidebar>
        <UserPanel>
          <UserName name={user.name} />
        </UserPanel>
      </Sidebar>
    </Layout>
  );
}

// ✅ Solution 2: Context API (covered in later lesson)
// ✅ Solution 3: State management libraries (Redux, Zustand)
\`\`\`

## Spreading Props

\`\`\`js
// Spread all props to child
function EnhancedButton({ className, ...props }) {
  return (
    <button 
      className={\`btn \${className}\`} 
      {...props}
    />
  );
}

// Usage
<EnhancedButton 
  className="primary"
  onClick={handleClick}
  disabled={false}
>
  Click Me
</EnhancedButton>

// Forwarding props to DOM element
function Input({ label, ...inputProps }) {
  return (
    <div>
      <label>{label}</label>
      <input {...inputProps} />
    </div>
  );
}

// Usage
<Input 
  label="Email"
  type="email"
  placeholder="Enter email"
  value={email}
  onChange={handleChange}
/>
\`\`\`

## Props Are Read-Only

\`\`\`js
// ❌ Never modify props
function BadComponent({ user }) {
  user.name = 'Modified'; // DON'T DO THIS!
  return <div>{user.name}</div>;
}

// ✅ Props should be treated as immutable
function GoodComponent({ user }) {
  // If you need to transform, create new data
  const displayName = user.name.toUpperCase();
  return <div>{displayName}</div>;
}

// ✅ If you need to change data, use state
function EditableComponent({ initialValue }) {
  const [value, setValue] = React.useState(initialValue);
  
  return (
    <input 
      value={value} 
      onChange={e => setValue(e.target.value)} 
    />
  );
}
\`\`\`

## Key Takeaways
- Props pass data from parent to child components
- Props are read-only - never modify them directly
- Use destructuring for cleaner code
- Set default values with default parameters
- Use PropTypes for development-time validation
- The children prop enables component composition
- Avoid excessive prop drilling with composition or Context
- Spread operators can forward props efficiently`,
      language: 'javascript'
    },
    {
      id: 'state',
      title: 'State Management with useState',
      content: `# State Management with useState

## What is State?
State is data that can change over time in a component. Unlike props, state is managed within the component and can be updated. When state changes, React re-renders the component to reflect the new data.

## useState Hook Basics

\`\`\`js
import React, { useState } from 'react';

function Counter() {
  // Declare state variable "count" with initial value 0
  // setCount is the function to update it
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
\`\`\`

## useState Syntax

\`\`\`js
// Syntax: const [stateVariable, setterFunction] = useState(initialValue);

// Different initial values
const [count, setCount] = useState(0);           // Number
const [name, setName] = useState('');            // String
const [isActive, setIsActive] = useState(false); // Boolean
const [items, setItems] = useState([]);          // Array
const [user, setUser] = useState(null);          // Null
const [settings, setSettings] = useState({       // Object
  theme: 'dark',
  language: 'en'
});

// Lazy initialization (for expensive calculations)
const [data, setData] = useState(() => {
  // This function only runs on first render
  return expensiveComputation();
});
\`\`\`

## Updating State

### Replacing State Value
\`\`\`js
function SimpleUpdates() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div>
      {/* Replace with new value */}
      <button onClick={() => setCount(10)}>Set to 10</button>
      
      {/* Replace with value from event */}
      <input 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      
      {/* Toggle boolean */}
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle
      </button>
      
      {/* Set based on condition */}
      <button onClick={() => setIsVisible(count > 5)}>
        Show if count > 5
      </button>
    </div>
  );
}
\`\`\`

### Updating Based on Previous State
When the new state depends on the previous state, use a function.

\`\`\`js
function Counter() {
  const [count, setCount] = useState(0);
  
  // ❌ Can be problematic with multiple updates
  const incrementWrong = () => {
    setCount(count + 1);
    setCount(count + 1); // Still uses same 'count' value!
  };
  
  // ✅ Use functional update for reliable updates
  const incrementRight = () => {
    setCount(prevCount => prevCount + 1);
    setCount(prevCount => prevCount + 1); // Works correctly!
  };
  
  // More examples of functional updates
  const decrement = () => {
    setCount(prev => prev - 1);
  };
  
  const double = () => {
    setCount(prev => prev * 2);
  };
  
  const reset = () => {
    setCount(0); // Direct value is fine when not depending on prev
  };
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementRight}>+1</button>
      <button onClick={decrement}>-1</button>
      <button onClick={double}>x2</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
\`\`\`

## Working with Objects in State

\`\`\`js
function UserProfile() {
  const [user, setUser] = useState({
    name: 'Alice',
    email: 'alice@example.com',
    age: 25,
    address: {
      city: 'New York',
      country: 'USA'
    }
  });
  
  // ❌ Don't mutate directly
  const updateNameWrong = () => {
    user.name = 'Bob'; // Mutation!
    setUser(user); // Won't trigger re-render properly
  };
  
  // ✅ Create a new object
  const updateName = (newName) => {
    setUser({
      ...user,
      name: newName
    });
  };
  
  // ✅ Update nested object
  const updateCity = (newCity) => {
    setUser({
      ...user,
      address: {
        ...user.address,
        city: newCity
      }
    });
  };
  
  // ✅ Update multiple fields
  const updateProfile = (updates) => {
    setUser(prevUser => ({
      ...prevUser,
      ...updates
    }));
  };
  
  // ✅ Remove a field (create new object without it)
  const removeAge = () => {
    const { age, ...userWithoutAge } = user;
    setUser(userWithoutAge);
  };
  
  return (
    <div>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>City: {user.address.city}</p>
      
      <input 
        value={user.name}
        onChange={(e) => updateName(e.target.value)}
      />
      
      <button onClick={() => updateCity('Los Angeles')}>
        Move to LA
      </button>
    </div>
  );
}
\`\`\`

## Working with Arrays in State

\`\`\`js
function TodoList() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', done: false },
    { id: 2, text: 'Build app', done: false }
  ]);
  
  // ✅ Add item
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      done: false
    };
    setTodos([...todos, newTodo]); // Add at end
    // Or: setTodos([newTodo, ...todos]); // Add at beginning
  };
  
  // ✅ Remove item
  const removeTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };
  
  // ✅ Update item
  const toggleTodo = (id) => {
    setTodos(todos.map(todo =>
      todo.id === id 
        ? { ...todo, done: !todo.done }
        : todo
    ));
  };
  
  // ✅ Update item text
  const updateTodoText = (id, newText) => {
    setTodos(todos.map(todo =>
      todo.id === id
        ? { ...todo, text: newText }
        : todo
    ));
  };
  
  // ✅ Insert at index
  const insertAt = (index, newTodo) => {
    setTodos([
      ...todos.slice(0, index),
      newTodo,
      ...todos.slice(index)
    ]);
  };
  
  // ✅ Replace item
  const replaceAt = (index, newTodo) => {
    setTodos(todos.map((todo, i) =>
      i === index ? newTodo : todo
    ));
  };
  
  // ✅ Reverse array
  const reverseTodos = () => {
    setTodos([...todos].reverse());
  };
  
  // ✅ Sort array
  const sortTodos = () => {
    setTodos([...todos].sort((a, b) => 
      a.text.localeCompare(b.text)
    ));
  };
  
  // ✅ Clear all
  const clearAll = () => {
    setTodos([]);
  };
  
  return (
    <div>
      {todos.map(todo => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => toggleTodo(todo.id)}
          />
          <span style={{ 
            textDecoration: todo.done ? 'line-through' : 'none' 
          }}>
            {todo.text}
          </span>
          <button onClick={() => removeTodo(todo.id)}>×</button>
        </div>
      ))}
    </div>
  );
}
\`\`\`

## Multiple State Variables

\`\`\`js
// Approach 1: Multiple useState calls (usually preferred)
function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  
  return (
    <form>
      <input 
        value={firstName}
        onChange={e => setFirstName(e.target.value)}
      />
      <input 
        value={lastName}
        onChange={e => setLastName(e.target.value)}
      />
      <input 
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
    </form>
  );
}

// Approach 2: Single state object (for related data)
function Form() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  return (
    <form>
      <input 
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
      />
      <input 
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
      />
      <input 
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
    </form>
  );
}
\`\`\`

## State Update Batching
React batches state updates for performance.

\`\`\`js
function BatchingExample() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  
  const handleClick = () => {
    // React batches these updates
    // Only ONE re-render happens
    setCount(c => c + 1);
    setFlag(f => !f);
    // Component re-renders once with both updates
  };
  
  console.log('Render'); // Logs once per click
  
  return (
    <div>
      <p>Count: {count}, Flag: {flag.toString()}</p>
      <button onClick={handleClick}>Update Both</button>
    </div>
  );
}

// React 18 also batches updates in async code
function AsyncBatching() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);
  
  const handleClick = () => {
    fetch('/api/data').then(() => {
      // In React 18, these are batched too!
      setCount(c => c + 1);
      setFlag(f => !f);
    });
    
    setTimeout(() => {
      // These are also batched in React 18
      setCount(c => c + 1);
      setFlag(f => !f);
    }, 1000);
  };
  
  return <button onClick={handleClick}>Fetch</button>;
}
\`\`\`

## State vs Props

\`\`\`js
/*
Props:
- Passed from parent
- Read-only (immutable)
- Parent controls the data
- Used to configure components

State:
- Managed within component
- Can be changed (mutable via setter)
- Component owns the data
- Used for dynamic, changing data
*/

// Example showing both
function ParentComponent() {
  const [username, setUsername] = useState('Alice');
  
  return (
    <ChildComponent 
      name={username}  // Passing state as prop
      onNameChange={setUsername}  // Passing setter as prop
    />
  );
}

function ChildComponent({ name, onNameChange }) {
  // name is a prop - read only
  // onNameChange is a prop - function to update parent's state
  
  // Can have its own local state too
  const [inputValue, setInputValue] = useState(name);
  
  const handleSubmit = () => {
    onNameChange(inputValue);  // Update parent's state
  };
  
  return (
    <div>
      <p>Current name: {name}</p>
      <input 
        value={inputValue}
        onChange={e => setInputValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Update Name</button>
    </div>
  );
}
\`\`\`

## Common Patterns

\`\`\`js
// Toggle pattern
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return (
    <button onClick={() => setIsOn(prev => !prev)}>
      {isOn ? 'ON' : 'OFF'}
    </button>
  );
}

// Counter with min/max
function BoundedCounter({ min = 0, max = 10 }) {
  const [count, setCount] = useState(min);
  
  const increment = () => {
    setCount(prev => Math.min(prev + 1, max));
  };
  
  const decrement = () => {
    setCount(prev => Math.max(prev - 1, min));
  };
  
  return (
    <div>
      <button onClick={decrement} disabled={count === min}>-</button>
      <span>{count}</span>
      <button onClick={increment} disabled={count === max}>+</button>
    </div>
  );
}

// Input with controlled value
function SearchInput() {
  const [query, setQuery] = useState('');
  
  const handleChange = (e) => {
    setQuery(e.target.value);
  };
  
  const handleClear = () => {
    setQuery('');
  };
  
  return (
    <div>
      <input 
        value={query}
        onChange={handleChange}
        placeholder="Search..."
      />
      {query && (
        <button onClick={handleClear}>Clear</button>
      )}
    </div>
  );
}

// Loading state
function DataFetcher() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  
  const fetchData = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const response = await fetch('/api/data');
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;
  
  return (
    <div>
      <button onClick={fetchData}>Fetch Data</button>
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}
\`\`\`

## Key Takeaways
- State allows components to have dynamic, changing data
- useState returns [currentValue, setterFunction]
- Always use the setter function, never mutate state directly
- Use functional updates when new state depends on previous state
- Create new objects/arrays when updating, don't mutate
- React batches state updates for performance
- State is private to each component instance
- Lifting state up allows sharing data between components`,
      language: 'javascript'
    },
    {
      id: 'events',
      title: 'Handling Events',
      content: `# Handling Events

## Event Handling Basics
React events use camelCase naming and pass functions as event handlers, not strings.

\`\`\`js
// HTML
<button onclick="handleClick()">Click</button>

// React
<button onClick={handleClick}>Click</button>
\`\`\`

## Basic Event Handlers

\`\`\`js
function EventExamples() {
  // Define handler function
  const handleClick = () => {
    console.log('Button clicked!');
  };
  
  // Handler with event object
  const handleClickWithEvent = (event) => {
    console.log('Event type:', event.type);
    console.log('Target:', event.target);
  };
  
  return (
    <div>
      {/* Reference function */}
      <button onClick={handleClick}>Click Me</button>
      
      {/* With event object */}
      <button onClick={handleClickWithEvent}>Click Me</button>
      
      {/* Inline arrow function */}
      <button onClick={() => console.log('Inline click')}>
        Inline
      </button>
      
      {/* Inline with event */}
      <button onClick={(e) => console.log(e.target)}>
        With Event
      </button>
    </div>
  );
}
\`\`\`

## Passing Arguments to Event Handlers

\`\`\`js
function ItemList() {
  const items = ['Apple', 'Banana', 'Cherry'];
  
  // Handler that needs an argument
  const handleDelete = (itemName) => {
    console.log('Deleting:', itemName);
  };
  
  // Handler with event AND argument
  const handleEdit = (itemName, event) => {
    console.log('Editing:', itemName);
    console.log('Button clicked:', event.target);
  };
  
  return (
    <ul>
      {items.map(item => (
        <li key={item}>
          {item}
          
          {/* Using arrow function to pass argument */}
          <button onClick={() => handleDelete(item)}>
            Delete
          </button>
          
          {/* Arrow function with event */}
          <button onClick={(e) => handleEdit(item, e)}>
            Edit
          </button>
          
          {/* Using bind (less common) */}
          <button onClick={handleDelete.bind(null, item)}>
            Delete (bind)
          </button>
        </li>
      ))}
    </ul>
  );
}

// Creating handlers in a loop
function TodoList({ todos, onToggle, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <li key={todo.id}>
          <input
            type="checkbox"
            checked={todo.done}
            onChange={() => onToggle(todo.id)}
          />
          {todo.text}
          <button onClick={() => onDelete(todo.id)}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
\`\`\`

## Common Events

### Mouse Events
\`\`\`js
function MouseEvents() {
  return (
    <div
      onClick={(e) => console.log('Click', e.clientX, e.clientY)}
      onDoubleClick={(e) => console.log('Double click')}
      onMouseEnter={(e) => console.log('Mouse enter')}
      onMouseLeave={(e) => console.log('Mouse leave')}
      onMouseMove={(e) => console.log('Mouse move', e.clientX)}
      onMouseDown={(e) => console.log('Mouse down')}
      onMouseUp={(e) => console.log('Mouse up')}
      onContextMenu={(e) => {
        e.preventDefault(); // Prevent right-click menu
        console.log('Right click');
      }}
    >
      Hover and click me
    </div>
  );
}
\`\`\`

### Keyboard Events
\`\`\`js
function KeyboardEvents() {
  const handleKeyDown = (e) => {
    console.log('Key pressed:', e.key);
    console.log('Key code:', e.keyCode);
    
    // Check for specific keys
    if (e.key === 'Enter') {
      console.log('Enter pressed!');
    }
    
    if (e.key === 'Escape') {
      console.log('Escape pressed!');
    }
    
    // Check for modifier keys
    if (e.ctrlKey && e.key === 's') {
      e.preventDefault(); // Prevent browser save
      console.log('Ctrl+S pressed!');
    }
    
    if (e.shiftKey) {
      console.log('Shift is held down');
    }
  };
  
  return (
    <input
      type="text"
      onKeyDown={handleKeyDown}
      onKeyUp={(e) => console.log('Key up:', e.key)}
      onKeyPress={(e) => console.log('Key press:', e.key)} // Deprecated
      placeholder="Type something..."
    />
  );
}
\`\`\`

### Form Events
\`\`\`js
function FormEvents() {
  const [value, setValue] = useState('');
  
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log('Form submitted:', value);
  };
  
  return (
    <form onSubmit={handleSubmit}>
      <input
        value={value}
        onChange={handleChange}
        onFocus={(e) => console.log('Input focused')}
        onBlur={(e) => console.log('Input blurred')}
      />
      
      <select onChange={(e) => console.log('Selected:', e.target.value)}>
        <option value="a">Option A</option>
        <option value="b">Option B</option>
      </select>
      
      <textarea
        onChange={(e) => console.log('Textarea:', e.target.value)}
        onInput={(e) => console.log('Input event')}
      />
      
      <button type="submit">Submit</button>
      <button type="reset" onReset={() => console.log('Form reset')}>
        Reset
      </button>
    </form>
  );
}
\`\`\`

### Focus Events
\`\`\`js
function FocusEvents() {
  return (
    <div
      onFocus={(e) => console.log('Focus in container')}
      onBlur={(e) => console.log('Blur in container')}
    >
      <input
        onFocus={(e) => {
          console.log('Input focused');
          e.target.style.borderColor = 'blue';
        }}
        onBlur={(e) => {
          console.log('Input blurred');
          e.target.style.borderColor = '';
        }}
      />
    </div>
  );
}
\`\`\`

### Drag Events
\`\`\`js
function DragEvents() {
  const [dragging, setDragging] = useState(false);
  
  const handleDragStart = (e) => {
    setDragging(true);
    e.dataTransfer.setData('text/plain', e.target.id);
  };
  
  const handleDragOver = (e) => {
    e.preventDefault(); // Required to allow drop
  };
  
  const handleDrop = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData('text/plain');
    console.log('Dropped item:', data);
    setDragging(false);
  };
  
  return (
    <div>
      <div
        id="draggable"
        draggable
        onDragStart={handleDragStart}
        onDragEnd={() => setDragging(false)}
        style={{ 
          opacity: dragging ? 0.5 : 1,
          cursor: 'grab'
        }}
      >
        Drag me
      </div>
      
      <div
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        onDragEnter={(e) => e.target.style.background = '#eee'}
        onDragLeave={(e) => e.target.style.background = ''}
        style={{ 
          border: '2px dashed gray',
          padding: '20px',
          marginTop: '20px'
        }}
      >
        Drop here
      </div>
    </div>
  );
}
\`\`\`

## Preventing Default Behavior

\`\`\`js
function PreventDefault() {
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission
    console.log('Form handled by JavaScript');
  };
  
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent navigation
    console.log('Link click handled');
  };
  
  const handleContextMenu = (e) => {
    e.preventDefault(); // Prevent right-click menu
    console.log('Custom context menu');
  };
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit">Submit</button>
      </form>
      
      <a href="https://google.com" onClick={handleLinkClick}>
        Click me (won't navigate)
      </a>
      
      <div onContextMenu={handleContextMenu}>
        Right-click me
      </div>
    </div>
  );
}
\`\`\`

## Stopping Event Propagation

\`\`\`js
function EventPropagation() {
  const handleOuterClick = () => {
    console.log('Outer div clicked');
  };
  
  const handleInnerClick = (e) => {
    e.stopPropagation(); // Prevents event from bubbling up
    console.log('Inner button clicked');
  };
  
  return (
    <div onClick={handleOuterClick} style={{ padding: '20px', background: '#eee' }}>
      <p>Click anywhere in this box</p>
      
      {/* Without stopPropagation, clicking button would also trigger outer click */}
      <button onClick={handleInnerClick}>
        Click me (won't trigger outer)
      </button>
      
      {/* This WILL trigger outer click */}
      <button onClick={() => console.log('Regular button')}>
        Regular button
      </button>
    </div>
  );
}
\`\`\`

## Event Object Properties

\`\`\`js
function EventProperties() {
  const handleClick = (e) => {
    // Target properties
    console.log('target:', e.target);              // Element that triggered event
    console.log('currentTarget:', e.currentTarget); // Element with handler
    console.log('type:', e.type);                  // Event type ('click')
    
    // Mouse position
    console.log('clientX:', e.clientX);  // X relative to viewport
    console.log('clientY:', e.clientY);  // Y relative to viewport
    console.log('pageX:', e.pageX);      // X relative to document
    console.log('pageY:', e.pageY);      // Y relative to document
    console.log('screenX:', e.screenX);  // X relative to screen
    console.log('screenY:', e.screenY);  // Y relative to screen
    
    // Modifier keys
    console.log('ctrlKey:', e.ctrlKey);
    console.log('shiftKey:', e.shiftKey);
    console.log('altKey:', e.altKey);
    console.log('metaKey:', e.metaKey);  // Cmd on Mac
    
    // Mouse button
    console.log('button:', e.button);  // 0=left, 1=middle, 2=right
    
    // Timestamps
    console.log('timeStamp:', e.timeStamp);
    
    // Prevent and stop
    // e.preventDefault();
    // e.stopPropagation();
  };
  
  return <button onClick={handleClick}>Click for event info</button>;
}
\`\`\`

## Synthetic Events
React wraps native events in SyntheticEvent for cross-browser compatibility.

\`\`\`js
function SyntheticEventExample() {
  const handleClick = (e) => {
    // SyntheticEvent
    console.log('Synthetic event:', e);
    
    // Access native event if needed
    console.log('Native event:', e.nativeEvent);
    
    // Event pooling note: In React 17+, events are not pooled
    // You can access event properties asynchronously
    setTimeout(() => {
      console.log('Event type (async):', e.type); // Works in React 17+
    }, 100);
    
    // If you need to use the event asynchronously in React <17:
    // e.persist(); // Not needed in React 17+
  };
  
  return <button onClick={handleClick}>Click me</button>;
}
\`\`\`

## Event Handler Best Practices

\`\`\`js
function BestPractices() {
  const [items, setItems] = useState(['a', 'b', 'c']);
  
  // ✅ Define handlers outside JSX for reuse and testing
  const handleItemClick = (item) => {
    console.log('Clicked:', item);
  };
  
  // ✅ Use useCallback for handlers passed to memoized children
  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item !== id));
  }, []);
  
  // ✅ Name handlers clearly with 'handle' prefix
  const handleSubmit = () => { /* ... */ };
  const handleInputChange = () => { /* ... */ };
  const handleModalClose = () => { /* ... */ };
  
  return (
    <div>
      {/* ✅ Pass function reference, not call result */}
      <button onClick={handleSubmit}>Submit</button>
      
      {/* ❌ This calls function immediately */}
      {/* <button onClick={handleSubmit()}>Submit</button> */}
      
      {/* ✅ Use arrow function when passing arguments */}
      {items.map(item => (
        <button 
          key={item}
          onClick={() => handleItemClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}
\`\`\`

## Key Takeaways
- React events use camelCase (onClick, onChange, onSubmit)
- Pass function references, not function calls
- Use arrow functions to pass arguments to handlers
- Use e.preventDefault() to prevent default browser behavior
- Use e.stopPropagation() to prevent event bubbling
- React uses SyntheticEvents for cross-browser compatibility
- Define handlers outside JSX for cleaner code
- Name handlers clearly with "handle" prefix`,
      language: 'javascript'
    },
    {
      id: 'conditional-rendering',
      title: 'Conditional Rendering',
      content: `# Conditional Rendering

## Overview
Conditional rendering in React lets you render different elements or components based on conditions. It works the same way as JavaScript conditions.

## Using if Statements

\`\`\`js
function Greeting({ isLoggedIn }) {
  // Early return pattern
  if (!isLoggedIn) {
    return <h1>Please log in</h1>;
  }
  
  return <h1>Welcome back!</h1>;
}

// Multiple conditions
function Dashboard({ user, isLoading, error }) {
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  if (error) {
    return <ErrorMessage message={error} />;
  }
  
  if (!user) {
    return <LoginPrompt />;
  }
  
  return <UserDashboard user={user} />;
}
\`\`\`

## Ternary Operator

\`\`\`js
function Greeting({ isLoggedIn }) {
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back!</h1>
      ) : (
        <h1>Please log in</h1>
      )}
    </div>
  );
}

// Inline ternary
function StatusBadge({ status }) {
  return (
    <span className={status === 'active' ? 'badge-green' : 'badge-red'}>
      {status === 'active' ? 'Active' : 'Inactive'}
    </span>
  );
}

// Nested ternary (use sparingly)
function UserRole({ role }) {
  return (
    <span>
      {role === 'admin' 
        ? 'Administrator' 
        : role === 'editor' 
          ? 'Editor' 
          : 'User'}
    </span>
  );
}

// Better alternative for multiple conditions
function UserRole({ role }) {
  const roleLabels = {
    admin: 'Administrator',
    editor: 'Editor',
    user: 'User'
  };
  
  return <span>{roleLabels[role] || 'Unknown'}</span>;
}
\`\`\`

## Logical AND (&&) Operator

\`\`\`js
function Notifications({ messages }) {
  return (
    <div>
      <h1>Dashboard</h1>
      
      {/* Renders only if condition is true */}
      {messages.length > 0 && (
        <NotificationBadge count={messages.length} />
      )}
      
      {/* Multiple conditions */}
      {isLoggedIn && isAdmin && (
        <AdminPanel />
      )}
      
      {/* Short message */}
      {hasError && <p className="error">Something went wrong</p>}
    </div>
  );
}

// ⚠️ GOTCHA: 0 will render!
function ItemCount({ count }) {
  return (
    <div>
      {/* ❌ If count is 0, it renders "0" */}
      {count && <span>{count} items</span>}
      
      {/* ✅ Explicit boolean conversion */}
      {count > 0 && <span>{count} items</span>}
      
      {/* ✅ Or use ternary */}
      {count ? <span>{count} items</span> : null}
    </div>
  );
}
\`\`\`

## Logical OR (||) Operator

\`\`\`js
function UserGreeting({ name }) {
  return (
    <div>
      {/* Shows fallback if name is falsy */}
      <h1>Hello, {name || 'Guest'}</h1>
    </div>
  );
}

// For null/undefined only, use nullish coalescing
function UserGreeting({ name }) {
  return (
    <div>
      {/* Only uses fallback for null/undefined */}
      <h1>Hello, {name ?? 'Guest'}</h1>
    </div>
  );
}
\`\`\`

## Null to Render Nothing

\`\`\`js
function WarningMessage({ warning }) {
  // Return null to render nothing
  if (!warning) {
    return null;
  }
  
  return <div className="warning">{warning}</div>;
}

// Using ternary
function Tooltip({ show, text }) {
  return show ? <div className="tooltip">{text}</div> : null;
}
\`\`\`

## Switch Statement Pattern

\`\`\`js
function StatusMessage({ status }) {
  // Using switch with component mapping
  const renderContent = () => {
    switch (status) {
      case 'loading':
        return <LoadingSpinner />;
      case 'success':
        return <SuccessMessage />;
      case 'error':
        return <ErrorMessage />;
      default:
        return <DefaultMessage />;
    }
  };
  
  return <div className="status">{renderContent()}</div>;
}

// Object mapping (often cleaner)
function StatusMessage({ status }) {
  const statusComponents = {
    loading: <LoadingSpinner />,
    success: <SuccessMessage />,
    error: <ErrorMessage />
  };
  
  return (
    <div className="status">
      {statusComponents[status] || <DefaultMessage />}
    </div>
  );
}

// With component references
function PageContent({ page }) {
  const pages = {
    home: HomePage,
    about: AboutPage,
    contact: ContactPage
  };
  
  const PageComponent = pages[page] || NotFoundPage;
  
  return <PageComponent />;
}
\`\`\`

## Conditional Attributes and Styles

\`\`\`js
function Button({ isDisabled, isLoading, isPrimary }) {
  return (
    <button
      // Conditional attribute
      disabled={isDisabled || isLoading}
      
      // Conditional className
      className={isPrimary ? 'btn btn-primary' : 'btn btn-secondary'}
      
      // Multiple conditional classes
      className={[
        'btn',
        isPrimary && 'btn-primary',
        isLoading && 'btn-loading',
        isDisabled && 'btn-disabled'
      ].filter(Boolean).join(' ')}
      
      // Conditional style
      style={{
        opacity: isDisabled ? 0.5 : 1,
        cursor: isDisabled ? 'not-allowed' : 'pointer'
      }}
    >
      {isLoading ? 'Loading...' : 'Submit'}
    </button>
  );
}

// Using a classnames utility (like 'classnames' package)
import cn from 'classnames';

function Button({ isPrimary, isLoading, isDisabled }) {
  return (
    <button
      className={cn('btn', {
        'btn-primary': isPrimary,
        'btn-loading': isLoading,
        'btn-disabled': isDisabled
      })}
    >
      Submit
    </button>
  );
}
\`\`\`

## Conditional Rendering with Lists

\`\`\`js
function TodoList({ todos, filter }) {
  // Filter items based on condition
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });
  
  return (
    <div>
      {/* Show message if empty */}
      {filteredTodos.length === 0 ? (
        <p>No items to display</p>
      ) : (
        <ul>
          {filteredTodos.map(todo => (
            <li key={todo.id}>
              {todo.text}
              {/* Conditional rendering within list items */}
              {todo.completed && <span>✓</span>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
\`\`\`

## Render Props Pattern for Conditional Rendering

\`\`\`js
// Reusable conditional component
function If({ condition, children, fallback = null }) {
  return condition ? children : fallback;
}

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  
  return (
    <div>
      <If condition={isLoggedIn} fallback={<LoginButton />}>
        <UserProfile />
        <LogoutButton />
      </If>
    </div>
  );
}

// Show/Hide component
function Show({ when, children }) {
  return when ? children : null;
}

function App() {
  const [showDetails, setShowDetails] = useState(false);
  
  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        Toggle Details
      </button>
      <Show when={showDetails}>
        <Details />
      </Show>
    </div>
  );
}
\`\`\`

## Preventing Component Rendering

\`\`\`js
function Parent({ shouldRender }) {
  return (
    <div>
      {/* Component won't be created if condition is false */}
      {shouldRender && <ExpensiveComponent />}
    </div>
  );
}

// Using CSS to hide (component still exists in DOM)
function VisibilityToggle({ isVisible, children }) {
  return (
    <div style={{ display: isVisible ? 'block' : 'none' }}>
      {children}
    </div>
  );
}

// Difference:
// - Conditional rendering: Component unmounts, state is lost
// - CSS hiding: Component stays mounted, state is preserved
\`\`\`

## Common Patterns

\`\`\`js
// Loading, Error, Data pattern
function DataDisplay({ data, isLoading, error }) {
  if (isLoading) return <Spinner />;
  if (error) return <Error message={error} />;
  if (!data) return <Empty />;
  
  return <DataContent data={data} />;
}

// Authentication guard
function ProtectedRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }
  return children;
}

// Feature flag
function Feature({ name, children }) {
  const features = useFeatureFlags();
  
  if (!features[name]) {
    return null;
  }
  
  return children;
}
\`\`\`

## Key Takeaways
- Use if/else for complex conditions or early returns
- Use ternary operator for inline if-else
- Use && for rendering something or nothing
- Be careful with && and falsy values like 0
- Return null to render nothing
- Use object mapping instead of long switch statements
- Consider readability when choosing a pattern
- Remember that conditional rendering unmounts components`,
      language: 'javascript'
    }
  ]
    }
]
