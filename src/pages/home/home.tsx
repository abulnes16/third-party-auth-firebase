import React, { useContext } from "react";
import { Header, LoginForm, WelcomeMessage } from "../../components";
import { appContext } from "../../state";

function Home() {
  const { isLoggedIn } = useContext(appContext);

  return (
    <main>
      <Header />
      {isLoggedIn ? <WelcomeMessage /> : <LoginForm />}
    </main>
  );
}

export default Home;
