"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Loader from "../screen/Loader";

export default function Contact() {
  const [load, setLoader] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    budget: "",
    company: "",
    email: "",
    phone: "",
    message: "",
  });

  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    setLoader(true);
    e.preventDefault();
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        router.push("/thanks"); // Redirect to /thanks page
      } else {
        alert(result.error);
      }
    } catch (error) {
      alert("Failed to send message. Please try again later.");
    }
  };

  if (load) {
    return <Loader />;
  }

  return (
    <div className="flex flex-col">
      <div className="title">
        <h1 className="font-grace text-center">Contact Us</h1>
      </div>
      <div className="px-2 py-5 sm:py-5 lg:px-8">
        <form onSubmit={handleSubmit} className="mx-auto max-w-xl">
          <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="block bg-background text-sm font-semibold leading-6"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="given-name"
                  placeholder="Your Full Name"
                  className="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="budget"
                className="block bg-background text-sm font-semibold leading-6"
              >
                Budget
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="text"
                  name="budget"
                  id="budget"
                  autoComplete="money"
                  placeholder="Your Budget"
                  className="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                  value={formData.budget}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="company"
                className="block bg-background text-sm font-semibold leading-6"
              >
                Company
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autoComplete="organization"
                  placeholder="Your Company Name"
                  className="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="email"
                className="block bg-background text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div className="mt-2.5">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  placeholder="Your Email Address"
                  className="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="phone"
                className="block bg-background text-sm font-semibold leading-6"
              >
                Phone Number
              </label>
              <div className="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autoComplete="tel"
                  placeholder="Your Phone Number"
                  className="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="block bg-background text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div className="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  placeholder="Send us a message..."
                  className="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              type="submit"
              className="bg-accent hover:bg-primary text-text rounded-sm py-2 w-full block"
            >
              Submit →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
