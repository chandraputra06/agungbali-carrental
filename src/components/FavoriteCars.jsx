// src/components/FavoriteCars.jsx
import { FaBolt, FaWhatsapp } from "react-icons/fa";

const FAVORITE_CARS = [
  {
    brand: "Toyota",
    name: "Avanza Veloz",
    price: "IDR 300.000",
    img: "/sewa-avanza-veloz-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/toyota-avanza-veloz",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Avanza%20Veloz",
  },
  {
    brand: "Mitsubishi",
    name: "Xpander",
    price: "IDR 400.000",
    img: "/sewa-xpander-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/mitsubshi-xpander",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Mitsubshi%20Xpander",
  },
  {
    brand: "Honda",
    name: "Brio Satya",
    price: "IDR 300.000",
    img: "/sewa-brio-satya-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/honda-brio-satya",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Honda%20Brio%20Satya",
  },
  {
    brand: "Toyota",
    name: "Innova Reborn",
    price: "IDR 500.000",
    img: "/sewa-innova-reborn-di-bali.png",
    detailUrl:
      "https://www.agungbalicarrental.com/mobil/toyota-innova-reborn",
    waUrl:
      "https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental,%20Saya%20ingin%20sewa%20Toyota%20Innova%20Reborn",
  },
];

function FavoriteCars() {
  return (
    <section className="daftar-favorit">
      <div className="container-daftar-favorit">
        <div className="headline">
          <h2 className="text-heading-3 text-black">Paling laris akhir ini!</h2>
          <p className="daftar-favorit-caption">
            Mobil paling dicari dalam beberapa waktu terakhir.
          </p>
        </div>

        <div className="card-wrapper">
          {FAVORITE_CARS.map((car) => (
            <div key={car.name} className="card" data-aos="fade-left">
              <a href={car.detailUrl} className="anchor-overlay" />
              <div className="card-top">
                <FaBolt className="btn-icon" />
                <span className="text-body-2 text-bold job-type">
                  Paling laris minggu ini!
                </span>
              </div>
              <div className="card-content-wrapper">
                <div className="card-content-text">
                  <h3 className="text-body-2 text-bold card-content-text-merk">
                    {car.brand}
                  </h3>
                  <h3 className="text-bold card-content-text-name">
                    {car.name}
                  </h3>
                  <p className="text-medium card-content-text-price">
                    {car.price}
                  </p>
                </div>
                <img
                  alt={car.name}
                  className="card-car-image"
                  src={car.img}
                />
                <a
                  href={car.waUrl}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="btn-ordernow"
                >
                  <span className="text-body-2 text-medium">
                    Pesan Sekarang
                  </span>
                  <FaWhatsapp className="btn-icon" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FavoriteCars;
