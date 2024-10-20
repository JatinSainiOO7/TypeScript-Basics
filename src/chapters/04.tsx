import React from 'react';
import '../styles/main.scss';
import Navbar from '../components/navbar';

const ChapterFour: React.FC = () => {
    return (
        <>
            <Navbar />
            <div className="chapter-container">
                <h1 className="chapter-title">Chapter 4: Generics and Interfaces</h1>
                <section className="chapter-content">
                    <h2 className="section-title">Introduction to Generics and Interfaces</h2>
                    <p className="section-paragraph">
                        In this chapter, we will explore two important concepts in TypeScript: generics and interfaces. 
                        Understanding these concepts is crucial for writing flexible and type-safe code. 
                        We will cover the basics of interfaces, how to define and implement them, and the power of generics in creating reusable components.
                    </p>

                    <h2 className="section-title">Interfaces</h2>
                    <p className="section-paragraph">
                        Interfaces in TypeScript are used to define the structure of an object. 
                        They allow you to enforce that certain properties and methods are present in an object, making your code more predictable and easier to maintain. 
                        Interfaces are not only useful for defining object shapes but also for enforcing contracts in your code.
                    </p>

                    <h3 className="subsection-title">Defining an Interface</h3>
                    <p className="section-paragraph">
                        You can define an interface using the <code className="code-inline">interface</code> keyword. 
                        Here's a simple example:
                    </p>
                    <pre className="code-block">{`interface Person {
    name: string;
    age: number;
}

const user: Person = {
    name: 'Alice',
    age: 30,
};`}</pre>

                    <h3 className="subsection-title">Optional Properties</h3>
                    <p className="section-paragraph">
                        You can define optional properties in an interface using the <code className="code-inline">?</code> operator. 
                        This allows for more flexible object structures, accommodating scenarios where certain properties might not always be provided:
                    </p>
                    <pre className="code-block">{`interface User {
    username: string;
    email?: string; // Optional property
}

const user: User = {
    username: 'JohnDoe',
};`}</pre>

                    <h3 className="subsection-title">ReadOnly Properties</h3>
                    <p className="section-paragraph">
                        If you want to make a property read-only, you can use the <code className="code-inline">readonly</code> modifier. 
                        This ensures that once a property is set, it cannot be changed:
                    </p>
                    <pre className="code-block">{`interface Book {
    readonly title: string;
    author: string;
}

const book: Book = {
    title: '1984',
    author: 'George Orwell',
};

// book.title = 'Animal Farm'; // Error: Cannot assign to 'title' because it is a read-only property.`}</pre>

                    <h3 className="subsection-title">Function Types in Interfaces</h3>
                    <p className="section-paragraph">
                        Interfaces can also define function types. This is useful when you want to specify the shape of a function:
                    </p>
                    <pre className="code-block">{`interface Operation {
    (x: number, y: number): number;
}

const add: Operation = (x, y) => x + y;
const subtract: Operation = (x, y) => x - y;

console.log(add(5, 3)); // Output: 8
console.log(subtract(5, 3)); // Output: 2`}</pre>

                    <h3 className="subsection-title">Extending Interfaces</h3>
                    <p className="section-paragraph">
                        You can extend interfaces to create a new interface that inherits properties from one or more existing interfaces. 
                        This promotes reusability and a cleaner code structure:
                    </p>
                    <pre className="code-block">{`interface Animal {
    name: string;
}

interface Dog extends Animal {
    breed: string;
}

const dog: Dog = {
    name: 'Buddy',
    breed: 'Golden Retriever',
};`}</pre>

                    <h2 className="section-title">Generics</h2>
                    <p className="section-paragraph">
                        Generics allow you to create components that can work with any data type, providing flexibility while maintaining type safety. 
                        They enable you to define functions, classes, and interfaces with type parameters, making your code more reusable and adaptable to different data types.
                    </p>

                    <h3 className="subsection-title">Defining a Generic Function</h3>
                    <p className="section-paragraph">
                        You can define a generic function by adding a type parameter within angle brackets. This allows the function to accept arguments of various types:
                    </p>
                    <pre className="code-block">{`function identity<T>(arg: T): T {
    return arg;
}

const strIdentity = identity<string>('Hello'); // inferred as string
const numIdentity = identity<number>(42); // inferred as number`}</pre>

                    <h3 className="subsection-title">Using Generics with Interfaces</h3>
                    <p className="section-paragraph">
                        You can also use generics with interfaces to define structures that work with multiple types. This allows for greater flexibility and reusability:
                    </p>
                    <pre className="code-block">{`interface Container<T> {
    value: T;
}

const stringContainer: Container<string> = { value: 'Hello' };
const numberContainer: Container<number> = { value: 42 };`}</pre>

                    <h3 className="subsection-title">Generic Constraints</h3>
                    <p className="section-paragraph">
                        Sometimes, you may want to restrict the types that can be used with generics. 
                        This can be achieved using constraints. For example, you can enforce that a type must have certain properties:
                    </p>
                    <pre className="code-block">{`interface Lengthwise {
    length: number;
}

function logLength<T extends Lengthwise>(item: T): void {
    console.log(item.length);
}

logLength('Hello'); // Output: 5
logLength([1, 2, 3]); // Output: 3`}</pre>

                    <h3 className="subsection-title">Using Multiple Type Parameters</h3>
                    <p className="section-paragraph">
                        Generics can take multiple type parameters, allowing for even more flexibility. This is especially useful when you need to work with more than one type:
                    </p>
                    <pre className="code-block">{`function merge<T, U>(obj1: T, obj2: U): T & U {
    return { ...obj1, ...obj2 };
}

const merged = merge({ name: 'Alice' }, { age: 30 });
console.log(merged); // Output: { name: 'Alice', age: 30 }`}</pre>

                    <h3 className="subsection-title">Default Type Parameters</h3>
                    <p className="section-paragraph">
                        TypeScript allows you to specify default types for your type parameters, which can be useful in certain scenarios:
                    </p>
                    <pre className="code-block">{`function createArray<T = number>(length: number): T[] {
    return new Array<T>(length);
}

const numArray = createArray(5); // inferred as number[]
const strArray = createArray<string>(5); // explicitly specified as string[]`}</pre>

                    <h2 className="section-title">Combining Interfaces and Generics</h2>
                    <p className="section-paragraph">
                        You can combine interfaces and generics to create powerful data structures. 
                        This allows for more complex and reusable code:
                    </p>
                    <pre className="code-block">{`interface Response<T> {
    data: T;
    error?: string;
}

const response: Response<number[]> = {
    data: [1, 2, 3],
};

const errorResponse: Response<string> = {
    error: 'Not found',
};`}</pre>

                    <h3 className="subsection-title">Generic Classes</h3>
                    <p className="section-paragraph">
                        Generics can also be used with classes. This allows you to create class definitions that can handle a variety of data types:
                    </p>
                    <pre className="code-block">{`class GenericBox<T> {
    private items: T[] = [];

    add(item: T): void {
        this.items.push(item);
    }

    getItems(): T[] {
        return this.items;
    }
}

const numberBox = new GenericBox<number>();
numberBox.add(1);
numberBox.add(2);
console.log(numberBox.getItems()); // Output: [1, 2]

const stringBox = new GenericBox<string>();
stringBox.add('Hello');
stringBox.add('World');
console.log(stringBox.getItems()); // Output: ['Hello', 'World']`}</pre>

                    <h3 className="subsection-title">Using Generics in React Components</h3>
                    <p className="section-paragraph">
                        Generics are also powerful in the context of React components. You can create generic components to handle various data types and provide type safety:
                    </p>
                    <pre className="code-block">{`interface ListProps<T> {
    items: T[];
    renderItem: (item: T) => React.ReactNode;
}

function List<T>({ items, renderItem }: ListProps<T>): JSX.Element {
    return (
        <ul>
            {items.map((item, index) => (
                <li key={index}>{renderItem(item)}</li>
            ))}
        </ul>
    );
}

// Usage
const numberList = [1, 2, 3];
const renderedNumberList = <List items={numberList} renderItem={(item) => <span>{item}</span>} />;

const stringList = ['Apple', 'Banana', 'Cherry'];
const renderedStringList = <List items={stringList} renderItem={(item) => <strong>{item}</strong>} />;`}</pre>

                    <h2 className="section-title">Conclusion</h2>
                    <p className="section-paragraph">
                        In this chapter, we explored the concepts of generics and interfaces in TypeScript. 
                        Understanding these features will enable you to write flexible, reusable, and type-safe code. 
                        As you build more complex applications, mastering generics and interfaces will be invaluable. 
                        These concepts not only improve code maintainability but also empower developers to create libraries and frameworks that can cater to a wide variety of use cases.
                    </p>
                </section>
            </div>
        </>
    );
};

export default ChapterFour;
