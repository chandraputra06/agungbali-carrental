// src/components/Footer.jsx
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="relative bg-black text-white">
      {/* dekorasi kotak kiri atas */}
      <div className="pointer-events-none absolute top-0 -left-16">
        <img src="/kotak footer.png" alt="" />
      </div>

      <div className="max-w-[1216px] mx-auto pt-[42px] pb-[72px] px-4">
        <div className="flex flex-row">
          {/* kiri */}
          <div className="w-[596px]">
            <div className="w-[124px]">
              <a href="https://www.agungbalicarrental.com/">
                <img
                  src="/abg-full-logo.e241f4d1.svg"
                  alt="Logo Agung Bali Car Rental"
                  className="w-full"
                />
              </a>
            </div>

            <p className="mt-[160px] pr-[22px] text-[16px] leading-[1.5]">
              Jalan Pesona Dalung I Br Bumi Kerta No. 11 A, Kerobokan Kaja,
              Kabupaten Badung, Bali 80363
            </p>

            <a
              href="https://goo.gl/maps/E5LppYDqYV9UTcLcA"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-[32px] inline-flex items-center gap-[10px] rounded-[6px] border-2 border-white px-[18px] py-1 text-white no-underline"
            >
              <span className="text-[18px] font-medium">Direksi Map</span>
              <img
                src="/arrow_forward_24dp_FILL0_wght400_GRAD0_opsz24.svg"
                alt=""
                className="h-[20px] w-[20px]"
              />
            </a>
          </div>

          {/* kanan */}
          <div className="flex w-full flex-row items-center justify-around">
            <nav className="flex flex-col gap-[32px]">
              <a
                href="https://www.agungbalicarrental.com/daftar-mobil"
                className="text-[18px] no-underline text-white"
              >
                Daftar Mobil
              </a>
              <a
                href="https://www.agungbalicarrental.com/blog"
                className="text-[18px] no-underline text-white"
              >
                Blog
              </a>
              <a
                href="https://www.agungbalicarrental.com/hubungi-kami"
                className="text-[18px] no-underline text-white"
              >
                Hubungi Kami
              </a>
              <a
                href="https://www.agungbalicarrental.com/tentang-kami"
                className="text-[18px] no-underline text-white"
              >
                Tentang Kami
              </a>
              <a
                href="https://www.agungbalicarrental.com/syarat-dan-ketentuan"
                className="text-[18px] no-underline text-white"
              >
                Syarat &amp; Ketentuan
              </a>
            </nav>

            <div className="flex flex-col gap-[46px]">
              <div className="flex flex-col gap-[6px]">
                <p className="text-[18px]">Telepon</p>
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
                <p className="text-[18px]">Email</p>
                <a
                  href="mailto:agungpak994@gmail.com"
                  className="text-[14px] font-light text-white no-underline"
                >
                  agungpak994@gmail.com
                </a>
              </div>

              <div className="flex flex-col gap-[6px]">
                <p className="text-[18px]">Sosial Media</p>
                <div className="flex gap-[30px] text-white text-xl">
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
        <div className="mt-[38px] flex gap-[38px] text-[12px] leading-[1.4]">
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
