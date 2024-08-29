
import Features from '../Components/SubscriptionPageComponents/Features'
import HeroSection from '../Components/SubscriptionPageComponents/HeroSection'
import MotionDuckSection from '../Components/SubscriptionPageComponents/MotionDuckSection'
import Pricing from '../Components/SubscriptionPageComponents/Pricing'

const SubscriptionPage = () => {
  return (
    <div>
      <HeroSection/>
      <Pricing/>
      <MotionDuckSection/>
      <Features/>
    </div>
  )
}

export default SubscriptionPage