
import React from 'react';
import { Link } from 'react-router-dom';

const NavLinks: React.FC = () => {
  return (
    <nav className="hidden md:flex space-x-8">
      <Link to="/" className="text-gray-700 hover:text-akagera-700 font-medium">Home</Link>
      <Link to="/products" className="text-gray-700 hover:text-akagera-700 font-medium">Products</Link>
      <Link to="/categories" className="text-gray-700 hover:text-akagera-700 font-medium">Categories</Link>
      <Link to="/about" className="text-gray-700 hover:text-akagera-700 font-medium">About</Link>
    </nav>
  );
};

export default NavLinks;
