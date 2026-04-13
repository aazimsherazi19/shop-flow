import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/ShopContext';
import { useNavigate, Link } from 'react-router-dom';
import SectionTitle from '../components/ui/SectionTitle';

const Checkout = () => {
  const { products, cartItems, getCartTotalAmount, clearCart } = useContext(ShopContext);
  const totalAmount = getCartTotalAmount();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', phone: '',
    address: '', city: '', state: '', zip: '',
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    // Simulate placing order
    setTimeout(() => {
      clearCart();
      navigate('/success');
    }, 1000);
  }

  // Redirect if cart is empty
  if (totalAmount === 0) {
    return (
      <div className="pt-32 pb-16 px-4 md:px-10 text-center min-h-screen">
         <h2 className="text-2xl mb-4">No items to checkout</h2>
         <Link to="/shop"><button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600">Back to Shop</button></Link>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-16 px-4 md:px-10 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Checkout" top="Final Step" />

        <div className="flex flex-col lg:flex-row gap-10 mt-10">
          {/* Billing Details */}
          <div className="w-full lg:w-2/3 bg-white p-6 md:p-8 rounded-xl shadow-sm">
            <h3 className="text-xl font-medium border-b pb-4 mb-6">Billing Details</h3>
            <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">First Name *</label>
                  <input required name="firstName" value={formData.firstName} onChange={handleChange} type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Last Name *</label>
                  <input required name="lastName" value={formData.lastName} onChange={handleChange} type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                  <input required name="email" value={formData.email} onChange={handleChange} type="email" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Phone *</label>
                  <input required name="phone" value={formData.phone} onChange={handleChange} type="tel" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Street Address *</label>
                <input required name="address" value={formData.address} onChange={handleChange} type="text" placeholder="House number and street name" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Town / City *</label>
                  <input required name="city" value={formData.city} onChange={handleChange} type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">State / County *</label>
                  <input required name="state" value={formData.state} onChange={handleChange} type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Postcode / ZIP *</label>
                  <input required name="zip" value={formData.zip} onChange={handleChange} type="text" className="w-full border rounded-lg px-4 py-2 outline-none focus:border-orange-500 transition" />
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-1/3">
            <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-orange-100 relative overflow-hidden">
               {/* Decorative accent */}
              <div className="absolute top-0 left-0 w-full h-1 bg-orange-500"></div>

              <h3 className="text-xl font-medium border-b pb-4 mb-6">Your Order</h3>
              <div className="flex justify-between font-medium text-gray-700 mb-4">
                <span>Product</span>
                <span>Subtotal</span>
              </div>
              <div className="space-y-4 mb-6 border-b pb-6">
                {products.map((product) => {
                  if (cartItems[product.id] > 0) {
                    return (
                      <div key={product.id} className="flex justify-between text-sm">
                        <span className="text-gray-500 pr-4">
                          {product.name || product.title} <strong className="text-black">x {cartItems[product.id]}</strong>
                        </span>
                        <span className="whitespace-nowrap">Rs. {(product.price * cartItems[product.id]).toLocaleString()}</span>
                      </div>
                    )
                  }
                  return null;
                })}
              </div>
              
              <div className="flex justify-between mb-2">
                <span className="text-gray-600">Subtotal</span>
                <span>Rs. {totalAmount.toLocaleString()}</span>
              </div>
              <div className="flex justify-between mb-6 pb-6 border-b">
                <span className="text-gray-600">Shipping</span>
                <span className="text-green-500">Free</span>
              </div>
              <div className="flex justify-between text-lg font-bold mb-8">
                <span>Total</span>
                <span className="text-orange-500">Rs. {totalAmount.toLocaleString()}</span>
              </div>

              {/* Payment Methods Info */}
              <div className="mb-6 space-y-3">
                 <div className="flex items-center gap-2">
                    <input type="radio" id="cod" name="payment" defaultChecked className="accent-orange-500" />
                    <label htmlFor="cod" className="text-sm font-medium">Cash on Delivery</label>
                 </div>
                 <p className="text-xs text-gray-500 ml-5">Pay with cash upon delivery.</p>
              </div>

              <button 
                type="submit" 
                form="checkout-form"
                className="w-full bg-orange-500 text-white py-4 rounded-full hover:bg-orange-600 transition font-medium text-lg uppercase tracking-wide"
              >
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
