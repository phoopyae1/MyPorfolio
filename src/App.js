// import { Routes, Route } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/home";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route basename="/MyPorfolio" path="/" element={<Home />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
