import React, { PureComponent, Fragment } from "react";

class Select extends PureComponent {
  state = {
    options: [
      {
        name: "Select Price",
        value: null
      },
      {
        name: "Cheap $",
        value: "1"
      },
      {
        name: "Affordable $$",
        value: "2"
      },
      {
        name: "Expensive $$$",
        value: "3"
      }
    ],
    value: ""
  };

  handleSelect = event => {
    this.setState({ value: event.target.value });
    this.props.handleChange(event);
  };

  render() {
    const { options, value } = this.state;

    return (
      <Fragment>
        <select onChange={this.handleSelect} value={value} className='box'>
          {options.map(item => (
            <option key={item.value} value={item.value}>
              {item.name}
            </option>
          ))}
        </select>
      </Fragment>
    );
  }
}

export default Select;
