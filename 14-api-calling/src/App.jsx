import React from 'react'
import axios from 'axios'

const App = () => {

  const getData = async () => {

    //fetching data with async await method
      /*
      const response=await fetch('https://jsonplaceholder.typicode.com/posts/1')
      const data= await response.json()
      console.log(data)
      */

    //fetching data with help of axios method
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
      console.log(response)
  }
  return (
    <div>
      <button onClick={getData}>Get data</button>
    </div>
  )
}

export default App 