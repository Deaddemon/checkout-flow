import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPaymentMethods, selectPaymentMethod } from '../store/paymentSlice';
import { AppDispatch, RootState } from '../store/store';

const PaymentComponent: React.FC = () => {
    const dispatch = useDispatch<AppDispatch>();
    const { loading, paymentMethods, selectedMethod } = useSelector((state: RootState) => state.payment);

    // Fetch payment methods when the component mounts
    useEffect(() => {
        dispatch(fetchPaymentMethods());
    }, []);

    const handlePaymentMethodSelect = (method: string) => {
        dispatch(selectPaymentMethod(method)); // Dispatch selectPaymentMethod action with the selected method
    };

    return (
        <div>
            {loading ? (
                <p>Loading payment methods...</p>
            ) : (
                <div>
                    <h2>Select Payment Method</h2>
                    <ul>
                        {paymentMethods.map((method: string) => (
                            <li key={method} onClick={() => handlePaymentMethodSelect(method)}>
                                {method}
                            </li>
                        ))}
                    </ul>
                    <p>Selected method: {selectedMethod}</p>
                </div>
            )}
        </div>
    );
};

export default PaymentComponent;
