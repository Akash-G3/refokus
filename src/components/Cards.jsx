import React from 'react'
import Card from './Card'

function Cards() {
  return (
    <div className='w-full'>
      <div className='max-w-screen-lg mx-auto py-24 text-white flex gap-2'>
        <Card width={"basis-1/3"} start={false} para={true}/>
        <Card width={"basis-2/3"} para={false} start={true} hover="true"/>
      </div>
    </div>
  )
}

export default Cards 