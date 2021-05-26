import React from "react";
import styled from "styled-components";
import Logo from "../../images/footer/logo.svg";
import "../../styles/index.scss";
import { Link } from "gatsby";
import fb from "../../images/footer/fb.svg";
import insta from "../../images/footer/insta.svg";
import linked from "../../images/footer/in.svg";
import "./style.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <FooterContainer>
          <Footer1>
            <FT1>
              <img src={Logo} alt="logo" type="svg" />
            </FT1>
            <FT2>
              <div className="NavLink">
                <Links to="/" className="nav">
                  <span className="footer-span">Home</span>
                </Links>
              </div>
              <div className="NavLink">
                <Links to="/contact" className="nav">
                  <span className="footer-span">Contact</span>
                </Links>
              </div>
              <div className="NavLink">
                <Links to="/register" className="nav3">
                  <span className="footer-span">Get Started</span>
                </Links>
              </div>
            </FT2>
            <FT3>
              <img className="footer-icons" src={fb} alt="fb" />
              <img className="footer-icons" src={insta} alt="insta" />
              <img className="footer-icons" src={linked} alt="linked" />
            </FT3>
          </Footer1>
          <Footer2>
            <FT4>
              <span>© MATH GAPS PTY LTD 2021</span>
            </FT4>
          </Footer2>
        </FooterContainer>
      </div>
    </div>
  );
};

export default Footer;

const FooterContainer = styled.div`
padding: 10px 14px;
`;
const Footer1 = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media only screen and (max-width: 1080px) {
    flex-wrap: wrap;
    align-items: center;
    text-align: center;
  }
  @media only screen and (max-width: 800px) {
    justify-content: center;
  }
`;
const FT1 = styled.div``;
const FT2 = styled.div`
  display: flex;
  @media only screen and (max-width: 627px) {
    padding: 7px 0px;
  }
`;
const NavLink = styled(Link)``;
const Links = styled(Link)`
  text-decoration: none;
  color: #fff;
`;
const FT3 = styled.div``;
const Footer2 = styled.div`
  padding-top: 25px;
`;
const FT4 = styled.div`
  text-align: center;
  color: #fff;
  opacity: 0.5;
`;
