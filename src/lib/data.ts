
import { Product, Category } from '../types';

export const categories: Category[] = [
  {
    id: '1',
    name: 'Electronics',
    slug: 'electronics',
    image: 'https://images.unsplash.com/photo-1498049794561-7780e7231661?q=80&w=3270&auto=format&fit=crop',
    featured: true
  },
  {
    id: '2',
    name: 'Clothing',
    slug: 'clothing',
    image: 'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?q=80&w=3270&auto=format&fit=crop',
    featured: true
  },
  {
    id: '3',
    name: 'Home & Kitchen',
    slug: 'home-kitchen',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=3174&auto=format&fit=crop',
    featured: true
  },
  {
    id: '4',
    name: 'Books',
    slug: 'books',
    image: 'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?q=80&w=3270&auto=format&fit=crop'
  },
  {
    id: '5',
    name: 'Sports',
    slug: 'sports',
    image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=3270&auto=format&fit=crop'
  },
  {
    id: '6',
    name: 'Beauty',
    slug: 'beauty',
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?q=80&w=3270&auto=format&fit=crop'
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Wireless Noise-Cancelling Headphones',
    description: 'Premium wireless headphones with active noise cancellation for an immersive audio experience. Features up to 30 hours of battery life and comfortable ear cushions for extended wear.',
    price: 299.99,
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=3348&auto=format&fit=crop'
    ],
    category: 'Electronics',
    stock: 15,
    rating: 4.8,
    reviews: 284,
    featured: true,
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: ['Black', 'Silver', 'Blue']
      }
    ]
  },
  {
    id: '2',
    name: 'Smart Fitness Watch',
    description: 'Track your fitness goals with this water-resistant smart watch. Features heart rate monitoring, sleep tracking, and various workout modes.',
    price: 199.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=3272&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=3270&auto=format&fit=crop'
    ],
    category: 'Electronics',
    stock: 42,
    rating: 4.6,
    reviews: 156,
    onSale: true,
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: ['Black', 'White', 'Rose Gold']
      },
      {
        id: 'size',
        name: 'Size',
        options: ['Small', 'Regular']
      }
    ]
  },
  {
    id: '3',
    name: 'Ultra HD Smart TV - 55"',
    description: '55-inch 4K Ultra HD Smart TV with built-in streaming apps and voice control. Enjoy vibrant colors and crisp details on this sleek, modern television.',
    price: 699.99,
    originalPrice: 799.99,
    images: [
      'https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=3333&auto=format&fit=crop'
    ],
    category: 'Electronics',
    stock: 8,
    rating: 4.5,
    reviews: 92,
    featured: true,
    onSale: true
  },
  {
    id: '4',
    name: 'Premium Leather Jacket',
    description: 'Timeless leather jacket crafted from high-quality full-grain leather. Features a comfortable quilted lining and multiple pockets.',
    price: 249.99,
    images: [
      'https://images.unsplash.com/photo-1551028719-00167b16eac5?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1559551409-dadc959f76b8?q=80&w=3292&auto=format&fit=crop'
    ],
    category: 'Clothing',
    stock: 23,
    rating: 4.7,
    reviews: 64,
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: ['Brown', 'Black']
      },
      {
        id: 'size',
        name: 'Size',
        options: ['S', 'M', 'L', 'XL']
      }
    ]
  },
  {
    id: '5',
    name: 'Ergonomic Office Chair',
    description: 'Adjustable office chair with lumbar support and breathable mesh back. Perfect for long working hours and maintaining good posture.',
    price: 189.99,
    originalPrice: 249.99,
    images: [
      'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?q=80&w=3387&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589485322975-92444d5ec748?q=80&w=3270&auto=format&fit=crop'
    ],
    category: 'Home & Kitchen',
    stock: 17,
    rating: 4.4,
    reviews: 89,
    onSale: true
  },
  {
    id: '6',
    name: 'Professional Chef Knife',
    description: 'High-carbon stainless steel chef knife with ergonomic handle. Perfect for slicing, dicing, and chopping with precision and comfort.',
    price: 79.99,
    images: [
      'https://images.unsplash.com/photo-1593618998160-e34014e67546?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1566454825481-9c31e1e08099?q=80&w=3456&auto=format&fit=crop'
    ],
    category: 'Home & Kitchen',
    stock: 31,
    rating: 4.9,
    reviews: 217,
    featured: true
  },
  {
    id: '7',
    name: 'Bestselling Novel - "The Midnight Library"',
    description: 'Award-winning novel exploring the themes of regret and the infinite possibilities of life. A thought-provoking journey between life and death.',
    price: 16.99,
    images: [
      'https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=3287&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=3374&auto=format&fit=crop'
    ],
    category: 'Books',
    stock: 54,
    rating: 4.7,
    reviews: 328
  },
  {
    id: '8',
    name: 'Premium Yoga Mat',
    description: 'High-density non-slip yoga mat with alignment marks. Eco-friendly and made from sustainable materials for a comfortable workout experience.',
    price: 59.99,
    originalPrice: 79.99,
    images: [
      'https://images.unsplash.com/photo-1592432678016-e910b452f9a2?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1638536532686-d610adfc8e5c?q=80&w=3270&auto=format&fit=crop'
    ],
    category: 'Sports',
    stock: 39,
    rating: 4.5,
    reviews: 124,
    onSale: true,
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: ['Purple', 'Blue', 'Black', 'Green']
      }
    ]
  },
  {
    id: '9',
    name: 'Luxury Skincare Set',
    description: 'Complete skincare regimen with cleanser, toner, serum, and moisturizer. Made with natural ingredients to nourish and revitalize your skin.',
    price: 129.99,
    images: [
      'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1601612628452-9e99ced43524?q=80&w=3270&auto=format&fit=crop'
    ],
    category: 'Beauty',
    stock: 27,
    rating: 4.8,
    reviews: 76,
    featured: true,
    isNew: true
  },
  {
    id: '10',
    name: 'Portable Bluetooth Speaker',
    description: 'Waterproof portable speaker with 20 hours of battery life and immersive 360° sound. Perfect for outdoor adventures and pool parties.',
    price: 89.99,
    originalPrice: 119.99,
    images: [
      'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?q=80&w=3269&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1589003077984-894e133dabab?q=80&w=3270&auto=format&fit=crop'
    ],
    category: 'Electronics',
    stock: 45,
    rating: 4.4,
    reviews: 193,
    onSale: true,
    isNew: true,
    variants: [
      {
        id: 'color',
        name: 'Color',
        options: ['Black', 'Blue', 'Red', 'Green']
      }
    ]
  },
  {
    id: '11',
    name: 'Designer Sunglasses',
    description: 'Polarized UV-protection sunglasses with stylish frames. Lightweight and comfortable for all-day wear.',
    price: 159.99,
    images: [
      'https://images.unsplash.com/photo-1577803645773-f96470509666?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1625591339971-4c9a87a66871?q=80&w=3024&auto=format&fit=crop'
    ],
    category: 'Clothing',
    stock: 18,
    rating: 4.6,
    reviews: 87,
    isNew: true
  },
  {
    id: '12',
    name: 'Smart Home Security Camera',
    description: 'HD security camera with night vision and motion detection. Includes cloud storage and two-way audio for complete home protection.',
    price: 149.99,
    images: [
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=3270&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1517218738493-3f5be37663c8?q=80&w=3270&auto=format&fit=crop'
    ],
    category: 'Electronics',
    stock: 32,
    rating: 4.5,
    reviews: 114,
    featured: true
  }
];

export const getProductById = (id: string): Product | undefined => {
  return products.find(product => product.id === id);
};

export const getProductsByCategory = (category: string): Product[] => {
  return products.filter(product => product.category.toLowerCase() === category.toLowerCase());
};

export const getFeaturedProducts = (): Product[] => {
  return products.filter(product => product.featured);
};

export const getNewProducts = (): Product[] => {
  return products.filter(product => product.isNew);
};

export const getOnSaleProducts = (): Product[] => {
  return products.filter(product => product.onSale);
};
