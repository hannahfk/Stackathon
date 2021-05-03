import axios from "./axios";

//action constant
export const GET_CART = "GET_CART";
export const ADD_CART = "ADD_CART";
export const REMOVE_CART = "REMOVE_CART";
export const CHECKOUT = "CHECKOUT";
//action creator
export const getCart = (cart) => {
  return {
    type: GET_CART,
    cart,
  };
};

export const addToCart = (cart) => {
  return {
    type: ADD_CART,
    cart,
  };
};

export const removeFromCart = (cart) => {
  return {
    type: REMOVE_CART,
    cart,
  };
};

export const checkout = () => {
  return {
    type: CHECKOUT
  }
}
//thunk

export const getCartThunk = (userId, body) => {
  return async (dispatch) => {
    try {
      console.log("here in FETCH CART thunk-->", userId, body);
      const { data } = await axios.post(`/api/cart/${userId}`, body);
      dispatch(getCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const addToCartThunk = (body) => {
  return async (dispatch) => {
    try {
      console.log("here in ADD_PRODUCT thunk-->", body);
      const { data } = await axios.post(`/api/cart/addProduct`, body);
      dispatch(getCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const removeFromCartThunk = (body) => {
  return async (dispatch) => {
    try {
      console.log("here in DELETE_PRODUCT thunk-->", body);
      const { data } = await axios.put(`/api/cart/deleteProduct`, body);
      dispatch(removeFromCart(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const checkoutThunk = (userId, history) => {
  return async (dispatch) => {
    try {
      console.log('in checkout thunk');
      await axios.put(`/api/checkout/${userId}`);
      dispatch(checkout())
      history.push('/thanks')
  
    }catch (err){
      console.log(err);
    }
  }
 
}
//initial state
const initialState = {};

//reducer
export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return action.cart;
    case ADD_CART:
      return action.cart;
    case REMOVE_CART:
      return action.cart;
    default:
      return state;
  }
}
