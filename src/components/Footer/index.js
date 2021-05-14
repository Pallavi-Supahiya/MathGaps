import React from 'react'
import styled from 'styled-components'
import Logo from "../../images/footer/logo.svg"
import "../../styles/index.scss"
import { Link } from "gatsby"
import fb from "../../images/footer/fb.svg"
import insta from "../../images/footer/insta.svg"
import linked from "../../images/footer/in.svg"
import "./style.scss"

const footer = () => {
    return (
     <Footer>
<FooterContainer>
    <Footer1>
        <FT1>
            <img src={Logo} alt="logo" type="svg"/>
        </FT1>
        <FT2>
      
          < div className="NavLink">
            <Links to="/" className="nav">
              <span className="footer-span">Home</span>
            </Links>
          </div>
          <div className="NavLink">
            <Links to="/" className="nav">
              <span className="footer-span">Contact</span>
            </Links>
            </div>
          <div className="NavLink">
            <Links to="/" className="nav3">
              <span className="footer-span">Get Started</span>
            </Links>
            </div>
      
        </FT2>
        <FT3>
            <img className="footer-icons" src={fb} alt="fb"/>
            <img className="footer-icons" src={insta} alt="insta"/>
            <img className="footer-icons" src={linked} alt="linked"/>
        </FT3>
    </Footer1>
    <Footer2>
        <FT4><span>© MATH GAPS PTY LTD 2021</span></FT4>
    </Footer2>
</FooterContainer>
     </Footer>
    )
}

export default footer

const Footer = styled.div`    padding: 40px 120px;
background-color:#252525`;
const FooterContainer = styled.div` `;
const Footer1 = styled.div`
display:flex;
justify-content: space-between ;
align-items: center;`;
const FT1 = styled.div` `;
const FT2 = styled.div`display:flex; `;
const NavLink = styled(Link)` `;
const Links = styled(Link)`
text-decoration:none;
color:#fff;
 `;
const FT3 = styled.div`
`;
const Footer2 = styled.div`       padding-top: 25px; `;
const FT4 = styled.div`    text-align: center;
color:#fff;
opacity: 0.5; `;