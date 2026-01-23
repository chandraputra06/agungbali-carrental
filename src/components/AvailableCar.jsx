// src/components/AvailableCar.jsx
import { FaWhatsapp } from "react-icons/fa";

function AvailableCar() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* background + overlay */}
      <div className="absolute inset-0">
        <img
          src="/available-car.jpg"
          alt="Background mobil tersedia"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* konten */}
      <div className="relative mx-auto max-w-[1216px] px-4 py-[100px] md:py-[162px] text-center text-white">
        <h2 className="text-[22px] sm:text-[26px] md:text-[36px] leading-[1.4]">
          " Dengan lebih dari 8 tahun pengalaman dalam industri, Agung Bali
          Carrental menyediakan lebih dari 20 jenis mobil untuk anda sewa di
          Bali dengan mengutamakan kenyamanan. "
        </h2>

        {/* logo brand – benar-benar center, wrap 2 baris */}
        <div
          className="mt-[60px] md:mt-[100px]
                     flex flex-wrap items-center justify-center
                     gap-x-[40px] md:gap-x-[66px]
                     gap-y-[30px]"
        >
          <img src="/isuzu.svg" alt="Isuzu" />
          <img src="/toyota.svg" alt="Toyota" />
          <img src="/honda.svg" alt="Honda" />
          <img src="/mitsubishi.svg" alt="Mitsubishi" />
          <img src="/daihatsu.svg" alt="Daihatsu" />
          <img src="/suzuki.svg" alt="Suzuki" />
        </div>

        <a
          href="https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental!%20Saya%20ingin%20menyewa%20mobil."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[60px] md:mt-[100px] inline-flex items-center gap-[10px] rounded-[6px] bg-[yellow] px-4 py-3 text-black no-underline"
        >
          <span className="text-[18px] md:text-[20px] font-medium">
            Tanya Sekarang
          </span>
          <FaWhatsapp className="text-[20px] md:text-[22px]" />
        </a>
      </div>
    </section>
  );
}

export default AvailableCar;
