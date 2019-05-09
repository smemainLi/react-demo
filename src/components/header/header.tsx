import React, { Component } from "react";
import Title from "../title/Title";

class Header extends Component {
  render() {
    return (
      <div>
        <Title></Title>
        <div>This is header</div>
      </div>
    )
  }
}

export default Header;