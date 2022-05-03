import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import authLogo from "../../assets/svgs/auth-logo.svg";
import { IconButton } from "@material-ui/core";
import { Close } from "@material-ui/icons";
import { useRouter } from "../../utils/useRouter";
import { register } from "../../redux/actions/auth";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const RegisterContainer = ({ isAuthenticated, register }) => {
  const router = useRouter();

  const [radioOption, setRadioOption] = useState("user");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    userType: "user",
    hospitalName: "",
    hospitalAddress: "",
    specialization: "",
    city: "",
    state: "",
    country: "",
    location: [],
  });

  const [lat, setLat] = useState();
  const [long, setLong] = useState();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log("Latitude is :", position.coords.latitude);
      // console.log("Longitude is :", position.coords.longitude);
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, [lat, long]);

  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  const onRadioChange = (e) => {
    setRadioOption(e.target.value);
    setFormData({
      ...formData,
      userType: e.target.value,
      location: [long, lat],
    });
  };

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    register(formData);
  };

  return (
    <div className="login">
      <div className="login__box">
        <IconButton onClick={() => router.push("/")} className="close">
          <Close />
        </IconButton>
        <h1 className="heading heading--primary heading--big">Sign Up</h1>
        <form
          action=""
          className="form login__box-form"
          onSubmit={(e) => onSubmit(e)}
        >
          <div className="form__group">
            <input
              type="text"
              onChange={(e) => onChange(e)}
              className="form__input"
              placeholder="Name"
              id="name"
              name="name"
              required
            />
            <label for="name" className="form__label">
              Name
            </label>
          </div>
          <div className="form__group">
            <input
              type="email"
              onChange={(e) => onChange(e)}
              className="form__input"
              placeholder="Email"
              id="email"
              name="email"
              required
            />
            <label for="email" className="form__label">
              Email
            </label>
          </div>
          <div className="form__group">
            <input
              type="password"
              onChange={(e) => onChange(e)}
              className="form__input"
              placeholder="Password"
              id="password"
              name="password"
              required
            />
            <label for="password" className="form__label">
              Password
            </label>
          </div>
          <div className="form__radiogroup">
            <div className="form__group form__radiogroup--first">
              <input
                type="radio"
                className="form__input form__input--radio"
                id="doctor-radio"
                value="doctor"
                onChange={onRadioChange}
                name="userType"
                checked={radioOption === "doctor"}
                required
              />
              {"Doctor"}
            </div>
            <div className="form__group">
              <input
                type="radio"
                className="form__input form__input--radio"
                checked={radioOption === "user"}
                id="user-radio"
                value="user"
                name="userType"
                onChange={onRadioChange}
                required
              />
              {"User"}
            </div>
          </div>

          {radioOption === "doctor" && (
            <>
              <div className="form__group">
                <input
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="form__input"
                  placeholder="Hospital Name"
                  id="hospitalName"
                  name="hospitalName"
                  required
                />
                <label for="hospitalName" className="form__label">
                  Hospital Name
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="form__input"
                  placeholder="Hospital Address"
                  id="hospitalAddress"
                  name="hospitalAddress"
                  required
                />
                <label for="hospitalAddress" className="form__label">
                  Hospital Address
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="form__input"
                  placeholder="Specialization"
                  id="specialization"
                  name="specialization"
                  required
                />
                <label for="specialization" className="form__label">
                  Specialization
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="form__input"
                  placeholder="City"
                  id="city"
                  name="city"
                  required
                />
                <label for="city" className="form__label">
                  City
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="form__input"
                  placeholder="State"
                  id="state"
                  name="state"
                  required
                />
                <label for="state" className="form__label">
                  State
                </label>
              </div>
              <div className="form__group">
                <input
                  type="text"
                  onChange={(e) => onChange(e)}
                  className="form__input"
                  placeholder="Country"
                  id="country"
                  name="country"
                  required
                />
                <label for="country" className="form__label">
                  Country
                </label>
              </div>
            </>
          )}
          <button className="button button--primary login__box-form--button">
            Register
          </button>
        </form>

        <div className="login__sidebar-links login__box--mobilelink">
          <p>Don't have an account?</p>
          <Link to="/register" className="login__sidebar-links--auth">
            Sign Up
          </Link>
        </div>
      </div>
      {radioOption == "user" ? (
        <div className="login__sidebar">
          <div className="login__sidebar-logo">
            <img src={authLogo} alt="authlogo" />
          </div>
          <div className="login__sidebar-links">
            <p>Already have an account?</p>
            <Link to="/login" className="login__sidebar-links--auth">
              Sign In
            </Link>
          </div>
        </div>
      ) : (
        <div className="login__sidebar login__sidebar--extended">
          <div className="login__sidebar-logo">
            <img src={authLogo} alt="authlogo" />
          </div>
          <div className="login__sidebar-links">
            <p>Already have an account?</p>
            <Link to="/login" className="login__sidebar-links--auth">
              Sign In
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated || false,
});

export default connect(mapStateToProps, { register })(RegisterContainer);
