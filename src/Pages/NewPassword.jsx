import React from 'react'
import { Link } from 'react-router-dom'
const NewPassword = () => {
  return (
    <div>  <div className="forget_password">
    <div className="forget_logo">
      <Link to="/">
        <img className="restlogo" src="/images/investlogo.svg" alt="" />
      </Link>
    </div>
    <h4 className="rest_title">New Password</h4>
    <p className="reset_p">Please enter password to setup a new one.</p>
    <input
      // value={email}
      // onChange={(e) => setEmail(e.target.value)}
      name="email"
      className="signup_inputs width_input"
      type="email"
      placeholder="Email Address"
      required
    />
<div><button  className="loginbtn width_input">
Change Password
    </button></div>
  </div></div>
  )
}

export default NewPassword