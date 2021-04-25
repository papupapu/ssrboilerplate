import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchUsers } from '../actions';

class UserList extends Component {
  componentDidMount() {
    const {
      props: {
        users,
        fetchUsers,
      },
    } = this;
    if (!users || !users.length) {
      fetchUsers();
    }
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

const mapStateToProps = (state) => ({ users: state.users });

const loadData = ({ dispatch }) => dispatch(fetchUsers());

export default {
  component: connect(mapStateToProps, { fetchUsers })(UserList),
  loadData,
};
