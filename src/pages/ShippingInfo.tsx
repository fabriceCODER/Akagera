import React from 'react';

const ShippingInfo: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Shipping Information</h1>
      <p className="text-gray-600 mb-8">Find out about our shipping options, costs, and delivery times.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Standard and express shipping available.</li>
        <li>Free shipping on orders over $50.</li>
        <li>Delivery times: 2-5 business days (standard), 1-2 business days (express).</li>
        <li>Track your order in your account dashboard.</li>
      </ul>
    </div>
  );
};

export default ShippingInfo; 