import React, { useState } from 'react'
import './Login.css'
import { useNavigate } from 'react-router-dom'

function Login() {
    let navigate = useNavigate()
    let[email, setEmail]=useState("")
    let[password, setPassword]= useState("")

    function submitForm(e){
        e.preventDefault()
        if(true){
            navigate("/")

        }
        
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