import React,{useContext} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {AppContext} from '../../Context';

export default function SimpleRating(props) {
	const {deliveryTimeRaitingContext} = useContext(AppContext);
	const [ deliveryTimeRaiting, setDeliveryTimeRaiting ] = deliveryTimeRaitingContext;

	return (
		<div>
			<Box component="fieldset" mb={3} borderColor="transparent">
				<Rating
				
					value={deliveryTimeRaiting}
					onChange={(event, newValue) => {
						setDeliveryTimeRaiting(newValue);
					}}
				/>
			</Box>
		</div>
	);
}


