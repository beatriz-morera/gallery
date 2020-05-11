import React from 'react'
import { useForm } from 'react-hook-form'

import classes from './contactForm.module.css'

const ContactForm = () => {
  const { handleSubmit, register, errors } = useForm()
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} netlify className={classes.form}>
      <div className={classes.inputContainer}>
        <input
          className={classes.inputName}
          placeholder="Name"
          name="name"
          ref={register({
            required: 'Required',
            message: 'Please provide a name',
          })}
        />
        {errors.name && errors.name.message}

        <input
          placeholder="E-mail Address"
          name="email"
          ref={register({
            required: 'Required',
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
          required: 'Required',
          message: 'Please type a subject',
        })}
      />
      {errors.subject && errors.subject.message}

      <textarea
        placeholder="Message"
        name="message"
        ref={register({
          required: 'Required',
          message: 'Please type a message',
        })}
      />
      {errors.message && errors.message.message}

      <button type="submit">Submit</button>
    </form>
  )
}
export default ContactForm
