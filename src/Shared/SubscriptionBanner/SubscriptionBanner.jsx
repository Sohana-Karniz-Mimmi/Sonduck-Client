
import duksImg from '../../../public/Subs-images/duksImg.png'
import subsCollection from '../../../public/Subs-images/SubsBanner.png'
import banner from '../../../public/Subs-images/image.png'

const SubscriptionBanner = () => {
    return (
        <div className={`w-full relative h-[778px] z-0 overflow-hidden bg-gradient-to-t from-[#070707] to-[#ffffff] rounded-b mb-96`}>
            <img className='w-full bg-gradient-to-t from-[#080808] to-[#ffffff] absolute' src={banner} alt="" />
            <div className={`w-[100%] relative bg-top h-[900px] z-10 overflow-hidden bg-[url('../../../public/Subs-images/icons.png')] bg-no-repeat bg-cover`}>
                    
                <img className='w-full opacity-10 absolute' src={duksImg} alt="" />

                <div className="flex flex-col items-center mt-40 gap-14 w-full h-full">

                    <h1 className="text-[64px] inter font-semibold text-transparent bg-gradient-to-b from-[#FFFFFF] to-[#949494] bg-clip-text">Subscription</h1>
                    <img className='' src={subsCollection} alt="" />

                </div>
                
            </div>
        </div>
    );
};

export default SubscriptionBanner;
