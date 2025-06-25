import React from 'react';

const Blog: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Akagera Blog & News</h1>
      <p className="text-gray-600 mb-8">Stay updated with the latest news, tips, and product highlights from Akagera.</p>
      {/* Blog posts will be listed here in the future */}
      <div className="bg-gray-100 p-6 rounded-lg text-center text-gray-500">
        No blog posts yet. Check back soon!
      </div>
    </div>
  );
};

export default Blog; 