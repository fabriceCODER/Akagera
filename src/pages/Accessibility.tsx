import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Accessibility as AccessibilityIcon } from 'lucide-react';

const Accessibility: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
            <AccessibilityIcon className="w-7 h-7 text-akagera-700" />
            Accessibility
          </h1>
          <p className="text-gray-600 mt-2">
            Learn about Akagera's accessibility features and our commitment to inclusivity and compliance.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Our Commitment</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Accessible design for all users, regardless of ability.</li>
            <li>Keyboard navigation support throughout the site.</li>
            <li>Screen reader compatibility for all major flows.</li>
            <li>Color contrast and font size optimized for readability.</li>
            <li>Continuous improvements based on user feedback and best practices.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Accessibility Features</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>Alt text for all images and product photos.</li>
            <li>Semantic HTML and ARIA labels for assistive technologies.</li>
            <li>Responsive design for all devices and screen sizes.</li>
            <li>Skip to content and focus indicators for easier navigation.</li>
            <li>Accessible forms with clear labels and error messages.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Compliance</h2>
          <p className="text-gray-700 mb-2">
            Akagera strives to meet <span className="font-medium">WCAG 2.1 AA</span> standards and other relevant accessibility guidelines. We regularly audit our platform to ensure compliance and address any issues promptly.
          </p>
        </section>

        <section className="mb-10">
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Feedback & Support</h2>
          <p className="text-gray-700 mb-4">
            If you encounter any accessibility barriers or have suggestions for improvement, please let us know. Your feedback helps us create a better experience for everyone.
          </p>
          <Button asChild className="bg-akagera-700 hover:bg-akagera-800">
            <a href="mailto:fabricecoder009@gmail.com">Contact Accessibility Support</a>
          </Button>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-akagera-700 mb-2">Accessibility Resources</h2>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li><a href="https://www.w3.org/WAI/standards-guidelines/wcag/" className="text-akagera-700 underline" target="_blank" rel="noopener noreferrer">Web Content Accessibility Guidelines (WCAG)</a></li>
            <li><a href="https://www.a11yproject.com/" className="text-akagera-700 underline" target="_blank" rel="noopener noreferrer">The A11Y Project</a></li>
            <li><a href="https://www.w3.org/WAI/test-evaluate/" className="text-akagera-700 underline" target="_blank" rel="noopener noreferrer">WAI: Test & Evaluate Accessibility</a></li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default Accessibility; 