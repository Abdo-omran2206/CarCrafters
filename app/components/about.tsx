"use client";
import Image from "next/image";
import CountUp from "./bits/numcounter";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
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
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
          >
            <h1 className="text-4xl md:text-7xl font-bold mb-4">
              About CarCrafters
            </h1>
            <h4 className="text-xl md:text-md mb-6 font-semibold">
              Your Trusted Partner in Finding the Perfect Vehicle
            </h4>
          </motion.div>
          <motion.p
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.8, delay: 0.2 },
              },
            }}
            className="text-lg md:text-xl leading-relaxed max-w-3xl"
          >
            At CarCrafters, we&apos;re revolutionizing the way people buy cars.
            With thousands of quality vehicles and a commitment to transparency,
            we make car shopping simple, safe, and satisfying. Whether
            you&apos;re looking for your first car or upgrading to your dream
            ride, we&apos;re here to help you every step of the way.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

export function WhyUs() {
  return (
    <section className="relative min-h-screen w-full mb-12 mt-5">
      {/* Background Image + Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/whyus.jpeg"
          alt="Logo"
          width={1100}
          height={1100}
          className="w-screen h-screen object-center"
        />
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/5 w-full flex justify-center"
        >
          <Image
            src="/whyus-car.png"
            alt="Logo"
            width={1100}
            height={1100}
            className="brightness-50 w-190 h-100 object-contain"
          />
        </motion.div>
      </div>

      {/* محتوى الصفحة */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center py-15">
        <motion.h1
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-white mb-0 "
        >
          Why Choose CarCrafters
        </motion.h1>
      </div>

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full ">
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col gap-10 md:gap-30 max-md:flex-row px-10 py-10 justify-around text-white text-2xl font-semibold"
        >
          <div className="text">
            <span className="block text-5xl md:text-7xl drop-shadow-[2px_2px_2px_black]">
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
            <span className="drop-shadow-[2px_2px_2px_black] text-lg md:text-2xl">
              machines
            </span>
          </div>
          <div>
            <span className="block text-5xl md:text-7xl drop-shadow-[2px_2px_2px_black]">
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
            <span className="drop-shadow-[2px_2px_2px_black] text-lg md:text-2xl">
              client served
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className=" px-10 h-50"
        >
          <p className="text-lg md:text-2xl drop-shadow-[2px_2px_2px_black] text-white max-w-4xl">
            We want you to have a sbess-free rental experience, so we make it
            naty to hire a car by providing simple search tools customer reviews
            and plenty of pic locations across the city
          </p>
        </motion.div>
      </div>
    </section>
  );
}
