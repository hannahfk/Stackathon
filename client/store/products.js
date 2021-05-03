import axios from "axios";

//action constant
export const SET_PRODUCTS = "SET_PRODUCTS";
//action creator
export const setProducts = (products) => {
  return {
    type: SET_PRODUCTS,
    products,
  };
};
//thunk
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get("/api/products");
      dispatch(setProducts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

//initial state
const initialState = [];
//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case SET_PRODUCTS:
      return action.products;
    default:
      return state;
  }
}
