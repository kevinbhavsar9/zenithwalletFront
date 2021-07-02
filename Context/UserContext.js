import React from "react";
const initial = {
  isLoggedIn: false,
  signin: () => {},
  signout: () => {},
  credentials: {},
};
export const UserContext = React.createContext(initial);
