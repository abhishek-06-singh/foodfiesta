import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Home from "./home/Home";
import BetaHomeScreen from "./beta/BetaHomeScreen";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<BetaHomeScreen />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
