import { useState } from 'react'
import Calculator from './Calculator'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
      <div className="App">
        <Calculator />
      </div>
  )
}

export default App
