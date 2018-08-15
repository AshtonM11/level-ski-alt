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
        <div class="vid-container">
          <video
            class="bgvid"
            autoplay="autoplay"
            muted="muted"
            preload="auto"
            loop
          >
            <source
              src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?1410742112"
              type="video/webm"
            />
          </video>
          <div class="inner-container">
            <video
              class="bgvid inner"
              autoplay="autoplay"
              muted="muted"
              preload="auto"
              loop
            >
              <source
                src="http://mazwai.com/system/posts/videos/000/000/109/webm/leif_eliasson--glaciartopp.webm?random=1"
                type="video/webm"
              />
            </video>

            <div class="box">
              <h1>Level Ski</h1>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <button>Login</button>
              <a href="http://localhost:3005/login">
                {" "}
                <p>
                  {" "}
                  <span>Sign Up </span>{" "}
                </p>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
