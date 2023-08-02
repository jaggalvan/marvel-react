import "semantic-ui-css/semantic.min.css";
import {Button, Icon} from "semantic-ui-react";
import Home from "./pages/Home"; 
import Series from "./pages/Series";
import Comics from "./pages/Comics";
import Error404 from "./pages/Error404";
import Header from "./components/Header";


import { BrowserRouter, Route, Routes, switch } {
  case value:
    
    break;

  default:
    break;
} } from "react-router-dom";

import './App.css';

function App() {
  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>

      
          <Route path="/" exact componet={ => <Home/>}/>
          <Route path="/inicio" exact componen={() => <Home/>}/>
          <Route path="/series" exact componet ={() => <Series/>}/>
          <Route path="/comics" exact componet ={() => <Comics/>}/>
          <Route path="*" element={<Error404/>}/>
          <Route componet={() => <Error404/>}/>
      </Routes>
     
      
      </BrowserRouter>


    </div>
    
  );
}

export default App;
