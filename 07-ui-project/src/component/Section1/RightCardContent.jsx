import React from 'react'
import {ArrowRight} from 'lucide-react'

const RightCardContent = (props) => {
  return (
    <div className='text-white font-bold'>
        <p className='leading-relaxed mb-10'>{props.intro}</p>
        <div className='flex justify-between'>
            <button className='bg-blue-600 font-medium px-7 py-2 rounded-full '>{props.tag}</button>
            <button className='bg-blue-600 font-medium px-4 py-2 rounded-full' ><ArrowRight /></button>
        </div>
    </div>
  )
}

export default RightCardContent