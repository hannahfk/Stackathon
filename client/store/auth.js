import axios, { removeToken, setToken } from "./axios";
import history from "../history";

/**
 * ACTION TYPES
 */
const SET_AUTH = "SET_AUTH";

/**
 * ACTION CREATORS
 */
const setAuth = (auth) => ({ type: SET_AUTH, auth });

/**
 * THUNK CREATORS
 */

/*export const me = () => async dispatch => {

  const token = window.localStorage.getItem(TOKEN)
  

  if (token) {
    const res = await axios.get('/auth/me', {
      headers: {
        authorization: token
      }
    })
    console.log('here is your res', token)
    return dispatch(setAuth(res.data))
  }
} */

export const me = () => async (dispatch) => {
  const res = await axios.get("/auth/me");

  return dispatch(setAuth(res.data));
};

//get single user

/* export const authenticate = (username, password, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, {username, password})
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({error: authError}))
  }
} */

/* export const authenticate = (username, password, method) => async dispatch => {
  try {
    const res = await axios.post(`/auth/${method}`, { username, password })
    window.localStorage.setItem(TOKEN, res.data.token)
    dispatch(me())
  } catch (authError) {
    return dispatch(setAuth({ error: authError }))
  }
} */

export const authenticate = (username, password, method) => async (
  dispatch
) => {
  try {
    const res = await axios.post(`/auth/${method}`, { username, password });
    const token = res.data.token;
    setToken(token);
    dispatch(me());
  } catch (authError) {
    return dispatch(setAuth({ error: authError }));
  }
};

/* export const logout = () => {
  window.localStorage.removeItem(TOKEN)
  history.push('/login')
  return {
    type: SET_AUTH,
    auth: {}
  }
} */
export const logout = () => {
  removeToken();
  history.push("/login");
  return {
    type: SET_AUTH,
    auth: {},
  };
};

/**
 * REDUCER
 */
export default function (state = {}, action) {
  switch (action.type) {
    case SET_AUTH:
      return action.auth;
    default:
      return state;
  }
}
