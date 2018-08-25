import React, { Component } from "react";
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
                  <a href="/login" className="smoothScroll">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/" className="smoothScroll">
                    Profile
                  </a>
                </li>
                <li>
                  <a href="/form" className="smoothScroll">
                    Update Profile
                  </a>
                </li>
                <li>
                  <a href="/instructors" className="smoothScroll">
                    Instructors
                  </a>
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
