import React from 'react';

export default function Slide4() {
  const painPoints = [
    {
      id: "1",
      title: "모바???�약?��? 고려?��? ?��? ?�영 ?�책",
      result: "?�연???�영 �??�??불�?",
      details: [
        <React.Fragment key="1">
          "?�스????5?? 게스?�하?�스 ??1??처럼<br /> ?�설마다 ?�른 ?�용 ?�한??<strong className="text-[#111] font-bold">?�기�?관�?</strong>
        </React.Fragment>,
        <React.Fragment key="2">
          모바?�에?�는 ?��? <strong className="text-[#111] font-bold">?�드코딩</strong>?�로 구현<br /> ???�책 변�???<strong className="text-[#111] font-bold">개발?� ?�입 ?�수</strong>
        </React.Fragment>
      ]
    },
    {
      id: "2",
      title: "?�약 채널/?�설�??�황 관�?불�?",
      result: "?�규 ?��? 비즈?�스 ?�장 병목",
      details: [
        <React.Fragment key="1">
          Admin, ?�오?�크, 모바??APP 3�?채널 ?�시 ?�약
        </React.Fragment>,
        <React.Fragment key="2">
          ??채널?�서 ?�약?�면 ?�른 채널???�시�?반영 ??????<strong className="text-[#111] font-bold">중복 ?�약 발생</strong>
        </React.Fragment>,
        <React.Fragment key="3">
          ?�규 ?��? ?�입 ??21�??�설 ?�책???�일??개발 <br />??<strong className="text-[#111] font-bold">?�입 기간 6개월 ?�요</strong>
        </React.Fragment>
      ]
    },
    {
      id: "3",
      title: "?�용�?구매/?�약 ?�원??",
      result: "?�약 채널 ?�탈 �?CS ??��",
      details: [
        <React.Fragment key="1">
          ?�용?�는 "?�용�?구매 ???�설 ?�약" <strong className="text-[#111] font-bold">�?8?�계 진행</strong>
        </React.Fragment>,
        <React.Fragment key="2">
          ?�용�?구매, ?�설 ?�약 ?�로?�스 ?�원?????�용?��? "결제?�는???�약?????�다"�??�해?�며 <strong className="text-[#111] font-bold">VOC 발생</strong>
        </React.Fragment>
      ]
    }
  ];

  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header Section (Light Theme) */}
      <div className="h-[38%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        {/* Subtle blue glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#A5B4FC] blur-[150px] opacity-20 rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#f0f4ff] border border-[#00215F]/10 px-4 py-1.5 rounded-full mb-6">
            <span className="text-[20px] font-bold text-[#00215F] tracking-wider uppercase">Background</span>
          </div>

          {/* Main Title */}
          <h1 className="text-[40px] md:text-[46px] font-extrabold text-[#111] tracking-tight leading-tight mb-5">
            ?�장별로 ?�이???�프?�인 ?�책??모바?�에 그�?�??�식?�어 <span className="text-[#3E61DC]">?�스???�장??병목 발생</span>
          </h1>

          {/* Sub Title */}
          <p className="text-[25px] text-gray-500 font-medium leading-[1.6] max-w-[1100px] tracking-tight">
            ?�닉?� ?�성물산???�영?�는 ?�파???�주�??�???�이?�스?�???�합 ?�랫?�입?�다.<br />
            그중 커�??�티 ?�설 ?�약 ?�비?�는 <strong className="text-[#111] font-bold border-b-2 border-red-200">?�체 VOC??60% ?�상??차�??�는 최�? 불편 ?�항</strong>?�었?�니??
          </p>
        </div>
      </div>

      {/* Bottom Content Section (Light Theme, �?채운 3???�이?�웃) */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-10 pb-16 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full h-full flex flex-row divide-x divide-gray-100">

          {painPoints.map((point, idx) => (
            <div key={idx} className="flex-1 flex flex-col px-10 first:pl-0 last:pr-0">

              {/* Type Category / Title */}
              <div className="flex items-center gap-4 mb-8">
                <div className="w-10 h-10 rounded-xl bg-[#f0f4ff] flex items-center justify-center border border-blue-50 shadow-sm shrink-0">
                  <span className="text-[18px] font-black text-[#3E61DC]">{point.id}</span>
                </div>
                <h3 className="text-[24px] font-extrabold text-[#111] tracking-tight leading-tight whitespace-pre-line">
                  {point.title}
                </h3>
              </div>

              {/* Body Details */}
              <ul className="space-y-6 flex-1 mb-8">
                {point.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-4 text-[22px] text-gray-600 leading-[1.65] font-medium tracking-tight">
                    <span className="mt-3 w-2 h-2 bg-[#3E61DC] flex-shrink-0 rounded-full opacity-60"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Pink Pain Point Box (Bottom Pinned) */}
              <div className="mt-auto bg-[#FFF0F4] rounded-2xl p-7 border border-[#FFE4EB] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[16px] font-extrabold text-[#FF2E63] tracking-widest uppercase">?�� Pain Point</span>
                </div>
                <p className="text-[24px] font-bold text-[#D9042B] leading-snug">
                  ??{point.result}
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>

      {/* Absolute Bottom Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        04 / 16
      </div>

    </section>
  );
}
