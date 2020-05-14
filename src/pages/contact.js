import React from 'react'

import { motion } from 'framer-motion'
import { imageVariants, textVariants } from '../services/animations'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Menu from '../components/menu'
import ContactForm from '../components/form'
import splash from '../images/HoverSplash.png'

import classes from './contact.module.css'

const Contact = () => {
  return (
    <>
      <SEO title="Contact" />
      <Menu
        links={[
          ['About', 'about'],
          ['Gallery', ''],
          ['Contact', 'contact'],
        ]}
      />
      <Layout contactPage>
        <main className={classes.main}>
          <motion.div variants={imageVariants}>
            <div className={classes.titleWrap}>
              <img src={splash} alt="splash" />
              <motion.h1 variants={textVariants}>Contact</motion.h1>
            </div>
            <ContactForm />
          </motion.div>
        </main>
      </Layout>
    </>
  )
}

export default Contact
