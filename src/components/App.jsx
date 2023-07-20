import React from "react";
import Listofemployee from "../components/Listofemployee";
import ErrorBoundary from "./ErrorBoundry";
import Head from "./Head";
import Footer from "./Footer";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"; // BrowserRouter is renamed as Router, Routes is replaced by Switch
import CreateEmployee from "../components/CreateEmployee";
import ViewEmployee from "../components/ViewEmployee";


function App()
{
    return(
        <div>
        <Router>
            <Head/>
          <div className="container">
            <Routes>
                <Route path="/" element={<Listofemployee/>}/>
                <Route path="/employees" element={<Listofemployee/>}/>
                <Route path="/add-employee" element={<CreateEmployee/>}/>
                <Route path="/employee/:id" element={<ViewEmployee/>}/>
            {/* <Listofemployee/> */}
            </Routes>
            <ErrorBoundary/>
           </div>
           <Footer/>
        </Router>
     </div>
    )
}

export default App;