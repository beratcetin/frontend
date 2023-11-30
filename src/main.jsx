import React from "react";
import ReactDOM from "react-dom/client";
import AnaSayfa from "./views/AnaSayfa";
import { Routes, Route, BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<AnaSayfa/>}/>
    </Routes>
  </BrowserRouter>
);
