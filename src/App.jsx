import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Home from './pages/Home'
import { Route,Routes } from 'react-router-dom'
import Login from './pages/login'
import Signup from './pages/signup'

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<Signup/>}/>
        </Routes>
      </div>
  )
}

export default App

