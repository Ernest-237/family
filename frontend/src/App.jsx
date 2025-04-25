import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Home from './components/Home';
import Genealogie from './components/Genealogie';
import Biography from './components/Biography';
import Oeuvre from './components/Oeuvre'; 
import Loisirs from './components/Loisirs';


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/genealogie" element={<Genealogie />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/oeuvre" element={<Oeuvre />} />
        <Route path="/loisirs" element={<Loisirs />} />
      </Routes>
    </Router>
  )
}

export default App