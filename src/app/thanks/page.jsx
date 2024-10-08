import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div>
      <div class="flex items-center justify-center h-screen">
        <div class="p-4 rounded shadow-lg ring ring-accent">
          <div class="flex flex-col items-center space-y-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="text-green-600 w-28 h-28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h1 class="text-4xl font-bold">Thank You !</h1>
            <p>
              thanks for your message. we will get back to you as soon as
              posibble
            </p>
            <Link
              href="/"
              class="inline-flex items-center px-4 py-2 border border-accent rounded-full hover:bg-primary focus:outline-none focus:ring"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-3 h-3 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M7 16l-4-4m0 0l4-4m-4 4h18"
                />
              </svg>
              <span class="text-sm font-medium">Home</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
