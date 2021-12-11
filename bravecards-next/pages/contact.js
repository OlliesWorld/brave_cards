
import React from "react";
const ContactPage = () => {
const ContactForm = (
    <form
      name="contact-form"
      method="POST"
      action="contact/?success=true"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="flex flex-col m-auto w-80 mb-8"
      >
      <input type="hidden" name="form-name" value="contact-form" />
      <label htmlFor="name">Name *</label>
      <input
        id="name"
        name="name"
        required
        type="text"
      />
      
      <label htmlFor="email">E-mail Address *</label>
      <input id="email" type="email" name="email" required />
      <label htmlFor="message">Message *</label>
      <textarea className="h-48" id="message" name="message" required></textarea>
      <button className="bg-blue-900 mt-8 py-4 hover:text-white hover:rounded-lg" type="submit">Submit</button>
    </form>
  );

  return (
    <div className="mt-4">
      <h1 className="text-4xl text-center my-4">Let Us know who we should add!</h1>
        <div className="w-1/3 m-auto mb-4 py-2 border-4 border-blue-900 rounded-lg  shadow-lg shadow-blue-500/50">
            {ContactForm}
        </div>
    </div>
  );
 };
  
 export default ContactPage;
 