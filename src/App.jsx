import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassComponent from './components/ClassComponent'
import FunctionalComponent from './components/FunctionalComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <ClassComponent/>
     <FunctionalComponent/>
   
    </>
  )
}

export default App
