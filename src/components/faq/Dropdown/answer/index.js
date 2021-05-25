import React, {useEffect, useState} from 'react'
import add from "../../../../images/Faqs/plus.svg"
import minus from "../../../../images/Faqs/minus.svg"

const Answer = ({item, idx, index, setIndex}) => {

    const [openModal, setOpenModal] = useState(false)

useEffect(()=>{
    if(idx !== index){
        setOpenModal(false)
    }
}, [index])

const handleModal = e =>{
    setOpenModal(prev => !prev)
    setIndex(idx)
}

    return (
        <>
        <div className="dropdown-div" key={`${"faq" + idx}`}>
        {" "}
        {!openModal ? (
            <div className="add" onClick={handleModal}><img src={add} alt="add" /></div>):(<div className="minus" onClick={handleModal}><img src={minus} alt="minus" /></div>)
        
        }
        <ul className="dropdown-title" onClick={handleModal}>{item.question}</ul>
        </div>
        {" "}
        {openModal && (
            <div className="answerdrop">
            <div className="answerdrop-container">
            <div className="answer">
            <p className="answer-p">{item.answer}</p>
            </div>
            </div>
            </div>
        )}
        </>
    )
}

export default Answer
