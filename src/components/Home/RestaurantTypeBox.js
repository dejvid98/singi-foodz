import React, { Component } from "react";
import {Link} from 'react-router-dom';

export default class RestaurantTypeBox extends Component {
  render() {
    return (
      <div className='containa'>
        <div className="foodbox">
          <img src={this.props.img} alt="food" className="foodpic" />
          <div className='middle'>
            <div className="foodname"><Link className="foodname" to={this.props.link}>{this.props.name}</Link></div>
          </div>
        </div>
      </div>
    );
  }
}
