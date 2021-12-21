import React from "react";
import styles from "./navbar.module.css";

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <i className={`fas fa-leaf ${styles.logo}`}></i>
      <span className={styles.title} onClick={handleClick}>Habit Tracker</span>
      <span className={styles.count}>{props.totalCount}</span>
    </div>
  );
}

export default Navbar;