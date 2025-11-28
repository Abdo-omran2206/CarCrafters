"use client";
import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const button1Ref = useRef<HTMLButtonElement>(null);
  const button2Ref = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Title slides up
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
      );

      // Subtitle slides from left
      tl.fromTo(
        subtitleRef.current,
        { opacity: 0, x: -50 },
        { opacity: 1, x: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

      // Buttons container slides up
      tl.fromTo(
        buttonsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power2.out" },
        "-=0.4"
      );
    });

    return () => ctx.revert();
  }, []);

  const handleButtonHover = (
    ref: React.RefObject<HTMLButtonElement | null>,
    isHovering: boolean,
    bgColor?: string
  ) => {
    gsap.to(ref.current, {
      scale: isHovering ? 1.05 : 1,
      backgroundColor: isHovering && bgColor ? bgColor : undefined,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <>
      <section className="hero relative overflow-hidden h-screen top-7">
        <video
          src="/car-hero.mp4"
          autoPlay
          loop
          muted
          className="absolute top-0 left-0 w-full h-full object-cover"
        ></video>

        <div className="absolute top-0 left-0 w-full h-full bg-black/30"></div>

        <div className="relative flex flex-col justify-center items-start h-full px-10 max-w-4xl">
          <div ref={containerRef} className="flex flex-col gap-6">
            <h1
              ref={titleRef}
              className="text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-[2px_2px_2px_black] text-white w-full tracking-widest leading-tight"
            >
              Find Your Perfect Car
            </h1>

            <p
              ref={subtitleRef}
              className="text-2xl text-white max-w-lg drop-shadow-[2px_2px_2px_black]"
            >
              Browse thousands of quality vehicles at unbeatable prices
            </p>

            <div ref={buttonsRef} className="flex gap-10 mt-4">
              <button
                ref={button1Ref}
                onMouseEnter={() =>
                  handleButtonHover(button1Ref, true, "#1e3a8a")
                }
                onMouseLeave={() => handleButtonHover(button1Ref, false)}
                className="px-10 py-4 bg-blue-700 text-white rounded-full drop-shadow-[2px_2px_2px_black] text-xl transition duration-300"
              >
                Browse Inventory
              </button>

              <button
                ref={button2Ref}
                onMouseEnter={() =>
                  handleButtonHover(button2Ref, true, "#1d4ed8")
                }
                onMouseLeave={() => handleButtonHover(button2Ref, false)}
                className="px-10 py-4 text-white text-xl drop-shadow-[2px_2px_2px_black] border-2 border-blue-700 rounded-full transition duration-300"
              >
                Create account
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
