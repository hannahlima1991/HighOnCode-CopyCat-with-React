import React, { Component } from "react";
import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="jumbotron">
        <h1 className="display-4">The curse of the current reviews</h1>
        <p className="lead">
          When you want to buy any application from the Apple iTunes store you
          have more choices than you can handle. Most of the users scroll past
          the application description completely avoiding it like ads displayed
          on the right column of your webpage. Their choice is dependent on
          three important factors price, screenshot and reviews.
        </p>
        <hr className="my-4"></hr>
      </div>
    );
  }
}

export default Content;
