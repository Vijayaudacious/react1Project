import React, { useEffect } from 'react'

export const Counter1 = ({number}) => {

    useEffect(()=>{
        console.log("Functional Component : Mounting..");
     
        return ()=> {
            console.log("Functional Component : removed"); // button hatane par run hoga removed
        }
    
    },[number])

  return (
    <h1>{number}</h1>
  )
}
