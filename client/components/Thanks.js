import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../store";

const Thanks = ({ handleClick }) => (
  <div>
    <h1 class="notwhite">
      Thank you for your purchase. 🍾
      <br></br>
      Enjoy the show!
    </h1>
    <hr />
    <button class="notwhite">
      <Link to="/products">Keep Shopping</Link>
    </button>
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

export default Thanks;
