import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Fab from "@material-ui/core/Fab";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

function PaperComponent(props) {
  return <Paper {...props} />;
}

export default function DraggableDialog(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
    props.onClick();
  };

  const handleClose = () => {
    setOpen(false);
  };
  // <Link to="/reviews" style={{textDecoration : 'none'}}>

  return (
    <div>
      <div onClick={handleClickOpen}>
        <Fab variant="extended" color="secondary" className="checkout-button">
          <div
            style={{
              paddingLeft: "35px",
              paddingRight: "35px"
            }}
          >
            <ShoppingCartIcon />
            Checkout
          </div>
        </Fab>
      </div>
      <div style={{ textAlign: "center" }}>
        <Dialog
          open={open}
          onClose={handleClose}
          PaperComponent={PaperComponent}
          style={{ textAlign: "center" }}
        >
          <DialogTitle
            style={{ cursor: "move", textAlign: "center" }}
            id="draggable-dialog-title"
          >
            Your order has been successfully placed!
          </DialogTitle>
          <DialogContent>
            <DialogContentText style={{ textAlign: "center" }}>
              Please head over to reviews page, and let us know much you enjoyed
              using our service.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Link
              style={{ textDecoration: "none" }}
              to="/reviews"
            >
              <button class="forward">
                <span>Continue </span>
              </button>
            </Link>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );
}
