import React from 'react'
import LeftContent from './LeftContent'
import RightContent from './rightContent'

const Page1Content = (props) => {
  return (
    //   <div className='w-[30vw] h-[25vh] border-2 border-black '>Page1Content</div>
      <div className='py-10 flex items-center gap-10 px-18 h-[90vh] '>
        <LeftContent />
        <RightContent users={props.users} />
      </div>
      
  )
}

export default Page1Content