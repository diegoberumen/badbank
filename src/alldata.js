import React from "react";
import { UserContext } from "./context";
import Card from "./context";

function AllData() {
  const ctx = React.useContext(UserContext);
  return (
    <Card
      bgcolor="dark"
      textcolor="dark"
      header="All Data"
      body={ctx.users.map((element, key) => {
        return (
          <div key={key}>
            Entry: {key + 1}
            <br />
            Name: {element.name}
            <br />
            E-Mail: {element.email}
            <br />
            Password: {element.password}
            <br />
            Balance: {element.balance}
            <br />
            <br />
          </div>
        );
      })}
    />
  );
}

export default AllData;