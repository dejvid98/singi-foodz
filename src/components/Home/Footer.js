import React, { Component } from "react";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import RssFeedIcon from "@material-ui/icons/RssFeed";

export default class Footer extends Component {
  render() {
    return (
      <div className={this.props.klas} id={this.props.id}>
        <div> Follow us on :</div>
        <div>
          <a href="https://www.facebook.com/">
            <FacebookIcon className="icons" />
          </a>
          <a href="https://www.instagram.com/" id="instagram">
            <InstagramIcon className="icons" />
          </a>
          <a href="https://www.twitter.com/" id="twitter">
            <TwitterIcon className="icons" />
          </a>
          <a href="https://rss.com/" id="rss">
            <RssFeedIcon className="icons" />
          </a>
        </div>
      </div>
    );
  }
}
