
'use client';

import react, { useEffect, useRef } from "react";
import { useSelector, useDispatch, Provider } from "react-redux";
import { fetchOrders } from "@/store/orderSlice";
import { AppDispatch, RootState } from "@/store/store";
import Product from "@/components/product";
import NavBar from "@/components/navBar";

 
export default function CheckoutPage() {


  const orderRef = useRef(false);

  const { products } = useSelector((state: RootState) => state.order);

  console.log('============');
  console.log('checkoutPage.tsx -> products', products);
  console.log('============');

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {

    if (orderRef.current === false) {
      dispatch(fetchOrders());

    }

    return () => {
      orderRef.current = true;
    }



  }, []);

  const totalPrice = products.reduce((total, product) => {
    return total + (product.price * product.quantity);
  }, 0).toFixed(2);
  const totalPriceNumber: number = parseFloat(totalPrice);


  return (
    <div>
      
      <NavBar totalPrice={totalPriceNumber} />
      <div className="flex justify-center">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-wrap">
          {products.map((product) => (
            <div key={product.id} className="md:col-span-1 lg:col-span-1">
              <Product product={product} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

