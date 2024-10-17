import React from 'react';
import '../styles/main.scss';
import { Link } from 'react-router-dom';

import Navbar from './navbar';
const chapters = [
    { id: 1, title: 'Introduction to TypeScript', description: 'Learn the basics of TypeScript and why it’s useful.', to: '/chapter-1' },
    { id: 2, title: 'TypeScript Types', description: 'Understand types, interfaces, and how TypeScript handles them.',  to: '/chapter-1' },
    { id: 3, title: 'Functions in TypeScript', description: 'Learn how to define and use functions with TypeScript.',  to: '/chapter-1' },
    { id: 4, title: 'Generics and Interfaces', description: 'Master generics and interfaces to write flexible, reusable code.',  to: '/chapter-1' },
    { id: 5, title: 'TypeScript and React', description: 'How to use TypeScript with React for robust web applications.',  to: '/chapter-1' },
    { id: 6, title: 'Advanced TypeScript Features', description: 'Explore advanced concepts like mapped types and conditional types.',  to: '/chapter-1' },
    { id: 7, title: 'TypeScript with Node.js', description: 'Using TypeScript in a Node.js environment for back-end development.',  to: '/chapter-1' },
    { id: 8, title: 'TypeScript for API Development', description: 'Develop APIs with TypeScript for better type safety and scalability.',  to: '/chapter-1' },
    { id: 9, title: 'TypeScript Decorators', description: 'Understand and implement decorators in TypeScript.',  to: '/chapter-1' },
    { id: 10, title: 'Testing TypeScript Applications', description: 'Learn how to test TypeScript applications using Jest and other tools.',  to: '/chapter-1' }
];

const ChapterPage: React.FC = () => {
    return (
        <>
        <Navbar />
        <div className="chapters-container">
            <h1 className="chapters-title">Chapters</h1>
            <div className="chapter-list">
                {chapters.map((chapter) => (
                    <div className="chapter-card" key={chapter.id}>
                        <h2 className="chapter-title">{chapter.title}</h2>
                        <p className="chapter-description">{chapter.description}</p>
                        <Link to={chapter.to} className="chapter-item">
                            Read Chapter
                        </Link>
                    </div>
                ))}
            </div>
        </div>
        </>
    );
};

export default ChapterPage;
