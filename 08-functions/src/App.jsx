import React from 'react'


//okay here i am creating a function but when we did not use React , we simply used just document.getElementby.... or querySelector to get the id of the button and then added event listener to it .. but here in react we simply create a function inside the jsx file function and then we simply can call the function inside the button . 

// const App = () => {
//   function btnclicked(){
//     alert('hey someone clicked me !!!')
//   }
//   return (
//     <div>
//       <button onClick={btnclicked}>click here</button>
//     </div>
//   )
// }


// but there is another way to do it which is by simply creating the function directly in the onclick event.
// const App = () => {
//   return (
//     <div>
//       <button onClick={()=>{
//         alert('hey someone clicked me !!!')
//       }}>click here</button>
//     </div>
//   )
// }

// export default App

// another example
const App=()=>{
  return(
    <div>
      <input onChange={()=>{
        console.log('hello someone is typing')
      }} type="text" placeholder='enter your name' />
    </div>
  )
}

export default App