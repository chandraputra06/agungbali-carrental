// src/components/CarSlider.jsx
import { FaWhatsapp } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const CAR_SLIDES = [
  {
    brand: "Honda",
    name: "Jazz Rs",
    price: "IDR 350.000",
    img: "/sewa-honda-jazz-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-jazz-rs",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20Jazz%20Rs",
  },
  {
    brand: "Toyota",
    name: "Avanza Veloz",
    price: "IDR 300.000",
    img: "/sewa-avanza-veloz-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/toyota-avanza-veloz",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Avanza%20Veloz",
  },
  {
    brand: "Suzuki",
    name: "Ertiga",
    price: "IDR 325.000",
    img: "/sewa-suzuki-ertiga-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/suzuki-ertiga",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Suzuki%20Ertiga",
  },
  {
    brand: "Toyota",
    name: "Rush TRD",
    price: "IDR 325.000",
    img: "/sewa-toyota-rush-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-rush-trd",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Rush%20TRD",
  },
  {
    brand: "Toyota",
    name: "Sienta",
    price: "IDR 350.000",
    img: "/sewa-toyota-sienta-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-sienta",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Sienta",
  },
  {
    brand: "Toyota",
    name: "Grand Innova",
    price: "IDR 350.000",
    img: "/sewa-Grand-Innova-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/toyota-grand-innova",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Grand%20Innova",
  },
  {
    brand: "Honda",
    name: "HRV",
    price: "IDR 500.000",
    img: "/sewa-honda-hrv-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-hrv",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20HRV",
  },
  {
    brand: "Mitsubishi",
    name: "Xpander",
    price: "IDR 400.000",
    img: "/sewa-xpander-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/mitsubshi-xpander",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Mitsubshi%20Xpander",
  },
];

function CarSlider() {
  return (
    <section className="daftar-mobil">
      <div className="container-daftar-mobil">
        <div className="headline-daftar-mobil">
          <h2 className="text-heading-3 text-black daftar-default-title">
            Lihat pilihan mobil
          </h2>
          <p className="daftar-default-caption">
            Temukan berbagai pilihan mobil sewa matic untukmu di Bali!
          </p>
        </div>

        <div className="mt-8">
          <Swiper
            modules={[Navigation, Pagination]}
            navigation
            pagination={{ clickable: true, dynamicBullets: true }}
            spaceBetween={30}
            loop
            grabCursor
            breakpoints={{
              0: { slidesPerView: 1 },
              620: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              820: { slidesPerView: 2 },
              1075: { slidesPerView: 3 },
              1216: { slidesPerView: 4 },
            }}
          >
            {CAR_SLIDES.map((car) => (
              <SwiperSlide key={car.name}>
                <div className="card slider-card" data-aos="fade-left">
                  <a
                    href={car.detailUrl}
                    className="anchor-overlay"
                  />
                  <div className="card-content-wrapper">
                    <div className="crad-content-text">
                      <h3 className="text-body-2 text-bold card-content-text-merk">
                        {car.brand}
                      </h3>
                      <h3 className="text-bold card-content-text-name">
                        {car.name}
                      </h3>
                      <p className="text-medium card-content-text-price">
                        {car.price}
                      </p>
                    </div>
                    <img
                      src={car.img}
                      alt={car.name}
                      className="card-car-image"
                    />
                    <a
                      href={car.waUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="btn-ordernow"
                    >
                      <span className="text-body-2 text-medium">
                        Pesan Sekarang
                      </span>
                      <FaWhatsapp className="btn-icon" />
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="btn-wrapper">
          <a
            href="https://www.agungbalicarrental.com/daftar-mobil"
            className="btn-more btn-more-new-article"
          >
            <span className="text-heading-18px text-medium">Lihat Lebih</span>
            <img src="/tandapanah.svg" alt="" className="btn-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CarSlider;
