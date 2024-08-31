
import Img1 from '../../../public/Subs-images/manImg1.png'
import Img2 from '../../../public/Subs-images/manImg2.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Discover = () => {
    return (
        <div className="py-20 px-32 bg-[#dddddd] flex flex-col items-center gap-14">
            
            <div className="grid grid-cols-2 gap-11 w-full">
                <h1 className="w-[577px] gro text-5xl text-black font-semibold">Discover What Our Community Is Saying</h1>
                <p className="w-[577px] gro text-xl text-black">At Sonduck, our vibrant community of learners and creators is at the heart of what we do. Hear directly from those who have experienced the transformative journey of learning and creating on our platform. Explore testimonials that reflect the diverse perspectives of enthusiastic learners and accomplished creators.</p>
            </div>

            <div className="w-full overflow-hidden"> 
                 
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                    >

                    <SwiperSlide>
                        <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
                            <img src={Img1} className='rounded-full mb-5' alt="" />
                            <h1 className="gro text-xl font-semibold ">Sarah M.</h1>
                            <p className="gro text-lg">Enthusiastic Learner</p>
                            <p className="gro ">Sonduck has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
                            <img src={Img2} className='rounded-full mb-5' alt="" />
                            <h1 className="gro text-xl font-semibold ">James L.</h1>
                            <p className="gro text-lg">Lifelong Learner</p>
                            <p className="gro ">I've tried several online learning platforms, and Sonduck stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
                            <img src={Img1} className='rounded-full mb-5' alt="" />
                            <h1 className="gro text-xl font-semibold ">Alex B.</h1>
                            <p className="gro text-lg">Inspired Creator</p>
                            <p className="gro ">As a creator, Sonduck has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
                            <img src={Img2} className='rounded-full mb-5' alt="" />
                            <h1 className="gro text-xl font-semibold ">Alex B.</h1>
                            <p className="gro text-lg">Inspired Creator</p>
                            <p className="gro ">As a creator, Sonduck has been a game-changer for me. The Course Editor is user-friendly, and the support from the community is incredible. It's fulfilling to see my courses making a positive impact on learners globally.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
                            <img src={Img1} className='rounded-full mb-5' alt="" />
                            <h1 className="gro text-xl font-semibold ">Sarah M.</h1>
                            <p className="gro text-lg">Enthusiastic Learner</p>
                            <p className="gro ">Sonduck has transformed my approach to learning. The diverse range of courses and the quality of content provided by creators have exceeded my expectations. The platform truly fosters a sense of community and lifelong learning.</p>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="p-6 rounded-lg bg-white flex flex-col items-start gap-1">
                            <img src={Img2} className='rounded-full mb-5' alt="" />
                            <h1 className="gro text-xl font-semibold ">James L.</h1>
                            <p className="gro text-lg">Lifelong Learner</p>
                            <p className="gro ">I've tried several online learning platforms, and Sonduck stands out for its vibrant community and the variety of courses available. The easy navigation and engaging content make it a go-to platform for continuous skill development.</p>
                        </div>
                    </SwiperSlide>

                </Swiper>

            </div>

        </div>
    );
};

export default Discover;
