import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import routes from "./routes/routes";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {routes.map((route) => (
            <Route
              path={route.path}
              exact={route.exact}
              element={route.element}
            />
          ))}
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
