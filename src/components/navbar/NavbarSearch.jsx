import React from "react";

const NavbarSearch = ({ data }) => {
  let searchItems = data?.map((el) => (
    <div className="item" key={el.id}>
      <img src={el.images[0]} width={50} alt="" />
      <span>{el.title}</span>
    </div>
  ));

  return <div className="result">{searchItems}</div>;
};

export default NavbarSearch;
