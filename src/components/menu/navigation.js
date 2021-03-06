import React from 'react'

import { motion } from 'framer-motion'
import { Link } from 'gatsby'

import MenuItem from './menu-item'

import logo from '../../images/logo.png'
import etsy from '../../images/etsy-icon.png'
import society6 from '../../images/society6-icon.png'

import classes from './navigation.module.css'

const variants = {
  open: {
    opacity: 1,
  },
  closed: {
    opacity: 0,
  },
}

export default ({ links = [], close }) => {
  return (
    <>
      <Link to="/" style={{ textDecoration: 'none' }}>
        <motion.div
          variants={variants}
          className={classes.logo}
          onClick={close}
        >
          <img src={logo} alt="gallery logo" />
          <p>ART GALLERY</p>
        </motion.div>
      </Link>

      <motion.div variants={variants} className={classes.container}>
        <motion.ul className={classes.list} variants={variants}>
          {links.map(([title, link]) => (
            <MenuItem key={title} title={title} onClose={close} link={link} />
          ))}

          <motion.div className={classes.shops} variants={variants}>
            <a
              href="https://www.etsy.com/shop/HummingbirdGalleryES"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={etsy} alt="etsy shop link" />
            </a>
            <a
              href="https://society6.com/thehummingbirdartgallery"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={society6} alt="society6 shop link" />
            </a>
          </motion.div>
        </motion.ul>
      </motion.div>
    </>
  )
}
