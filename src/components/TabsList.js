import React, { Component } from "react";
import Tab from "./Tab";
import "../styles/SASSStyles.scss";
import styled from "styled-components";

class TabsList extends Component {
  state = {
    selectedTab: 1
  };

  onSelectTab = selectedTab => this.setState({ selectedTab });

  render() {
    const viewIndex = TABS.findIndex(tab => tab.id === this.state.selectedTab);
    return (
      <div className="tabs-main">
        <ul>
          {TABS.map(tab => (
            <Tab
              tab={tab}
              key={tab.id}
              onSelectTab={() => this.onSelectTab(tab.id)}
              isSelected={this.state.selectedTab === tab.id}
            />
          ))}
        </ul>
        <div>{TABS[viewIndex].view}</div>
      </div>
    );
  }
}

export default TabsList;

const StyledDiv = styled.div`
  padding: 20px;
  background: papayawhip;
  font-size: 50px;
  color: rebeccapurple;
  height: 400px;
  display: grid;
  place-items: center;
  border-radius: 0 0 10px 10px;
`;

const TABS = [
  {
    id: 1,
    name: "About Me",
    view: <StyledDiv>Hello, it's me</StyledDiv>
  },
  {
    id: 2,
    name: "Work",
    view: <StyledDiv>This is what I do</StyledDiv>
  },
  {
    id: 3,
    name: "Contact",
    view: <StyledDiv>Reach me out here</StyledDiv>
  }
];
