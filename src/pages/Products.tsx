import React, { useState, useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import ProductGrid from '../components/ProductGrid';
import { products, categories } from '../lib/data';
import { Product, FilterOptions } from '../types';
import { 
  Filter, 
  SortAsc, 
  SortDesc, 
  Search, 
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  
  const initialCategory = searchParams.get('category') || '';
  const initialSearch = searchParams.get('search') || '';
  const initialIsNew = searchParams.get('isNew') === 'true';
  const initialOnSale = searchParams.get('onSale') === 'true';
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    categories: initialCategory ? [initialCategory] : [],
  });
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 1000]);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [isNew, setIsNew] = useState(initialIsNew);
  const [onSale, setOnSale] = useState(initialOnSale);
  const [sort, setSort] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  
  // Calculate min and max prices from all products
  const minPrice = Math.min(...products.map(product => product.price));
  const maxPrice = Math.max(...products.map(product => product.price));
  
  useEffect(() => {
    // Initialize price range based on actual product prices
    setPriceRange([minPrice, maxPrice]);
  }, [minPrice, maxPrice]);

  // Filter products based on filter options
  useEffect(() => {
    let result = [...products];
    
    // Filter by search term
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase();
      result = result.filter(
        product => 
          product.name.toLowerCase().includes(searchLower) || 
          product.description.toLowerCase().includes(searchLower)
      );
    }
    
    // Filter by category
    if (filterOptions.categories.length > 0) {
      result = result.filter(
        product => filterOptions.categories.some(
          cat => product.category.toLowerCase() === cat.toLowerCase()
        )
      );
    }
    
    // Filter by price range
    result = result.filter(
      product => 
        product.price >= priceRange[0] && 
        product.price <= priceRange[1]
    );
    
    // Filter by new
    if (isNew) {
      result = result.filter(product => product.isNew);
    }
    
    // Filter by sale
    if (onSale) {
      result = result.filter(product => product.onSale);
    }
    
    // Sort products
    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case 'popular':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // Default sort (featured)
        break;
    }
    
    setFilteredProducts(result);
    
    // Update URL search params
    const params = new URLSearchParams();
    
    if (searchTerm) params.set('search', searchTerm);
    if (filterOptions.categories.length > 0) params.set('category', filterOptions.categories[0]);
    if (sort) params.set('sort', sort);
    if (isNew) params.set('isNew', 'true');
    if (onSale) params.set('onSale', 'true');
    
    setSearchParams(params);
    
  }, [filterOptions, priceRange, searchTerm, isNew, onSale, sort, setSearchParams]);

  const handleCategoryChange = (category: string) => {
    setFilterOptions(prev => {
      const categoryExists = prev.categories.includes(category);
      
      if (categoryExists) {
        return {
          ...prev,
          categories: prev.categories.filter(c => c !== category)
        };
      } else {
        return {
          ...prev,
          categories: [category] // Only allow one category for simplicity
        };
      }
    });
  };

  const handlePriceChange = (values: number[]) => {
    setPriceRange([values[0], values[1]]);
  };

  const handleClearFilters = () => {
    setFilterOptions({ categories: [] });
    setPriceRange([minPrice, maxPrice]);
    setSearchTerm('');
    setIsNew(false);
    setOnSale(false);
    setSort('');
    navigate('/products');
  };

  const [expandedSections, setExpandedSections] = useState({
    categories: true,
    price: true,
    other: true
  });

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Mobile filter button */}
        <div className="lg:hidden mb-4">
          <Button 
            onClick={() => setShowMobileFilters(!showMobileFilters)} 
            variant="outline" 
            className="w-full flex items-center justify-center"
          >
            <Filter className="mr-2 h-4 w-4" />
            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
          </Button>
        </div>
        
        {/* Filters sidebar */}
        <div className={`lg:w-1/4 ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="bg-white rounded-lg border p-4 mb-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Filters</h2>
              <Button 
                variant="ghost" 
                size="sm" 
                className="text-gray-500 hover:text-gray-700"
                onClick={handleClearFilters}
              >
                Clear All
              </Button>
            </div>
            
            {/* Search */}
            <div className="mb-6">
              <form onSubmit={(e) => {
                e.preventDefault();
                // Search is already handled by useEffect
              }}>
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pr-8"
                  />
                  <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                </div>
              </form>
            </div>
            
            {/* Categories */}
            <div className="mb-6">
              <button 
                className="flex justify-between items-center w-full font-semibold mb-2"
                onClick={() => toggleSection('categories')}
              >
                <span>Categories</span>
                {expandedSections.categories ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </button>
              
              {expandedSections.categories && (
                <div className="space-y-2">
                  {categories.map((category) => (
                    <div key={category.id} className="flex items-center">
                      <Checkbox
                        id={`category-${category.id}`}
                        checked={filterOptions.categories.includes(category.slug)}
                        onCheckedChange={() => handleCategoryChange(category.slug)}
                      />
                      <Label
                        htmlFor={`category-${category.id}`}
                        className="ml-2 text-sm cursor-pointer"
                      >
                        {category.name}
                      </Label>
                    </div>
                  ))}
                </div>
              )}
            </div>
            
            {/* Price Range */}
            <div className="mb-6">
              <button 
                className="flex justify-between items-center w-full font-semibold mb-2"
                onClick={() => toggleSection('price')}
              >
                <span>Price Range</span>
                {expandedSections.price ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </button>
              
              {expandedSections.price && (
                <>
                  <Slider
                    defaultValue={[minPrice, maxPrice]}
                    min={minPrice}
                    max={maxPrice}
                    step={1}
                    value={priceRange}
                    onValueChange={handlePriceChange}
                    className="mb-2"
                  />
                  <div className="flex justify-between items-center">
                    <span className="text-xs">${priceRange[0]}</span>
                    <span className="text-xs">${priceRange[1]}</span>
                  </div>
                </>
              )}
            </div>
            
            {/* Other Filters */}
            <div className="mb-6">
              <button 
                className="flex justify-between items-center w-full font-semibold mb-2"
                onClick={() => toggleSection('other')}
              >
                <span>Other Filters</span>
                {expandedSections.other ? 
                  <ChevronUp className="h-4 w-4" /> : 
                  <ChevronDown className="h-4 w-4" />
                }
              </button>
              
              {expandedSections.other && (
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Checkbox
                      id="filter-new"
                      checked={isNew}
                      onCheckedChange={(checked) => setIsNew(checked === true)}
                    />
                    <Label
                      htmlFor="filter-new"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      New Arrivals
                    </Label>
                  </div>
                  <div className="flex items-center">
                    <Checkbox
                      id="filter-sale"
                      checked={onSale}
                      onCheckedChange={(checked) => setOnSale(checked === true)}
                    />
                    <Label
                      htmlFor="filter-sale"
                      className="ml-2 text-sm cursor-pointer"
                    >
                      On Sale
                    </Label>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        
        {/* Products content */}
        <div className="lg:w-3/4">
          {/* Results header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
            <div>
              <h1 className="text-2xl font-bold">Products</h1>
              <p className="text-gray-500 text-sm">
                Showing {filteredProducts.length} products
              </p>
            </div>
            
            <div className="flex items-center gap-2">
              <label htmlFor="sort" className="text-sm text-gray-700">Sort by:</label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="border border-gray-300 rounded-md text-sm py-1.5 px-3"
              >
                <option value="">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="name-asc">Name: A to Z</option>
                <option value="name-desc">Name: Z to A</option>
                <option value="popular">Popularity</option>
              </select>
            </div>
          </div>
          
          {/* Active filters */}
          {(filterOptions.categories.length > 0 || 
            priceRange[0] > minPrice || 
            priceRange[1] < maxPrice || 
            isNew || 
            onSale) && (
            <div className="mb-6">
              <div className="flex flex-wrap gap-2 items-center">
                <span className="text-sm text-gray-500">Active Filters:</span>
                
                {filterOptions.categories.map((category) => (
                  <span 
                    key={category} 
                    className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full flex items-center"
                  >
                    {categories.find(c => c.slug === category)?.name || category}
                    <button 
                      onClick={() => handleCategoryChange(category)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
                
                {(priceRange[0] > minPrice || priceRange[1] < maxPrice) && (
                  <span className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full flex items-center">
                    Price: ${priceRange[0]} - ${priceRange[1]}
                    <button 
                      onClick={() => setPriceRange([minPrice, maxPrice])}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                {isNew && (
                  <span className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full flex items-center">
                    New Arrivals
                    <button 
                      onClick={() => setIsNew(false)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                {onSale && (
                  <span className="bg-gray-100 text-gray-700 text-xs py-1 px-2 rounded-full flex items-center">
                    On Sale
                    <button 
                      onClick={() => setOnSale(false)}
                      className="ml-1 text-gray-500 hover:text-gray-700"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                )}
                
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="text-gray-500 hover:text-gray-700"
                  onClick={handleClearFilters}
                >
                  Clear All
                </Button>
              </div>
            </div>
          )}
          
          {/* Products grid */}
          {filteredProducts.length === 0 ? (
            <div className="bg-white rounded-lg border p-8 text-center">
              <h2 className="text-lg font-semibold mb-2">No products found</h2>
              <p className="text-gray-500 mb-4">
                Try adjusting your filters or search term to find what you're looking for.
              </p>
              <Button onClick={handleClearFilters}>
                Reset Filters
              </Button>
            </div>
          ) : (
            <ProductGrid products={filteredProducts} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
