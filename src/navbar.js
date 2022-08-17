import React from "react";
import { UserContext } from "./context";
import { Link } from "react-router-dom";


function NavBar() {
  const ctx = React.useContext(UserContext);

  function handleLogOut() {
    return (ctx.currentUser = []);
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Link
          to="/"
          className="navbar-brand"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Home page"
        >
          <img
            src={require("./brand.png")}
            alt=""
            width="auto"
            height="28"
            className="d-inline-block align-text-top"
          />
          &nbsp; BadBank
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                to="/createaccount"
                className="nav-link"
                aria-current="page"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Create a new account"
              >
                Create Account
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/login"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log-In to an existing account"
              >
                Log-In
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/deposit"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Make a deposit to your account"
              >
                Deposit
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/withdraw"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Make a withdrawl from your account"
              >
                Withdraw
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/balance"
                data-toggle="tooltip"
                data-placement="bottom"
                title="View your balance"
              >
                Balance
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/alldata" className="nav-link">
                All Data
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                to="/"
                data-toggle="tooltip"
                data-placement="bottom"
                title="Log out of account"
                onClick={handleLogOut}
              >
                Log Out
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;