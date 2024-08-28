import { CiCircleCheck } from 'react-icons/ci';
import playButton from '../../assets/images/productDetails/Button - Play → SVG.svg'
import image from '../../assets/images/productDetails/Image.png'
import image1 from '../../assets/images/productDetails/Image (1).png'
import Overview from './Overview';

const VideoAndFeatures = () => {
    return (
        <div className='flex gap-6 mt-10'>
            {/* Right site */}
            <div className="">

                <div className=" md:w-[800px] xl:[1000px]">
                    <div className=' flex gap-5'>
                        <div className='relative w-1/2'>
                            <img src={image1} alt="" className="w-full h-auto rounded-lg object-cover" />
                            <button className="absolute inset-0 flex items-center justify-center">
                                <img className='w-14' src={playButton} alt="play button" />
                            </button>
                        </div>
                        <div className='relative w-1/2'>
                            <img src={image} alt="" className="rounded-lg w-full h-auto object-cover" />
                            <button className=" absolute inset-0 flex items-center justify-center">
                                <img className='w-14' src={playButton} alt="play button" />
                            </button>
                        </div>
                    </div>

                    <Overview />
                </div>


            </div>

            {/* left site */}
            <div className='md:w-[357px]'>
                <div className=" p-5 border rounded-[10px]" style={{ boxShadow: '0px 1px 3px 0px rgba(13, 13, 18, 0.05), 0px 1px 2px 0px rgba(13, 13, 18, 0.04)' }}>
                    <h2 className='text-[24px] font-medium font-inter text-gray-900'>Features</h2>
                    <div className="mt-3 font-inter text-sm space-y-4 font-medium">
                        <p className='flex gap-2 items-center'><CiCircleCheck className='text-xl text-primary' /> 1500+ Transitions for Premiere Pro </p>
                        <p className='flex gap-2 items-center'><CiCircleCheck className='text-xl text-primary' /> Premiere Pro MotionDuck Extension </p>
                        <p className='flex gap-2 items-center'><CiCircleCheck className='text-xl text-primary' /> Works with any FPS </p>
                        <p className='flex gap-2 items-center'><CiCircleCheck className='text-xl text-primary' /> 1Premiere Pro CC 2021 (15.0.0) and Above </p>
                        <p className='flex gap-2 items-center'><CiCircleCheck className='text-xl text-primary' /> Lifetime Unlimited license for all your projects. </p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default VideoAndFeatures;