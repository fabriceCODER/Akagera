
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../lib/data';
import { Button } from '@/components/ui/button';
import { Grid3X3 } from 'lucide-react';

const Categories = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-akagera-700">Product Categories</h1>
          <p className="text-gray-600 mt-2">Browse all our product categories</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link 
              to={`/products?category=${category.slug}`} 
              key={category.id}
              className="group"
            >
              <div className="relative h-64 rounded-lg overflow-hidden border border-gray-200 transition-all duration-300 group-hover:shadow-lg">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-5">
                  <h2 className="text-white text-xl font-semibold mb-2">{category.name}</h2>
                  <Button variant="secondary" className="opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                    <Grid3X3 className="w-4 h-4 mr-2" />
                    Browse Products
                  </Button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
