import React from 'react'

import RightCardContent from './RightCardContent'
const RightCard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-80 rounded-4xl'>
        <img className='h-full w-full object-cover' src={props.img} alt="" />
        <div className='absolute top-0 left-0 h-full w-full p-10 flex flex-col justify-between'>
            <h2 className='bg-white rounded-full h-14 w-14 text-4xl text-center py-1 font-bold '>{props.cardno}</h2>
            <RightCardContent tag={props.tag} intro={props.intro} />
        </div>
    </div>
  )
}

export default RightCard