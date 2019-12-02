import React, { useContext } from 'react';
import TextField from '../micro-components/TextField';
import Grid from '@material-ui/core/Grid';
import Footer from '../Home/Footer';

import { AppContext } from '../../Context';

const EnabledInfo = (props) => {
	const {profileInfoContext}  = useContext(AppContext);
	const [ profileInfo, setProfileInfo ] = profileInfoContext;
	const handleInput = (e) => {
		setProfileInfo({...profileInfo,
			[e.target.name]: e.target.value
		});
	};


	return (
		<div className="profile-info-box">
			<Grid container spacing={1} className="grid-enabled-info">
				<Grid item xs={6}>
					First Name :
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="firstName"
						value={profileInfo.firstName}
						text={profileInfo.firstName}
						handleInput={handleInput}
						klas="profle-input-field-second"
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1} className="grid-enabled-info">
				<Grid item xs={6}>
					Last Name :
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="lastName"
						value={profileInfo.lastName}
						text={profileInfo.lastName}
						handleInput={handleInput}
						klas="profle-input-field-second"
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1} className="grid-enabled-info">
				<Grid item xs={6}>
					City :
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="city"
						value={profileInfo.city}
						text={profileInfo.city}
						handleInput={handleInput}
						klas="profle-input-field-second"
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1} className="grid-enabled-info">
				<Grid item xs={6}>
					Phone Number :
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="phoneNumber"
						value={profileInfo.phoneNumber}
						text={profileInfo.phoneNumber}
						handleInput={handleInput}
						klas="profle-input-field-second"
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1} className="grid-enabled-info">
				<Grid item xs={6}>
					Occupation :
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="occupation"
						value={profileInfo.occupation}
						text={profileInfo.occupation}
						handleInput={handleInput}
						klas="profle-input-field-second"
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1} className="grid-enabled-info">
				<Grid item xs={6}>
					E-mail :
				</Grid>
				<Grid item xs={6}>
					<TextField
						name="email"
						value={profileInfo.email}
						text={profileInfo.email}
						handleInput={handleInput}
						klas="profle-input-field-second"
					/>
				</Grid>
			</Grid>
			<Footer klas="footer-enabled" />
		</div>
	);
};

export default EnabledInfo;
