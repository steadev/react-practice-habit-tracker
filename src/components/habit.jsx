import React, { PureComponent } from "react";
import styles from "./habit.module.css";

export default class Habit extends PureComponent {
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className={styles.habit}>
        <span className={styles.habitName}>{name}</span>
        <span className={styles.habitCount}>{count}</span>
        <button
          className={`${styles.habitButton} ${styles.habitIncrease}`}
          onClick={() => this.props.onIncrement(this.props.habit)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className={`${styles.habitButton} ${styles.habitDecrease}`}
          onClick={() => this.props.onDecrement(this.props.habit)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className={`${styles.habitButton} ${styles.habitDelete}`}
          onClick={() => this.props.onDelete(this.props.habit)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
