import React, { useState, useContext } from "react";
import { AppContext } from "../../Context";
import "./Reviews.css";
import Grid from "@material-ui/core/Grid";
import Header from "../Home/Header";
import Footer from "../Home/Footer";
import ReviewModal from "../micro-components/ReviewModal";

export default function Reviews() {
  const { reviewsContext } = useContext(AppContext);
  //eslint-disable-next-line
  const [reviews, setReviews] = reviewsContext;
  let unreviewsList = [...reviews];
  let reviewedList = [];
  const [reviewedListState, setreviewedListState] = useState([]);
  const [unreviewedListState, setunreviewedListState] = useState([
    ...unreviewsList
  ]);

  const handleReview = () => {
    let order = unreviewsList.pop();
    reviewedList.push(order);
    setreviewedListState([...reviewedList]);
    setunreviewedListState([...unreviewsList]);
  };
  return (
    <div>
      <Header />
      <div className="reviews-container">
        <Grid container spacing={4}>
          <Grid item xs={6}>
            <div className="orders-box">
              <h1>Unreviewed Orders</h1>
              <hr style={{ border: "2px solid rgba(255,65,54,0.85)" }} />
              {unreviewedListState.length === 0 ? (
                <h5>
                  You don't have any <br />
                  new orders
                </h5>
              ) : null}
              {unreviewedListState.length >= 1
                ? unreviewedListState.map((order, index) => {
                    return (
                      <div className="orders-list-item">
                        <Grid container spacing={1} id={index}>
                          <Grid item xs={12}>
                            Restaurant :{order[index].restaurant}
                          </Grid>
                          <Grid item xs={12}>
                            Date : {order[index].date}
                          </Grid>
                          <Grid item xs={12} className="reviewitem">
                            Time : {order[index].tajm}
                          </Grid>
                          <Grid item xs={12}>
                            <ReviewModal
                              restaurant={order[index].restaurant}
                              date={order[index].date}
                              name={order[index].name}
                              price={order[index].price}
                              quantity={order[index].quantity}
                              raiting={order[index].raiting}
                              handleReview={handleReview}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })
                : null}
            </div>
          </Grid>
          <Grid item xs={6}>
            <div className="orders-box">
              <h1>
                Reviewed <br />
                Orders
              </h1>
              <hr style={{ border: "2px solid rgba(255,65,54,0.85)" }} />
              {reviewedListState.length === 0 ? (
                <h5>
                  You haven't reviewed
                  <br />
                  any orders yet
                </h5>
              ) : null}
              {reviewedListState.length >= 1
                ? reviewedListState.map((order, index) => {
                    return (
                      <div className="orders-list-item">
                        <Grid
                          container
                          spacing={1}
                          id={index}
                          className="reviewitem"
                        >
                          <Grid item xs={12}>
                            Restaurant :{order[index].restaurant}
                          </Grid>
                          <Grid item xs={12} className="reviewitem">
                            Date : {order[index].date}
                          </Grid>
                          <Grid item xs={12} className="reviewitem">
                            Time : {order[index].tajm}
                          </Grid>
                          <Grid item xs={12} className="reviewitem">
                            <ReviewModal
                              restaurant={order[index].restaurant}
                              date={order[index].date}
                              name={order[index].name}
                              price={order[index].price}
                              quantity={order[index].quantity}
                              id={index}
                              raiting={order[index].raiting}
                              handleReview={handleReview}
                            />
                          </Grid>
                        </Grid>
                      </div>
                    );
                  })
                : null}
            </div>
          </Grid>
        </Grid>
        <Footer klas="footer-reviews" />
      </div>
    </div>
  );
}
