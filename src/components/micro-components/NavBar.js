import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import RestaurantIcon from '@material-ui/icons/Restaurant';
import RateReviewIcon from '@material-ui/icons/RateReview';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Navbar = () => {
  return (
    <div>
      <Link className="menu" to='/home'><HomeIcon/><span className='text'>HOME</span></Link>
      <Link className="menu" to='/restaurants/pizza'><RestaurantIcon/><span className='text'>RESTAURANTS</span></Link>
      <Link className="menu" to='/reviews'><RateReviewIcon/> <span className='text'>REVIEWS</span></Link>
      <Link className="menu" to='/profile'><AccountCircleIcon/> <span className='text'>PROFILE</span></Link>

    </div>
  );
};

export default Navbar;
