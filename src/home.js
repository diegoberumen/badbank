import React from "react";
import { UserContext } from "./context";
import Card from "./context";

function Home() {
  return (
    <Card
      bgcolor="info"
      txtcolor="black"
      header="BadBank Landing Page"
      title="Welcome to the Bad Bank!"
      text="You should definitely NOT use this bank."
      body={
        <img
          src={require("./main.png")}
          className="img-fluid"
          alt="Responsive image"
        />
      }
    />
  );
}

export default Home;