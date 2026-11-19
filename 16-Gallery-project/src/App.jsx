import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'

const App = () => {

  const [userData, setuserData] = useState([])
  const [Index, setIndex] = useState(1)

  const getData=async()=>{
    const response=await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=30`)
    setuserData(response.data)
    console.log(response.data)
  }
  useEffect(function(){
    getData()
  },[Index])
  let printUserdata=<h3 className='text-gray-300 font-semiboldtext-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading....</h3>
  if(userData.length>0){
    printUserdata=userData.map(function(elem,idx){
      return(
        <div key={idx}>
          <a href={elem.url} target='_blank'>
           <div className='h-40 w-44'>
             <img className='h-full object-cover' src={elem.download_url} alt="" />
           </div>
          </a>
          <h2 className='font-bold text-lg '>{elem.author}</h2>
        </div>
      )
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='text-5xl fixed font-bold p-4 text-amber-300'>{Index}</h1>
      <button
      onClick={getData}
      className='bg-green-600 active:scale-95 px-5 py-2 m-4 rounded-xl '>get data
      </button>
      <div className='flex flex-wrap gap-10'>
        {printUserdata}
      </div>
      <div className='flex justify-center items-center gap-6'>
        <button className='bg-amber-400 text-2xl m-3 font-bold border-2 hover:border-red-300 text-black px-4 py-2 rounded-2xl'
        onClick={()=>{
          if(Index>1){
            setIndex(Index-1)
            setuserData([])
          }
        }}>Previous</button>
        <h1 className='text-2xl'>Page {Index}</h1>
        <button className='bg-amber-400 text-2xl m-3 font-bold border-2 hover:border-red-300 text-black px-4 py-2 rounded-2xl'
        onClick={()=>{
          setuserData([])
          setIndex(Index+1)
        }}>Next</button>
      </div>
    </div>
  )
}

export default App