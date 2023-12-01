import "./App.css";
import React from "react";
import ReactDOM from "react-dom/client";
import Template from "./components/Template";
import Home from "./components/Home";
import VenueDetail from "./components/VenueDetail";
import AddComment from "./components/AddComment";
import About from "./components/About";
import Admin from "./components/Admin";
import ManageVenue from "./components/ManageVenue";
import PageNotFound from "./components/PageNotFound";
import { Routes, Route, BrowserRouter } from "react-router-dom";
ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
    <Route path="/" element={<Template/>}>
    <Route path="/" element={<Home/>}/>
    <Route path="mekanlar/:id" element={<VenueDetail/>}/>
    <Route path="mekanlar/:id/comment/new" element={<AddComment/>}/>
    <Route path="about" element={<About/>}/>
    <Route path="admin" element={<Admin/>}/>
    <Route path="admin/managevenue" element={<ManageVenue/>}/>
    <Route path="*" element={<PageNotFound/>} />
    </Route>
    </Routes>
  </BrowserRouter>
);
