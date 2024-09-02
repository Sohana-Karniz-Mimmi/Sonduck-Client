import { IoCloseCircleOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { RiCustomerService2Fill, RiDeleteBin5Line } from "react-icons/ri";
import { SlLock } from "react-icons/sl";

const NavCard = () => {
    return (
        <div>
            <div
                className=" z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white 100 w-[400px] p-6 absolute top-[68px] inset-y-0 right-0 transform ">
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-medium text-xl">Cart</h2>
                            <span className="p-.5 px-1.5 text-sm rounded-full bg-gray-100 font-medium">3</span>
                        </div>
                        <IoCloseCircleOutline className="text-xl cursor-pointer" />

                    </div>
                    <div style={{ borderBottom: '1px solid #ddd' }} className="flex gap-3 pt-5 pb-4">
                        <div className="avatar">
                            <div className="w-[72px] h-[72px] rounded-xl">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="px-3">
                            <h2 className="font-inter text-2xl font-semibold pb-3">1500+ Transitions...</h2>
                            <div className="flex justify-between items-center">
                                <h2 className="font-inter text-xl font-medium">$48</h2>
                                <RiDeleteBin5Line className="text-red-600 text-xl cursor-pointer" />
                            </div>
                        </div>
                    </div>
                    <div className="flex gap-3 pt-6">
                        <div className="avatar">
                            <div className="w-[72px] h-[72px] rounded-xl">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                            </div>
                        </div>
                        <div className="px-3">
                            <h2 className="font-inter text-2xl font-semibold pb-3">1500+ Transitions...</h2>
                            <div className="flex justify-between items-center">
                                <h2 className="font-inter text-xl font-medium">$48</h2>
                                <RiDeleteBin5Line className="text-red-600 text-xl" />
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <div className="flex gap-2 pb-5 border-b-2">
                        <div className="text-center">
                            <button className=" mb-2 text-2xl p-[10px] rounded-full border border-gray-200 bg-gray-50"> <IoCloudDownloadOutline className="text-xl font-bold" /> </button>

                            <h2 className="font-semibold text-sm"> DOWNLOAD RIGHT AWAY</h2>
                        </div>
                        <div className="text-center">
                            <button className="mb-2 text-2xl p-[10px] rounded-full border border-gray-200 bg-gray-50"> <SlLock className="text-xl font-bolt " /> </button>
                            <h2 className="font-semibold text-sm">SAFE
                                CHECKOUT</h2>
                        </div>
                        <div className="text-center">
                            <button className="mb-2 text-2xl p-[10px] rounded-full border border-gray-200 bg-gray-50"> <RiCustomerService2Fill className="text-xl font-bold" /> </button>
                            <h2 className="font-semibold text-sm">CUSTOMER
                                SUPPORT</h2>
                        </div>
                    </div>
                    <div className="flex justify-between items-center py-5">
                        <h2 className="inter">Subtotal</h2>
                        <h2 className="text-lg font-semibold inter text-[#FF689A]">$96.00</h2>
                    </div>
                    <button className="btn w-full border-[#FF387A] bg-[#FF387A] text-sm inter font-semibold text-white hover:bg-[#FF387A] hover:text-white hover:border-[#FF387A]">Continue to Checkout</button>
                </div>


            </div>
        </div>
    );
};

export default NavCard;