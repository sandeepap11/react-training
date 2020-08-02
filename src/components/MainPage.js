import React from "react";
import { LanguageContext } from "../context/lang-context";

class MainPage extends React.Component {
  render() {
    let language = this.context;
    return (
      <>
        <h1>{language.header}</h1>
        <p>{language.mainText}</p>
      </>
    );
  }
}
MainPage.contextType = LanguageContext;

export default MainPage;
