import React from "react";
import DialogBox from "./DialogBox";
import DelayLink from "react-delay-link";

class AlertDialog extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
      redirect: false
    };
  }

  handleClickOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };
  render() {
    return (
      <div>
        <DelayLink
          variant="contained"
          color="secondary"
          clickAction={this.handleClickOpen}
          className="continue"
          delay={3000}
          to="/home"
        >
          <button className="continue">Complete</button> 
        </DelayLink>
        <DialogBox isOpen={this.state.isOpen} redirect={this.state.redirect} />
      </div>
    );
  }
}

export default AlertDialog;
