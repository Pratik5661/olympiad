// useState:-  
import React from 'react'
import { useState } from 'react'

const State = () => {
//     const [text, setText] = useState()
//     const [mail, setMail] = useState("")

//     const Change = (e)=>{
//         setText(e.target.value)
//     }
//     const Email = (e)=>{
//         setMail(e.target.value)
//     }
//   return (
//    <>
//     <input type="text" name="" id="" placeholder='Enter the value' onChange={Change} />
//     <input type="email" name="" id="" placeholder='email' onChange={Email} />
//     <p>Result is: {text}</p>
//     <button onClick={(e)=>setMail()}>Click</button>
//     <h2>Email:{mail}</h2>
//    </>
//   )

// Update a state onclick
//     const [data,setData] = useState('pratik')
//     const Change = ()=>{
//         setData("abc")
//     }

//     console.log('change');
// return(
//     <>
//     <h1>
//         {data}
//     </h1>
//     <button onClick={()=>Change()}>Click</button>
//     </>
// )



const [text, setText] = useState('')
const Change = (e)=>{
    setText(e.target.value);
}
return(
    <>
    <input type="text" name="" id="" onChange={Change}/>
    <p>Show:{text}</p>
    </>
)
}


export default State