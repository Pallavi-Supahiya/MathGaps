import React from "react";
import Image from "../../../images/mailbox.svg";
import dots from "../../../images/dots.png";

import "./style.scss";

const Mailbox = ({data}) => {
  return (
    <div className="mailbox">
      <div className="container">
        <img className="dots-up" src={dots} alt="..." />
        <img className="dots-down" src={dots} alt="..." />
        <div className="mailbox-container">
        <div className="mailbox-all">
          <div className="mailbox-content">
            <div className="mailbox-heading">
              <h2 className="Heading">{data}</h2>
            </div>
           
            <form className="mailbox-form">
                <label><input  type="text" required /><span>First Name*</span></label>
              <label><input  type="text" required /><span>Last Name</span></label>
              <label><input  type="email" required /><span>Enter E-mail*</span></label>
              <label><input  type="text" required /><span>Enter Message*</span></label>
              
              
              
              <div className="button-div">
                <button>Submit</button>
              </div>
            </form>
            </div>
          <div className="mailbox-image">
            <img src={Image} alt="mailbox" />
          </div>
         
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mailbox;
