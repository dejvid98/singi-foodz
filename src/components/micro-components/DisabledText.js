import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200
  }
}));

export default function UncontrolledTextField(props) {
  const classes = useStyles();

  return (
    <form className={classes.container} noValidate autoComplete="off">
      <TextField
        disabled={props.isDisabled}
        id="filled-disabled"
        defaultValue={props.text}
        className='profle-input-field'
        margin="normal"
        variant="outlined"
        label={props.name}
        color="secondary"
        onChange={props.handleInput}
        value={props.value}
        style={{color:'black',fontWeight:'bold'}}
        name={props.name}
      />
    </form>
  );
}
