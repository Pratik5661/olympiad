import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
const Axioss = () => {
     const [data, setData] = useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setData(res.data)
        })
    })
  return (
    <>

    {
        data.map((i, index)=>{
            const {id,title, body} = i;
            return <div key={index}>
                <h1>{id}</h1>
                <h2>{title}</h2>
                <h3>{body}</h3>
            </div>
        })
    }
    </>
  )
}

export default Axioss