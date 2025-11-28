"use client";
import Image from "next/image";
import { motion } from "framer-motion";

interface NavbarProps {
  onNavigate: (page: string) => void;
}

export default function Navbar({ onNavigate }: NavbarProps) {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 z-50 w-full bg-black/50 backdrop-blur-md py-1 px-12 flex justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, ease: "backOut" }}
        onClick={() => onNavigate("Home")}
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

      {/* Navigation */}
      <nav>
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
              onClick={() => onNavigate(item)}
              className="relative cursor-pointer transition-colors hover:text-blue-500 duration-100 group"
            >
              {item}
              <span className="absolute bottom-0 left-1/2 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full group-hover:left-0 transform group-hover:translate-x-0 -translate-x-1/2"></span>
            </motion.li>
          ))}
        </motion.ul>
      </nav>

      <motion.button
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
        onClick={() => onNavigate("Featured Cars")}
        className="px-7 py-2 bg-blue-700 text-white rounded-full text-md shadow-[0_0_15px_rgba(29,78,216,0.5)]"
      >
        Get Started
      </motion.button>
    </motion.header>
  );
}
