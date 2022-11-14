import React from 'react'

const Propsp = (props) => {
    const {obj} = props
    const {obj2} = props
  return (
   <>
   <h1>Props in React</h1>
   <h2>{obj.name}</h2>
   <h3>{obj.Color}</h3>
   <h3>{obj.class}</h3>
   <h1>{obj2.name}</h1>
   </>
  )
}

export default Propsp