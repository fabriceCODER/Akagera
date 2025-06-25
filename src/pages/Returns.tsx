import React from 'react';
import { Button } from '@/components/ui/button';
import { Undo2 } from 'lucide-react';

const Returns: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Undo2 className="w-7 h-7 text-akagera-700" />
            Returns & Refunds Policy
          </h1>
          <p className="text-gray-600 mt-2">
            Shop with confidence. Learn about our hassle-free returns and refunds process.
          </p>
        </header>

        {/* Policy Overview */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Return Policy Overview</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Returns accepted within 30 days of delivery.</li>
            <li>Products must be unused, in original packaging, and with all tags attached.</li>
            <li>Some items (e.g., perishable goods, personalized products) may not be eligible for return.</li>
          </ul>
        </section>

        {/* How to Return */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Return an Item</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Contact our support team to initiate your return.</li>
            <li>Pack the item securely in its original packaging.</li>
            <li>Include your order number and reason for return.</li>
            <li>Ship the package to the address provided by our support team.</li>
            <li>We will notify you once your return is received and inspected.</li>
          </ol>
        </section>

        {/* Refunds */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Refunds</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Refunds are processed within 7 business days after we receive and inspect your return.</li>
            <li>Refunds are issued to your original payment method.</li>
            <li>Shipping fees are non-refundable unless the return is due to our error.</li>
          </ul>
        </section>

        {/* Exchanges */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Exchanges</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Exchanges are available for defective or damaged items.</li>
            <li>Contact support to arrange an exchange and receive a prepaid shipping label if eligible.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">How long does it take to process a return?</p>
              <p className="text-gray-700">Returns are typically processed within 7 business days after we receive your item.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Can I return a used item?</p>
              <p className="text-gray-700">Returned items must be unused and in their original packaging.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">What if my item is damaged or defective?</p>
              <p className="text-gray-700">Please contact support immediately. We will arrange for a replacement or refund as needed.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">For questions or support regarding returns and refunds, contact our team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Support</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Returns; 