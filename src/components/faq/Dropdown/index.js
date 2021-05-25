import React, {useState} from 'react'
import Answer from "./answer"
import "./style.scss"

const Dropdown = () => {
    const [index,setIndex] = useState(-1);
    return (
        <div className="dropdown">
            <div className="container">
                <div className="dropdown-container">
                    <div className="faq-heading">
                        <h2>Checkout our Frequently Asked Questions<span>.</span></h2>
                    </div>
                {faq.map((item, idx) => {
return (
    <>
   <div className="dropcontainer">
       <Answer item={item} idx={idx} index={index} setIndex={setIndex} />
       </div>
</>
    )
})}
                </div>
            </div>
            
        </div>
    )
}

export default Dropdown

const faq= [
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        answer:"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        answer:"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        answer:"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        answer:"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        answer:"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
    },
    {
        question: "Lorem ipsum dolor sit amet consectetur adipiscing elit.",
        answer:"Sed porttitor lectus nibh. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus."
    },
]
