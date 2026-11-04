import React, { useState } from 'react'
import Counter from './counter'
const App = () => {

  // let a=20
  // function updateval(){
  //   a=40
  //   console.log(a)
  const [num, setnum] = useState(20)
  const [username, setusername] = useState("Aniket")
 
  function updateval() {
    setnum(40)
    setusername("Aman")
  }
  return (
    <div>
      <h1>here is the value {num}</h1>
      <h2>here is the user {username}</h2>
      <button onClick={updateval}>click to change</button>
      
    </div>
  )
}

export default App