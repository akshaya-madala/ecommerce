import React, { useState } from 'react'
import './Signup.css'

function Signup() {
    let[email, setEmail]=useState("")
    let[password, setPassword]= useState("")
    let[name, setName]=useState("")
    let[rollno, setRollNo]=useState("")

    
        function submitForm(){
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
            <br/>
            <div>
                <span>Name: </span>
                <input 
                type='name' 
                name='Name'
                placeholder='Enter your name:'
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <br/>
            <div>
                <span>Roll No: </span>
                <input 
                type='rollno' 
                name='Roll No'
                placeholder='Enter your Roll Number'
                onChange={(e)=>setRollNo(e.target.value)}/>
            </div>
            

            <div>
                <button>submit</button>
            </div>
            
        </form>
    
    </div>

  )
}

export default Signup