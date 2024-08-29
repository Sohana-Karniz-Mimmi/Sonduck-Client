const Card = ({ card }) => {
  const { image, name, price, icon } = card;
  console.log(card);
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl ">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Name: {name}</h2>
          <div className="flex justify-between">
            <p>{price}</p>
            <p>{price}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
