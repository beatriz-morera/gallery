import React from "react"

import classes from "./header.module.css"

const header = () => {
  return (
    <header className={classes.header}>
      <h1 className={classes.title}>The Hummingbird Art Gallery</h1>
      <nav>
        <ul className={classes.menu}>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
      </nav>
    </header>
  )
}

export default header
