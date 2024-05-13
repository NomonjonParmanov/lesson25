import React from "react";
import header from "../../assets/header.png";
const Header = () => {
  return (
    <div className="header">
      <div className="container head">
        <div className="left">
          <h1>Discover Most Suitable Watches</h1>
          <p>
            Find the best, reliable, and cheap smart watches here. We focus on
            product quality. Here you can find smart watches of almost all
            brands. So why you are waiting? Just order now!
          </p>
          <input type="text" placeholder="Find the best brands" />
          <button>Search</button>
        </div>
        <div className="right">
          <img src={header} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
