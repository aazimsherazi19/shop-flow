import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const OrderSuccess = () => {
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-[#f9f9f9] px-4 pt-20">
      <div className="bg-white p-10 md:p-16 rounded-2xl shadow-sm text-center max-w-lg w-full">
        <FontAwesomeIcon icon={faCheckCircle} className="text-6xl md:text-8xl text-green-500 mb-6" />
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Order Successful!</h2>
        <p className="text-gray-500 mb-8">
          Thank you for your purchase. We've received your order and currently processing it. A confirmation email has been sent.
        </p>
        
        <div className="bg-gray-50 rounded-lg p-6 mb-8 text-sm text-left border">
          <div className="flex justify-between border-b pb-3 mb-3">
            <span className="text-gray-500">Order Number:</span>
            <span className="font-bold">ORD-{Math.floor(Math.random() * 1000000)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-500">Status:</span>
            <span className="font-bold text-orange-500">Processing</span>
          </div>
        </div>

        <Link to="/shop">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition font-medium w-full md:w-auto">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default OrderSuccess;
