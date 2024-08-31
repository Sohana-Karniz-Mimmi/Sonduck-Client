import { useEffect, useState } from "react";

const SinglePack = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./public/product.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
    console.log(cards);
  }, []);
  return (
    <div>
      <h2 className="text-4xl">Get Single Packs</h2>
      <div>
        <div className="flex my-2">
          <h2 className="border-2 mr-2 py-2 px-4">All</h2>
          <h2 className="border-2 mr-2 py-2 px-4 text-pink-500">
            After Effects
          </h2>
          <h2 className="border-2 py-2 px-4">Premiere Pro</h2>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default SinglePack;
