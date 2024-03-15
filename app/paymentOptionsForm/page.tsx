
'use client';
import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "@/store/store";
import { fetchPaymentMethods, selectPaymentMethod } from '@/store/paymentSlice';
import NavBar from '../../components/navBar';
import CreditCard from '../../components/creditCard';
import Upi from '../../components/upi';
import Spinner from '../../components/spinner';
import PaymentButton from '../../components/paymentButton';

interface PaymentOptionsFormProps {

}

const PaymentOptionsForm: React.FC<PaymentOptionsFormProps> = () => {
  const initialValues = {
  };

  const paymentRef = useRef(false);
  const { paymentMethods, selectedMethod } = useSelector((state: RootState) => state.payment);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch<AppDispatch>();
  useEffect(() => {
    if (paymentRef.current === false) {
      dispatch(fetchPaymentMethods())
        .then(() => {
          setLoading(false);
        })
        .catch((error) => {
          console.error('Error fetching payment methods:', error);
          setLoading(false);
        });
    }
    return () => {
      paymentRef.current = true;
    }
  }, []);


  const handlePaymentMethodSelection = (method: string) => {
    dispatch(selectPaymentMethod(method));
  };

  return (
    <>
      <NavBar />
      <article className="card bg-white p-12 mt-12 mb-12 mx-2 max-w-850px rounded-lg shadow-md">
        <div className="container">
          <div className="card-title">
            <h2 className="text-xl font-bold">Payment</h2>
            <hr></hr>
          </div>
          <div className="card-body">

            <div className="payment-type">
              <h4 className="text-lg font-bold mb-6">Choose payment method below</h4>
              {loading ? (
                <Spinner />
              ) : (
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 flex-wrap mb-6">
                  {
                    paymentMethods.map((paymentMethod) => (
                      <button
                        className="border border-emerald-500  cursor-pointer bg-emerald-50 hover:bg-emerald-500 hover:text-white transition-colors duration-500 text-emerald-500 py-3 px-5 rounded-md w-100 mr-3"
                        onClick={() => handlePaymentMethodSelection(paymentMethod)}
                        key={paymentMethod}
                      >
                        <div className="flex items-center">
                          {
                            paymentMethod === 'UPI' ? <img src="upi-icon.png" alt="upi" className="w-10 h-10 ml-2 mr-5" />
                              : <img src="card-icon.png" alt="card" className="w-10 h-10 ml-2 mr-5" />
                          }
                          {paymentMethod}
                        </div>
                      </button>
                    ))
                  }
                </div>)}
            </div>

            <div className="justify-center">
              {
                selectedMethod === 'UPI' ? <Upi /> : <CreditCard />
              }
            </div>
          </div>
          <div className="card-actions flex flex-col sm:flex-row justify-between mt-6">
            <div className="flex-start mb-3 sm:mb-0 sm:mr-3">
              <Link href="/checkout">
                <button className="border border-emerald-500 cursor-pointer text-black transition-colors duration-500 text-emerald-500 py-1 px-5 rounded-md w-full sm:w-auto">Return to Store</button>
              </Link>
            </div>
            <div className="flex-end">
              {
                selectedMethod ?
                  <PaymentButton />
                  :
                  <button
                    className="border border-emerald-500 disabled bg-emerald-500 text-white transition-colors duration-500 text-emerald-500 py-1 px-5 rounded-md w-full sm:w-auto"
                  >
                    Select a payment method
                  </button>
                   
              }

            </div>
          </div>

        </div>
      </article>
    </>
  );
};

export default PaymentOptionsForm;
