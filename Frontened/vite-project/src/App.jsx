import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
import Header from './Components/Header'
import Heading from './Components/heading'
import Footer from './Components/footer'
import Count1 from './Components/Count1'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Count1></Count1>
    {/* <Header name={home} src={"https://tse3.mm.bing.net/th/id/OIP.ZZsn6lD6PCjocBzx1tuu1QHaEo?pid=Api&P=0&h=180"}/>
    <Header name={home} src={"https://tse3.mm.bing.net/th/id/OIP.fOePXpm0TyMlD6HjsPL9xgHaE8?pid=Api&P=0&h=180"}/>
    <Heading/>
    <Card name={ Pizza} />
    <Footer/> */}
    </>
  )
}

export default App