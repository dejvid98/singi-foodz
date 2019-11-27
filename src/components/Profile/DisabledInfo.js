import React, { Component } from "react";
import DisabledText from "../micro-components/DisabledText";

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
          <div>
            <DisabledText
              isDisabled={true}
              name="First Name"
              value={this.props.value.firstName}
              text={this.props.value.firstName}
            />
          </div>
          <div>
            {" "}
            <DisabledText
              isDisabled={true}
              name="Last Name"
              value={this.props.value.lastName}
              text={this.props.value.lastName}
            />
          </div>
          <div>
            {" "}
            <DisabledText
              isDisabled={true}
              name="City"
              value={this.props.value.city}
              text={this.props.value.city}
            />
          </div>
          <div>
            {" "}
            <DisabledText
              isDisabled={true}
              name="Phone Number"
              value={this.props.value.phoneNumber}
              text={this.props.value.phoneNumber}
            />
          </div>
          <div>
            {" "}
            <DisabledText
              isDisabled={true}
              name="Occupation"
              value={this.props.value.occupation}
              text={this.props.value.occupation}
            />
          </div>
          <div>
            {" "}
            <DisabledText
              isDisabled={true}
              name="E-mail"
              value={this.props.value.email}
              text={this.props.value.email}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default DisabledInfo;
