// src/components/CarListSection.jsx
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

const CAR_LIST = [
  {
    brand: "Honda",
    name: "Jazz Rs",
    price: "IDR 350.000",
    image: "/honda-jazz.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-jazz-rs",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20Jazz%20Rs",
  },
  {
    brand: "Toyota",
    name: "Avanza Veloz",
    price: "IDR 300.000",
    image: "/avanza-veloz.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-avanza-veloz",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Avanza%20Veloz",
  },
  {
    brand: "Suzuki",
    name: "Ertiga",
    price: "IDR 325.000",
    image: "/suzuki.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/suzuki-ertiga",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Suzuki%20Ertiga",
  },
  {
    brand: "Toyota",
    name: "Rush TRD",
    price: "IDR 325.000",
    image: "/rush.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-rush-trd",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Rush%20TRD",
  },
  {
    brand: "Toyota",
    name: "Sienta",
    price: "IDR 350.000",
    image: "/sienta.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-sienta",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Sienta",
  },
  {
    brand: "Toyota",
    name: "Grand Innova",
    price: "IDR 350.000",
    image: "/grand-innova.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-grand-innova",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Grand%20Innova",
  },
  {
    brand: "Honda",
    name: "HRV",
    price: "IDR 500.000",
    image: "/hrv.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-hrv",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20HRV",
  },
  {
    brand: "Mitsubishi",
    name: "Xpander",
    price: "IDR 400.000",
    image: "/xpander.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/mitsubshi-xpander",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Mitsubshi%20Xpander",
  },
];

function CarCard({ car }) {
  return (
    <article className="relative flex h-full w-[280px] flex-col overflow-hidden rounded-[12px] bg-black shadow-md">
      <a
        href={car.detailUrl}
        className="absolute inset-0"
        aria-label={car.name}
      />
      <div className="relative z-[1] flex flex-col px-6 pb-6 pt-4 text-white">
        <div>
          <h3 className="mb-0 text-[12px] sm:text-[14px] font-bold uppercase text-[yellow]">
            {car.brand}
          </h3>
          <p className="mt-1 text-[22px] sm:text-[24px] font-bold leading-[1.3]">
            {car.name}
          </p>
          <p className="mt-2 text-[14px] sm:text-[16px] font-medium">
            {car.price}
          </p>
        </div>

        <img
          src={car.image}
          alt={car.name}
          className="
            mt-4
            ml-[-8px]
            h-[185px]
            w-[320px]
            max-w-none
            object-contain
          "
        />

        <a
          href={car.waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex w-full items-center justify-center gap-[10px] rounded-[6px] bg-[yellow] py-[10px] text-[13px] sm:text-[14px] font-medium text-black no-underline"
        >
          <span>Pesan Sekarang</span>
          <FaWhatsapp className="text-[18px]" />
        </a>
      </div>
    </article>
  );
}

function CarListSection() {
  return (
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[1216px] px-4 py-[80px] md:py-[120px]">
        {/* Headline */}
        <div className="flex flex-col">
          <h2 className="mb-0 text-[28px] sm:text-[32px] md:text-[38px] font-black leading-[1.3]">
            Lihat pilihan mobil
          </h2>
          <p className="mt-1 text-[16px] sm:text-[20px] md:text-[22px] leading-[1.3]">
            Temukan berbagai pilihan mobil sewa matic untukmu di Bali!
          </p>

          {/* tombol navigasi hanya di md+ */}
          <div className="mt-4 hidden justify-end md:flex">
            <div className="flex gap-3">
              <button
                className="
                  swiper-button-prev-custom
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-black text-white text-[20px] font-bold
                  shadow-md
                  cursor-pointer
                "
              >
                <span className="relative -top-px leading-none">‹</span>
              </button>
              <button
                className="
                  swiper-button-next-custom
                  flex h-10 w-10 items-center justify-center
                  rounded-full bg-black text-white text-[20px] font-bold
                  shadow-md
                  cursor-pointer
                "
              >
                <span className="relative -top-px leading-none">›</span>
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE: TANPA SWIPER */}
        <div className="mt-8 flex flex-wrap justify-center gap-y-8 gap-x-6 md:hidden">
          {CAR_LIST.map((car) => (
            <CarCard key={car.name} car={car} />
          ))}
        </div>

        {/* DESKTOP/TABLET: SWIPER */}
        <div className="mt-8 hidden md:block">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={30}
            loop={false}
            breakpoints={{
              768: { slidesPerView: 3 },
              1075: { slidesPerView: 3 },
              1216: { slidesPerView: 4 },
            }}
          >
            {CAR_LIST.map((car) => (
              <SwiperSlide key={car.name}>
                <div className="flex justify-center">
                  <CarCard car={car} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* tombol bawah */}
        <div className="mt-10 md:mt-12">
          <a
            href="https://www.agungbalicarrental.com/daftar-mobil"
            className="inline-flex items-center gap-[10px] rounded-[6px] border-2 border-black bg-white px-[18px] py-[10px] text-black no-underline"
          >
            <span className="text-[16px] md:text-[18px] font-medium">
              Lihat Lebih
            </span>
            <FiArrowRight className="text-[16px] md:text-[18px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CarListSection;
