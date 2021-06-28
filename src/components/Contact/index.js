import React from "react";
import emailjs from "emailjs-com";
import Social from "../Social";

function Contact() {
  function handleSubmit(e) {
    emailjs
      .sendForm("service_7a389bz", "template_oya91hl", e.target, "user_rMkOis9ksLVqXW4SLAzCg")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  return (
    <div className="content">
      <h1>Contact Me</h1>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className='contact-field'>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" />
        </div>
        <div className='contact-field'>
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" />
        </div>
        <div className='contact-field'>
          <label htmlFor="message">Message:</label>
          <textarea name="message" rows="5" />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
      <div className="socialsBar">
        <Social></Social>
      </div>
    </div>
  );
}

export default Contact;
