import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import Signup from "./auth/Signup";
import Login from "./auth/Login";
import Home from "./home/Home";
import BetaHomeScreen from "./beta/BetaHomeScreen";
import BetaCardsPage from "./beta/BetaCardsPage";
import MyComponent from "./auth/MyComponent ";
import LandingPage from "./screens/LandingPage";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import ContactUs from "./screens/ContactUs";
import ProductPage from "./screens/ProductPage";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<Login />} />
          <Route path="/homie" element={<BetaHomeScreen />} />
          <Route path="/home" element={<LandingPage />} />

          <Route
            path="/app"
            element={
              <>
                <Navbar />
                <MyComponent />
              </>
            }
          />

          <Route
            path="/restaurants"
            element={
              <>
                <Navbar />
                <ProductPage />
              </>
            }
          />
          <Route
            path="/menu"
            element={
              <>
                <Navbar />
                <Menu />
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <Navbar />
                <Cart />
              </>
            }
          />
          <Route
            path="/contact"
            element={
              <>
                <Navbar />
                <ContactUs />
              </>
            }
          />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
