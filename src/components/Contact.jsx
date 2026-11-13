import { useState } from "react";

 function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    setSent(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <main className="container page">
      <h1 className="page-title">Contact us</h1>

      <div className="contact">
        <form onSubmit={handleSubmit} className="form">
          <label>
            Name
            <input className="input" name="name" value={form.name} onChange={handleChange} required />
          </label>
          <label>
            Email
            <input className="input" type="email" name="email" value={form.email} onChange={handleChange} required />
          </label>
          <label>
            Message
            <textarea className="input" name="message" rows="5" value={form.message} onChange={handleChange} required />
          </label>
          <button className="btn" type="submit">Send message</button>
          {sent && <p role="status" className="form__ok">Thank you! We received your message.</p>}
        </form>

        <aside className="contact__info">
          <h2 className="details__sub">Opening hours</h2>
          <p>Monday to Saturday: 10:00 AM to 12:00 PM</p>
          <p>Sunday: closed</p>
          <h2 className="details__sub">Find us</h2>
          <p>Tripoli, North Lebanon</p>
          <p>chefmom@gmail.com</p>
        </aside>
      </div>
    </main>
  );

}
export default Contact;