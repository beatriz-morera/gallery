import React from "react"

import logo from "../images/logo.png"
import etsy from "../images/etsy-icon.png"
import society6 from "../images/society6-icon.png"
import classes from "./aside.module.css"

const Aside = () => {
  return (
    <aside className={classes.aside}>
      <div className={classes.logo}>
        <img src={logo} alt="gallery logo" />
        <p>ART GALLERY</p>
      </div>
      <nav>
        <ul className={classes.menu}>
          <li>ABOUT</li>
          <li>GALLERY</li>
          <li>CONTACT</li>
        </ul>
      </nav>
      <div className={classes.shops}>
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
      </div>
    </aside>
  )
}

export default Aside
