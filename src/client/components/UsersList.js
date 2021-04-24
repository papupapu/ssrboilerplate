import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UserList extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(user => <li key={user.id}>{user.name}</li>);
  }

  render() {
    return (
      <div>
        Here are the users:
        <ul>
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return { users: state.users };
}

function loadData(store) {
  // through the store's dispatch method we invoke the fetch action
  // creating a promised that we return to the server
  return store.dispatch(fetchUsers());
}
export { loadData };
export default connect(mapStateToProps, { fetchUsers })(UserList);

