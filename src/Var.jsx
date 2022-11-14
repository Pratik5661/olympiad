import React from 'react'
import { useState } from 'react'

const Var = (props) => {
        const [name, setName] = useState('pratik')
    const Change = ()=>{
       setName('abc')
    }
  return (
   <>
    <h1>{name}</h1>
    <h2>{props.text}</h2>
    <h3>{props.date}</h3>
    <button onClick={Change}>Click</button>

    { /* <ul> 
     <li>Malik</>
     <li>Tea into  Apple</>      ----- Tea / apple   /// Hide
     <li>Cofee</>
  */}
     
    { /* <ul> 
     <li>Malik</>   1000 --- 100*1000 = 1000000   ----- Will be slow // less user interactive // 
      <li>apple</>    ----- Tea / apple 
     <li>Cofee</>
     */
     }
   </>
  )
}

export default Var