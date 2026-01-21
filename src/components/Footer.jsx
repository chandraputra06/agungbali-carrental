// src/components/Footer.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white">
      <div className="pointer-events-none absolute top-0 -left-16 hidden md:block">
        <img src="/kotak footer.png" alt="" />
      </div>

      <div className="mx-auto max-w-[1216px] px-4 pt-[40px] pb-[60px] md:pt-[42px] md:pb-[72px]">
        <div className="flex flex-col gap-10 md:flex-row">
          {/* kiri */}
          <div className="w-full md:w-[596px]">
            <div className="w-[110px] md:w-[124px]">
              <a href="https://www.agungbalicarrental.com/">
                <img
                  src="/abg-full-logo.e241f4d1.svg"
                  alt="Logo Agung Bali Car Rental"
                  className="w-full"
                />
              </a>
            </div>

            <p className="mt-[40px] md:mt-[160px] pr-0 md:pr-[22px] text-[14px] md:text-[16px] leading-[1.5]">
              Jalan Pesona Dalung I Br Bumi Kerta No. 11 A, Kerobokan Kaja,
              Kabupaten Badung, Bali 80363
            </p>

            <a
              href="https://goo.gl/maps/E5LppYDqYV9UTcLcA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[24px] inline-flex items-center gap-[10px] rounded-[6px] border-2 border-white px-[18px] py-1 text-white no-underline md:mt-[32px]"
            >
              <span className="text-[16px] md:text-[18px] font-medium">
                Direksi Map
              </span>
              <img
                src="/arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                className="h-[18px] w-[18px]"
              />
            </a>
          </div>

          {/* kanan */}
          <div className="flex w-full flex-col gap-8 md:flex-row md:items-start md:justify-around">
            <nav className="flex flex-col gap-[16px] md:gap-[32px]">
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
                  className="text-[16px] md:text-[18px] no-underline text-white"
                >
                  {label}
                </a>
              ))}
            </nav>

            <div className="flex flex-col gap-[24px] md:gap-[46px]">
              <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] md:text-[18px]">Telepon</p>
                <a
                  href="https://wa.me/6287861363133"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[14px] font-light text-white no-underline"
                >
                  +62 878-6136-3133
                </a>
              </div>

              <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] md:text-[18px]">Email</p>
                <a
                  href="mailto:agungpak994@gmail.com"
                  className="text-[14px] font-light text-white no-underline"
                >
                  agungpak994@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-[6px]">
                <p className="text-[16px] md:text-[18px]">Sosial Media</p>
                <div className="flex gap-[20px] text-lg md:text-xl">
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

        {/* bottom */}
        <div className="mt-[30px] md:mt-[38px] flex flex-col gap-2 text-[11px] md:flex-row md:gap-[38px] md:text-[12px]">
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
