import React, { Component } from "react";
import "./Headers.css";

class Headers extends Component {
  render() {
    return (
      <div className="headers">
        <ul className="menu">
          <li>Home</li>
          <li>Articles</li>
        </ul>
      </div>
    );
  }
}

export default Headers;
