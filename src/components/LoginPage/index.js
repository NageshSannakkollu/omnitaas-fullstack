import React, { useState } from 'react'
import { toast } from "react-toastify"
import { Link,useNavigate } from "react-router-dom"
import axios from "axios";

import "./index.css"
const LoginPage = () => {
    const [loginValues,setLoginValues] = useState({email:'',password:''})
    const [showPassword,setShowPassword] = useState(false)
    const is_showing_password = showPassword ? "text" : "password";
    const navigate = useNavigate()

    const loginHandler = async(event) => {
        event.preventDefault()
        // console.log("LoginDetails:",loginValues)
        const response = await axios.post("https://omnitaas-backend.onrender.com/api/v1/auth/signin",loginValues)
        if(response.data.success){  
            console.log("ResponseToken:",response.data.success)
            localStorage.setItem('jwtToken', response.data.jwtToken)
            toast.success(response.data.message)
            navigate("/")
        }else{
            toast.error(response.data.message)
        }
    }
    
  return (
    <div className='login_page_main_container'>
        <form className='login_page_inside_container' onSubmit={loginHandler}>
        <div className='login_left_container'>
        <div className='login_page_titles_container'>
            <h2>Already have an account?</h2>
            <p className='job_finder_para'>Get in touch?</p>
        </div>
            <input type='email' placeholder='Email' onChange={e => setLoginValues({...loginValues,email:e.target.value})} className='email_input' required/>
            <input type={is_showing_password} placeholder='Password' onChange={e => setLoginValues({...loginValues,password:e.target.value})} className='email_input' required/>
            <div className='checkbox_container'>
                <input type="checkbox" is_showing_password={is_showing_password} onChange={e => setShowPassword(e.target.checked)} className='show_password_checkbox' id='show_password_checkbox'/>
                <label htmlFor='show_password_checkbox' className='show_password_label'>Show Password</label>
            </div>
            <button type='submit' className='submit_button'>Sign In</button>
            <p className='dont_have_acc'>Don't have an account? <Link to="/signup" className='sign_up_link'>Create One</Link> </p>
        </div>
        </form>
    </div>
  )
}

export default LoginPage
