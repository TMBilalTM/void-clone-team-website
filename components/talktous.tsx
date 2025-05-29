"use client";

export default function Talktous() {
  return (
    <section
      className="relative justify-items-center -mb-20 sm:-mb-40 pb-0"
      aria-label="Call to Action"
    >
      <div className="h-full bg-void-gray-2 p-[1px] rounded-3xl">
        <div className="relative overflow-hidden bg-void-body h-full flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-40 p-6 sm:p-12 lg:p-24 rounded-[inherit]">
          <div className="w-full lg:w-auto">
            <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300">
              Ready to improve your workflow?
            </h1>
            <p className="text-gray-400 text-xs sm:text-sm mt-2 lg:mt-1">
              We are always ready to help you. You can contact us at any
              time.
            </p>
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
          className="lucide lucide-chevron-right absolute transition-all duration-300 group-hover/button:opacity-0 group-hover/button:translate-x-1 w-4 h-4"
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
          className="lucide lucide-arrow-right absolute opacity-0 transition-all duration-300 group-hover/button:opacity-100 group-hover/button:translate-x-0.5 w-4 h-4"
        >
          <path d="M5 12h14"></path>
          <path d="m12 5 7 7-7 7"></path>
        </svg>
      </div>
    </span>
  </button>
</a>


          <div className="glow !opacity-10 !bottom-0"></div>
        </div>
      </div>
    </section>
  );
}
