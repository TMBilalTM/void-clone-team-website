"use client";
import Image from "next/image";
import React from "react";
//import Header from ".././components/Header";
//import Talktous from ".././components/talktous";
//import Footer from ".././components/Footer";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import clsx from "clsx";


function WhyChooseUs() {
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, []);

  // Skeleton kartı
  const SkeletonCard = ({ className = "" }: { className?: string }) => (
    <div
      className={`card-border rounded-xl p-8 flex flex-col items-start justify-center text-center animate-pulse bg-[#181825]/60 ${className}`}
    >
      <div className="w-20 h-20 mb-4 bg-[#23233a] rounded-xl" />
      <div className="h-6 w-3/4 bg-[#23233a] rounded mb-2" />
      <div className="h-4 w-2/3 bg-[#23233a] rounded mb-2" />
      <div className="h-4 w-1/2 bg-[#23233a] rounded" />
    </div>
  );

  if (loading) {
    return (
      <section className="relative lg:-mt-52 h-[30rem] lg:h-screen justify-items-center max-w-7xl mx-auto px-2 sm:px-4">
        <div className="flex flex-col items-center justify-center text-center gap-2 mb-8 sm:mb-12">
          <div className="h-8 w-48 sm:w-64 bg-[#23233a] rounded mb-2 animate-pulse" />
          <div className="h-4 w-64 sm:w-80 bg-[#23233a] rounded animate-pulse" />
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
          <SkeletonCard className="md:w-2/6 w-full" />
          <div className="md:flex-1 flex flex-col gap-4 sm:gap-8 max-w-2xl w-full">
            <SkeletonCard className="w-full" />
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-1 w-full">
              <SkeletonCard className="flex-1" />
              <SkeletonCard className="flex-1" />
            </div>
          </div>
        </div>
      </section>
    );
  }

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--x", `${x}px`);
    e.currentTarget.style.setProperty("--y", `${y}px`);
  };

  const radialHover =
    "relative transition-all duration-300 before:content-[''] before:absolute before:inset-0 before:rounded-xl before:pointer-events-none before:opacity-0 group-hover:before:opacity-100 before:bg-[radial-gradient(circle_at_var(--x,_var(--y)),_rgba(167,139,250,0.18)_0%,_rgba(39,39,42,0.0)_70%)]";

  return (
    <section
      className="relative lg:-mt-2 h-[30rem] lg:h-screen justify-items-center max-w-7xl mx-auto px-2 sm:px-4"
      aria-label="Why you should choose us?"
    >
      <div className="flex flex-col items-center justify-center text-center gap-2 mb-8 sm:mb-12">
        <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300">
          Why you should choose us?
        </h1>
        <p className="text-sm sm:text-base font-medium text-gray-400 max-w-xs sm:max-w-xl">
          We are always trying to improve our services and products to make your
          life easier.
        </p>
      </div>

      <div className="flex flex-col md:flex-row gap-4 sm:gap-6">
     
        <div
          onMouseMove={handleMove}
          className={clsx(
            "card-border group md:w-2/6 w-full rounded-xl p-6 sm:p-8 flex flex-col items-start justify-center text-center",
            radialHover
          )}
        >
          <h2 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-2 sm:mb-4 w-full sm:w-80">
            Understand the importance of privacy
          </h2>
          <p className="text-center font-medium text-gray-500 max-w-xs mb-4 sm:mb-8 text-sm sm:text-base">
            Your privacy matters to us. That`s why we do our best to protect
            your privacy.
          </p>
          <div className="w-full flex-grow flex items-center justify-center">
            <Image
              src="https://illustrations.popsy.co/amber/man-riding-a-rocket.svg"
              alt="Privacy illustration"
              width={200}
              height={200}
              className="object-contain w-40 sm:w-80 h-auto invert mt-4 sm:mt-8"
            />
          </div>
        </div>

        {/* Right column */}
        <div className="md:flex-1 flex flex-col gap-4 sm:gap-8 max-w-2xl w-full">
       
          <div
            onMouseMove={handleMove}
            className={clsx(
              "card-border border border-transparent rounded-xl p-4 sm:p-6 flex flex-col sm:flex-row justify-between items-center w-full",
              radialHover
            )}
          >
            <div className="flex-1">
              <h2 className="text-lg sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-2 sm:mb-4">
                Design with globalization in mind
              </h2>
              <p className="text-sm sm:text-base font-medium text-gray-500">
                We design to work in every language. Reach your customers from
                anywhere in the world.
              </p>
            </div>
            <div className="flex-shrink-0 ml-0 sm:ml-20 mt-4 sm:mt-0">
              <Image
                src="https://illustrations.popsy.co/amber/woman-hugging-earth.svg"
                alt="Globalization illustration"
                width={100}
                height={100}
                className="object-contain w-32 sm:w-60 h-32 sm:h-60 invert"
              />
            </div>
          </div>

          {/* Bottom two cards */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 flex-1 w-full">
            {/* Left bottom card */}
            <div
              onMouseMove={handleMove}
              className={clsx(
                "card-border rounded-xl p-6 sm:p-8 flex flex-col items-start justify-center text-center w-full",
                radialHover
              )}
            >
              <h2 className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-1 sm:mb-2">
                Strive to do the best for everyone
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500">
                We create designs tailored for each individual. Our designs are
                crafted to meet the needs of everyone.
              </p>
            </div>

            {/* Right bottom card */}
            <div
              onMouseMove={handleMove}
              className={clsx(
                "card-border border border-transparent rounded-xl p-4 sm:p-6 flex flex-col items-center justify-center text-center w-full",
                radialHover
              )}
            >
              <h2 className="text-base sm:text-xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-1 sm:mb-2">
                Leverage cutting-edge technologies
              </h2>
              <p className="text-xs sm:text-sm font-medium text-gray-500">
                We always utilize the latest technologies, ensuring that we
                consistently deliver the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}




export default function Home() {
  return (
    <>
      {/* Navbar */}
     {/*<Header />*/}
      {/* Hero background gradients and SVGs */}
      <main className="min-h-screen pb-8 sm:pb-12 space-y-24 sm:space-y-56 my-12 sm:my-24">
        <div
          className="absolute inset-x-0 -top-20 sm:-top-40 transform-gpu overflow-hidden blur-3xl pointer-events-none -z-50 opacity-90"
          aria-hidden="true"
        >
          <div
            className="relative left-1/2 aspect-[1155/678] w-[20rem] sm:w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-void-primary-default to-void-primary-hover opacity-30 sm:left-[calc(50%-30rem)]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          ></div>
        </div>
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-0 w-[1000px] z-[-1] h-[400px] left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.15] pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(rgb(164, 164, 163), transparent 50%)",
          }}
        ></div>
        <svg
          className="absolute z-[-2] pointer-events-none inset-0 h-full w-full stroke-void-gray-2 [mask-image:radial-gradient(100%_100%_at_top_center,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="83fd4e5a-9d52-42fc-97b6-718e5d7ee527"
              width="200"
              height="200"
              x="50%"
              y="-1"
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none"></path>
            </pattern>
          </defs>
          <svg x="50%" y="-1" className="overflow-visible fill-void-gray-2/20">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth="0"
            ></path>
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#83fd4e5a-9d52-42fc-97b6-718e5d7ee527)"
          ></rect>
        </svg>
        {/* Hero Section */}
        <section
          aria-label="Hero"
          id="hero-section"
          className="relative lg:-mt-22 h-[22rem] sm:h-[30rem] lg:h-screen justify-items-center sm:mb-[500px] mb-60"
        >
          <div className="w-full flex flex-col justify-center h-full items-center text-center gap-2 sm:gap-4">
            <span className="text-xs font-medium tracking-wider text-violet-400 bg-violet-500/5 rounded-full py-1 px-3 sm:py-1.5 sm:px-3.5">
              we are working for your future
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-8xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mt-2 max-w-xs sm:max-w-3xl flex flex-col">
              <span className="inline-block">Shape the</span>
              <span className="inline-block">Future of Web</span>
            </h1>
            <p className="text-xs sm:text-sm lg:text-base font-medium text-gray-500 mt-2 max-w-xs sm:max-w-xl">
              Just one more step to your dream website
            </p>
          </div>
          <div
            className="absolute inset-x-0 top-[calc(100%-8rem)] sm:top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl opacity-50"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-void-primary-default to-void-primary-hover opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            ></div>
          </div>
        </section>
        <div className="relative"> <WhyChooseUs /></div>
        {/* Services Section */}
        <section
          className="relative justify-items-center px-2 sm:px-0 mt-24 sm:mt-0"
          aria-label="Services we provide"
        >
          <div className="flex flex-col items-center justify-center text-center gap-2 py-8 sm:py-12">
            <h1 className="text-xl sm:text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300">
              Our Services and Areas of Expertise
            </h1>
            <p className="text-sm sm:text-base font-medium text-gray-400 max-w-xs sm:max-w-xl">
              Here are the services and areas of expertise we provide. You can
              trust us with your next project.
            </p>
          </div>
          {/* Slider */}
          {(() => {
            const services = [
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-eye w-7 h-7 text-gray-400"
                  >
                    <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path>
                    <circle cx="12" cy="12" r="3"></circle>
                  </svg>
                ),
                title: "Innovative Solutions for Your Vision",
                desc: "Tailored services to bring your unique vision to life.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-rocket w-7 h-7 text-gray-400"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                  </svg>
                ),
                title: "Tomorrow's Solutions, Today's Technologies",
                desc: "Stay ahead with solutions crafted using the latest technologies.",
              },

              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-palette w-7 h-7 text-gray-400"
                  >
                    <circle cx="13.5" cy="6.5" r=".5"></circle>
                    <circle cx="17.5" cy="10.5" r=".5"></circle>
                    <circle cx="8.5" cy="7.5" r=".5"></circle>
                    <circle cx="6.5" cy="12.5" r=".5"></circle>
                    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"></path>
                  </svg>
                ),
                title: "Excellence in Design: Tailored for Everyone",
                desc: "Crafting designs that cater to the uniqueness of every individual.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-globe w-7 h-7 text-gray-400"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                    <path d="M2 12h20"></path>
                  </svg>
                ),
                title: "Global Impact, Local Connection",
                desc: "Connect with a global audience through designs with a local touch.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-shield w-7 h-7 text-gray-400"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path>
                  </svg>
                ),
                title: " Privacy Priority: Safeguarding Your Confidentiality",
                desc: "Ensuring your privacy is our top priority with extra measures.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-languages w-7 h-7 text-gray-400"
                  >
                    <path d="m5 8 6 6"></path>
                    <path d="m4 14 6-6 2-3"></path>
                    <path d="M2 5h12"></path>
                    <path d="M7 2h1"></path>
                    <path d="m22 22-5-10-5 10"></path>
                    <path d="M14 18h6"></path>
                  </svg>
                ),
                title: "Language is No Barrier: Designs for Everyone",
                desc: "Break language barriers with designs that resonate universally.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-trophy w-7 h-7 text-gray-400"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path>
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path>
                    <path d="M4 22h16"></path>
                    <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path>
                    <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path>
                    <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path>
                  </svg>
                ),
                title: " Striving for Excellence: Every Design a Masterpiece",
                desc: "Meticulously crafting designs in our pursuit of excellence.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-code w-7 h-7 text-gray-400"
                  >
                    <polyline points="16 18 22 12 16 6"></polyline>
                    <polyline points="8 6 2 12 8 18"></polyline>
                  </svg>
                ),
                title: "Leading with Cutting-Edge Technology Solutions",
                desc: "Stay at the forefront with technology solutions that lead the way.",
              },
              {
                icon: (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-user w-7 h-7 text-gray-400"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                ),
                title:
                  "Your Needs, Our Priority: Designs for Every Unique Individual",
                desc: "Prioritizing your needs, delivering designs tailored to each individual.",
              },
            ];

            // Return the carousel JSX
            return (
              <div className="w-full max-w-xs sm:max-w-5xl mx-auto">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {services.map((item, idx) => (
                      <CarouselItem
                        key={idx}
                        className="w-full px-0 md:px-2 basis-full md:basis-1/2 lg:basis-1/3 flex-shrink-0"
                      >
                        <div className="h-full flex flex-col w-full">
                          <Card className="h-full border border-[#232336] rounded-2xl shadow-lg transition-all duration-300 w-full mb-4 sm:mb-0">
                            <CardContent className="flex flex-col items-start justify-start p-4 h-38">
                              <div className="mb-4 flex items-center justify-center w-12 h-12 rounded-full ">
                                {item.icon}
                              </div>
                              <h2 className="line-clamp-1 text-base font-bold text-transparent bg-clip-text bg-gradient-to-br from-gray-100 to-indigo-300 mb-1 text-left">
                                {item.title}
                              </h2>
                              <p className="text-sm font-medium text-[#8b8ba7] text-left">
                                {item.desc}
                              </p>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  {/* Oklar kartların altında ortalanmış şekilde */}
                  <div className="flex justify-center sm:justify-end mt-2 sm:mt-6 gap-2">
                    <CarouselPrevious className="relative left-0 top-0 size-8 sm:size-10 border border-[#232336] text-gray-500 shadow transition-all duration-200" />
                    <CarouselNext className="relative left-0 top-0 size-8 sm:size-10 border border-[#232336] text-gray-500 shadow transition-all duration-200" />
                  </div>
                </Carousel>
              </div>
            );
          })()}
        </section>
        {/* Call to Action Section */}
        {/*<Talktous />*/}
      </main>
     {/*} <Footer />*/}
      <style jsx global>{`
          @media (min-width: 1300px) {
            #hero-section {
              margin-bottom: 0 !important;
            }
          }
        `}</style>
    </>
  );
}