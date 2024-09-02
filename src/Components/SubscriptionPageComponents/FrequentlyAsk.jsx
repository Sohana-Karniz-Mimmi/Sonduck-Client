
const FrequentlyAsk = () => {
    return (
        <div className="w-full bg-black py-20 px-40 flex flex-col items-center gap-5">
            
            <h1 className="gro text-5xl text-white font-semibold mb-16">Frequently asked questions</h1>

            <div className="flex gap-28 w-full mt-6 ml-40">

                <div className="">
                    <h1 className="gro text-3xl w-[390px] text-white font-semibold">Frequently asked questions</h1>
                    <p className="w-[390px] text-gray-500">Can’t find the answer you’re looking for? Reach out to our <span className="text-[#FF387A]">customer support</span>  team.</p>
                </div>

                <div className="w-full ml-0 flex flex-col gap-12">

                    <div className="flex w-full flex-col items-start gap-2">
                        <h1 className="inter text-xl text-white font-semibold">Does MotionDuck Work For MAC & PC?</h1>
                        <p className="text-gray-500">Yes, MotionDuck and every template will work on Mac and PC computers. The install process is simple and easy.</p>
                    </div>

                    <div className="flex w-full flex-col items-start gap-2">
                        <h1 className="inter text-xl text-white font-semibold">MotionDuck Licensing</h1>
                        <p className="text-gray-500">You may use all templates on any project you work on. Our license allows you to use MotionDuck templates on client, commercial, or personal projects, as many times as you like.</p>
                    </div>

                    <div className="flex w-full flex-col items-start gap-2">
                        <h1 className="inter text-xl text-white font-semibold">Can I Unsubscribe Anytime?</h1>
                        <p className="text-gray-500">You may unsubscribe at any moment by going to your account on sonduckfilm.com. Under the Subscriptions tab, click on cancel next to Action.</p>
                    </div>

                    <div className="flex w-full flex-col items-start gap-2">
                        <h1 className="inter text-xl text-white font-semibold">Customer Support</h1>
                        <p className="text-gray-500">If you have any questions or need any help with MotionDuck, we want to help you! You can visit our support page for a quick FAQ or you can email us at motionduckhelp@gmail.com.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default FrequentlyAsk;
