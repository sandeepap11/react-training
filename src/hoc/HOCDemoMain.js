import React, { Component } from "react";
import Loading from "./Loading";
import MatchesList from "./MatchesList";

//const LoadingMatchesList = Loading(MatchesList);

class HOCDemoMain extends Component {
  state = { isMatchesLoading: true, matches: [] };

  componentDidMount() {
    fetch("https://worldcup.sfg.io/matches")
      .then(res => res.json())
      .then(matches => this.setState({ matches }));
  }

  render() {
    const { matches, isMatchesLoading } = this.state;
    return (
      //   <LoadingMatchesList matches={matches} isLoading={isMatchesLoading} />
      <Loading />
    );
  }
}

export default HOCDemoMain;
