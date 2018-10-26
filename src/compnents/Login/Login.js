import axios from "axios";
import React, { Component } from "react";
import "./Login.css";
// import Nav from "../Nav/Nav";
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
        <div>
          {this.state.user.nickname ? <Redirect to="/" /> : null}
          <div className="vid-container">
            <video
              className="bgvid"
              autoPlay="autoplay"
              muted="muted"
              preload="auto"
              loop
            >
              <source
                src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?1410742112"
                type="video/webm"
              />
            </video>
            <div className="inner-container">
              <video
                className="bgvid inner"
                autoPlay="autoplay"
                muted="muted"
                preload="auto"
                loop
              >
                <source
                  src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?random=1"
                  type="video/webm"
                />
              </video>

              <div className="box">
                <h1>Level Ski</h1>
                {/* <input type="text" placeholder="Username" />
                <input type="text" placeholder="Password" />
                <button>Login</button> */}
                <a href="http://104.248.229.146/login">
                  {" "}
                  <p>
                    {" "}
                    <button>Sign Up </button>{" "}
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
