"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Cta() {
  return (
    <section className="relative h-screen flex items-center justify-center text-center text-white overflow-hidden">
      <div>
        <div className="absolute inset-0 -z-10 blur-sm">
          <Image
            src="/cta.jpg"
            alt="Logo"
            width={1100}
            height={1100}
            className="w-screen h-screen brightness-90 object-center"
          />
          <motion.div
            initial={{ y: 200, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full flex justify-center"
          >
            <Image
              src="/cta-car.png"
              alt="Logo"
              width={1100}
              height={1100}
              className="h-100 w-500 object-contain"
            />
          </motion.div>
        </div>
      </div>

      <div className="flex flex-col gap-20 z-10">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold drop-shadow-xl"
        >
          Which One Would You Drive?
        </motion.h1>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.button
            whileHover={{
              scale: 1.1,
              boxShadow: "0px 0px 20px rgba(59, 130, 246, 0.6)",
            }}
            whileTap={{ scale: 0.95 }}
            className="
  px-10 md:px-20 py-3
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
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
