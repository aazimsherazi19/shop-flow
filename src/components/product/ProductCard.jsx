import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white rounded-2xl p-4 shadow-sm hover:shadow-lg transition duration-300">
  
  {/* IMAGE */}
  <div className="relative bg-[#f6f6f6] rounded-xl overflow-hidden aspect-square flex items-center justify-center">

    <img
      src={product.image}
      alt=""
      className="max-h-[80%] max-w-[80%] object-contain transition duration-500 group-hover:scale-105"
    />

    {/* HOVER */}
    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition duration-300">
      <button className="bg-white text-black px-4 py-2 rounded-full text-sm">
        Add to cart
      </button>
    </div>

  </div>

  {/* TEXT */}
  <div className="mt-4 flex justify-between items=center">
    <h3 className="text-lg font-medium text-dark w-[60%]">
      {product.title}
    </h3>

    <div className="flex flex-col items-center gap-2 mt-2 text-sm">
      {product.oldPrice && (
        <span className="text-gray-400 line-through">
          {product.oldPrice}
        </span>
      )}
      <span className="text-orange-500 font-medium">
        {product.price}
      </span>
    </div>
  </div>
</div>
  );
};

export default ProductCard;