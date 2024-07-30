// Menu Offer Card
import { IMG_CDN } from "../../config";
const OfferCard = ({ header, couponCode, description, offerLogo }) => {
  return (
    <div className="w-80 h-20 flex justify-start border rounded-2xl p-3 mx-3 overflow-hidden">
      <h2 className="offerLogo">
        <img className="w-12 h-12" src={IMG_CDN + offerLogo} />
      </h2>
      <div className="offerDetails ms-3">
        <h4 className="font-bold text-nowrap">{header}</h4>
        <h5 className="text-gray-500 text-sm  text-nowrap">{couponCode}</h5>
      </div>
    </div>
  );
};

export default OfferCard;