// src/components/AvailableCar.jsx
import { FaWhatsapp } from "react-icons/fa";

function AvailableCar() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* background image + overlay */}
      <div className="absolute inset-0">
        <img
          src="/available-car.167723f0.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative max-w-[1216px] mx-auto py-[162px] px-4 text-center text-white">
        <h2 className="text-[36px] leading-[1.4]">
          " Dengan lebih dari 8 tahun pengalaman dalam industri, Agung Bali
          Carrental menyediakan lebih dari 20 jenis mobil untuk anda sewa di
          Bali dengan mengutamakan kenyamanan. "
        </h2>

        <div className="mt-[100px] flex flex-col gap-[40px] items-center">
          <div className="flex gap-[66px]">
            <img src="/isuzu.1546d13b.svg" alt="Isuzu" />
            <img src="/toyota.8dae8c4e.svg" alt="Toyota" />
            <img src="/honda.7614a5c1.svg" alt="Honda" />
          </div>
          <div className="flex gap-[66px]">
            <img src="/mitsubhisi.f8006f54.svg" alt="Mitsubishi" />
            <img src="/daihatsu.ff251dd1.svg" alt="Daihatsu" />
            <img src="/suzuki.a7daf2a0.svg" alt="Suzuki" />
          </div>
        </div>

        <a
          href="https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental!%20Saya%20ingin%20menyewa%20mobil."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-[100px] inline-flex items-center gap-[10px] rounded-[6px] bg-[yellow] px-4 py-3 text-black no-underline"
        >
          <span className="text-[20px] font-medium">Tanya Sekarang</span>
          <FaWhatsapp className="text-[22px]" />
        </a>
      </div>
    </section>
  );
}

export default AvailableCar;
