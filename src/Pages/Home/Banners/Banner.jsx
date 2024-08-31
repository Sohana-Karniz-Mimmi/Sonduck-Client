import heroBg from "../../../assets/images/banner/hero_bg.png";
import { IoIosSearch } from "react-icons/io";
import Container from "../../../Shared/Container";
const Banner = () => {
  return (
    <div
      className="bg-cover"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <Container>
        <div className="pt-64 pb-64">
          <p className="btn bg-black hover:bg-pink-300 text-white">
            SONDUCKFILM
          </p>
          <h1 className="text-6xl text-white font-bold">
            Get Access to <span className="text-gray-500">Hundreds</span>{" "}
            <span className="text-pink-300">
              Motion <br /> Graphics
            </span>{" "}
            <span className="text-gray-500">Available</span>
          </h1>
          <p className="text-gray-600">
            Find What you need on Sonduck Film, Discover millions of video
            templates, stock footage, audio & more. All for one low cost
          </p>
          <div className="flex gap-4">
            <label className="input input-bordered flex items-center gap-2">
              <IoIosSearch className="text-pink-500 text-2xl" />
              <input type="text" className="grow" placeholder="Search" />
            </label>
            <button className="py-2 px-6 rounded-xl bg-pink-400 text-white hover:bg-pink-200">
              Search
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
