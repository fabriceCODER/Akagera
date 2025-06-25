
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';

interface MobileMenuProps {
  isMenuOpen: boolean;
  searchTerm: string;
  setSearchTerm: (term: string) => void;
  handleSearch: (e: React.FormEvent) => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  isMenuOpen,
  searchTerm,
  setSearchTerm,
  handleSearch,
}) => {
  const { user, setIsAuthModalOpen, logout } = useAuth();
  const navigate = useNavigate();

  if (!isMenuOpen) return null;

  return (
    <div className="md:hidden bg-white border-t">
      <div className="px-4 py-2">
        <form onSubmit={handleSearch} className="relative my-4">
          <Input
            type="search"
            placeholder="Search products..."
            className="pr-8 w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button 
            size="icon"
            variant="ghost"
            className="absolute right-0 top-0 h-full"
            onClick={handleSearch}
          >
            <Search className="h-4 w-4" />
          </Button>
        </form>
        
        <div className="space-y-3 py-3">
          <Link to="/" className="block text-gray-700 hover:text-akagera-700 font-medium py-2">Home</Link>
          <Link to="/products" className="block text-gray-700 hover:text-akagera-700 font-medium py-2">Products</Link>
          <Link to="/categories" className="block text-gray-700 hover:text-akagera-700 font-medium py-2">Categories</Link>
          <Link to="/about" className="block text-gray-700 hover:text-akagera-700 font-medium py-2">About</Link>
        </div>

        <div className="py-3 border-t">
          {user ? (
            <>
              <div className="mb-3">
                <p className="text-sm font-medium">Signed in as {user.name || user.email}</p>
              </div>
              <div className="space-y-2">
                <Link to="/profile" className="block text-gray-700 hover:text-akagera-700 py-2">Profile</Link>
                <Link to="/orders" className="block text-gray-700 hover:text-akagera-700 py-2">Orders</Link>
                <Link to="/wishlist" className="block text-gray-700 hover:text-akagera-700 py-2">Wishlist</Link>
                <button
                  onClick={logout}
                  className="block w-full text-left text-gray-700 hover:text-akagera-700 py-2"
                >
                  Logout
                </button>
              </div>
            </>
          ) : (
            <Button 
              onClick={() => setIsAuthModalOpen(true)}
              className="w-full bg-akagera-700 hover:bg-akagera-800"
            >
              Sign In
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
