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
      instructors: {}
    };
  }

  getInstructors = () => {
    axios({
      method: "GET",
      url: "/api/instructors"
    }).then(response => {
      this.setState({ instructors: response.data[0], loading: false });
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
          <h2> Instructors </h2>
        </div>
        <div className="cardInstructors">
          <div className="card-headerInstructors">
            <img src="http://images.mentalfloss.com/sites/default/files/styles/mf_image_16x9/public/507308-iStock-637147044.jpg?itok=CmLtFHJG&resize=1100x1100" />
          </div>
          <div className="card-contentInstructors">
            <h3>{this.state.instructors.instructor_name}</h3>
            <h4>{this.state.instructors.instructor_level} </h4>
            <h4>{this.state.instructors.instructor_speciality} </h4>
            <h4>{this.state.instructors.instructor_resorts} </h4>
            <h4>{this.state.instructors.instructor_ageRange} </h4>
          </div>
          <div className="card-footerInstructors">
            <ul>
              <li>
                <a href="/#">
                  <button className="buttonInstructors">
                    {" "}
                    Schedule Lesson{" "}
                  </button>
                  {/* <i className="fa fa-codepenInstructors" /> */}
                </a>
              </li>
            </ul>
          </div>
          <div className="card-contentInstructors">
            <h3>{this.state.instructors.instructor_name}</h3>
            <h4>{this.state.instructors.instructor_level} </h4>
            <h4>{this.state.instructors.instructor_speciality} </h4>
            <h4>{this.state.instructors.instructor_resorts} </h4>
            <h4>{this.state.instructors.instructor_ageRange} </h4>
          </div>
          <div className="card-footerInstructors">
            <ul>
              <li>
                <a href="/#">
                  <button className="buttonInstructors">
                    {" "}
                    Schedule Lesson{" "}
                  </button>
                  {/* <i className="fa fa-codepenInstructors" /> */}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
