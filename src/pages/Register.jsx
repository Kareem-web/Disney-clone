import React from 'react'
import {Link} from 'react-router-dom'
import logo from './../assets/Images/logo.png'

const register = () => {
  return (


    
    <div className='auth '>
        <div className='loginCardReg border-[2px] border-gray-700
            rounded-lg  transition-all duration-300
            ease-in-out  relative shadow-xl 
            shadow-gray-800 h-[20rem] mt-24'>
        <div className='image'> <img src={logo} className='w-[80px]'/></div>
        <form action="">
            <input required type="text" name="" id=""  placeholder='Username' />
            <input required type="text" name="" id=""  placeholder='Email' />
            <input required type="text" name="" id="" placeholder='Password' />
            <button className='bttn'><b>Register</b></button>
            <p>This is an error!</p>
            <span className='form-link'>You dont have an account? <Link to='/register'>Register</Link> </span>
        </form>
        </div>
    </div>
  )
}

export default register