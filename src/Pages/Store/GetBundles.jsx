import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
const GetBundles = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        className="mySwiper"
        navigation={true}
        pagination={true}
        loop={true}
      >
        <SwiperSlide>
          <div>
            <h1 className="text-5xl my-2">Get Bundles</h1>
            <p>Unlimited Packs Get Every Pack We Have + Every Future Pack!</p>
            <div className="bg-blue-500 p-8 rounded-xl text-white ">
              <div className="flex items-center justify-between my-2">
                <div className="flex ">
                  <h2 className="text-3xl rounded-full border-white border2 bg-sky-900 font-bold p-2 mr-2">
                    Ae
                  </h2>
                  <h2 className="text-3xl rounded-full border-white bg-sky-900 font-bold p-2">
                    Pr
                  </h2>
                </div>
                <div>
                  <h3 className="text-3xl">25,000 + Template</h3>
                </div>
              </div>
              <div>
                <h1 className="text-5xl">Get 40 Pack Template Bundle</h1>
                <h3>Save $1470 and get all 40 Packs!</h3>
              </div>

              <div
                className="hero  my-2 "
                style={{
                  backgroundImage: "url(https://imgbb.host/images/jnaFr.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-45 rounded-xl"></div>
                <div className="">
                  <div className="flex justify-between gap-72 items-center">
                    <div className="flex gap-8 mt-16">
                      <h1 className="mb-5 text-5xl font-bold">$675</h1>
                      <span className="text-4xl line-through">$2145</span>
                    </div>
                    <div>
                      <button className="py-2 px-4 rounded-xl border-2 hover:bg-pink-500 hover:border-pink-600 ">
                        View Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <h1>hlw world</h1>
            <h1 className="text-5xl my-2">Get Bundles</h1>
            <p>Unlimited Packs Get Every Pack We Have + Every Future Pack!</p>
            <div className="bg-blue-500 p-8 rounded-xl text-white ">
              <div className="flex items-center justify-between my-2">
                <div className="flex ">
                  <h2 className="text-3xl rounded-full border-white border2 bg-sky-900 font-bold p-2 mr-2">
                    Ae
                  </h2>
                  <h2 className="text-3xl rounded-full border-white bg-sky-900 font-bold p-2">
                    Pr
                  </h2>
                </div>
                <div>
                  <h3 className="text-3xl">25,000 + Template</h3>
                </div>
              </div>
              <div>
                <h1 className="text-5xl">Get 40 Pack Template Bundle</h1>
                <h3>Save $1470 and get all 40 Packs!</h3>
              </div>

              <div
                className="hero  my-2 "
                style={{
                  backgroundImage: "url(https://imgbb.host/images/jnaFr.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-45 rounded-xl"></div>
                <div className="">
                  <div className="flex justify-between gap-72 items-center">
                    <div className="flex gap-8 mt-16">
                      <h1 className="mb-5 text-5xl font-bold">$675</h1>
                      <span className="text-4xl line-through">$2145</span>
                    </div>
                    <div>
                      <button className="py-2 px-4 rounded-xl border-2 hover:bg-pink-500 hover:border-pink-600 ">
                        View Here
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default GetBundles;
