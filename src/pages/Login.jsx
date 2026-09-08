import React, { useState } from 'react'
import './Login.css'

function Login() {
    let[email, setEmail]=useState("")
    let[password, setPassword]= useState("")

    function submitForm(e){
        e.preventDefault()
        alert('${email} ${password}')
    }
  return (
    <div>
        <form onSubmit={(e)=> submitForm(e)}>
            <div>
                <span>Email: </span>
                <input 
                type='email'
                 name='email'
                placeholder='Enter your email'
                onChange={(e)=>setEmail(e.target.value)}
                />
            </div>
            <br/>
            <div>
                <span>Password: </span>
                <input 
                type='password' 
                name='password'
                placeholder='Enter your password'
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <div>
                <button>submit</button>
            </div>
            
        </form>
    </div>
    

  )
}

export default Login