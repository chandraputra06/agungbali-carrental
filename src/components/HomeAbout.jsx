// src/components/HomeAbout.jsx
function HomeAbout() {
  return (
    <section className="home-about">
      <div className="decoration-image">
        <img src="/kotak-2.png" alt="" />
      </div>
      <div className="container-home-about">
        <div className="home-about-wrapper">
          <div
            className="home-about-content-text"
            data-aos="fade-right"
          >
            <h2 className="text-black home-about-name">
              Agung Bali Car Rental
            </h2>
            <h3 className="text-black home-about-title">
              Kami berfokus pada mobil matic dengan harga sewa terjangkau!
            </h3>

            <div className="text-list-wrapper">
              <div className="text-list-item">
                <div className="text-list-main">
                  <img src="/dotbox.svg" alt="" />
                  <p className="text-heading-6">
                    “ Pesan dengan mudah tanpa email, pesan dengan mudah dan
                    singkat melalui WhatsApp official kami! ”
                  </p>
                </div>
                <div className="list-border" />
              </div>

              <div className="text-list-item">
                <div className="text-list-main">
                  <img src="/dotbox.svg" alt="" />
                  <p>
                    “ Gratis konsultasi tanpa uang muka! Masih bingung memilih
                    mobil? diskusi tanpa biaya! ”
                  </p>
                </div>
                <div className="list-border" />
              </div>

              <div className="text-list-item">
                <div className="text-list-main">
                  <img src="/dotbox.svg" alt="" />
                  <p>
                    “ Kami mencakup seluruh wilayah Kuta, Denpasar, Ubud, dan
                    sekitarnya. Gratis pengiriman ke airport Ngurah Rai! ”
                  </p>
                </div>
                <div className="list-border" />
              </div>
            </div>

            <a
              href="https://www.agungbalicarrental.com/tentang-kami"
              className="btn-about"
            >
              <span className="text-body-2 text-medium">Tentang Kami</span>
              <img src="/tandapanah.svg" alt="" className="btn-icon" />
            </a>
          </div>

          <div className="home-about-content-image">
            <div className="feature-image">
              <img
                className="feature-image"
                src="/orang-nyetir.jpg"
                alt="Orang nyetir"
              />
            </div>
            <div className="feature-wrapper">
              <div className="feature-item" data-aos="fade-left">
                <div className="icon-border">
                  <img
                    alt="time"
                    className="feature-icon"
                    src="/time.svg"
                  />
                </div>
                <div className="feature-text">
                  <span className="text-heading-5 text-bold">24 Jam</span>
                  <span className="text-body-1 text-medium">Pelayanan</span>
                </div>
              </div>
              <div className="feature-item" data-aos="fade-left">
                <div className="icon-border">
                  <img
                    alt="delivery"
                    className="feature-icon"
                    src="/delivery.svg"
                  />
                </div>
                <div className="feature-text">
                  <span className="text-heading-5 text-bold">Gratis</span>
                  <span className="text-body-1 text-medium">Pengantaran</span>
                </div>
              </div>
              <div className="feature-item" data-aos="fade-left">
                <div className="icon-border">
                  <img
                    alt="service"
                    className="feature-icon"
                    src="/service.svg"
                  />
                </div>
                <div className="feature-text">
                  <span className="text-heading-5 text-bold">Service</span>
                  <span className="text-body-1 text-medium">Rutin</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeAbout;
