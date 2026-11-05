import React from 'react'
import { useState } from 'react'

const App = () => {

  const [title, settitle] = useState('')

  //we can't directly call the preventDefault() function we need a parameter .
  const submitbtnhandler=(e)=>{
    e.preventDefault()  // this is the default behaviour when ever user click on submit button page reloads instantly.
    console.log('form submitted')
    settitle('')    //after the form submission the final value (settitle) will be blank again , so title will be blank . and it will looks like the page is reload .
  }
  return (
    <div>
      <form onSubmit={(e)=>{submitbtnhandler(e)}}>
        <input type="text" placeholder='Enter your name' value={title} onChange={(e)=>{ 
          settitle(e.target.value)
        }}/>
        <button>submit</button>
      </form>
    </div>
  )
}

export default App