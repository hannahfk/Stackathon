import axios from "./axios";

export const GET_USERS = "GET_USERS";
const DELETE_USER = "DELETE_USER";
const UPDATE_USER = "UPDATE_USER";

export const _getUsers = (users) => ({
  type: GET_USERS,
  users,
});

export const _deleteUser = (userId) => ({
  type: DELETE_USER,
  userId,
});

export const _updateUser = (user) => ({
  type: UPDATE_USER,
  user,
});

export const getUsers = () => {
  return async (dispatch) => {
    try {
      const { data: users } = await axios.get("/api/admin/users");
      dispatch(_getUsers(users));
    } catch (error) {
      console.log("Failed to fetch users (GET /api/admin/users)", error);
    }
  };
};

export const deleteUser = (id, history) => {
  return async (dispatch) => {
    try {
      await axios.delete(`/api/admin/users/${id}`);
      dispatch(_deleteUser(id));
      history.push("/admin/users");
    } catch (error) {
      console.log(
        `Failed to delete user (DELETE /api/admin/users/${id})`,
        error
      );
    }
  };
};

export const updateUser = (id, user, history) => {
  return async (dispatch) => {
    try {
      await axios.put(`/api/admin/users/${id}`, user);
      dispatch(_updateUser(user));
      history.push(`/admin/users/${id}`);
    } catch (error) {
      console.log(`Failed to update user (PUT /api/admin/users/${id})`, error);
    }
  };
};

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;
    case DELETE_USER:
      return state.filter((user) => user.id !== action.userId);
    case UPDATE_USER:
      return state.map((user) =>
        user.id === action.user.id ? action.user : user
      );
    default:
      return state;
  }
}
