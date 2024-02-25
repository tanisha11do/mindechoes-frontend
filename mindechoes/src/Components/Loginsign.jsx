import React, { useState } from 'react'
import './login.css'
export const App= () =>{
    const  [action,setAction]=useState('Sign Up'); 
  return (
    <div  className='containera'>
    <div className='headera'>
      <div className='texta'>{action}</div>
      <div className='underline'></div>
    </div>
    <div className='inputs'>
        {action ==='Login'?<div></div>:<div className='input'>
            <input placeholder='Name' type='text'/></div>}
      <div className='input'>
        <input type='email' placeholder='Email Id'/>
      </div>
      <div className='input'>
        <input type='password' placeholder='Password'/>
      </div>
    </div>
    {action==='Sign Up'?<div></div>:<div className='forgotpassword'>Forgot Password? <span>Click here!</span></div>}
    
    <div className='submit-container'>
      <div className={action==='Login'?'submit gray':'submit'}onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
      <div className={action==='Sign Up'?'submit gray':'submit'}onClick={()=>{setAction('Log In')}}>Log In</div>
    </div>
    </div>
  );
}

export default App;