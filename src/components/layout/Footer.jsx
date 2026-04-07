import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTwitter,
  faWhatsapp,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <footer className="relative  pt-35 pb-6 overflow-hidden">

      {/* 🔥 BIG BACKGROUND TEXT */}
      <h1 className="absolute -top-19 left-1/2 -translate-x-1/2 text-[120px] md:text-[200px] font-regular text-dark select-none pointer-events-none whitespace-nowrap ">
        SHOP FLOW
      </h1>

      {/* 🔥 BLUR OVERLAY (glass effect) */}
      <div className="absolute top-20 left-0 w-full h-40 bg-white/60 backdrop-blur-md"></div>

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 md:px-10">

        {/* 🔷 NEWSLETTER */}
        <div className="text-center mb-12">
          <h3 className="text-lg md:text-xl font-medium text-dark">
            Don’t Miss the Change to Get 50% Off
          </h3>
          <p className="text-sm text-gray-500 mt-1">
            Refresh your space today with timeless furniture
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-6">
            <input
              type="email"
              placeholder="john@example.com"
              className="w-full sm:w-[320px] px-4 py-3 rounded-full border outline-none text-sm"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-full hover:opacity-90 transition">
              Claim Discount
            </button>
          </div>
        </div>

        {/* 🔷 FOOTER LINKS */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-sm">

          {/* COL 1 */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-gray-600">
             <a href="/"><li>Home</li></a>
              <a href="/about"><li>About</li></a>
              <a href="/shop"><li className="flex items-center gap-2">
                Shop <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">Hot</span>
              </li></a>
              <a href="/contact"><li>Contact</li></a>
            </ul>
          </div>

          {/* COL 2 */}
          <div>
            <h4 className="font-semibold mb-3">Features</h4>
            <ul className="space-y-2 text-gray-600">
              <a href="/features"><li>Premium Materials</li></a>
              <a href="/delivery"><li className="flex items-center gap-2">
                Fast Delivery <span className="bg-primary text-white text-xs px-2 py-0.5 rounded">New</span>
              </li></a>
              <a href="/custom"><li>Custom Options</li></a>
              <a href="/support"><li>Easy Support</li></a>
            </ul>
          </div>

          {/* COL 3 */}
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2 text-gray-600">
              <a href="/blog"><li>Blog / Articles</li></a>
              <a href="/faq"><li>Help Center (FAQ)</li></a>
              <a href="/track-order"><li>Track Your Order</li></a>
              <a href="/returns"><li>Returns & Replacements</li></a>
            </ul>
          </div>

          {/* COL 4 */}
          <div>
            <h4 className="font-semibold mb-3">Partnerships</h4>
            <ul className="space-y-2 text-gray-600">
              <a href="/affiliate"><li>Affiliate Program</li></a>
              <a href="/advertise"><li>Advertise with Us</li></a>
              <a href="/publish"><li>Self-Publish with Us</li></a>
            </ul>
          </div>

          {/* COL 5 */}
          <div>
            <h4 className="font-semibold mb-3">Contact Info</h4>
            <ul className="space-y-2 text-gray-600">
              <a href="mailto:info@shopflow.com.pk"><li>info@shopflow.com.pk</li></a>
              <a href="tel:+923242000178"><li>+92-3242000178</li></a>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-6 mt-10 text-gray-600 text-sm">

  <a href="#" className="flex items-center gap-2">
    <FontAwesomeIcon icon={faFacebookF} />
    Facebook
  </a>

  <a href="#" className="flex items-center gap-2 ">
    <FontAwesomeIcon icon={faTwitter} />
    Twitter
  </a>

  <a href="#" className="flex items-center gap-2">
    <FontAwesomeIcon icon={faWhatsapp} />
    WhatsApp
  </a>

  <a href="#" className="flex items-center gap-2 ">
    <FontAwesomeIcon icon={faTelegram} />
    Telegram
  </a>

</div>

        {/* 🔷 BOTTOM */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mt-10 text-xs text-gray-500 mx-[7%]">

          <p>© Copyright 2025. All Rights Reserved Shop Flow</p>

          {/* PAYMENT LOGOS (dummy) */}
          <div className="flex items-center gap-3">
            <img src={assets.cards} alt="" className=" h-7 object-contain" />
            
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;