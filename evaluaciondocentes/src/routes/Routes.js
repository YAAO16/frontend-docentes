import React from "react";
import {BrowserRouter as Router, Route, Routes, createBrowserRouter} from 'react-router-dom';
import Evaluacion from "../pages/Evaluacion/Evaluacion";
import Login from "../pages/Login";
import Menu from "../pages/Menu";


const MyRoutes= createBrowserRouter([
  {
    path: "/",
    element: <Login></Login>
  },
  {
    path: "/menu",
    element: <Menu></Menu>
  },
  {
    path: "/Evaluacion",
    element: <Evaluacion></Evaluacion>
  }
]);

    // <Router>
    // <Routes>
    //     <Route exact path="/" component={Login}/>
    //     <Route exact path="/menu" component={Menu}/>
    // </Routes>
  //   </Router>
  // );
// }
// 
export default MyRoutes;