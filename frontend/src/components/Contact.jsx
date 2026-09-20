import { useState } from "react";
import { sendMessage } from "../api";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error
  const [errorMsg, setErrorMsg] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");
    try {
      await sendMessage(form);
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMsg(err.message);
    }
  }

  return (
    <footer id="contact">
      <div className="wrap">
        <h2>Let's build something together.</h2>

        <div className="contact-list">
          <a href="mailto:amitarya95080@gmail.com"><span>amitarya95080@gmail.com</span><span className="k">EMAIL</span></a>
          <a href="tel:+919508037659"><span>+91-95080-37659</span><span className="k">PHONE</span></a>
          <a href="https://www.linkedin.com/in/amit-kumar-127112292/" target="_blank" rel="noopener noreferrer"><span>linkedin.com/in/amit-kumar-127112292/</span><span className="k">LINKEDIN</span></a>
          <a href="https://github.com/aryan95080" target="_blank" rel="noopener noreferrer"><span>github.com/aryan95080</span><span className="k">GITHUB</span></a>
          <a href="https://wa.me/919508037659" target="_blank" rel="noopener noreferrer"><span>Chat on WhatsApp</span><span className="k">WHATSAPP</span></a>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Or send a message directly</h3>
          <p className="form-note">This saves to the MongoDB database via the backend API.</p>

          <input
            type="text" name="name" placeholder="Your name"
            value={form.name} onChange={handleChange} required
          />
          <input
            type="email" name="email" placeholder="Your email"
            value={form.email} onChange={handleChange} required
          />
          <textarea
            name="message" placeholder="Your message" rows="4"
            value={form.message} onChange={handleChange} required
          />
          <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
            {status === "sending" ? "Sending…" : "Send Message"}
          </button>

          {status === "sent" && <p className="form-success">Message sent — thank you!</p>}
          {status === "error" && <p className="form-error">Couldn't send: {errorMsg}</p>}
        </form>

        <div className="foot-note">Built by Amit Kumar · Bhopal, India</div>
      </div>
    </footer>
  );
}
