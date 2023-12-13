import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./auth/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
      </Routes>
    </Router>
  );
};

export default App;
