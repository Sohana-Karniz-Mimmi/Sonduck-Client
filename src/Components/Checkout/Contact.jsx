import { IoIosArrowBack } from "react-icons/io";
import Container from "../../Shared/Container";
import Summary from "./Summary";
import { TbNotes, TbSmartHome } from "react-icons/tb";
import { MdOutlinePayment } from "react-icons/md";

const Contact = () => {
    return (
        <Container>
            <div className="bg-gray-50 inter">
                <button className="btn hover:border-gray-200 border-gray-200 hover:bg-white text-black hover:text-black flex gap-2 bg-white rounded-[6px] my-6"><IoIosArrowBack /> Back</button>
                <div className="">

                    <div className="flex gap-6">
                        <div className="w-full">
                            <div className="flex justify-between items-center">

                                <div className="text-center">

                                    <button className="p-[10px] rounded-full border  bg-[#FF387A]"><TbSmartHome className="text-xl text-white font-bold" /></button>

                                    <h2 className="font-medium text-base mt-2"> Detail</h2>
                                </div>

                                <div className="text-center">

                                    <button className="p-[10px] rounded-full border border-gray-300 bg-white"><MdOutlinePayment className="text-xl font-bold" /></button>

                                    <h2 className="font-medium text-base mt-2"> Payment Method</h2>
                                </div>

                                <div className="text-center">

                                    <button className="p-[10px] rounded-full border border-gray-300 bg-white"><TbNotes className="text-xl font-bold" /></button>

                                    <h2 className="font-medium text-base mt-2"> Review</h2>
                                </div>

                            </div>

                            <div style={{
                                boxShadow:
                                    '0px 1px 3px 0px rgba(13, 13, 18, 0.05), 0px 1px 2px 0px rgba(13, 13, 18, 0.04)',
                            }} className="my-5 bg-white rounded-[20px] border border-gray-100 p-5">
                                <h2 className="font-semibold text-2xl pb-6">Contact Info</h2>
                                <div className="text-sm font-medium">
                                    <h2>Email</h2>
                                    <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="sonduck@gamil.com" />
                                </div>
                            </div>
                            <div style={{
                                boxShadow:
                                    '0px 1px 3px 0px rgba(13, 13, 18, 0.05), 0px 1px 2px 0px rgba(13, 13, 18, 0.04)',
                            }} className="mb-5 bg-white rounded-[20px] border border-gray-100 p-5">
                                <h2 className="font-semibold text-2xl pb-6">Detail Address</h2>
                                <div className="space-y-4 text-sm font-medium">
                                    <div>
                                        <h2>Your name </h2>
                                        <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="Sohona Karniz" />
                                    </div>
                                    <div>
                                        <h2>Phone number</h2>
                                        <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="+88 01777-88889" />
                                    </div>
                                    <div>
                                        <h2>Country </h2>
                                        <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="Bangladesh" />
                                    </div>
                                    <div>
                                        <h2>Address </h2>
                                        <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="Patgram, Rangpur, Dhaka, Bangladesh" />
                                    </div>
                                    <div className="flex gap-3">
                                        <div>
                                            <h2>City </h2>
                                            <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="Rangpur" />
                                        </div>
                                        <div>
                                            <h2>Postal code </h2>
                                            <input disabled type="text" className="p-4 mt-1 bg-gray-50 border w-full border-gray-100 rounded-md" defaultValue="5654 6787" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Summary />
                        </div>
                    </div>



                </div>

            </div>
        </Container>
    );
};

export default Contact;