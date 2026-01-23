// src/components/AboutSection.jsx
import { FiArrowRight } from "react-icons/fi";

function AboutSection() {
  return (
    <section className="relative w-full bg-black text-white overflow-hidden">
      {/* dekorasi kotak belakang (kotak 2) */}
      <div className="pointer-events-none absolute right-0 top-0 hidden md:block">
        <img src="/kotak-2.png" alt="" />
      </div>

      {/* dekorasi tambahan kotak-2.png seperti di contoh */}
      <div className="pointer-events-none absolute right-0 top-0 hidden md:block opacity-40">
        <img src="/kotak-2.png" alt="" />
      </div>

      <div className="mx-auto max-w-[1216px] px-4 py-[80px] md:py-[120px]">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
          {/* TEKS KIRI */}
          <div
            className="flex max-w-[640px] flex-col gap-[24px]"
            data-aos="fade-right"
          >
            <h2 className="text-[22px] sm:text-[24px] md:text-[28px] font-black leading-[1.3] text-[yellow]">
              Agung Bali Car Rental
            </h2>

            <h3 className="text-[26px] sm:text-[30px] md:text-[38px] font-black leading-[1.3] text-white">
              Kami berfokus pada mobil matic dengan harga sewa terjangkau!
            </h3>

            {/* LIST TEXT */}
            <div className="mt-[24px] flex flex-col gap-[20px]">
              <div>
                <div className="flex items-center gap-[14px]">
                  {/* dotbox pakai ukuran asli, cuma di-center */}
                  <img src="/dotbox.svg" alt="" />
                  <p className="text-[16px] sm:text-[18px] leading-[1.4]">
                    Pesan dengan mudah tanpa email, pesan dengan mudah dan
                    singkat melalui WhatsApp official kami!
                  </p>
                </div>
                <div className="mt-4 border-b border-[hsla(0,0%,94%,0.6)]" />
              </div>

              <div>
                <div className="flex items-center gap-[14px]">
                  <img src="/dotbox.svg" alt="" />
                  <p className="text-[16px] sm:text-[18px] leading-[1.4]">
                    Gratis konsultasi tanpa uang muka! Masih bingung memilih
                    mobil? diskusi tanpa biaya!
                  </p>
                </div>
                <div className="mt-4 border-b border-[hsla(0,0%,94%,0.6)]" />
              </div>

              <div>
                <div className="flex items-center gap-[14px]">
                  <img src="/dotbox.svg" alt="" />
                  <p className="text-[16px] sm:text-[18px] leading-[1.4]">
                    Kami mencakup seluruh wilayah Kuta, Denpasar, Ubud, dan
                    sekitarnya. Gratis pengiriman ke airport Ngurah Rai!
                  </p>
                </div>
                <div className="mt-4 border-b border-[hsla(0,0%,94%,0.6)]" />
              </div>
            </div>

            {/* BUTTON TENTANG KAMI */}
            <a
              href="https://www.agungbalicarrental.com/tentang-kami"
              className="mt-6 inline-flex w-fit items-center gap-[10px] rounded-[6px] border-2 border-black bg-[yellow] px-[18px] py-[10px] text-black no-underline"
            >
              <span className="text-[14px] md:text-[16px] font-medium">
                Tentang Kami
              </span>
              {/* icon panah tipis */}
              <FiArrowRight className="text-[14px] md:text-[16px]" />
            </a>
          </div>

          {/* GAMBAR + FEATURE KANAN */}
          <div className="flex flex-col items-center lg:items-start">
            <div className="ml-0 h-[260px] w-full overflow-hidden rounded-t-[6px] sm:h-[320px] md:h-[380px] lg:h-[432px] lg:w-[568px] lg:ml-[50px]">
              <img
                src="/about-img.jpg"
                alt="Orang menyetir mobil di Bali"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between lg:mt-12 lg:ml-[100px]">
              {[
                { title: "24 Jam", subtitle: "Pelayanan", icon: "/time.svg" },
                { title: "Gratis", subtitle: "Pengantaran", icon: "/delivery.svg" },
                { title: "Service", subtitle: "Rutin", icon: "/service.svg" },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-[12px]"
                  data-aos="fade-left"
                >
                  <div className="rounded-[12px] border border-white p-[10px]">
                    <img src={item.icon} alt="" className="h-6 w-6" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[18px] md:text-[20px] font-bold">
                      {item.title}
                    </span>
                    <span className="text-[13px] md:text-[14px] font-medium">
                      {item.subtitle}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
