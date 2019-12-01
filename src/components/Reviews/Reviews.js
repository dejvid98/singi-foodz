import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import './Reviews.css';
import Grid from '@material-ui/core/Grid';
import Header from '../Home/Header';
import Footer from '../Home/Footer';

export default function Reviews() {
	const { reviewsContext } = useContext(AppContext);
	//eslint-disable-next-line
	const [ reviews, setReviews ] = reviewsContext;
	return (
		<div>
			<Header />
			<div className="reviews-container">
				<Grid container spacing={4}>
					<Grid item xs={6}>
						<div className="orders-box">
							<h1>Unreviewed 
                                Orders</h1>
                                <hr style={{border:'2px solid #ff4136'}}/>

						</div>
					</Grid>
					<Grid item xs={6}>
						<div className="orders-box">
							<h1>Reviewed <br/>Orders</h1>
                            <hr style={{border:'2px solid #ff4136'}}/>
						</div>
					</Grid>
				</Grid>
				<Footer klas="footer-reviews" />
			</div>
		</div>
	);
}
