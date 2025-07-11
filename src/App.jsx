import { useState } from 'react'
import Pokemon from './Component/pokemon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Pokemon/>
    </>
  )
}

export default App
