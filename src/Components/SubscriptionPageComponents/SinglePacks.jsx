
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const SinglePacks = () => {

    const {data} = useQuery({
        queryKey : ['singlePacksdata'] ,
        queryFn : async () => {
            const {data} = await axios.get('/product.json') ;
            return data ;
        }
    })

    return (
        <div className="flex flex-col items-start gap-5 mt-10 w-[1250px] mx-auto">
            
            <div className="mb-8">
                <h1 className="gro text-5xl font-semibold text-black">Get Single Packs</h1>
                <div className="flex items-center gap-5 mt-14">
                    <button className="btn btn-outline gro capitalize text-lg border hover:bg-transparent hover:text-[#FF689A] hover:border-[#FF689A]">All</button>
                    <button className="btn btn-outline gro capitalize text-lg border hover:bg-transparent hover:text-[#FF689A] hover:border-[#FF689A]">After Effects</button>
                    <button className="btn btn-outline gro capitalize text-lg border hover:bg-transparent hover:text-[#FF689A] hover:border-[#FF689A]">Premiere Pro</button>
                </div>
            </div>

            <div className="grid grid-cols-3 gap-6 w-full mb-10">
                {
                    data?.map((item) => <div className="border w-full rounded-2xl border-[#FF689A]" key={item?.image}>
                            <img src={item?.image} className="mx-auto w-full" alt="" />
                            <div className="px-3">
                                
                                <h1 className="gro text-xl font-semibold my-3">{item?.name}</h1>
                                <div className="flex items-center justify-between">
                                    <p className="gro text-xl text-[#FF689A] font-semibold my-3">{item?.price}</p>
                                    <img src={item?.icon} className="cursor-pointer" alt="" />
                                </div>
                            </div>
                    </div>)
                }
            </div>

            <button className="btn btn-outline gro capitalize text-lg border hover:text-white hover:border-white hover:bg-[#FF689A] text-[#FF689A] border-[#FF689A] mx-auto mb-10">View All</button>

        </div>
    );
};

export default SinglePacks;
