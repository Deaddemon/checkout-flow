import React from "react";

const CreditCard: React.FC = () => {
  return (
    <div >
      <div className="column shipping">
        <div className="title flex items-center">
          <div className="num h-6 w-6 flex items-center justify-center rounded-full border-2 border-blue-500 mr-3">1</div>
          <h4 className="text-lg font-bold">Credit Card Info</h4>
        </div>
        <div className="field full mb-6">
          <label htmlFor="name" className="text-xs font-semibold text-gray-600 uppercase">Cardholder Name</label>
          <input id="name" type="text" placeholder="Full Name" className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="field full mb-6">
          <label htmlFor="address" className="text-xs font-semibold text-gray-600 uppercase">Card Number</label>
          <input id="address" type="text" placeholder="1234-5678-9012-3456" className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
        <div className="flex justify-between mb-6">
          <div className="field half">
            <label htmlFor="city" className="text-xs font-semibold text-gray-600 uppercase">Exp. Month</label>
            <input id="city" type="text" placeholder="12" className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
          <div className="field half">
            <label htmlFor="state" className="text-xs font-semibold text-gray-600 uppercase">Exp. Year</label>
            <input id="state" type="text" placeholder="19" className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
          </div>
        </div>
        <div className="field full">
          <label htmlFor="zip" className="text-xs font-semibold text-gray-600 uppercase">CVC Number</label>
          <input id="zip" type="text" placeholder="468" className="w-full py-3 px-4 border border-gray-200 rounded-lg focus:outline-none focus:border-blue-500" />
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
