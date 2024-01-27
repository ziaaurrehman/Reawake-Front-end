import React, { useState } from "react";
import { signupUser } from "../Api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const navigation = useNavigate();

  const handleSignUp = async (values) => {
    if (values.password === values.confirmPassword) {
      try {
        const res = await signupUser(values);
        if (res?.status) {
          toast.success("Sign up successful", {
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
        toast.error(`${error?.response?.data.message}`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        navigation("/register");
      }
    } else {
      toast.error("Password and confirm Password should match!", {
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
    <div style={{ background: "#FBFCFF", height: "100vh" }}>
      <img className="ab_img" src="/images/Circle (1).svg" alt="" />
      <div className="Signup_flex">
        <div>
          <img className="signup_img" src="/images/sign_up.png" alt="" />
        </div>
        <div className="content_part">
          <h4 className="text-center">Signup</h4>
          <div className="fields_flex">
            <div className="item_fields pr_4">
              <div className="pb-4 pr_4">
                <label for="firstName">First name</label>
                <br></br>
                <input
                  className="input_cls"
                  type="text"
                  id="firstName"
                  name="firstName"
                  onChange={(e) =>
                    setData({ ...data, firstName: e.target.value })
                  }
                />
              </div>
              <div className="pb_4">
                <label for="lastName">Last name:</label>
                <br></br>
                <input
                  className="input_cls"
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={(e) =>
                    setData({ ...data, lastName: e.target.value })
                  }
                />
              </div>
            </div>

            <div>
              <div className="pb-4">
                <label for="email">Email</label>
                <br></br>
                <input
                  className="input_cls"
                  type="email"
                  id="email"
                  name="email"
                  onChange={(e) => setData({ ...data, email: e.target.value })}
                />
              </div>
              <label for="phoneNumber">Phone No</label>
              <br></br>
              <input
                className="input_cls"
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                onChange={(e) =>
                  setData({ ...data, phoneNumber: e.target.value })
                }
              />
            </div>
          </div>

          <div className="fields_flex pt-0">
            <div className="item_fields_2 pr-4">
              <div className="pr-4 pb_4">
                <label for="password">Password</label>
                <br></br>
                <input
                  className="input_cls"
                  type="password"
                  id="password"
                  name="password"
                  onChange={(e) =>
                    setData({ ...data, password: e.target.value })
                  }
                />
              </div>
              <div className="pb_4 cpad">
                <label for="confirmPassword">Confirm Password</label>
                <br></br>
                <input
                  className="input_cls"
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  onChange={(e) =>
                    setData({ ...data, confirmPassword: e.target.value })
                  }
                />
              </div>
            </div>
          </div>
          <div className="btn">
            <button onClick={() => handleSignUp(data)} className="signup_btn">
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
