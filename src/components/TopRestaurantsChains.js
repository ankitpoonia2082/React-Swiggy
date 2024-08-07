// Top restaurant chains in city component
import { useRef } from "react";
import Card from "./RestaurantCard";
import Slider from "react-slick";
// Import css files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopRestaurants = (data) => {

    const restaurants = data?.gridElements?.infoWithStyle.restaurants;
    const topRestaurantSliderRef = useRef();
    const topRestaurantSettings = {
        initialSlide: 0,
        speed: 1000,
        slidesToShow: 4.2,
        slidesToScroll: 2,
        infinite: false,
        arrows: false,
    };

    return (
        <div className="border-b-4  py-5 my-5">
            <div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-2xl">
                        {(data?.header?.title) || 'Top restaurant chains'}</h1>
                    <div className="Slider-Buttons">
                        <button className="bg-slate-300 rounded-full px-3 py-1 m-1" onClick={() => {
                            if (data?.gridElements?.infoWithStyle.restaurants?.length > 3) topRestaurantSliderRef.current.slickPrev();
                        }}>&#8249;</button>
                        <button className="bg-slate-300 rounded-full px-3 py-1 m-1"
                            onClick={() => {
                                if (data?.gridElements?.infoWithStyle.restaurants?.length > 3) topRestaurantSliderRef.current.slickNext();
                            }} >&#8250;</button>
                    </div>
                </div>

                <div className='my-5'>
                    <Slider ref={topRestaurantSliderRef} {...topRestaurantSettings}>
                        {restaurants.map((item) => <Card key={item?.info?.id} {...item?.info} />)}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default TopRestaurants;