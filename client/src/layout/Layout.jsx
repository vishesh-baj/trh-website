import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "../routes/routes";

const Layout = () => {
  return (
    <div>
      <h1>Navbar</h1>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
      <h1>Footer</h1>
    </div>
  );
};

export default Layout;
