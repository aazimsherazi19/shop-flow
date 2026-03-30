import { assets } from "../assets/assets";
import SectionText from "./Text";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

const PromoBanner = () => {
  return (
    <section
      className="relative w-full min-h-[700px] md:min-h-[800px] lg:min-h-[900px] flex items-center justify-center bg-cover bg-center"
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
      <div className=" hidden md:block absolute bottom-6 left-4 md:bottom-10 md:left-10 lg:bottom-16 lg:left-20 xl:left-32 backdrop-blur-md rounded-xl shadow-xl p-3 w-[220px] animate-float">
        <img
          src={assets.promocard}
          alt=""
          className="w-full h-[120px] object-contain"
        />
        <h4 className="text-lg mt-2 font-light text-white ">Minimalist Sofa</h4>
        {/* <p className="text-xs text-gray-400">$49.99</p> */}
        <div className="flex items-center gap-2 mt-2 text-sm">
      <span className="text-white font-light text-lg">
        $79.99
      </span>

        <span className="text-[#f5f5f5] line-through">
          $49.99
        </span>
      
    </div>

        <button className="mt-4 text-xs bg-white text-primary px-4 py-2 rounded-full">
          Explore Detail →
        </button>
      </div>

      {/* FLOATING ICONS */}
      <div className="absolute top-[30%] left-[20%] w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow animate-float">
        <FontAwesomeIcon icon={faPlus} className="text-white" />
      </div>

      <div className="absolute top-[50%] right-[15%] w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow animate-float">
        <FontAwesomeIcon icon={faPlus} className="text-white" />
      </div>

      <div className="absolute bottom-[20%] right-[25%] w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow animate-float">
        <FontAwesomeIcon icon={faPlus} className="text-white" />
      </div>
    </section>
  );
};

export default PromoBanner;
