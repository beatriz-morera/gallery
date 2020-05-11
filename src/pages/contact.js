import React from 'react'

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
          <div className={classes.titleWrap}>
            <img src={splash} alt="splash" />
            <h1>Contact</h1>
          </div>
          <ContactForm />
        </main>
      </Layout>
    </>
  )
}

export default Contact
