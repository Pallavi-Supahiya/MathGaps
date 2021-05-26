import React from 'react'
import Mailbox from "./MailBox"
import Soon from "../faq/Soon"
import "./style.scss"

const Register = () => {
    return (
        <div className="register">
          <Mailbox data={"Register Your Interest."} />  
          <Soon />
        </div>
    )
}

export default Register
