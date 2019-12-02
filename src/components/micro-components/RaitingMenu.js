import React,{useContext} from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import {AppContext} from '../../Context';

export default function SimpleRating(props) {
	const {menuOptionsRaitingContext} = useContext(AppContext);
	const [ menuOptionsRaiting, setMenuOptionsRaiting ] = menuOptionsRaitingContext;

	return (
		<div>
			<Box component="fieldset" mb={3} borderColor="transparent">
				<Rating
					value={menuOptionsRaiting}
					onChange={(event, newValue) => {
						setMenuOptionsRaiting(newValue);
					}}
				/>
			</Box>
		</div>
	);
}


