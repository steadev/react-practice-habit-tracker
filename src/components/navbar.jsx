import React, { PureComponent } from "react";
import styles from "./navbar.module.css";

export default class Navbar extends PureComponent {
  render() {
    return (
      <div className={styles.navbar}>
        <i className={`fas fa-leaf ${styles.logo}`}></i>
        <span className={styles.title}>Habit Tracker</span>
        <span className={styles.count}>{this.props.totalCount}</span>
      </div>
    );
  }
}
