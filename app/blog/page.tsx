"use client";
import Header from "../../components/Header";
import React from "react";
import Talktous from "../../components/talktous";
import Footer from "../../components/Footer";
import Image from "next/image";
import { RadialGlow } from "../../components/ui/radial-glow";

export default function Blog() {
  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <Header />
      <div className="h-12 md:h-20" />

      {/* Main Section */}
      <section className="w-full mt-16 md:mt-24 px-4 sm:px-8" aria-label="Latest blog posts">
        <div className="flex flex-col items-center justify-center text-center gap-3 mb-16">
          <span className="text-sm sm:text-base text-transparent bg-clip-text bg-gradient-to-br from-violet-500 to-indigo-600 font-semibold">
            Void Blog
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 leading-tight">
            Articles
          </h1>
          <p className="text-sm sm:text-base font-medium text-gray-500 max-w-md sm:max-w-lg">
            Hear from our experts about the latest technologies and our experiences.
          </p>
        </div>

        {/* RadialGlow örnek kart */}
        <RadialGlow className="max-w-md mx-auto p-8 rounded-2xl border border-[#23233a] bg-[#181825]/60 mb-8">
          <h2 className="text-lg font-bold mb-2">Radial Glow Hover Efekti</h2>
          <p className="text-gray-400">Bu kartın üstüne mouse ile gelince ışık efekti oluşur.</p>
        </RadialGlow>

        {/* Article Card */}
        <section className="max-w-7xl mx-auto flex flex-col gap-6">
          <a
            className="group flex flex-col lg:flex-row items-center gap-6 lg:gap-10 w-full"
            href="#"
          >
            <div className="flex flex-col items-start justify-start gap-2 w-full max-w-md flex-shrink-0">
              <span className="text-xs sm:text-sm bg-gradient-to-br from-gray-200 to-indigo-400 bg-clip-text text-transparent uppercase font-medium tracking-widest mb-1">
                Featured
              </span>
             
            </div>

            <div className="relative w-full h-56 sm:h-72 lg:w-[700px] border-none lg:h-80 rounded-xl bg-[#112] overflow-hidden flex-shrink-0">
              <Image
                src="/images/sample-article.jpg"
                width={700}
                height={352}
                className="w-full h-full object-cover "
                alt="Featured"
              />
            </div>
          </a>
        </section>
      </section>

      <div className="h-32 sm:h-40" />
      <Talktous />
      <div className="h-20 sm:h-28" />
      <Footer />
    </div>
  );
}
