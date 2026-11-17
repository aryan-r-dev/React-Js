import { useState } from "react"
import React, { useEffect }  from 'react'


const App = () => {

  const [num, setnum] = useState(0)
  const [num2, setnum2] = useState(100)

  useEffect(function(){
    console.log('hello')
  },[num]) // whenever we are hovering on the button the useEffect is running and when we are leaving the button state is still changing but the useEffect is not running at that time.

  return (
    <div>
      <h1>{num}</h1>
      <h1>{num2}</h1>
      <button onMouseEnter={()=>{
        setnum(num+1)
      }}
      onMouseLeave={()=>{
        setnum2(num2+100)
      }}
      >hover</button>
    </div>
  )
}

export default App