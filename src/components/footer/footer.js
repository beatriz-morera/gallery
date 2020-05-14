import React from 'react'

import { motion } from 'framer-motion'
import { textVariants } from '../../services/animations'

import classes from './footer.module.css'

const footer = () => {
  return (
    <motion.footer variants={textVariants}>
      <div className={classes.social}>
        <a
          className={classes.media}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.facebook.com/thehummingbirdartgallery/"
        >
          Facebook
        </a>
        <a
          className={classes.media}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.instagram.com/the_hummingbird_artgallery/"
        >
          Instagram
        </a>
        <a
          className={classes.media}
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.pinterest.es/hummingbirdgallery/"
        >
          Pinterest
        </a>
      </div>
      <p className={classes.copyright}>The Hummingbird Art Gallery©2020</p>
    </motion.footer>
  )
}

export default footer
