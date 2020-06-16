import React from "react";
import Menu from "./Menu";

const Base = ({
  title = "Home Page",
  description = "Description",
  className = "bg-dark text-white p-4",
  children,
}) => {
  return (
    <div>
      <Menu/>
      <div className="container-fluid">
        <div className="jumbotron bg-dark text-white text-center">
          <h2 className="display-4">{title}</h2>
          <p className="lead">{description}</p>
        </div>
        <div className={className}>{children}</div>
      </div>
      <footer className="footer bg-dark mt-auto py-3">
        <div className="container-fluid bg-success py-3 text-white text-center">
          <h4>Got questions?</h4>
          <button className="btn btn-warning btn-lg">Contant Us</button>
        </div>
        <div className="container text-center">
          <span className="text-muted">
            The best place to buy{" "}
            <span className="text-white ">Coffee Mugs. </span>
          </span>
        </div>
      </footer>
    </div>
  );
};
export default Base;
