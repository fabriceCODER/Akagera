import React from 'react';
import { Button } from '@/components/ui/button';
import { Gift } from 'lucide-react';

const GiftCards: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Gift className="w-7 h-7 text-akagera-700" />
            Gift Cards
          </h1>
          <p className="text-gray-600 mt-2">
            Purchase and redeem Akagera gift cards for your loved ones. The perfect gift for any occasion!
          </p>
        </header>

        {/* How Gift Cards Work */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How Gift Cards Work</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Choose a gift card amount and personalize your message.</li>
            <li>Gift cards are delivered instantly via email.</li>
            <li>Recipients can redeem gift cards at checkout for any Akagera product.</li>
            <li>Gift cards never expire and can be used across multiple purchases.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Why Choose Akagera Gift Cards?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Perfect for birthdays, holidays, and special occasions.</li>
            <li>Flexible amounts to fit any budget.</li>
            <li>Easy to purchase and redeem online.</li>
            <li>No additional processing fees.</li>
          </ul>
        </section>

        {/* How to Purchase */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Purchase</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Select the desired gift card amount.</li>
            <li>Enter the recipient's email and your personalized message.</li>
            <li>Complete your purchase securely online.</li>
            <li>The recipient will receive their gift card instantly via email.</li>
          </ol>
          <Button className="mt-4 bg-akagera-700 hover:bg-akagera-800">Purchase Gift Card (Coming Soon)</Button>
        </section>

        {/* How to Redeem */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Redeem</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Add your favorite Akagera products to the cart.</li>
            <li>Proceed to checkout and enter your gift card code.</li>
            <li>The gift card amount will be applied to your order total.</li>
            <li>Any remaining balance can be used for future purchases.</li>
          </ol>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">Can I use more than one gift card per order?</p>
              <p className="text-gray-700">Yes, you can combine multiple gift cards for a single purchase.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Do gift cards expire?</p>
              <p className="text-gray-700">No, Akagera gift cards never expire.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Can I get a refund for a gift card?</p>
              <p className="text-gray-700">Gift cards are non-refundable and cannot be exchanged for cash.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">For questions or support regarding gift cards, contact our team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Support</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default GiftCards; 