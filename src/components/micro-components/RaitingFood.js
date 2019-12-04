import React,{useContext} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {AppContext} from '../../Context';

export default function SimpleRating(props) {
	const {foodRaitingContext} = useContext(AppContext);
	const [ foodRaiting, setFoodRaiting ] = foodRaitingContext;

	return (
		<div>
			<Box component="fieldset" mb={3} borderColor="transparent">
				<Rating
					value={foodRaiting}
					onChange={(event, newValue) => {
						setFoodRaiting(newValue);
					}}
				/>
			</Box>
		</div>
	);
}


