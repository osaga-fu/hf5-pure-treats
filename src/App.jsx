import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/molecules/Navbar'
import 'tailwindcss/tailwind.css';



function App() {
  const [count, setCount] = useState(0)

  return (
   <Navbar> </Navbar>

  )
}

export default App
