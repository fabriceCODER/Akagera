import React from 'react';
import { Button } from '@/components/ui/button';
import { Mail } from 'lucide-react';

const Newsletter: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Mail className="w-7 h-7 text-akagera-700" />
            Newsletter Subscription
          </h1>
          <p className="text-gray-600 mt-2">
            Subscribe to our newsletter for the latest updates, exclusive offers, and expert tips from Akagera.
          </p>
        </header>

        {/* Subscription Form */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Subscribe Now</h2>
          <form className="flex flex-col sm:flex-row items-center gap-3 mb-4">
            <input
              type="email"
              placeholder="Your email address"
              className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-akagera-700"
              required
            />
            <Button type="submit" className="bg-akagera-700 hover:bg-akagera-800 w-full sm:w-auto">Subscribe</Button>
          </form>
          <p className="text-gray-500 text-sm">You can unsubscribe at any time. We respect your privacy.</p>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Why Subscribe?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Be the first to know about new products and promotions.</li>
            <li>Receive exclusive discounts and special offers.</li>
            <li>Get expert shopping tips and inspiration.</li>
            <li>Stay informed about Akagera news and events.</li>
          </ul>
        </section>

        {/* Manage Subscription */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Manage Your Subscription</h2>
          <p className="text-gray-700 mb-2">
            Already subscribed? You can update your preferences or unsubscribe at any time using the link in any newsletter email.
          </p>
        </section>

        {/* Privacy Info */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Your Privacy</h2>
          <p className="text-gray-700 mb-2">
            We value your privacy. Your email address will only be used to send you Akagera newsletters and will never be shared with third parties.
          </p>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">How often will I receive emails?</p>
              <p className="text-gray-700">We typically send newsletters once or twice a month, plus occasional special announcements.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Can I unsubscribe at any time?</p>
              <p className="text-gray-700">Yes, every email includes an unsubscribe link for your convenience.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Will my information be shared?</p>
              <p className="text-gray-700">No, your information is kept private and secure.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">For questions or support regarding the newsletter, contact our team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Support</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Newsletter; 