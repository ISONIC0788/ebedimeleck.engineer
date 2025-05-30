
import './App.css'
import {BrowserRouter , Routes ,Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About';
import Articles from './pages/Articles';
import Projects from './pages/Projects';

function App() {
  

  return (
    <>
     <BrowserRouter>
       <Routes>
        <Route index element ={<Home/>}/>
        <Route path='/home' element ={<Home/>}/>
        <Route path='/about' element ={<About/>}/>
        <Route path='/articles' element ={<Articles/>}/>
        <Route path='/projects' element ={<Projects/>}/>
       </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App
