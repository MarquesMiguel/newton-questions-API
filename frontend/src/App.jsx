import { useState } from 'react'

import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  return (
    <div className='container'>
      <div>
      <h1>Isaac Newton Quizz</h1>
      <button className='ButtonOption' onClick={() => {
        navigate('/question1?score=0&q=1')
      }}>Jogar</button>
      </div>
    </div>
  )
}

export default App
