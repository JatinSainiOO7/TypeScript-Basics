import React from 'react';
import '../styles/main.scss';
import Navbar from '../components/navbar';
const ChapterOne: React.FC = () => {
    return (
       <>
       <Navbar/>
       <div className="chapter-container">
            <h1 className="chapter-title">Introduction to TypeScript</h1>
            <section className="chapter-content">
                <h2>What is TypeScript?</h2>
                <p>
                    TypeScript is an open-source programming language developed and maintained by Microsoft. It is a
                    <strong> strict syntactical superset of JavaScript</strong> that adds optional static typing to the language. This means that all valid JavaScript code is also valid TypeScript, but TypeScript enhances JavaScript by providing a type system.
                </p>
                <p>
                    In essence, TypeScript improves the development experience by adding powerful features like:
                </p>
                <ul>
                    <li>Static Typing</li>
                    <li>Generics</li>
                    <li>Interfaces</li>
                    <li>Enums</li>
                    <li>Type Inference</li>
                </ul>

                <h2>Why TypeScript?</h2>
                <p>
                    JavaScript is a dynamic language, which is both its strength and its limitation. Dynamically typed code can lead to unforeseen bugs and make code harder to maintain. TypeScript addresses these concerns by introducing a type system that allows developers to declare types explicitly. This brings several benefits:
                </p>
                <ul>
                    <li><strong>Static Typing:</strong> TypeScript’s type system ensures that the code adheres to the types specified during development, reducing bugs, especially in large codebases.</li>
                    <li><strong>Improved Tooling:</strong> TypeScript enhances development environments with features such as code completion, intelligent refactoring, type checking, and error reporting before runtime.</li>
                    <li><strong>Code Readability and Maintainability:</strong> Static typing forces developers to write more self-documenting code.</li>
                    <li><strong>Large-Scale Applications:</strong> TypeScript is particularly beneficial for teams working on large-scale projects.</li>
                </ul>

                <h2>Key Features of TypeScript</h2>
                <p>TypeScript introduces several key features that enhance JavaScript:</p>
                <ul>
                    <li>
                        <strong>Static Typing:</strong> You can define types for variables, function parameters, return values, and more.
                        <pre>{`let message: string = 'Hello, TypeScript';`}</pre>
                    </li>
                    <li>
                        <strong>Interfaces:</strong> Define contracts for objects, enforcing their structure.
                        <pre>{`interface Person { name: string; age: number; }`}</pre>
                    </li>
                    <li>
                        <strong>Type Inference:</strong> TypeScript can infer types based on the value assigned.
                        <pre>{`let inferredMessage = 'Hello';  // TypeScript infers this as a string`}</pre>
                    </li>
                    <li>
                        <strong>Generics:</strong> Allows writing reusable code that works with various types.
                        <pre>{`function identity<T>(arg: T): T { return arg; }`}</pre>
                    </li>
                    <li>
                        <strong>Enums:</strong> Define a set of named constants for easier management.
                        <pre>{`enum Direction { Up, Down, Left, Right }`}</pre>
                    </li>
                </ul>

                <h2>Setting Up TypeScript</h2>
                <p>
                    To use TypeScript, you first need to set up a development environment. Follow these steps to install and configure TypeScript:
                </p>
                <ol>
                    <li>
                        <strong>Install Node.js and npm:</strong> TypeScript requires Node.js and npm. Download them from <a href="https://nodejs.org/" target="_blank" rel="noopener noreferrer">nodejs.org</a>.
                    </li>
                    <li>
                        <strong>Install TypeScript:</strong> Use npm to install TypeScript globally.
                        <pre>{`npm install -g typescript`}</pre>
                    </li>
                    <li>
                        <strong>Compiling TypeScript:</strong> TypeScript files have a .ts extension. Use the TypeScript compiler to compile them to JavaScript.
                        <pre>{`tsc file.ts`}</pre>
                    </li>
                    <li>
                        <strong>Create tsconfig.json:</strong> Initialize the configuration file for TypeScript projects.
                        <pre>{`tsc --init`}</pre>
                    </li>
                </ol>

                <h2>Basic TypeScript Example</h2>
                <pre>
                    {`// TypeScript code
function add(a: number, b: number): number {
  return a + b;
}

let result = add(5, 10);  // Works perfectly
// let result = add(5, '10');  // Error: Argument of type 'string' is not assignable to parameter of type 'number'.`}
                </pre>

                <h2>TypeScript vs JavaScript</h2>
                <p>
                    TypeScript differs from JavaScript in key areas:
                </p>
                <table>
                    <thead>
                        <tr>
                            <th>Feature</th>
                            <th>JavaScript</th>
                            <th>TypeScript</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Typing</td>
                            <td>Dynamic typing</td>
                            <td>Static typing</td>
                        </tr>
                        <tr>
                            <td>Tooling</td>
                            <td>Basic IDE support</td>
                            <td>Enhanced IDE features</td>
                        </tr>
                        <tr>
                            <td>Errors</td>
                            <td>Runtime errors</td>
                            <td>Compile-time errors</td>
                        </tr>
                    </tbody>
                </table>

                <h2>Learning TypeScript</h2>
                <p>To learn TypeScript:</p>
                <ul>
                    <li>Master JavaScript first, as TypeScript builds on JavaScript.</li>
                    <li>Focus on understanding the type system.</li>
                    <li>Explore advanced features like generics, decorators, and modules.</li>
                </ul>

                <h2>Conclusion</h2>
                <p>
                    TypeScript enhances JavaScript by adding static typing, making it more reliable for large-scale applications. It has become a go-to choice for modern JavaScript development, offering better tooling, error checking, and a more structured development approach.
                </p>
            </section>
        </div>
       </>
    );
};

export default ChapterOne;
