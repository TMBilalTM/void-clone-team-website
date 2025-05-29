"use client";
import Link from "next/link";


export default function Footer() {
;

  return (
 <footer className="bg-void-body relative justify-items-center overflow-hidden pt-0">
          <div className="glow !opacity-5 lg:!opacity-10 !top-32"></div>
          <div className="overflow-hidden relative container py-12">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
              <div className="space-y-2">
                <Link href="/" className="flex items-center gap-2">
                  <p className="text-2xl font-semibold text-white">
                    void
                    <span className="text-[#7c3aed]">.</span>
                  </p>
                </Link>
                <p className="text-gray-400 text-sm">
                  Void Development is a development team founded in 2019. We
                  generally support open-source projects. And of course, we are
                  always developing new projects.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between col-span-2 gap-12">
                <div className="space-y-5">
                  <h2 className="text-white font-semibold text-base">
                    Company
                  </h2>
                  <div>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_self"
                      href="/about"
                    >
                      <span className="sr-only">About</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            About
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-20 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            About
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="https://careers.voiddevs.co"
                    >
                      <span className="sr-only">Careers</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Careers
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-20 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Careers
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="/press"
                    >
                      <span className="sr-only">Press</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Press
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-20 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Press
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="/affiliates"
                    >
                      <span className="sr-only">Affiliates</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Affiliates
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-20 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Affiliates
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="space-y-5">
                  <h2 className="text-white font-semibold text-base">
                    Resources
                  </h2>
                  <div>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_self"
                      href="https://status.voiddevs.co"
                    >
                      <span className="sr-only">System Status</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            System Status
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-8 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            System Status
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="/support"
                    >
                      <span className="sr-only">Support</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Support
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-20 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Support
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="space-y-5">
                  <h2 className="text-white font-semibold text-base">Legal</h2>
                  <div>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="/legal/privacy"
                    >
                      <span className="sr-only">Privacy Policy</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Privacy Policy
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-8 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Privacy Policy
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="/legal/terms"
                    >
                      <span className="sr-only">Terms of Service</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Terms of Service
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-8 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Terms of Service
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-50 pointer-events-none"
                      target="_self"
                      href="/legal/cookies"
                    >
                      <span className="sr-only">Cookie Policy</span>
                      <span
                        aria-hidden="true"
                        className="relative h-4 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-50 pointer-events-none">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Cookie Policy
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-8 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Cookie Policy
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
                <div className="space-y-5">
                  <h2 className="text-white font-semibold text-base">
                    Social Media
                  </h2>
                  <div>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_blank"
                      href="/discord"
                    >
                      <span className="sr-only">Discord</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Discord
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-10 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Discord
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_blank"
                      href="/twitter"
                    >
                      <span className="sr-only">Twitter</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Twitter
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-10 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Twitter
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_blank"
                      href="/github"
                    >
                      <span className="sr-only">Github</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Github
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-10 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Github
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_blank"
                      href="/linkedin"
                    >
                      <span className="sr-only">Linkedin</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Linkedin
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-10 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Linkedin
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_blank"
                      href="/instagram"
                    >
                      <span className="sr-only">Instagram</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            Instagram
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-10 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            Instagram
                          </span>
                        </div>
                      </span>
                    </a>
                    <a
                      className="py-1.5 items-center text-gray-400 no-underline flex text-sm select-none opacity-100 group/link"
                      target="_blank"
                      href="/youtube"
                    >
                      <span className="sr-only">YouTube</span>
                      <span
                        aria-hidden="true"
                        className="relative h-5 overflow-hidden p-0"
                      >
                        <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                          <span className="block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0">
                            YouTube
                          </span>
                          <span className="block font-medium text-sm transform-origin left center transform rotate-10 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white">
                            YouTube
                          </span>
                        </div>
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-24 flex flex-col lg:flex-row items-center justify-center lg:justify-between">
              <p className="text-gray-400 text-sm">
                © 2019 — 2025 Void Development, Ltd.
              </p>
            </div>
          </div>
        </footer>
  );
}
