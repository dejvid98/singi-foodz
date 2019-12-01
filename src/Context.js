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

	const [ reviews, setReviews ] = useState([]);
	const [ foodRaiting, setFoodRaiting ] = useState(0);
	const [ deliveryTimeRaiting, setDeliveryTimeRaiting ] = useState(2);
	const [ menuOptionsRaiting, setMenuOptionsRaiting ] = useState(3);



	return (
		<AppContext.Provider
			value={{
				profileInfoContext: [ profileInfo, setProfileInfo ],
				reviewsContext: [ reviews, setReviews ],
				foodRaitingContext:[ foodRaiting, setFoodRaiting ],
				deliveryTimeRaitingContext:[ deliveryTimeRaiting, setDeliveryTimeRaiting ],
				menuOptionsRaitingContext:[ menuOptionsRaiting, setMenuOptionsRaiting ]
			}}
		>
			{props.children}
		</AppContext.Provider>
	);
};
