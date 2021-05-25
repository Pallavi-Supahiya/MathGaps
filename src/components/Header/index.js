import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
import styled from "styled-components";
import Logo from "../../images/header/Group 2.svg";
import { Link } from "gatsby";
import { Button } from "../Button";

import "./style.scss";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleClick = () => setClick(!click);

  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    changeNav();
    window.addEventListener("scroll", changeNav);
  }, []);

  return (
    <div className="navbar">
      <IconContext.Provider value={{ color: "#000000" }}>
        <Nav active={scroll} click={click}>
          
            <div className="navbar-container">
              <Navlogo to="/">
                <img className="mathgaps-logo" src={Logo} alt="mathgaps" />
              </Navlogo>
              <MobileIcon className="mobile-icon" onClick={handleClick}>
                {click ? <FaTimes /> : <FaBars />}
              </MobileIcon>
              <NavMenu onClick={handleClick} click={click}>
                <NavItem>
                  <NavLinks to="/products">Products</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/working">How it works</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/faq">FAQs</NavLinks>
                </NavItem>
                <NavItem>
                  <NavLinks to="/">
                    {" "}
                    <Button>Register Your Interest</Button>
                  </NavLinks>
                </NavItem>
              </NavMenu>
            </div>
         
        </Nav>
      </IconContext.Provider>
    </div>
  );
};

export default Navbar;

const Nav = styled.nav`
  background: ${({ active }) => (active ? "#fff" : "#000")} @media screen and
    (max-width: 1080px) {
    background: ${({ click }) => (click ? "#fff" : "transparent")};
  }
`;
const Navlogo = styled(Link)``;
const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 1080px) {
    display: block;
    position: absolute;
    top: 10%;
    right: 0;
    transform: translate(-100%, 60%);
    cursor: pointer;
  }
`;
const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 1080px) {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 98vh;
    position: absolute;
    z-index: 1;
    width: 100%;
    /* display: flex; */
    right: 0;
    height: auto;
    top: ${({ click }) => (click ? "100%" : "-1080px")};
    opacity: 1;
    transition: all 0.2s ease;
    background: #fff;
  }
`;
const NavLinks = styled(Link)`

color: #000;
display: flex;
align-items: center;
text-decoration: none;
height: 100%;
color: #252525;
font-weight: 700;
font-size: 18px;
line-height: 28px;

@media screen and (max-width: 1080px){
    text-align: center;
    
    justify-content: center;
    &:hover{
        
    }
}

`;
const NavItem = styled.li`
  height: 99px;
  margin-right: 64px;
  &:last-of-type {
    margin-right: 0;
  }
  @media screen and (max-width: 1080px) {
    width: 100%;
    margin-right: 0;
    margin: auto;
  }
`;
