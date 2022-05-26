import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { useForm, ValidationError } from '@formspree/react';
const Contact = () => {
  const [state, handleSubmit] = useForm("mjvllwne");
  // if (state.succeeded) {
  //   return <p>Thanks for joining!</p>;
  // }
  return (
    <>
      <div className="contact-section">
        <h2>Get in Touch</h2>
        <div>
          <p className="body-2">
            I&apos;d love to hear about what you&apos;re working on and how I could help.
            I&apos;m currently looking for a new role and am open to a wide range of opportunities.
            My preference would be to find a fully remote position,
            but I&apos;m happy to hear about opportunites that don&apos;t fit that description.
            I&apos;m a hard-working, fast learner who will approach each task with a sense of purpose and attention to detail.
            Please feel free to check out my online profiles below and get in touch using the form.
          </p>
          <div className="connections">
            <a href="https://github.com/anthony-ferraro" target="_blank" rel="noreferrer">
              <BsGithub color="black" size="25"></BsGithub>
            </a>
            <a href="https://www.linkedin.com/in/a-ferraro/" target="_blank" rel="noreferrer">
              <BsLinkedin color="black" size="25"></BsLinkedin>
            </a>
          </div>
        </div>
      </div>
      <div className="contact-section">
        <h2>Contact Me</h2>
        <form className="form" onSubmit={handleSubmit}>
          <h5>Name</h5>
          <input type="text" id="name" name="name" placeholder="Jane Smith"></input>

          <h5>Email Address</h5>
          <input type="text" id="email" name="email" placeholder="email@example.com"></input>
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
          />
          <h5>Message</h5>
          <textarea placeholder="How can I help?" id="message" name="message"></textarea>
          <button className="button-primary" type="submit" disabled={state.submitting}>Send Message</button>
        </form>
      </div>
    </>
  )
}

export default Contact