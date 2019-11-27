import React, { Component } from "react";
import "./Register.css";
import HomePhoto from "../../Assets/HomePhoto.jpeg";
import InputName from "../micro-components/InputName";
import AccountCircle from "@material-ui/icons/AccountCircle";
import AlternateEmailOutlinedIcon from "@material-ui/icons/AlternateEmailOutlined";
import ProgressBar from "../micro-components/ProgressBar";

export class Register extends Component {
  render() {
    return (
      <div className="page">
        <img src={HomePhoto} id="photo" alt="" className="img" />
        <div className="form-container">
          <h1 className="title">SingiFoodz</h1>
          <div className="form">
            <form>
              <div className="input-fields">
                <InputName
                  text="First Name"
                  icon={<AccountCircle />}
                  handleInput={this.props.handleInput}
                  value={this.props.value.firstName}
                  name="firstName"
                  hasIcon="true"
                />
                <InputName
                  text="Last Name"
                  icon={<AccountCircle />}
                  handleInput={this.props.handleInput}
                  value={this.props.value.lastName}
                  name="lastName"
                  hasIcon="true"
                />
                <InputName
                  text="E-mail"
                  icon={<AlternateEmailOutlinedIcon />}
                  handleInput={this.props.handleInput}
                  value={this.props.value.email}
                  name="email"
                  hasIcon="true"
                />
              </div>
              <ProgressBar
                step={0}
                next={"/register2"}
                buttonName="Continue"
                isntLast={true}
                style={{ borderRadius: "8rem" }}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
