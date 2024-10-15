import React, { createContext, useState } from 'react';

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState(null);

  const onLoginSuccess = (user) => {
    setIsLoggedIn(true);
    setUserInfo(user);
  };

  const onLogout = () => {
    setIsLoggedIn(false);
    setUserInfo(null);
    localStorage.removeItem('token'); // Clear token on logout
  };

  return (
    <LoginContext.Provider value={{ isLoggedIn, userInfo, onLoginSuccess, onLogout }}>
      {children}
    </LoginContext.Provider>
  );
};
