import React from 'react';

export default function Slide4() {
  const painPoints = [
    {
      id: "1",
      title: "모바일 미고려 현장 정책 → 유연한 대응 불가",
      result: "정책 변경 시 개발팀 투입 필수",
      details: [
        <React.Fragment key="1">
          "헬스장은 월 5회, 게스트하우스는 월 1회"처럼<br /> 시설마다 다른 이용 제한을 <strong className="text-[#111] font-bold">수기로 관리</strong>
        </React.Fragment>,
        <React.Fragment key="2">
          모바일에서는 이를 <strong className="text-[#111] font-bold">하드코딩</strong>으로 구현<br /> → 정책 변경 시 <strong className="text-[#111] font-bold">개발팀 투입 필수</strong>
        </React.Fragment>
      ]
    },
    {
      id: "2",
      title: "예약 채널/현황 관리 불가 → 비즈니스 확장 병목",
      result: "신규 단지 비즈니스 확장 병목",
      details: [
        <React.Fragment key="1">
          Admin, 키오스크, 모바일 APP 3개 채널 동시 예약
        </React.Fragment>,
        <React.Fragment key="2">
          한 채널에서 예약하면 다른 채널에 실시간 반영 안 됨 → <strong className="text-[#111] font-bold">중복 예약 발생</strong>
        </React.Fragment>,
        <React.Fragment key="3">
          신규 단지 도입 시 21개 시설 정책을 일일이 개발 <br />→ <strong className="text-[#111] font-bold">도입 기간 6개월 소요</strong>
        </React.Fragment>
      ]
    },
    {
      id: "3",
      title: "이용권 구매/예약 프로세스 이원화",
      result: "예약 채널 이탈 및 CS 폭증",
      details: [
        <React.Fragment key="1">
          사용자는 "이용권 구매 → 시설 예약" <strong className="text-[#111] font-bold">총 8단계 진행</strong>
        </React.Fragment>,
        <React.Fragment key="2">
          이용권 구매, 시설 예약 프로세스 이원화 → 사용자가 "결제했는데 예약이 안 됐다"고 오해하며 <strong className="text-[#111] font-bold">VOC 발생</strong>
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
            현장별로 다른 오프라인 정책이 모바일에 그대로 이식되어 <span className="text-[#3E61DC]">시스템 확장에 병목 발생</span>
          </h1>

          {/* Sub Title */}
          <p className="text-[25px] text-gray-500 font-medium leading-[1.6] max-w-[1100px] tracking-tight">
            홈닉은 삼성물산이 운영하는 아파트 입주민 대상 라이프스타일 통합 플랫폼입니다.<br />
            그중 커뮤니티 시설 예약 서비스는 <strong className="text-[#111] font-bold border-b-2 border-red-200">전체 VOC의 60% 이상을 차지하는 최대 불편 사항</strong>이었습니다.
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
                <h3 className="text-[22px] font-extrabold text-[#111] tracking-tight leading-tight whitespace-pre-line">
                  {point.title}
                </h3>
              </div>

              {/* Body Details */}
              <ul className="space-y-6 flex-1 mb-8">
                {point.details.map((detail, i) => (
                  <li key={i} className="flex items-start gap-4 text-[20px] text-gray-600 leading-[1.65] font-medium tracking-tight">
                    <span className="mt-3 w-2 h-2 bg-[#3E61DC] flex-shrink-0 rounded-full opacity-60"></span>
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>

              {/* Pink Pain Point Box (Bottom Pinned) */}
              <div className="mt-auto bg-[#FFF0F4] rounded-2xl p-7 border border-[#FFE4EB] shadow-sm">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[16px] font-extrabold text-[#FF2E63] tracking-widest uppercase">🚨 Pain Point</span>
                </div>
                <p className="text-[24px] font-bold text-[#D9042B] leading-snug">
                  → {point.result}
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
