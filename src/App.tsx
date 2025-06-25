import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Navbar from "./components/Navbar";
import CartDrawer from "./components/CartDrawer";
import AuthModal from "./components/AuthModal";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import { useAuth } from "./contexts/AuthContext";
import Blog from "./pages/Blog";
import Compare from "./pages/Compare";
import Returns from "./pages/Returns";
import ShippingInfo from "./pages/ShippingInfo";
import GiftCards from "./pages/GiftCards";
import StoreLocator from "./pages/StoreLocator";
import Careers from "./pages/Careers";
import Affiliate from "./pages/Affiliate";
import Newsletter from "./pages/Newsletter";
import Accessibility from "./pages/Accessibility";

const queryClient = new QueryClient();

// Protected route component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/" />;
  }
  
  return <>{children}</>;
};

const AppRoutes = () => {
  const { isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }
  
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<ProductDetail />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/about" element={<About />} />
      <Route path="/categories" element={<Categories />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/compare" element={<Compare />} />
      <Route path="/returns" element={<Returns />} />
      <Route path="/shipping-info" element={<ShippingInfo />} />
      <Route path="/gift-cards" element={<GiftCards />} />
      <Route path="/store-locator" element={<StoreLocator />} />
      <Route path="/careers" element={<Careers />} />
      <Route path="/affiliate" element={<Affiliate />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/accessibility" element={<Accessibility />} />
      <Route 
        path="/profile" 
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        } 
      />
      {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <CartProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Navbar />
            <CartDrawer />
            <AuthModal />
            <main>
              <AppRoutes />
            </main>
          </BrowserRouter>
        </CartProvider>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
