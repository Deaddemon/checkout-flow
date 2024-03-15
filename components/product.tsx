
'use client';

import React, { useState } from "react";

interface ProductProps {
    product: {
        title: string;
        image: string;
        quantity: number;
        price: number;
    };
}

const Product: React.FC<ProductProps> = ({ product }) => {
    const { title, image, quantity, price } = product;

    return (
        <article className="flex flex-col gap-10 bg-white p-6 m-2 rounded-xl shadow-md text-center max-w-[380px] mb-6">
            <img src={image} alt={title} className="w-40 h-40 mx-auto" />
            <span className="text-lg">
                {title.split(' ').slice(0, 7).join(' ')}
                {title.split(' ').length > 3 && '...'}
            </span>
            <div className="flex justify-around items-center mt-4 mb-2 text-gray-500">
                <button
                    className="disabled hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
                >
                    -
                </button>
                <div className="flex items-center">
                    <span className="w-10 text-center rounded-md">{quantity}</span>
                    <span className="text-md">Item</span>
                </div>
                <button
                    className="disabled hover:text-emerald-500 hover:bg-emerald-50 w-8 h-8 rounded-full transition-colors duration-500"
                >
                    +
                </button>
            </div>
            <button className="bg-emerald-50 cursor-default hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 rounded-md px-5 py-2">
                <span className="text-2xl font-semibold mt-auto">₹ {price}</span>
            </button>
        </article>
    );
};

export default Product;
