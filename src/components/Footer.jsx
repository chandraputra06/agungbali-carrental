// src/components/Footer.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <section className="footer">
      <div className="decoration-image-footer">
        <img src="/kotak-footer.png" alt="" />
      </div>
      <div className="container-footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <a href="https://www.agungbalicarrental.com/">
                <img
                  src="/abg-full-logo.svg"
                  alt="Logo Agung Bali Car Rental"
                  className="footer-logo-img"
                />
              </a>
            </div>
            <p className="footer-left-address text-medium">
              Jalan Pesona Dalung I Br Bumi Kerta No. 11 A, Kerobokan Kaja,
              Kabupaten Badung, Bali 80363
            </p>
            <a
              href="https://goo.gl/maps/E5LppYDqYV9UTcLcA"
              rel="noopener noreferrer"
              target="_blank"
              className="btn-map"
            >
              <span className="text-heading-18px text-medium">
                Direksi Map
              </span>
              <img src="/arrow-forward.svg" alt="" className="btn-icon" />
            </a>
          </div>

          <div className="footer-right">
            <nav className="footer-nav">
              <a
                href="https://www.agungbalicarrental.com/daftar-mobil"
                className="text-heading-18px footer-nav-item"
              >
                Daftar Mobil
              </a>
              <a
                href="https://www.agungbalicarrental.com/blog"
                className="text-heading-18px footer-nav-item"
              >
                Blog
              </a>
              <a
                href="https://www.agungbalicarrental.com/hubungi-kami"
                className="text-heading-18px footer-nav-item"
              >
                Hubungi Kami
              </a>
              <a
                href="https://www.agungbalicarrental.com/tentang-kami"
                className="text-heading-18px footer-nav-item"
              >
                Tentang Kami
              </a>
              <a
                href="https://www.agungbalicarrental.com/syarat-dan-ketentuan"
                className="text-heading-18px footer-nav-item"
              >
                Syarat &amp; Ketentuan
              </a>
            </nav>

            <div className="footer-contact">
              <div className="footer-contact-item">
                <p className="text-heading-18px">Telepon</p>
                <a
                  href="https://wa.me/6287861363133"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer-contact-item-info"
                >
                  <span>+62 878-6136-3133</span>
                </a>
              </div>
              <div className="footer-contact-item">
                <p className="text-heading-18px">Email</p>
                <a
                  href="mailto:agungpak994@gmail.com"
                  rel="noopener noreferrer"
                  target="_blank"
                  className="footer-contact-item-info"
                >
                  <span>agungpak994@gmail.com</span>
                </a>
              </div>
              <div className="footer-contact-item">
                <p className="text-heading-18px">Sosial Media</p>
                <div className="social-media">
                  <a
                    href="https://wa.me/6287861363133"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <FaWhatsapp className="btn-icon" />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077239917033"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF className="btn-icon" />
                  </a>
                  <a
                    href="https://www.instagram.com/AgungBaliCarrental/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram className="btn-icon" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <a
            href="https://www.agungbalicarrental.com/"
            className="text-body-3 footer-bottom-item"
          >
            <span>Cookie Policy</span>
          </a>
          <a
            href="https://www.agungbalicarrental.com/"
            className="text-body-3 footer-bottom-item"
          >
            <span>Privacy Policy</span>
          </a>
          <a
            href="https://www.agungbalicarrental.com/"
            className="text-body-3 footer-bottom-item"
          >
            <span>©2022 Agung Bali Car Rental</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Footer;
