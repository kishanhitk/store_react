import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
import { signup } from "../auth/helper";
const Signup = () => {
  const [values, setValue] = useState({
    name: "",
    email: "",
    password: "",
    error: "",
    success: false
  })
  const { name, email, password, error, success } = values;
  const handleChange = name => event => {
    setValue({ ...values, error: false, [name]: event.target.value })
  }
  const handleSubmit = event => {
    event.preventDefault();
    setValue({ ...values, error: false })
    signup({ name, email, password }).then(
      data => {
        console.log(data)
        if (data.errors) {
          setValue({ ...values, error: data.errors, success: false })
        }
        else {
          setValue({
            ...values,
            name: "",
            email: "",
            password: "",
            error: "",
            success: true
          })
        }
      }
    ).catch()
  }
  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Name
              </label>
              <input type="text" className="form-control" onChange={handleChange("name")} />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Email
              </label>
              <input type="email" className="form-control" onChange={handleChange("email")} />
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Password
              </label>
              <input type="password" className="form-control" onChange={handleChange("password")} />
            </div>
            <button className="btn btn-success btn-block" onClick={
              handleSubmit
            }>Create Account</button>
          </form>
        </div>
      </div>
    );
  };
  const successmessage = () => {
    return (<div className="row">
      <div className="col-md-6 offset-sm-3 text-left" style={{ display: success ? "" : "none" }}>
        <div className="alert alert-success">
          Account Created Successfully.<Link to='./signin'> Login Here.</Link>
        </div>
      </div>
    </div>)
  }
  const errormessage = () => {
    return (<div className="row">
      <div className="col-md-6 offset-sm-3 text-left" style={{ display: error ? "" : "none" }}>
        <div className="alert alert-danger">
          Error : {error}
        </div>
      </div>
    </div>)
  }
  return (
    <Base title="Sign Up" description="Get Started">
      {successmessage()}
      {errormessage()}
      {signUpForm()}

      <p className="text-white text-center">{JSON.stringify(values)}</p>
    </Base>
  );
};

export default Signup;
