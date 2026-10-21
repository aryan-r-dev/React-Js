import React from 'react'
import RightCard from './RightCard'

const rightContent = (props) => {
  return (
    <div className='h-full w-2/3 p-5 rounded-xl flex flex-nowrap gap-5 shrink-0 overflow-x-auto bg-gray-400'>
        {props.users.map(function(elem){
            return <RightCard img={elem.img} intro={elem.intro} tag={elem.tag} cardno={elem.cardno} />
        })}
    </div>
  )
}

export default rightContent