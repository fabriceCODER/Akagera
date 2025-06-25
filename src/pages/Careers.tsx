import React from 'react';
import { Button } from '@/components/ui/button';
import { Users } from 'lucide-react';

const openPositions = [
  // Example positions; replace or fetch dynamically as needed
  {
    title: 'Frontend Developer',
    location: 'Remote',
    type: 'Full-time',
    description: 'Work with React, TypeScript, and Tailwind CSS to build beautiful e-commerce experiences.'
  },
  {
    title: 'Customer Support Specialist',
    location: 'Kigali, Rwanda',
    type: 'Full-time',
    description: 'Help our customers have the best experience possible with Akagera.'
  },
];

const Careers: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <Users className="w-7 h-7 text-akagera-700" />
            Careers at Akagera
          </h1>
          <p className="text-gray-600 mt-2">
            Join our team! Explore open positions and career opportunities at Akagera.
          </p>
        </header>

        {/* Open Positions */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Open Positions</h2>
          {openPositions.length === 0 ? (
            <div className="bg-gray-100 p-6 rounded-lg text-center text-gray-500">
              No open positions at the moment. Check back soon!
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions.map((job, idx) => (
                <div key={idx} className="border border-gray-200 rounded-lg p-6 bg-white flex flex-col justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-akagera-700 mb-1">{job.title}</h3>
                    <p className="text-gray-700 mb-2">{job.description}</p>
                  </div>
                  <div className="flex items-center justify-between text-sm text-gray-500 mt-4">
                    <span>{job.location}</span>
                    <span>{job.type}</span>
                  </div>
                  <Button asChild className="mt-4 bg-akagera-700 hover:bg-akagera-800 w-full">
                    <a href="mailto:fabricecoder009@gmail.com?subject=Application for " target="_blank" rel="noopener noreferrer">Apply Now</a>
                  </Button>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Company Culture */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Our Culture</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Inclusive, diverse, and collaborative environment.</li>
            <li>Innovation and continuous learning are at our core.</li>
            <li>Work-life balance and flexibility for all team members.</li>
            <li>Passion for delivering the best customer experience.</li>
          </ul>
        </section>

        {/* Benefits */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Benefits</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Competitive salary and performance bonuses.</li>
            <li>Remote work opportunities and flexible hours.</li>
            <li>Health and wellness programs.</li>
            <li>Professional development and training.</li>
            <li>Employee discounts on Akagera products.</li>
          </ul>
        </section>

        {/* How to Apply */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">How to Apply</h2>
          <ol className="list-decimal pl-6 space-y-2 text-gray-700">
            <li>Review the open positions above.</li>
            <li>Prepare your CV and a brief cover letter.</li>
            <li>Email your application to <a href="mailto:fabricecoder009@gmail.com" className="text-akagera-700 underline">fabricecoder009@gmail.com</a> with the job title in the subject line.</li>
            <li>We will review your application and contact you for next steps.</li>
          </ol>
        </section>

        {/* FAQs */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">FAQs</h2>
          <div className="space-y-4">
            <div>
              <p className="font-medium text-akagera-700">Can I apply for multiple positions?</p>
              <p className="text-gray-700">Yes, you are welcome to apply for any roles that match your skills and interests.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">Do you offer internships?</p>
              <p className="text-gray-700">We occasionally offer internships. Please check this page regularly for updates.</p>
            </div>
            <div>
              <p className="font-medium text-akagera-700">What is the interview process like?</p>
              <p className="text-gray-700">Our process typically includes an initial screening, a technical or skills assessment, and a final interview with the team.</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Questions?</h2>
          <p className="text-gray-700 mb-4">For any questions about careers at Akagera, reach out to our HR team.</p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact HR</a>
          </Button>
        </section>
      </div>
    </div>
  );
};

export default Careers; 