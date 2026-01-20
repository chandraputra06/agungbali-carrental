function AboutSection() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      {/* dekorasi kiri */}
      <div className="pointer-events-none absolute -left-24 top-10 opacity-40">
        <img src="/kotak-2.png" alt="" className="w-52 h-auto" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] items-center">
          {/* Teks kiri */}
          <div className="space-y-6">
            <h2 className="text-sm font-semibold tracking-wide text-emerald-600 uppercase">
              Agung Bali Car Rental
            </h2>
            <h3 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Kami berfokus pada mobil matic dengan harga sewa terjangkau!
            </h3>

            <div className="space-y-5">
              <div className="flex gap-3">
                <img src="/dotbox.svg" alt="" className="mt-1 h-5 w-5" />
                <p className="text-sm sm:text-base text-slate-700">
                  “Pesan dengan mudah tanpa email, cukup chat singkat melalui
                  WhatsApp official kami!”
                </p>
              </div>

              <div className="flex gap-3">
                <img src="/dotbox.svg" alt="" className="mt-1 h-5 w-5" />
                <p className="text-sm sm:text-base text-slate-700">
                  “Gratis konsultasi tanpa uang muka! Masih bingung memilih
                  mobil? Diskusi dulu tanpa biaya.”
                </p>
              </div>

              <div className="flex gap-3">
                <img src="/dotbox.svg" alt="" className="mt-1 h-5 w-5" />
                <p className="text-sm sm:text-base text-slate-700">
                  “Kami mencakup seluruh wilayah Kuta, Denpasar, Ubud, dan
                  sekitarnya. Gratis pengantaran ke Bandara Ngurah Rai!”
                </p>
              </div>
            </div>

            <a
              href="https://www.agungbalicarrental.com/tentang-kami"
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-5 py-2.5 text-sm font-medium text-slate-900 hover:border-emerald-500 hover:text-emerald-700 transition"
            >
              <span>Tentang Kami</span>
              <img
                src="/tandapanah.svg"
                alt=""
                className="h-4 w-4 object-contain"
              />
            </a>
          </div>

          {/* Gambar + fitur kanan */}
          <div className="grid gap-6 sm:grid-cols-[1.1fr_1fr] items-center">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <img
                src="/orang-nyetir.jpg"
                alt="Orang sedang menyetir mobil di Bali"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100">
                  <img src="/time.svg" alt="" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    24 Jam
                  </p>
                  <p className="text-xs text-slate-600">Pelayanan</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100">
                  <img src="/delivery.svg" alt="" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Gratis
                  </p>
                  <p className="text-xs text-slate-600">Pengantaran</p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 shadow-sm">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-100">
                  <img src="/service.svg" alt="" className="h-5 w-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">
                    Service
                  </p>
                  <p className="text-xs text-slate-600">Rutin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default AboutSection;
