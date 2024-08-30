
import Features from '../Components/SubscriptionPageComponents/Features'
import HeroSection from '../Components/SubscriptionPageComponents/HeroSection'
import MotionDuckSection from '../Components/SubscriptionPageComponents/MotionDuckSection'
import Pricing from '../Components/SubscriptionPageComponents/Pricing'
import SinglePackSlider from '../Components/SubscriptionPageComponents/SinglePackSlider'

const SubscriptionPage = () => {
  return (
    <div>
      <HeroSection/>
      <Pricing/>
      <MotionDuckSection/>
      <Features/>
      <div className="bg-[#F8F8F8] mb-20">
        <SinglePackSlider/>
      </div>
    </div>
  )
}

export default SubscriptionPage