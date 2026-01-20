// src/components/HomeBanner.jsx
import { FaWhatsapp } from "react-icons/fa";

function HomeBanner() {
  return (
    <section className="home-banner">
      <div className="decoration-image">
        <img src="/download.png" alt="" />
      </div>

      {/* TIDAK pakai .container lagi, cukup container-home-banner */}
      <div className="container-home-banner">
        <div className="home-banner-text-wrapper" data-aos="fade-right">
          <h1 className="text-heading-1 text-white font-extrabold home-banner-title">
            Gudang sewa mobil matic di Bali!
          </h1>
          <p className="text-heading-4 home-banner-desc">
            Sewa mobil matic favoritmu di Agung Bali Carrental <br />
            kurang dari 10 menit!
          </p>

          <a
            href="https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental!%20Saya%20ingin%20menyewa%20mobil."
            rel="noopener noreferrer"
            className="btn-asknow"
          >
            <span className="text-heading-5 text-medium">Hubungi Kami</span>
            <FaWhatsapp className="btn-icon" />
          </a>
        </div>

        <div className="banner-image" data-aos="fade-left">
          <img src="/public/innova-hero.png" alt="Toyota Innova" />
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
