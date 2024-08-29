
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import motionDuckImg from "../../../public/Subs-images/motionDuck.png";
import ytImg from "../../../public/Subs-images/youtubeImg.webp";

const MotionDuckSection = () => {

    return (
        <div className="flex flex-col items-center gap-10 mb-14">
            
            <h1 className="gro text-4xl font-semibold text-black">What is MotionDuck ?</h1>

            <div className="flex items-center justify-between px-6 py-5 border rounded-lg w-[1150px]">
                
                <div className="flex flex-col items-start gap-4">
                    <h1 className="text-lg flex items-center gap-3 gro font-semibold">
                        <IoCheckmarkDoneCircleOutline className="text-[#FF689A] text-xl"/>
                        BROWSE AND PREVIEW EVERY TEMPLATE
                    </h1>
                    <h1 className="text-lg flex items-center gap-3 gro font-semibold">
                        <IoCheckmarkDoneCircleOutline className="text-[#FF689A] text-xl"/>
                        APPLY WITHIN ONE CLICK
                    </h1>
                    <h1 className="text-lg flex items-center gap-3 gro font-semibold">
                        <IoCheckmarkDoneCircleOutline className="text-[#FF689A] text-xl"/>
                        THEN UPDATE YOUR TEMPLATE
                    </h1>
                    <h1 className="text-lg flex items-center gap-3 gro font-semibold">
                        <IoCheckmarkDoneCircleOutline className="text-[#FF689A] text-xl"/>
                        DOWNLOAD EVERY PACK IN THE EXTENSION
                    </h1>
                    <h1 className="text-lg flex items-center gap-3 gro font-semibold">
                        <IoCheckmarkDoneCircleOutline className="text-[#FF689A] text-xl"/>
                        NO NEED TO LEAVE AE OR PREMIERE
                    </h1>
                    <h1 className="text-lg flex items-center gap-3 gro font-semibold">
                        <IoCheckmarkDoneCircleOutline className="text-[#FF689A] text-xl"/>
                        INSTANT INSTALL
                    </h1>
                </div>
                
                <div className="">
                    <img className="rounded" src={motionDuckImg} alt="img" />
                </div>

            </div>

            <h1 className="gro text-3xl font-semibold text-black">Save Time</h1>

            <div className="w-[539px] h-[324px] rounded-md">
                <button className="w-full h-full cursor-pointer" onClick={()=>document.getElementById('my_modal_4').showModal()}>
                    <img className="rounded-md w-full h-full" src={ytImg} alt="" />
                </button>
            </div>

            <dialog id="my_modal_4" className="modal">
                <div className="modal-box w-11/12 max-w-5xl bg-transparent shadow-none h-[470px]">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <iframe className="w-full h-[400px] mt-4 rounded" src="https://www.youtube.com/embed/F5o2FEMhNLo?si=Y_hKZkzQbzZqIGvC" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
            </dialog>

        </div>
    );
};

export default MotionDuckSection;
