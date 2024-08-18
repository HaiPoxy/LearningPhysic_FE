import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router } from 'react-router-dom';
import RouteMapper from './routes/RouteMapper.jsx' ;

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Router>
            <RouteMapper />
        </Router>
    </>
  )
}

export default App
