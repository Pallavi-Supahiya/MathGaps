import React from "react";
import Image from "../../../images/Home/Mail/Mailbox.svg";

import "./style.scss";

const Mail = () => {
  return (
    <div className="mail">
      <div className="container">
        <div className="mail-container">
          <div className="mail-content">
            <div className="mail-heading">
              <span className="sub-heading">Get In Touch</span>
              <h2 className="Heading">Let’s discuss MathGaps.</h2>
            </div>
            <div className="mail-form">
              <input placeholder="Enter E-mail" type="email" value="" />
              <input placeholder="Enter Message" type="text" value="" />
              <div className="button-div">
                <button>Submit</button>
              </div>
            </div>
          </div>
          <div className="mail-image">
            <img src={Image} alt="mailbox" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mail;
