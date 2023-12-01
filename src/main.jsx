import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/Home";
import { Routes, Route, BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home/>}/>
    </Routes>
  </BrowserRouter>
);
