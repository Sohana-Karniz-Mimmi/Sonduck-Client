
import Container from "../../Shared/Container";
import BannerFeatured from "../../Shared/SubscriptionBanner/BannerFeatured";
import SubscriptionBanner from "../../Shared/SubscriptionBanner/SubscriptionBanner";

const Subscription = () => {
    return (
        <Container>
            <div className="relative">
                <SubscriptionBanner/>
                <BannerFeatured/>
            </div>
        </Container>
    );
};

export default Subscription;
