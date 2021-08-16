import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import HamburgerMenu from "react-hamburger-menu";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {
      open: false,
      hideOrShowHambugerDropDown: "nav",
    };
  }

  handleClick = () => {
    this.setState({ open: !this.state.open });
  };

  displayHamburgerMenu = () => {
    return (
      <HamburgerMenu
        isOpen={this.state.open}
        menuClicked={this.handleClick.bind(this)}
        width={18}
        height={15}
        strokeWidth={1}
        rotate={0}
        color="white"
        borderRadius={0}
        animationDuration={0.5}
      />
    );
  };

  displayNavBar = () => {
    return (
      <ul className="nav">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/practice-areas">Practice Areas</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/latest-updates">Latest Updates</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <button
          className="btn btn-warning"
          onClick={() =>
            document
              .getElementById("contact-form")
              .scrollIntoView({ behavior: "smooth", block: "end" })
          }
        >
          Appointment
        </button>
      </ul>
    );
  };

  displayMobileMenu = () => {
    return (
      <ul className="hamburgerDropDown">
        <li className="nav-link">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/practice-areas">Practice Areas</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/latest-updates">Latest Updates</NavLink>
        </li>
        <li className="nav-link">
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  };

  render() {
    return (
      <div className="navbar">
        {this.state.open ? this.displayMobileMenu() : null}
        {window.innerWidth > 1200
          ? this.displayNavBar()
          : this.displayHamburgerMenu()}
      </div>
    );
  }
}

export default NavBar;
