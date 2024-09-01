import { useEffect, useState } from "react";
import SingleCard from "./SingleCard";
import Container from "../../Shared/Container";

const SinglePack = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("./public/product.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
    console.log(cards);
  }, []);
  return (
    <section>
      <div className="mt-12">
        <div className="px-4 md:px-8 lg:px-16">
          <h2 className="text-5xl my-4 ">Get Single Packs</h2>
          <div className="flex my-2 ">
            <h2 className="border-2 mr-2 py-2 px-4">All</h2>
            <h2 className="border-2 mr-2 py-2 px-4 text-pink-500">
              After Effects
            </h2>
            <h2 className="border-2 py-2 px-4">Premiere Pro</h2>
          </div>
        </div>

        <div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10">
            {cards?.slice(0, 6)?.map((card) => (
              <SingleCard key={card?.id} card={card}></SingleCard>
            ))}
          </div>
          <div className="my-8 text-center">
            <button className="border-2 py-2 px-4 text-pink-400 border-pink-400 hover:bg-pink-300 hover:text-white rounded-l">
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SinglePack;
