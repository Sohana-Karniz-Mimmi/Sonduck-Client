import YoutubeVideo from "../Components/ProductDetails/YoutubeVideo";
import Container from "../Shared/Container";

const ProductDetails = () => {
    return (
        <div>
            <Container>
                <div className="my-10">
                    <h3 className="max-w-4xl text-gray-900 text-[48px] font-inter font-semibold leading-[56px]">Seamless Transitions Pack | 1500+ Transitions | Premiere Pro</h3>
                    <span className="text-lg font-inter">Category : </span>
                    <span className="text-primary font-inter border border-primary text-xs py-1.5 px-4 rounded-md font-semibold">Premiere Pro</span>
                </div>
                <div>
                    <YoutubeVideo></YoutubeVideo>
                </div>
            </Container>
        </div>
    );
};

export default ProductDetails;