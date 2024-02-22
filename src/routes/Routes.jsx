import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../components/views/HomeView";
import ProductList from "../views/Productlist";
import Cart from "../components/views/CartView";
import StartFormView from "../components/views/StartFormView";

const Routes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/" element={<Cart />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/startform" element={<StartFormView />} />
      </Routes>
    </Router>
  );
};

export default Routes;
