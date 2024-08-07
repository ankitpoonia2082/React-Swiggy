// For better experience,download the Swiggy app now
import { IMG_CDN } from "../../config";

const GetApp = (data) => {
    const { title,
        androidAppImage,
        androidAppLink,
        iosAppImage,
        iosAppLink } = data;

    return (
        <div className="flex justify-around bg-slate-200 p-5 px-40">
            <div className="w-6/12">
                <h1 className="font-bold text-gray-700 text-2xl">{title}</h1>
            </div>
            <div className="flex w-6/12 h-16">
                <a href={androidAppLink}><img className="h-full mr-6" key={'Android'} src={IMG_CDN + androidAppImage} alt="Get adroid app" /></a>
                <a href={iosAppLink}><img className="h-full" key={'Ios'} src={IMG_CDN + iosAppImage} alt="Get ios app" /></a>
            </div>

        </div>
    );
};

export default GetApp;