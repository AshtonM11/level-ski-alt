import React, { Component } from "react";
import Nav from "../Nav/Nav";
import "./Instructors.css";
import axios from "axios";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Loader } from "mx-react-components";

export default class Instructors extends Component {
  constructor() {
    super();
    this.state = {
      instructors: []
    };
  }

  getInstructors = () => {
    axios({
      method: "GET",
      url: "/api/instructors"
    }).then(response => {
      this.setState({ instructors: response.data, loading: false });
    });
  };

  componentDidMount = () => {
    this.getInstructors();
  };

  render() {
    return (
      <div>
        <div>
          <Nav />
          {this.state.loading ? (
            <Loader isLoading={this.state.loading} isRelative={true}>
              Loading...
            </Loader>
          ) : (
            <div />
          )}
        </div>
        <div>
          {this.state.instructors.map(instructors => (
            <figure className="instructors" key={instructors.id}>
              <img
                src={instructors.instructor_image}
                alt="profile-sample1"
                className="background"
              />
              <img
                src={instructors.instructor_image}
                alt="profile-sample1"
                className="profile"
              />
              <figcaption>
                <h3>{instructors.instructor_name}</h3>
                <span>Expertise: {instructors.instructor_speciality}</span>

                <div className="icons">
                  <h4>{instructors.instructor_resorts}</h4>
                  <h4>{instructors.instructor_level} Skiers </h4>
                  <h5>Ages: {instructors.instructor_ageRange}</h5>

                  <button className="instructorButton"> Schedule </button>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    );
  }
}
