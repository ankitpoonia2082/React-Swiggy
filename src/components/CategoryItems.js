// Category Items
import MenuCard from "./RestaurantMenuCard";
import { useState } from "react";

const Category = ({ title, itemCards }) => {
    const [isVisible, setIsVisible] = useState(true);

    return (!itemCards) ? '' : (
        <div className="border-b-8">
            <button className="w-full py-4" onClick={() => {
                if (isVisible) setIsVisible(false);
                else setIsVisible(true);
            }}>
                <div className="flex justify-between">
                    <h1 className="font-bold text-xl">
                        {title} ({itemCards.length})
                    </h1>
                    <h1>⥯</h1>
                </div></button>

            {(!isVisible) ? '' : <div className="">
                {itemCards.map((item) => <MenuCard key={item?.card?.info?.id} {...item.card.info} />)}
            </div>}
        </div>
    );

};

export default Category;