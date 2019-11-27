import React from "react";
import Header from "../Home/Header";
import "./Profile.css";
import "../Home/Home.css";

import ProfileInfo from "./ProfileInfo";
import Footer from "../Home/Footer";

const profile = props => {
  return (
    <div>
      <Header />
      <div className="selectBox">
          <div id="pic"></div>
          <ProfileInfo value={props.value} handleInput={props.handleInput} />
          <Footer klas="footer-profile" />
      </div>
      
    </div>
  );
};

export default profile;
