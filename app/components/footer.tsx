"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.2 },
        },
      }}
      className="w-full bg-linear-to-b from-black via-blue-950 to-black px-6 py-10 text-gray-400"
    >
      {/* Top Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-8 text-center md:text-left">
        {/* Links */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
        >
          <h2 className="text-white text-xl font-semibold mb-3">
            Navigation Links
          </h2>

          <ul className="flex flex-col gap-4 text-white text-lg font-medium">
            {["Home", "About", "Featured Cars", "Contact"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#60a5fa" }}
                  className="relative pl-4 before:content-['>'] before:absolute before:left-0 before:text-blue-400 cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </motion.div>

        {/* Logo */}
        <motion.div
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
          }}
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
        </motion.div>

        {/* Contact Info */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
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
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <motion.div
        variants={{
          hidden: { opacity: 0, borderTopColor: "transparent" },
          visible: {
            opacity: 1,
            borderTopColor: "#374151", // gray-700
            transition: { duration: 0.8, delay: 0.4 },
          },
        }}
        className="border-t border-gray-700 pt-6 mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-6 text-center md:text-left"
      >
        {/* Quick Links */}
        <div>
          <ul className="flex gap-6 justify-center md:justify-start text-sm">
            {["Site Map", "Privacy Policy", "Terms of Service", "Feeds"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ color: "#60a5fa" }}
                  className="cursor-pointer transition-colors"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <ul className="flex gap-6 justify-center text-sm">
            {["Facebook", "Twitter", "Instagram", "YouTube"].map(
              (item, index) => (
                <motion.li
                  key={index}
                  whileHover={{ color: "#60a5fa", scale: 1.1 }}
                  className="cursor-pointer transition-transform"
                >
                  {item}
                </motion.li>
              )
            )}
          </ul>
        </div>
      </motion.div>
    </motion.footer>
  );
}
