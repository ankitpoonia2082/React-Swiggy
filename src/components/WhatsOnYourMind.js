// Component 1 : What's on your mind:
import { IMG_CDN } from "../../config";
import { useRef } from "react";
import Slider from "react-slick";
// Import css files for react-slick
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WhatsOnYourMindCard = (whatOnYourMindData) => {

    const title = whatOnYourMindData?.header?.title;
    const data = whatOnYourMindData?.gridElements?.infoWithStyle.info;
    const whatsSliderRef = useRef();
    const whatsOnYourMindSettings = {
        initialSlide: 0,
        speed: 800,
        slidesToShow: 6.5,
        slidesToScroll: 4,
        infinite: false,
        arrows: false,
    };

    return (
        <>
            {(!whatOnYourMindData) ? '' :
                <div className='border-b-2  py-5 my-9'>
                    <div className="flex justify-between">
                        <h1 className="font-bold text-2xl">{title}</h1>
                        <div className="Slider-Buttons">
                            <button className="bg-slate-300 rounded-full px-3 py-1 m-1" onClick={() => {
                                if (whatOnYourMindData?.imageGridCards?.info.length > 3) whatsSliderRef.current.slickPrev();
                            }}>&#8249;</button>
                            <button className="bg-slate-300 rounded-full px-3 py-1 m-1"
                                onClick={() => {
                                    if (whatOnYourMindData?.imageGridCards?.info.length > 3) whatsSliderRef.current.slickNext();
                                }} >&#8250;</button>
                        </div>
                    </div>

                    <div className='my-8'>
                        <Slider ref={whatsSliderRef} {...whatsOnYourMindSettings}>
                            {data.map((item) =>
                                <img key={item.id} className="m-0 p-0 cursor-pointer" src={IMG_CDN + item.imageId} />
                            )}
                        </Slider>
                    </div>

                </div>}
        </>
    );
};

export default WhatsOnYourMindCard;