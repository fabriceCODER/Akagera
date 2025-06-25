import React from 'react';

const Returns: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Returns & Refunds Policy</h1>
      <p className="text-gray-600 mb-8">Learn about our returns and refunds process to shop with confidence.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Returns accepted within 30 days of delivery.</li>
        <li>Products must be unused and in original packaging.</li>
        <li>Refunds processed within 7 business days after inspection.</li>
        <li>Contact our support for return instructions.</li>
      </ul>
    </div>
  );
};

export default Returns; 