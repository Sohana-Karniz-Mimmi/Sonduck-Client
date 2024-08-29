import { useEffect } from "react";
import { useState } from "react";
import Card from "./Card";

const StoreCard = () => {
  const [cards, setCards] = useState([]);
  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);
  console.log(cards);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-10 pt-10">
      {cards?.map((card) => (
        <Card key={card?.id} card={card}></Card>
      ))}
    </div>
  );
};

export default StoreCard;
