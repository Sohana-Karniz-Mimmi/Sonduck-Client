
import { Button, Checkbox, Input } from "@material-tailwind/react";
import duckImg from "../../../public/NavImages/blackTextLogo.png";
import facebook from "../../../public/Icons/facebook.png";
import { FcGoogle } from "react-icons/fc";
import { IoMdEye, IoMdEyeOff } from "react-icons/io";
import { useState } from "react";

const SignUp = () => {

  const [eye , setEye] = useState(false) ;

  const handleModal = () => {
    document.getElementById('my_modal_4').close() ;
    document.getElementById('my_modal_3').showModal() ;
  }

  return (
    <div>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box text-black bg-transparent relative h-[777px] w-[600px]">
            
          <div className="bg-white h-[700px] rounded-lg p-10">

            <div className="flex flex-col items-center justify-center">
              <img src={duckImg} className="mb-7" alt="" />
              <h1 className="gro text-2xl font-semibold mb-2">Great to see you here !</h1>
              <p className="gro text-lg font-medium text-center w-[300px] ">It’s free to create an account a Already have an account ? 
                <span 
                  onClick={() => handleModal()} 
                  className="text-[#FF689A] cursor-pointer">Log in
                </span>
                </p>
            </div>

            <form className="w-full mt-10 flex flex-col gap-5">

              <Input name="name" label="Full Name" required/>
              <Input name="email" label="Email Address" required/>
              <div className="relative">
                {eye ? (
                  <IoMdEyeOff
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                  />
                ) : (
                  <IoMdEye
                    onClick={() => setEye(!eye)}
                    className="cursor-pointer text-2xl absolute z-10 top-[10px] right-2"
                  />
                )}
                <Input
                  className="z-0"
                  type={eye ? "text" : "password"}
                  name="password"
                  label="Password"
                  size="lg"
                  required
                />
              </div>
              <div className="">
                <Checkbox
                  onClick={() => setRemember(!remember)}
                  label="Turms & Condition"
                />
              </div>
              <input type="submit" value={"Sign Up"} className="btn bg-[#FF689A] text-white hover:bg-transparent border border-[#FF689A] hover:text-[#FF689A] hover:border-[#FF689A] gro"/>

            </form>

            <div className="divider text-base gro mt-7">Or Sign Up With</div>

            <div className="flex items-center justify-between gap-3 mt-6">
              <Button className="w-full gro capitalize text-base bg-[#FAFAFA] border text-black shadow-none flex gap-3 items-center justify-center"><FcGoogle className="text-xl"/> Google</Button>
              <Button className="w-full gro capitalize text-base bg-[#FAFAFA] border text-black shadow-none flex gap-3 items-center justify-center"><img src={facebook} className="w-[22px] h-[20px]"/> FaceBook</Button>
            </div>

          </div>

          
          <form method="dialog" className="absolute bottom-12 left-[55%]">
            <button className="btn btn-sm btn-circle absolute right-2 top-2">✕</button>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default SignUp;
