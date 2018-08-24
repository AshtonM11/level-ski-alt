import React, { Component } from "react";
import axios from "axios";
import "./Form.css";
import img from "../../Images/new-color-logo.png";
import { connect } from "react-redux";
import Nav from "../Nav/Nav";

import { Link } from "react-router-dom";
import {
  updateStudentName,
  updateStudentAge,
  updateSkillLevel,
  updateDesiredSkill,
  updateResorts
} from "../../ducks/reducer";

class Form extends Component {
  constructor() {
    super();
    this.state = {};
  }

  insertInfo = data => {
    console.log("hit data", this.props.userInfo);
    //axios.post('database')
    axios({
      method: "POST",
      url: "/api/students",
      data: this.props.userInfo
    }).then(() => {
      this.props.history.push("/");
    });
  };

  render() {
    const { userInfo } = this.props;
    console.log("this is this.props", this.props);

    return (
      <div>
        <Nav> </Nav>
        <div className="userForm">
          <header className="user__header">
            <img
              src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3219/logo.svg"
              alt=""
            />
            <h1 className="user__title">Tell us about yourself</h1>
          </header>

          <form className="form">
            <div className="form__group">
              <input
                value={this.props.student_name}
                onChange={e => this.props.updateStudentName(e.target.value)}
                type="text"
                placeholder="Full Name"
                className="form__input"
              />
            </div>

            <div className="form__group">
              <input
                onChange={e => this.props.updateStudentAge(e.target.value)}
                type="number"
                placeholder="Age"
                className="form__input"
              />
            </div>

            <div className="form__group">
              <input
                onChange={e => this.props.updateSkillLevel(e.target.value)}
                type="text"
                placeholder="Your skill level? Beginner, Intermediate, Advanced or Expert"
                className="form__input"
              />
            </div>

            <div className="form__group">
              <input
                onChange={e => this.props.updateDesiredSkill(e.target.value)}
                type="text"
                placeholder="What do you want to learn? Basics, Park, All Mountain or Cliffs"
                className="form__input"
              />
            </div>

            <div className="form__group">
              <input
                onChange={e => this.props.updateResorts(e.target.value)}
                type="text"
                placeholder="What resorts do you prefer, if any?"
                className="form__input"
              />
              <Link to="/">
                <button
                  onClick={e => {
                    e.preventDefault();
                    console.log(userInfo);
                    this.insertInfo(userInfo);
                    this.props.history.push("/");
                  }}
                  className="button-submit"
                  type="button"
                >
                  Go To Profile
                </button>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state
  };
}

export default connect(
  mapStateToProps,
  {
    updateStudentName,
    updateStudentAge,
    updateSkillLevel,
    updateDesiredSkill,
    updateResorts
  }
)(Form);
