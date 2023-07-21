import React from "react";
import ReactDOM from "react-dom/client";
import { UserContextProvider } from "./context/UserContext";
import userReducer, { initialState } from "./reducer/userReducer";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <UserContextProvider reducer={userReducer} initialState={initialState}>
      <App />
    </UserContextProvider>
  </React.StrictMode>
);
