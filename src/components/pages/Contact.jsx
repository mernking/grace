import React from "react";

export default function Contact() {
  return (
    <div class="flex flex-col">
      <div class="title">
        <h1 class="font-grace text-center">contact us</h1>
      </div>
      <div class="px-2 py-5 sm:py-5 lg:px-8">
        <form
          action="https://getform.io/f/bejyolpa"
          method="POST"
          class="mx-auto max-w-xl"
        >
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="name"
                class="block bg-background text-sm font-semibold leading-6"
              >
                Name
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="text"
                  name="name"
                  id="name"
                  autocomplete="given-name"
                  placeholder="Your Full Name"
                  class="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                for="budget"
                class="block bg-background text-sm font-semibold leading-6"
              >
                Budget
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="text"
                  name="budget"
                  id="budget"
                  autocomplete="money"
                  placeholder="Your Budget"
                  class="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block bg-background text-sm font-semibold leading-6"
              >
                Company
              </label>
              <div class="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  placeholder="Your Company Name"
                  class="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block bg-background text-sm font-semibold leading-6"
              >
                Email
              </label>
              <div class="mt-2.5">
                <input
                  required=""
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  placeholder="Your Email Address"
                  class="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone"
                class="block bg-background text-sm font-semibold leading-6"
              >
                Phone number
              </label>
              <div class="mt-2.5">
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  autocomplete="tel"
                  placeholder="Your Phone Number"
                  class="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block bg-background text-sm font-semibold leading-6"
              >
                Message
              </label>
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="7"
                  placeholder="Send us a message..."
                  class="block bg-background w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-accent focus:ring-2 focus:ring-inset focus:text-primary sm:text-sm sm:leading-6"
                ></textarea>
              </div>
            </div>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              value="Submit"
              class="bg-accent text-text rounded-sm py-2 w-full block"
            >
              Submit →
            </button>

            <input
              type="hidden"
              name="_gotcha"
              // style="display:none !important"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
