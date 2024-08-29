
import bannerImg from '../../../public/Subs-images/image.png'

const SubscriptionBanner = () => {
    return (
        <div className="w-full h-[778px] overflow-hidden my-20">
            <img className='w-full h-[1440px]' src={bannerImg} alt="" />
        </div>
    );
};

export default SubscriptionBanner;
