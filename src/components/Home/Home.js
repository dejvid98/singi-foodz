import React, { useContext } from "react";
import { AppContext } from "../../Context";
import "./Home.css";
import Header from "./Header";
import Footer from "./Footer";
import Alert from "../micro-components/Alert";
import AlertSecond from "../micro-components/AlertSecond";
import RestaurantTypeBox from "./RestaurantTypeBox";
import Sushi from "../../Assets/sushi.jpeg";
import Pizza from "../../Assets/pizza.jpeg";
import Indian from "../../Assets/indian.jpeg";
import Pasta from "../../Assets/pasta.jpeg";
import Sandwich from "../../Assets/sandwich.jpeg";
import Bbq from "../../Assets/bbq.jpeg";
import Grid from "@material-ui/core/Grid";

const Home = () => {
  const { alertOneContext } = useContext(AppContext);
  const { alertTwoContext } = useContext(AppContext);
  const [alertOne, setAlertOne] = alertOneContext;
  const [alertTwo, setAlertTwo] = alertTwoContext;

  const handleCloseOne = () => {
    setAlertOne(false);
    console.log(alertOne);
  };
  const handleCloseTwo = () => {
    setAlertTwo(false);
  };
  return (
    <div>
      <Header />
      {alertOne ? (
        <Alert
          message="Our website uses cookies"
          className="cookies"
          type="warning"
          margin="5rem"
          handleCloseOne={handleCloseOne}
          alertOne={alertOne}
        />
      ) : null}

      {alertTwo ? (
        <AlertSecond
          message="Account was successfully created"
          className="cookies"
          type="success"
          handleCloseTwo={handleCloseTwo}
        />
      ) : null}

      <div className="selectBox">
        <h1>Select your favourite type of food</h1>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <RestaurantTypeBox
              id="1"
              img={Sushi}
              name="Sushi"
              link="/restaurants/sushi"
            />
          </Grid>
          <Grid item xs={4}>
            <RestaurantTypeBox
              img={Pizza}
              id="2"
              name="Pizza"
              link="/restaurants/pizza"
            />
          </Grid>
          <Grid item xs={4}>
            <RestaurantTypeBox
              id="3"
              img={Sandwich}
              name="Sandwich"
              link="/restaurants/sandwich"
            />
          </Grid>
        </Grid>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <RestaurantTypeBox
              img={Pasta}
              id="4"
              name="Pasta"
              link="/restaurants/pasta"
            />
          </Grid>
          <Grid item xs={4}>
            <RestaurantTypeBox
              img={Indian}
              id="5"
              name="Indian"
              link="/restaurants/indian"
            />
          </Grid>
          <Grid item xs={4}>
            <RestaurantTypeBox
              img={Bbq}
              id="6"
              name="Barbeque"
              link="/restaurants/bbq"
            />
          </Grid>
        </Grid>
        <Footer klas="footer-home" />
      </div>
    </div>
  );
};

export default Home;
