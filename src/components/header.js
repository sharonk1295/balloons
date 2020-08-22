import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Jumbotron from "react-bootstrap/Jumbotron"
import headerStyles from "./header.module.css"

// const Header = ({ siteTitle }) => (
//   <header
//     style={{
//       background: `rebeccapurple`,
//       marginBottom: `1.45rem`,
//     }}
//   >
//     <div
//       style={{
//         margin: `0 auto`,
//         maxWidth: 960,
//         padding: `1.45rem 1.0875rem`,
//       }}
//     >
//       <h1 style={{ margin: 0 }}>
//         <Link
//           to="/"
//           style={{
//             color: `white`,
//             textDecoration: `none`,
//           }}
//         >
//           {siteTitle}
//         </Link>
//       </h1>
//     </div>
//   </header>
// )

const Header = ({ siteTitle }) => {
  return (  
    <div style={{
      width: `100%`
    }}>
      <Jumbotron>
        <div className={headerStyles.header}>
          <h1 className={headerStyles.headerTitle}>Sunny Balloons</h1>
          <nav className={headerStyles.navbar}>
            <Link className={headerStyles.navItem} to="/">Home</Link>
            <Link className={headerStyles.navItem} to="/events">Events</Link>
            <Link className={headerStyles.navItem} to="/contact">Contact</Link>
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
