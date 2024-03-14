import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.tsx";
// import Navbar from "./components/layouts/Navbar.tsx";
import Game from "./pages/Game.tsx";
import Finish from "./pages/Finish.tsx";
import Shop from "./pages/Shop.tsx";
import About from "./pages/About.tsx";
import Contact from "./pages/Contact.tsx";
import Order from "./pages/Order.tsx";
// import Navbar from "./components/layouts/Navbar.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route Component={Home} path="/" />
        <Route Component={Game} path="/game" />
        <Route Component={Finish} path="/finish" />
        <Route Component={Shop} path="/shop" />
        <Route Component={About} path="/about" />
        <Route Component={Contact} path="/contact" />
        <Route Component={Order} path="/order" />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
