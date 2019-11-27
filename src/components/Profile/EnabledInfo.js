import React, { Component } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "../micro-components/TextField";

class DisabledInfo extends Component {
  render() {
    return (
      <div>
        <div className="info2">
          <p>First Name</p>
          <br />
          <p>Last Name :</p>
          <br />
          <p>City :</p>
          <br />
          <p>Phone Number :</p>
          <br />
          <p>Occupation :</p>
          <br />
          <p>E-mail :</p>
        </div>
        <div className="info">
          <div className="textinfo">
            <TextField
              text="First Name"
              icon={<AccountCircle />}
              handleInput={this.props.handleInput}
              value={this.props.value.firstName}
              name="firstName"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="Last Name"
              icon={<AccountCircle />}
              handleInput={this.props.handleInput}
              value={this.props.value.lastName}
              name="lastName"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="City"
              icon={<AccountCircle />}
              handleInput={this.props.handleInput}
              value={this.props.value.city}
              name="city"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="Phone Number"
              icon={<AccountCircle />}
              handleInput={this.props.handleInput}
              value={this.props.value.phoneNumber}
              name="phoneNumber"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="Occupation"
              icon={<AccountCircle />}
              handleInput={this.props.handleInput}
              value={this.props.value.occupation}
              name="occupation"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="E-mail"
              icon={<AccountCircle />}
              handleInput={this.props.handleInput}
              value={this.props.value.email}
              name="email"
              hasIcon="false"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DisabledInfo;
