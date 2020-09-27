import React, { useState } from "react";
import Base from "../core/Base";
import { Link, Redirect } from "react-router-dom";
import { signin, authenticate, isAuthenticated } from "../auth/helper/index";
const Signin = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false,
  });
  const { email, password, error, loading, didRedirect } = values;
  const { user } = isAuthenticated();
  const handleChange = (name) => (event) => {
    setValues({ ...values, error: false, [name]: event.target.value });
  };
  const onSubmit = (event) => {
    event.preventDefault();
    setValues({ ...values, loading: true, error: false });
    signin({
      email,
      password,
    })
      .then((data) => {
        console.log(data);
        console.log(data.error);
        if (data.error) {
          setValues({ ...values, error: data.error, loading: false });
        } else {
          authenticate(data, () => {
            setValues({ ...values, didRedirect: true });
          });
        }
      })
      .catch((e) => console.log("Signin request failed" + e));
  };
  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Email
              </label>
              <input
                value={email}
                type="email"
                className="form-control"
                onChange={handleChange("email")}
              />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={handleChange("password")}
                className="form-control"
              />
            </div>
            <button onClick={onSubmit} className="btn btn-success btn-block">
              Login
            </button>
          </form>
        </div>
      </div>
    );
  };

  const performRedirect = () => {
    if (didRedirect) {
      if (user && user.role === 1) {
        return <p>Redirect to Admin</p>;
      } else {
        return <p>Redirect to user Dashboard</p>;
      }
    }
    if (isAuthenticated()) {
      return <Redirect to="/" />;
    }
  };
  const loadingmessage = () => {
    return loading && <div className="alert alert-info">Loading.....</div>;
  };
  const errormessage = () => {
    return (
      <div className="row">
        <div
          className="col-md-6 offset-sm-3 text-left"
          style={{ display: error ? "" : "none" }}
        >
          <div className="alert alert-danger">Error : {error}</div>
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign In" description="Get Started">
      {performRedirect()}
      {errormessage()}
      {loadingmessage()}
      {signInForm()}
      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signin;
