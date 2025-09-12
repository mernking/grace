"use client";
import React, { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState(null);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("✅ Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("❌ There was an error. Please try again later.");
      }
    } catch {
      setStatus("❌ There was an error. Please try again later.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto w-full p-4 sm:p-8 bg-background rounded-xl shadow-xl mt-10 mb-20">
      {/* Heading */}
      <h1 className="text-3xl font-bold mb-4 text-center text-primary">
        Contact Boundless Bolt
      </h1>
      <p className="text-center text-text mb-8 max-w-lg mx-auto">
        Have a project in mind or just want to say hello? Fill out the form
        below or reach us directly via email. We’d love to hear from you.
      </p>

      {/* Contact Info */}
      <div className="text-center mb-8">
        <a
          href="mailto:boundlessbolt@gmail.com"
          className="underline text-primary hover:text-accent transition"
        >
          boundlessbolt@gmail.com
        </a>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          aria-label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          required
          className="bg-background/80 border border-primary focus:ring-2 focus:ring-primary text-text rounded-lg px-4 py-3 placeholder-gray-400 transition"
        />
        <input
          aria-label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
          className="bg-background/80 border border-primary focus:ring-2 focus:ring-primary text-text rounded-lg px-4 py-3 placeholder-gray-400 transition"
        />
        <input
          aria-label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          required
          className="bg-background/80 border border-primary focus:ring-2 focus:ring-primary text-text rounded-lg px-4 py-3 placeholder-gray-400 transition"
        />
        <textarea
          aria-label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="bg-background/80 border border-primary focus:ring-2 focus:ring-primary text-text rounded-lg px-4 py-3 resize-none placeholder-gray-400 transition"
        />
        <button
          type="submit"
          className="bg-primary hover:bg-accent font-semibold text-background rounded-lg px-6 py-3 transition shadow-md"
        >
          Send Message
        </button>
        {status && (
          <div className="text-center text-sm mt-2 text-primary">
            {status}
          </div>
        )}
      </form>

      {/* Call to Action */}
      <div className="mt-10 text-center">
        <a
          href="mailto:boundlessbolt@gmail.com?subject=Free%20Consultation%20Request"
          className="inline-block text-lg bg-transparent border border-primary hover:bg-primary hover:text-background text-primary font-semibold rounded-lg px-6 py-3 mt-2 transition"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  );
}
