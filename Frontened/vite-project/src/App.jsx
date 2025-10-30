import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card'
import Navbar from './component/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar name="abes"></Navbar>
      <Card name="Shruti" edu="Web Devloper"></Card>
      <br></br>
      <Card name="Shreya" edu="DSA"></Card>
      <br></br>
      <Card name="Siddhant" edu="Python" ></Card>
      <br></br>
    </>
  )
}

export default App