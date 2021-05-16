import React from "react";
import { Link } from "react-router-dom";
import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <div className = {classes.navheader}>
      <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
            </li>
            <li>
            <Link to='/updateAccountDetails' >Update Account</Link>
            </li>
          </ul>
      </nav>
    </div>
  );
};
export default NavigationBar;