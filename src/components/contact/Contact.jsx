import React from "react";
import contact from "../../assets/contact.png";
const Contact = () => {
  return (
    <div className="container contact">
      <div className="left">
        <h1>Subscribe To Newsletter</h1>
        <p>Get free guide about smart watches daily. </p>
        <input type="text" placeholder="Enter Email Address" />
        <button>Subscribe</button>
      </div>
      <div className="right">
        <img src={contact} alt="" />
      </div>
    </div>
  );
};

export default Contact;
