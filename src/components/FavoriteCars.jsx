// src/components/FavoriteCars.jsx
import { FaWhatsapp, FaBolt } from "react-icons/fa";

const FAVORITE_CARS = [
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
    brand: "Mitsubishi",
    name: "Xpander",
    price: "IDR 400.000",
    image: "/sewa-xpander-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/mitsubshi-xpander",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Mitsubshi%20Xpander",
  },
  {
    brand: "Honda",
    name: "Brio Satya",
    price: "IDR 300.000",
    image: "/sewa-brio-satya-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/honda-brio-satya",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20Brio%20Satya",
  },
  {
    brand: "Toyota",
    name: "Innova Reborn",
    price: "IDR 500.000",
    image: "/sewa-innova-reborn-di-bali.png",
    detailUrl: "https://www.agungbalicarrental.com/mobil/toyota-innova-reborn",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Innova%20Reborn",
  },
];

function FavoriteCars() {
  return (
    // ⬇⬇ bg-white, teks default hitam
    <section className="bg-white text-black">
      <div className="mx-auto max-w-[1216px] px-4 py-[80px] md:py-[120px]">
        {/* Headline */}
        <div>
          <h2 className="text-[28px] sm:text-[32px] md:text-[38px] font-black leading-[1.3]">
            Paling laris akhir ini!
          </h2>
          <p className="mt-1 text-[16px] sm:text-[20px] md:text-[22px] leading-[30px]">
            Mobil paling dicari dalam beberapa waktu terakhir.
          </p>
        </div>

        {/* Cards – card tetap w-[280px] */}
        <div
          className="
          mt-12
          flex flex-wrap
          justify-center gap-y-[48px] gap-x-6
          lg:justify-between lg:gap-x-0
        "
        >
          {FAVORITE_CARS.map((car) => (
            <article
              key={car.name}
              className="relative flex w-[280px] flex-col overflow-hidden rounded-[12px] bg-black shadow-md"
              data-aos="fade-left"
            >
              <a
                href={car.detailUrl}
                className="absolute inset-0"
                aria-label={car.name}
              />

              {/* Badge */}
              <div className="flex items-center gap-[6px] rounded-t-[6px] bg-[yellow] px-6 py-[10px]">
                <FaBolt className="h-4 w-4 text-black" />
                <span className="text-[12px] sm:text-[14px] font-bold text-black">
                  Paling laris minggu ini!
                </span>
              </div>

              {/* Content */}
              <div className="relative z-[1] flex flex-col px-6 pb-6 pt-2 text-white">
                <div>
                  <h3 className="mb-0 text-[12px] sm:text-[14px] font-bold uppercase text-[yellow]">
                    {car.brand}
                  </h3>
                  <p className="mt-1 text-[22px] sm:text-[26px] font-bold leading-[1.3]">
                    {car.name}
                  </p>
                  <p className="mt-2 text-[14px] sm:text-[16px] font-medium">
                    {car.price}
                  </p>
                </div>

                <img
                  src={car.image}
                  alt={car.name}
                  className="mt-2 h-[170px] w-[280px] object-contain"
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
          ))}
        </div>
      </div>
    </section>
  );
}

export default FavoriteCars;
