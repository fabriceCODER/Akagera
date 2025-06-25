import React from 'react';
import { Button } from '@/components/ui/button';
import { Scale } from 'lucide-react';

// Placeholder product data for comparison
const products = [
  {
    name: 'Akagera Smart Watch',
    price: '$199',
    features: ['Heart Rate Monitor', 'GPS', 'Water Resistant', '7-day Battery'],
  },
  {
    name: 'Akagera Fitness Band',
    price: '$99',
    features: ['Step Counter', 'Sleep Tracking', 'Water Resistant', '14-day Battery'],
  },
];

const Compare: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Scale className="w-7 h-7 text-akagera-700" />
            Compare Products
          </h1>
          <p className="text-gray-600 mt-2">
            Compare features and prices of Akagera products to make the best choice for your needs.
          </p>
        </header>

        {/* How to Use */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Use the Comparison Tool</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Select products you want to compare from the product listing pages.</li>
            <li>View their features, prices, and specifications side by side here.</li>
            <li>Make an informed decision before adding to your cart.</li>
          </ul>
        </section>

        {/* Comparison Table */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Product Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200 rounded-lg bg-white">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-sm font-semibold text-akagera-700">Feature</th>
                  {products.map((product, idx) => (
                    <th key={idx} className="px-6 py-3 text-left text-sm font-semibold text-akagera-700">{product.name}<br /><span className="text-gray-500 font-normal">{product.price}</span></th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {/* List all unique features */}
                {Array.from(new Set(products.flatMap(p => p.features))).map((feature, idx) => (
                  <tr key={idx} className="border-t border-gray-100">
                    <td className="px-6 py-4 text-gray-700 font-medium">{feature}</td>
                    {products.map((product, pidx) => (
                      <td key={pidx} className="px-6 py-4 text-center">
                        {product.features.includes(feature) ? (
                          <span className="inline-block px-2 py-1 bg-akagera-50 text-akagera-700 rounded text-xs font-semibold">Yes</span>
                        ) : (
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-400 rounded text-xs">No</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Benefits of Comparing */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Why Compare Products?</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Find the best product for your needs and budget.</li>
            <li>See all key features and differences at a glance.</li>
            <li>Make confident, informed purchase decisions.</li>
            <li>Save time by narrowing down your options quickly.</li>
          </ul>
        </section>

        {/* FAQ */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">Can I compare more than two products?</p>
              <p className="text-gray-700">Yes! In the future, you'll be able to select and compare multiple products side by side.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">How do I add products to compare?</p>
              <p className="text-gray-700">On the product listing page, click the "Compare" button for each product you want to add.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Will my comparison be saved?</p>
              <p className="text-gray-700">We plan to let you save your comparisons for later review. Stay tuned!</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Compare; 