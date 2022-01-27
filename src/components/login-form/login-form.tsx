import { useContext } from "react";
import { GOOGLE_LOGO, FACEBOOK_LOGO, GITHUB_LOGO } from "../../assets/img";
import { appContext } from "../../state";
import SocialButton from "../social-button/social-button";
import "./login-form.css";

function LoginForm() {
  const { loginWithFacebook, loginWithGoogle, loginWithGithub } =
    useContext(appContext);

  return (
    <form className="login-form elevation">
      <h3 className="login-title">Sign in with your social networks</h3>
      <SocialButton
        text="Sign in with Google"
        socialIcon={GOOGLE_LOGO}
        onClick={loginWithGoogle}
      />
      <SocialButton
        text="Sign in with Facebook"
        socialIcon={FACEBOOK_LOGO}
        onClick={loginWithFacebook}
      />
      <SocialButton
        text="Sign in with Github"
        socialIcon={GITHUB_LOGO}
        onClick={loginWithGithub}
      />
    </form>
  );
}

export default LoginForm;
