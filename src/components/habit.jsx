import React, { Component } from "react";

export default class Habit extends Component {
  render() {
    const { name, count } = this.props.habit;
    return (
      <li className="habit">
        <span className="habit-name">{name}</span>
        <span className="habit-count">{count}</span>
        <button
          className="habit-button habit-increase"
          onClick={() => this.props.onIncrement(this.props.habit)}
        >
          <i className="fas fa-plus-square"></i>
        </button>
        <button
          className="habit-button habit-decrease"
          onClick={() => this.props.onDecrement(this.props.habit)}
        >
          <i className="fas fa-minus-square"></i>
        </button>
        <button
          className="habit-button habit-delete"
          onClick={() => this.props.onDelete(this.props.habit)}
        >
          <i className="fas fa-trash"></i>
        </button>
      </li>
    );
  }
}
