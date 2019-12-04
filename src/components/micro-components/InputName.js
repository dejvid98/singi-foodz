import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default class InputWithIcon extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasIcon: this.props.hasIcon
    };
  }
  render() {
    return (
      <>
        {this.state.hasIcon ? (
          <div>
            <div>
              <Grid container spacing={1} alignItems="flex-end">
                <Grid item>{this.props.icon}</Grid>
                <Grid item>
                  <TextField
                    id="input-with-icon-grid"
                    label={this.props.text}
                    color="secondary"
                    onChange={this.props.handleInput}
                    value={this.props.value}
                    name={this.props.name}
                  />
                </Grid>
              </Grid>
            </div>
          </div>
        ) : null}
      </>
    );
  }
}
