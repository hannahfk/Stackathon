import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { Button } from "../GlobalStyles";

export const Admin = (props) => {
  const { username } = props;
  return (
    <div>
      <h1 className="notwhite"> Welcome Admin {username}</h1>
      <ul>
        <li>
        <Button>
          <Link to="/admin/users"> All Users </Link>
          </Button>
        </li>
        <li>
        <Button>
          <Link to="/admin/products"> All Products </Link>
          </Button>
        </li>
      </ul>
    </div>
  );
};
const mapState = (state) => {
  return {
    username: state.auth.username,
    isAdmin: state.auth.isAdmin,
  };
};

export default connect(mapState)(Admin);
