import { useState } from 'react'
import './App.css'
import Navbar from '../src/components/molecules/Navbar'
import AboutUs from './components/molecules/AboutUs'



function App() {
  const [count, setCount] = useState(0)

  return (<>
   <Navbar> </Navbar>
   <AboutUs></AboutUs>
</>

  )
}

export default App
