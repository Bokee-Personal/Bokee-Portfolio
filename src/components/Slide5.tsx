import React from 'react';

export default function Slide5() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header Section (Light Theme) */}
      <div className="h-[35%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        {/* Subtle glow */}
        <div className="absolute -left-20 top-0 w-[500px] h-[500px] bg-[#A5B4FC] blur-[150px] opacity-20 rounded-full z-0 pointer-events-none"></div>

        <div className="max-w-[1526px] mx-auto w-full z-10">
          {/* Badge */}
          <div className="inline-flex items-center bg-[#f0f4ff] border border-[#00215F]/10 px-4 py-1.5 rounded-full mb-5">
            <span className="text-[20px] font-bold text-[#00215F] tracking-wider uppercase">Role & Strategy </span>
          </div>


          {/* Sub Title (Role details) */}
          <div className="flex flex-col gap-2.5 border-l-[3px] border-[#3E61DC] pl-5 mt-2">
            <p className="text-[20px] text-[#111] font-bold tracking-tight bg-[#f0f4ff] w-max px-2 py-0.5 rounded">
              MO(Mobile) ?�론??기획 �??�약 ?�책 ?�계 100% ?�당
            </p>
            <p className="text-[18px] text-gray-500 font-medium tracking-tight">
              (기획 2??체제: ??MO ?�당 / ?�료-Admin ?�당) <span className="mx-2 text-gray-300">|</span> 0?? ?�칭부???�영·?�장까�? 1??2개월�??�로?�트 리딩
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content Section (2-Column Layout) */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-12 pb-16 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full h-full flex flex-row divide-x divide-gray-100">

          {/* Column 1: Decision 1 */}
          <div className="flex-1 flex flex-col px-10 first:pl-0">
            {/* Title */}
            <div className="flex items-center gap-3.5 mb-8">
              <span className="w-9 h-9 rounded-xl bg-[#f0f4ff] text-[#3E61DC] flex items-center justify-center font-black text-[18px]">1</span>
              <h3 className="text-[24px] font-extrabold text-[#111] tracking-tight">?�프?�인 ?�책 고려 - 모듈???�략 ?�립</h3>
            </div>

            {/* Diagram: Situation -> Decision */}
            <div className="bg-[#fcfdff] rounded-[1.5rem] p-7 border border-[#f0f4ff] shadow-sm relative mb-8">
              {/* Situation */}
              <div className="flex items-start gap-4 mb-2">
                <span className="shrink-0 bg-gray-500 text-white text-[13px] font-bold px-3 py-1.5 rounded-lg tracking-widest mt-0.5 text-center w-[54px]">?�황</span>
                <p className="text-[17px] text-gray-700 font-medium leading-[1.6]">
                  AS-IS DB 구조 분석 <br />- 21�??�설???�약 ?�책??각각 별도 ?�이블에 <strong className="text-[#111] font-bold">?�드코딩</strong>?�어 ?�음??발견
                </p>
              </div>

              {/* Vertical arrow linking the two blocks */}
              <div className="flex ml-[26px] h-8 relative my-1">
                <div className="w-px h-full border-l-2 border-dashed border-gray-300"></div>
                <div className="absolute left-[calc(50%-1px)] top-1/2 -translate-y-1/2 -ml-[9px] bg-white border border-gray-200 text-gray-400 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Decision */}
              <div className="flex items-start gap-4">
                <span className="shrink-0 bg-[#3E61DC] text-white text-[13px] font-bold px-3 py-1.5 rounded-lg tracking-widest mt-0.5 text-center w-[54px] shadow-sm shadow-blue-200">?�단</span>
                <div>
                  <p className="text-[15px] text-gray-500 font-medium mb-2">"모든 ?�외�?개별 ?�?�하�??�규 ?��? ?�입 ??개발 공수 기하급수??증�?"</p>
                  <p className="text-[18px] text-[#111] font-extrabold leading-snug">
                    ?�책???�턴?�하??<span className="bg-[#f0f4ff] px-1 text-[#3E61DC] rounded">8�??�형?�로 모듈??/span>
                  </p>
                </div>
              </div>
            </div>

            {/* Process Details */}
            <div className="flex-1 mb-8">
              <h4 className="text-[15px] font-bold text-gray-400 mb-5 uppercase tracking-widest pl-1">?�사결정 과정</h4>
              <ul className="space-y-4">
                {[
                  "21�??�설??AS-IS ?�책 ?�수조사 (Excel, 50?�간 ?�요)",
                  "?�책 변??추출 (?�약 ?�위, ?�수 ?�한, ?�박 가???��?, 취소 ?�책 ??",
                  "?�책 변?�의 조합 ?�턴??8�??�형?�로 그룹??,
                  "Admin?�서 ?�정 가?�한 ?�책 구조�?TO-BE ?�계"
                ].map((text, i) => (
                  <li key={i} className="flex gap-3.5 text-[17px] text-gray-600 font-medium leading-relaxed">
                    <span className="font-bold text-[#3E61DC] mt-[2px]">{i + 1}.</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result Box */}
            <div className="mt-auto bg-[#eef2ff]/70 rounded-2xl p-6 border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[60px] opacity-20">?�️</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[18px] font-extrabold text-[#3E61DC] tracking-widest uppercase">Result</span>
              </div>
              <p className="text-[19px] text-[#111] font-bold leading-[1.5]">
                ?�규 ?��? ?�입 ??개발 공수 ?�이 Admin ?�정만으�?<br />21�??�설 ?�책??<strong className="text-indigo-700 underline decoration-2 underline-offset-4">2?????�팅 가?�한 구조 ?�보</strong>
              </p>
            </div>
          </div>

          {/* Column 2: Decision 2 */}
          <div className="flex-1 flex flex-col px-10 last:pr-0">
            {/* Title */}
            <div className="flex items-center gap-3.5 mb-8">
              <span className="w-9 h-9 rounded-xl bg-[#f0f4ff] text-[#3E61DC] flex items-center justify-center font-black text-[18px]">2</span>
              <h3 className="text-[24px] font-extrabold text-[#111] tracking-tight">?�약 ?�정 ?�합 ?�략 ?�립</h3>
            </div>

            {/* Diagram: Situation -> Decision */}
            <div className="bg-[#fcfdff] rounded-[1.5rem] p-7 border border-[#f0f4ff] shadow-sm relative mb-8">
              {/* Situation */}
              <div className="flex items-start gap-4 mb-2">
                <span className="shrink-0 bg-gray-500 text-white text-[13px] font-bold px-3 py-1.5 rounded-lg tracking-widest mt-0.5 text-center w-[54px]">?�황</span>
                <p className="text-[17px] text-gray-700 font-medium leading-[1.6]">
                  ?�용???�동 로그 분석 <br />- <strong className="text-[#111] font-bold">"?�용�?구매 ?�료 ??30% ?�용?��? ?�약 ?�면?�로 ?�동?��? ?�음"</strong> 발견
                </p>
              </div>

              {/* Vertical arrow linking the two blocks */}
              <div className="flex ml-[26px] h-8 relative my-1">
                <div className="w-px h-full border-l-2 border-dashed border-gray-300"></div>
                <div className="absolute left-[calc(50%-1px)] top-1/2 -translate-y-1/2 -ml-[9px] bg-white border border-gray-200 text-gray-400 w-[18px] h-[18px] rounded-full flex items-center justify-center">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              {/* Decision */}
              <div className="flex items-start gap-4">
                <span className="shrink-0 bg-[#3E61DC] text-white text-[13px] font-bold px-3 py-1.5 rounded-lg tracking-widest mt-0.5 text-center w-[54px] shadow-sm shadow-blue-200">?�단</span>
                <div>
                  <p className="text-[15px] text-gray-500 font-medium mb-2">"?�용�?구매?� ?�약??분리??8?�계 Flow가 ?�용???�탈??근본 ?�인"</p>
                  <p className="text-[18px] text-[#111] font-extrabold leading-snug">
                    ?�용�??�택�??�약??<span className="bg-[#f0f4ff] px-1 text-[#3E61DC] rounded">?�일 Flow�??�합 (4?�계 축소)</span>
                  </p>
                </div>
              </div>
            </div>

            {/* Process Details */}
            <div className="flex-1 mb-8">
              <h4 className="text-[15px] font-bold text-gray-400 mb-5 uppercase tracking-widest pl-1">?�사결정 과정</h4>
              <ul className="space-y-4">
                {[
                  "?�용???�동 로그 분석 (?�집 : 2�?",
                  "VOC 60�??�분�???\"?�약 ???�다\" 문의가 ?�체??40%",
                  "벤치마킹 ?�?�성 ?�색: ?��??? ?�이�??�약 ???�???�약 Flow 분석",
                  <React.Fragment key="4">TO-BE Flow ?�계: <strong className="text-[#111] font-bold">?�용�??�택 ??좌석/?�간 ?�택 ??결제 ???�약 ?�료 (4?�계)</strong></React.Fragment>
                ].map((text, i) => (
                  <li key={i} className="flex gap-3.5 text-[17px] text-gray-600 font-medium leading-relaxed">
                    <span className="font-bold text-[#3E61DC] mt-[2px]">{i + 1}.</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Result Box */}
            <div className="mt-auto bg-[#eef2ff]/70 rounded-2xl p-6 border border-indigo-100 shadow-sm relative overflow-hidden">
              <div className="absolute -right-4 -top-4 text-[60px] opacity-20">?�️</div>
              <div className="flex items-center gap-2 mb-2">
                <span className="text-[18px] font-extrabold text-[#3E61DC] tracking-widest uppercase">Result</span>
              </div>
              <p className="text-[19px] text-[#111] font-bold leading-[1.5]">
                ?�용???�탈�?감소 �??�약 ?�료??<strong className="text-indigo-700 underline decoration-2 underline-offset-4">68% ??89% 증�?</strong>
                <br /><span className="text-[15px] text-gray-500 font-medium mt-1">(?�칭 ??3개월 ?�이??기�?)</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Absolute Bottom Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        05 / 16
      </div>

    </section>
  );
}
