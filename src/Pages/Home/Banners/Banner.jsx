import bgImage from "../../../assets/images/banner/Image.png";
import frontPart from "../../../assets/images/banner/Image (1).png";
import bgsecond from "../../../assets/images/banner/Ornament.png";
const Banner = () => {
  return (
    <div>
      <div
        className="flex items-center max-h-screen p-8 "
        style={{ backgroundImage: "url(https://imgbb.host/images/ovTRJ.png)" }}
      >
        {/* <div className="hero-content opacity-60"></div> */}
        <div
          className="max-h-screen"
          style={{
            backgroundImage: "url(https://imgbb.host/images/ovimb.png)",
          }}
        ></div>
        <div>
          <p className="border-2 py-2 px-4 text-white">SONDUCKFILM</p>
          <h1 className="text-6xl text-white font-bold">
            Get Access to <span className="text-gray-500">Hundreds</span>{" "}
            <span className="text-pink-300">Motion Graphics</span>{" "}
            <span className="text-gray-500">Available</span>
          </h1>
          <p className="text-gray-600">
            Find What you need on Sonduck Film, Discover millions of video
            templates, stock footage, audio & more. All for one low cost
          </p>
          <input type="text" placeholder="Search" />
          <button className="btn bg-pink-500">Search</button>
        </div>
        <div>
          <img src={frontPart} alt="" />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between lg:gap-0 gap-5 items-center">
        <div>
          <h1 className="text-5xl">What is MotionDucks</h1>
          <p>25,5000 + Assets</p>
          <button className="btn">Play Video</button>
        </div>
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/CuGyl9guSrM?si=LSqeay6zW_IRPZNJ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Banner;
