import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";

const currentTab = (history, path) => {
  if (history.location.pathname === path) {
    return { color: "#FFFFFF" };
  } else return { color: "#d1d1d1" };
};
const Menu = ({ history }) => {
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link className="nav-link" style={currentTab(history, "/")} to="/">
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            className="nav-link"
            style={currentTab(history, "/cart")}
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {isAuthenticated() && isAuthenticated().user.role === 0 && (
          <li className="nav-item">
            <Link
              className="nav-link"
              style={currentTab(history, "/user/dashboard")}
              to="/user/dashboard"
            >
              User Dashboard
            </Link>
          </li>
        )}
        {isAuthenticated() && isAuthenticated().user.role === 1 && (
          <li className="nav-item">
            <Link
              className="nav-link"
              style={currentTab(history, "/admin/dashboard")}
              to="/admin/dashboard"
            >
              Admin Dashboard
            </Link>
          </li>
        )}
        {!isAuthenticated() && (
          <>
            {" "}
            <li className="nav-item">
              <Link
                className="nav-link"
                style={currentTab(history, "/signin")}
                to="/signin"
              >
                Sign In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={currentTab(history, "/signup")}
                to="/signup"
              >
                Sign Up
              </Link>
            </li>
          </>
        )}
        {isAuthenticated() && (
          <li className="nav-item">
            <span
              style={{ cursor: "pointer" }}
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  history.push("/");
                });
              }}
            >
              Sign Out
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};
export default withRouter(Menu);
