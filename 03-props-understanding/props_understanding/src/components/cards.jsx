import React from 'react'

// here props is an object and we are accepting the props object in the component as an argument .
const cards = (props) => { 
    console.log(props.user, props.age, props.img)
  return (
    <div className="card">
        <img src={props.img} alt="" />
        <h1>{props.user},{props.age}</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <button>view button</button>
    </div>
  )
}

export default cards