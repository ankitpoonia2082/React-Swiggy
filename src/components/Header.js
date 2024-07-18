// Navbar___

import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/customHooks/useOnline"


// Logo Image___
const logoImg = (<Link to="/"><img className="logo" alt="logo" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" /></Link>)

const Navbar = () => {

    const [auth, setAuth] = useState(false);
    const isOnline = useOnline();

    return (
        <div className="navbar">

            <div className="icon">{logoImg}</div>

            <div className="navLinks">

                <ul className="links">
                    <li><Link to={'/about'}>Swiggy Corporate</Link></li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
            </div>
            <div>
                <h3>{isOnline ? '🟢' : '🔴'}</h3>
            </div>
            <div className="login">
                {
                    (auth) ? <button onClick={() => setAuth(false)} className="logoutBtn">Logout</button> : <button onClick={() => setAuth(true)} className="loginBtn">Login</button>
                }
            </div>
        </div>
    )
};

export default Navbar;