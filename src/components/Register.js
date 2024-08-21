// regster component;
import { useState } from "react";
import { Link } from "react-router-dom";


const Register = () => {
    const [number, setNumber] = useState();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <div className="px-10 py-8 w-2/5 ml-auto mr-auto mt-10">
            <div>
                {/* Heading and logo */}
                <div className="flex justify-between items-center">
                    <div className="h-1/5">
                        <h1 className="font-bold text-3xl">Sign up</h1>
                        <p>
                            or
                            <Link to={'/login'} className="text-orange-400"> login to your account</Link>
                        </p>
                    </div>

                    {/* Image */}
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
                    {/* Number */}
                    <div className="h-1/2 w-full border border-b-transparent mt-5 px-4 pt-4">
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

                    {/* Name */}
                    <div className="h-1/2 w-full border border-b-transparent px-4 pt-4">
                        <label className="text-sm text-gray-400">Name</label>
                        <input
                            type="text"
                            className="h-10 w-full mt-2 outline-none text-xl"
                            value={name}
                            onChange={(e) => { setName(e.target.value) }}
                            required={true}
                            maxLength={3}
                        />
                    </div>

                    {/* Email */}
                    <div className="h-1/2 w-full border px-4 pt-4">
                        <label className="text-sm text-gray-400">Email</label>
                        <input
                            type="email"
                            className="h-10 w-full mt-2 outline-none text-xl"
                            value={email}
                            onChange={(e) => { setEmail(e.target.value) }}
                            required={true}
                        />
                    </div>


                    <button
                        className="bg-orange-500 text-white w-full text-sm font-bold py-3 my-5"
                    >CONTINUE</button>
                </div>

                <p className="text-xs text-gray-500">
                    By clicking on Login, I accept the <a className="text-orange-400 cursor-pointer">Terms & Conditions</a> & <a
                        className="text-orange-400 cursor-pointer">Privacy Policy</a>
                </p>

            </div>
        </div>
    );
};


export default Register;