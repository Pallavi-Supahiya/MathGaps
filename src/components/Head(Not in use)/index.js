import React,{useState, useEffect} from 'react'
import styled from 'styled-components'
import Logo from "../../images/header/Group 2.svg"
import "../../styles/index.scss"
import { Link } from "gatsby"
import {Button} from "../Button"
// import { FaBars, FaTimes } from "react-icons/fa"
import "./style.scss"


const Heeader = () => {

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);


  const handleClick = () => {setClick(!click)
  console.log('yeah')};
  
  const closeMobileMenu = () => {
    setClick(false);
  };

 


    return (
       <Header>
         <div className="container">
           <HeaderContainer>
               <HeaderLogo>
               <ImageBg>
            <img
              src={Logo}
              alt="bg"
              type="img/png/svg"
            />
          </ImageBg>
               </HeaderLogo>
               <div className="menu-icon" onClick={handleClick}>
            <i>=</i>
          </div>
                <NavLinks className={click ? 'nav-menu active' : 'nav-menu'}>
          <NavLink>
            <Links to="/" onClick={closeMobileMenu}>
              <span>Products</span>
            </Links>
          </NavLink>
          <NavLink>
            <Links to="/" onClick={closeMobileMenu}>
              <span>How it works</span>
            </Links>
          </NavLink>
          <NavLink>
            <Links to="/" onClick={closeMobileMenu}>
              <span>FAQs</span>
            </Links>
          </NavLink>
        <NavLink>
        <Button onClick={closeMobileMenu}>Register Your Interest</Button>
        </NavLink>
          
          </NavLinks>
           </HeaderContainer>
           </div>
       </Header>
    )
}

export default Heeader
const Header = styled.div`padding: -26px -34px -31px 32px;
background-color:#fff;`;
const HeaderContainer = styled.div` display: flex; justify-content: space-between;
align-items: center;
`;
const HeaderLogo = styled.div` `;
const ImageBg = styled.image` `;

const NavLinks = styled.div`display: flex;
@media screen and (max-width: 768px) {
  display:none;
}`;
const NavLink = styled(Link)``;
const Links = styled(Link)`
text-decoration: none;
color: #252525;
font-weight: 700;
font-size: 18px;
line-height: 28px;
margin-right: 64px;
@media only screen and (max-width: 1200px) {
  margin-right: 30px;
}`;

