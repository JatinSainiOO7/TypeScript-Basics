import React from 'react';
import '../styles/main.scss';
import Navbar from '../components/navbar';

const ChapterTwo: React.FC = () => {
  return (
    <>
      <Navbar />
      <div className="chapter-container">
        <h1 className="chapter-title">Chapter 2: TypeScript's Type System</h1>
        <section className="chapter-content">
          <h2>Introduction to TypeScript's Type System</h2>
          <p>
            TypeScript is a statically typed superset of JavaScript, meaning that it adds optional static types to JavaScript. One of its core features is its powerful type system, which ensures that your code is more predictable and easier to debug by catching errors at compile time. In this chapter, we will explore the fundamentals of TypeScript's type system and some advanced features that enable TypeScript to be one of the most powerful tools for JavaScript developers.
          </p>

          <h2>Basic Types in TypeScript</h2>
          <p>
            Just like in JavaScript, TypeScript includes a set of primitive data types such as <strong>string</strong>, <strong>number</strong>, <strong>boolean</strong>, and <strong>null</strong>. What makes TypeScript different is that you can explicitly declare types, ensuring that values adhere to the expected data type.
          </p>

          <ul>
            <li>
              <strong>String:</strong> Text values are represented as strings.
              <pre>{`let greeting: string = 'Hello, TypeScript';`}</pre>
            </li>
            <li>
              <strong>Number:</strong> Both integers and floating-point numbers are treated as number types.
              <pre>{`let age: number = 30;`}</pre>
            </li>
            <li>
              <strong>Boolean:</strong> Logical values, true or false.
              <pre>{`let isValid: boolean = true;`}</pre>
            </li>
            <li>
              <strong>Array:</strong> Arrays can hold multiple values of the same type.
              <pre>{`let numbers: number[] = [1, 2, 3, 4];`}</pre>
            </li>
            <li>
              <strong>Tuple:</strong> A tuple allows you to specify an array with a fixed number of elements, each with a specific type.
              <pre>{`let tuple: [string, number] = ['Alice', 25];`}</pre>
            </li>
            <li>
              <strong>Enum:</strong> Enums allow you to define a set of named constants.
              <pre>{`enum Direction { Up, Down, Left, Right }
let dir: Direction = Direction.Left;`}</pre>
            </li>
            <li>
              <strong>Any:</strong> A type that disables type checking, allowing any type of value.
              <pre>{`let randomValue: any = 'This could be anything';`}</pre>
            </li>
            <li>
              <strong>Void:</strong> Usually used to denote the absence of a return value, especially for functions.
              <pre>{`function logMessage(): void { console.log('Logging message'); }`}</pre>
            </li>
          </ul>

          <h2>Type Annotations and Type Inference</h2>
          <p>
            TypeScript lets you annotate variables, parameters, and function return types, providing explicit type definitions. However, when you don't explicitly define a type, TypeScript infers the type based on the initial assignment.
          </p>

          <h3>Type Annotations</h3>
          <pre>
            {`let message: string = 'TypeScript is awesome!';

function greet(name: string): string {
  return 'Hello, ' + name;
}`}
          </pre>

          <h3>Type Inference</h3>
          <p>
            Type inference is when TypeScript automatically infers the type based on the initial value assigned to a variable. For example, if you initialize a variable with a string, TypeScript automatically knows it's a string and restricts it to that type.
          </p>
          <pre>{`let username = 'John';  // Inferred as string
let score = 100;  // Inferred as number
// username = 42;  // Error: Type 'number' is not assignable to type 'string'`}</pre>

          <h2>Union and Intersection Types</h2>
          <h3>Union Types</h3>
          <p>
            A union type allows you to define a variable that can hold more than one type. This is useful when you want to provide flexibility but still maintain type safety.
          </p>
          <pre>{`let identifier: string | number;
identifier = 'abc123';  // valid
identifier = 123;  // also valid`}</pre>

          <h3>Intersection Types</h3>
          <p>
            Intersection types combine multiple types into one. This is particularly useful when you need to create a new type that has all the properties of other types.
          </p>
          <pre>{`interface User {
  name: string;
  age: number;
}

interface Admin {
  role: string;
}

type AdminUser = User & Admin;

let admin: AdminUser = {
  name: 'Alice',
  age: 30,
  role: 'Admin'
};`}</pre>

          <h2>Type Aliases</h2>
          <p>
            Type aliases are a way to give a name to any type. This can make your code cleaner and easier to read, especially when using complex types like union types or intersections.
          </p>
          <pre>{`type StringOrNumber = string | number;
let id: StringOrNumber = '123';
id = 123;  // valid`}</pre>

          <h2>Interfaces in TypeScript</h2>
          <p>
            An interface in TypeScript is a way to define the shape of an object. It enforces the presence of specific properties and their respective types, making it easier to structure objects predictably.
          </p>

          <pre>
            {`interface Car {
  brand: string;
  model: string;
  year: number;
}

let myCar: Car = {
  brand: 'Tesla',
  model: 'Model 3',
  year: 2021
};`}
          </pre>

          <p>
            Interfaces can also extend other interfaces, inheriting properties and adding additional ones. This is useful when dealing with more complex object structures.
          </p>

          <pre>{`interface ElectricCar extends Car {
  batteryCapacity: number;
}

let tesla: ElectricCar = {
  brand: 'Tesla',
  model: 'Model S',
  year: 2022,
  batteryCapacity: 100
};`}</pre>

          <h2>Generics in TypeScript</h2>
          <p>
            Generics allow you to create reusable code components that can work with any type. This is particularly useful in functions, classes, or interfaces that need to be flexible and work across a range of types.
          </p>

          <h3>Generic Functions</h3>
          <p>
            A generic function works with any type, but maintains type safety. You define a type parameter <code>&lt;T&gt;</code> that allows the function to handle multiple types while preserving the type information.
          </p>
          <pre>{`function identity<T>(value: T): T {
  return value;
}

let stringIdentity = identity<string>('Hello');
let numberIdentity = identity<number>(42);`}</pre>

          <h3>Generic Interfaces</h3>
          <p>
            Generics can also be applied to interfaces, allowing you to define flexible object structures.
          </p>

          <pre>{`interface Box<T> {
  content: T;
}

let stringBox: Box<string> = { content: 'This is a string' };
let numberBox: Box<number> = { content: 100 };`}</pre>

          <h2>Advanced Types: Type Assertions</h2>
          <p>
            Type assertions allow you to tell TypeScript the specific type of a variable when TypeScript cannot infer it correctly. This is often necessary when dealing with DOM elements or when migrating JavaScript codebases to TypeScript.
          </p>

          <pre>{`let someValue: any = 'Hello, TypeScript';
let strLength: number = (someValue as string).length;`}</pre>

          <p>
            Type assertions are not the same as type casting found in other languages. They simply inform TypeScript that the developer knows more about the type than the compiler can infer.
          </p>

          <h2>Type Guards</h2>
          <p>
            Type guards are functions or constructs that help TypeScript narrow down types at runtime. They are useful when working with union types and when you want to ensure that certain operations are only performed on specific types.
          </p>

          <pre>{`function isNumber(value: any): value is number {
  return typeof value === 'number';
}

function processValue(value: string | number) {
  if (isNumber(value)) {
    console.log('It is a number:', value * 2);
  } else {
    console.log('It is a string:', value.toUpperCase());
  }
}`}</pre>

          <h2>Mapped Types</h2>
          <p>
            Mapped types allow you to create new types by transforming existing types. This is useful when you want to dynamically create types based on existing ones.
          </p>

          <pre>{`type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface User {
  name: string;
  age: number;
}

const user: Readonly<User> = { name: 'Alice', age: 30 };
// user.name = 'Bob';  // Error: Cannot assign to 'name' because it is a read-only property`}</pre>

          <h2>Utility Types</h2>
          <p>
            TypeScript provides several built-in utility types to help manipulate types in more complex ways. Some commonly used utility types include:
          </p>
          <ul>
            <li><strong>Partial&lt;T&gt;:</strong> Makes all properties of a type optional.</li>
            <li><strong>Readonly&lt;T&gt;:</strong> Makes all properties of a type read-only.</li>
            <li><strong>Pick&lt;T, K&gt;:</strong> Creates a new type by picking specific properties from an existing type.</li>
            <li><strong>Omit&lt;T, K&gt;:</strong> Creates a new type by omitting specific properties from an existing type.</li>
          </ul>

          <pre>{`type PartialUser = Partial<User>;
let partialUser: PartialUser = { name: 'Alice' };

type ReadonlyUser = Readonly<User>;
let readonlyUser: ReadonlyUser = { name: 'Bob', age: 35 };`}</pre>

          <h2>Conditional Types</h2>
          <p>
            Conditional types allow you to define types based on a condition. This can be especially powerful when dealing with advanced type transformations.
          </p>

          <pre>{`type IsString<T> = T extends string ? 'Yes' : 'No';

type Test1 = IsString<string>;  // 'Yes'
type Test2 = IsString<number>;  // 'No'`}</pre>

          <h2>Conclusion</h2>
          <p>
            In this chapter, we've covered a wide range of TypeScript's type system features, from basic types to more advanced features like generics, type guards, and mapped types. Mastering these concepts will help you write more robust, maintainable, and scalable code.
          </p>
        </section>
      </div>
    </>
  );
};

export default ChapterTwo;
