import React from 'react';

const Affiliate: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Affiliate & Referral Program</h1>
      <p className="text-gray-600 mb-8">Learn how to earn rewards by referring friends or joining our affiliate program.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Sign up for our affiliate program and get a unique referral link.</li>
        <li>Earn commissions for every successful referral.</li>
        <li>Track your earnings in your affiliate dashboard.</li>
      </ul>
    </div>
  );
};

export default Affiliate; 