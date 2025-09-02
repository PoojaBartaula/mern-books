import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Singlebook from "./pages/singlebook/Singlebook";
import Addbook from "./pages/addbook/Addbook";
import Editbook from "./pages/editbook/Editbook";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book/:id" element={<Singlebook />} />
        <Route path="/addBook" element={<Addbook />} />
        <Route path="/editbook/:id" element={<Editbook />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
