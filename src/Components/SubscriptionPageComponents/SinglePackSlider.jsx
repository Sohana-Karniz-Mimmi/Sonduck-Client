
import ytImg1 from "../../../public/Subs-images/sliderImg1.jpg";
import ytImg2 from "../../../public/Subs-images/sliderImg2.jpg";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const SinglePackSlider = () => {
  const { hash } = useLocation();

  console.log(hash);

  return (
    <div className="w-[1250px] mx-auto grid grid-cols-2">
      <div className="py-10 flex flex-col items-start justify-between gap-5">

        <div className="">
            <h1 className="gro font-semibold text-5xl text-black">Featured Single Packs</h1>
            <p className="gro font-medium text-xl mt-3 text-black">
                Find what you need on Sonduck Film, Discover <br /> millions of video templates, stock footage, audio & <br /> more. All for one low cost.
            </p>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={
              (hash === "#slide1" && "#slide4") ||
              (hash === "#slide2" && "#slide1") ||
              (hash === "#slide3" && "#slide2") ||
              (hash === "#slide4" && "#slide3")
            }
            className="text-xl border hover:border-[#FF689A] duration-500 rounded-full p-2"
          >
            <FaArrowLeftLong />
          </a>
          <a
            href={
              (hash === "#slide1" && "#slide2") ||
              (hash === "#slide2" && "#slide3") ||
              (hash === "#slide3" && "#slide4") ||
              (hash === "#slide4" && "#slide1")
            }
            className="text-xl border hover:border-[#FF689A] duration-500 rounded-full p-2"
          >
            <FaArrowRightLong />
          </a>
        </div>

      </div>

      <div className="carousel w-full">

        <div id="slide1" className="carousel-item relative cursor-pointer w-full mt-2">
          <Link>
            <img className="w-[470px] rounded-lg ml-36" src={ytImg1} alt="" />
          </Link>
        </div>

        <div id="slide2" className="carousel-item relative cursor-pointer w-full mt-2">
          <Link>
            <img className="w-[470px] rounded-lg ml-36" src={ytImg2} alt="" />
          </Link>
        </div>

        <div id="slide3" className="carousel-item relative cursor-pointer w-full mt-2">
          <Link>
            <img className="w-[470px] rounded-lg ml-36" src={ytImg1} alt="" />
          </Link>
        </div>

        <div id="slide4" className="carousel-item relative cursor-pointer w-full mt-2">
          <Link>
            <img className="w-[470px] rounded-lg ml-36" src={ytImg2} alt="" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default SinglePackSlider;
