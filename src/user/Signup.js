import React, { useState } from "react";
import Base from "../core/Base";
import { Link } from "react-router-dom";
const Signup = () => {
  const signUpForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Name
              </label>
              <input type="text" className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Email
              </label>
              <input type="email"  className="form-control"/>
            </div>
            <div className="form-group">
              <label htmlFor="" className="text-light">
                Password
              </label>
              <input type="password"  className="form-control"/>
            </div>
            <button className="btn btn-success btn-block">Create Account</button>
          </form> 
        </div>
      </div>
    );
  };
  return (
    <Base title="Sign Up" description="Get Started">
      {signUpForm()}
    </Base>
  );
};

export default Signup;
