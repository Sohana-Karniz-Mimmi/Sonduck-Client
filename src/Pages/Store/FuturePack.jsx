const FuturePack = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16">
      <div className="bg-pink-500 p-6 md:p-8 lg:p-10 rounded-xl mt-12">
        <div className="flex text-white font-bold space-x-4 mb-4">
          <h2 className="py-2 px-4 border-2 bg-purple-800 border-purple-400 rounded-xl">
            Pr
          </h2>
          <h2 className="py-2 px-4 border-2 bg-purple-800 border-purple-400 rounded-xl">
            Ae
          </h2>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-white text-center md:text-left">
            <h1 className="text-3xl md:text-4xl lg:text-5xl my-2">
              Motionduck All Access Pass Subscription
            </h1>
            <p className="text-sm md:text-base lg:text-lg">
              Unlimited Packs Get Every Pack We Have + Every Future Pack!
            </p>
            <button className="btn bg-pink-600 text-white my-2">
              Get Access
            </button>
          </div>
          <div className="w-full md:w-1/2 lg:w-1/3">
            <img
              src="/src/assets/images/store/Img.png"
              alt="Motionduck All Access"
              className="w-full h-auto object-cover rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FuturePack;
