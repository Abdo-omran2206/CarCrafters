"use client";
import { motion } from "framer-motion";

export default function Hero() {
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

        <div className="relative flex flex-col justify-center items-start h-full px-4 md:px-10 max-w-4xl">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { staggerChildren: 0.3 },
              },
            }}
            className="flex flex-col gap-6"
          >
            <motion.h1
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-4xl md:text-7xl lg:text-8xl font-bold drop-shadow-[2px_2px_2px_black] text-white w-full tracking-widest leading-tight"
            >
              Find Your Perfect Car
            </motion.h1>

            <motion.p
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: {
                  opacity: 1,
                  x: 0,
                  transition: { duration: 0.8, ease: "easeOut" },
                },
              }}
              className="text-2xl text-white max-w-lg drop-shadow-[2px_2px_2px_black]"
            >
              Browse thousands of quality vehicles at unbeatable prices
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.6, delay: 0.2 },
                },
              }}
              className="flex flex-col md:flex-row gap-4 md:gap-10 mt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05, backgroundColor: "#1e3a8a" }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 bg-blue-700 text-white rounded-full drop-shadow-[2px_2px_2px_black] text-xl transition duration-300"
              >
                Browse Inventory
              </motion.button>

              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#1d4ed8",
                  color: "#ffffff",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 text-white text-xl drop-shadow-[2px_2px_2px_black] border-2 border-blue-700 rounded-full transition duration-300"
              >
                Create account
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
