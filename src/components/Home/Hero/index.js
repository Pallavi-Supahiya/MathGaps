import React from 'react'
import "./style.scss"
import BG from "../../../images/Hero/full_background.svg"
import Formula from "../../../images/Hero/formula.svg"
import Girl from "../../../images/Hero/girl.svg"

import {Button} from "../../Button"

const hero = () => {
    return (
        <div className="Hero">
           <img className="Hero-Banner" src={BG} alt="bg" />
            <div className="Hero-Container">
                <div className="Hero-Content">
                    <h1 >A new tool to 
improve maths  performance</h1>
<p>Quickly identify gaps in maths ability and receive a personalised program to fill them</p>
<Button primary="true">Register your interest</Button>
                </div>
                <div className="Hero-Image">

<img src={Formula} alt="formulas"/>
<div className="Hero-InnerImage"><img  src={Girl} alt="girl"/></div>              
       
     
                </div >
            </div >
        </div >
    )
}

export default hero
