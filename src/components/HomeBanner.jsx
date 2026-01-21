// src/components/HomeBanner.jsx
import { FaWhatsapp } from "react-icons/fa";

function HomeBanner() {
  return (
    <section className="relative flex min-h-screen w-full bg-black text-white pt-[96px]">
      {/* dekorasi kanan atas */}
      <div className="pointer-events-none absolute right-0 top-0">
        <img src="/download.png" alt="" />
      </div>

      {/* isi */}
      <div className="mx-auto mt-[100px] flex w-full max-w-[1216px] items-center gap-[30px]">
        {/* teks kiri */}
        <div className="flex-1" data-aos="fade-right">
          <h1 className="text-[58px] font-black leading-[1.2]">
            Gudang sewa mobil matic di Bali!
          </h1>

          <p className="mt-4 text-[24px] leading-[1.3] tracking-[0.005em]">
            Sewa mobil matic favoritmu di Agung Bali Carrental <br />
            kurang dari 10 menit!
          </p>

          <a
            href="https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental!%20Saya%20ingin%20menyewa%20mobil."
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-[10px] rounded-[6px] bg-[yellow] px-4 py-3 text-black no-underline"
          >
            <span className="text-[20px] font-medium">Hubungi Kami</span>
            <FaWhatsapp className="text-[22px]" />
          </a>
        </div>

        {/* gambar kanan */}
        <div
          className="mr-[60px] block w-[40%]"
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
