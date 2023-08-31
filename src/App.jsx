import { useState } from 'react'
import './App.css'
import {FancyButton} from './components/Button/Button.jsx'

function App () {
  const [count, setCount] = useState(0)

  const handleClick = () => {
    setCount(prev => prev + 1)
  }
  return (
    <>
      <div>
        <h1>shop {count}</h1>
        <FancyButton onClick={handleClick}>Shop</FancyButton>
      </div>
    </>
  )
}

export default App
