import React from 'react'
import cards from './components/cards'
const App = () => {
  return (
    <div className="parent">
      {/* here we are passing props as an object */}
      {cards({user:'Aryan Raj',age:22,img:'https://plus.unsplash.com/premium_photo-1726230316592-6981cfe2e1b4?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'})} 
      {cards({user:'kapil dev',age:122,img:'https://images.unsplash.com/vector-1738242272679-a2c1fd4826c3?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'})}
      {cards({user:'Saurabh',age:2,img:'https://images.unsplash.com/photo-1580923368248-877f237696cd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D'})}
      {/* we can also write in this way  */}
      {/* <cards user='Aryan Raj' age={22} /> */}
      {/* <cards user='kapil dev' age={22} /> */}
    </div>
  )
}

export default App