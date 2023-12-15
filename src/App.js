import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Home from "./home/Home";
import BetaHomeScreen from "./beta/BetaHomeScreen";
import LandingExample from "./beta/LandingExample";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/homie" element={<BetaHomeScreen />} />
          <Route path="/home" element={<LandingExample />} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
