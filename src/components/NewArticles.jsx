// src/components/NewArticles.jsx
const ARTICLES = [
  {
    title:
      "Mana yang lebih idel untuk travelling? Mobil manual atau matic?",
    date: "12 Mar 2022",
    img: "/cars-sunset.jpg",
    url:
      "https://www.agungbalicarrental.com/article/mana-yang-lebih-idel-untuk-travelling-mobil-manual-atau-matic",
  },
  {
    title:
      "Wisata terbaik di Nusa Penida yang banya dikunjungi para wisatawan.",
    date: "2 Feb 2022",
    img: "/beach-karang.jpg",
    url:
      "https://www.agungbalicarrental.com/article/wisata-terbaik-di-nusa-penida-yang-banyak-dikunjungi-para-wisatawan",
  },
  {
    title:
      "10 Mobil terbaik untuk Anda liburan liburan bersama keluarga.",
    date: "1 April 2022",
    img: "/people-kids.jpg",
    url:
      "https://www.agungbalicarrental.com/article/10-mobil-terbaik-untuk-anda-liburan-liburan-bersama-keluarga",
  },
];

function NewArticles() {
  return (
    <section className="new-article">
      <div className="container-new-article">
        <h2 className="text-heading-3 text-black new-article-headline">
          Artikel terbaru dari kami!
        </h2>
        <div className="new-article-card-wrapper">
          {ARTICLES.map((article) => (
            <div
              key={article.title}
              className="card-article"
              data-aos="fade-left"
            >
              <a href={article.url} className="anchor-overlay" />
              <div className="card-article-image">
                <img
                  className="card-article-image-img"
                  alt={article.title}
                  src={article.img}
                />
              </div>
              <div className="card-article-content-wrapper">
                <div className="card-content-text">
                  <p className="text-body-2 card-content-text-date">
                    {article.date}
                  </p>
                  <p className="text-heading-20px text-bold card-content-text-title">
                    {article.title}
                  </p>
                </div>
                <a href={article.url} className="btn-read-article">
                  <span className="text-body-1">Baca Artikel</span>
                  <img src="/tandapanah.svg" alt="" className="btn-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className="new-article-btn">
          <a
            href="https://www.agungbalicarrental.com/blog"
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

export default NewArticles;
