
import React from "react"
import PropTypes from "prop-types"


import Header from "../Header"
import Footer from "../Footer"


class Layout extends React.Component {
  render() {
    const { children } = this.props
    return (
      <>
        <Header/>
        <main>{children}</main>
        <Footer/>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
 
}

export default Layout