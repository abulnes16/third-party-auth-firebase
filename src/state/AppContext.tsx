import React, { createContext, useState } from "react";
import {
  fetchSignInMethodsForEmail,
  signInWithPopup,
  signOut,
  UserCredential,
} from "firebase/auth";
import {
  firbeaseAuth,
  googleProvider,
  githubProvider,
  facebookProvider,
} from "../modules";
import { getProviderForProviderID } from "../utils";

type SocialAuth = "Google" | "Facebook" | "Github";

export interface AppContextState {
  isLoggedIn: boolean;
  name: string;
  isLoading?: boolean;
  signInWith: string;
  logout: () => void;
  login: (provider: SocialAuth) => void;
}

export const appContext = createContext<AppContextState>({
  isLoggedIn: false,
  name: "",
  signInWith: "",
  isLoading: false,
  logout: () => {},
  login: (provider) => {},
});

interface Props {
  children: JSX.Element | JSX.Element[];
}

function AppContext({ children }: Props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [name, setName] = useState("");
  const [signInWith, setSignInWith] = useState("");

  const manageCredentials = (result: UserCredential, provider: string) => {
    const { user } = result;
    setName(user.displayName!);
    setSignInWith(provider);
    setIsLoggedIn(true);
  };

  const login = (provider: SocialAuth) => {
    let thirdProvider = null;
    switch (provider) {
      case "Google":
        thirdProvider = googleProvider;
        break;
      case "Facebook":
        thirdProvider = facebookProvider;
        break;
      case "Github":
        thirdProvider = githubProvider;
        break;
    }

    setIsLoading(true);
    signInWithPopup(firbeaseAuth, thirdProvider)
      .then((result) => manageCredentials(result, provider))
      .catch((error) => {
        if (error.code === "auth/account-exists-with-different-credential") {
          const email = error.customData.email;
          const errorProvider = error.customData._tokenResponse.providerId;
          fetchSignInMethodsForEmail(firbeaseAuth, email)
            .then((methods) => {
              const provider = getProviderForProviderID(methods[0]);
              signInWithPopup(firbeaseAuth, provider).then((result) =>
                manageCredentials(result, `${errorProvider} from ${methods[0]}`)
              );
            })
            .catch(console.log);
        }
      })
      .finally(() => setIsLoading(false));
  };

  const logout = () => {
    setIsLoading(true);
    signOut(firbeaseAuth)
      .then(() => {
        setIsLoggedIn(false);
        setName("");
        setSignInWith("");
      })
      .catch(console.log)
      .finally(() => setIsLoading(false));
  };

  return (
    <appContext.Provider
      value={{
        isLoggedIn,
        name,
        signInWith,
        logout,
        isLoading,
        login,
      }}
    >
      {children}
    </appContext.Provider>
  );
}

export default AppContext;
