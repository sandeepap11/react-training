import React, { Component } from "react";

class Tab extends Component {
  render() {
    const { tab, isSelected } = this.props;
    return (
      <li
        style={{
          backgroundColor: !isSelected ? "black" : "white",
          color: isSelected ? "black" : "white"
        }}
        onClick={this.props.onSelectTab}
      >
        {tab.name}
      </li>
    );
  }
}

export default Tab;
