import React, { useState, createContext } from 'react';

export const AppContext = createContext();

export const ContextProvider = (props) => {
	//eslint-disable-next-line
	const [ profileInfo, setProfileInfo ] = useState({
		firstName: '',
		lastName: '',
		email: '',
		phoneNumber: '',
		city: '',
		occupation: '',
		food: ''
	});

	return (
		<AppContext.Provider value={{ profileInfoContext: [ profileInfo, setProfileInfo ] }}>
			{props.children}
		</AppContext.Provider>
	);
};
