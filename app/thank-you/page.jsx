"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { HiCheckCircle } from "react-icons/hi";

export default function ThankYouPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-strong rounded-2xl p-12 max-w-2xl w-full text-center shadow-premium-lg"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="mb-6 flex justify-center"
        >
          <div className="p-6 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full">
            <HiCheckCircle className="text-6xl text-white" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl sm:text-5xl font-bold gradient-text mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 text-lg mb-8"
        >
          Your message has been successfully sent. We've received your inquiry
          and will get back to you within 24 hours.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-6 mb-8"
        >
          <h2 className="text-xl font-semibold text-white mb-3">
            What happens next?
          </h2>
          <ul className="text-gray-400 space-y-2 text-left">
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>You'll receive a confirmation email shortly</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>Our team will review your request</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-green-500 mt-1">✓</span>
              <span>
                We'll reach out within 24 hours to discuss your project
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
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
        </motion.div>
      </motion.div>
    </div>
  );
}
