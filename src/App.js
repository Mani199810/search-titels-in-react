import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


import Home from "./components/Home";
import Menu from "./components/Menu";
import Pnf from "./components/Pnf";


function App(){
  return(
    <Router>
      <Menu/>

      <Routes>
        <Route path={`/`} element={<Home />}/>
        <Route path={`/*`} element={<Pnf/>}/>
      </Routes>
    </Router>
  )
}
export default App