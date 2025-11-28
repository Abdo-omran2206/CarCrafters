"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Cta() {
  const sectionRef = useRef<HTMLElement>(null);
  const carImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const buttonContainerRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Car image slides up
      gsap.fromTo(
        carImageRef.current,
        { y: 200, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );

      // Title scales up
      gsap.fromTo(
        titleRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );

      // Button container slides up
      gsap.fromTo(
        buttonContainerRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          delay: 0.2,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (isHovering: boolean) => {
    gsap.to(buttonRef.current, {
      scale: isHovering ? 1.1 : 1,
      boxShadow: isHovering
        ? "0px 0px 20px rgba(59, 130, 246, 0.6)"
        : "0px 4px 6px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <section
      ref={sectionRef}
      className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden"
    >
      <div>
        <div className="absolute inset-0 -z-10 blur-sm">
          <Image
            src="/cta.jpg"
            alt="Logo"
            width={1100}
            height={1100}
            className="w-screen h-screen brightness-90 object-center"
          />
          <div
            ref={carImageRef}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
          >
            <Image
              src="/cta-car.png"
              alt="Logo"
              width={1100}
              height={1100}
              className="h-100 w-500 object-contain"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-20 z-10">
        <h1 ref={titleRef} className="text-6xl font-bold drop-shadow-xl">
          Which One Would You Drive?
        </h1>
        <div ref={buttonContainerRef}>
          <button
            ref={buttonRef}
            onMouseEnter={() => handleButtonHover(true)}
            onMouseLeave={() => handleButtonHover(false)}
            className="
  px-20 py-3
  bg-linear-to-r from-blue-600 to-blue-800
  hover:from-blue-700 hover:to-blue-900
  rounded-full
  text-xl font-semibold
  shadow-lg shadow-blue-900/40
  transition-all duration-300
  border border-blue-400/20
"
          >
            Find Yours
          </button>
        </div>
      </div>
    </section>
  );
}
