import React from "react";
import { connect } from "react-redux";
import { getUsers, deleteUser } from "../../store/admin_users";
import AdminUser from "./AdminUser";
// import { me } from "/client/store/auth";

export class AdminAllUsers extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    // this.fetchAllUserHandle = this.fetchAllUserHandle.bind(this)
    // this.state = {
    //    'loading':false
    // }
  }

  componentDidMount() {
    // this.props.verifyMe()
    this.props.getUsers();
  }

  // fetchAllUserHandle(){
  //    this.setState({loading:!this.state.loading})
  // }

  handleDelete(id) {
    this.props.deleteUser(id);
  }

  render() {
    const { users, isLoading } = this.props;

    if (isLoading) {
      return (
        <div>
          <h1>Loading Users!</h1>
        </div>
      );
    }

    return (
      <div>
        {/* <button onClick={this.fetchAllUserHandle}></button> */}
        <div>
          {Array.isArray(users) && users.length === 0 ? (
            <div className="main">
              <h4>There are no users registered in the database.</h4>
            </div>
          ) : (
            <div>
              <div className="all-items-row">
                <h2 className="notwhite"> ALL USERS: </h2>
                <p className="notwhite">{users.length} users in the database</p>
              </div>

              <div className="all-items-row">
                {users.map((user) => (
                  <div className="all-items-col" key={user.id}>
                    <AdminUser user={user} handleDelete={this.handleDelete} />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    users: state.users,
    isLoading: state.isLoading,
  };
};

const mapDispatch = (dispatch, { history }) => ({
  verifyMe: () => dispatch(me()),
  getUsers: () => dispatch(getUsers()),
  deleteUser: (userId) => dispatch(deleteUser(userId, history)),
});

export default connect(mapState, mapDispatch)(AdminAllUsers);
