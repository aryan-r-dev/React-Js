import React from 'react'
import style from "./header.module.css"

const header = () => {
  return (
    <div className={style.header}>
      <h3>Hola</h3>
      <p>How are you</p>
      <button className={style.btn }>Login</button>
    </div>
  )
}

export default header