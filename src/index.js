import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import SignIn from "./SignInUp/SignIn";
import ReactJS from "./Topics/React";
import Components from "./Topics/Components";
import Dom from "./Topics/Dom";
import Hooks from "./Topics/Hooks";
import Content from "./Content";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./SignInUp/SignUp";
import Home from "./Home/Home";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="" element={<Content />} />
          <Route path="/React" element={<ReactJS />} />
          <Route path="/Components" element={<Components />} />
          <Route path="/DomTree" element={<Dom />} />
          <Route path="/Hooks" element={<Hooks />} />
        </Route>
        <Route path="/home" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
