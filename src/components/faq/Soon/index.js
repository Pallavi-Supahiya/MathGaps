import React from 'react'
import sandclock from "../../../images/Faqs/sandclock.svg"
import "./style.scss"

const Soon = () => {
    return (
        <div className="soon">
            <div className="container">
                <div className="soon-container">
                    <div className="sandclock-container">
                        <div className="sandclock-image">
                            <img className="clock" src={sandclock} alt="sandclock" />
                        </div>
                        <div className="sandclock-content">
                            <h3>MathGaps is coming soon.</h3>
                            <p>We are currently refining the MathGaps product to provide the most optimal tools for maths education.</p>
                            <p>As part of this process the product is being tested in a range of academic institutions and selected focus groups.</p>
                            <p>Get in touch if you are interested in trialing our beta-platform.</p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Soon
