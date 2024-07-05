import React from "react";
import reactDOM from 'react-dom/client';

import Navbar from './src/components/header';
import Body from './src/components/body';
import Footer from './src/components/footer';


// App Layout---
/**
        Header :-
            logo
            links
        
        Body :-
            Search bar
            cards
        
        Footer :-
            Links
            Copyrights
         */

// Root from index.html___
const root = reactDOM.createRoot(document.getElementById('root'));



// Main Container
const AppLayout = () => (
    // {<></> React Fragment}
    <>
        <Navbar />
        <Body />
        <Footer />
    </>
);

// Reandering root;
root.render(<AppLayout />);