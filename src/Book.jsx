import React from 'react'
import './Book.css'

const Book = (props) => {
  return (
    <div id="book">
        <img src={props.img} alt="" height={100} width={100}></img>
        <h1>{props.tittle}</h1>
        <h1>{props.price}</h1>
        <button></button>
        
    </div>
  )
}

export default Book