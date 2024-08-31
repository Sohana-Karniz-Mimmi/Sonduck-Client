import { IoCloseCircleOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { RiCustomerService2Fill, RiDeleteBin5Line } from "react-icons/ri";
import { SlLock } from "react-icons/sl";

const NavCard = () => {
    return (
        <div>
            <div
                className=" z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-white 100 w-[400px] p-6 absolute inset-y-0 right-0 transform ">
                <div>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <h2 className="font-medium text-xl">Cart</h2>
                            <span className="p-.5 px-1.5 text-sm rounded-full bg-gray-100 font-medium">3</span>
                        </div>
                        <IoCloseCircleOutline className="text-xl" />

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
                                <RiDeleteBin5Line className="text-red-600 text-xl" />
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
                    <div className="">
                    <span className="text-2xl p-5 rounded-full border-b border-gray-200 bg-gray-200"> </span>
                         <IoCloudDownloadOutline  />
                        <h2 className=""> DOWNLOAD RIGHT AWAY</h2>
                    </div>
                    <div className="">
                        <h2 className=""><SlLock className="text-2xl" /></h2>
                        <h2 className="">SAFE
                        CHECKOUT</h2>
                    </div>
                    <div className="">
                        <h2 className=""><RiCustomerService2Fill className="text-2xl" /></h2>
                        <h2 className="">CUSTOMER
                        SUPPORT</h2>
                    </div>
                </div>
                {/* <div className="max-w-sm mx-auto p-4 bg-white shadow-lg rounded-lg">
                    <div className="flex justify-between mb-4">
                        <div className="flex flex-col items-center">
                            <IoCloudDownloadOutline className="" />
                            <span className="text-sm text-gray-700">DOWNLOAD RIGHT AWAY</span>
                        </div>
                    </div>
                </div> */}


            </div>
        </div>
    );
};

export default NavCard;