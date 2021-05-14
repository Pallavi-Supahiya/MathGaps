import React from 'react'
import styled from 'styled-components'
import Logo from "../../images/header/Group 2.svg"
import "../../styles/index.scss"
import { Link } from "gatsby"
import {Button} from "../Button"

const header = () => {
    return (
       <Header>
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
             
                <NavLinks>
          <NavLink>
            <Links to="/">
              <span>Products</span>
            </Links>
          </NavLink>
          <NavLink>
            <Links to="/">
              <span>How it works</span>
            </Links>
          </NavLink>
          <NavLink>
            <Links to="/">
              <span>FAQs</span>
            </Links>
          </NavLink>
        <NavLink>
        <Button>Register Your Interest</Button>
        </NavLink>
          
          </NavLinks>
                   
                   
           
           </HeaderContainer>
       </Header>
    )
}

export default header
const Header = styled.div`    padding: 24px 72px 19px 138px;
background-color:#fff;`;
const HeaderContainer = styled.div` display: flex; justify-content: space-between;`;
const HeaderLogo = styled.div` `;
const ImageBg = styled.image` `;

const NavLinks = styled.div`display: flex;`;
const NavLink = styled(Link)``;
const Links = styled(Link)`
text-decoration: none;
color: #252525;
font-weight: 700;
font-size: 18px;
line-height: 28px;
margin-right: 64px;`;