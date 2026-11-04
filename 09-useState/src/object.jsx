import React from 'react'
import { useState } from 'react'

// working with object


const object = () => {
    const [info,setInfo]=useState({name:'Aniket',age:40})


    //performing destructuring
    /* 
    const valueupdate=()=>{
        const newInfo={...info} // we are copying the info ohject inside of newinfo or this is destructuring
        newInfo.name='Harsh'
        newInfo.age=30
        setInfo(newInfo)
    }
    */

    //second method : previous method
    const valueupdate=()=>{
        setInfo(prev=>({...prev,name:'Anshu',age:50}))
    }
  return (
    <div>
        <h3>And the name is : {info.name}</h3>
        <h3>And the age is : {info.age}</h3>
        <button onClick={valueupdate}>CHANGE</button>
    </div>
  )
}

export default object