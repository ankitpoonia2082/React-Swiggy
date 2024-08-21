// Login and regster component;
import { useState } from "react";
import { Link } from "react-router-dom";


const Login = () => {
    const [number, setNumber] = useState();
    return (
        <div className="px-10 py-8 w-2/5 ml-auto mr-auto mt-10">
            <div>
                {/* Heading and logo */}
                <div className="flex justify-between items-center">
                    <div className="h-1/5">
                        <h1 className="font-bold text-3xl">Login</h1>
                        <p>
                            or
                            <Link to={"/regsterUser"} className="text-orange-400">create an account</Link>
                        </p>
                    </div>

                    <div>
                        <img
                            className="h-full w-32"
                            src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
                            alt=""
                        />
                    </div>
                </div>

                {/* Login input */}
                <div className="mt-10">
                    <div className="h-1/2 w-full border my-5 px-4 pt-4">
                        <label className="text-sm text-gray-400">Phone Number</label>
                        <input
                            type="tel"
                            className="h-10 w-full mt-2 outline-none text-xl"
                            value={number}
                            onChange={(e) => { setNumber(e.target.value) }}
                            required={true}
                            maxLength={10}
                            minLength={10}
                        />
                    </div>


                    <button
                        className="bg-orange-500 text-white w-full text-sm font-bold py-3 my-5"
                    >LOGIN</button>
                </div>

                <p className="text-xs text-gray-500">
                    By clicking on Login, I accept the <a className="text-orange-400 cursor-pointer">Terms & Conditions</a> & <a
                        className="text-orange-400 cursor-pointer">Privacy Policy</a>
                </p>

            </div>
        </div>
    );
};


export default Login;