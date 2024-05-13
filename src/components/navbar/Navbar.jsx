import React, { useState, useEffect } from "react";
import logo from "../../assets/logo.svg";
import { IoPerson } from "react-icons/io5";
import axios from "../../context/index";
import { CiSearch, CiShoppingCart } from "react-icons/ci";
import NavbarSearch from "./NavbarSearch";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [value, setValue] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!value.trim()) return;
    axios
      .get(`/products/search?q=${value.trim()}`)
      .then((res) => setData(res.data.products))
      .catch((err) => console.log(err));
  }, [value]);
  return (
    <div className="header stic">
      <div className="container navbar">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        {toggle ? (
          <form className="form">
            <input
              value={value}
              onChange={(e) => setValue(e.target.value)}
              type="text"
              placeholder="search..."
            />
            <button onClick={() => setToggle(false)}>Close</button>
            {value.trim() ? <NavbarSearch data={data} /> : <></>}
          </form>
        ) : (
          <></>
        )}
        <ul className={`${toggle ? "show" : "ul"}`}>
          <li>Home</li>
          <li>Brands</li>
          <li>Recent Products</li>
          <li>Contact</li>
          <li>About</li>
        </ul>
        <ul className="icon">
          <li onClick={() => setToggle(!toggle)}>
            <CiSearch />
          </li>
          <li>
            <IoPerson />
          </li>
          <li>
            <CiShoppingCart />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
