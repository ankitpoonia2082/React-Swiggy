import React, { lazy, Suspense } from "react";
import reactDOM from 'react-dom/client';
import Navbar from './src/components/header';
import Body from './src/components/Body';
import Footer from './src/components/footer';
import Menu from "./src/components/RestaurantMenu";
import Cart from "./src/components/cartComponents/Cart";
import ErrorPage from './src/components/Error';
import Shimmer from './src/components/Shimmer';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./src/utils/store";

// Dynamic import / Lazy Loading / Code Spliting...

const About = lazy(() => import("./src/components/About"));


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

// Root from index.html
const root = reactDOM.createRoot(document.getElementById('root'));

const AppLayout = () => (
    <Provider store={store}>
        <Navbar />
        <Outlet />
        <Footer />
    </Provider>
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
                element: <Suspense fallback={<Shimmer />}>
                    <About />
                </Suspense>,
            },
            {
                path: '/restaurantMenu/:id',
                element: <Menu />,
            },
            {
                path: '/cart',
                element: <Cart />,
            },
        ],
    },
])

// Reandering root;
// root.render(<AppLayout />);

root.render(<RouterProvider router={appRoute} />);