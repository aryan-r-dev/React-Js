import React from 'react'

const App = () => {

  //we can't directly call the preventDefault() function we need a parameter .
  const submitbtnhandler=(e)=>{
    e.preventDefault()  // this is the default behaviour when ever user click on submit button page reloads instantly.
    console.log('form submitted')
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitbtnhandler(e)}}>
        <input type="text" placeholder='Enter your name'/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App