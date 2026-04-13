import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import SectionTitle from '../components/ui/SectionTitle';

const Cart = () => {
  const { products, cartItems, addToCart, removeFromCart, deleteFromCart, getCartTotalAmount } = useContext(ShopContext);
  const totalAmount = getCartTotalAmount();
  const navigate = useNavigate();

  return (
    <div className="pt-32 pb-16 px-4 md:px-10 bg-[#f9f9f9] min-h-screen">
      <div className="max-w-6xl mx-auto">
        <SectionTitle title="Shopping Cart" top="Your Cart" />

        {totalAmount > 0 ? (
          <div className="flex flex-col lg:flex-row gap-10 mt-10">
            {/* Cart Items */}
            <div className="w-full lg:w-2/3 bg-white rounded-xl shadow-sm overflow-hidden">
              <div className="hidden md:grid grid-cols-5 text-gray-500 text-sm py-4 px-6 border-b">
                <span className="col-span-2">Product</span>
                <span className="text-center">Price</span>
                <span className="text-center">Quantity</span>
                <span className="text-center">Subtotal</span>
              </div>

              {products.map((product) => {
                if (cartItems[product.id] > 0) {
                  return (
                    <div key={product.id} className="grid grid-cols-1 md:grid-cols-5 items-center gap-4 py-6 px-6 border-b relative">
                      <div className="col-span-2 flex items-center gap-4">
                        <img src={product.images ? product.images[0] : product.image} alt={product.name} className="w-20 h-20 object-cover bg-gray-100 rounded-lg" />
                        <span className="font-medium">{product.name || product.title}</span>
                      </div>
                      <div className="text-center md:text-gray-600 font-medium md:font-normal">
                        <span className="md:hidden text-gray-400 text-sm">Price: </span>
                        Rs. {product.price.toLocaleString()}
                      </div>
                      <div className="flex items-center justify-center gap-3">
                        <button onClick={() => removeFromCart(product.id)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">-</button>
                        <span>{cartItems[product.id]}</span>
                        <button onClick={() => addToCart(product.id)} className="w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200">+</button>
                      </div>
                      <div className="text-center font-medium text-orange-500">
                      <span className="md:hidden text-gray-400 text-sm font-normal">Subtotal: </span>
                        Rs. {(product.price * cartItems[product.id]).toLocaleString()}
                      </div>
                      {/* Delete Button */}
                      <button onClick={() => deleteFromCart(product.id)} className="absolute top-4 right-4 md:static md:col-span-1 text-red-500 hover:text-red-700 mx-auto justify-center flex mt-2 md:mt-0">
                         <FontAwesomeIcon icon={faTrash} />
                      </button>
                    </div>
                  );
                }
                return null;
              })}
            </div>

            {/* Cart Summary */}
            <div className="w-full lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm p-6">
                <h3 className="text-xl font-medium border-b pb-4 mb-4">Cart Total</h3>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Subtotal</span>
                  <span className="font-medium">Rs. {totalAmount.toLocaleString()}</span>
                </div>
                <div className="flex justify-between mb-4">
                  <span className="text-gray-500">Shipping</span>
                  <span className="text-green-500">Free</span>
                </div>
                <div className="flex justify-between text-lg font-bold border-t pt-4 mt-4">
                  <span>Total</span>
                  <span className="text-orange-500">Rs. {totalAmount.toLocaleString()}</span>
                </div>
                <button 
                  onClick={() => navigate('/checkout')}
                  className="w-full bg-orange-500 text-white py-3 rounded-full mt-6 hover:bg-orange-600 transition font-medium"
                >
                  Proceed to Checkout
                </button>
                <Link to="/shop">
                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-full mt-3 hover:bg-gray-50 transition font-medium">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-white rounded-xl shadow-sm mt-10">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-8">Looks like you haven't added any items to the cart yet.</p>
            <Link to="/shop">
              <button className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600 transition">
                Return to Shop
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
