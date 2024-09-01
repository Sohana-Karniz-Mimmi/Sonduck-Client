
import Img1 from "../../../public/Subs-images/manImg1.png";
import Img2 from "../../../public/Subs-images/manImg2.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import TestimonialCard from "../../Pages/Home/TestImonialCard";

const Discover = () => {
  return (
    <div className="py-10 px-4 md:px-16 lg:px-32 bg-[#dddddd] flex flex-col items-center gap-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-11 w-full">
        <h1 className="text-3xl md:text-4xl lg:text-5xl gro text-black font-semibold w-[577px]">
          Discover What Our Community Is Saying
        </h1>
        <p className="text-base md:text-lg lg:text-xl text-black">
          At Sonduck, our vibrant community of learners and creators is at the
          heart of what we do. Hear directly from those who have experienced the
          transformative journey of learning and creating on our platform.
          Explore testimonials that reflect the diverse perspectives of
          enthusiastic learners and accomplished creators.
        </p>
      </div>

      <div className="w-full">
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          grabCursor={true}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <TestimonialCard
              imgSrc={Img1}
              name="Sarah M."
              role="Enthusiastic Learner"
              testimonial="Sonduck has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              imgSrc={Img2}
              name="James L."
              role="Lifelong Learner"
              testimonial="I've tried several online learning platforms, and Sonduck stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              imgSrc={Img1}
              name="Alex B."
              role="Inspired Creator"
              testimonial="As a creator, Sonduck has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              imgSrc={Img2}
              name="Alex B."
              role="Inspired Creator"
              testimonial="As a creator, Sonduck has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally."
            />
          </SwiperSlide>

          <SwiperSlide>
            <TestimonialCard
              imgSrc={Img1}
              name="Sarah M."
              role="Enthusiastic Learner"
              testimonial="Sonduck has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning."
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Discover;
