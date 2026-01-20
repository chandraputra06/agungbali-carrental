// src/components/CTASection.jsx
function CTASection() {
  return (
    <section className="cta">
      <div className="container-cta">
        <div className="cta-content">
          <div className="cta-text">
            <h3 className="text-black text-black-cta-text">
              Ingin menghubungi Agung Bali Car?
            </h3>
            <p className="cta-text-p">
              Kami online! Hubungi kami sekarang
            </p>
          </div>
          <a
            href="https://www.agungbalicarrental.com/hubungi-kami"
            className="btn-callnow"
          >
            <span className="text-heading-18px text-medium">
              Hubungi Kami
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
