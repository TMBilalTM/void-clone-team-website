"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Menü açıkken body scroll'unu engelle
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Works", href: "/works" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 z-[9999997] w-full h-20 transition-all duration-300
          ${
            scrolled
              ? "bg-black/60 backdrop-blur-md shadow-lg"
              : "bg-transparent backdrop-blur-none"
          }`}
      >
        <ol className="container grid grid-cols-6 h-full mx-auto">
          {/* Logo */}
          <li className="col-span-1 flex items-center justify-start">
            <Link href="/" className="flex items-center gap-2 pl-0 lg:pl-40">
              <p className="text-2xl font-semibold text-white">
                void
                <span className="text-[#7c3aed]">.</span>
              </p>
            </Link>
          </li>
          {/* Menu - Desktop */}
          <li className="hidden lg:flex lg:col-span-4 items-center justify-center">
            <ul className="flex gap-8">
              {menuItems
                .filter((i) => i.name !== "Blog")
                .map((item) => {
                  const isActive =
                    item.href === "/"
                      ? pathname === "/"
                      : pathname.startsWith(item.href);
                  return (
                    <li key={item.name}>
                      <Link
                        className={`py-1.5 items-center no-underline flex text-sm select-none ${
                          isActive
                            ? "text-white font-bold"
                            : "text-gray-400 opacity-100 group/link"
                        }`}
                        href={item.href}
                      >
                        <span className="sr-only">{item.name}</span>
                        <span
                          aria-hidden="true"
                          className="relative h-4 overflow-hidden p-0"
                        >
                          <div className="duration-[0.4s] transition-all group-hover/link:-translate-y-5 opacity-100">
                            <span
                              className={`block font-medium text-sm transform-origin right center group-hover/link:rotate-[20deg] duration-200 transition-all group-hover/link:opacity-0 ${
                                isActive ? "text-white" : ""
                              }`}
                            >
                              {item.name}
                            </span>
                            <span
                              className={`block font-medium text-sm transform-origin left center transform rotate-20 group-hover/link:rotate-0 duration-200 transition-all group-hover/link:text-white ${
                                isActive ? "text-white" : ""
                              }`}
                            >
                              {item.name}
                            </span>
                          </div>
                        </span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </li>
          {/* Console Button - Desktop */}
          <li className="hidden lg:col-span-1 lg:flex items-center justify-end pr-0 lg:pr-40">
            <a href="#">
              <button
                className=" cursor-pointer ripple-container overflow-hidden relative select-none group/button px-4 py-2 ease-in-out active:scale-[0.99] transition-all duration-200 bg-gradient-to-br from-[#7c3aed] to-[#6533e2] border border-[#6533e2] text-white flex items-center gap-2 text-sm rounded-full"
                aria-label="Console"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 w-full h-full rounded-[inherit] bg-black/50 left-0 -translate-x-full group-hover/button:translate-x-0 transition-all duration-500"
                ></span>
                <span className="relative z-10 pointer-events-none flex items-center gap-2 text-sm rounded-full">
                  Console
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-chevron-right w-4 h-4"
                  >
                    <path d="m9 18 6-6-6-6"></path>
                  </svg>
                </span>
              </button>
            </a>
          </li>
          {/* Hamburger Menu - Mobile */}
          <li className="col-span-5 flex lg:hidden items-center justify-end">
            <button
              className="ripple-container overflow-hidden relative select-none group/button px-4 py-2 ease-in-out active:scale-[0.99] transition-all duration-200 bg-gradient-to-br from-[#7c3aed] to-[#6533e2] border border-[#6533e2]  text-white flex justify-center items-center text-sm rounded-full w-10 h-10"
              aria-label="Menu"
              onClick={() => setMenuOpen(true)}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 w-full h-full rounded-[inherit] bg-black/50 left-0 -translate-x-full group-hover/button:translate-x-0 transition-all duration-500"
              ></span>
              <span className="relative z-10 pointer-events-none flex justify-center items-center text-sm rounded-full w-10 h-10">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu w-4 h-4"
                >
                  <line x1="4" x2="20" y1="12" y2="12"></line>
                  <line x1="4" x2="20" y1="6" y2="6"></line>
                  <line x1="4" x2="20" y1="18" y2="18"></line>
                </svg>
              </span>
            </button>
          </li>
        </ol>
      </nav>
      {/* Mobil Menü */}
      <div
        className={`fixed left-0 right-0 bottom-0 z-[9999998] transition-transform duration-300 ease-in-out ${
          menuOpen ? "translate-y-0" : "translate-y-full"
        }`}
        style={{
          background: "#111018",
          borderTopLeftRadius: "1.5rem",
          borderTopRightRadius: "1.5rem",
          boxShadow: "0 -8px 32px 0 #0008",
        }}
      >
        <div className="flex flex-col gap-6 px-8 pt-10 pb-6">
          {menuItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-lg font-normal ${
                pathname === item.href ? "text-white" : "text-gray-400"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a href="#">
            <button
              className="w-full cursor-pointer ripple-container overflow-hidden relative select-none group/button px-4 py-2 ease-in-out active:scale-[0.99] transition-all duration-200 bg-gradient-to-br from-[#7c3aed] to-[#6533e2] border border-[#6533e2] text-white flex items-center gap-2 text-sm rounded-full"
              aria-label="Console"
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 w-full h-full rounded-[inherit] bg-black/50 left-0 -translate-x-full group-hover/button:translate-x-0 transition-all duration-500"
              ></span>
              <span className="relative z-10 pointer-events-none flex items-center gap-2 text-sm rounded-full ">
                Console
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-chevron-right w-4 h-4"
                >
                  <path d="m9 18 6-6-6-6"></path>
                </svg>
              </span>
            </button>
          </a>
          <button
            className="absolute top-4 right-6 text-gray-400 text-2xl"
            onClick={() => setMenuOpen(false)}
            aria-label="Kapat"
          >
            ×
          </button>
        </div>
      </div>
      {/* Menü açıkken arka planı karart */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[9999997] bg-black/40 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </>
  );
}
