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
  // componentDidMount() {
  //   axios({
  //     method: "get",
  //     url: "/api/students"
  //   }).then(response => {
  //     console.log("this is response", response);
  //     this.props.updateStudentName(response.data.nickname);
  //     this.props.updateImageUrl(response.data.picture);
  //     this.setState({ user: response.data, loading: false });
  //   });
  // }

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
                <Link to="/login">Return to login</Link>
              </div>
            )}
          </div>
        )}

        <div className="bodyProfile">
          <div className="wrapperProfile">
            <div className="applicationProfile">
              <div className="headerProfile">
                <div className="userProfile">
                  <div
                    className="avaProfile"
                    style={{
                      backgroundImage: `url('${this.state.user.image_url}')`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat"
                    }}
                  />
                  {/* <img src={this.state.user.image_url} /> */}
                  <div className="nicknameProfile">Ashton</div>
                </div>
              </div>
              <div className="contentProfile">
                <div className="tabsProfile">
                  <div className="tabProfile">
                    <div className="labelProfile">Age</div>
                    <div className="countProfile">27</div>
                  </div>
                  <div className="tabProfile">
                    <div className="labelProfile">Skill Level</div>
                    <div className="countProfile">Beginner</div>
                  </div>
                  <div className="tabProfile">
                    <div className="labelProfile">Learning</div>
                    <div className="countProfile">All Mountain</div>
                  </div>
                  <div className="tabProfile">
                    <div className="labelProfile">Resorts</div>
                    <div className="countProfile">Brighton</div>
                  </div>
                </div>
                <div className="friendsProfile">
                  <button className="friend moreProfile">
                    Find Instructors
                  </button>
                </div>
              </div>
              <Link to="/form">
                <div className="linkButtonProfile">
                  <button> Update Profile </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  { updateStudentAge, updateImageUrl, updateStudentName }
)(Profile);
