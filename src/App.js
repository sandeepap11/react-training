import React from "react";
import { LanguageContext, languages } from "./context/lang-context";
import "./App.css";
import Container from "./components/Container";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      language: languages.en
    };

    this.toggleTheme = () => {
      this.setState(prevState => ({
        language:
          prevState.language === languages.en ? languages.de : languages.en
      }));
    };
  }

  render() {
    return (
      <div className="app-main">
        <div>
          <select onChange={this.toggleTheme}>
            <option value="en">English</option>
            <option value="de">Deutsche</option>
          </select>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <Container />
        </LanguageContext.Provider>
      </div>
    );
  }
}
