// Contact.js
import React from 'react';
import '../styles/Contact.css';
import { Link } from "@react-email/components";

const Email = () => {
  return (
    <Link href="mailto:awtz.dev@gmail.com">awtz.dev@gmail.com</Link>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Hey, you can contact me at <Email /> or send me a message :</p>

      <div id="form" className="form">
        <form>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" required></textarea>

          <button type="submit">Send</button>
        </form>
      </div>

      <div id="social" className="social">
        <a href=""></a>
        <a href=""></a>
        <a href=""></a>
      </div>
    </section>
  );
};

export default Contact;
