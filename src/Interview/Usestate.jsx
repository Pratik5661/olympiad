import React, { useEffect } from 'react'
import { useState } from 'react'

const Usestate = () => {
    const [count, setCount] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setCount(count + 1)
        }, 1000)
    }, [])
  return (
    <>
    <h1>UseEffect</h1>
    <h2>{count}</h2>
    </>
  )
}

export default Usestate