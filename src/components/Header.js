// Navbar___

import { useState } from "react";


// Logo Image___
const logoImg = (<a href="/"><img className="logo" alt="logo" src="https://cdn.worldvectorlogo.com/logos/swiggy-1.svg" /></a>)

const Navbar = () => {

    const [auth, setAuth] = useState(false);

    return (
        <div className="navbar">

            <div className="icon">{logoImg}</div>

            <div className="navLinks">

                <ul className="links">
                    <li>Swiggy Corporate</li>
                    <li>Search</li>
                    <li>Offers</li>
                    <li>Help</li>
                    <li>Sign In</li>
                    <li>Cart</li>
                </ul>
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