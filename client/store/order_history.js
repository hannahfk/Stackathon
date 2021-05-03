import axios from "axios";

export const GET_HISTORY = "GET_HISTORY";

export const getHistory = (history) => {
  return {
    type: GET_HISTORY,
    history,
  };
};

export const fetchHistory = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`/api/order_history/${id}`);
      dispatch(getHistory(data));
    } catch (err) {
      console.log(err);
    }
  };
};

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_HISTORY:
      return action.history;
    default:
      return state;
  }
}
