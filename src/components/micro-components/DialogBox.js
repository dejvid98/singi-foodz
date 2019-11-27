import React from "react";
import Dialog from "@material-ui/core/Dialog";
import CircularProgress from "@material-ui/core/CircularProgress";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import { Redirect } from "react-router-dom";

class DialogBox extends React.Component {
  state = {
    redirect: this.props.redirect
  };



  render() {
    return this.state.redirect ? (
      <Redirect to="/register2" />
    ) : (
      <div>
        <Dialog
          open={this.props.isOpen}
          onClose={this.handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogContent className="dialog">
            <DialogContentText id="alert-dialog-description">
              <h1>Registration is processing...</h1>
              <CircularProgress color="secondary" />
            </DialogContentText>
          </DialogContent>
        </Dialog>
      </div>
    );
  }
}

export default DialogBox;
