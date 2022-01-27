import React, { createContext, useState } from "react";

export interface AppContextState {
  isLoggedIn: boolean;
  name: string;
  signInWith: string;
  loginWithFacebook: () => void;
  loginWithGoogle: () => void;
  loginWithGithub: () => void;
  logout: () => void;
}

export const appContext = createContext<AppContextState>({
  isLoggedIn: false,
  name: "",
  signInWith: "",
  loginWithFacebook: () => {},
  loginWithGithub: () => {},
  loginWithGoogle: () => {},
  logout: () => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AppContext({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [name, setName] = useState("");
  const [signInWith, setSignInWith] = useState("");

  const login = (name: string, provider: string) => {
    setIsLoggedIn(true);
    setName(name);
    setSignInWith(provider);
  };

  const logout = () => {
    setIsLoggedIn(false);
    setName("");
    setSignInWith("");
  };

  const loginWithGoogle = () => {
    // TODO: Add Google Login functionality
    login("", "Google");
  };

  const loginWithGithub = () => {
    // TODO: Add Github Login functionality

    login("", "Github");
  };

  const loginWithFacebook = () => {
    // TODO: Add Facebook Login functionality

    login("", "Facebook");
  };

  return (
    <appContext.Provider
      value={{
        isLoggedIn,
        name,
        signInWith,
        loginWithFacebook,
        loginWithGoogle,
        loginWithGithub,
        logout,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default AppContext;
