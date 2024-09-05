import { useState } from 'react'
import './App.css'
import Section from './components/Section'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Section />
    </>
  )
}

export default App
