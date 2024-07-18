// Menu Offer Card
import { IMG_CDN } from "../../config";
const OfferCard = ({ header, couponCode, description, offerLogo }) => {
  return (
    <div className="offerCard">
      <h2 className="offerLogo">
        <img src={IMG_CDN + offerLogo} />
      </h2>
      <div className="offerDetails">
        <h4>{header}</h4>
        <h5>{couponCode}</h5>
      </div>
    </div>
  );
};

export default OfferCard;