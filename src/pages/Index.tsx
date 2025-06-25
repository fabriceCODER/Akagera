
import React from 'react';
import Hero from '../components/Hero';
import ProductGrid from '../components/ProductGrid';
import { Button } from '@/components/ui/button';
import { 
  getFeaturedProducts, 
  getNewProducts, 
  getOnSaleProducts,
  categories
} from '../lib/data';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const navigate = useNavigate();
  const featuredProducts = getFeaturedProducts();
  const newProducts = getNewProducts();
  const onSaleProducts = getOnSaleProducts();
  const featuredCategories = categories.filter(category => category.featured);

  return (
    <div className="min-h-screen">
      <Hero />

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Shop by Category</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCategories.map((category) => (
              <div 
                key={category.id}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
                onClick={() => navigate(`/products?category=${category.slug}`)}
              >
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-30 transition-opacity group-hover:bg-opacity-20 flex items-center justify-center">
                  <h3 className="text-white text-2xl font-bold text-center">
                    {category.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold">Featured Products</h2>
            <Button 
              variant="outline" 
              onClick={() => navigate('/products')}
              className="border-akagera-700 text-akagera-700 hover:bg-akagera-50"
            >
              View All
            </Button>
          </div>
          <ProductGrid products={featuredProducts.slice(0, 4)} />
        </div>
      </section>

      {/* Sale Products */}
      {onSaleProducts.length > 0 && (
        <section className="py-16 bg-akagera-50">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">On Sale</h2>
              <Button 
                variant="outline" 
                onClick={() => navigate('/products?onSale=true')}
                className="border-akagera-700 text-akagera-700 hover:bg-akagera-50"
              >
                View All
              </Button>
            </div>
            <ProductGrid products={onSaleProducts.slice(0, 4)} />
          </div>
        </section>
      )}

      {/* New Arrivals */}
      {newProducts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold">New Arrivals</h2>
              <Button 
                variant="outline" 
                onClick={() => navigate('/products?isNew=true')}
                className="border-akagera-700 text-akagera-700 hover:bg-akagera-50"
              >
                View All
              </Button>
            </div>
            <ProductGrid products={newProducts.slice(0, 4)} />
          </div>
        </section>
      )}

      {/* CTA Banner */}
      <section className="py-16 bg-akagera-700 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="mb-6 md:mb-0 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ready to Shop?</h2>
              <p className="text-akagera-100">Explore our catalog and find the perfect products for you</p>
            </div>
            <Button 
              onClick={() => navigate('/products')} 
              className="bg-white text-akagera-700 hover:bg-akagera-50"
              size="lg"
            >
              Shop Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
