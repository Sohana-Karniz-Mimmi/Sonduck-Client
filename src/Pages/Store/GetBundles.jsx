import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";

const GetBundles = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 mt-12">
      <h1 className="text-3xl md:text-4xl lg:text-5xl my-2">Get Bundles</h1>
      <p className="text-sm md:text-base lg:text-lg my-4">
        Unlimited Packs Get Every Pack We Have + Every Future Pack!
      </p>
      <Swiper
        modules={[Pagination]}
        className="mySwiper"
        pagination={true}
        loop={true}
      >
        <SwiperSlide>
          <div>
            <div className="bg-blue-500 p-4 md:p-6 lg:p-8 rounded-xl text-white">
              <div className="flex flex-col md:flex-row items-center justify-between my-2">
                <div className="flex mb-4 md:mb-0">
                  <h2 className="text-xl md:text-2xl lg:text-3xl rounded-full border-white bg-sky-900 font-bold p-2 mr-2">
                    Ae
                  </h2>
                  <h2 className="text-xl md:text-2xl lg:text-3xl rounded-full border-white bg-sky-900 font-bold p-2">
                    Pr
                  </h2>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl">
                    25,000 + Template
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">
                  Get 40 Pack Template Bundle
                </h1>
                <h3 className="text-sm md:text-base lg:text-lg">
                  Save $1470 and get all 40 Packs!
                </h3>
              </div>

              <div
                className="hero my-2"
                style={{
                  backgroundImage: "url(https://imgbb.host/images/jnaFr.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-45 rounded-xl"></div>
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row justify-between  gap-72 items-center">
                    <div className="flex gap-4 md:gap-8 mt-8 md:mt-8">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        $675
                      </h1>
                      <span className="text-xl md:text-3xl lg:text-4xl line-through">
                        $2145
                      </span>
                    </div>
                    <div>
                      <button className="mt-4 md:mt-0 py-2 px-4 rounded-xl border-2 hover:bg-pink-500 hover:border-pink-600">
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
            <div className="bg-red-500 p-4 md:p-6 lg:p-8 rounded-xl text-white">
              <div className="flex flex-col md:flex-row items-center justify-between my-2">
                <div className="flex mb-4 md:mb-0">
                  <h2 className="text-xl md:text-2xl lg:text-3xl rounded-full border-white bg-sky-900 font-bold p-2 mr-2">
                    Ae
                  </h2>
                  <h2 className="text-xl md:text-2xl lg:text-3xl rounded-full border-white bg-sky-900 font-bold p-2">
                    Pr
                  </h2>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl">
                    20,000 + Template
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">
                  Get 30 Pack Template Bundle
                </h1>
                <h3 className="text-sm md:text-base lg:text-lg">
                  Save $1470 and get all 40 Packs!
                </h3>
              </div>

              <div
                className="hero my-2"
                style={{
                  backgroundImage: "url(https://imgbb.host/images/jnaFr.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-45 rounded-xl"></div>
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-72">
                    <div className="flex gap-4 md:gap-8 mt-8 md:mt-8">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        $545
                      </h1>
                      <span className="text-xl md:text-3xl lg:text-4xl line-through">
                        $1660
                      </span>
                    </div>
                    <div>
                      <button className="mt-4 md:mt-0 py-2 px-4 rounded-xl border-2 hover:bg-pink-500 hover:border-pink-600">
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
            <div className="bg-green-500 p-4 md:p-6 lg:p-8 rounded-xl text-white">
              <div className="flex flex-col md:flex-row items-center justify-between my-2">
                <div className="flex mb-4 md:mb-0">
                  <h2 className="text-xl md:text-2xl lg:text-3xl rounded-full border-white bg-sky-900 font-bold p-2 mr-2">
                    Ae
                  </h2>
                  <h2 className="text-xl md:text-2xl lg:text-3xl rounded-full border-white bg-sky-900 font-bold p-2">
                    Pr
                  </h2>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl lg:text-3xl">
                    20,000 + Template
                  </h3>
                </div>
              </div>
              <div>
                <h1 className="text-2xl md:text-4xl lg:text-5xl">
                  Get 30 Pack Template Bundle
                </h1>
                <h3 className="text-sm md:text-base lg:text-lg">
                  Save $1470 and get all 40 Packs!
                </h3>
              </div>

              <div
                className="hero my-2"
                style={{
                  backgroundImage: "url(https://imgbb.host/images/jnaFr.png)",
                }}
              >
                <div className="hero-overlay bg-opacity-45 rounded-xl"></div>
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex flex-col md:flex-row justify-between items-center gap-72">
                    <div className="flex gap-4 md:gap-8 mt-8 md:mt-8">
                      <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
                        $545
                      </h1>
                      <span className="text-xl md:text-3xl lg:text-4xl line-through">
                        $1660
                      </span>
                    </div>
                    <div>
                      <button className="mt-4 md:mt-0 py-2 px-4 rounded-xl border-2 hover:bg-pink-500 hover:border-pink-600">
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
