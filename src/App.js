import './App.css';
import React from "react";
import NavBar from './navbar';
import Home from "./home";
import CreateAccount from "./createaccount";
import LogIn from "./login";
import Deposit from "./deposit";
import Withdraw from "./withdraw";
import Balance from "./balance";
import AllData from "./alldata";
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { UserContext } from './context';



function App() {
  return (
    <BrowserRouter>
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Abel",
              email: "abel@mit.edu",
              password: "secret",
              balance: 100,
            },
          ],
          currentUser: [],
        }}
      >
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createaccount" element={<CreateAccount />} />
          <Route path="/login" element={<LogIn />} />
          <Route path="/deposit" element={<Deposit />} />
          <Route path="/withdraw" element={<Withdraw />} />
          <Route path="/balance" element={<Balance />} />
          <Route path="/alldata" element={<AllData />} />
        </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;