
import AccessPassSec from '../Components/SubscriptionPageComponents/AccessPassSec'
import Discover from '../Components/SubscriptionPageComponents/Discover'
import Features from '../Components/SubscriptionPageComponents/Features'
import FrequentlyAsk from '../Components/SubscriptionPageComponents/FrequentlyAsk'
import HeroSection from '../Components/SubscriptionPageComponents/HeroSection'
import MotionDuckSection from '../Components/SubscriptionPageComponents/MotionDuckSection'
import Pricing from '../Components/SubscriptionPageComponents/Pricing'
import SinglePacks from '../Components/SubscriptionPageComponents/SinglePacks'
import SinglePackSlider from '../Components/SubscriptionPageComponents/SinglePackSlider'

const SubscriptionPage = () => {
  return (
    <div>
      <HeroSection/>
      <Pricing/>
      <MotionDuckSection/>
      <Features/>
      <div className="bg-[#dddddd]">
        <SinglePackSlider/>
        <SinglePacks/>
        <AccessPassSec/>
      </div>
      <FrequentlyAsk/>
      <Discover/>
    </div>
  )
}

export default SubscriptionPage