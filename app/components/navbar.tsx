"use client";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleNavigate = (page: string) => {
    onNavigate(page);
    setIsOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md py-1 px-6 md:px-12 flex justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        onClick={() => handleNavigate("Home")}
        className="cursor-pointer"
      >
        <Image
          src="/logol.png"
          alt="Logo"
          width={70}
          height={70}
          className="rounded-full"
        />
      </motion.div>

      {/* Desktop Navigation */}
      <nav className="hidden md:block">
        <motion.ul
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.3,
                delayChildren: 0.5,
              },
            },
          }}
          className="flex flex-row gap-10 text-white text-lg font-medium"
        >
          {["Home", "About", "Featured Cars", "Contact"].map((item, index) => (
            <motion.li
              key={index}
              variants={{
                hidden: { y: -20, opacity: 0 },
                visible: { y: 0, opacity: 1 },
              }}
              onClick={() => handleNavigate(item)}
              className="relative cursor-pointer transition-colors hover:text-blue-500 duration-100 group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 transform group-hover:translate-x-0 -translate-x-1/2"></span>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      {/* Desktop CTA Button */}
      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={() => handleNavigate("Featured Cars")}
        className="hidden md:block px-7 py-2 bg-blue-700 text-white rounded-full text-md shadow-[0_0_15px_rgba(29,78,216,0.5)]"
      >
        Get Started
      </motion.button>

      {/* Mobile Hamburger Menu */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none p-2"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden absolute top-full left-0 w-full bg-black/90 backdrop-blur-md overflow-hidden"
          >
            <ul className="flex flex-col items-center gap-6 py-8 text-white text-xl font-medium">
              {["Home", "About", "Featured Cars", "Contact"].map(
                (item, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavigate(item)}
                    className="cursor-pointer hover:text-blue-500 transition-colors"
                  >
                    {item}
                  </motion.li>
                )
              )}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={() => handleNavigate("Featured Cars")}
                className="px-8 py-3 bg-blue-700 text-white rounded-full text-lg shadow-[0_0_15px_rgba(29,78,216,0.5)]"
              >
                Get Started
              </motion.button>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
