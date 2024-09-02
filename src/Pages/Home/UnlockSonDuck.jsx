import image from "../../assets/images/unlock/Desktop.png";
import duck1 from "../../assets/images/unlock/Image (3).png";
import duck2 from "../../assets/images/unlock/Image (4).png";
const UnlockSonDuck = () => {
  return (
    <div className="mt-12 bg-black">
      <div className="text-center text-white p-8">
        <h1 className="text-5xl font-bold my-4">
          Unlock Your Potential as a <br />
          <span className="text-pink-400">Creator</span> with Sonduck
        </h1>
        <p className="">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. <br />{" "}
          Utilize our Course Editor, and showcase your expertise by publishing
          your finest course on the Sonduck Course Library.
        </p>
        <div className="text-center my-8">
          <button className="py-2 px-4 rounded-xl text-white bg-pink-600 hover:bg-pink-300 hover:border-pink-200 border hover:mt-2 hover:scale-95">
            Browse All
          </button>
        </div>
        {/* <div className="">
          <img src={duck1} alt="" />
        </div> */}
      </div>
      <div className="flex  justify-center">
        <img className="" src={image} alt="" />
      </div>
    </div>
  );
};

export default UnlockSonDuck;
