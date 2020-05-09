import React from 'react'

import { ParallaxProvider } from 'react-scroll-parallax'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/Menu'
import Gallery from '../containers/gallery'

import classes from './index.module.css'

const IndexPage = () => {
  return (
    <ParallaxProvider>
      <SEO title="Home" />
      <Menu links={['About', 'Gallery', 'Contact']} />
      <Layout>
        <div className={classes.header} />

        <Gallery />
      </Layout>
    </ParallaxProvider>
  )
}

export default IndexPage
