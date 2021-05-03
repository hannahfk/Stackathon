import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";
import Cart from "./Cart";
import OrderHistory from "./OrderHistory";

const Navbar = ({ handleClick, isLoggedIn, isAdmin }) => (
  <div>
    <Link to="/home">
      <h1 className="notwhite">NYC City Tickets 🎫</h1>
    </Link>
    <nav>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}{" "}
          {isAdmin ? (
            <Link to="/admin"> 🏚 Admin Home </Link>
          ) : (
            <Link to="/home"> 🏠 Home</Link>
          )}
          <Link to="/products"> 🎶Events </Link>
          <Link to="/cart"> 🛒 Cart </Link>
          <Link to="/orderHistory"> 💰Order History</Link>
          <a href="#" onClick={handleClick}>
            💔Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
          <Link to="/products"> 🎶Events </Link>
        </div>
      )}
    </nav>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);
