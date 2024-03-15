'use client';

import React, { useState } from "react";
import Link from "next/link";

const PaymentButton: React.FC = () => {
  const [status, setStatus] = useState<string>("idle");

  return (
    <article className="flex flex-col">
      <Link href="/orderStatus"> 
      <button 
      className="border border-emerald-500 cursor-pointer bg-emerald-500 text-white transition-colors duration-500 text-emerald-500 py-1 px-5 rounded-md w-full sm:w-auto"
      onClick={() => setStatus("loading")}
      >

        {status !== "loading" ? "Place Order" : "Loading..."}
      </button>
      </Link>
    </article>
  );
};

export default PaymentButton;
 