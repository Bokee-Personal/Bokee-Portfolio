export default function Slide3() {
  const newsLinks = [
    { text: '?�성물산 ?�이?�스?�???�랫??\'?�닉\' 출시', url: 'https://www.homeniq.co.kr/media.html' },
    { text: '?�닉, ?�주�??�의 ?�한 커�??�티 ?�약 기능 강화', url: 'https://www.homeniq.co.kr/media.html' }
  ];

  return (
    <section className="w-full h-screen flex flex-col justify-center p-8 md:p-16 snap-start relative bg-[#fcfdff] overflow-hidden font-sans">
      {/* Homeniq Style Mesh Gradient Background - Richer Layers */}
      <div className="absolute -top-[30%] -left-[10%] w-[800px] h-[800px] bg-[#A5B4FC] blur-[180px] opacity-[0.2] rounded-full z-0"></div>
      <div className="absolute top-[20%] -right-[15%] w-[700px] h-[700px] bg-[#00D2D2] blur-[160px] opacity-[0.3] rounded-full z-0"></div>
      <div className="absolute -bottom-[20%] left-[20%] w-[600px] h-[600px] bg-[#00D2D2] blur-[180px] opacity-[0.2] rounded-full z-0"></div>

      <div className="max-w-[1526px] mx-auto w-full flex flex-col md:flex-row gap-12 items-center justify-between z-10">

        {/* Left: Text Info Section */}
        <div className="flex-1 max-w-[850px] flex flex-col">

          {/* Title Area */}
          <div className="mb-8 font-sans">
            <span className="block text-[24px] font-bold text-[#00215F] mb-2 opacity-80 leading-tight">Project 01. ?�프?�인 ?�장??복잡???�약 ?�책??구조??- 고객 경험 개선</span>
            <h1 className="text-[44px] md:text-[52px] font-extrabold text-[#111] tracking-tight leading-tight whitespace-nowrap mb-4">
              ?�파??커�??�티 <span className="text-[#3E61DC]">?�약 ?�비???�구�?& ?�영</span>
            </h1>
            <p className="text-[18px] font-medium text-gray-700 tracking-tight">
              ?�성물산 - Homeniq
            </p>
          </div>

          {/* Meta Info */}
          <div className="text-[17px] text-[#111] mb-6 space-y-2 font-bold">
            <p>Period. <span className="font-medium text-gray-700">2023. 09 ~ 2024. 12</span></p>
            <p className="flex items-center gap-2">
              Position/Contribution. <span className="font-medium text-gray-700">Product Owner (MO) / 100%</span>
              <span className="text-[13px] text-gray-400 font-medium ml-2">* MO 기획 �??�약 ?�책 ?�계 ?�당</span>
            </p>
          </div>

          {/* Business Impact Bar */}
          <div className="bg-[#3A78FF] rounded-xl px-6 py-4 mb-8 inline-flex items-center gap-3 w-max max-w-full">
            <span className="text-[18px] font-medium text-[#F2F4F8]">Business Impact.</span>
            <span className="text-[20px] font-bold text-[#fff]">VOC 60%??0% 감소 �?3개월 ??3�??�규 ?��? ?�비???�입 ?�장</span>
          </div>

          {/* Paragraphs */}
          <div className="text-[16px] leading-[1.7] text-[#111] mb-8">
            <p className="font-bold mb-4">
              ?�성물산 ?�닉(Homeniq)?� ?�주민과 ?�장 관리자 모두??기�???충족?�야 ?�는 B2B2C ?�랫?�입?�다.<br />
              ?�편?�된 21�??�설??기존 ?�약 ?�책??모듈?�하�? 결제?� ?�약??별개�??�행?�던<br />
              불편???�정???�합?�여 ?�계???�파??커�??�티 ?�약 ?�비?��? 기획?�습?�다.
            </p>
            <p className="text-gray-600 font-medium">
              ?�주민이 ???�고 빠르�??�설???�약?????�도�?8?�계??복잡???�널??4?�계�?축소?�고,<br />
              관리자???�영 공수�??�기?�으�?줄여주는 ?�책 ?�이??모델링에 중점???�었?�니??
            </p>
          </div>

          {/* Service Cards */}
          <h3 className="text-lg font-bold mb-4 text-[#111]">?�비???�심 과제 ?�결</h3>
          <div className="flex gap-5 mb-8 w-full max-w-[760px]">
            <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group hover:border-[#3E61DC]/30 transition-colors">
              <h4 className="text-[15px] font-bold text-gray-400 mb-4 uppercase tracking-wider">?�장 ?�책 모듈??</h4>
              <div className="flex gap-3">
                <div className="flex-1 text-center py-3 border border-gray-100 rounded-xl text-[14px] font-bold text-[#111] bg-gray-50">21�??�설 ?�책 그룹??</div>
                <div className="flex-1 text-center py-3 border border-gray-100 rounded-xl text-[14px] font-bold text-[#111] bg-gray-50">?��?�?맞춤 ?�정</div>
              </div>
            </div>

            <div className="flex-1 bg-white border border-gray-100 rounded-2xl p-6 shadow-sm group hover:border-[#3E61DC]/30 transition-colors">
              <h4 className="text-[15px] font-bold text-gray-400 mb-4 uppercase tracking-wider">?�정 ?�합 & ?�율??</h4>
              <div className="flex gap-3">
                <div className="flex-1 text-center py-3 border border-gray-100 rounded-xl text-[14px] font-bold text-[#111] bg-gray-50">?�약/구매 ?�정 ?�합</div>
                <div className="flex-1 text-center py-3 border border-gray-100 rounded-xl text-[14px] font-bold text-[#111] bg-gray-50">모바???�환??32%??</div>
              </div>
            </div>
          </div>

          {/* Related News (Chips) - Compact */}
          <div className="flex flex-wrap gap-2 items-center">
            <span className="text-[13px] font-bold text-gray-400 uppercase tracking-widest mr-2">Link.</span>
            {newsLinks.map((link, idx) => (
              <a key={idx} href={link.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 bg-white border border-gray-200 px-4 py-1.5 rounded-full text-[13px] font-bold text-gray-600 hover:border-[#3E61DC] hover:text-[#3E61DC] shadow-sm transition-all duration-300">
                <span className="text-[#3E61DC]">?��</span> {link.text}
              </a>
            ))}
          </div>
        </div>

        {/* Right: Two Phone Mockups (Image Placeholders with Shadows) */}
        <div className="flex-1 flex justify-center items-center relative h-full hidden xl:flex">

          {/* Mockup Image Area 1 (Back/Left) */}
          <div className="relative w-[340px] h-[680px] rounded-[2.5rem] shadow-[0_20px_50px_rgba(0,33,95,0.15)] rotate-[-6deg] translate-x-[-30px] z-10 overflow-hidden bg-white border border-gray-50 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
            {/* TODO: ?�기???�제 ?��?지�??�입?�세??(?? <img src="/images/mockup1.png" className="w-full h-full object-cover" />) */}
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 text-gray-400">
              <span className="text-4xl mb-3">?��</span>
              <span className="font-bold text-sm">Image Area 1</span>
              <span className="text-xs text-gray-300 mt-1">340 x 680</span>
            </div>
          </div>

          {/* Mockup Image Area 2 (Front/Right) */}
          <div className="absolute w-[340px] h-[680px] rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,33,95,0.2)] rotate-[8deg] translate-x-[140px] translate-y-16 z-20 overflow-hidden bg-white border border-gray-50 transition-transform duration-500 hover:rotate-0 hover:scale-105 hover:z-30">
            {/* TODO: ?�기???�제 ?��?지�??�입?�세??(?? <img src="/images/mockup2.png" className="w-full h-full object-cover" />) */}
            <div className="w-full h-full flex flex-col items-center justify-center bg-gray-50/50 text-gray-400">
              <span className="text-4xl mb-3">?��</span>
              <span className="font-bold text-sm">Image Area 2</span>
              <span className="text-xs text-gray-300 mt-1">340 x 680</span>
            </div>
          </div>

        </div>
      </div>

      <div className="absolute bottom-10 right-10 text-gray-400 font-medium text-[15px] z-20">
        03 / 16
      </div>
    </section>
  );
}
