import axios from 'axios';
import OAuth from 'oauth-1.0a';
import CryptoJS from 'crypto-js';

const WOO_API_URL = import.meta.env.VITE_WOO_API_URL;
const CONSUMER_KEY = import.meta.env.VITE_WOO_CONSUMER_KEY;
const CONSUMER_SECRET = import.meta.env.VITE_WOO_CONSUMER_SECRET;

const oauth = new OAuth({
  consumer: { key: CONSUMER_KEY, secret: CONSUMER_SECRET },
  signature_method: 'HMAC-SHA256',
  hash_function(base_string, key) {
    return CryptoJS.HmacSHA256(base_string, key).toString(CryptoJS.enc.Base64);
  },
});

const IS_DEV = import.meta.env.DEV;

// Use this helper instead of raw axios to cleanly force correct signatures on HTTP
const oauthGet = async (endpoint, queryParams = {}) => {
  const signatureUrl = `${WOO_API_URL}/wp-json/wc/v3${endpoint}`;
  const actualUrl = IS_DEV ? `/wp-json/wc/v3${endpoint}` : signatureUrl;

  const requestData = {
    url: signatureUrl,
    method: 'GET',
    data: queryParams
  };

  const authData = oauth.authorize(requestData);

  return await axios.get(actualUrl, {
    params: {
      ...queryParams,
      ...authData
    }
  });
};

// Helper for POST requests
const oauthPost = async (endpoint, data = {}) => {
  const signatureUrl = `${WOO_API_URL}/wp-json/wc/v3${endpoint}`;
  const actualUrl = IS_DEV ? `/wp-json/wc/v3${endpoint}` : signatureUrl;

  const requestData = {
    url: signatureUrl,
    method: 'POST',
  };

  const authData = oauth.authorize({ ...requestData, data: undefined });

  return await axios.post(actualUrl, data, {
    params: authData
  });
};

// Helper to strip HTML tags since WooCommerce returns HTML strings
const stripHtml = (html) => {
  if (!html) return '';
  const doc = new DOMParser().parseFromString(html, 'text/html');
  return doc.body.textContent || "";
};

// Mapper to transform WooCommerce item to frontend-friendly format
export const mapProduct = (wooProduct) => {
  const images = wooProduct.images?.length > 0
    ? wooProduct.images.slice(0, 4).map(img => img.src)
    : ["https://placehold.co/600x600?text=No+Image"];

  const categories = wooProduct.categories?.map(c => c.name) || ["Uncategorized"];

  return {
    id: wooProduct.id,
    title: wooProduct.name,
    name: wooProduct.name,
    price: Number(wooProduct.price || wooProduct.regular_price || 0),
    regularPrice: Number(wooProduct.regular_price || 0),
    image: images[0],
    images: images,
    category: categories[0],
    categories: categories,
    description: stripHtml(wooProduct.short_description || wooProduct.description),
    fullDescription: stripHtml(wooProduct.description),
    rating: Number(wooProduct.average_rating || 0),
    reviews: wooProduct.rating_count || 0,
    stock: wooProduct.stock_quantity || 10,
    features: ["Authentic Quality", "Premium Material", "100% Guaranteed"], // Mocked as WooCommerce doesn't provide this by default
  };
};

export const getProducts = async () => {
  try {
    const response = await oauthGet('/products', {
      per_page: 20
    });

    console.log("WooCommerce /products response:", response.data);

    if (!Array.isArray(response.data)) {
      throw new Error(`API returned ${typeof response.data} instead of an array. Check console for payload. Ensure your API URL is correct and handles HTTPS/auth.`);
    }

    return response.data.map(mapProduct);
  } catch (error) {
    console.error("Error fetching WooCommerce products:", error.response?.data || error.message);
    throw error;
  }
};

export const getProductById = async (id) => {
  try {
    const response = await oauthGet(`/products/${id}`);

    console.log(`WooCommerce /products/${id} response:`, response.data);

    return mapProduct(response.data);
  } catch (error) {
    console.error(`Error fetching WooCommerce product ${id}:`, error.response?.data || error.message);
    throw error;
  }
};


export const createOrder = async (orderData) => {
  try {
    const response = await oauthPost('/orders', orderData);
    console.log('WooCommerce /orders response:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error creating WooCommerce order:', error.response?.data || error.message);
    throw error;
  }
};
