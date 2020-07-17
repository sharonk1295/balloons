import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navbar from "react-bootstrap/Navbar"
import { Nav } from "react-bootstrap"

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
    <div>
      <Navbar collapseOnSelect bg="light" expand="lg">
        <Navbar.Brand>
          <Link to="/">Sunny Balloons</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/">Home</Link></Nav.Link>
            <Nav.Link><Link to="/page-2/">Gallery</Link></Nav.Link>
            {/* <Nav.Link href="/contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
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
