import React from 'react'
import cards from './components/cards.jsx'
import navbar from './components/navbar.jsx'

const App = () => {
  return (
    <div>
      {navbar()} {/*we can add more functions in same file but we must import those function from another file.  */}
      {/* we write the javascript code in curly brackets {} to call the function */}
      {cards()}  {/*This is the first way to render the component in react*/}
      {cards()}  {/*This is the second way to render the component in react */}
      {cards()}  {/*This is the third way to render the component in react */}
    </div>
    // <div>
    //   <div className="card">
    //     <h1>hello</h1>
    //     <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dignissimos tempora ad pariatur inventore, aliquam voluptas assumenda, tempore illum ipsum, ducimus mollitia aspernatur!</p>
    //   </div>
    //   {card()}
    // </div>
  )
}
export default App
