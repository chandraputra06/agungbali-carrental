// src/components/Header.jsx
function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="content-wrapper">
          <a href="https://www.agungbalicarrental.com/" className="abc-logo">
            <img
              src="/abc-logo.svg"
              alt="Logo Agung Bali Car Rental"
              className="abc-logo"
            />
          </a>

          <nav className="default-nav">
            <a
              href="https://www.agungbalicarrental.com/daftar-mobil"
              className="text-heading-6 text-medium nav-item"
            >
              Daftar Mobil
            </a>
            <a
              href="https://www.agungbalicarrental.com/tentang-kami"
              className="text-heading-6 text-medium nav-item"
            >
              Tentang Kami
            </a>
            <a
              href="https://www.agungbalicarrental.com/hubungi-kami"
              className="text-heading-6 text-medium nav-item"
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