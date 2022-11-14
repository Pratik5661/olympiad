import axios from 'axios';
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react'

const Http = () => {
    const [data, setData] = useState([] );

    useEffect(()=>{
         axios.get("https://jsonplaceholder.typicode.com/posts").then((res)=>{
            setData(res.data)
        })
    })
   return (
   <>
    <h1>Axios in React</h1>
    {
        data.map((i)=>{
            const {id,title,body} = i;
            return <div>
                <h1>{id}</h1>
                <h2>{title}</h2>
                <h3>{body}</h3>
            </div>
        })
    }
   </>
  )
}

export default Http