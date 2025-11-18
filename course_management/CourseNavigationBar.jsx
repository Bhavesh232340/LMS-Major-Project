import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'; // optional styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <NavLink to="/register">Course Registration</NavLink>
      <NavLink to="/update">Course Update</NavLink>
      <NavLink to="/delete">Course Delete</NavLink>
      <NavLink to="/list">Course List</NavLink>
      <NavLink to="/details">Course Details</NavLink>
    </nav>
  );
};

export default Navbar;