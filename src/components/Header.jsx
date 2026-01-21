// src/components/Header.jsx
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Beranda", href: "https://www.agungbalicarrental.com/" },
    {
      label: "Daftar Mobil",
      href: "https://www.agungbalicarrental.com/daftar-mobil",
    },
    {
      label: "Tentang Kami",
      href: "https://www.agungbalicarrental.com/tentang-kami",
    },
    {
      label: "Hubungi Kami",
      href: "https://www.agungbalicarrental.com/hubungi-kami",
    },
  ];

  return (
    <header className="absolute inset-x-0 top-0 z-[1030]">
      {/* BAR ATAS */}
      <div className="mx-auto flex max-w-[1216px] flex-col px-4">
        <div className="flex items-center justify-between py-4 md:py-6">
          {/* Logo */}
          <a
            href="https://www.agungbalicarrental.com/"
            className="block w-[72px] md:w-[88px]"
          >
            <img
              src="/abc-logo.svg"
              alt="Logo Agung Bali Car Rental"
              className="w-full"
            />
          </a>

          {/* NAV DESKTOP (tanpa Beranda, sama seperti web asli) */}
          <nav className="hidden gap-[72px] text-[18px] font-medium leading-[1.3] text-white md:flex">
            {links.slice(1).map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:opacity-80"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* HAMBURGER MOBILE */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>
        </div>
      </div>

      {/* OVERLAY FULL-SCREEN MOBILE */}
      {open && (
        <div className="fixed inset-0 z-[1040] bg-black md:hidden">
          {/* bar atas di overlay */}
          <div className="mx-auto flex max-w-[1216px] items-center justify-between px-4 py-4">
            <a
              href="https://www.agungbalicarrental.com/"
              className="block w-[72px]"
              onClick={() => setOpen(false)}
            >
              <img src="/abc-logo.svg" alt="Logo" className="w-full" />
            </a>
            <button
              type="button"
              className="p-2 text-white"
              onClick={() => setOpen(false)}
              aria-label="Close navigation"
            >
              <HiX size={28} />
            </button>
          </div>

          {/* MENU: posisinya di ATAS, tetap center secara horizontal */}
          <div className="mx-auto flex max-w-[1216px] flex-col items-center gap-8 px-4 pt-10 text-lg font-medium">
            {links.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={
                  item.label === "Beranda" ? "text-[yellow]" : "text-white"
                }
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
