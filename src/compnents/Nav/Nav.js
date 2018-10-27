import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <header>
        <div className="navWrapper" id="home">
          <div className=" clearfix">
            <h3 className="companyName">LEVEL SKI</h3>
            <nav className="mainNav clearfix">
              <ul>
                <li>
                  <Link to="/login">Home</Link>
                </li>
                <li>
                  <Link to="/">Profile</Link>
                </li>
                <li>
                  <Link to="/form">Update Profile</Link>
                </li>
                <li>
                  <Link to="/instructors">Instructors</Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }
}
export default Nav;
