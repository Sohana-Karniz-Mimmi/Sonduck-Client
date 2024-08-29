import image from '../../assets/images/productDetails/Fetures/BG-1.jpg.png'
import image1 from '../../assets/images/productDetails/Fetures/Category-Backgrounds-1.jpg.png'
import image2 from '../../assets/images/productDetails/Fetures/HiTech-1.jpg.png'
import image3 from '../../assets/images/productDetails/Fetures/HiTech1.gif.png'
import image4 from '../../assets/images/productDetails/Fetures/image 9.png'
import image5 from '../../assets/images/productDetails/Fetures/MGPP-Extension.gif.png'

const Features = () => {
    return (
        <div className="relative md:w-[800px] xl:[1000px]">
            <div className="">
                <img src={image4} alt="" className="w-full h-auto object-cover" />
                <div className="my-6 md:w-[800px] xl:[1000px]">
                    <div>
                        <p className="text-base text-[#171717] font-inter mb-4">What resolution projects are supported</p>
                        <p className="text-base text-[#171717] font-inter">

                            Handy Seamless Transitions support any resolution of your project. Starting with the
                            minimum and ending with a full 4K! In fact, - these transitions are resizable. Moreover,
                            transitions will work with any aspect ratio in the frame, such as portrait 9:16
                        </p>
                    </div>
                </div>
            </div>
            <div className="space-y-5 mt-6">
            <img src={image5} alt="" className="w-full h-auto object-cover" />
            <img src={image2} alt="" className="w-full h-auto object-cover" />
            <img src={image3} alt="" className="w-full h-auto object-cover" />
            <img src={image1} alt="" className="w-full h-auto object-cover" />
            <img src={image} alt="" className="w-full h-auto object-cover" />
            </div>
        </div>
    );
};

export default Features;