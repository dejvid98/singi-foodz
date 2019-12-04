import React from "react";
import TextField from "@material-ui/core/TextField";

export default function BasicTextFields(props) {

  return (
      <TextField
        id="standard-basic"
        label={props.text}
        color="secondary"
        onChange={props.handleInput}
        value={props.value}
        name={props.name}
        className={props.klas}
      />
  );
}
