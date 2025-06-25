import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { Newspaper, Tag } from 'lucide-react';

const featuredPost = {
  title: 'Welcome to the Akagera Blog!',
  excerpt: 'Discover the latest updates, shopping tips, and product highlights from Akagera. Stay tuned for expert advice and exclusive news.',
  date: '2024-06-01',
  author: 'Akagera Team',
  image: 'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=800&q=80',
};

const recentPosts = [
  {
    title: 'How to Choose the Perfect Product for You',
    excerpt: 'A quick guide to finding the best products for your needs and budget on Akagera.',
    date: '2024-05-28',
    author: 'Jane Doe',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
  },
  {
    title: 'Akagera's Commitment to Sustainability',
    excerpt: 'Learn how Akagera is making a difference with eco-friendly packaging and responsible sourcing.',
    date: '2024-05-20',
    author: 'John Smith',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
  },
];

const categories = [
  'Shopping Tips',
  'Product Highlights',
  'Sustainability',
  'Company News',
  'Guides',
];

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <main className="lg:col-span-3">
          <header className="mb-8">
            <h1 className="text-3xl font-bold text-akagera-700 flex items-center gap-2">
              <Newspaper className="w-7 h-7 text-akagera-700" />
              Akagera Blog & News
            </h1>
            <p className="text-gray-600 mt-2">
              Stay updated with the latest news, tips, and product highlights from Akagera.
            </p>
          </header>

          {/* Featured Post */}
          <section className="mb-10">
            <div className="rounded-lg overflow-hidden border border-gray-200 shadow-sm flex flex-col md:flex-row">
              <img src={featuredPost.image} alt={featuredPost.title} className="w-full md:w-1/3 h-56 object-cover" />
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h2 className="text-2xl font-semibold text-akagera-700 mb-2">{featuredPost.title}</h2>
                  <p className="text-gray-700 mb-4">{featuredPost.excerpt}</p>
                </div>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{featuredPost.author}</span>
                  <span>{featuredPost.date}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Recent Posts */}
          <section className="mb-10">
            <h3 className="text-xl font-semibold text-akagera-700 mb-4">Recent Posts</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {recentPosts.map((post, idx) => (
                <div key={idx} className="rounded-lg overflow-hidden border border-gray-200 bg-white shadow-sm flex flex-col">
                  <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
                  <div className="p-5 flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-akagera-700 mb-1">{post.title}</h4>
                      <p className="text-gray-700 mb-2">{post.excerpt}</p>
                    </div>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <span>{post.author}</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Newsletter Signup */}
          <section className="mb-10">
            <div className="bg-akagera-50 border border-akagera-100 rounded-lg p-6 text-center">
              <h3 className="text-xl font-semibold text-akagera-700 mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-gray-700 mb-4">Get the latest updates, tips, and exclusive offers delivered to your inbox.</p>
              <form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="border border-gray-300 rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-akagera-700"
                  required
                />
                <Button type="submit" className="bg-akagera-700 hover:bg-akagera-800 w-full sm:w-auto">Subscribe</Button>
              </form>
            </div>
          </section>
        </main>

        {/* Sidebar */}
        <aside className="lg:col-span-1">
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-akagera-700 mb-3 flex items-center gap-2">
              <Tag className="w-5 h-5 text-akagera-700" /> Categories
            </h3>
            <ul className="space-y-2">
              {categories.map((cat, idx) => (
                <li key={idx}>
                  <span className="inline-block px-3 py-1 bg-gray-100 rounded text-gray-700 text-sm">{cat}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 text-sm text-gray-600">
            <p>
              Want to contribute a guest post or have a story to share? <br />
              <a href="mailto:fabricecoder009@gmail.com" className="text-akagera-700 underline">Contact our editorial team</a>.
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Blog; 