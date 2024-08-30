
import duck2Img from '../../../public/Subs-images/duck2Img.png'

const Features = () => {
    return (
        <div className="bg-[#171717] flex flex-col items-center gap-5 mb-14 overflow-hidden h-[905px] w-[957px] mx-auto rounded-lg">
            
            <h1 className="gro text-4xl font-semibold text-white my-16">Features</h1>

            <div className="grid grid-cols-2 gap-5 gap-y-5 w-full px-10">

                <div className="w-full h-full flex items-start gap-3">
                    <div className="bg-[#FF689A] w-8 h-8 rounded-full"></div>
                    <div className="text-xl text-white inter w-[400px]">
                        <h1 className="font-semibold">Preview All Templates - {' '}
                            <span className="font-normal">
                                Quickly browse and watch every <br />
                                template with the MotionDuck Extension <br /> before applying a <br />
                                template.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="w-full h-full flex items-start gap-3">
                    <div className="bg-[#FF689A] w-8 h-8 rounded-full"></div>
                    <div className="text-xl text-white inter w-[400px]">
                        <h1 className="font-semibold">New Pack Notifications - {' '}
                            <span className="font-normal">
                                You will be notified when new <br />
                                templates are created from us within the <br /> MotionDuck Extension.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="w-full h-full flex items-start gap-3">
                    <div className="bg-[#FF689A] w-8 h-8 rounded-full"></div>
                    <div className="text-xl text-white inter w-[400px]">
                        <h1 className="font-semibold">After Effects & Premiere Pro - {' '}
                            <span className="font-normal">
                                Our Extension and templates <br />
                                work with both After Effects and Premiere <br /> Pro.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="w-full h-full flex items-start gap-3">
                    <div className="bg-[#FF689A] w-8 h-8 rounded-full"></div>
                    <div className="text-xl text-white inter w-[400px]">
                        <h1 className="font-semibold">35,000+ Templates & More To Come - {' '}  <br />
                            <span className="font-normal">
                                Have access to all <br />
                                35,000+ templates and every single <br /> template we create in the <br />
                                future.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="w-full h-full flex items-start gap-3">
                    <div className="bg-[#FF689A] w-8 h-8 rounded-full"></div>
                    <div className="text-xl text-white inter w-[400px]">
                        <h1 className="font-semibold">Customizable Control - {' '}
                            <span className="font-normal">
                                Easily update and <br /> change your <br />
                                template to fit your needs within seconds.
                            </span>
                        </h1>
                    </div>
                </div>

                <div className="w-full h-full flex items-start gap-3">  
                    <div className="bg-[#FF689A] w-8 h-8 rounded-full"></div>
                    <div className="text-xl text-white inter w-[400px]">
                        <h1 className="font-semibold">Quick Install - {' '}
                            <span className="font-normal">
                                Download and install any <br /> pack within After <br />
                                Effects or Premiere Pro with the <br /> MotionDuck Extension.
                            </span>
                        </h1>
                    </div>
                </div>

            </div>

            <div className="">
                <img className='filter saturate-0 brightness-50' src={duck2Img} alt="" />
            </div>

        </div>
    );
};

export default Features;
