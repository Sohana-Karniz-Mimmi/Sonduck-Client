
const SingleCard = ({ card }) => {
  const { name, image, icon, price } = card;
  return (
    <div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10">
        <div className="card card-compact bg-base-100 shadow-xl max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
          <figure>
            <img
              src={image}
              alt={name}
              className="w-full h-auto object-cover"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-lg sm:text-x md:text-l lg:text-xl">
              {name}
            </h2>
            <div className="flex justify-between items-center">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-pink-500">
                {price}
              </p>
              <img
                className="text-sm sm:text-base md:text-lg lg:text-xl"
                src={icon}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCard;
