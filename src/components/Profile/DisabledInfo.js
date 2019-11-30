import React, { useContext } from 'react';
import DisabledText from '../micro-components/DisabledText';
import { AppContext } from '../../Context';
import Grid from '@material-ui/core/Grid';
import Footer from "../Home/Footer";


const DisabledInfo = (props) => {
	const { profileInfoContext } = useContext(AppContext);
	const [ profileInfo ] = profileInfoContext;
	return (
		<div className='profile-info-box'>
			<Grid container spacing={1}>
				<Grid item xs={6}>
					First Name
				</Grid>
				<Grid item xs={6}>
					<DisabledText
						isDisabled={true}
						name="First Name"
						value={profileInfo.firstName}
						text={profileInfo.firstName}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1}>
				<Grid item xs={6}>
					Last Name :
				</Grid>
				<Grid item xs={6}>
					<DisabledText
						isDisabled={true}
						name="Last Name"
						value={profileInfo.lastName}
						text={profileInfo.lastName}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1}>
				<Grid item xs={6}>
					City :
				</Grid>
				<Grid item xs={6}>
					<DisabledText isDisabled={true} name="City" value={profileInfo.city} text={profileInfo.city} />
				</Grid>
			</Grid>

			<Grid container spacing={1}>
				<Grid item xs={6}>
					Phone Number :
				</Grid>
				<Grid item xs={6}>
					<DisabledText
						isDisabled={true}
						name="Phone Number"
						value={profileInfo.phoneNumber}
						text={profileInfo.phoneNumber}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1}>
				<Grid item xs={6}>
					Occupation :
				</Grid>
				<Grid item xs={6}>
					<DisabledText
						isDisabled={true}
						name="Occupation"
						value={profileInfo.occupation}
						text={profileInfo.occupation}
					/>
				</Grid>
			</Grid>

			<Grid container spacing={1}>
				<Grid item xs={6}>
					E-mail :
				</Grid>
				<Grid item xs={6}>
					<DisabledText isDisabled={true} name="E-mail" value={profileInfo.email} text={profileInfo.email} />
				</Grid>
			</Grid>
      <Footer klas="footer-disabled" />

		</div>
	);
};

export default DisabledInfo;
