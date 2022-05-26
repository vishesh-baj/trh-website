import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";

const App = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route key={route.key} path={route.path} element={route.element} />
          ))}
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default App;
