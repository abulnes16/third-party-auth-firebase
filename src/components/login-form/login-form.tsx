import { GOOGLE_LOGO, FACEBOOK_LOGO, GITHUB_LOGO } from "../../assets/img";
import "./login-form.css";

function LoginForm() {
  return (
    <form className="login-form elevation">
      <h3 className="login-title">Sign in with your social networks</h3>
      <button className="social-button ">
        <img className="logo" src={GOOGLE_LOGO} alt="google" />
        <p>Sign in with google</p>
      </button>
      <button className="social-button ">
        <img className="logo" src={FACEBOOK_LOGO} alt="facebook" />
        <p>Sign in with facebook</p>
      </button>
      <button className="social-button ">
        <img className="logo" src={GITHUB_LOGO} alt="github" />
        <p>Sign in with github</p>
      </button>
    </form>
  );
}

export default LoginForm;
