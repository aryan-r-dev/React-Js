import React from 'react'

const cards = () => {
  return (
    <div> {/*there should be only one parent element in react when we return the component , otherwise it will not return */}
      <div className="card"> {/*we can't write class in react use className instead , but we can write id for desired element*/}
        <h1>hello</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consectetur dignissimos tempora ad pariatur inventore, aliquam voluptas assumenda, tempore illum ipsum, ducimus mollitia aspernatur!</p>
      </div>
    </div>
  )
}

//this is default export
export default cards 