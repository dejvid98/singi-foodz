import React, { useContext } from "react";
import DisabledText from "../micro-components/DisabledText";
import { AppContext } from '../../Context';


const DisabledInfo = props => {
    const {profileInfoContext} = useContext(AppContext);
    const [profileInfo] = profileInfoContext;
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
              value={profileInfo.firstName}
              text={profileInfo.firstName}
            />
          </div>
          <div>
            <DisabledText
              isDisabled={true}
              name="Last Name"
              value={profileInfo.lastName}
              text={profileInfo.lastName}
            />
          </div>
          <div>
            <DisabledText
              isDisabled={true}
              name="City"
              value={profileInfo.city}
              text={profileInfo.city}
            />
          </div>
          <div>
            <DisabledText
              isDisabled={true}
              name="Phone Number"
              value={profileInfo.phoneNumber}
              text={profileInfo.phoneNumber}
            />
          </div>
          <div>
            <DisabledText
              isDisabled={true}
              name="Occupation"
              value={profileInfo.occupation}
              text={profileInfo.occupation}
            />
          </div>
          <div>
            <DisabledText
              isDisabled={true}
              name="E-mail"
              value={profileInfo.email}
              text={profileInfo.email}
            />
          </div>
        </div>
      </div>
    );
  }


export default DisabledInfo;
