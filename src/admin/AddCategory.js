import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";
import { createCategory } from "./helper/adminapicall";

export default function AddCategory() {
  const [name, setName] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();
  const handleChange = (event) => {
    setError("");
    setName(event.target.value);
  };
  const SuccessMessage = () => {
    if (success) {
      return <h4 className="text-success">Category Created Successfully</h4>;
    } else return null;
  };
  const ErrorMessage = () => {
    if (error) {
      return <h4 className="text-danger">Failed Calling Category</h4>;
    } else return null;
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");
    setSuccess(false);

    //Backend Request Fired
    createCategory(user._id, token, { name }).then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setError("");
        setName("");
        setSuccess(true);
      }
    });
  };
  const myForm = () => {
    return (
      <form>
        <SuccessMessage />
        <ErrorMessage />
        <div className="form-group">
          <p className="lead">Enter the Category</p>
          <input
            type="text"
            autoFocus
            placeholder="For ex. Summer"
            onChange={handleChange}
            value={name}
            required
            className="form-control my-3"
          />
          <button onClick={handleSubmit} className="btn btn-outline btn-info">
            Create Category
          </button>
        </div>
      </form>
    );
  };
  const myBackButton = () => {
    return (
      <div className="mt-5">
        <Link className="btn btn-sm btn-success mb-3" to="/admin/dashboard">
          Go back to Dashboard
        </Link>
      </div>
    );
  };
  return (
    <Base
      title="Create a category here"
      description="Add a new category for T-shirt"
      className="container bg-info p-4"
    >
      <div className="row bg-white rounded">
        <div className="col-8 offset-md-2">
          {myForm()}
          {myBackButton()}
        </div>
      </div>
    </Base>
  );
}
