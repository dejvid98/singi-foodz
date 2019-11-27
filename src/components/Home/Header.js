import React, { Component } from "react";
import "./Home.css";
import Background from "../../Assets/Background.jpeg";
import NavBar from "../micro-components/NavBar";

class Header extends Component {
  render() {
    return (
      <div>
        <img src={Background} id="photo" alt="" className="img" />
        <div className="container">
          <div className="title-box">
            <h1 className="title">SingiFoodz</h1>
          </div>
          <NavBar />
        </div>
      </div>
    );
  }
}

export default Header;
