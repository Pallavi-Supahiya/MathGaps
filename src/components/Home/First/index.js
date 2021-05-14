import React from 'react'
import Image from "../../../images/Home/First/img.svg"
import {Button} from "../../Button"
import "./style.scss"
const First = () => {
    return (
        <div className="first">
        <div className="first-container">
            <div className="first-content">
<h2>Be the first to know when 
MathGaps launches</h2>
<Button big="true">Register Your Interest</Button>
            </div>
            <div className="first-image">
                <img src={Image} alt="image "/>
            </div>
        </div>
        
    </div>
    )
}

export default First
