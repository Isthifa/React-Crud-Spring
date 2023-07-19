import React from "react";
import Listofemployee from "../components/Listofemployee";
import ErrorBoundary from "./ErrorBoundry";
import Head from "./Head";
import Footer from "./Footer";


function App()
{
    return(
        <div>
            <Head/>
          <div className="container">
            <Listofemployee/>
            <ErrorBoundary/>
           </div>
           <Footer/>
        </div>
    )
}

export default App;