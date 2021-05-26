import React from 'react'
import image1 from "../../../images/Working/image1.svg"
import image2 from "../../../images/Working/image2.svg"
import image3 from "../../../images/Working/image3.svg"
import line from "../../../images/Working/line.svg"
import Learn from "../../../components/Home/Learn"
import "./style.scss"


let data = [
    {
      img: image1,
      heading: "More accurate and detailed insights on capability",
      content1:
        "Tutors are currently unable to hollistically assess the understanding of their students.",
        content2:"Detailed reports on capability allow tutors to plan and structure tutes in a way that suits the student best. ",
    },
    {
      img: image2,
      heading: "Less tutorial time dedicated to identification of gaps",
      content1:
        "Tutors spend lots of time identifying old gaps and revisiting past content. ",
        content2:" Once gaps are filled, tutors can direct all tutorial time to teaching and learning current topics.",
    },
    {
      img: image3,
      heading: "Easily track students progress",
      content1:
        "Reports progressively update to allow parents and tutors to monitor students progression.",
        content2:
        "This is useful for evaluating the effectiveness of tutoring.",
    },
  ];

const Tutor = () => {
    return (
        <div className="outer-tutor">
        <div className="tutor">

            <div className="container">
                <div className="tutor-container">
                   
                        <div className="tutor-heading">
                        <div className="tutor-heading-content">
                            <span className="tutor-span">Why MathGaps should be used in addition to a tutor</span>
                        
                        <div className="tutor-underline">
                            <img className="tutor-line" src={line} alt="line"/>
                        </div>
                        </div>
                    </div>
                    <div className="tutor-part2">
                    {data.map((element, index) => {
              return (
                        <div className="tutor-box">
                            <div className="tutor-image">
                                <div className="tutor-icon">
                                <img className="tutor-card-icon" src={element.img}></img>
                                </div>
                                <div className="tutor-content">
                                    <div className="tutor-bold">
                                        <span className="tutor-bold-text">{element.heading}</span>
                                    </div>
                                    <div className="tutor-p">
                                    <div className="tutor-p1">
                                   
                                        <span className="tutor-text1">{element.content1}</span>
                                        </div>
                                        <div className="tutor-p2">
                                    <span className="tutor-text2">{element.content2}</span>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                           );
                        })}
                    </div>
                    <div className="tutor-part3">
                        <div className="part3-quote">
                     <i>   <span className="italic-span">If you don’t currently use a tutor, a MathGaps assessment can effectively determine whether you should.</span></i>
                     </div>
                    </div>
                </div>
            </div>
            <Learn />
        </div>
        </div>
    )
}

export default Tutor
