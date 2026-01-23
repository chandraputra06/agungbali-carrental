// src/components/Footer.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* dekorasi kotak footer – MOBILE lebih besar & agak keluar kiri, DESKTOP tetap */}
      <div className="pointer-events-none absolute top-0 left-[-40px] md:left-0 block md:block">
        <img
          src="/kotak footer.png"
          alt=""
          className="h-[150px] w-auto md:h-auto" // mobile lebih besar
        />
      </div>

      {/* dekorasi kotak-3:
          - desktop: sama seperti sebelumnya
          - mobile: lebih besar & agak keluar ke kiri */}
      <div className="pointer-events-none absolute top-0 left-0 hidden md:flex items-center">
        <img src="/kotak-3.png" alt="" />
      </div>
      <div className="pointer-events-none absolute top-0 left-[-40px] md:left-0 block md:hidden">
        <img src="/kotak-3.png" alt="" className="h-[150px] w-auto" />
      </div>

      <div className="relative mx-auto max-w-[1216px] px-4 pt-[32px] pb-[40px] md:pt-[42px] md:pb-[72px]">
        <div className="flex flex-col gap-8 md:flex-row">
          {/* KIRI */}
          <div className="w-full md:w-[596px]">
            {/* logo: center di mobile, kiri di desktop */}
            <div className="flex justify-center md:justify-start">
              <div className="w-[96px] md:w-[124px]">
                <a href="https://www.agungbalicarrental.com/">
                  <img
                    src="/abc-logo.svg"
                    alt="Logo Agung Bali Car Rental"
                    className="w-full"
                  />
                </a>
              </div>
            </div>

            {/* alamat */}
            <p className="mt-[28px] md:mt-[160px] pr-0 md:pr-[22px] text-[14px] md:text-[16px] leading-[1.5]">
              Jalan Pesona Dalung I Br Bumi Kerta No. 11 A, Kerobokan Kaja,
              Kabupaten Badung, Bali 80363
            </p>

            {/* tombol map */}
            <a
              href="https://goo.gl/maps/E5LppYDqYV9UTcLcA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[18px] inline-flex items-center gap-[8px] rounded-[6px] border-2 border-white px-[16px] py-[4px] text-white no-underline md:mt-[32px]"
            >
              <span className="text-[13px] md:text-[18px] font-medium">
                Direksi Map
              </span>
              <FiArrowRight className="text-[13px] md:text-[18px]" />
            </a>
          </div>

          {/* KANAN – nav kiri, kontak kanan */}
          <div className="flex w-full flex-row justify-between items-start gap-8 md:gap-[32px] md:items-start md:justify-around">
            {/* nav link */}
            <nav className="flex flex-col gap-6 md:gap-[32px] mt-[12px] md:mt-0">
              {[
                ["Daftar Mobil", "https://www.agungbalicarrental.com/daftar-mobil"],
                ["Blog", "https://www.agungbalicarrental.com/blog"],
                ["Hubungi Kami", "https://www.agungbalicarrental.com/hubungi-kami"],
                ["Tentang Kami", "https://www.agungbalicarrental.com/tentang-kami"],
                [
                  "Syarat & Ketentuan",
                  "https://www.agungbalicarrental.com/syarat-dan-ketentuan",
                ],
              ].map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  className="text-[12px] md:text-[18px] text-white no-underline"
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* kontak */}
            <div className="flex flex-col gap-[16px] md:gap-[32px] mt-[12px] md:mt-0">
              {/* Telepon */}
              <div className="flex flex-col">
                <p className="mb-[2px] text-[12px] md:text-[18px] leading-tight">
                  Telepon
                </p>
                <a
                  href="https://wa.me/6287861363133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] md:text-[14px] font-light leading-tight text-white no-underline"
                >
                  +62 878-6136-3133
                </a>
              </div>

              {/* Email */}
              <div className="flex flex-col">
                <p className="mb-[2px] text-[12px] md:text-[18px] leading-tight">
                  Email
                </p>
                <a
                  href="mailto:agungpak994@gmail.com"
                  className="text-[11px] md:text-[14px] font-light leading-tight text-white no-underline"
                >
                  agungpak994@gmail.com
                </a>
              </div>

              {/* Sosial Media */}
              <div className="flex flex-col">
                <p className="mb-[2px] text-[12px] md:text-[18px] leading-tight">
                  Sosial Media
                </p>
                <div className="mt-[2px] flex gap-[14px] text-[18px] md:text-[20px]">
                  <a
                    href="https://wa.me/6287861363133"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaWhatsapp />
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=100077239917033"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="https://www.instagram.com/AgungBaliCarrental/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* bottom bar */}
        <div className="mt-[24px] md:mt-[38px] flex justify-center gap-12 text-[9px] md:justify-start md:flex-row md:gap-[38px] md:text-[12px]">
          <a
            href="https://www.agungbalicarrental.com/"
            className="text-white no-underline"
          >
            Cookie Policy
          </a>
          <a
            href="https://www.agungbalicarrental.com/"
            className="text-white no-underline"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.agungbalicarrental.com/"
            className="text-white no-underline"
          >
            ©2022 Agung Bali Car Rental
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
