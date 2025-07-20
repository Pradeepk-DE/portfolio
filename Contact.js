import React from "react";

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact Me</h2>
    <p>Email: <a href="mailto:Pradeepkutal16@gmail.com">Pradeepkutal16@gmail.com</a></p>
    <form>
      <input type="text" placeholder="Your Name" required />
      <input type="email" placeholder="Your Email" required />
      <textarea placeholder="Your Message" required />
      <button type="submit">Send</button>
    </form>
  </section>
);

export default Contact;