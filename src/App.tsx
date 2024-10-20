import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage'
import ChapterPage from './components/chapter.tsx'
import ChapterOne from './chapters/01.tsx'
import ChapterTwo from './chapters/02.tsx'
import ChapterThree from './chapters/03.tsx'
import ChapterFour from './chapters/04.tsx'
function App() {

  return (
    <Router>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/chapters" element={<ChapterPage />} />
      <Route path="/chapter-1" element={<ChapterOne />} />
      <Route path="/chapter-2" element={<ChapterTwo />} />
      <Route path="/chapter-3" element={<ChapterThree />} />
      <Route path="/chapter-4" element={<ChapterFour />} />
    </Routes>
  </Router>
  )
}

export default App
