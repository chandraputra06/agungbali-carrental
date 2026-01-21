// src/components/Header.jsx
function Header() {
  return (
    <header className="absolute inset-x-0 top-0 z-[1030]">
      <div className="max-w-[1216px] mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <a
            href="https://www.agungbalicarrental.com/"
            className="block w-[88px]"
          >
            <img
              src="/abc-logo.svg"
              alt="Logo Agung Bali Car Rental"
              className="w-full"
            />
          </a>

          {/* Nav */}
          <nav className="flex gap-[72px] text-white">
            <a
              href="https://www.agungbalicarrental.com/daftar-mobil"
              className="text-[18px] leading-[1.3] font-medium hover:opacity-80"
            >
              Daftar Mobil
            </a>
            <a
              href="https://www.agungbalicarrental.com/tentang-kami"
              className="text-[18px] leading-[1.3] font-medium hover:opacity-80"
            >
              Tentang Kami
            </a>
            <a
              href="https://www.agungbalicarrental.com/hubungi-kami"
              className="text-[18px] leading-[1.3] font-medium hover:opacity-80"
            >
              Hubungi Kami
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
