import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";
import UserSignup from "./Pages/UserSignup";
import UserLogin from "./Pages/UserLogin";
import Home from "./Pages/Home";

function App() {
  const userDetails =useSelector((state)=>state.user)
  let user = userDetails?.currentUser?.rest

  return (
    <>
      <BrowserRouter>
        <Routes>
        <Route
            path="/"
            element={
             <Home />  
            }
          ></Route>
          {/* <Route
            path="/"
            element={
              user ? <Home /> : <Navigate to={"/login"} replace={true} />
            }
          ></Route> */}
          {/* <Route
            path="/signup"
            element={user ? <Navigate to={"/"} replace={true} /> : <UserSignup />}
          ></Route>
          <Route
            path="/login"
            element={user ? <Navigate to={"/"} replace={true} /> : <UserLogin />}
          ></Route> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
