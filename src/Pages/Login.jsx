import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div style={{background:"#FBFCFF",height:"100vh"}}>
        <img className='ab_img' src='/images/Circle (1).svg' alt=''/>
        <div className='login_flex '>
            <div><img className='signup_img' src='/images/Group 387.svg' alt=''/></div>
            <div className='content_part'>
                <h4 className='text-center'>Login</h4>
                <div className='fields_flex fields_flex_mbl'>
             
            <div className='login_with'>
                <div className='pb-4'> <label for="fname">Email</label><br></br>
  <input className='input_cls login_with' type="text" id="fname" name="fname"/></div>
            </div>
                </div>
                <div className='fields_flex pt-0 pb-0 fields_flex_mbl'>
                <div className='item_fields_2 login_width'>
                <div className=' pb_4 login_with'> <label for="fname">Password</label><br></br>
  <input className='input_cls login_with' type="text" id="fname" name="fname"/></div>
            </div>
                </div>
                <div className='mbl_v' style={{fontFamily:"exo-reg",fontSize:"11px",paddingTop:"10px"}}>Forgot Password</div>
                <div className='btn'><button className='signup_btn'>Login</button></div>
                <div className='forgot_title'>Don’t have any account yet?</div>
                <Link to="/register"><div className='btn'><button className='signup_btn mt-2'>Sign up</button></div></Link>
                </div>
                
        </div>
    </div>
  )
}

export default Login