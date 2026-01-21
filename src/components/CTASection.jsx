// src/components/CTASection.jsx
function CTASection() {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="mx-auto max-w-[1216px] px-4 py-[40px] md:py-[52px]">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-center md:justify-between">
          <div className="w-full md:w-[408px]">
            <h3 className="text-[24px] sm:text-[30px] md:text-[34px] leading-[1.4] font-black text-black">
              Ingin menghubungi Agung Bali Car?
            </h3>
            <p className="mt-[12px] text-[18px] sm:text-[20px] md:text-[22px] leading-[1.4] text-black">
              Kami online! Hubungi kami sekarang
            </p>
          </div>

          <a
            href="https://www.agungbalicarrental.com/hubungi-kami"
            className="mt-2 inline-flex items-center justify-center rounded-[6px] border-2 border-black px-[24px] py-[10px] text-[16px] sm:text-[18px] font-medium text-black no-underline"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
