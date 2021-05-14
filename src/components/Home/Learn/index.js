import React from 'react'
import Image from "../../../images/Home/Learn/Image.svg"
import {Button} from "../../Button"


import "./style.scss"

const Learn = () => {
    return (
        <div className="learn">
            <div className="learn-container">
                <div className="learn-content">
<h2>Learn more about the MathGaps offering</h2>
<Button big="true">MathGaps Products</Button>
                </div>
                <div className="learn-image">
                    <img src={Image} alt="image "/>
                </div>
            </div>
            
        </div>
    )
}

export default Learn
