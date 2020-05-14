import React from 'react'

import { motion } from 'framer-motion'

import Aside from '../aside'
import Footer from '../footer'

import classes from './layout.module.css'

const layout = ({ children, contactPage = false, footer = true }) => {
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

export default layout
