import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import { DataProvider } from "./Context/DataProvider";
// import { createContext } from "react";

// export const DataContext = createContext({});

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <DataContext.Provider value={{ name: "ganesh" }}> */}
      <DataProvider>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </DataProvider>
      {/* </DataContext.Provider> */}
    </BrowserRouter>

    {/* <BrowserRouter>
      <Routes>
        <Route path="a" element={<CompB />} />
        <Route path="a" element={<CompA />} />
      </Routes>

      <Routes>
        <Route path="b" element={<CompB />} />
        <Route path="c" element={<CompC />} />
      </Routes> */}

    {/* </BrowserRouter> */}
  </React.StrictMode>
);
