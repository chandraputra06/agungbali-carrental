// src/components/HomeBanner.jsx
import { FaWhatsapp } from "react-icons/fa";

function HomeBanner() {
  return (
    <section className="relative w-full bg-black text-white pt-[80px] md:pt-[96px]">
      {/* dekorasi kanan atas */}
      <div className="pointer-events-none absolute right-0 top-0 hidden md:block">
        <img src="/download.png" alt="" />
      </div>

      {/* isi */}
      <div
        className="
          mx-auto flex w-full max-w-[1216px]
          flex-col gap-[30px] px-4
          py-[80px] md:py-[120px]
          md:flex-row md:items-center
        "
      >
        {/* teks kiri */}
        <div className="md:flex-1" data-aos="fade-right">
          <h1 className="text-[32px] sm:text-[40px] md:text-[58px] font-black leading-[1.2]">
            Gudang sewa mobil
            <br className="hidden md:block" />
            matic di Bali!
          </h1>

          <p className="mt-4 text-[16px] sm:text-[18px] md:text-[24px] leading-[1.3] tracking-[0.005em]">
            Sewa mobil matic favoritmu di Agung Bali Carrental{" "}
            <br className="hidden md:block" />
            kurang dari 10 menit!
          </p>

          <a
            href="https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental!%20Saya%20ingin%20menyewa%20mobil."
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-[10px] rounded-[6px] bg-[yellow] px-4 py-3 text-black no-underline"
          >
            <span className="text-[16px] md:text-[20px] font-medium">
              Hubungi Kami
            </span>
            <FaWhatsapp className="text-[20px] md:text-[22px]" />
          </a>
        </div>

        {/* gambar kanan */}
        <div
          className="w-full md:mr-[60px] md:w-[40%]"
          data-aos="fade-left"
        >
          <img
            src="/img-hero.png"
            alt="Toyota Innova"
            className="block h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
