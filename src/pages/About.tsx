
import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-akagera-700">About Akagera</h1>
        
        <div className="prose max-w-none">
          <p className="mb-4">
            Welcome to Akagera, your premier destination for high-quality products that enhance your everyday life.
            Founded with a passion for excellence, we strive to provide exceptional shopping experiences for our valued customers.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-akagera-600">Our Story</h2>
          <p className="mb-4">
            Akagera began as a small local business with big dreams. Over the years, we've grown into a trusted 
            retailer known for our commitment to quality, sustainability, and customer satisfaction. Our journey 
            has been shaped by a deep dedication to bringing the best products to our customers while maintaining 
            ethical business practices.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-akagera-600">Our Mission</h2>
          <p className="mb-4">
            At Akagera, our mission is to provide carefully curated products that meet the highest standards of 
            quality and value. We believe that everyone deserves access to products that are not only functional 
            but also ethically produced and environmentally responsible.
          </p>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-akagera-600">Our Values</h2>
          <ul className="list-disc pl-6 mb-6">
            <li className="mb-2"><strong>Quality:</strong> We never compromise on the quality of our products.</li>
            <li className="mb-2"><strong>Sustainability:</strong> We're committed to reducing our environmental footprint.</li>
            <li className="mb-2"><strong>Transparency:</strong> We believe in honest communication with our customers.</li>
            <li className="mb-2"><strong>Community:</strong> We support local communities through various initiatives.</li>
            <li className="mb-2"><strong>Innovation:</strong> We constantly seek new ways to improve our products and services.</li>
          </ul>
          
          <h2 className="text-2xl font-semibold mt-8 mb-4 text-akagera-600">Contact Us</h2>
          <p className="mb-4">
            Have questions or feedback? We'd love to hear from you! Reach out to our customer service team 
            at <a href="mailto:support@akagera.com" className="text-akagera-700 hover:underline">support@akagera.com</a> 
            or call us at (123) 456-7890.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
