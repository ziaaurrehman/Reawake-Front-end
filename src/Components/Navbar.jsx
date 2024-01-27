import React, { useState } from "react";
import "../Navbar.css";
import { Link } from "react-router-dom";
const Navbar = ({ user }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="main_nav">
        <div className="Navbar">
          <Link to="/">
            <img className="" src="/images/awake.svg" alt="" />
          </Link>
          <div className={`nav-items ${isOpen && "open"}`}>
            <Link to="/">
              <button className="nav_items">Home</button>
            </Link>
            <button className="nav_items">Features</button>
            <Link to="/pricing">
              <button className="nav_items">Pricing</button>
            </Link>
            <button className="nav_items ">Blogs</button>
            {user ? null : (
              <div className="buttons">
                <Link to="/login">
                  <div className="btn_start desktop_none">
                    <button className="registerbtn">Login</button>
                  </div>
                </Link>
                <Link to="/register">
                  <div className="btn_start desktop_none">
                    <button className="registerbtn">Register Now</button>
                  </div>
                </Link>
              </div>
            )}
          </div>
          {user ? null : (
            <div className="buttons">
              <Link to="/login">
                <div className="btn_start mbl_none">
                  <button className="registerbtn">Login</button>
                </div>
              </Link>
              <Link to="/register">
                <div className="btn_start mbl_none">
                  <button className="registerbtn">Register Now</button>
                </div>
              </Link>
            </div>
          )}

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
