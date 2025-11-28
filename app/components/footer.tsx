"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const bottomBarRef = useRef<HTMLDivElement>(null);
  const navLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const quickLinksRef = useRef<(HTMLLIElement | null)[]>([]);
  const socialLinksRef = useRef<(HTMLLIElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Footer entrance
      gsap.fromTo(
        footerRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Stagger columns
      gsap.fromTo(
        [linksRef.current, logoRef.current, contactRef.current],
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.5,
          stagger: 0.2,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      // Bottom bar
      gsap.fromTo(
        bottomBarRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.8,
          delay: 0.4,
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  const handleLinkHover = (
    ref: HTMLLIElement | null,
    isHovering: boolean,
    withScale = false
  ) => {
    if (!ref) return;
    gsap.to(ref, {
      x: isHovering && !withScale ? 5 : 0,
      scale: isHovering && withScale ? 1.1 : 1,
      color: isHovering ? "#60a5fa" : "#9ca3af",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <footer
      ref={footerRef}
      className="w-full bg-linear-to-b from-black via-blue-950 to-black px-6 py-10 text-gray-400"
    >
      {/* Top Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 text-center md:text-left">
        {/* Links */}
        <div ref={linksRef}>
          <h2 className="text-white text-xl font-semibold mb-3">
            Navigation Links
          </h2>

          <ul className="flex flex-col gap-4 text-white text-lg font-medium">
            {["Home", "About", "Featured Cars", "Contact"].map(
              (item, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    navLinksRef.current[index] = el;
                  }}
                  onMouseEnter={() =>
                    handleLinkHover(navLinksRef.current[index], true)
                  }
                  onMouseLeave={() =>
                    handleLinkHover(navLinksRef.current[index], false)
                  }
                  className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-blue-400 cursor-pointer transition-colors"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Logo */}
        <div
          ref={logoRef}
          className="flex flex-col justify-center items-center gap-4"
        >
          <Image
            src="/logol.png"
            alt="Logo"
            width={150}
            height={150}
            className="opacity-90"
          />
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} CarCrafters. All rights reserved.
          </p>
        </div>

        {/* Contact Info */}
        <div
          ref={contactRef}
          className="text-gray-300 text-sm leading-relaxed max-w-xs pl-20 mx-auto md:mx-0"
        >
          <h2 className="text-white text-xl font-semibold mb-3">Contact</h2>
          <p>123 Main Street, Atlanta, GA 30301</p>
          <p>(555) 123-4567</p>
          <p>info@carcrafters.com</p>
          <p>www.carcrafters.com</p>
          <br />
          <p>Mon–Fri: 8AM–6PM</p>
          <p>Saturday: 9AM–3PM</p>
          <p>Sunday: Closed</p>
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        ref={bottomBarRef}
        className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left"
      >
        {/* Quick Links */}
        <div>
          <ul className="flex gap-6 justify-center md:justify-start text-sm">
            {["Site Map", "Privacy Policy", "Terms of Service", "Feeds"].map(
              (item, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    quickLinksRef.current[index] = el;
                  }}
                  onMouseEnter={() =>
                    handleLinkHover(quickLinksRef.current[index], true)
                  }
                  onMouseLeave={() =>
                    handleLinkHover(quickLinksRef.current[index], false)
                  }
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <ul className="flex gap-6 justify-center text-sm">
            {["Facebook", "Twitter", "Instagram", "YouTube"].map(
              (item, index) => (
                <li
                  key={index}
                  ref={(el) => {
                    socialLinksRef.current[index] = el;
                  }}
                  onMouseEnter={() =>
                    handleLinkHover(socialLinksRef.current[index], true, true)
                  }
                  onMouseLeave={() =>
                    handleLinkHover(socialLinksRef.current[index], false, true)
                  }
                  className="cursor-pointer transition-transform"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      </div>
    </footer>
  );
}
