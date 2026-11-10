import React from 'react'
import { useState } from 'react'
import {X}  from 'lucide-react'

const App = () => {

  const [title, settitle] = useState('')
  const [Detail, setDetail] = useState('')

  const [task, settask] = useState([])

  const submithandler=(e)=>{
    e.preventDefault()
    const copyTask=[...task]
    copyTask.push({title,Detail})
    settask(copyTask)
    settitle('')
    setDetail('')
  }

  const deletebtn=(idx)=>{
    const copyTask=[...task]
    console.log(copyTask[idx])
    copyTask.splice(idx,1)
    settask(copyTask)
     
  }
  return (
    <div className='h-screen bg-black lg:flex text-white'>
      <form onSubmit={(e)=>{
        submithandler(e)
        }} className='flex lg:w-1/2 flex-col  item-start p-10 gap-4'>
          <h1 className='text-5xl font-bold underline '>Your notes:</h1>

        {/* title */}
        <input 
        type="text" 
        placeholder='Enter the heading'
        className='px-5 py-2 border-2 w-1/2 rounded-2xl' 
        value={title}
        onChange={(e)=>{
          settitle(e.target.value)
        }}
        />

        {/* detail information */}
        <textarea
        type="text" 
        placeholder='Write details'
        className='px-5 py-2 border-2 w-1/2 h-40 rounded-2xl' 
        value={Detail}
        onChange={(e)=>{
          setDetail(e.target.value)
        }}
        />

        {/* Note submission button */}
        <button className='bg-white w-1/2 text-black active:scale-95 px-5 py-2 rounded-2xl'>Add note</button>

      </form>
      <div className='lg:w1/2 h-full lg:border-l-2 bg-gray-900 '>
        <h1 className='text-5xl font-bold mt-2 ml-3 underline '>Your notes:</h1>
        <div className='flex flex-wrap gap-5 h-full overflow-auto'>
          {task.map(function(elem,idx){
            return <div key={idx} className="h-40 w-40 bg-cover rounded-2xl text-black bg-[url('/67-679001_notes-document-notepad-office-reminder-sticky-note-paper-removebg-preview.png')] p-4 pt-7 m-3">
              <h3 onClick={()=>{
                deletebtn(idx)
              }}><X color="#db2424" strokeWidth={1.25} /></h3>
              <h3 className='font-bold leading-tight'>{elem.title}</h3>
              <p className='mt-2 leading-tight font-medium text-gray-500'>{elem.Detail}</p>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App