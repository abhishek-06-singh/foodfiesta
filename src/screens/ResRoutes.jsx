import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import ProductPage from "./ProductPage";
import { Menu } from "@headlessui/react";
import Cart from "./Cart";
import ContactUs from "./ContactUs";

const ResRoutes = () => {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/restaurants" component={ProductPage} />
          <Route path="/menu" component={Menu} />
          <Route path="/cart" component={Cart} />
          <Route path="/contact" component={ContactUs} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};

export default ResRoutes;
