import React, { useState } from "react";
import { Link } from "react-router-dom";
import { forgetPassword } from "../Api";
import { toast } from "react-toastify";
const Forgot = () => {
  const [email, setEmail] = useState();
  const handlePasswordChange = async () => {
    if (email) {
      try {
        const res = await forgetPassword({ email: email });

        if (res?.status) {
          toast.success("Please check your email", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
        }
      } catch (error) {
        toast.error("Error sending mail!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      }
    } else {
      toast.error("Email required!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };
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
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          className="signup_inputs width_input"
          type="email"
          placeholder="Email Address"
          required
        />
        {/* <Link to="/new-password"> */}
        <div>
          <button
            onClick={() => handlePasswordChange()}
            className="loginbtn width_input"
          >
            Send Reset Link
          </button>
        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Forgot;
