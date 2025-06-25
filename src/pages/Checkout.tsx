
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { useCart } from '../contexts/CartContext';
import { useAuth } from '../contexts/AuthContext';
import CartItem from '../components/CartItem';

const CheckoutPage = () => {
  const navigate = useNavigate();
  const { cart, cartTotal, clearCart } = useCart();
  const { user, setIsAuthModalOpen } = useAuth();
  
  // State for form data
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: user?.email || '',
    phone: '',
    address: '',
    city: '',
    state: '',
    postalCode: '',
    country: 'United States',
    saveInfo: false,
    paymentMethod: 'credit',
    cardNumber: '',
    cardName: '',
    cardExpiry: '',
    cardCvc: '',
  });
  
  // State for form validation
  const [formErrors, setFormErrors] = useState<Partial<Record<keyof typeof formData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // Redirect if cart is empty
  useEffect(() => {
    if (cart.length === 0) {
      navigate('/');
    }
  }, [cart, navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
    
    // Clear error when field is changed
    if (formErrors[name as keyof typeof formData]) {
      setFormErrors(prevErrors => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  const handleCheckboxChange = (checked: boolean) => {
    setFormData(prevData => ({
      ...prevData,
      saveInfo: checked,
    }));
  };

  const handleRadioChange = (value: string) => {
    setFormData(prevData => ({
      ...prevData,
      paymentMethod: value,
    }));
  };

  const validateForm = () => {
    const errors: Partial<Record<keyof typeof formData, string>> = {};
    
    // Required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'address', 'city', 'state', 'postalCode'];
    requiredFields.forEach(field => {
      if (!formData[field as keyof typeof formData]) {
        errors[field as keyof typeof formData] = 'This field is required';
      }
    });
    
    // Email validation
    if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    // Phone validation
    if (formData.phone && !/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      errors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    // Payment validation
    if (formData.paymentMethod === 'credit') {
      if (!formData.cardNumber) errors.cardNumber = 'Card number is required';
      if (!formData.cardName) errors.cardName = 'Name on card is required';
      if (!formData.cardExpiry) errors.cardExpiry = 'Expiry date is required';
      if (!formData.cardCvc) errors.cardCvc = 'CVC is required';
    }
    
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    // Simulate order processing
    setTimeout(() => {
      clearCart();
      navigate('/order-confirmation', { 
        state: { 
          orderId: `ORD-${Math.floor(100000 + Math.random() * 900000)}`,
          orderTotal: cartTotal,
          shippingAddress: `${formData.address}, ${formData.city}, ${formData.state} ${formData.postalCode}, ${formData.country}`
        }
      });
      setIsSubmitting(false);
    }, 1500);
  };
  
  // Calculate order summary
  const subtotal = cartTotal;
  const shipping = 10.00;
  const tax = subtotal * 0.07; // 7% tax rate
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Checkout Form */}
        <div>
          {!user && (
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <p className="text-sm">
                Already have an account?{' '}
                <button 
                  className="text-akagera-700 font-medium hover:underline"
                  onClick={() => setIsAuthModalOpen(true)}
                >
                  Sign in
                </button>{' '}
                for a faster checkout experience.
              </p>
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            {/* Contact Information */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Contact Information</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={formErrors.firstName ? 'border-red-500' : ''}
                  />
                  {formErrors.firstName && (
                    <p className="text-red-500 text-xs">{formErrors.firstName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={formErrors.lastName ? 'border-red-500' : ''}
                  />
                  {formErrors.lastName && (
                    <p className="text-red-500 text-xs">{formErrors.lastName}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={formErrors.email ? 'border-red-500' : ''}
                  />
                  {formErrors.email && (
                    <p className="text-red-500 text-xs">{formErrors.email}</p>
                  )}
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    className={formErrors.phone ? 'border-red-500' : ''}
                  />
                  {formErrors.phone && (
                    <p className="text-red-500 text-xs">{formErrors.phone}</p>
                  )}
                </div>
              </div>
            </div>
            
            {/* Shipping Address */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Shipping Address</h2>
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="address">Street Address</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    className={formErrors.address ? 'border-red-500' : ''}
                  />
                  {formErrors.address && (
                    <p className="text-red-500 text-xs">{formErrors.address}</p>
                  )}
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      className={formErrors.city ? 'border-red-500' : ''}
                    />
                    {formErrors.city && (
                      <p className="text-red-500 text-xs">{formErrors.city}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="state">State / Province</Label>
                    <Input
                      id="state"
                      name="state"
                      value={formData.state}
                      onChange={handleChange}
                      className={formErrors.state ? 'border-red-500' : ''}
                    />
                    {formErrors.state && (
                      <p className="text-red-500 text-xs">{formErrors.state}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="postalCode">ZIP / Postal Code</Label>
                    <Input
                      id="postalCode"
                      name="postalCode"
                      value={formData.postalCode}
                      onChange={handleChange}
                      className={formErrors.postalCode ? 'border-red-500' : ''}
                    />
                    {formErrors.postalCode && (
                      <p className="text-red-500 text-xs">{formErrors.postalCode}</p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      className={formErrors.country ? 'border-red-500' : ''}
                      disabled // For simplicity, we're only shipping to the US in this example
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2 pt-2">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={handleCheckboxChange}
                  />
                  <Label htmlFor="saveInfo" className="text-sm">
                    Save this information for next time
                  </Label>
                </div>
              </div>
            </div>
            
            {/* Payment Method */}
            <div className="bg-white rounded-lg border p-6 mb-6">
              <h2 className="text-lg font-semibold mb-4">Payment Method</h2>
              <RadioGroup
                value={formData.paymentMethod}
                onValueChange={handleRadioChange}
                className="space-y-4"
              >
                <div className="flex items-start space-x-3">
                  <div className="flex items-center h-5">
                    <RadioGroupItem value="credit" id="credit" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="credit" className="font-medium">
                      Credit / Debit Card
                    </Label>
                    <p className="text-gray-500 text-sm">Pay with Visa, Mastercard, or other major cards</p>
                  </div>
                  <div className="flex items-center space-x-1">
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349237.png" alt="visa" className="h-6" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349228.png" alt="mastercard" className="h-6" />
                    <img src="https://cdn-icons-png.flaticon.com/512/349/349230.png" alt="amex" className="h-6" />
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="flex items-center h-5">
                    <RadioGroupItem value="paypal" id="paypal" />
                  </div>
                  <div className="flex-1">
                    <Label htmlFor="paypal" className="font-medium">
                      PayPal
                    </Label>
                    <p className="text-gray-500 text-sm">Pay with your PayPal account</p>
                  </div>
                  <div>
                    <img src="https://cdn-icons-png.flaticon.com/512/174/174861.png" alt="paypal" className="h-6" />
                  </div>
                </div>
              </RadioGroup>
              
              {formData.paymentMethod === 'credit' && (
                <div className="mt-4 space-y-4 pt-4 border-t">
                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input
                      id="cardNumber"
                      name="cardNumber"
                      placeholder="1234 5678 9012 3456"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      className={formErrors.cardNumber ? 'border-red-500' : ''}
                    />
                    {formErrors.cardNumber && (
                      <p className="text-red-500 text-xs">{formErrors.cardNumber}</p>
                    )}
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="cardName">Name on Card</Label>
                    <Input
                      id="cardName"
                      name="cardName"
                      placeholder="John Doe"
                      value={formData.cardName}
                      onChange={handleChange}
                      className={formErrors.cardName ? 'border-red-500' : ''}
                    />
                    {formErrors.cardName && (
                      <p className="text-red-500 text-xs">{formErrors.cardName}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="cardExpiry">Expiration Date</Label>
                      <Input
                        id="cardExpiry"
                        name="cardExpiry"
                        placeholder="MM/YY"
                        value={formData.cardExpiry}
                        onChange={handleChange}
                        className={formErrors.cardExpiry ? 'border-red-500' : ''}
                      />
                      {formErrors.cardExpiry && (
                        <p className="text-red-500 text-xs">{formErrors.cardExpiry}</p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cardCvc">CVC</Label>
                      <Input
                        id="cardCvc"
                        name="cardCvc"
                        placeholder="123"
                        value={formData.cardCvc}
                        onChange={handleChange}
                        className={formErrors.cardCvc ? 'border-red-500' : ''}
                      />
                      {formErrors.cardCvc && (
                        <p className="text-red-500 text-xs">{formErrors.cardCvc}</p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
            
            {/* Submit Button (Mobile) */}
            <div className="lg:hidden mb-8">
              <Button 
                type="submit" 
                className="w-full bg-akagera-700 hover:bg-akagera-800 text-lg py-6"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Processing...' : `Place Order - ${formatPrice(total)}`}
              </Button>
            </div>
          </form>
        </div>
        
        {/* Order Summary */}
        <div>
          <div className="bg-white rounded-lg border p-6 sticky top-20">
            <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
            
            {/* Cart Items */}
            <div className="max-h-96 overflow-y-auto mb-4">
              {cart.map(item => (
                <CartItem key={item.product.id} item={item} />
              ))}
            </div>
            
            {/* Order Totals */}
            <div className="pt-4 border-t">
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-medium">{formatPrice(subtotal)}</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Shipping</span>
                <span className="font-medium">{formatPrice(shipping)}</span>
              </div>
              <div className="flex justify-between mb-4">
                <span className="text-gray-600">Tax</span>
                <span className="font-medium">{formatPrice(tax)}</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-6">
                <span>Total</span>
                <span>{formatPrice(total)}</span>
              </div>
              
              {/* Submit Button (Desktop) */}
              <div className="hidden lg:block">
                <Button 
                  type="submit" 
                  form="checkout-form" 
                  className="w-full bg-akagera-700 hover:bg-akagera-800 text-lg py-6"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Processing...' : 'Place Order'}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
