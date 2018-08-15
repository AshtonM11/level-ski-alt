import React, { Component } from "react";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "mx-react-components";
import Nav from "../Nav/Nav";
import {
  updateStudentName,
  updateAge,
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

  componentDidMount() {
    axios({
      method: "get",
      url: "/api/user"
    }).then(response => {
      console.log("this is response", response);
      this.props.updateStudentName(response.data.nickname);
      this.props.updateImageUrl(response.data.picture);
      this.setState({ user: response.data, loading: false });
    });
  }

  render() {
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
        <Link to="/form">
          <button> Fill out form </button>
        </Link>
      </div>
    );
  }
}

export default connect(
  null,
  { updateAge, updateImageUrl, updateStudentName }
)(Profile);
