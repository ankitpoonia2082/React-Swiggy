import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useRestaurant from "../utils/customHooks/useRestaurant";

// Footer__
const Footer = () => {
    const data = useRestaurant();
    const [cities, setCities] = useState([]);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(
        () => {
            if (data) {
                if (data[10]?.card?.card?.id == "footer_content") {
                    setCities(data[10]?.card?.card?.cities)
                } else if (data[9]?.card?.card?.id == "footer_content") {
                    setCities(data[9]?.card?.card?.cities)
                }
            }
        }, [data]);


    return (
        <div className="h-auto bg-black text-gray-400 mt-auto w-full px-44">
            <div className="grid grid-cols-5 gap-5">
                {/* Logo */}
                <div className="m-5">
                    <img
                        src="https://logowik.com/content/uploads/images/t_swiggy-black2725.jpg"
                        className="h-20 invert" />
                    <p
                        className="">Made by :
                        <Link to={'https://github.com/ankitpoonia2082/React-Swiggy'}>Ankit Poonia</Link>
                    </p>
                </div>

                {/* Company */}
                <div className="m-5">
                    <h1 className="text-white">Company</h1>
                    <div className="flex flex-col">
                        <Link to={''}>About</Link>
                        <Link to={''}>Careers</Link>
                        <Link to={''}>Team</Link>
                        <Link to={''}>Swiggy One</Link>
                        <Link to={''}>Swiggy Instamart</Link>
                        <Link to={''}>Swiggy Genie</Link>
                    </div>
                </div>

                {/* Contact us */}
                <div className="m-5">
                    <h1 className="text-white">Contact us</h1>
                    <div className="flex flex-col">
                        <Link to={''}>Help & Support</Link>
                        <Link to={''}>Partner with us</Link>
                        <Link to={''}>Ride with us</Link>
                    </div>
                </div>

                {/* Legal */}
                <div className="m-5">
                    <h1 className="text-white">Legal</h1>
                    <div className="flex flex-col">
                        <Link to={''}>Term & Conditions</Link>
                        <Link to={''}>Cookie Policy</Link>
                        <Link to={''}>Privacy Policy</Link>
                        <Link to={''}>Investor Relations</Link>
                    </div>
                </div>

                {/* We deliver to: */}
                <div className="m-5">
                    <h1 className="text-white">We deliver to:</h1>
                    <div className="flex flex-col">
                        <Link to={''}>Bangalore</Link>
                        <Link to={''}>Gurgaon</Link>
                        <Link to={''}>Hyderabad</Link>
                        <Link to={''}>Delhi</Link>
                        <Link to={''}>Mumbai</Link>
                        <Link to={''}>Pune</Link>

                        <button onClick={() => {
                            if (isVisible) setIsVisible(false)
                            else setIsVisible(true);
                        }}
                        >Show more </button>
                    </div>
                </div>
            </div>

            {/* Cities */}

            {(!isVisible && cities?.length > 0) ? '' :

                <div className="mt-auto">
                    <h1 className="text-white my-5">
                        Other cities that we deliver :
                    </h1>
                    <div className="grid grid-cols-4 gap-5">
                        {cities.map((city) => (
                            <Link className="overflow-hidden " key={city.text} to={city.link}>{city.text}</Link>
                        ))}
                    </div>
                </div>

            }
        </div>
    );
};

export default Footer;