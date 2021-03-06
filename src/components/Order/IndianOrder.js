import React, { useContext } from 'react';
import { AppContext } from '../../Context';
import './Order.css';
import Header from '../Home/Header';
import Footer from '../Home/Footer';
import MenuItem from './MenuItem';
import Grid from '@material-ui/core/Grid';
import OrderConfirm from "../micro-components/OrderConfirmModal";
import MenuItem1 from '../../Assets/IndianMenu/1.jfif';
import MenuItem2 from '../../Assets/IndianMenu/2.jfif';
import MenuItem3 from '../../Assets/IndianMenu/3.jfif';
import MenuItem4 from '../../Assets/IndianMenu/4.jfif';
import MenuItem5 from '../../Assets/IndianMenu/5.jfif';
import MenuItem6 from '../../Assets/IndianMenu/6.jfif';

export default function Order(props) {
	const { reviewsContext } = useContext(AppContext);
	const { cartContext } = useContext(AppContext);
	const [ reviews, setReviews ] = reviewsContext;
	const [ cart, setCart ] = cartContext;

	const handleCheckout = () => {
		setReviews([ ...reviews, cart ]);
		setCart([]);
	};

	const handleCart = (name, price, quantity) => {
		setCart([
			...cart,
			{ restaurant: 'Grill 51 Bar', name, price, quantity, date: new Date().toLocaleString() }
		]);
	};


	const ingridients1 = [ 'Cheese', 'Pepperoni', 'Tomato ' ];
	const ingridients2 = [ 'Mozarella', 'Pepper', 'Flour' ];

	return (
    <div>
      <Header />
      <div className="selectBox">
        <h1>Cafe Lavash</h1>
        <br />
        <Grid container spacing={6}>
          <Grid item xs={4}>
            <div className="shopping-cart">
              <h3>Shopping Cart</h3>
              {cart.length === 0 ? (
                <p className="cart-info">
                  Your shopping cart is currently empty
                </p>
              ) : null}
              {cart.map(item => {
                return (
                  <div>
                    <hr />
                    <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <h5>{item.name}</h5>
                      </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        Price
                      </Grid>
                      <Grid item xs={6}>
                        Quantity
                      </Grid>
                    </Grid>

                    <Grid container spacing={4}>
                      <Grid item xs={6}>
                        {item.price}
                      </Grid>
                      <Grid item xs={6}>
                        {item.quantity}
                      </Grid>
                    </Grid>
                    <hr />
                  </div>
                );
              })}
            </div>
            <div className="checkout-button">
              <OrderConfirm onClick={handleCheckout} />
            </div>
          </Grid>
          <Grid item xs={8}>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <MenuItem
                  handleCart={handleCart}
                  title="Pepperoni"
                  price={450}
                  raitingValue={4}
                  image={MenuItem1}
                  ingredients1={ingridients1}
                  ingredients2={ingridients2}
                />
              </Grid>
              <Grid item xs={4}>
                <MenuItem
                  handleCart={handleCart}
                  title="Margherita"
                  price={650}
                  raitingValue={5}
                  image={MenuItem2}
                  ingredients1={ingridients1}
                  ingredients2={ingridients2}
                />
              </Grid>
              <Grid item xs={4}>
                <MenuItem
                  handleCart={handleCart}
                  title="Cheese"
                  price={250}
                  raitingValue={3}
                  image={MenuItem3}
                  ingredients1={ingridients1}
                  ingredients2={ingridients2}
                />
              </Grid>
            </Grid>
            <hr />
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <MenuItem
                  handleCart={handleCart}
                  title="Sausage"
                  price={350}
                  raitingValue={5}
                  image={MenuItem4}
                  ingredients1={ingridients1}
                  ingredients2={ingridients2}
                />
              </Grid>
              <Grid item xs={4}>
                <MenuItem
                  handleCart={handleCart}
                  title="Capricciosa"
                  price={750}
                  raitingValue={2}
                  image={MenuItem5}
                  ingredients1={ingridients1}
                  ingredients2={ingridients2}
                />
              </Grid>
              <Grid item xs={4}>
                <MenuItem
                  handleCart={handleCart}
                  title="Chicken and Ham"
                  price={400}
                  raitingValue={4}
                  image={MenuItem6}
                  ingredients1={ingridients1}
                  ingredients2={ingridients2}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Footer klas="footer-order" />
      </div>
    </div>
  );
}

Order.defaultProps = {
	restaurantName: 'Restaurant Name Props'
};
