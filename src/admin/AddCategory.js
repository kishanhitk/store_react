import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isAuthenticated } from "../auth/helper";
import Base from "../core/Base";

export default function AddCategory() {
  const [name, setName] = useState("initialState");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);
  const { user, token } = isAuthenticated();
  const myForm = () => {
    return (
      <form>
        <div className="form-group">
          <p className="lead">Enter the Category</p>
          <input
            type="text"
            autoFocus
            placeholder="For ex. Summer"
            required
            className="form-control my-3"
          />
          <button className="btn btn-outline btn-info">Create Category</button>
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
