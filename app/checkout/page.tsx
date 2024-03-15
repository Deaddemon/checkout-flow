
'use client';
import React, { useEffect, useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "@/store/orderSlice";
import { AppDispatch, RootState } from "@/store/store";
import Product from "@/components/product";
import NavBar from "@/components/navBar";

const CheckoutPage: React.FC = () => {
    const [isCardView, setIsCardView] = useState(true);
    const orderRef = useRef(false);
    const dispatch = useDispatch<AppDispatch>();
    const { products } = useSelector((state: RootState) => state.order);

    useEffect(() => {
        if (orderRef.current === false) {
            dispatch(fetchOrders());
        }
        return () => {
            orderRef.current = true;
        }
    }, []);

    const toggleView = () => {
        setIsCardView(!isCardView);
    };

    const totalPrice = products.reduce((total, product) => {
        return total + (product.price * product.quantity);
    }, 0).toFixed(2);
    const totalPriceNumber: number = parseFloat(totalPrice);

    return (
        <>
            <NavBar totalPrice={totalPriceNumber} productsLength={products.length === 0}/>
            <div className="m-6">
                <div className="flex justify-center items-center text-black h-5 whitespace-nowrap">
                    <button
                        className="border border-emerald-500 cursor-pointer text-black transition-colors duration-500 py-1 px-5 rounded-md"
                        onClick={toggleView}
                    >
                        {isCardView ? 'View as List' : 'View as Cards'}
                    </button>
                </div>
            </div>
            {products.length === 0 ? (
                <div className="flex justify-center">
                    <img src="no-data.png"/>
                </div>
            ) : (
                isCardView ?
                    <div className="flex justify-center">
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-wrap">
                            {products.map((product) => (
                                <div key={product.id} className="md:col-span-1 lg:col-span-1">
                                    <Product product={product} />
                                </div>
                            ))}
                        </div>
                    </div>
                    :
                    <div className="flex justify-center">
                        <ul className="flex flex-col mt-6 p-6 bg-white rounded-xl mx-2">
                            {products.map((product) => (
                                <li key={product.id} className="flex-grow">
                                    <figure className="flex flex-col items-start mb-3 md:flex-row">  
                                        <img src={product.image} className="w-20 h-20 border mx-2" ></img>
                                        <figcaption className="ml-4 mt-2 md:mt-0">  
                                            <p className="mb-2">{product.title}</p>
                                            <div className="text-gray-500">
                                                <div className="mt-3">
                                                    <span className="mx-2">- </span>
                                                    <span className="mx-2">{product.quantity}</span>
                                                    <span className="mx-2" >+</span>
                                                </div>
                                                <button className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2">
                                                    <span className="text-2xl font-semibold mt-auto">₹ {product.price}</span>
                                                </button>
                                            </div>
                                        </figcaption>
                                    </figure>
                                    <hr className="my-4 border-emerald-500" />
                                </li>
                            ))}
                        </ul>
                    </div>
            )}
        </>
    );
}

export default CheckoutPage;
