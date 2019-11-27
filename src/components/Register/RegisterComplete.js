import React, { Component } from "react";
import "./Register.css";
import HomePhoto from "../../Assets/HomePhoto.jpeg";
import CheckBox from "../micro-components/CheckBox";
import Terms from "../micro-components/Terms";
import ProgressBar from "../micro-components/ProgressBar";
import Dialog from "../micro-components/Dialog";

export class Register extends Component {
  render() {
    return (
      <div>
        <img src={HomePhoto} id="photo" className="img" alt="" />
        <div className="form-container">
          <h1 className="title">SingiFoodz</h1>
          <div className="form">
            <div className="list">
              <div className="form-text">
                <p>First Name : {this.props.value.firstName}</p>
                <p>Last Name : {this.props.value.lastName}</p>
                <p>E-mail : {this.props.value.email}</p>
                <p>Phone : {this.props.value.phoneNumber}</p>
                <p>City : {this.props.value.city}</p>
                <p>Occupation : {this.props.value.occupation}</p>
                <span className='acept'>
                  <CheckBox text="I acept terms and conditions" />
                </span>
                <Terms />
                <Dialog />
              </div>

              <ProgressBar
                step={2}
                next={"/registercomplete"}
                buttonName="Complete"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
