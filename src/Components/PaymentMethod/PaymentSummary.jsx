import { IoCloseCircleOutline, IoCloudDownloadOutline } from "react-icons/io5";
import { RiCustomerService2Fill, RiDeleteBin5Line } from "react-icons/ri";
import { SlLock } from "react-icons/sl";

const PaymentSummary = () => {
    return (

        <div style={{
            boxShadow:
                '0px 1px 3px 0px rgba(13, 13, 18, 0.05), 0px 1px 2px 0px rgba(13, 13, 18, 0.04)',
        }} className="w-[480px] py-5 px-6 bg-white inter rounded-[10px]">
            <div>
                <h2 className="text-xl font-semibold pb-6">Summary</h2>
                <div className="border-b-2 pb-6">
                    <div className="flex justify-between items-center pb-[14px]">
                        <h2 className="inter font-medium">1500+ Transitions Premiere Pro...</h2>
                        <h2 className=" font-semibold inter text-[#FF689A]">$48.00</h2>
                    </div>
                    <div className="flex justify-between items-center">
                        <h2 className="inter font-medium">1500+ Transitions Premiere Pro...</h2>
                        <h2 className=" font-semibold inter text-[#FF689A]">$48.00</h2>
                    </div>
                </div>

                <div className="flex justify-between items-center py-5">
                    <h2 className="inter">Subtotal</h2>
                    <h2 className="text-lg font-semibold inter text-[#FF689A]">$96.00</h2>
                </div>
                <button className="btn w-full border-[#FF387A] bg-[#FF387A] text-sm inter font-semibold text-white hover:bg-[#FF387A] hover:text-white hover:border-[#FF387A]">Continue to Checkout</button>
                <div className="mt-6 flex gap-2 pt-5 border-t-2">
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
            </div>
        </div>
    );
};

export default PaymentSummary;