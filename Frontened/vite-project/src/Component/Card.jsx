import React from 'react'
import './Card.css'
function Card(props) {
  return (
    <div id="card">
      <img src="https://static.vecteezy.com/system/resources/previews/020/934/647/original/doraemon-cute-illustration-pro-vector.jpg" alt="Sample Image" height={100} width={100}/>
      <h2>{props.name}</h2>
      <h4>{props.edu}</h4>
    </div>
  )
}

export default Card