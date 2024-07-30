// Navbar___

import { useState } from "react";
import { Link } from "react-router-dom";
import { logo_url } from "../../config";
import useOnline from "../utils/customHooks/useOnline";


const Navbar = () => {

    const [auth, setAuth] = useState(false);
    const isOnline = useOnline();

    return (
        <div className="flex mb-5 justify-between shadow-lg p-4">

            <Link to="/" >
                <img alt="logo" className="h-12" src={logo_url} />
            </Link>

            <div className="py-3">
                <ul className="flex">
                    <li className="px-3"><Link to={'/about'}>Swiggy Corporate</Link></li>
                    <li className="px-3">Search</li>
                    <li className="px-3">Offers</li>
                    <li className="px-3">Help</li>
                    <li className="px-3">Sign In</li>
                    <li className="px-3">Cart</li>
                </ul>
            </div>
            <div className="p-3">
                <h3>{isOnline ? '🟢' : '🔴'}</h3>
            </div>
            <div className="login">
                {
                    (auth) ? <button onClick={() => setAuth(false)} className="bg-black">Logout</button> : <button onClick={() => setAuth(true)} className="loginBtn">Login</button>
                }
            </div>
        </div>
    )
};

export default Navbar;