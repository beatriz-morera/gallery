import React, { useState, useCallback } from 'react'
import { useForm } from 'react-hook-form'

import classes from './contactForm.module.css'

const ContactForm = () => {
  const [alert, setAlert] = useState(false)
  const { handleSubmit, register, errors, reset, clearError } = useForm()

  const errorsHandler = useCallback(() => {
    if (errors) {
      setAlert(!alert)
    } else {
      setAlert(false)
    }
  }, [errors, alert])

  const onSubmit = values => {
    console.log(values)
    reset()
    clearError()
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

      <button type="submit" onClick={errorsHandler}>
        Submit
      </button>
    </form>
  )
}
export default ContactForm
