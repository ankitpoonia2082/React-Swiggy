// Navbar___

import { useState } from "react";
import { Link } from "react-router-dom";
import { logo_url } from "../../config";
import useOnline from "../utils/customHooks/useOnline";
import { useSelector } from "react-redux";
import store from "../utils/store";


const Navbar = () => {

    const [auth, setAuth] = useState(false);
    const isOnline = useOnline();
    const cartItems = useSelector(store => store.cart.items);

    return (
        <div className="flex justify-between shadow-lg p-4">
            {/* Logo */}
            <Link to="/" >
                <img alt="logo" data-testid="logo" className="h-12" src={logo_url} />
            </Link>

            {/* Links */}
            <div className="flex py-3">
                <ul className="flex">
                    <li className="flex px-3">
                        <a href='https://www.swiggy.com/about-us/' className="flex">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M160-120q-33 0-56.5-23.5T80-200v-440q0-33 23.5-56.5T160-720h160v-80q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v80h160q33 0 56.5 23.5T880-640v440q0 33-23.5 56.5T800-120H160Zm0-80h640v-440H160v440Zm240-520h160v-80H400v80ZM160-200v-440 440Z" /></svg>
                            Swiggy Corporate</a>
                    </li>

                    <li className="flex px-3">
                        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M300-520q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm360 440q-58 0-99-41t-41-99q0-58 41-99t99-41q58 0 99 41t41 99q0 58-41 99t-99 41Zm0-80q25 0 42.5-17.5T720-300q0-25-17.5-42.5T660-360q-25 0-42.5 17.5T600-300q0 25 17.5 42.5T660-240Zm-444 80-56-56 584-584 56 56-584 584Z" /></svg>
                        Offers
                    </li>

                    <li className="flex px-3">
                        <a href="https://www.swiggy.com/support/issues/partner-onboarding">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="24px"
                                viewBox="0 -960 960 960"
                                width="24px"
                                fill="#434343">
                                <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80ZM364-182l48-110q-42-15-72.5-46.5T292-412l-110 46q23 64 71 112t111 72Zm-72-366q17-42 47.5-73.5T412-668l-46-110q-64 24-112 72t-72 112l110 46Zm188 188q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm116 178q63-24 110.5-71.5T778-364l-110-48q-15 42-46 72.5T550-292l46 110Zm72-368 110-46q-24-63-71.5-110.5T596-778l-46 112q41 15 71 45.5t47 70.5Z" />
                            </svg></a>
                        Help
                    </li>

                    <li className="flex px-3">
                        <Link className="flex"
                            to={'/login'}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#434343"><path d="M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z" /></svg>
                            Sign In
                        </Link>
                    </li>

                    <li className="px-3">
                        <Link data-testid="cart" to={'/cart'}>
                            Cart {cartItems.length}
                        </Link>
                    </li>
                </ul>

                {/* Online / offline */}
                {/* <div className="p-3">
                    <h3>{isOnline ? '🟢' : '🔴'}</h3>
                </div> */}

                {/* Login/Logout button
                <div className="login">
                    {
                        (auth) ? <button onClick={() => setAuth(false)} className="">Logout</button> : <button onClick={() => setAuth(true)} className="">Login</button>
                    }
                </div> */}
            </div>

        </div>
    )
};

export default Navbar;