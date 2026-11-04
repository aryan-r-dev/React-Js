import React from 'react'
import { useState } from 'react'

//working with counter

const counter = () => {
    const [count, setcount] = useState(0)
    function increase(){
        setcount(count+1)
    }
    function decrease(){
        setcount(count-1)
    }
    function reset(){
        setcount(0)
    }
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={increase}>increases</button>
        <button onClick={decrease}>decreases</button>
        <button onClick={reset}>reset</button>
    </div>
  )
}

export default counter