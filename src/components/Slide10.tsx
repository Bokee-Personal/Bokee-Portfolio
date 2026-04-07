import React from 'react';

export default function Slide10() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[22%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute -left-20 top-0 w-[600px] h-[400px] bg-[#F9A8D4] blur-[160px] opacity-[0.10] rounded-full z-0 pointer-events-none" />
        <div className="max-w-[1526px] mx-auto w-full z-10">
          <div className="inline-flex items-center bg-[#FDF2F8] border border-[#FBCFE8] px-4 py-1.5 rounded-full mb-4">
            <span className="text-[20px] font-bold text-[#E91E8A] tracking-wider uppercase">Background</span>
          </div>
          <h1 className="text-[36px] md:text-[42px] font-extrabold text-[#111] tracking-tight leading-tight mb-2">
            문제 정의 — <span className="text-[#E91E8A]">3가지 핵심 문제</span>
          </h1>
          <p className="text-[15px] text-gray-500 font-medium">
            LG U+는 고객의 무분별한 요금제 하향 선택으로 ARPU 감소 + 초과 과금 → VOC 증가의 악순환이 반복되고 있었습니다.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 w-full bg-white px-12 md:px-20 pt-5 pb-6 border-t border-gray-100 relative z-10 overflow-hidden">
        <div className="max-w-[1526px] mx-auto w-full h-full grid grid-cols-3 gap-5">

          {/* ── 01 사용자 Side ── */}
          <div className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#FDF2F8] text-[#E91E8A] border border-[#FBCFE8] shrink-0">사용자 Side</span>
              <h3 className="text-[16px] font-extrabold text-[#111] tracking-tight leading-snug">요금제 가치 인식 부재</h3>
            </div>

            {/* Box 1: 현재 업셀 방식 */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-4 flex-1">
              <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2.5">현재 업셀 방식</p>
              <ul className="space-y-2">
                {[
                  '쿠폰/상품권 증정으로 요금제 변경 유도',
                  '고객은 "쿠폰 받으려고" 요금제를 확인/변경',
                  '요금제 자체의 가치/혜택 전달 부재',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>

            {/* Box 2: 결과 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex-1">
              <p className="text-[11px] font-extrabold text-[#E91E8A] uppercase tracking-widest mb-2.5">결과</p>
              <ul className="space-y-2">
                {[
                  '전월 데이터 사용량 미확인 후 하향 변경',
                  '다음 달 데이터 초과 → 추가 과금 → VOC 증가',
                  '"왜 요금이 더 나왔지?" → CS 센터 문의 폭증',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E91E8A]/40 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              {/* 구체적 사례 */}
              <div className="mt-3 bg-[#FDF2F8] rounded-xl px-3 py-2.5 border border-[#FBCFE8]">
                <p className="text-[11px] font-bold text-[#E91E8A] mb-1">구체적 사례</p>
                <p className="text-[12px] text-gray-600 font-medium leading-relaxed">
                  전월 15GB 사용 고객이 20GB→10GB 하향<br />
                  초과 시 <strong className="text-[#111]">1GB당 2,200원</strong> 추가 과금 발생
                </p>
              </div>
            </div>
          </div>

          {/* ── 02 마케팅솔루션 Side ── */}
          <div className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#FDF2F8] text-[#E91E8A] border border-[#FBCFE8] shrink-0 whitespace-nowrap">마케팅솔루션 Side</span>
              <h3 className="text-[16px] font-extrabold text-[#111] tracking-tight leading-snug">인사이더 툴의 한계</h3>
            </div>

            {/* Box 1: AS-IS 방식 + 성과 */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-4 flex-1">
              <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2.5">AS-IS 캠페인 방식</p>
              <ul className="space-y-2">
                {[
                  '배너 형태로 캠페인 페이지 랜딩',
                  '단순 타겟팅: "요금제 조회 페이지 방문자"',
                  '고객 데이터 활용 불가',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="mt-3 pt-3 border-t border-gray-100">
                <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">성과</p>
                <div className="flex gap-3">
                  <div className="flex-1 bg-white rounded-xl px-3 py-2 border border-gray-100 text-center">
                    <p className="text-[18px] font-black text-[#111]">23%</p>
                    <p className="text-[11px] text-gray-400 font-medium">요금제 비교함</p>
                  </div>
                  <div className="flex-1 bg-white rounded-xl px-3 py-2 border border-gray-100 text-center">
                    <p className="text-[18px] font-black text-[#111]">14%</p>
                    <p className="text-[11px] text-gray-400 font-medium">검색결과</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Box 2: 한계 */}
            <div className="bg-white border border-gray-100 rounded-2xl p-4 flex-1">
              <p className="text-[11px] font-extrabold text-[#E91E8A] uppercase tracking-widest mb-2.5">한계</p>
              <ul className="space-y-2">
                {[
                  '정교한 세그먼트 타겟팅 불가',
                  '실시간 고객 데이터(사용량, 요금제) 활용 불가',
                  'UX 개선 제한 — 배너만 가능',
                  '알릭 컨설팅: "배너에 반응하지 않음"',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#E91E8A]/40 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* ── 03 비즈니스 임팩트 ── */}
          <div className="flex flex-col gap-3">
            {/* Header */}
            <div className="flex items-center gap-2.5">
              <span className="text-[11px] font-extrabold px-3 py-1 rounded-full bg-[#FDF2F8] text-[#E91E8A] border border-[#FBCFE8] shrink-0">비즈니스 임팩트</span>
              <h3 className="text-[16px] font-extrabold text-[#111] tracking-tight leading-snug">TO-BE 전환 필요성</h3>
            </div>

            {/* Box 1: 현재 상황 + TO-BE */}
            <div className="bg-[#F8FAFC] border border-gray-100 rounded-2xl p-4 flex-1">
              <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2.5">현재 상황</p>
              <ul className="space-y-2 mb-4">
                {[
                  '인사이더 툴로만 운영 → 확장성 한계',
                  '쿠폰 중심 캠페인 → 마케팅 비용 과다',
                ].map((t, i) => (
                  <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                    {t}
                  </li>
                ))}
              </ul>
              <div className="border-t border-gray-100 pt-3">
                <p className="text-[11px] font-extrabold text-gray-400 uppercase tracking-widest mb-2">TO-BE 목표</p>
                <ul className="space-y-2">
                  {[
                    '그로스해킹플랫폼 또는 닷컴 개발 로직 전환',
                    '개인화 데이터 기반 캠페인으로 전환',
                  ].map((t, i) => (
                    <li key={i} className="flex items-start gap-2 text-[13px] text-gray-600 font-medium leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 shrink-0" />
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Box 2: 핵심 가설 + POC 목적 */}
            <div className="bg-[#FDF2F8] border border-[#FBCFE8] rounded-2xl p-4 flex-1">
              <p className="text-[11px] font-extrabold text-[#E91E8A] uppercase tracking-widest mb-2.5">💡 핵심 가설</p>
              <p className="text-[13px] font-bold text-[#E91E8A] leading-[1.6] mb-4">
                "업셀 캠페인을 개인화 데이터 및 고도화된 UX로 개선하면 요금제 업셀 성공률이 증가할 것이다"
              </p>
              <div className="border-t border-[#FBCFE8] pt-3">
                <p className="text-[11px] font-extrabold text-[#E91E8A] uppercase tracking-widest mb-2">POC 목적</p>
                <div className="bg-[#111] rounded-xl px-3 py-2.5">
                  <p className="text-[13px] font-bold text-white leading-relaxed">
                    가설 검증을 통해 정규 개발 여부 결정
                    <span className="block text-[#E91E8A] mt-0.5">→ 정규화 승인 획득</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        10 / 15
      </div>

    </section>
  );
}
