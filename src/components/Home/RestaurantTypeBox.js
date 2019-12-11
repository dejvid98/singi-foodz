import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class RestaurantTypeBox extends Component {
  render() {
    return (
      <div className="containa ">
        <Link className="foodname" to={this.props.link}>
          <div className="foodbox">
            <img src={this.props.img} alt="food" className="foodpic" />
            <div className="middle">
              {this.props.name}
            </div>
          </div>
        </Link>
      </div>
    );
  }
}
