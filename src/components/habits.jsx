import React, { Component } from "react";
import Habit from "./habit";
import HabitAddForm from "./habitAddForm";
import styles from "./habits.module.css";

export default class Habits extends Component {
  render() {
    return (
      <div className={styles.habits}>
        <HabitAddForm onAdd={this.props.onAdd} />
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onHandleIncrement}
              onDecrement={this.props.onHandleDecrement}
              onDelete={this.props.onHandleDelete}
              onAddItem={this.handleAddItem}
            />
          ))}
        </ul>
        <div className={styles.habitsReset} onClick={this.props.onReset}>
          Reset All
        </div>
      </div>
    );
  }
}
