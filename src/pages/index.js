import React from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import Header from '../components/header'
import Gallery from '../containers/gallery'

import { scrollToTop } from '../services/toTop'
import { useIsLandscape } from '../hooks/window'

import rotateIcon from '../images/rotate.png'

import classes from './index.module.css'

const IndexPage = () => {
  const display = useIsLandscape()
  return (
    <>
      {display ? (
        <ParallaxProvider>
          <SEO title="Gallery" />
          <Menu
            links={[
              ['About', 'about'],
              ['Gallery', ''],
              ['Contact', 'contact'],
            ]}
          />
          <Layout>
            <Header />
            <Gallery />
            <p onClick={scrollToTop} className={classes.scrollTop}>
              To the top
            </p>
          </Layout>
        </ParallaxProvider>
      ) : (
        <div className={classes.error}>
          <img src={rotateIcon} alt="rotate your device" />
          <p>This site is not available in landscape mode.</p>
          <span>Please rotate your device.</span>
        </div>
      )}
    </>
  )
}

export default IndexPage
