import React from "react";
import { WATCH } from "../../static/index";
const Card = () => {
  let card = WATCH?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.img} alt="" />
      <div className="title">
        <h3>{el.title}</h3>
        <p>{el.paragh}</p>
      </div>
    </div>
  ));
  return <div className="container category">{card}</div>;
};

export default Card;
