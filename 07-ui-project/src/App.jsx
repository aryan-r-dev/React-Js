import React from 'react'
import Section1 from './component/Section1/Section1'
import Section2 from './component/Section2/Section2'

const App = () => {
  const users=[
    {img:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita aperiam recusandae iusto possimus fugiat adipisci enim numquam, eos voluptas facilis accusamus cum.',
      tag:'Satisfied',
      cardno:1
    },
    {img:'https://images.unsplash.com/photo-1733348137613-90f1af8674fd?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita aperiam recusandae iusto possimus fugiat adipisci enim numquam, eos voluptas facilis accusamus cum.',
      tag:'UnderServed',
      cardno:2
    },
    {img:'https://images.unsplash.com/photo-1573496773437-c5780ca4202d?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
      intro:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam expedita aperiam recusandae iusto possimus fugiat adipisci enim numquam, eos voluptas facilis accusamus cum.',
      tag:'Underbanked',
      cardno:3
    }
  ]
  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App