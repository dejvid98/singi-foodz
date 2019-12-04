import React, { Component } from "react";
import RadioButtons from "../micro-components/RadioButtons";
import Switch from "../micro-components/Switch";
import Select from '../micro-components/Select'

export default class FilterForm extends Component {
  render() {
    return (
      <div className="filterDivider">
        <RadioButtons
          default={this.props.default}
          handleClick={this.props.handleClick}
        />
        <Select name='Price' handleChange={this.props.handleChange}/>
        <Switch text="Is open" handleSwitch={this.props.handleSwitch} />
      </div>
    );
  }
}
