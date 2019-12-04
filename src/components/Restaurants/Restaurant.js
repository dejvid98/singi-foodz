import React from "react";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

export default function Restaurant(props) {
  const priceCalc = price => {
    let finalPrice = "";
    for (let i = 0; i < price; i++) {
      finalPrice += "$";
    }
    return finalPrice;
  };

  const price = priceCalc(props.price);

  return (
    <div>
      {props.foodreq === props.food &&
      props.delivery <= props.deliveryreq &&
      props.isOpen === props.isOpenreq &&
      props.price <= props.pricereq ? (
        <div>
          <div className="restaurantbox hvr-ripple-out">
            <h4> {props.name}</h4>
            <div className="imagelink">
              <Link to={props.link}>
                <img
                  src={props.photo}
                  alt={props.name}
                  className="restaurantpic"
                />
              </Link>
              <div className='restaurantinfo'>
              <Grid item xs={6}>
                Price :{price}
              </Grid>
              <Grid item xs={6}>
                Address : {props.location}
              </Grid>
              <Grid item xs={6}>
                Delivery time : {props.delivery}min
              </Grid>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}
