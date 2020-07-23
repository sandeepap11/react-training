import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Tab from "./Tab";
import "../styles/SASSStyles.scss";
import styled from "styled-components";

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

const TabsList = () => {
  return (
    <div className="tabs-main">
      <Router>
        <div>
          <ul>
            {TABS.map(tab => (
              <Tab tab={tab} key={tab.id} />
            ))}
          </ul>

          <Switch>
            {TABS.map(tab => (
              <Route key={tab.id} exact path={tab.path}>
                {tab.view}
              </Route>
            ))}
            <Route>
              <StyledDiv>Woah! That page does not exist.</StyledDiv>}
            </Route>
          </Switch>
        </div>
      </Router>
      );
    </div>
  );
};

export default TabsList;

const TABS = [
  {
    id: 1,
    name: "About Me",
    view: <StyledDiv>Hello, it's me</StyledDiv>,
    path: "/"
  },
  {
    id: 2,
    name: "Work",
    view: <StyledDiv>This is what I do</StyledDiv>,
    path: "/work"
  },
  {
    id: 3,
    name: "Contact",
    view: <StyledDiv>Reach me out here</StyledDiv>,
    path: "/contact"
  }
];
