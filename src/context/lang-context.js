import React from "react";

export const languages = {
  en: {
    header: "Welcome",
    mainText: "This is a test page"
  },
  de: {
    header: "Willkommen",
    mainText: "Dies ist eine Testseite"
  }
};

export const LanguageContext = React.createContext(
  languages.en // en is the default value
);
