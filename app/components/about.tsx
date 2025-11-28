"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import CountUp from "./bits/numcounter";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Title and subtitle animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );

      // Paragraph animation
      gsap.fromTo(
        paragraphRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
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

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/about.jpg"
          alt="About Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl gap-8 text-left px-6 h-screen justify-center flex flex-col text-white">
        <div>
          <div ref={titleRef}>
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              About CarCrafters
            </h1>
            <h4 className="text-xl md:text-md mb-6 font-semibold">
              Your Trusted Partner in Finding the Perfect Vehicle
            </h4>
          </div>
          <p
            ref={paragraphRef}
            className="text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            At CarCrafters, we&apos;re revolutionizing the way people buy cars.
            With thousands of quality vehicles and a commitment to transparency,
            we make car shopping simple, safe, and satisfying. Whether
            you&apos;re looking for your first car or upgrading to your dream
            ride, we&apos;re here to help you every step of the way.
          </p>
        </div>
      </div>
    </section>
  );
}

export function WhyUs() {
  const sectionRef = useRef<HTMLElement>(null);
  const carImageRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const descriptionRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Car image slides up
      gsap.fromTo(
        carImageRef.current,
        { y: 100, opacity: 0 },
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
          duration: 0.6,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 60%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stats slide from left
      gsap.fromTo(
        statsRef.current,
        { x: -100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );

      // Description slides from right
      gsap.fromTo(
        descriptionRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 50%",
            end: "top 20%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full mb-12 mt-5"
    >
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/whyus.jpeg"
          alt="Logo"
          width={1100}
          height={1100}
          className="w-screen h-screen object-center"
        />
        <div
          ref={carImageRef}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/5 w-full flex justify-center"
        >
          <Image
            src="/whyus-car.png"
            alt="Logo"
            width={1100}
            height={1100}
            className="brightness-50 w-190 h-100 object-contain"
          />
        </div>
      </div>

      {/* محتوى الصفحة */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-15">
        <h1
          ref={titleRef}
          className="text-4xl md:text-5xl font-bold text-white mb-0 "
        >
          Why Choose CarCrafters
        </h1>
      </div>

      <div className="relative z-10 flex flex-row items-center justify-between h-full ">
        <div
          ref={statsRef}
          className="flex flex-col gap-30 px-10 py-10 justify-around  text-white text-2xl font-semibold"
        >
          <div className="text">
            <span className="block text-7xl drop-shadow-[2px_2px_2px_black]">
              <CountUp
                from={0}
                to={100}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text "
              />
              +
            </span>
            <span className="drop-shadow-[2px_2px_2px_black]">
              types of machines
            </span>
          </div>
          <div>
            <span className="block text-7xl drop-shadow-[2px_2px_2px_black]">
              <CountUp
                from={0}
                to={20}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text "
              />
              K+
            </span>
            <span className="drop-shadow-[2px_2px_2px_black]">
              client served
            </span>
          </div>
        </div>

        <div ref={descriptionRef} className=" px-10 h-50">
          <p className="text-lg md:text-2xl drop-shadow-[2px_2px_2px_black] text-white max-w-4xl">
            We want you to have a sbess-free rental experience, so we make it
            naty to hire a car by providing simple search tools customer reviews
            and plenty of pic locations across the city
          </p>
        </div>
      </div>
    </section>
  );
}
