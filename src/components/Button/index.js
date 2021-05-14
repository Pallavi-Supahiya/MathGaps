import styled from "styled-components"
import { Link } from "gatsby"

export const Button = styled(Link)`
  background: ${({ primary }) => (primary ? "#252525" : " linear-gradient(180deg, #0059EF 0%, #0059EF 0.01%, #0059EF 100%);")};
  white-space: nowrap;
  padding: ${({ big }) => (big ? "10px 24px" : "14px 18px")};
  color: ${({ secondary }) => (secondary ? "#fff"  : "#fff")};
  font-size: ${({ big }) => (big ? "24px" : "18px")};
  line-height:  ${({ big }) => (big ? "34px" : "28px")};
  font-weight: 700;
  outline: none;
  // border:1px solid  ${({ border }) => (border ? "rgba(255, 255, 255, 0.2)" : "rgba(255, 255, 255, 0.2)")};
  min-width: 100px;
  // max-width:${({ big }) => (big ? "389px" : "287px")};
  // width:100%;
  cursor: pointer;
  text-decoration: none;
  transition: 0.3s !important;
  border-radius: ${({ big }) => (big ? "4px" : "8px")};
 

  &:hover {
    background: ${({ primary }) => (primary ? " linear-gradient(180deg, #0059EF 0%, #0059EF 0.01%, #0059EF 100%);" : "#252525")};
    color: ${({secondary})=>(secondary ? '#fff' : '#fff')};
   
   
  }
`
