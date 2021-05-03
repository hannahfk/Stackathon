import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { withRouter, Route, Switch, Redirect } from "react-router-dom";
import { Login, Signup } from "./components/AuthForm";
import Home from "./components/home";
import AllProducts from "./components/AllProducts";
import SingleProduct from "./components/SingleProduct";
import AdminAllUsers from "./components/Admin/AdminAllUsers";
import AdminAllProducts from "./components/Admin/AdminAllProducts";
import Admin from "./components/Admin/Admin";
import AdminEditProduct from "./components/Admin/AdminEditProduct";
import Cart from "./components/Cart";
import Thanks from "./components/Thanks";
import OrderHistory from "./components/OrderHistory";
/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const { isLoggedIn, isAdmin } = this.props;

    return (
      <div>
        {isLoggedIn ? (
          <Switch>
            <Route exact path="/cart" component={Cart} />
            <Route path="/home" component={Home} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/products" component={AllProducts} />
            <Route exact path="/cart" component={Cart} />
            <Route exact path="/thanks" component={Thanks} />
            {/* Routes below for admin */}
            <Route exact path="/admin/users" component={AdminAllUsers} />
            <Route exact path="/admin/products" component={AdminAllProducts} />
            <Route
              exact
              path="/admin/products/:id/edit"
              component={AdminEditProduct}
            />
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/orderHistory" component={OrderHistory} />

            <Redirect to="/products" />
          </Switch>
        ) : (
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
            <Route exact path="/products/:id" component={SingleProduct} />
            <Route exact path="/products" component={AllProducts} />
          </Switch>
        )}
      </div>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.auth that has a truthy id.
    // Otherwise, state.auth will be an empty object, and state.auth.id will be falsey
    isLoggedIn: !!state.auth.id,
    isAdmin: state.auth.isAdmin,
  };
};

const mapDispatch = (dispatch) => {
  return {
    loadInitialData() {
      dispatch(me());
    },
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));
