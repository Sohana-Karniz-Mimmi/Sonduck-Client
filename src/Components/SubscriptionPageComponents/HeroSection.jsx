import banner from "../../assets/images/subscriptionPage/banner.png";
import bannerImg from "../../assets/images/subscriptionPage/bannerImg.png";
import "./hero.css";
const HeroSection = () => {
  return (
    <>
      <header
        style={{ backgroundImage: `url(${banner})` }}
        className="bg-cover bg-no-repeat max-h-screen h-full mb-10"
      >
        <div className="max-w-[1200px] w-full mx-auto">
          {/* this div is for banner */}

          <div className="pt-32 pb-64">
            <h2 className="title text-center text-4xl lg:text-[64px] font-semibold mb-24 p-2 tracking-widest">
              Subscription
            </h2>
            <img src={bannerImg} alt="Subsctiption Image" />
          </div>
        </div>
      </header>
      <div className="px-5">
        <div className="max-w-[1200px]  w-full mx-auto flex flex-col md:flex-row justify-between items-center gap-5 p-5 lg:p-10 border shadow-slate-400 bg-white shadow-lg rounded-2xl md:-mt-60 mb-24">
          <div className="w-full">
            <h4 className="text-xl font-semibold text-gray-900 text-center mb-5 tracking-wide">What is MotionDuck?</h4>
            <iframe
              className=" w-full  rounded-2xl"
              height="315"
              src="https://www.youtube.com/embed/CuGyl9guSrM?si=n77RjZQDig6QIhmY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="w-full">
            <h4 className="text-xl font-semibold text-gray-900 text-center mb-5 tracking-wide">Subscription Walkthrough</h4>
            <iframe
              className="w-full rounded-2xl"
              height="315"
              src="https://www.youtube.com/embed/7G1Qwx4Y-ss?si=_HczCZQy7-vs2sOR"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
