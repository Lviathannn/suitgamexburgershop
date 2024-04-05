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
import { Provider } from "react-redux";
import { store } from "./lib/store.ts";
import Weather from "./pages/Weather.tsx";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Recipe from "./pages/Recipe.tsx";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
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
          <Route path="*" element={<h1>Not Found</h1>} />
          <Route path="/weather" Component={Weather} />
          <Route path="/recipe" Component={Recipe} />
        </Routes>
      </BrowserRouter>
    </PersistGate>
  </Provider>
);
