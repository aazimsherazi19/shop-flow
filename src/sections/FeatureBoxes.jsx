

const FeatureBoxes = ({ box1, box2, box3, box4 }) => {
  return (
    <div className="grid md:grid-cols-3 gap-5 px-4 py-8 md:px-8 md:py-12 lg:px-16 lg:py-14 ">

      {/* LEFT BIG BOX */}
      <div
        className="md:col-span-2 row-span-2 relative h-[400px] md:h-full rounded-2xl overflow-hidden group cursor-pointer"
        style={{
          backgroundImage: `url(${box1.image})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

        <div className="absolute bottom-6 left-6 text-white">
          <h3 className="text-xl font-semibold">{box1.title}</h3>
          <p className="text-sm text-gray-200">{box1.desc}</p>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col gap-5">

        {/* TOP RIGHT BOX */}
        <div
          className="relative h-[190px] rounded-2xl overflow-hidden group cursor-pointer"
          style={{
            backgroundImage: `url(${box2.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

          <div className="absolute bottom-4 left-4 text-white">
            <h3 className="text-md font-semibold">{box2.title}</h3>
          </div>
        </div>

        {/* BOTTOM 2 BOXES */}
        <div className="grid grid-cols-2 gap-5">

          <div
            className="relative h-[190px] rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${box3.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-sm font-semibold">{box3.title}</h3>
            </div>
          </div>

          <div
            className="relative h-[190px] rounded-2xl overflow-hidden group cursor-pointer"
            style={{
              backgroundImage: `url(${box4.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-sm font-semibold">{box4.title}</h3>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default FeatureBoxes;