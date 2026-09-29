import { useState } from "react";
import Reveal from "../components/Reveal.jsx";
import { PROFILE } from "../data.js";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [ready, setReady] = useState(false);
  const update = key => e => { setForm({ ...form, [key]: e.target.value }); setReady(false); };

  const submit = e => {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(form.email)) next.email = "Enter an email address like name@example.com.";
    if (form.message.trim().length < 10) next.message = "Write at least 10 characters.";
    setErrors(next);
    setReady(Object.keys(next).length === 0);
  };
  const mailto = `mailto:${PROFILE.email}?subject=${encodeURIComponent("Hello from " + form.name)}&body=${encodeURIComponent(form.message + "\n\n" + form.name + " (" + form.email + ")")}`;

  return (
    <div className="wrap">
      <Reveal><h1 className="page-title">Let's build something</h1></Reveal>
      <div className="contact">
        <Reveal className="contact-panel">
          <h2>Say hello</h2>
          <p>Mentoring, collaborations, hackathon teams or internships: I'd love to hear from you.</p>
          <ul className="links">
            <li>✉ <a href={"mailto:" + PROFILE.email}>{PROFILE.email}</a></li>
            <li>in <a href={PROFILE.linkedin} target="_blank" rel="noopener">LinkedIn</a></li>
            <li>⌘ <a href={PROFILE.github} target="_blank" rel="noopener">GitHub</a></li>
            <li>📍 {PROFILE.location}</li>
          </ul>
        </Reveal>
        <Reveal delay={120}>
          <form onSubmit={submit} noValidate>
            <div>
              <label htmlFor="name">Name</label>
              <input id="name" value={form.name} onChange={update("name")} aria-invalid={!!errors.name} />
              {errors.name && <div className="err">{errors.name}</div>}
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input id="email" type="email" value={form.email} onChange={update("email")} aria-invalid={!!errors.email} />
              {errors.email && <div className="err">{errors.email}</div>}
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea id="message" rows="5" value={form.message} onChange={update("message")} aria-invalid={!!errors.message}></textarea>
              {errors.message && <div className="err">{errors.message}</div>}
            </div>
            {ready
              ? <div className="notice" role="status">Your message is ready. <a href={mailto}>Open it in your email app</a> to send.</div>
              : <div><button className="btn primary" type="submit">Prepare message</button></div>}
          </form>
        </Reveal>
      </div>
    </div>
  );
}
