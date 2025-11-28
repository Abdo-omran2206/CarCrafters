"use client";
import { useRef, useLayoutEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/autoplay";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Register the module

// Import CSS
import "swiper/css";

export default function Featured() {
  const titleRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: -50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-10 px-4 md:px-10 lg:px-20 bg-linear-to-b from-black via-blue-950 to-black text-white">
      {/* <Trusted /> */}

      <div className="mt-16">
        <h1 ref={titleRef} className="text-center text-6xl m-10">
          Our Featured Cars
        </h1>
        <CarList />
      </div>
    </section>
  );
}

export function Trusted() {
  SwiperCore.use([Autoplay]);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const swiperRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );

      gsap.fromTo(
        swiperRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          delay: 0.2,
          scrollTrigger: {
            trigger: swiperRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

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
      <h1 ref={titleRef} className="text-2xl md:text-3xl font-bold mb-6">
        OUR TRUSTED BRANDS & SUPPLIERS
      </h1>

      <div ref={swiperRef}>
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
      </div>
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
  const cardRef = useRef<HTMLDivElement>(null);

  const handleHover = (isHovering: boolean) => {
    gsap.to(cardRef.current, {
      scale: isHovering ? 1.05 : 1,
      boxShadow: isHovering
        ? "0px 10px 30px rgba(30, 58, 138, 0.5)"
        : "0px 4px 6px rgba(0, 0, 0, 0.1)",
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => handleHover(true)}
      onMouseLeave={() => handleHover(false)}
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
    </div>
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

  const gridRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "top 30%",
            toggleActions: "play none none none",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6"
    >
      {cars.map((car, index) => (
        <div
          key={index}
          ref={(el) => {
            cardsRef.current[index] = el;
          }}
        >
          <CarCard car={car} />
        </div>
      ))}
    </div>
  );
}
