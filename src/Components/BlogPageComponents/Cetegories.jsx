const Cetegories = () => {
  const cetegoryData = [
    {
      cetegory: "Davinci Resolve",
      dataLength: 20,
    },
    {
      cetegory: "After Effects",
      dataLength: 8,
    },
    {
      cetegory: "Graphic Design",
      dataLength: 12,
    },
    {
      cetegory: "Filmmaking",
      dataLength: 15,
    },
  ];
  return (
    <div>
      {/* this div for Cetegory post card  */}
      <h2 className="text-xl font-medium text-gray-900  mt-10 mb-10">Cetegory</h2>
      {cetegoryData.map((item, idx) => (
        <div className="border-b border-t py-5 space-y-2 flex justify-between items-center">
          <p className="text-base text-gray-900 font-medium">{item.cetegory}</p>
          <h3 className=" text-primary">
            ({item.dataLength})
          </h3>
        </div>
      ))}
    </div>
  );
};

export default Cetegories;
