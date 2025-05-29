"use client";
import Header from "../../components/Header";

import React from "react";
import Talktous from "../../components/talktous";
import Footer from "../../components/Footer";

export default function Contact() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="h-12 md:h-20" />
      <section className="relative z-10 flex flex-col items-center justify-center text-center mt-16 mb-16">
        <span className="text-base font-semibold text-[#a78bfa] mb-2">
          Hire us
        </span>
        <h1 className="text-6xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-[#b6b6e3] to-[#a78bfa] mb-4">
          Get in touch
        </h1>
        <p className="text-lg md:text-xl text-gray-400 max-w-2xl mb-8">
          People are at the heart of everything we do. We are always happy to hear
          from you.
        </p>
        {/* RadialGlow örnek kart */}

        <form className="w-full max-w-2xl mx-auto bg-[#11111a]/60 border border-[#23233a] rounded-2xl shadow-lg px-8 py-10 flex flex-col gap-6 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="firstName"
                className="text-gray-400 mb-1 ml-1 text-sm"
              >
                First name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                placeholder="First name"
                className="px-5 py-3 rounded-full bg-transparent border border-[#23233a] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all w-full"
                required
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="lastName"
                className="text-gray-400 mb-1 ml-1 text-sm"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Last name"
                className="px-5 py-3 rounded-full bg-transparent border border-[#23233a] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all w-full"
                required
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="company"
                className="text-gray-400 mb-1 ml-1 text-sm"
              >
                Company
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Company"
                className="px-5 py-3 rounded-full bg-transparent border border-[#23233a] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all w-full"
              />
            </div>
            <div className="flex flex-col items-start w-full">
              <label
                htmlFor="email"
                className="text-gray-400 mb-1 ml-1 text-sm"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                className="px-5 py-3 rounded-full bg-transparent border border-[#23233a] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all w-full"
                required
              />
            </div>
          </div>
          <div className="flex flex-col items-start w-full">
            <label
              htmlFor="message"
              className="text-gray-400 mb-1 ml-1 text-sm"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Enter your feedbacks, job offers, etc."
              rows={5}
              className="px-5 py-3 rounded-2xl bg-transparent border border-[#23233a] text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#a78bfa] transition-all w-full resize-none"
              required
            />
          </div>
          <a
            href="/contact"
            className="lg:mt-0 self-center lg:self-end pr-0 lg:pl-34 w-full lg:w-auto"
          >
            <button
              className="cursor-pointer ripple-container overflow-hidden relative select-none group/button px-4 py-2 ease-in-out active:scale-[0.99] transition-all duration-200 bg-gradient-to-br from-[#7c3aed] to-[#6533e2] border border-[#6533e2] text-white flex items-center gap-2 text-sm rounded-full w-full sm:w-auto"
              aria-label="Talk to us"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 w-full h-full rounded-[inherit] bg-black/50 left-0 -translate-x-full group-hover/button:translate-x-0 transition-all duration-500"
              ></span>
              <span className="relative z-10 pointer-events-none flex items-center gap-2 text-sm rounded-full">
                Talk to us
                <div className="relative w-4 h-4 flex justify-center items-center overflow-hidden">
                  {/* Chevron Right */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right absolute transition-all duration-300 group-hover/button:opacity-0 group-hover/button:translate-x-1 w-4 h-4 text-white"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                  {/* Arrow Right */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-arrow-right absolute opacity-0 transition-all duration-300 group-hover/button:opacity-100 group-hover/button:translate-x-0.5 w-4 h-4 text-white"
                  >
                    <path d="M5 12h14"></path>
                    <path d="m12 5 7 7-7 7"></path>
                  </svg>
                </div>
              </span>
            </button>
          </a>
        </form>
      </section>
      {/* Call to Action */}
      <Talktous />
      <div className="h-40" />
      <Footer />
    </div>
  );
}
