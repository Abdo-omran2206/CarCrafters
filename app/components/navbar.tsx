"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import gsap from "gsap";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const navItemsRef = useRef<HTMLLIElement[]>([]);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Create timeline for entrance animations
      const tl = gsap.timeline();

      // Navbar slides down
      tl.fromTo(
        headerRef.current,
        { y: -100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
      );

      // Logo rotates and scales in
      tl.fromTo(
        logoRef.current,
        { scale: 0, rotation: -180 },
        { scale: 1, rotation: 0, duration: 0.8, ease: "back.out(1.7)" },
        "-=0.6"
      );

      // Nav items stagger in
      tl.fromTo(
        navItemsRef.current,
        { y: -20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      );

      // Button fades in
      tl.fromTo(
        buttonRef.current,
        { opacity: 0, x: 20 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  const handleLogoHover = (isHovering: boolean) => {
    gsap.to(logoRef.current, {
      scale: isHovering ? 1.1 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleButtonHover = (isHovering: boolean) => {
    gsap.to(buttonRef.current, {
      scale: isHovering ? 1.05 : 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md py-1 px-12 flex justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <div
        ref={logoRef}
        onClick={() => onNavigate("Home")}
        onMouseEnter={() => handleLogoHover(true)}
        onMouseLeave={() => handleLogoHover(false)}
        className="cursor-pointer"
      >
        <Image
          src="/logol.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-row gap-10 text-white text-lg font-medium">
          {["Home", "About", "Featured Cars", "Contact"].map((item, index) => (
            <li
              key={index}
              ref={(el) => {
                if (el) navItemsRef.current[index] = el;
              }}
              onClick={() => onNavigate(item)}
              className="relative cursor-pointer transition-colors hover:text-blue-500 duration-100 group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 transform group-hover:translate-x-0 -translate-x-1/2"></span>
            </li>
          ))}
        </ul>
      </nav>

      <button
        ref={buttonRef}
        onClick={() => onNavigate("Featured Cars")}
        onMouseEnter={() => handleButtonHover(true)}
        onMouseLeave={() => handleButtonHover(false)}
        className="px-7 py-2 bg-blue-700 text-white rounded-full text-md shadow-[0_0_15px_rgba(29,78,216,0.5)]"
      >
        Get Started
      </button>
    </header>
  );
}
