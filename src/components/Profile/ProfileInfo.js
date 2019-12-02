import React, { Component } from "react";
import Fab from "@material-ui/core/Fab";
import DisabledInfo from "./DisabledInfo";
import EditIcon from "@material-ui/icons/Edit";
import EnabledInfo from "./EnabledInfo";
import ConfirmButton from "../micro-components/ConfirmButton";

class ProfileInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isDisabled: "true"
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({ isDisabled: true });
  };
  render() {
    return (
      <div >
        {this.state.isDisabled ? (
          <div >
            <DisabledInfo value={this.props.value} />
            <div className="edit">
              <Fab
                color="secondary"
                aria-label="edit"
                onClick={e => this.setState({ isDisabled: false })}
              >
                <EditIcon onClick={e => this.setState({ isDisabled: false })} />
              </Fab>
            </div>
          </div>
        ) : (
          <div>
            <EnabledInfo
              value={this.props.value}
              handleInput={this.props.handleInput}
            />
            <div className="confirm">
              <ConfirmButton
                confirm={e => this.setState({ isDisabled: true })}
                cancel={e => this.setState({ isDisabled: false })}
              />
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default ProfileInfo;
