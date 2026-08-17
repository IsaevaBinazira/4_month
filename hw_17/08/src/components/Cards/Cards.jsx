import React from "react";
import { useState } from "react";
import "./style.css";
import marshall from "../../assets/marshall.jpeg";

const Card = (props) => {
  return (
    <div className="card">
      <img src={props.img} alt={props.name} />
      <h2>{props.name}</h2>
    <button onClick={props.onClick}> Добавить в корзину </button>
    </div>
  );
};

const Trash = (props) => {
  return (
    <div className="trash">
      <h2>Корзина</h2>

      {props.trash.map((card) => (
        <div className="card" key={card.id}>
          <img src={card.img} alt={card.name} />
          <h2>{card.name}</h2>
        </div>
      ))}
    </div>
  );
};

const Cards = () => {
  const [cards] = useState([
    {
      img: marshall,
      id: 1,
      name: "Marshall 1",
    },
    {
      img: marshall,
      id: 2,
      name: "Marshall 2",
    },
    {
      img: marshall,
      id: 3,
      name: "Marshall 3",
    },
  ]);

  const [trash, setTrash] = useState([]);

  const addToTrash = (card) => {
    setTrash([...trash, card]);
  };
return (
    <div>
      <div className="cardsList">
        {cards.map((card) => (
        <Card
            key={card.id}
            img={card.img}
            name={card.name}
            onClick={() => addToTrash(card)}
          />
        ))}
      </div>

      <Trash trash={trash} />
    </div>
  );
};

export default Cards;