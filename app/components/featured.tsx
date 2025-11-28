"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

// Register the module

// Import CSS
import "swiper/css";
export default function Featured() {
  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-linear-to-b from-black via-blue-950 to-black text-white">
      {/* <Trusted /> */}

      <div className="mt-16">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center text-6xl m-10"
        >
          Our Featured Cars
        </motion.h1>
        <CarList />
      </div>
    </section>
  );
}

export function Trusted() {
  SwiperCore.use([Autoplay]);
  const brands = [
    { name: "Fiat", img: "/brands/fiat.png" },
    { name: "Ford", img: "/brands/ford.png" },
    { name: "Honda", img: "/brands/Honda.png" },
    { name: "Nissan", img: "/brands/nissan.png" },
    { name: "Peugeot", img: "/brands/Peugeot.png" },
    { name: "Volkswagen", img: "/brands/Volkswagen.png" },
  ];

  return (
    <section className="py-10 text-center">
      <motion.h1
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl font-bold mb-6"
      >
        OUR TRUSTED BRANDS & SUPPLIERS
      </motion.h1>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <Swiper
          modules={[Autoplay, FreeMode]}
          spaceBetween={20}
          slidesPerView={4}
          loop={true}
          freeMode={true} // enables smooth continuous scroll
          speed={3000} // total time to scroll all slides
          autoplay={{
            delay: 0, // no pause
            disableOnInteraction: false,
          }}
          grabCursor={false}
        >
          {brands.map((brand, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <Image
                src={brand.img}
                alt={brand.name}
                width={150}
                height={80}
                className="object-contain brightness-75 hover:brightness-100 transition duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
}

export function CarCard({
  car: { name, model, price, year, mileage, fuel, image },
}: {
  car: {
    name: string;
    model: string;
    price: string;
    year: number;
    mileage: number;
    fuel: string;
    image: string;
  };
}) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 10px 30px rgba(30, 58, 138, 0.5)",
      }}
      transition={{ duration: 0.3 }}
      className="max-w-sm bg-black rounded-2xl shadow-lg border-2 border-blue-800 shadow-blue-900 overflow-hidden cursor-pointer"
    >
      {/* Car Image */}
      <div className="relative w-full h-56 py-10 px-5">
        <Image
          src={image}
          alt={name}
          width={500}
          height={500}
          className="object-cover"
        />
      </div>

      {/* Car Info */}
      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-800">{name}</h2>
        <p className="text-gray-500">{model}</p>

        {/* Features */}
        <div className="flex justify-between items-center mt-4 text-gray-600 text-sm">
          <span>{year}</span>
          <span>{mileage} km</span>
          <span>{fuel}</span>
        </div>

        {/* Price */}
        <p className="text-xl font-semibold text-blue-600 mt-3">${price}</p>

        {/* Buy Button */}
        <button className="mt-4 w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
          Buy Now
        </button>
      </div>
    </motion.div>
  );
}

// Example usage
export function CarList() {
  const cars = [
    {
      name: "Honda Civic",
      model: "2022 LX",
      price: "25,000",
      year: 2022,
      mileage: 15000,
      fuel: "Gasoline",
      image: "/garage/pngegg.png",
    },
    {
      name: "Toyota Corolla",
      model: "2021 SE",
      price: "22,500",
      year: 2021,
      mileage: 20000,
      fuel: "Gasoline",
      image: "/garage/pngegg (1).png",
    },
    {
      name: "Hyundai Elantra",
      model: "2020 GLS",
      price: "18,900",
      year: 2020,
      mileage: 30000,
      fuel: "Gasoline",
      image: "/garage/pngegg (2).png",
    },
    {
      name: "Kia Cerato",
      model: "2019 EX",
      price: "17,500",
      year: 2019,
      mileage: 42000,
      fuel: "Gasoline",
      image: "/garage/pngegg (3).png",
    },
    {
      name: "BMW 320i",
      model: "2018 Sport Line",
      price: "32,000",
      year: 2018,
      mileage: 60000,
      fuel: "Gasoline",
      image: "/garage/pngegg (4).png",
    },
    {
      name: "Mercedes C200",
      model: "2017 Avantgarde",
      price: "35,500",
      year: 2017,
      mileage: 72000,
      fuel: "Gasoline",
      image: "/garage/pngegg (5).png",
    },
    {
      name: "Audi A4",
      model: "2019 Premium",
      price: "30,800",
      year: 2019,
      mileage: 38000,
      fuel: "Gasoline",
      image: "/garage/pngegg (6).png",
    },
    {
      name: "Ford Mustang",
      model: "2020 EcoBoost",
      price: "41,000",
      year: 2020,
      mileage: 25000,
      fuel: "Gasoline",
      image: "/garage/pngegg (7).png",
    },
    {
      name: "Nissan Altima",
      model: "2021 SV",
      price: "24,300",
      year: 2021,
      mileage: 18000,
      fuel: "Gasoline",
      image: "/garage/pngegg (8).png",
    },
  ];

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{ staggerChildren: 0.1 }}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
    >
      {cars.map((car, index) => (
        <CarCard key={index} car={car} />
      ))}
    </motion.div>
  );
}
