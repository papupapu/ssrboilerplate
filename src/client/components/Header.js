import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  const btn = auth
    ? (
      <a href="/api/logout">Logout</a>
    ) : (
      <a href="/api/auth/google">Login</a>
    );

  return (
    <div>
      <Link to="/">Home</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {btn}
      </div>
    </div>
  );
};

const mapStateToProps = ({ auth }) => ({ auth });
export default connect(mapStateToProps)(Header);
