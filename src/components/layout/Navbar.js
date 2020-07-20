import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navbar = ({ title }) => {
  return (
    <nav className='navbar navbar-expand-sm bg-dark justify-content-between mb-3'>
      <h1 className='text-secondary'>{title}</h1>
      <ul className='navbar-nav'>
        <li className='nav-item'>
          <NavLink className='nav-link text-danger' to='/'>
            Home
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink className='nav-link' to='/about'>
            About
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Open Brewery',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
