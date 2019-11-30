import React from 'react';
import Header from '../Home/Header';
import './Profile.css';
import '../Home/Home.css';
import Grid from '@material-ui/core/Grid';

import ProfileInfo from './ProfileInfo';

const profile = (props) => {
	return (
		<div>
			<Header />
			<div className="selectBox">
				<Grid container spacing={1}>
					<Grid item xs={6}>
						<div id="pic" />
					</Grid>
					<Grid item xs={6}>
						<ProfileInfo value={props.value} handleInput={props.handleInput} />
					</Grid>
				</Grid>
			</div>
		</div>
	);
};

export default profile;
