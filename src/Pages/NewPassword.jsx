import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { updateForgetPassword } from "../Api";
import { toast } from "react-toastify";
const NewPassword = () => {
  const [password, setPassword] = useState();
  const { token } = useParams();
  const navigation = useNavigate();

  const handlePasswordChange = async () => {
    if (password && token) {
      try {
        const res = await updateForgetPassword({ password: password }, token);

        if (res?.status) {
          toast.success("Password updated successfully", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigation("/login");
        }
      } catch (error) {
        toast.error("Error updating password!", {
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
      toast.error("Password required!", {
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
        <h4 className="rest_title">New Password</h4>
        <p className="reset_p">Please enter password to setup a new one.</p>
        <input
          onChange={(e) => setPassword(e.target.value)}
          name="email"
          className="signup_inputs width_input"
          type="password"
          placeholder="New Password"
          required
        />
        <div>
          <button
            onClick={() => handlePasswordChange()}
            className="loginbtn width_input"
          >
            Change Password
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewPassword;
