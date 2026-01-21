// src/components/ArticlesSection.jsx
const ARTICLES = [
  {
    title:
      "Mana yang lebih idel untuk travelling? Mobil manual atau matic?",
    date: "12 Mar 2022",
    image: "/cars-sunset.jpg",
    url: "https://www.agungbalicarrental.com/article/mana-yang-lebih-idel-untuk-travelling-mobil-manual-atau-matic",
  },
  {
    title:
      "Wisata terbaik di Nusa Penida yang banyak dikunjungi para wisatawan.",
    date: "2 Feb 2022",
    image: "/beach-karang.jpg",
    url: "https://www.agungbalicarrental.com/article/wisata-terbaik-di-nusa-penida-yang-banyak-dikunjungi-para-wisatawan",
  },
  {
    title:
      "10 Mobil terbaik untuk Anda liburan liburan bersama keluarga.",
    date: "1 April 2022",
    image: "/people-kids.jpg",
    url: "https://www.agungbalicarrental.com/article/10-mobil-terbaik-untuk-anda-liburan-liburan-bersama-keluarga",
  },
];

function ArticlesSection() {
  return (
    <section className="bg-white">
      <div className="max-w-[1216px] mx-auto py-[120px] px-4">
        <h2 className="text-[38px] leading-[1.3] font-black text-black">
          Artikel terbaru dari kami!
        </h2>

        <div className="mt-8 flex flex-row justify-between gap-[20px]">
          {ARTICLES.map((a) => (
            <article
              key={a.title}
              className="relative flex flex-col overflow-hidden pb-[38px]"
              data-aos="fade-left"
            >
              <a href={a.url} className="absolute inset-0" aria-label={a.title} />
              <div className="h-[218px] overflow-hidden rounded-t-[4px]">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-4 relative z-[1]">
                <p className="mb-0 text-[14px] leading-[1.4] text-[#616161]">
                  {a.date}
                </p>
                <p className="mt-[6px] text-[20px] leading-[1.3] font-bold text-black">
                  {a.title}
                </p>
                <a
                  href={a.url}
                  className="mt-[26px] inline-flex items-center gap-[10px] text-black no-underline"
                >
                  <span className="text-[14px]">Baca Artikel</span>
                  <img
                    src="/tandapanah.svg"
                    alt=""
                    className="h-[18px] w-[18px]"
                  />
                </a>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-[26px]">
          <a
            href="https://www.agungbalicarrental.com/blog"
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

export default ArticlesSection;
