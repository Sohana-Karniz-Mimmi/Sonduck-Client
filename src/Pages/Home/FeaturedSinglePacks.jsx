import { Swiper, SwiperSlide } from "swiper/react";
import Container from "../../Shared/Container";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import img1 from "../../assets/images/singlePacks/Img.png";
import img2 from "../../assets/images/singlePacks/Img.png";
import img3 from "../../assets/images/singlePacks/Img.png";
import img4 from "../../assets/images/singlePacks/Img.png";
import img5 from "../../assets/images/singlePacks/Img.png";
import img6 from "../../assets/images/singlePacks/Img.png";
import img7 from "../../assets/images/singlePacks/Img.png";
import img8 from "../../assets/images/singlePacks/Img.png";
import { useEffect, useState } from "react";
const FeaturedSinglePacks = () => {
  const [products, setProduct] = useState([]);
  useEffect(() => {
    fetch("./product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
    console.log(products);
  }, []);
  return (
    <div>
      <Container>
        <div className="px-4 md:px-8 lg:px-16 mt-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl my-2">
            Featured Single Packs
          </h1>
          <p className="text-sm md:text-base lg:text-lg my-4">
            Find what you need on Sonduck Film, Discover millions of video
            templated, stock footage, audio & more. All for one low cost.
          </p>
          <Swiper
            modules={[Pagination]}
            className="mySwiper"
            pagination={true}
            loop={true}
          >
            {products?.map((product) => (
              <SwiperSlide key={product?.id}>
                <div>
                  <div className="p-4 sm:p-6 md:p-8 lg:p-10">
                    <div className="card card-compact bg-base-100 shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                      <figure>
                        <img
                          src={product?.image}
                          alt={product?.name}
                          className="w-full h-auto object-cover"
                        />
                      </figure>
                      <div className="card-body">
                        <h2 className="card-title text-lg sm:text-x md:text-l lg:text-xl">
                          {product?.name}
                        </h2>
                        <div className="flex justify-between items-center">
                          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-500">
                            {product?.price}
                          </p>
                          <img
                            className="text-sm sm:text-base md:text-lg lg:text-xl"
                            src={product?.icon}
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="flex text-3xl">
            <IoIosArrowRoundBack />
            <IoIosArrowRoundForward />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FeaturedSinglePacks;
