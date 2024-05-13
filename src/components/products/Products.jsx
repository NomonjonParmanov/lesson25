import React from "react";
import rate from "../../assets/rate.png";
import { useGetProductsQuery } from "../../context/pruductApi";
const Products = () => {
  const { data, isLoading } = useGetProductsQuery({});
  console.log(data?.products);
  let card = data?.products?.map((el) => (
    <div key={el.id} className="card">
      <img src={el.images[0]} alt="" />
      <h2>{el.title.substring(0, 20)}</h2>
      <div className="rate">
        <img src={rate} alt="" />
        <img src={rate} alt="" />
        <img src={rate} alt="" />
        <img src={rate} alt="" />
        <img src={rate} alt="" />
      </div>
      <p>
        <span>$50</span>$ {el.price}
      </p>
    </div>
  ));
  return (
    <div className="container product">
      <h2>Find your favourite smart watch.</h2>
      <h1>Our Latest Products</h1>
      <div className="cards">{card}</div>
    </div>
  );
};

export default Products;
