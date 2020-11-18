import React from 'react';
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Home from "./Home";

const LandingPage = (props) => {
    return (
        <div className="App">
            <Navbar {... props} />
            <Navbar2 />
            <Home />
        </div>
    );
}

export default LandingPage;
