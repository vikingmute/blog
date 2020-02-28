import React from "react"
import { rhythm } from "../utils/typography"
import Header from './header'
import Footer from './footer'
class Layout extends React.Component {
  render() {
    const { children } = this.props
 
    return (
      <>
      <Header/>
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(30),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <main>{children}</main>
          <Footer />
        </div>
      </>
    )
  }
}

export default Layout
