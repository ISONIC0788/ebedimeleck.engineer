import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Articles from './pages/Articles'
import Projects from './pages/Projects'
import EmarkAi from './pages/EmarkAi'
import NoteFound from './pages/NoteFound'
import SocialDock from './components/SocialDock' // Import the new component

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/articles' element={<Articles />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/eMarc.ai' element={<EmarkAi />} />
        <Route path='*' element={<NoteFound />} />
      </Routes>
      <SocialDock /> {/* Place it here so it's visible on every page */}
    </BrowserRouter>
  )
}

export default App;