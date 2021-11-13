import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="text-white footer mt-5">
      <div className="container">
        <div className="row gx-5">
          <div className="col-md-4">
            <h1>BIKERZ</h1>
            <div className="mt-5">
              <i className="fab fa-instagram fa-2x me-2"></i>
              <i className="fab fa-facebook-square fa-2x me-2"></i>
              <i className="fab fa-twitter-square fa-2x me-2"></i>
              <i className="fab fa-youtube-square fa-2x"></i>
            </div>
            <p className="mt-3">Choose your first bike with us</p>
            <small>ECC &copy;. All right reserved.</small>
          </div>
          <div className="col-md-3">
            <ul className="mt-3">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/allbikes">All Bikes</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard">Dashboard</NavLink>
              </li>
              <li>
                <NavLink to="/login">Sign In</NavLink>
              </li>
            </ul>
          </div>
          <div class="col-md-4">
            <h2>Sign up for the newsletter</h2>
            <input
              type="text"
              className="my-3 form-control"
              placeholder="Enter email"
            />

            <h4 className="p-2">
              <i className="fas fa-phone-square-alt text-info"></i>&nbsp;: +18
              800 562 49 49
            </h4>
            <p className="p-2">
              <i className="fas fa-map-marker text-info"></i>&nbsp;: 160
              Broadway, New York, NY 10038, 102 1st Avenue, New York, NY 100
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
