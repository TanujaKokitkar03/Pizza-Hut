import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class MyNav extends Component {
  render() {
    return (
      <div> 
        <nav>
          <br/><br/><br/><br/><br/><br/>
          <li> <Link to="/"> Home </Link> </li> <br/><br/>
          <li> <Link to="about"> About Us </Link> </li> <br/><br/>
          <li> <Link to="vegpizza"> Veg Pizza </Link></li> <br/><br/>
          <li> <Link to="nonveg"> Non-Veg Pizza </Link></li> <br/><br/>
          <li> <Link to="meals"> Our Desserts </Link></li> <br/><br/>
          <li> <Link to="reviews"> Reviews </Link></li> <br/><br/>
          <li> <Link to="contact"> Login/Sign Up </Link></li> <br/><br/>
        </nav>
      </div>
    )
  }
}
