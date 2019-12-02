import React, { useContext } from 'react';
import './Register.css';
import HomePhoto from '../../Assets/HomePhoto.jpeg';
import CheckBox from '../micro-components/CheckBox';
import Terms from '../micro-components/Terms';
import ProgressBar from '../micro-components/ProgressBar';
import Dialog from '../micro-components/Dialog';
import { AppContext } from '../../Context';

const Register = (props) => {
	const { profileInfoContext } = useContext(AppContext);
	//eslint-disable-next-line
	const [ profileInfo, setProfileInfo ] = profileInfoContext;

	return (
		<div>
			<img src={HomePhoto} id="photo" className="img" alt="" />
			<div className="form-container">
				<h1 className="title">SingiFoodz</h1>
				<div className="form">
					<div className="list">
						<div className="form-text">
							<p>First Name : {profileInfo.firstName}</p>
							<p>Last Name : {profileInfo.lastName}</p>
							<p>E-mail : {profileInfo.email}</p>
							<p>Phone : {profileInfo.phoneNumber}</p>
							<p>City : {profileInfo.city}</p>
							<p>Occupation : {profileInfo.occupation}</p>
							<span className="acept">
								<CheckBox text="I acept terms and conditions" />
							</span>
							<Terms />
							<Dialog />
						</div>

						<ProgressBar step={2} next={'/registercomplete'} buttonName="Complete" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
