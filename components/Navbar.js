import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={`navbar fixed-top ${styles.navbar}`}>
      <a className="navbar-brand" href="#">NCS Nomopix Automation</a>
      <div className="d-flex align-items-center">
        <div className="me-3">
          <img src="https://via.placeholder.com/24" alt="Social 1" />
          <img src="https://via.placeholder.com/24" alt="Social 2" />
          <img src="https://via.placeholder.com/24" alt="Social 3" />
        </div>
        <a href="#" className={`btn btn-outline-light ${styles.feedback}`}>Feedback</a>
      </div>
    </nav>
  );
};

export default Navbar;
