import React, { Component } from "react";
import "../Restaurants.css";
import Header from "../../Home/Header";
import Footer from "../../Home/Footer";
import RestaurantList from "../RestaurantList2";
import FilterForm from "../FilterForm";
import Restaurant from "../Restaurant";
import Grid from "@material-ui/core/Grid";
import { Link } from "react-router-dom";
import Fab from "@material-ui/core/Fab";
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

class Pizza extends Component {
  state = {
    food: "pasta",
    price: 3,
    delivery: 85,
    isOpen: true
  };

  render() {
    return (
      <div>
        <Header />
        <div className="selectBox">
          <h1>Select desired pizza restaurant</h1>
          <Grid container spacing={1}>
            <Grid item xs={4}>
              <FilterForm
                default="pasta"
                handleSwitch={e =>
                  this.setState({ isOpen: !this.state.isOpen })
                }
                handleClick={e => this.setState({ food: e.target.value })}
                handleChange={e => this.setState({ price: e.target.value })}
              />
            </Grid>
            <Grid item xs={4}>
              <div>
                {RestaurantList.map(restaurant => {
                  let link = `/restaurants/pasta/${restaurant.food}order`;
                  return (
                    <Restaurant
                      key={restaurant.name}
                      link={link}
                      name={restaurant.name}
                      photo={restaurant.photo}
                      foodreq={this.state.food}
                      deliveryreq={this.state.delivery}
                      isOpenreq={this.state.isOpen}
                      pricereq={this.state.price}
                      food={restaurant.food}
                      delivery={restaurant.deliveryTime}
                      price={restaurant.price}
                      isOpen={restaurant.isOpen}
                      location={restaurant.location}
                    />
                  );
                })}
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={1} className="pages">
            <Grid item xs={2.5}>
              <Link to="/restaurants/pasta">
                <Fab color="secondary" aria-label="add">
                  <ArrowBackIosIcon />
                </Fab>
              </Link>
            </Grid>
            <Grid item xs={2.5}>
              <Link to="/restaurants/pasta">
                <Fab color="secondary" aria-label="add">
                  1
                </Fab>
              </Link>
            </Grid>
            <Grid item xs={2.5}>
              <Link to="/restaurants/pasta2">
                <Fab color="primary" aria-label="add">
                  2
                </Fab>
              </Link>
            </Grid>
            <Grid item xs={2.5}>
              <Link to="/restaurants/pasta3">
                <Fab color="secondary" aria-label="add">
                  3
                </Fab>
              </Link>
            </Grid>
            <Grid item xs={2.5}>
              <Link to="/restaurants/pasta3">
                <Fab color="secondary" aria-label="add">
                  <ArrowForwardIosIcon />
                </Fab>
              </Link>
            </Grid>
          </Grid>
          <Footer klas="footer-pizza" />
        </div>
      </div>
    );
  }
}

export default Pizza;
