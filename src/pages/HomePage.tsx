import React from 'react';
import './HomePage.scss';
import NavBar from '../components/navbar.tsx'

const HomePage: React.FC = () => {
  return (
    <>
    <NavBar />

    <div className="home-container">
      <header className="home-header">
        <h1 className="book-title">
          Welcome to <span className="highlight">"Mastering TypeScript"</span>
        </h1>
        <p className="intro">
          A comprehensive guide that will take you from zero to hero in TypeScript, covering everything from the basics to advanced techniques.
        </p>
        <button className="start-btn">Start Learning</button>
      </header>

      <section className="features-section">
        <h2 className="section-title">What You'll Learn</h2>
        <ul className="features-list">
          <li>✅ Basic TypeScript Syntax and Types</li>
          <li>✅ Interfaces and Generics</li>
          <li>✅ TypeScript with React</li>
          <li>✅ Advanced TypeScript Concepts</li>
          <li>✅ Practical Applications and Projects</li>
        </ul>
      </section>

      <footer className="home-footer">
        <p>Explore Chapters</p>
        <nav className="chapter-links">
          <a href="#chapter1" className="chapter-link">Chapter 1: Introduction</a>
          <a href="#chapter2" className="chapter-link">Chapter 2: Basics</a>
          <a href="#chapter3" className="chapter-link">Chapter 3: Advanced Types</a>
        </nav>
      </footer>
    </div>
    </>
  );
};

export default HomePage;
