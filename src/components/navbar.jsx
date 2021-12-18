import React, { PureComponent } from "react";

export default class Navbar extends PureComponent {
  render() {
    return (
      <div className="navbar">
        <i className="fas fa-leaf navbar-logo"></i>
        <span className="nav-title">Habit Tracker</span>
        <span className="navbar-count">{this.props.totalCount}</span>
      </div>
    );
  }
}
