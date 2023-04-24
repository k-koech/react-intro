import { useState } from "react"

function Form() 
{

    const [username, setUsername] =useState()
    const [email, setEmail] =useState()
    const [password, setPassword] =useState()
    const [confirm_password, setConfirmPassword] =useState()


    function handleSubmit(e){
        e.preventDefault()

       console.log("Email ", email)
       console.log("Username ", username)
       console.log("Password ", password)
       console.log("Confirm Password ", confirm_password)

       if(password!=confirm_password)
       {
        console.log("Password doesn't match")
       }
       else if(password.length<5)
       {
        console.log("Password character Should be more than 5")
       }

    }

    return (
    <div>
        <h1>Form</h1>
        <form onSubmit={handleSubmit}>
            <input value={username || ""} onChange={event=>setUsername(event.target.value)} placeholder="Enter Username" /><br/>
            <input onChange={e=>setEmail(e.target.value)} placeholder="Enter Email" /><br/>
            <input onChange={e=>setPassword(e.target.value)} placeholder="Enter Password" /><br/>
            <input onChange={e=>setConfirmPassword(e.target.value)} placeholder="Confirm Password" /><br/>
            <button  className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default Form