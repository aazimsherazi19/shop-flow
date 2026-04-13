import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const FeatureBoxes = ({ box1, box2, box3, box4 }) => {
  return (
    <div className="grid md:grid-cols-2 gap-5 px-8 py-8 md:px-14 md:py-12 lg:px-24 lg:py-20 ">

      {/* LEFT BIG BOX */}
      <div
        className="aspect-[1/1] relative h-[400px] md:h-full rounded-2xl overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: `url(${box1.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

        <div className="absolute bottom-6 left-6 text-white flex ietms-center justify-between w-[90%]">
          <div>
            <h3 className="text-xl font-medium">{box1.title}</h3>
          <p className="text-sm text-gray-200">{box1.desc}</p>
          </div>
          <div className=" w-12 h-12 text-primary bg-white group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center group-hover:scale-110 transition duration-500">
              <FontAwesomeIcon icon={faArrowRight} />
          </div>
         
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-5">

        {/* TOP RIGHT BOX */}
        <div
          className="relative aspect-[2/1] rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            backgroundImage: `url(${box2.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          <div className="absolute bottom-6 left-6 text-white flex ietms-center justify-between w-[90%]">
          <div>
            <h3 className="text-xl font-medium">{box2.title}</h3>
          <p className="text-sm text-gray-200">{box2.desc}</p>
          </div>
          <div className=" w-12 h-12 text-primary bg-white group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center group-hover:scale-110 transition duration-500">
              <FontAwesomeIcon icon={faArrowRight} />
          </div>
         
        </div>
        </div>

        {/* BOTTOM 2 BOXES */}
        <div className="grid grid-cols-2 gap-5">

          <div
            className="relative aspect-[1/1] rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${box3.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-6 left-6 text-white flex items-center justify-between w-[85%]">
              <div>
                <h3 className="text-xl font-medium">{box3.title}</h3>
                <p className="text-sm text-gray-200">{box3.desc}</p>
              </div>
              <div className=" w-12 h-12 text-primary bg-white group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center group-hover:scale-110 transition duration-500">
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
            </div>
          </div>

          <div
            className="relative aspect-[1/1] rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${box4.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-6 left-6 text-white flex ietms-center justify-between w-[85%]">
          <div>
            <h3 className="text-xl font-medium">{box4.title}</h3>
          </div>
          <div className=" w-12 h-12 text-primary bg-white group-hover:bg-primary group-hover:text-white rounded-full flex items-center justify-center group-hover:scale-110 transition duration-500">
              <FontAwesomeIcon icon={faArrowRight} />
          </div>
         
        </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FeatureBoxes;