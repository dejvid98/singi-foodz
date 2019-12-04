import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating(props) {

  return (
    <div>
      <Box component="fieldset" mb={3} borderColor="transparent">
        <Typography component="legend">Raiting</Typography>
        <Rating name="read-only" value={props.value} readOnly />
      </Box>

    </div>
  );
}

SimpleRating.defaultProps = {
    value : 3
}