import React from 'react'
import { Link } from 'gatsby'

import { motion } from 'framer-motion'

import logo from '../../images/logo.png'
import etsy from '../../images/etsy-icon.png'
import society6 from '../../images/society6-icon.png'
import classes from './aside.module.css'

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <div className={classes.logo}>
        <img src={logo} alt="gallery logo" />
        <p>ART GALLERY</p>
      </div>
      <nav>
        <ul className={classes.menu}>
          <li>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/" style={{ textDecoration: 'none' }}>
              GALLERY
            </Link>
          </li>
          <li>
            <Link to="/contact" style={{ textDecoration: 'none' }}>
              CONTACT
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.shops}>
        <a
          href="https://www.etsy.com/shop/HummingbirdGalleryES"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={etsy}
            alt="etsy shop link"
            whileHover={{ scale: 0.8 }}
          />
        </a>
        <a
          href="https://society6.com/thehummingbirdartgallery"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.img
            src={society6}
            alt="society6 shop link"
            whileHover={{ scale: 0.8 }}
          />
        </a>
      </div>
    </aside>
  )
}

export default Aside
