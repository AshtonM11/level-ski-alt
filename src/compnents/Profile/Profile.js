import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "mx-react-components";
import Nav from "../Nav/Nav";
import {
  updateStudentName,
  updateStudentAge,
  updateImageUrl
} from "../../ducks/reducer";
import "./Profile.css";

class Profile extends Component {
  constructor() {
    super();

    this.state = {
      user: {},
      loading: true
    };
  }

  getStudents = () => {
    axios({
      method: "GET",
      url: "/api/students"
    }).then(response => {
      this.setState({ user: response.data[0], loading: false });
    });
  };

  componentDidMount = () => {
    this.getStudents();
  };

  render() {
    console.log("this.state.user", this.state.user);
    return (
      <div>
        <Nav />
        {this.state.loading ? (
          <Loader isLoading={this.state.loading} isRelative={true}>
            Loading...
          </Loader>
        ) : (
          <div>
            {this.state.user.nickname ? (
              <h2> profile page </h2>
            ) : (
              <div>
                <Link to="/login" />
              </div>
            )}
          </div>
        )}

        <div className="userFormProfile">
          <header className="user__headerProfile">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
              alt=""
            />
            <h1 className="user__titleProfile">Your Stats</h1>
          </header>

          <form className="formProfile">
            <div className="form__groupProfile">
              <input
                placeholder={this.state.user.student_name}
                className="form__inputProfile"
              />
            </div>

            <div className="form__groupProfile">
              <input
                placeholder={this.state.user.student_age}
                className="form__inputProfile"
              />
            </div>

            <div className="form__groupProfile">
              <input
                placeholder={this.state.user.skill_level}
                className="form__inputProfile"
              />
            </div>

            <div className="form__groupProfile">
              <input
                placeholder={this.state.user.desired_skill}
                className="form__inputProfile"
              />
            </div>

            <div className="form__groupProfile">
              <input
                placeholder={this.state.user.resorts}
                className="form__inputProfile"
              />
            </div>
            <Link to="/instructors">
              <div>
                <button className="button-submitProfile">
                  {" "}
                  Find Instructors{" "}
                </button>
              </div>
            </Link>
          </form>
        </div>

        {/* <Link to="/form">
          <div>
            <button className="linkButtonProfile"> Update Profile </button>
          </div>
        </Link> */}
      </div>
    );
  }
}

export default connect(
  null,
  { updateStudentAge, updateImageUrl, updateStudentName }
)(Profile);
