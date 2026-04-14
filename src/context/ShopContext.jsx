import { createContext, useState, useEffect } from "react";
import { getProducts } from "../services/api";

export const ShopContext = createContext(null);

const getDefaultCart = () => {
  return {};
};

export const ShopContextProvider = (props) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cartItems, setCartItems] = useState(getDefaultCart());

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts();
        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message || 'Failed to fetch products');
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const addProductToContext = (newProduct) => {
    setProducts((prev) => {
      if (prev.some(p => p.id === newProduct.id)) return prev;
      return [...prev, newProduct];
    });
  };

  const getCartItemsCount = () => {
    let totalItemCount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItemCount += cartItems[item];
      }
    }
    return totalItemCount;
  };

  const getCartTotalAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = products.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += cartItems[item] * itemInfo.price;
        }
      }
    }
    return totalAmount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: (prev[itemId] || 0) + 1 }));
  };

  const removeFromCart = (itemId) => {
    if (cartItems[itemId] > 0) {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
    }
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));
  };

  const deleteFromCart = (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      delete updated[itemId];
      return updated;
    });
  }

  const clearCart = () => {
    setCartItems(getDefaultCart());
  };

  const contextValue = {
    products,
    loading,
    error,
    cartItems,
    addToCart,
    removeFromCart,
    updateCartItemCount,
    deleteFromCart,
    getCartTotalAmount,
    getCartItemsCount,
    clearCart,
    addProductToContext,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
