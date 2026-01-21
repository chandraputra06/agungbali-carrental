// src/components/CTASection.jsx
function CTASection() {
  return (
    <section className="bg-[#f4f4f4]">
      <div className="max-w-[1216px] mx-auto py-[52px] px-4">
        <div className="flex items-center justify-between">
          <div className="w-[408px]">
            <h3 className="text-[34px] leading-[1.4] font-black text-black">
              Ingin menghubungi Agung Bali Car?
            </h3>
            <p className="mt-[18px] text-[22px] leading-[1.4] text-black">
              Kami online! Hubungi kami sekarang
            </p>
          </div>

          <a
            href="https://www.agungbalicarrental.com/hubungi-kami"
            className="inline-flex items-center justify-center rounded-[6px] border-2 border-black px-[28px] py-[10px] text-[18px] font-medium text-black no-underline"
          >
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
