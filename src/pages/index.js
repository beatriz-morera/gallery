import React from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import Header from '../components/header'
import Gallery from '../containers/gallery'

import { scrollToTop } from '../services/toTop'

import classes from './index.module.css'

const IndexPage = () => {
  return (
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
  )
}

export default IndexPage
