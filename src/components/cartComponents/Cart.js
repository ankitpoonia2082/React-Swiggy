// Cart cpmponent...
import { useSelector } from "react-redux";
import store from "../../utils/store";
import { useState } from "react";
import { veg_logo, nonVeg_logo } from "../../../config";
import { Link } from "react-router-dom";
import { clearCart, removeItem } from "../../utils/slices/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const dispatch = useDispatch();

    const handelClearCart = () => {
        dispatch(clearCart());
    };

    const handelRemoveItem = (id) => {
        dispatch(removeItem({ id }));
    };

    const cartItems = useSelector(store => store.cart.items);
    let total = 0;

    return (!cartItems.length) ?
        // if no item in cart
        <div className="flex flex-col justify-center text-center my-10">
            <img className="w-2/6 h-2/6 self-center" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,e_trim/cart_empty_ipmau1" alt="No item in cart"></img>

            <h1 className="font-bold text-gray-600 my-3">
                Your cart is empty
            </h1>

            <p className="text-gray-600 my-3 text-sm">You can go to home page to view more restaurants</p>

            <Link className="bg-orange-600 w-2/12 py-3 px-3 self-center cursor-pointer" to={'/'}>See restaurants near you</Link>
        </div>
        :
        // cart data
        <div className="flex justify-between bg-gray-200 px-10 py-5 ">
            {/* Profile / address and payment */}
            <div className="w-4/6 mr-10">
                {/* Logged in details */}
                <div className="bg-white p-5">
                    <h1 className="font-bold text-lg">Logged in ✅</h1>
                    <h1 className="my-4 font-bold">Ankit Poonia | 9050427627</h1>
                </div>

                {/* Address and add new address */}
                <div className="bg-white p-5 my-5">
                    <h1 className="font-bold text-lg">Add a dilivery address</h1>
                    <h3>You seem to be in the new location</h3>
                    <div className=" text-center border border-dashed my-4 p-4 hover:shadow-xl">
                        <h1 className="font-bold text-xl">Add new address</h1>
                        <h3 className="py-1">Azad Nagar</h3>
                        <button className="mt-1 border border-green-400 text-green-400 px-5 py-1">Add new</button>
                    </div>
                </div>

                {/* Payment */}
                <div className="bg-white p-5 my-5">
                    <h1 className="font-bold text-lg">Payment</h1>
                </div>
            </div>

            {/* Cart items and total */}
            <div className="w-4/12">
                <div className=" bg-white">
                    {/* Heading / Logo */}
                    <div className="flex justify-between py-3 px-3 h-14 mb-2">
                        <img src="https://cdn.worldvectorlogo.com/logos/swiggy-logo.svg" alt="Swiggy" className="h-full" />
                        <button
                            className="px-2  bg-orange-300 border border-orange-400 text-white rounded-lg"
                            onClick={handelClearCart}>
                            Clear cart
                        </button>
                    </div>


                    {/* Pricing details */}
                    <div className="h-80 px-5  overflow-y-scroll font-thin text-sm  border-b-2">
                        {/* Items Div */}
                        <div className=" h-80 overflow-x-scroll">
                            {/* items */}
                            <div>
                                {cartItems.map((item) => {
                                    {/* setTotal(total + (item.price / 100)) */ }
                                    let price = 0;
                                    if (!item.price) price = 0;
                                    else price = +item.price;
                                    total = total + (price) / 100
                                    return (
                                        <div className="flex justify-between my-1" key={item.id}>
                                            {/* Veg - non-veg logo */}
                                            {(item.isVeg) ?
                                                <img className="w-5" src={veg_logo}></img> :
                                                <img className="w-5" src={nonVeg_logo}></img>
                                            }

                                            {/* Name and price */}
                                            <div className="flex justify-evenly">
                                                <h1 className="w-3/4">{item.name}</h1>
                                                <h2>₹ {price / 100}</h2>
                                            </div>

                                            {/* Delete item button */}
                                            <button
                                                onClick={() => { handelRemoveItem(item.id) }}
                                                className="w-auto h-auto">
                                                <img className="w-7 h-7"
                                                    src="https://img.icons8.com/?size=50&id=3062&format=png"
                                                    alt="Delete">
                                                </img>
                                            </button>
                                        </div>
                                    );
                                })}
                            </div>

                            {/* Suggestion, No-Contact, Apply coupon */}
                            <div className="mt-3 ">
                                {/* Suggestion */}
                                <input className="overflow-hidden py-3 w-full text-center mt-3 bg-gray-200" type="text" placeholder="Any suggestions? we will pass it on..." />

                                {/* No Contact dilivery */}
                                <div className="flex justify-between border border-gray-500 px-4 w-full mt-3">
                                    <input type="checkbox" className="mr-3" />
                                    <div>
                                        <h1 className="font-bold overflow-hidden line-clamp-1">Opt in for No-contact Delivery</h1>
                                        <p className="line-clamp-3 text-justify">
                                            Unwell, or avoiding contact? Please select no-contact delivery. Partner will safely place the order outside your door (not for COD)
                                        </p>
                                    </div>
                                </div>

                                <input className="w-full overflow-hidden mt-3 border border-dashed py-3 px-4" placeholder="Apply Coupon">
                                </input>
                            </div>

                            {/* Bill Details */}
                            <div className="my-5">
                                <h1 className="font-bold mt-2">Bill Details</h1>

                                {/* Total and fee */}
                                <div className="py-2 ">

                                    {/* Total and dilivery fee */}
                                    <div className="border-b border-gray-400 py-2">

                                        {/* Total without any fee */}
                                        <div className="flex justify-between py-1">
                                            <h2>Item total</h2>
                                            <h2>₹ {total}</h2>
                                        </div>

                                        {/* Dilivery partner fee */}
                                        <div className="flex justify-between py-1">
                                            <h2>Delivery partner fee</h2>
                                            <h2>₹ 28</h2>
                                        </div>
                                    </div>

                                    {/* Discount */}
                                    <div className="flex justify-between text-green-400 border-b border-gray-400 py-2">
                                        <h2>Item Discount</h2>
                                        <h2>₹ -10.0</h2>
                                    </div>

                                    {/* Tip, fee, GST */}
                                    <div className="pt-2">
                                        {/* Tip */}
                                        <div className="flex justify-between py-1">
                                            <h2>Delivery Tip</h2>
                                            <h2 className="text-orange-400">Add tip</h2>
                                        </div>

                                        {/* Platform fee */}
                                        <div className="flex justify-between py-1">
                                            <h2>Platform fee</h2>
                                            <h2>₹ 6</h2>
                                        </div>

                                        {/* GST */}
                                        <div className="flex justify-between pt-1">
                                            <h2>GST and Restaurant Charges</h2>
                                            <h2>₹ 15.0</h2>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    {/* TO Pay Total */}
                    <div className="flex justify-between py-3 px-5">
                        <h1 className="font-bold">TO PAY</h1>
                        <h1 className="font-bold">{total - 59}</h1>
                    </div>

                </div>

                {/* Savings of */}
                <div className="my-5 py-3 w-auto bg-green-50 border border-green-300 text-center text-green-300">
                    <h1>Savings of ₹50.8</h1>
                </div>

                {/* Review your order and cancellations */}
                <div className="p-5 text-sm bg-white">
                    <div className="border border-gray-400 p-5">
                        <h1 className="font-bold mb-5">Review your order and address details to avoid cancellations</h1>

                        <p className="my-5">
                            <span className="text-orange-500">Note:</span>
                            If you cancel within 60 seconds of placing your order, a 100% refund will be issued. No refund for cancellations made after 60 seconds.
                        </p>

                        <p className="text-gray-500 my-5">Avoid cancellation as it leads to food wastage.</p>

                        <h4 className="text-orange-500 cursor-pointer">Read cancellation policy</h4>
                    </div>
                </div>
            </div>


        </div>
};

export default Cart;