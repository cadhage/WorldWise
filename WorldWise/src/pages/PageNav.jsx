import React from "react";
import { NavLink } from "react-router-dom";
import styles from "../components/PageNav.module.css";
const PageNav = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Prodcut</NavLink>
        </li>
        {/* <li>
          <Link to="*">PageNotFound</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default PageNav;
