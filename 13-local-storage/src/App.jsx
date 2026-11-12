import React from 'react'

const App = () => {

  // localStorage.clear()  // this will clear the local storage data from opened url .
  // sessionStorage.clear()  // this will clear the session storage data from opened url .

  //localStorage.setItem('user','Aryan') // this will set data in local storage in key value pair.
  //const user=localStorage.getItem('user') // getItem is for fetching the values of the keys. 
  //console.log(user)

  //localStorage.removeItem('user') // this will remove only particular key and it's value . It will not affect the whole storage.

  const user={
    username:'Aryan',
    age:22,
    state:'Jharkhand'
  }
  //localStorage.setItem('user',user) //but this will store as user as key and [object Object] as value . because whenever we want to store the value we need to provide the value in string form only .
  localStorage.setItem('user',JSON.stringify(user)) // so we change the obj in string using stringify.

  //but what if we want to print the data as obj in console.
  const data=JSON.parse(localStorage.getItem('user')) // now it will print the data in object form . 
  console.log(data)
  return (
    <div>App</div>
  )
}

export default App