import { assets } from "../assets/assets";
import SectionText from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PromoBanner = () => {
  return (
    <section
      className="relative w-full min-h-[80svh] md:min-h-[90svh] flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${assets.promo})` }} // dummy replace later
    >
      {/* Overlay */}
      <div className="absolute inset-0 "></div>

      {/* CONTENT */}
      <div className="relative max-w-6xl mx-auto px-4 text-center">

        {/* TEXT COMPONENT USE
        <SectionText
          align="center"
          title={
            <>
              Explore furniture pieces that seamlessly combine{" "}
              <span className="text-orange-500">elegance and functionality</span>{" "}
              by hovering over them
            </>
          }
        /> */}

          <div className={`px-4 md:px-8 lg:px-24 text-center`}>
      <div className=' font-medium text-5xl mt-2 leading-[1.15]'>
      <h2> Explore furniture pieces that seamlessly combine{" "}
              <span className="text-primary">elegance and functionality</span>{" "}
              by hovering over them</h2>
      </div>
    </div>

        {/* SUBTEXT */}
        <p className="text-dark text-sm mt-3">
          Enjoy up to 50% OFF — only for a limited time!
        </p>

        {/* COUNTDOWN */}
        <div className="flex justify-center gap-3 mt-6">
          {["18", "24", "30"].map((item, i) => (
            <div
              key={i}
              className="bg-white shadow-md px-3 py-2 rounded-lg text-center"
            >
              <p className="font-semibold text-md">{item}</p>
              <span className="text-sm text-dark">
                {i === 0 ? "Hour" : i === 1 ? "Minute" : "Second"}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* FLOATING PRODUCT CARD */}
      <div className="hidden md:block absolute bottom-5 left-30 backdrop-blur-sm rounded-xl shadow-xl p-3 w-[220px] animate-float">
        <img
          src={assets.promocard}
          alt=""
          className="w-full h-[120px] object-contain"
        />
        <h4 className="text-sm mt-2 font-medium">Minimalist Sofa</h4>
        <p className="text-xs text-gray-400">$49.99</p>

        <button className="mt-2 text-xs bg-orange-500 text-white px-3 py-1 rounded-full">
          Explore Detail →
        </button>
      </div>

      {/* FLOATING ICONS */}
      <div className="absolute top-[30%] left-[20%] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow animate-float">
        <FontAwesomeIcon icon={faPlus} className="text-orange-500" />
      </div>

      <div className="absolute top-[50%] right-[15%] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow animate-float">
        <FontAwesomeIcon icon={faPlus} className="text-orange-500" />
      </div>

      <div className="absolute bottom-[20%] right-[25%] w-8 h-8 bg-white rounded-full flex items-center justify-center shadow animate-float">
        <FontAwesomeIcon icon={faPlus} className="text-orange-500" />
      </div>
    </section>
  );
};

export default PromoBanner;
