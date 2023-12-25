import React, { useState } from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
const Navbar = ({ moveToDiv }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="main_nav">
        <div className="Navbar">
           <img className="" src="/images/awake.svg" alt="" />     
          <div className={`nav-items ${isOpen && "open"}`}>
            <button
              className="nav_items"
            >
              Home
            </button>
            <button
              className="nav_items"
            >
              Features
            </button>
            <button
              className="nav_items"
            >
             Pricing
            </button>
            <button
              className="nav_items "
            >
   Blogs
            </button>
            <Link to="/register">
            <div className="btn_start desktop_none">
                <button className="registerbtn">Register Now</button>
              </div> </Link> 
            </div>
            <Link to="/register">
            <div className="btn_start mbl_none">
                <button className="registerbtn">Register Now</button>
              </div> </Link>         
       
          <div
            className={`nav-toggle ${isOpen && "open"}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="bar"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
