import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import classes from './contactForm.module.css'

const ContactForm = () => {
  const [alert, setAlert] = useState(false)
  const { handleSubmit, register, errors } = useForm()
  const sumbmitHandler = useCallback(() => {
    if (errors) {
      setAlert(!alert)
    } else {
      setAlert(false)
    }
  }, [errors])
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} netlify className={classes.form}>
      <div className={classes.alert}>
        {alert && <p>All filds are required!</p>}
      </div>
      <div className={classes.inputContainer}>
        <input
          className={classes.inputName}
          placeholder="Name"
          name="name"
          ref={register({
            required: true,
          })}
        />

        <input
          placeholder="E-mail Address"
          name="email"
          ref={register({
            required: true,
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: 'Invalid email address',
            },
          })}
        />
        {errors.email && errors.email.message}
      </div>

      <input
        placeholder="Subject"
        name="subject"
        ref={register({
          required: true,
        })}
      />

      <textarea
        placeholder="Message"
        name="message"
        ref={register({
          required: true,
        })}
      />

      <button type="submit" onClick={sumbmitHandler}>
        Submit
      </button>
    </form>
  )
}
export default ContactForm
