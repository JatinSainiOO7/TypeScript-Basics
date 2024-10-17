import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ChapterPage from './components/chapter.tsx'
import ChapterOne from './chapters/chapterOne.tsx'
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chapters" element={<ChapterPage />} />
      <Route path="/chapter-1" element={<ChapterOne />} />
    </Routes>
  </Router>
  )
}

export default App
