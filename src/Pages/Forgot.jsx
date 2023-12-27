import React from 'react'
import { Link } from 'react-router-dom'
const Forgot = () => {
  return (
    <div>  
       <div className="forget_password">
    <div className="forget_logo">
      <Link to="/">
        <img className="restlogo" src="/images/investlogo.svg" alt="" />
      </Link>
    </div>
    <h4 className="rest_title">Reset Password </h4>
    <p className="reset_p">Please enter your Email to reset password</p>
    <input
      // value={email}
      // onChange={(e) => setEmail(e.target.value)}
      name="email"
      className="signup_inputs width_input"
      type="email"
      placeholder="Email Address"
      required
    />
    <Link to="/new-password">
    <div><button  className="loginbtn width_input">
      Send Reset Link
    </button></div>
    </Link>

  </div>
  </div>
  )
}

export default Forgot