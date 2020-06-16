import React from 'react'
import { Link, withRouter } from 'react-router-dom';


const Menu = () => {
    return (
        <div>
            <ul className="nav nav-tabs bg-dark">
                <li className="nav-item">
                    <Link className="nav-link">
                        Home
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Cart
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Dashboard
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Admin
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Sign In
        </Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Sign Up
        </Link>

                </li>
                <li className="nav-item">
                    <Link className="nav-link">
                        Sign Out
        </Link>
                </li>

            </ul>
        </div>
    )
}
export default withRouter(Menu);