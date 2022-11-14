import React from 'react'
import { useRef } from 'react'

const Useref = () => {
        const inputRef = useRef(null)
        const Change = () =>{
            inputRef.current.style.color = 'red'
        }
  return (
    <>
    <h1>useRef</h1>
    <input type="text" ref={inputRef} />
    <button onClick={()=>Change()}>Click</button>
    </>
  )
}

export default Useref