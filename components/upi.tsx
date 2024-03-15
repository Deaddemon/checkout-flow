import React from "react";

const Upi: React.FC = () => {
    return (
        <div>
            <div className="column">
                <div className="title flex items-center">
                    <div className="num h-6 w-6 flex items-center justify-center rounded-full border-2 border-blue-500 mr-3">1</div>
                    <h4 className="text-lg font-bold">UPI code</h4>
                </div>
                <div className="field full mb-6">
                    <label htmlFor="name" className="text-xs font-semibold text-gray-600 uppercase">Scan the below code</label>
                    <img src="upi-code.png" alt="upi-code" className="w-40 h-40 mx-auto" />
                </div>
            </div>
        </div>
    );
};

export default Upi;
