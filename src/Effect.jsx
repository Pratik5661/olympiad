import React, { useEffect, useState } from 'react'


const Effect = () => {
    const [data, setData] = useState(0)
    useEffect(()=>{
        setTimeout(()=>{
            setData(data + 1)
        },1000)
    },[])
  return (
    <>
    <h2>{data}</h2>
    </>
  )
}

export default Effect