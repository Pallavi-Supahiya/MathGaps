import React from 'react'
import Image from "../../../images/Home/Increase/img.svg"
import {Button} from "../../Button"
import "./style.scss"

const Increase = () => {
    return (
                <div className="increase">
                    <div className="increase-container">
                        
                        <div className="increase-image">
                            <img src={Image} alt="image "/>
                        </div>
                        <div className="increase-content">
        <h2>Increase confidence and improve performance</h2>
        <Button big="true">How MathGaps Works</Button>
                        </div>
                    </div>
                    
                </div>
            )
        }
export default Increase
