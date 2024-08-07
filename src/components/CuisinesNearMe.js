// Cuisines near me links
import { useState } from "react";

const ExploreCuisinesNearMe = ({ data, title, brands, isVisible, setIsVisible }) => {


    return (
        <div className="my-10">
            <div className="flex justify-between border border-gray-300 rounded-lg py-3" onClick={() => {
                if (isVisible) setIsVisible(false)
                else setIsVisible(true)
            }}>
                <h1 className="font-bold text-2xl ml-1">{title}</h1>
                {(isVisible) ?
                    <h1 className="mr-2">&#8963;</h1> :
                    <h1 className="mr-2">&#8964;</h1>
                }
            </div>
            {(!isVisible) ? "" : <div className="flex flex-wrap justify-evenly mt-10">
                {
                    brands.map((item, index) => <div key={index} className="w-1/4 m-1 px-3 py-3 text-center rounded-xl border border-gray-300">
                        <a href={item?.link}>
                            <h1 className="text-lg text-gray-500 truncate">{item?.text}</h1>
                        </a>
                    </div>)
                }
            </div>}
        </div>
    );
};

export default ExploreCuisinesNearMe;