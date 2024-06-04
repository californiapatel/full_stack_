import { useState } from "react"

function Todo(){
    const [work,setWork]=useState("")
    const [arr,setarr]=useState([])
    const [a,seta]=useState(true)

    function handleClick(){
        setarr([...arr,work])
    }
    return(
    <div>
        <h1>To-do List</h1>
        <input type="text" onChange={(deepak)=>setWork(deepak.target.value)}/>
        {a?<h1>Register</h1>:<h1>Login</h1>}
        <button onClick={handleClick}>Click</button>
        <button onClick={()=>seta(!a)}>Login</button>
    </div>
    )
}

export default Todo