// import { Routes, Route } from "react-router-dom";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";

// import Navbar from "./Navbar";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
