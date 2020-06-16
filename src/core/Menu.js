import React from 'react'
import { Link, withRouter } from 'react-router-dom';

const currentTab = (history, path) => {
    if (history.location.pathname === path) {
        return { color: "#FFFFFF" };
    }
    else
        return { color: "#d1d1d1" }
}
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
                    <Link className="nav-link" style={currentTab(history, "/cart")} to="/cart" >
                        Cart
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={currentTab(history, "/user/dashboard")} to="/user/dashboard">
                        Dashboard
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={currentTab(history, "/admin/dashboard")} to="/admin/dashboard">
                        Admin
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={currentTab(history, "/signin")} to="/signin">
                        Sign In
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={currentTab(history, "/signup")} to="/signup">
                        Sign Up
        </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link" style={currentTab(history, "/signout")} to="/signout">
                        Sign Out
        </Link>
                </li>

            </ul>
        </div>
    )
}
export default withRouter(Menu);