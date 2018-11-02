import axios from "axios";
import React, { Component } from "react";
import "./Login.css";
import Nav from "../Nav/Nav";
import "../../App.css";
import { Redirect } from "react-router-dom";

export default class Login extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
      loading: true
    };
  }

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/user"
    }).then(response => {
      console.log("this is response", response);
      this.setState({ user: response.data, loading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.user.nickname ? <Redirect to="/" /> : null}

        <div className="userForm">
          <header className="user__header">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
              alt=""
            />
            <h1 className="user__title">Welcome to Level Ski</h1>
          </header>

          <form className="form">
            <a href="/login">
              {" "}
              <p>
                {" "}
                <button className="button-submit">Login / Sign Up</button>{" "}
              </p>
            </a>
          </form>
        </div>
      </div>
    );
  }
}
