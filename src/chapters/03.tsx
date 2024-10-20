import React from 'react';
import '../styles/main.scss';

import Navbar from '../components/navbar';

const ChapterThree: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="chapter-container">
                <h1 className="chapter-title">Chapter 3: Advanced TypeScript Features</h1>
                <section className="chapter-content">
                    <h2>Introduction to Advanced TypeScript Features</h2>
                    <p>
                        TypeScript provides a robust set of features that enable developers to write highly maintainable and scalable code. In this chapter, we will delve into some advanced concepts such as decorators, modules, namespaces, and advanced generics. We will also explore how to use TypeScript with third-party libraries and tools.
                    </p>

                    <h2>Decorators</h2>
                    <p>
                        Decorators are a powerful feature in TypeScript that allow you to modify the behavior of classes, methods, properties, or parameters at design time. They are similar to annotations in other programming languages like Java.
                    </p>

                    <h3>What are Decorators?</h3>
                    <p>
                        Decorators are special functions prefixed with <code>@</code> that can be applied to classes, methods, or properties. They allow you to add additional functionality, modify behavior, or apply metadata.
                    </p>

                    <h3>Using Decorators</h3>
                    <p>
                        To enable decorators in TypeScript, you need to set the <code>experimentalDecorators</code> option in your <code>tsconfig.json</code> file:
                    </p>
                    <pre>{`{
  "compilerOptions": {
    "experimentalDecorators": true,
    "target": "ES6",
    "module": "commonjs"
  }
}`}</pre>

                    <h4>Class Decorators</h4>
                    <p>
                        A class decorator is applied to the constructor of the class. It can be used to modify the class definition.
                    </p>
                    <pre>{`function LogClass(constructor: Function) {
  console.log('Class created:', constructor.name);
}

@LogClass
class Person {
  constructor(public name: string) {}
}

const person = new Person('Alice');`}</pre>

                    <h4>Method Decorators</h4>
                    <p>
                        Method decorators are used to modify the behavior of class methods.
                    </p>
                    <pre>{`function LogMethod(target: any, propertyName: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(\`Calling \${propertyName} with args: \${JSON.stringify(args)}\`);
    return originalMethod.apply(this, args);
  };
}

class Calculator {
  @LogMethod
  add(a: number, b: number) {
    return a + b;
  }
}

const calculator = new Calculator();
calculator.add(5, 10);`}</pre>

                    <h4>Property Decorators</h4>
                    <p>
                        Property decorators can be used to modify properties of a class.
                    </p>
                    <pre>{`function LogProperty(target: any, propertyName: string) {
  console.log(\`Property \${propertyName} is defined\`);
}

class User {
  @LogProperty
  public username: string;

  constructor(username: string) {
    this.username = username;
  }
}

const user = new User('JohnDoe');`}</pre>

                    <h2>Modules in TypeScript</h2>
                    <p>
                        Modules in TypeScript help organize code into separate files and namespaces, making it easier to manage large codebases. TypeScript supports both ES6-style modules and CommonJS-style modules.
                    </p>

                    <h3>Creating Modules</h3>
                    <p>
                        To create a module, simply use the <code>export</code> keyword to export variables, functions, or classes. You can then import them using the <code>import</code> keyword in another file.
                    </p>
                    <pre>{`// math.ts
export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}

// main.ts
import { add, subtract } from './math';

console.log(add(5, 10));  // Output: 15
console.log(subtract(10, 5));  // Output: 5`}</pre>

                    <h3>Namespace</h3>
                    <p>
                        Namespaces are a way to group related code together. They can help prevent naming collisions and organize your code logically.
                    </p>
                    <pre>{`namespace Geometry {
  export function areaOfCircle(radius: number): number {
    return Math.PI * radius * radius;
  }
}

console.log(Geometry.areaOfCircle(5));  // Output: 78.53981633974483`}</pre>

                    <h2>Advanced Generics</h2>
                    <p>
                        Generics allow for more flexible code by enabling types to be defined as parameters. In this section, we will explore more advanced uses of generics in TypeScript.
                    </p>

                    <h3>Generic Constraints</h3>
                    <p>
                        You can restrict the types that can be used with generics by using constraints. This allows you to enforce that the type passed in adheres to a specific interface or class.
                    </p>
                    <pre>{`interface Lengthwise {
  length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
  console.log(item.length);
}

logLength('Hello');  // Output: 5
logLength([1, 2, 3]);  // Output: 3`}</pre>

                    <h3>Using Multiple Type Parameters</h3>
                    <p>
                        Generics can take multiple type parameters, allowing for even more flexibility.
                    </p>
                    <pre>{`function merge<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const merged = merge({ name: 'Alice' }, { age: 30 });
console.log(merged);  // Output: { name: 'Alice', age: 30 }`}</pre>

                    <h2>Type Inference with Generics</h2>
                    <p>
                        TypeScript can often infer the type parameters when calling a generic function. You don't always need to explicitly define the types when calling functions that use generics.
                    </p>
                    <pre>{`function identity<T>(value: T): T {
  return value;
}

let stringIdentity = identity('Hello');  // inferred as string
let numberIdentity = identity(42);  // inferred as number`}</pre>

                    <h2>Working with Third-Party Libraries</h2>
                    <p>
                        TypeScript allows you to integrate with third-party libraries easily. However, many libraries may not have TypeScript definitions out of the box. In this section, we will explore how to use third-party libraries in TypeScript.
                    </p>

                    <h3>Installing Type Definitions</h3>
                    <p>
                        Many popular libraries have corresponding type definitions available via DefinitelyTyped. You can install these definitions using npm or yarn.
                    </p>
                    <pre>{`npm install --save-dev @types/lodash`}</pre>

                    <h3>Using Libraries Without Type Definitions</h3>
                    <p>
                        If a library does not have type definitions, you can declare a module for it yourself. This allows you to use the library with TypeScript while providing minimal type safety.
                    </p>
                    <pre>{`declare module 'my-library' {
  export function myFunction(input: string): number;
}`}</pre>

                    <h2>Mixins in TypeScript</h2>
                    <p>
                        Mixins are a way to create reusable components of behavior that can be applied to multiple classes. TypeScript allows you to define mixins using a combination of classes and interfaces.
                    </p>

                    <h3>Creating a Mixin</h3>
                    <p>
                        You can create a mixin by defining a function that takes a base class as an argument and returns a new class that extends it.
                    </p>
                    <pre>{`function Loggable<T extends new (...args: any[]) => {}>(Base: T) {
  return class extends Base {
    log() {
      console.log(this);
    }
  };
}

class User {
  constructor(public name: string) {}
}

const LoggableUser = Loggable(User);

const user = new LoggableUser('Alice');
user.log();  // Output: LoggableUser { name: 'Alice' }`}</pre>

                    <h2>TypeScript with React</h2>
                    <p>
                        TypeScript integrates well with React, providing strong typing for props, state, and hooks. This section will cover best practices for using TypeScript in React applications.
                    </p>

                    <h3>Typing Props in Functional Components</h3>
                    <p>
                        When creating a functional component, you can define the types for the props by using TypeScript interfaces or types.
                    </p>
                    <pre>{`interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};`}</pre>

                    <h3>Using Generics with React Components</h3>
                    <p>
                        You can also use generics with React components to create reusable components that accept various prop types.
                    </p>
                    <pre>{`interface ListProps<T> {
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}

const List = <T,>({ items, renderItem }: ListProps<T>) => {
  return <ul>{items.map(renderItem)}</ul>;
};`}</pre>

                    <h2>Conclusion</h2>
                    <p>
                        In this chapter, we explored advanced TypeScript features that can enhance your coding experience and help you write better, more maintainable code. From decorators to generics, and from modules to mixins, these concepts provide powerful tools for building complex applications. Understanding these features will help you leverage the full potential of TypeScript in your projects.
                    </p>
                </section>
            </div>
        </>
    );
};

export default ChapterThree;
