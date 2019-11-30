import React, { useContext } from "react";
import AccountCircle from "@material-ui/icons/AccountCircle";
import TextField from "../micro-components/TextField";
import { AppContext } from '../../Context';

const EnabledInfo = props => {
    const {profileInfoContext} = useContext(AppContext);
    const [profileInfo,setProfileInfo] = profileInfoContext;
    
    const handleInput = (e) => {
      setProfileInfo({...profileInfo,
        [e.target.name]: e.target.value
      });
    };

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
              handleInput={handleInput}
              value={profileInfo.firstName}
              name="firstName"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="Last Name"
              icon={<AccountCircle />}
              handleInput={handleInput}
              value={profileInfo.lastName}
              name="lastName"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="City"
              icon={<AccountCircle />}
              handleInput={handleInput}
              value={profileInfo.city}
              name="city"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="Phone Number"
              icon={<AccountCircle />}
              handleInput={handleInput}
              value={profileInfo.phoneNumber}
              name="phoneNumber"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="Occupation"
              icon={<AccountCircle />}
              handleInput={handleInput}
              value={profileInfo.occupation}
              name="occupation"
              hasIcon="false"
            />
          </div>
          <div className="textinfo">
            <TextField
              text="E-mail"
              icon={<AccountCircle />}
              handleInput={handleInput}
              value={profileInfo.email}
              name="email"
              hasIcon="false"
            />
          </div>
        </div>
      </div>
    );
  }



export default EnabledInfo;
