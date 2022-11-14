import React from 'react'

const Map = () => {

    // const students = ['pratik', ' shubham', 'pankaj', 'amit']

    const data = [
        {
            name: 'pratik',
            DOB: '25/07/2001',
            email: ' pratik@gmail.com'
        },
         {
            name: 'Shub',
            email: 'shub@gmal.com',
            DOB: '20/09/2000'
         }
    ]
  return (
    <>
     {
        data.map((i,index)=>
        <div key={index}>
            <h1>{i.name}</h1>
            <h2>{i.email}</h2>
            <h3>{i.DOB}</h3>
        </div>
        )
     }
    </>
  )
}

export default Map