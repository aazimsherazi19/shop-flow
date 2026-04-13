import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ShopContext } from "../../context/ShopContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useContext(ShopContext);

  // Helper for old API structure and new Dummy Data
  const image = product.images ? product.images[0] : product.image;
  const title = product.name || product.title;
  const price = typeof product.price === 'number' ? `Rs. ${product.price.toLocaleString()}` : product.price;
  const oldPrice = product.regularPrice ? `Rs. ${product.regularPrice.toLocaleString()}` : product.oldPrice;

  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300">
      {/* IMAGE */}
      <div className="relative bg-[#f6f6f6] rounded-xl overflow-hidden aspect-square flex items-center justify-center">
        <Link to={`/product/${product.id}`} className="w-full h-full flex items-center justify-center">
          <img
            src={image}
            alt={title}
            className="max-h-[80%] max-w-[80%] object-contain transition duration-500 group-hover:scale-105"
          />
        </Link>

        {/* HOVER */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300 pointer-events-none">
          <button 
            onClick={(e) => { e.preventDefault(); addToCart(product.id); }}
            className="bg-white text-black px-4 py-2 rounded-full text-sm pointer-events-auto hover:bg-orange-500 hover:text-white transition"
          >
            Add to cart
          </button>
        </div>
      </div>

      {/* TEXT */}
      <div className="mt-4 flex justify-between items-center">
        <Link to={`/product/${product.id}`} className="w-[60%]">
          <h3 className="text-lg font-medium text-dark hover:text-orange-500 transition">
            {title}
          </h3>
        </Link>

        <div className="flex flex-col items-end gap-1 mt-2 text-sm">
          {oldPrice && (
            <span className="text-gray-400 line-through text-xs">
              {oldPrice}
            </span>
          )}
          <span className="text-orange-500 font-medium whitespace-nowrap">
            {price}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;