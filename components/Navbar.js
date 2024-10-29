import React from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const prod_url = process.env.PROD_URL;
  return (
    <nav className={`navbar mb-5 container-fluid-md fixed-top ${styles.navbar}`}>
      <a className="navbar-brand" href={prod_url}>NCS Nomopix Automation</a>
      <div className="d-flex align-items-center">
        <div className={styles.menu}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <a href="#" className={`btn btn-outline-light ${styles.feedback}`}>Feedback</a>
      </div>
    </nav>
  );
};

export default Navbar;
