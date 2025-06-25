import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Users } from 'lucide-react';

const Affiliate: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Users className="w-7 h-7 text-akagera-700" />
            Affiliate & Referral Program
          </h1>
          <p className="text-gray-600 mt-2">
            Earn rewards by referring friends or joining our affiliate program. Help us grow and get rewarded for your influence!
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How It Works</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Sign up for our affiliate program and receive a unique referral link.</li>
            <li>Share your link with friends, family, or your audience.</li>
            <li>Earn commissions for every successful referral who makes a purchase.</li>
            <li>Track your earnings and performance in your affiliate dashboard.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Competitive commission rates on every sale.</li>
            <li>Monthly payouts via your preferred payment method.</li>
            <li>Exclusive promotions and bonuses for top affiliates.</li>
            <li>Dedicated support for all affiliates and partners.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Join</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Register for an Akagera account (or sign in if you already have one).</li>
            <li>Navigate to the Affiliate Dashboard in your profile.</li>
            <li>Apply to become an affiliate and agree to the program terms.</li>
            <li>Start sharing your referral link and earning rewards!</li>
          </ol>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">Who can join the affiliate program?</p>
              <p className="text-gray-700">Anyone with an Akagera account can apply to become an affiliate. Approval is subject to our program terms.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">How are commissions paid?</p>
              <p className="text-gray-700">Commissions are paid monthly via your selected payment method, once the minimum payout threshold is reached.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Where can I track my referrals and earnings?</p>
              <p className="text-gray-700">You can view detailed stats and earnings in your Affiliate Dashboard after logging in.</p>
            </div>
          </div>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">For questions or support regarding the affiliate program, contact our team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Affiliate Support</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Affiliate; 