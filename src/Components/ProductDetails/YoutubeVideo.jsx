import playButton from '../../assets/images/productDetails/Button - Play → SVG.svg'
import image from '../../assets/images/productDetails/Image.png'
import image1 from '../../assets/images/productDetails/image 1.png'
import image2 from '../../assets/images/productDetails/image 2.png'
import image3 from '../../assets/images/productDetails/image 3.png'
import image4 from '../../assets/images/productDetails/image 4.png'
import image5 from '../../assets/images/productDetails/image 5.png'
import image6 from '../../assets/images/productDetails/image 6.png'
import image7 from '../../assets/images/productDetails/image 7.png'
import image8 from '../../assets/images/productDetails/image 8.png'


const YoutubeVideo = () => {




    return (
        <div className='flex gap-6 mt-10'>
            {/* Right site */}
            <div className="flex-3">

                <div className="relative md:w-[800px] xl:[1000px]">
                    <img src={image} alt="" className="w-full h-auto" />
                    <button className="absolute inset-0 flex items-center justify-center">
                        <img src={playButton} alt="play button" />
                    </button>
                </div>
                <div className='flex items-center gap-2 mt-5'>
                    <img className='cursor-pointer' src={image1} alt="" />
                    <img className='cursor-pointer' src={image2} alt="" />
                    <img className='cursor-pointer' src={image3} alt="" />
                    <img className='cursor-pointer' src={image4} alt="" />
                    <img className='cursor-pointer' src={image5} alt="" />
                    <img className='cursor-pointer' src={image6} alt="" />
                    <img className='cursor-pointer' src={image7} alt="" />
                    <img className='cursor-pointer' src={image8} alt="" />
                </div>


            </div>

            {/* left site */}
            <div className='md:w-[357px] flex-1'>
                <div className=" p-5 border rounded-[10px]" style={{ boxShadow: '0px 1px 3px 0px rgba(13, 13, 18, 0.05), 0px 1px 2px 0px rgba(13, 13, 18, 0.04)' }}>
                    <div className='flex justify-between items-center'>
                        <h2 className='text-slate-900 text-lg leading-7 font-bold font-plus'>
                            Price
                        </h2>
                        <div>
                            <span className='mr-2 text-right text-[32px] font-semibold text-primary font-inter'>$48</span>
                            <span className='text-right text-[24px] font-medium text-slate-600 font-inter'>$32</span>
                        </div>
                    </div>
                    <div className="py-6 border-b">
                        <button className='mb-3 w-full btn text-primary bg-transparent border-primary hover:bg-transparent hover:border-primary'>Add to cart</button>
                        <button className='w-full btn text-white bg-primary border-primary hover:bg-primary hover:border-primary'>Buy now</button>
                    </div>
                    <div className='mt-6'>
                        <div className='pb-4 flex justify-between items-center'>
                            <h2 className='text-[16px] leading-[24px] font-medium text-[#171717] font-inter'>
                                Compatibility
                            </h2>
                            <div>
                                <span className='text-right text-[16px] leading-[24px] font-normal text-[#475569] font-inter'>62.92 MB</span>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <h2 className='text-[16px] leading-[24px] font-medium text-[#171717] font-inter'>
                                File size
                            </h2>
                            <div>

                                <span className='text-right text-[16px] leading-[24px] font-normal text-[#475569] font-inter'>62.92 MB</span>
                            </div>
                        </div>
                    </div>

                </div>


                <div className='space-y-4 p-[32px] bg-[rgba(255,104,154,0.2)] mt-6'>
                    <h2 className='text-[16px] font-bold text-primary font-plus'>
                    Get Unlimited Access
                    </h2>
                    <p className="text-sm font-bold text-gray-600 font-plus">
                    Unlock this theme and get unlimited access to over 1000+ Premium templates.
                    </p>
                    <p className="text-sm font-semibold text-primary font-plus">Go Unlimited now</p>
                </div>
            </div>
        </div>
    );
};

export default YoutubeVideo;