
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

interface SearchFormProps {
  className?: string;
}

const SearchForm: React.FC<SearchFormProps> = ({ className }) => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchTerm)}`);
      setSearchTerm('');
    }
  };

  return (
    <form onSubmit={handleSearch} className={`relative ${className || ''}`}>
      <Input
        type="search"
        placeholder="Search..."
        className="pr-8 w-full md:w-40 lg:w-60"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Search 
        className="absolute right-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 cursor-pointer" 
        onClick={handleSearch}
      />
    </form>
  );
};

export default SearchForm;
