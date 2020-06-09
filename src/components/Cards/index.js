import React, { Component } from "react";
import "./Cards.css";

class Cards extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Hello Watchkit</h5>
            <p className="card-text">
              Last month Apple released the anticipated WatchKit Framework for
              developers in the form of iOS 8.2 beta SDK release. The WatchKit
              framework enable the developers to create Apple Watch
              applications. In this article we are going to focus on the basics
              of getting started with the WatchKit framework and developing apps
              for the Apple Watch.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Introduction to Swift</h5>
            <p className="card-text">
              {" "}
              Swift is a modern programming language developed by Apple to
              create the next generation of iOS and OSX applications. Swift is a
              fairly new language and still in development but it clearly
              reflects the intentions and the future direction. This article
              will revolve around the basic concepts in the Swift language and
              how you can get started.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
