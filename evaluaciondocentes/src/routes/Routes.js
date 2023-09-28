import React from "react";
import {BrowserRouter as Router, Route, Routes, createBrowserRouter} from 'react-router-dom';
import Evaluacion from "../pages/Evaluacion/Evaluacion";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import Informedocentes from '../pages/Reportes/Informesdocentes/Informesdocentes.jsx';
import Resultadodocentes from '../pages/Reportes/Resultadodocentes/Resultadodocentes.jsx';
import Evaluaron from '../pages/Informesdirectivos/Evaluaron/Evaluaron.jsx';
import Informeresultadoscuantitativos from '../pages/Informesdirectivos/Informeresultadoscuantitativos/Informeresultadocuantitativos.jsx';

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
  }, 
  {
    path: "/informesdocentes",
    element: <Informedocentes></Informedocentes>
  },
  {
    path: "/resultadodocentes",
    element: <Resultadodocentes></Resultadodocentes>
  }, 
  {
    path: "/evaluaron",
    element: <Evaluaron></Evaluaron>
  },
  {
    path: "/infomeresultadoscuantitativos",
    element: <Informeresultadoscuantitativos></Informeresultadoscuantitativos>
  },
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