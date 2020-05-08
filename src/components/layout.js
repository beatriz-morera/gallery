import React from "react"

import Aside from "./aside"
import Footer from "./footer"

import classes from "./layout.module.css"

const layout = ({ children }) => {
  return (
    <>
      <Aside className={classes.aside} />
      <div className={classes.container}>
        <main className={classes.content}>{children}</main>
        <Footer />
      </div>
    </>
  )
}

export default layout
