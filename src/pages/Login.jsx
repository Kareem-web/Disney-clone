import React from 'react'
import logo from './../assets/Images/logo.png'
import {Link} from 'react-router-dom'

const login = () => {
  return (


    
    <div className='auth '>
        
       
        <div className='loginCard border-[2px] border-gray-700
            rounded-lg  transition-all duration-300
            ease-in-out  relative shadow-xl shadow-black h-[20rem] mt-24'>
        <div className='image'> <img src={logo} className='w-[80px]'/></div>
        <form action="">
            <input required type="text" name="" id=""  placeholder='Email' />
            <input required type="text" name="" id="" placeholder='Password' />
            <button className='bttn'><b>Login</b></button>
            <p>This is an error!</p>
            <span className='form-link'>Don't have an account? <Link to='/register'>Register</Link> </span>
        </form>
        </div>
    </div>
  )
}

export default login