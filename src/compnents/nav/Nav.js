import React, { Component } from "react";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <div id="nav-items">
          <div>Instructors</div>
          <div>Rentals</div>
          <div>About</div>
          <div>Contact</div>
        </div>
      </nav>
    );
  }
}
export default Nav;
