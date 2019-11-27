import React, { Component } from "react";
import "./Register.css";
import HomePhoto from "../../Assets/HomePhoto.jpeg";
import InputName from "../micro-components/InputName";
import InputPassword from "../micro-components/InputPassword";
import LocationCityOutlinedIcon from "@material-ui/icons/LocationCityOutlined";
import WorkOutlineOutlinedIcon from "@material-ui/icons/WorkOutlineOutlined";
import PhoneEnabledOutlinedIcon from "@material-ui/icons/PhoneEnabledOutlined";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import ProgressBar from "../micro-components/ProgressBar";

export class Register extends Component {
  render() {
    return (
      <div>
        <img src={HomePhoto} id="photo" alt="" className="img" />
        <div className="form-container">
          <h1 className="title">SingiFoodz</h1>
          <div className="form">
            <form>
              <div className="input-fields">
                <InputName
                  text="City"
                  icon={<LocationCityOutlinedIcon />}
                  handleInput={this.props.handleInput}
                  value={this.props.value.city}
                  name="city"
                  hasIcon="true"
                />
                <InputName
                  text="Occupation"
                  icon={<WorkOutlineOutlinedIcon />}
                  handleInput={this.props.handleInput}
                  value={this.props.value.occupation}
                  name="occupation"
                  hasIcon="true"
                />
                <InputName
                  text="Phone Number"
                  icon={<PhoneEnabledOutlinedIcon />}
                  handleInput={this.props.handleInput}
                  value={this.props.value.phoneNumber}
                  name="phoneNumber"
                  hasIcon="true"
                />
                <InputPassword text="Password" icon={<LockOutlinedIcon />} />
                <InputPassword
                  text="Confirm Password"
                  icon={<LockOutlinedIcon />}
                />
              </div>
              <ProgressBar
                step={1}
                next={"/registercomplete"}
                isntFirst={true}
                back={"/"}
                buttonName="Continue"
                isntLast={true}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
