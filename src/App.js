import React, { useReducer } from "react";
import { USERS } from "./utils/UsersList";
import { userReducer } from "./utils/UserReducer";
import "./App.css";
import { RoboUsers } from "./components/RoboUsers";

export const RoboContext = React.createContext();

function App() {
  const [roboUsers, dispatch] = useReducer(userReducer, USERS);

  return (
    <RoboContext.Provider value={{ roboUsers, dispatch }}>
      <RoboUsers />
    </RoboContext.Provider>
  );
}

export default App;
