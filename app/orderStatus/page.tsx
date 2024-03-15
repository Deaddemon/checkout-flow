
'use client';

import { useEffect, useRef, useState } from 'react';
import NavBar from '../../components/navBar';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import { fetchOrders } from '@/store/orderSlice';



const OrderConfirmationPage: React.FC = () => {

    const [orderStatus, setOrderStatus] = useState<string>('Pending');
    const orderRef = useRef(false);
    const { products } = useSelector((state: RootState) => state.order);
    const { selectedMethod } = useSelector((state: RootState) => state.payment);
    const dispatch = useDispatch<AppDispatch>();


    useEffect(() => {
        const randomizeOrderStatus = () => {
            const statuses = ['Success', 'Failure', 'Pending'];
            const randomIndex = Math.floor(Math.random() * statuses.length);
            return statuses[randomIndex];
        };

        const status = randomizeOrderStatus();
        setOrderStatus(status);
    }, []);


    
    useEffect(() => {

        if (orderRef.current === false) {
            dispatch(fetchOrders()); 
        }
        return () => {
            orderRef.current = true;
        }

    }, []);


    return (
        <div>
            <NavBar />
            <div className="flex justify-center">
                <div className="container mt-12 mb-12 mx-2">
                    <article className="relative flex flex-col min-w-0 break-words bg-white p-6 border border-gray-200 rounded">
                        <header className="px-4 py-2 mb-0 bg-white border-b border-gray-200"> My Orders / Tracking </header>
                        <div className="px-4 py-4">
                            <h6>Order ID: OD45345345435</h6>
                            <article className="relative">
                                <div className="flex flex-col md:flex-row justify-between">
                                    <div className="flex flex-col mb-4 md:mb-0">
                                        <strong className="block mb-2"> Mode of Payment:</strong>
                                        <span>{selectedMethod}</span>
                                    </div>
                                    <div className="flex flex-col mb-4 md:mb-0 md:ml-3">
                                        <strong className="block mb-2">Shipping BY:</strong>
                                        <span>BLUEDART, | <i className="fa fa-phone"></i> +1598675986</span>
                                    </div>
                                    <div className="flex flex-col mb-4 md:mb-0 md:ml-3">
                                        <strong className="block mb-2">Status:</strong>
                                        <span>{orderStatus}</span>
                                    </div>
                                </div>
                            </article>
                            <hr className="my-4" />
                            <span>Your Orders:</span>
                            <hr className="my-4" />
                            <ul className="flex flex-col">
                                {products.map((product) => (
                                    <li className="flex-grow">
                                        <figure className="flex flex-col items-center mb-3 md:flex-row">  
                                            <div><img src={product.image} className="w-20 h-20 border" /></div>
                                            <figcaption className="ml-4 mt-2 md:mt-0">  
                                                <p className="mb-2">{product.title}</p>
                                                <span className="text-gray-500"> {product.quantity} x ₹{product.price} </span>
                                            </figcaption>
                                        </figure>
                                        <hr className="my-4" />
                                    </li>
                                ))}
                            </ul>
                            <Link href="/checkout">
                                <button className="border border-emerald-500 cursor-pointer bg-emerald-500 text-white transition-colors duration-500 text-emerald-500 py-1 px-5 rounded-md w-full sm:w-auto">
                                    Back to orders
                                </button>
                            </Link>
                        </div>
                    </article>
                </div>
            </div>
        </div>

    );
};

export default OrderConfirmationPage;
