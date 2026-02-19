import React from 'react'
import Book from './book'
import './App.css'

function App() {
  return (
    <div id="shr">
      <Book title="Physics" price="255" img='https://m.media-amazon.com/images/I/81L-c3G66eL._AC_UF1000,1000_QL80_.jpg' />
      <Book title="Maths" price="255" img='https://manvibookhouse.in/cdn/shop/files/FM_12_MATHS_1.jpg?v=1718976999' />
      <Book title="Chemistry" price="255" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLToomDYp2jRoN8HyS2Ixo6wZYqkvZCOyS-Q&s' />
    </div>
  )
}

export default App