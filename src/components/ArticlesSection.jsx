// src/components/ArticlesSection.jsx
import { FiArrowRight } from "react-icons/fi";

const ARTICLES = [
  {
    title: "Mana yang lebih idel untuk travelling? Mobil manual atau matic?",
    date: "12 Mar 2022",
    image: "/cars-sunset.jpg",
    url: "https://www.agungbalicarrental.com/blog/tips-berkendara-aman-di-bali",
  },
  {
    title:
      "Wisata terbaik di Nusa Penida yang banyak dikunjungi para wisatawan.",
    date: "2 Feb 2022",
    image: "/beach-karang.jpg",
    url:
      "https://www.agungbalicarrental.com/blog/panduan-sewa-mobil-matic-di-bali",
  },
  {
    title: "10 Mobil terbaik untuk Anda liburan liburan bersama keluarga.",
    date: "1 April 2022",
    image: "/people-kids.jpg",
    url:
      "https://www.agungbalicarrental.com/blog/rekomendasi-tempat-wisata-populer-di-bali",
  },
];

function ArticlesSection() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1216px] px-4 py-[80px] md:py-[120px]">
        <h2 className="text-[28px] sm:text-[32px] md:text-[38px] leading-[1.3] font-black text-black">
          Artikel terbaru dari kami!
        </h2>

        <div className="mt-8 flex flex-col gap-[24px] md:flex-row md:justify-between md:gap-[20px]">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="relative flex flex-1 flex-col overflow-hidden pb-[24px] md:pb-[38px]"
              data-aos="fade-left"
            >
              {/* overlay clickable ke artikel */}
              <a href={a.url} className="absolute inset-0" aria-label={a.title} />

              {/* gambar artikel */}
              <div className="h-[200px] sm:h-[218px] overflow-hidden rounded-t-[4px]">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* konten */}
              <div className="relative z-[1] mt-1">
                <p className="mb-0 text-[12px] sm:text-[14px] leading-[1.4] text-[#616161]">
                  {a.date}
                </p>
                <p className="mt-[6px] text-[18px] sm:text-[20px] leading-[1.3] font-bold text-black">
                  {a.title}
                </p>
                <a
                  href={a.url}
                  className="mt-[20px] inline-flex items-center gap-[10px] text-black no-underline"
                >
                  <span className="text-[14px]">Baca Artikel</span>
                  <FiArrowRight className="text-[14px] sm:text-[16px]" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* tombol Lihat Lebih – center di mobile, kiri di md+ */}
        <div className="mt-[24px] md:mt-[26px] flex justify-center md:justify-start">
          <a
            href="https://www.agungbalicarrental.com/blog"
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

export default ArticlesSection;
