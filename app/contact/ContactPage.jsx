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
        setStatus("Message sent! We'll get back to you soon.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("There was an error. Please try again later.");
      }
    } catch {
      setStatus("There was an error. Please try again later.");
    }
  }

  return (
    <div className="max-w-2xl mx-auto w-full p-4 sm:p-8 bg-[#181a1b] rounded-xl shadow-xl mt-10 mb-20">
      <h1 className="text-3xl font-bold mb-6 text-[#39aeb9] text-center">
        Contact BoundlessBolt
      </h1>
      <div className="text-center mb-7 text-[#c9d1d4]">
        Email us at{" "}
        <a
          href="mailto:boundlessbolt@gmail.com"
          className="underline text-[#39aeb9] hover:text-cyan-400"
        >
          boundlessbolt@gmail.com
        </a>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-5">
        <input
          aria-label="Name"
          name="name"
          value={form.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          required
          className="bg-black/80 border border-[#39aeb9] focus:ring-2 focus:ring-[#39aeb9] text-white rounded-lg px-4 py-2"
        />
        <input
          aria-label="Email"
          name="email"
          value={form.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
          className="bg-black/80 border border-[#39aeb9] focus:ring-2 focus:ring-[#39aeb9] text-white rounded-lg px-4 py-2"
        />
        <input
          aria-label="Subject"
          name="subject"
          value={form.subject}
          onChange={handleChange}
          type="text"
          placeholder="Subject"
          required
          className="bg-black/80 border border-[#39aeb9] focus:ring-2 focus:ring-[#39aeb9] text-white rounded-lg px-4 py-2"
        />
        <textarea
          aria-label="Message"
          name="message"
          value={form.message}
          onChange={handleChange}
          placeholder="Your Message"
          required
          rows={5}
          className="bg-black/80 border border-[#39aeb9] focus:ring-2 focus:ring-[#39aeb9] text-white rounded-lg px-4 py-2 resize-none"
        />
        <button
          type="submit"
          className="bg-[#39aeb9] hover:bg-cyan-400 font-semibold text-black rounded-lg px-6 py-3 transition"
        >
          Send Message
        </button>
        {status && (
          <div className="text-center text-sm mt-2 text-[#39aeb9]">
            {status}
          </div>
        )}
      </form>
      <div className="mt-8 text-center">
        <a
          href="mailto:boundlessbolt@gmail.com?subject=Free%20Consultation%20Request"
          className="inline-block text-lg bg-transparent border border-[#39aeb9] hover:bg-[#39aeb9] hover:text-black text-[#39aeb9] font-semibold rounded-lg px-6 py-3 mt-2 transition"
        >
          Schedule a Free Consultation
        </a>
      </div>
    </div>
  );
}
