import React from 'react'
import Layout from "../components/Layout"
import Head from "../components/Head"
import Mailbox from "../components/Register/MailBox"
import Seo from "../components/seo";

const contact = () => {
    return (
        
            <Layout>
        <Seo title="Contact" /> 
        <Head data={"Contact"}/>
     <Mailbox data={"We’d love to hear from you."}/>
        </Layout>
            
      
    )
}

export default contact
