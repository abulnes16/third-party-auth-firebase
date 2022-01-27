import { useContext } from "react";
import { Loader } from "..";
import { GOOGLE_LOGO, FACEBOOK_LOGO, GITHUB_LOGO } from "../../assets/img";
import { appContext } from "../../state";
import SocialButton from "../social-button/social-button";
import "./login-form.css";

function LoginForm() {
  const { login, isLoading } = useContext(appContext);

  return (
    <form className="login-form elevation">
      <h3 className="login-title">Sign in with your social networks</h3>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <SocialButton
            text="Sign in with Google"
            socialIcon={GOOGLE_LOGO}
            onClick={() => login("Google")}
          />
          <SocialButton
            text="Sign in with Facebook"
            socialIcon={FACEBOOK_LOGO}
            onClick={() => login("Facebook")}
          />
          <SocialButton
            text="Sign in with Github"
            socialIcon={GITHUB_LOGO}
            onClick={() => login("Github")}
          />
        </>
      )}
    </form>
  );
}

export default LoginForm;
