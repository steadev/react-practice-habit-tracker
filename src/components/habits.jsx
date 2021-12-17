import React, { Component } from "react";
import Habit from "./habit";

export default class Habits extends Component {
  render() {
    return (
      <>
        <ul>
          {this.props.habits.map((habit) => (
            <Habit
              key={habit.id}
              habit={habit}
              onIncrement={this.props.onHandleIncrement}
              onDecrement={this.props.onHandleDecrement}
              onDelete={this.props.onHandleDelete}
            />
          ))}
        </ul>
        <div className="habits-reset" onClick={this.props.onResetAll}>
          Reset All
        </div>
      </>
    );
  }
}
