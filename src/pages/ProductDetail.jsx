import React, { useContext, useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ShopContext } from '../context/ShopContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faMinus, faPlus, faCartShopping, faCheck } from '@fortawesome/free-solid-svg-icons';

const ProductDetail = () => {
  const { id } = useParams();
  const { products, addToCart } = useContext(ShopContext);
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState("description");

  useEffect(() => {
    const foundProduct = products.find(p => p.id === Number(id));
    if (foundProduct) {
      setProduct(foundProduct);
      setMainImage(foundProduct.images ? foundProduct.images[0] : foundProduct.image);
    }
  }, [id, products]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center pt-20">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to="/shop" className="text-orange-500 hover:underline">Back to Shop</Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
       addToCart(product.id);
    }
    // Simple visual feedback
    const btn = document.getElementById(`add-btn-${product.id}`);
    if(btn) {
       btn.innerHTML = 'Added to Cart!';
       btn.classList.add('bg-green-500');
       setTimeout(() => {
          btn.innerHTML = 'Add to Cart';
          btn.classList.remove('bg-green-500');
       }, 1500);
    }
  };

  const images = product.images || [product.image];

  return (
    <div className="pt-32 pb-16 px-4 md:px-10 bg-white min-h-screen">
      <div className="max-w-6xl mx-auto">
        
        {/* Breadcrumb */}
        <div className="text-sm text-gray-500 mb-8 flex gap-2">
          <Link to="/" className="hover:text-orange-500">Home</Link> / 
          <Link to="/shop" className="hover:text-orange-500">Shop</Link> / 
          <span className="text-gray-800 font-medium">{product.name || product.title}</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Images Section */}
          <div className="w-full lg:w-1/2 flex flex-col md:flex-row-reverse gap-4">
            {/* Main Image */}
            <div className="w-full md:w-[80%] bg-[#f9f9f9] rounded-2xl overflow-hidden aspect-square flex items-center justify-center p-8">
              <img src={mainImage} alt={product.name || product.title} className="w-full h-full object-contain transition duration-500 hover:scale-105" />
            </div>
            
            {/* Gallery Thumbnails */}
            <div className="w-full md:w-[20%] flex md:flex-col gap-4 overflow-x-auto md:overflow-visible no-scrollbar">
              {images.map((img, idx) => (
                <div 
                  key={idx} 
                  onClick={() => setMainImage(img)}
                  className={`w-20 md:w-full aspect-square bg-[#f9f9f9] rounded-xl flex items-center justify-center cursor-pointer border-2 p-2 shrink-0 ${mainImage === img ? 'border-orange-500' : 'border-transparent'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-contain" />
                </div>
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-3xl md:text-4xl font-semibold mb-3 text-gray-900">{product.name || product.title}</h1>
            
            {/* Reviews */}
            <div className="flex items-center gap-4 mb-6">
               <div className="flex text-yellow-400 gap-1 text-sm">
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} />
                 <FontAwesomeIcon icon={faStar} className={product.rating >= 4.8 ? "text-yellow-400" : "text-gray-300"} />
               </div>
               <span className="text-gray-500 text-sm">| &nbsp; {product.reviews || 5} Customer Reviews</span>
            </div>

            {/* Price */}
            <div className="text-2xl font-medium text-orange-500 mb-6">
              Rs. {(product.price).toLocaleString()}
            </div>

            {/* Short Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              {product.description || "Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound."}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 mb-10 pt-6 border-t">
              {/* Quantity Selector */}
              <div className="flex items-center border border-gray-300 rounded-full px-4 py-3 h-[52px]">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))} className="text-gray-500 hover:text-black w-6"><FontAwesomeIcon icon={faMinus} className="text-xs" /></button>
                <span className="w-10 text-center font-medium">{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)} className="text-gray-500 hover:text-black w-6"><FontAwesomeIcon icon={faPlus} className="text-xs" /></button>
              </div>

              {/* Add to Cart Button */}
              <button 
                id={`add-btn-${product.id}`}
                onClick={handleAddToCart}
                className="bg-orange-500 text-white px-8 py-3 h-[52px] rounded-full hover:bg-orange-600 transition flex-1 md:flex-none font-medium flex items-center justify-center gap-2"
              >
                 Add to Cart
              </button>
            </div>

            {/* Meta */}
            <div className="space-y-3 text-sm text-gray-500">
              <div className="flex gap-4">
                <span className="w-20">SKU</span>
                <span>: SS00{product.id}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-20">Category</span>
                <span>: {product.category || 'Furniture'}</span>
              </div>
              <div className="flex gap-4">
                <span className="w-20">Tags</span>
                <span>: Modern, Design, Wood</span>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs - Description & Additional Info */}
        <div className="mt-20 border-t pt-10">
          <div className="flex justify-center gap-8 md:gap-16 text-lg font-medium mb-10">
            <span 
              onClick={() => setActiveTab("description")} 
              className={`cursor-pointer ${activeTab === 'description' ? 'text-black border-b-2 border-black pb-2' : 'text-gray-400'}`}
            >
              Description
            </span>
            <span 
               onClick={() => setActiveTab("additional")} 
              className={`cursor-pointer ${activeTab === 'additional' ? 'text-black border-b-2 border-black pb-2' : 'text-gray-400'}`}
            >
              Additional Information
            </span>
          </div>
          
          <div className="max-w-4xl mx-auto text-gray-600 leading-relaxed space-y-6">
            {activeTab === 'description' ? (
              <>
                 <p>
                  {product.description || "Embodying the raw, wayward spirit of rock 'n' roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road."}
                 </p>
                 <p>
                   Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
                 </p>
              </>
            ) : (
              <ul className="space-y-4">
                 {product.features?.map((f, i) => (
                    <li key={i} className="flex items-center gap-2">
                       <FontAwesomeIcon icon={faCheck} className="text-green-500" /> {f}
                    </li>
                 )) || (
                    <li>No additional features listed.</li>
                 )}
              </ul>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
