import React from 'react'
import { useState,useEffect } from 'react'

const example = () => {
    const [A, setA] = useState(0)
    const [B, setB] = useState(0)

    function changeInA(){
        console.log('A is changed')
    }
    function changeInB(){
        console.log('B is changed')
    }


    /*
    type                            run
    NO dependency array            run on every render
    Empty[]                        initial render
    [arr1]                         when arr1 changes it's state
    */
    useEffect(function(){
        changeInA()
    },[A]) // by the way this is dependencies so when the button is pressed for value of A , useEffect will run but not for B.
    // in empty array the useEffect run only for once in the initial render.
    return (
    <div>
        <h1>the value of {A}</h1>
        <h1>the value of {B}</h1>
        <button onClick={()=>{
            setA(A+1)
        }}>press for A</button>
        <button onClick={()=>{
            setB(B-1)
        }}>press for B</button>
    </div>
  )
}

export default example