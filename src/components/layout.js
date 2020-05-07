import React from "react"

import Header from "./header"
import Footer from "./footer"

import classes from "./layout.module.css"

const layout = ({ children }) => {
  return (
    <div className={classes.container}>
      <Header className={classes.shadow} />
      <main className={classes.content}>{children}</main>
      <Footer />
    </div>
  )
}

export default layout
