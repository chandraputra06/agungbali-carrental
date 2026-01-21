// src/components/CarListSection.jsx
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const CARS = [
  {
    brand: "Honda",
    name: "Jazz Rs",
    price: "IDR 350.000",
    image: "/sewa-honda-jazz-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-jazz-rs",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20Jazz%20Rs",
  },
  {
    brand: "Toyota",
    name: "Avanza Veloz",
    price: "IDR 300.000",
    image: "/sewa-avanza-veloz-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-avanza-veloz",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Avanza%20Veloz",
  },
  {
    brand: "Suzuki",
    name: "Ertiga",
    price: "IDR 325.000",
    image: "/sewa-suzuki-ertiga-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/suzuki-ertiga",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Suzuki%20Ertiga",
  },
  {
    brand: "Toyota",
    name: "Rush TRD",
    price: "IDR 325.000",
    image: "/sewa-toyota-rush-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-rush-trd",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Rush%20TRD",
  },
  {
    brand: "Toyota",
    name: "Sienta",
    price: "IDR 350.000",
    image: "/sewa-toyota-sienta-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-sienta",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Sienta",
  },
  {
    brand: "Toyota",
    name: "Grand Innova",
    price: "IDR 350.000",
    image: "/sewa-Grand-Innova-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-grand-innova",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Grand%20Innova",
  },
  {
    brand: "Honda",
    name: "HRV",
    price: "IDR 500.000",
    image: "/sewa-honda-hrv-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-hrv",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20HRV",
  },
  {
    brand: "Mitsubishi",
    name: "Xpander",
    price: "IDR 400.000",
    image: "/sewa-xpander-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/mitsubshi-xpander",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Mitsubshi%20Xpander",
  },
];

function CarListSection() {
  return (
    <section className="bg-black text-white">
      <div className="max-w-[1216px] mx-auto py-[120px] px-4">
        <div className="flex flex-col">
          <h2 className="text-[38px] leading-[1.3] font-black mb-0">
            Lihat pilihan mobil
          </h2>
          <p className="mt-1 text-[22px] leading-[1.3]">
            Temukan berbagai pilihan mobil sewa matic untukmu di Bali!
          </p>

          {/* tombol prev/next kanan atas */}
          <div className="relative mt-6 flex justify-end">
            <div className="flex gap-3">
              <button className="swiper-button-prev-custom h-10 w-10 rounded-full border border-white/60">
                <span className="sr-only">Prev</span>
              </button>
              <button className="swiper-button-next-custom h-10 w-10 rounded-full border border-white/60">
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Navigation]}
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            spaceBetween={30}
            loop
            breakpoints={{
              0: { slidesPerView: 1 },
              620: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              820: { slidesPerView: 2 },
              1075: { slidesPerView: 3 },
              1216: { slidesPerView: 4 },
            }}
          >
            {CARS.map((car) => (
              <SwiperSlide key={car.name}>
                <div
                  className="relative flex flex-col overflow-hidden rounded-[12px] bg-black"
                  data-aos="fade-left"
                >
                  <a
                    href={car.detailUrl}
                    className="absolute inset-0"
                    aria-label={car.name}
                  />
                  <div className="flex flex-col px-6 pb-6 pt-4 relative z-[1]">
                    <div>
                      <h3 className="text-[14px] font-bold uppercase text-[yellow] mb-0">
                        {car.brand}
                      </h3>
                      <p className="mt-1 text-[26px] leading-[1.3] font-bold">
                        {car.name}
                      </p>
                      <p className="mt-2 text-[16px] font-medium">
                        {car.price}
                      </p>
                    </div>

                    <img
                      src={car.image}
                      alt={car.name}
                      className="mt-2 ml-4 h-[170px] w-[280px] object-contain"
                    />

                    <a
                      href={car.waUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex w-full items-center justify-center gap-[10px] rounded-[6px] bg-[yellow] py-[10px] text-[14px] font-medium text-black no-underline"
                    >
                      <span>Pesan Sekarang</span>
                      <FaWhatsapp className="text-[18px]" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* tombol lihat lebih */}
        <div className="mt-12">
          <a
            href="https://www.agungbalicarrental.com/daftar-mobil"
            className="inline-flex items-center gap-[10px] rounded-[6px] border-2 border-black bg-white px-[18px] py-[10px] text-black no-underline"
          >
            <span className="text-[18px] font-medium">Lihat Lebih</span>
            <img src="/tandapanah.svg" alt="" className="h-[22px] w-[22px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CarListSection;
