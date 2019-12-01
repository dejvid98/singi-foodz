import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import './Reviews.css';
import Grid from '@material-ui/core/Grid';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import ReviewModal from '../micro-components/ReviewModal';

export default function Reviews() {
	const { reviewsContext } = useContext(AppContext);
	//eslint-disable-next-line
	const [ reviews, setReviews ] = reviewsContext;
	const unreviewsList = [ ...reviews ];
	const reviewedList = [];
	return (
		<div>
			<Header />
			<div className="reviews-container">
				<Grid container spacing={4}>
					<Grid item xs={6}>
						<div className="orders-box">
							<h1>Unreviewed Orders</h1>
							<hr style={{ border: '2px solid rgba(255,65,54,0.85)' }} />
							{unreviewsList.length === 0 ? <h5>You don't have any orders</h5> : null}
							{unreviewsList.map((order, index) => {
								return (
									<div className="orders-list-item">
										<Grid container spacing={1} id={index}>
											<Grid item xs={12}>
												Restaurant :{order.cart[index].restaurant}
											</Grid>
											<Grid item xs={12}>
												Date : {order.cart[index].date}
											</Grid>
											<Grid item xs={12}>
												<ReviewModal
													restaurant={order.cart[index].restaurant}
													date={order.cart[index].date}
													name={order.cart[index].name}
													price={order.cart[index].price}
													quantity={order.cart[index].quantity}
                                                    id={index}
                                                    raiting={order.cart[index].raiting}
												/>
											</Grid>
										</Grid>
									</div>
								);
							})}
						</div>
					</Grid>
					<Grid item xs={6}>
						<div className="orders-box">
							<h1>
								Reviewed <br />Orders
							</h1>
							<hr style={{ border: '2px solid rgba(255,65,54,0.85)' }} />
							{reviewedList.length === 0 ? (
								<h5>
									You haven't reviewed <br />any orders yet
								</h5>
							) : null}
                            	{reviewedList.map((order, index) => {
								return (
									<div className="orders-list-item">
										<Grid container spacing={1} id={index}>
											<Grid item xs={12}>
												Restaurant :{order.cart[index].restaurant}
											</Grid>
											<Grid item xs={12}>
												Date : {order.cart[index].date}
											</Grid>
											<Grid item xs={12}>
												<ReviewModal
													restaurant={order.cart[index].restaurant}
													date={order.cart[index].date}
													name={order.cart[index].name}
													price={order.cart[index].price}
													quantity={order.cart[index].quantity}
                                                    id={index}
                                                    raiting={order.cart[index].raiting}
												/>
											</Grid>
										</Grid>
									</div>
								);
							})}
						</div>
					</Grid>
				</Grid>
				<Footer klas="footer-reviews" />
			</div>
		</div>
	);
}
