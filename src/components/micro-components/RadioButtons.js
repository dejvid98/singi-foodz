import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(3),
  },
}));

export default function RadioButtonsGroup(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(props.default);

  const handleChange = event => {
    setValue(event.target.value);
    props.handleClick(event);
  };

  return (
    <div className='foodbuttons'>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">Food type</FormLabel>
        <RadioGroup aria-label="gender" name="gender1" value={value} onChange={handleChange}>
          <FormControlLabel value="sushi" control={<Radio />} label="Sushi" />
          <FormControlLabel value="pizza" control={<Radio />} label="Pizza" />
          <FormControlLabel value="sandwich" control={<Radio />} label="Sandwich" />
          <FormControlLabel value="pasta" control={<Radio />} label="Pasta" />
          <FormControlLabel value="indian" control={<Radio />} label="Indian" />
          <FormControlLabel value="barbeque" control={<Radio />} label="Barbeque" />
        </RadioGroup>
      </FormControl>
      </div>
  );
}