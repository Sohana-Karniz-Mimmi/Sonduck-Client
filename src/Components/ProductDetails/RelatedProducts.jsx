import image from '../../assets/images/productDetails/Img.png'
import image1 from '../../assets/images/productDetails/Img (1).png'
import image2 from '../../assets/images/productDetails/Img (2).png'

const RelatedProducts = () => {
    return (
        <div>
            <h2 className="text-[32px] leading-[40px] font-semibold text-[#171717] font-inter mb-7" >Related products</h2>

            <div className="flex gap-6">
                <div>
                    <img src={image} alt="" />
                    <h2 className="text-[22px] my-3 font-semibold text-[#171717] font-inter overflow-hidden text-ellipsis">
                    1500+ Transitions Premiere Pr..
                    </h2>
                    <div>
                        <div>
                            <span className="mr-1 text-2xl font-semibold text-primary font-inter">$48</span>
                            <span className="text-lg text-gray-700 font-inter">$80</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image1} alt="" />
                    <h2 className="text-[22px] my-3 font-semibold text-[#171717] font-inter overflow-hidden text-ellipsis">
                    1500+ Transitions Premiere Pr..
                    </h2>
                    <div>
                        <div>
                            <span className="mr-1 text-2xl font-semibold text-primary font-inter">$48</span>
                            <span className="text-lg text-gray-700 font-inter">$80</span>
                        </div>
                    </div>
                </div>
                <div>
                    <img src={image2} alt="" />
                    <h2 className="text-[22px] my-3 font-semibold text-[#171717] font-inter overflow-hidden text-ellipsis">
                    1500+ Transitions Premiere Pr..
                    </h2>
                    <div>
                        <div>
                            <span className="mr-1 text-2xl font-semibold text-primary font-inter">$48</span>
                            <span className="text-lg text-gray-700 font-inter">$80</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default RelatedProducts;