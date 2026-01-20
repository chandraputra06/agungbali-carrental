// src/components/AvailableCar.jsx
import { FaWhatsapp } from "react-icons/fa";

function AvailableCar() {
  return (
    <section className="available-car">
      <div className="bg-img">
        <img src="/available-car.jpg" alt="" />
      </div>
      <div className="bg-overlay" />
      <div className="container-available-car">
        <h2 className="headline-available-car text-medium" data-aos="fade-up">
          “ Dengan lebih dari 8 tahun pengalaman dalam industri, Agung Bali
          Carrental menyediakan lebih dari 20 jenis mobil untuk anda sewa di
          Bali dengan mengutamakan kenyamanan. ”
        </h2>
        <div className="car-logos">
          <div className="car-logos-item">
            <img src="/isuzu.svg" alt="Isuzu" />
            <img src="/toyota.svg" alt="Toyota" />
            <img src="/honda.svg" alt="Honda" />
          </div>
          <div className="car-logos-item">
            <img src="/mitsubhisi.svg" alt="Mitsubishi" />
            <img src="/daihatsu.svg" alt="Daihatsu" />
            <img src="/suzuki.svg" alt="Suzuki" />
          </div>
        </div>
        <a
          href="https://wa.me/6287861363133?text=Halo%20Agung%20Bali%20Carrental!%20Saya%20ingin%20menyewa%20mobil."
          rel="noopener noreferrer"
          target="_blank"
          className="btn-asknow btn-asknow-available-car"
        >
          <span className="text-heading-20px text-medium">Tanya Sekarang</span>
          <FaWhatsapp className="btn-icon" />
        </a>
      </div>
    </section>
  );
}

export default AvailableCar;
