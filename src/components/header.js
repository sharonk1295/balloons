import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import headerStyles from "./header.module.css"

const Header = ({ siteTitle }) => {
  return (  
    <div style={{
      width: `100%`
    }}>
      <Jumbotron>
        <div className={headerStyles.header}>
          <Link to="/"><h1 className={headerStyles.headerTitle}>Sunny Balloons</h1></Link>
          <nav className={headerStyles.navbar}>
            <Link className={headerStyles.navItem}  activeClassName={headerStyles.activeItem} to="/">Home</Link>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/events">Events</Link>
            <Link className={headerStyles.navItem} activeClassName={headerStyles.activeItem} to="/contact">Contact</Link>
          </nav>
        </div>
      </Jumbotron>
    </div>  
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
