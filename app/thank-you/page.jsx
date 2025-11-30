"use client";
import React from "react";
import Link from "next/link";
import { HiCheckCircle } from "react-icons/hi";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="glass-strong rounded-2xl p-12 max-w-2xl w-full text-center shadow-premium-lg">
        <div className="mb-6 flex justify-center">
          <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
            <HiCheckCircle className="text-6xl text-white" />
          </div>
        </div>

        <h1 className="text-4xl sm:text-5xl font-bold gradient-text mb-4">
          Thank You!
        </h1>

        <p className="text-gray-400 text-lg mb-8">
          Your message has been successfully sent. We&apos;ve received your
          inquiry and will get back to you within 24 hours.
        </p>

        <div className="glass rounded-xl p-6 mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            What happens next?
          </h2>
          <ul className="text-gray-400 space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>You&apos;ll receive a confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Our team will review your request</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                We&apos;ll reach out within 24 hours to discuss your project
              </span>
            </li>
          </ul>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-8 py-3 rounded-xl text-center font-semibold bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 shadow-premium-lg hover-glow transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/#service"
            className="px-8 py-3 rounded-xl text-center font-semibold glass-strong hover-glow transition-all"
          >
            View Our Services
          </Link>
        </div>
      </div>
    </div>
  );
}
