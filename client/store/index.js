import { createStore, combineReducers, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import auth from "./auth";
import products from "./products";
import product from "./singleProduct";
import isLoading from "./isLoading";
import users from "./admin_users";
import adminProducts from "./admin_products";
import cart from "./cart";
import orderHistory from "./order_history";

const reducer = combineReducers({
  auth,
  products,
  product,
  isLoading,
  users,
  adminProducts,
  cart,
  orderHistory,
});
const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({ collapsed: true }))
);
const store = createStore(reducer, middleware);

export default store;
export * from "./auth";
