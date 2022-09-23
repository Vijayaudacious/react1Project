import React, { useState } from 'react'

const State = () => {

   const [inputValue,newChangeValue]=useState("Vijay")
  
  const onChange=(event)=>{
    const newValue = event.target.value
    newChangeValue(newValue)
  }

  return (
    <div>
      <h1>{inputValue}</h1>
        <input type="text" value={inputValue} placeholder='Type Something' onChange={onChange} />
    </div>
  )
}

export default State ;