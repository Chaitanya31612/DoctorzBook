import React, { useState } from "react";
import { Link } from "react-router-dom";
import authLogo from "../../assets/svgs/auth-logo.svg";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useRouter } from "../../utils/useRouter";
import { connect } from "react-redux";
import { login } from "../../redux/actions/auth";
import { Redirect } from "react-router-dom";

const LoginContainer = ({ isAuthenticated, login }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    login(email, password);
  };

  return (
    <div className="login">
      <div className="login__sidebar">
        <div className="login__sidebar-logo">
          <img src={authLogo} alt="authlogo" />
        </div>
        <div className="login__sidebar-links">
          <p>Don't have an account?</p>
          <Link to="/register" className="login__sidebar-links--auth">
            Sign Up
          </Link>
        </div>
      </div>
      <div className="login__box">
        <IconButton onClick={() => router.push("/")} className="close">
          <Close />
        </IconButton>
        <h1 className="heading heading--primary heading--big">Sign In</h1>
        <form
          action=""
          className="form login__box-form"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="form__group">
            <input
              type="email"
              className="form__input"
              placeholder="Email"
              id="email"
              onChange={(e) => onChange(e)}
              name="email"
              required
            />
            <label htmlFor="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              className="form__input"
              placeholder="Password"
              id="password"
              onChange={(e) => onChange(e)}
              name="password"
              required
            />
            <label htmlFor="password" className="form__label">
              Password
            </label>
          </div>
          <button
            onClick={login}
            className="button button--primary login__box-form--button"
          >
            Sign In
          </button>
        </form>

        <div className="login__sidebar-links login__box--mobilelink">
          <p>Don't have an account?</p>
          <Link to="/register" className="login__sidebar-links--auth">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated || false,
});

export default connect(mapStateToProps, { login })(LoginContainer);
