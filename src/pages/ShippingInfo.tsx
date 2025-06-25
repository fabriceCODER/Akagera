import React from 'react';
import { Button } from '@/components/ui/button';
import { Truck } from 'lucide-react';

const ShippingInfo: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Truck className="w-7 h-7 text-akagera-700" />
            Shipping Information
          </h1>
          <p className="text-gray-600 mt-2">
            Find out about our shipping options, costs, delivery times, and how to track your order.
          </p>
        </header>

        {/* Shipping Options */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Shipping Options</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Standard Shipping: 2-5 business days</li>
            <li>Express Shipping: 1-2 business days</li>
            <li>Same-Day Delivery: Available in select locations</li>
          </ul>
        </section>

        {/* Shipping Costs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Shipping Costs</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Free standard shipping on orders over $50</li>
            <li>Flat rate of $5 for orders under $50</li>
            <li>Express shipping: $15 per order</li>
            <li>Same-day delivery: $25 per order (where available)</li>
          </ul>
        </section>

        {/* Order Tracking */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Order Tracking</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Track your order status in your Akagera account dashboard</li>
            <li>Receive email and SMS updates with tracking information</li>
            <li>Contact support for any delivery issues or questions</li>
          </ul>
        </section>

        {/* International Shipping */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">International Shipping</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>We ship to select international destinations</li>
            <li>International shipping rates and delivery times vary by location</li>
            <li>Customs duties and taxes may apply and are the responsibility of the recipient</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">How do I qualify for free shipping?</p>
              <p className="text-gray-700">All orders over $50 (after discounts) qualify for free standard shipping.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Can I change my shipping address after placing an order?</p>
              <p className="text-gray-700">Please contact support as soon as possible. We may be able to update your address if your order has not yet shipped.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Do you ship internationally?</p>
              <p className="text-gray-700">Yes, we ship to select international destinations. Shipping rates and delivery times vary.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">For questions or support regarding shipping, contact our team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Support</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default ShippingInfo; 