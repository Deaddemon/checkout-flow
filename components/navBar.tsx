import React from "react";
import Image from "next/image";
import Link from "next/link";
import CheckoutButton from "./checkoutButton";

interface NavBarProps {
    totalPrice?: number;
    productsLength?: boolean;
}

const NavBar: React.FC<NavBarProps> = ({ totalPrice, productsLength }) => {
    return (
        <nav className="py-5 px-6 flex justify-between bg-white">
            <Link href="/">
                <span className="hidden sm:block bg-white text-3xl font-bold underline underline-offset-4 decoration-wavy decoration-2 decoration-emerald-500">
                    Groww
                </span>
            </Link>


            <div>

            {totalPrice !== undefined && (
                <div className="mt-2">
                    <div className="flex justify-center items-center text-black w-auto h-5 -right-0 whitespace-nowrap">
                        {

                            (!productsLength) && <CheckoutButton />
                        }

                     
                            <button className="border border-emerald-500  cursor-default transition-colors duration-500 text-emerald-500 py-3 px-2 rounded-md w-100">
                                Total amt: ₹{totalPrice}
                            </button>
                      
                    </div>
                </div>
                   )}

            </div>


        </nav>
    );
};

export default NavBar;
