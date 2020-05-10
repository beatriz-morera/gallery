import React from 'react'

import Aside from './aside'
import Footer from './footer'

import classes from './layout.module.css'

const layout = ({ children, contactPage = false, footer = true }) => {
  return (
    <>
      <Aside className={classes.aside} />
      <div
        className={contactPage ? classes.contactContainer : classes.container}
      >
        <main className={classes.content}>{children}</main>
        {footer && <Footer />}
      </div>
    </>
  )
}

export default layout
