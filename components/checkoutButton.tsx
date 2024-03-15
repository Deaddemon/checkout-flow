'use client';

import React, { useState } from "react";
import Link from "next/link";
const CheckoutButton: React.FC = () => {
  const [status, setStatus] = useState<string>("error");

  return (
    <article className="flex flex-col mr-2">
      <Link href="/paymentOptionsForm"> 
      <button 
      className="bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-2 rounded-md w-100"
      onClick={() => setStatus("loading")}
      >

        {status !== "loading" ? "Checkout" : "Loading..."}
      </button>
      </Link>
    </article>
  );
};

export default CheckoutButton;
 