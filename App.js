import React from "react";
import reactDOM from 'react-dom/client';

import Navbar from './src/components/header';
import Body from './src/components/Body';
import Footer from './src/components/footer';
import About from "./src/components/About";
import Menu from "./src/components/RestroMenu";
import ErrorPage from './src/components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';


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
        <Outlet />
        <Footer />
    </>
);


// Creating routes using createBrowserRoute

const appRoute = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '/restaurantMenu/:id',
                element: <Menu />,
            },
        ],
    },
])

// Reandering root;
// root.render(<AppLayout />);


root.render(<RouterProvider router={appRoute} />);