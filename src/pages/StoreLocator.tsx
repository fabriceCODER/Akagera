import React from 'react';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const stores = [
  {
    name: 'Akagera Main Store',
    address: '123 Kigali Ave, Kigali, Rwanda',
    hours: 'Mon-Sat: 9am - 8pm',
    phone: '+250 123 456 789',
  },
  {
    name: 'Akagera City Mall',
    address: '456 City Mall Rd, Kigali, Rwanda',
    hours: 'Mon-Sun: 10am - 9pm',
    phone: '+250 987 654 321',
  },
];

const StoreLocator: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-3xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <MapPin className="w-7 h-7 text-akagera-700" />
            Store Locator
          </h1>
          <p className="text-gray-600 mt-2">
            Find Akagera physical store locations near you. Use our locator to discover the nearest store, hours, and contact details.
          </p>
        </header>

        {/* How to Use */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Use the Store Locator</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Enter your city or allow location access to find the nearest store.</li>
            <li>View store details, hours, and contact information below.</li>
            <li>Get directions with your favorite map app.</li>
          </ul>
        </section>

        {/* Map Placeholder */}
        <section className="mb-10">
          <div className="bg-gray-100 border border-gray-200 rounded-lg h-64 flex items-center justify-center text-gray-400 text-lg mb-4">
            [Interactive map coming soon]
          </div>
        </section>

        {/* Store List */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Our Stores</h2>
          <div className="space-y-4">
            {stores.map((store, idx) => (
              <div key={idx} className="border border-gray-200 rounded-lg p-5 bg-white">
                <h3 className="text-lg font-semibold text-akagera-700 mb-1">{store.name}</h3>
                <p className="text-gray-700 mb-1">{store.address}</p>
                <p className="text-gray-500 mb-1">Hours: {store.hours}</p>
                <p className="text-gray-500">Phone: {store.phone}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Store Services */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Store Services</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>In-store pickup for online orders</li>
            <li>Product demos and expert advice</li>
            <li>Gift wrapping and special orders</li>
            <li>Customer support and returns desk</li>
          </ul>
        </section>

        {/* FAQ */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">Do I need an appointment to visit?</p>
              <p className="text-gray-700">No appointment is needed. Walk-ins are always welcome during store hours.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Can I return online purchases in-store?</p>
              <p className="text-gray-700">Yes, you can return or exchange online orders at any Akagera store location.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Are all products available in-store?</p>
              <p className="text-gray-700">Most products are available, but some online exclusives may not be stocked in-store.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Need Help?</h2>
          <p className="text-gray-700 mb-4">For questions or support regarding store locations, contact our team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Support</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default StoreLocator; 