import React from "react";

// context is a component-wide state
const AuthContext = React.createContext({
  isLoggedIn: false,
});

export default AuthContext;
