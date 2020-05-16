import React, { useEffect } from 'react'

import { motion } from 'framer-motion'

import Aside from '../aside'
import Footer from '../footer'

import classes from './layout.module.css'

const Layout = ({ children, contactPage = false, footer = true }) => {
  useEffect(() => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0
  }, [])
  return (
    <motion.div initial="exit" animate="enter">
      <Aside className={classes.aside} />
      <div
        className={contactPage ? classes.contactContainer : classes.container}
      >
        <main className={classes.content}>{children}</main>
        {footer && <Footer />}
      </div>
    </motion.div>
  )
}

export default Layout
