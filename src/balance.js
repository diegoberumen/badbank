import React from "react";
import { UserContext } from "./context";
import Card from "./context";
import { Link } from "react-router-dom";

function Balance() {
  const ctx = React.useContext(UserContext);
  let user = ctx.currentUser[0];
  const [status, setStatus] = React.useState("");
  let show = false;

  function checkUser() {
    if (ctx.currentUser.length === 1) {
      show = true;
      return;
    } else {
      show = false;
      return;
    }
  }

  return (
    <Card
      onhashchange={checkUser()}
      bgcolor="secondary"
      header="Balance"
      status={status}
      body={
        show ? (
          <>
            Hello {user.name}, your current balance is:
            <br />
            <h1>${user.balance}</h1>
            <br />
            <br />
            <br />
            <Link className="btn btn-success" to="/deposit">
              Deposit
            </Link>
            <Link className="btn btn-danger" to="/withdraw">
              Withdrawal
            </Link>
          </>
        ) : (
          <>
            <Link
              className="nav-link"
              to="/login"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Log-In to an existing account"
            >
              Please Log-In
            </Link>
          </>
        )
      }
    />
  );
}

export default Balance;