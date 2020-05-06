import React from "react"

import classes from "./footer.module.css"

const footer = () => {
  return (
    <footer>
      <div className={classes.social}>
        <p className={classes.media}>
          <a
            target="_blank"
            href="https://www.facebook.com/thehummingbirdartgallery/"
          >
            Facebook
          </a>
        </p>
        <p className={classes.media}>
          <a
            target="_blank"
            href="https://www.instagram.com/the_hummingbird_artgallery/"
          >
            Instagram
          </a>
        </p>
        <p className={classes.media}>
          <a
            target="_blank"
            href="https://www.pinterest.es/hummingbirdgallery/"
          >
            Pinterest
          </a>
        </p>
      </div>
      <p className={classes.copyright}>The Hummingbird Art Gallery©2020</p>
    </footer>
  )
}

export default footer
