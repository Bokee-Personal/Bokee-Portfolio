import React from 'react';

export default function Slide11() {
  return (
    <section className="w-full h-screen flex flex-col snap-start relative font-sans bg-[#fcfdff]">

      {/* Top Header */}
      <div className="h-[28%] w-full flex flex-col justify-center px-12 md:px-20 relative overflow-hidden">
        <div className="absolute -right-20 top-0 w-[500px] h-[500px] bg-[#F9A8D4] blur-[150px] opacity-[0.12] rounded-full z-0 pointer-events-none" />

        <div className="max-w-[1526px] mx-auto w-full z-10">
          <div className="inline-flex items-center bg-[#FDF2F8] border border-[#FBCFE8] px-4 py-1.5 rounded-full mb-5">
            <span className="text-[20px] font-bold text-[#E91E8A] tracking-wider uppercase">Role & Strategy</span>
          </div>

          <div className="flex flex-col gap-2.5 border-l-[3px] border-[#E91E8A] pl-5 mt-2">
            <p className="text-[20px] text-[#111] font-bold tracking-tight bg-[#FDF2F8] w-max px-2 py-0.5 rounded">
              기획 100% 단독 PM — 가설 설정부터 POC 운영·성과 분석까지 전 과정 리딩
            </p>
            <p className="text-[16px] text-gray-500 font-medium tracking-tight">
              My Role & Decision — 2가지 핵심 판단
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Content: 2-Column */}
      <div className="flex-1 w-full bg-white flex flex-col justify-center px-12 md:px-20 pt-8 pb-10 border-t border-gray-100 shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10">
        <div className="max-w-[1526px] mx-auto w-full h-full flex flex-row divide-x divide-gray-100">

          {/* ── 판단 1: 개인화 타겟팅 전략 ── */}
          <div className="flex-1 flex flex-col pr-10">
            <div className="flex items-center gap-3.5 mb-6">
              <span className="w-9 h-9 rounded-xl bg-[#FDF2F8] text-[#E91E8A] flex items-center justify-center font-black text-[18px]">1</span>
              <h3 className="text-[22px] font-extrabold text-[#111] tracking-tight">개인화 타겟팅 전략 수립</h3>
            </div>

            {/* 상황 → 가설 */}
            <div className="bg-[#fcfdff] rounded-[1.5rem] p-5 border border-[#FDF2F8] shadow-sm mb-5">
              <div className="flex items-start gap-4 mb-2">
                <span className="shrink-0 bg-gray-500 text-white text-[12px] font-bold px-3 py-1 rounded-lg tracking-widest mt-0.5 w-[50px] text-center">상황</span>
                <div>
                  <p className="text-[14px] text-gray-600 font-medium leading-[1.6]">
                    기존 인사이더 캠페인 타겟: "요금제 조회 페이지 방문자 전체"<br />
                    <strong className="text-[#111]">요금제 비교함 23%, 검색결과 14%</strong> — 고객 데이터 활용 전무
                  </p>
                </div>
              </div>

              <div className="flex ml-[26px] h-6 relative my-1">
                <div className="w-px h-full border-l-2 border-dashed border-gray-300" />
                <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-gray-400 w-[16px] h-[16px] rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 bg-[#E91E8A] text-white text-[12px] font-bold px-3 py-1 rounded-lg tracking-widest mt-0.5 w-[50px] text-center shadow-sm shadow-pink-200">가설</span>
                <p className="text-[14px] text-[#111] font-bold leading-[1.6]">
                  전월 데이터 사용량 80% 이상 고객에게 <span className="bg-[#FDF2F8] px-1 text-[#E91E8A] rounded">하향 변경 시점에 개인화 메시지</span>로 상위 요금제를 제안하면 ARPU 하락을 방어할 수 있을 것
                </p>
              </div>
            </div>

            {/* 의사결정 과정 */}
            <h4 className="text-[13px] font-bold text-gray-400 mb-3 uppercase tracking-widest pl-1">의사결정 과정</h4>
            <ul className="space-y-2.5 flex-1">
              {[
                { step: '① 문제 정의 (01~02월)', text: 'CXM팀 데이터: 월평균 하향 변경 고객 수 파악 / VOC 분석: "초과 과금" 불만 다수 / 알릭: "배너 지양, 고객 데이터 활용" 제언' },
                { step: '② SEG 설계 (02~03월)', text: 'CX맞춤제안팀 협업 — SEG1 (66→33, 37 추천) / SEG2 (75→33, 37 추천) / SEG3 (중위 하향, 사용량 기반) / SEG4 (기타, 1단계 상향)' },
                { step: '③ 검증 지표 설정 (03월)', text: '메인 지표: 추천 클릭률(흥미도) + 전환율(성과) / 비교 지표: 선택 요금제 전환율 / 대조군 10% 설정' },
              ].map((item, i) => (
                <li key={i} className="flex gap-3 text-[13px] text-gray-600 font-medium leading-relaxed">
                  <span className="font-extrabold text-[#E91E8A] shrink-0 mt-0.5 whitespace-nowrap">{item.step}</span>
                  <span className="text-gray-500">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Result */}
            <div className="mt-4 bg-[#FDF2F8] rounded-2xl p-5 border border-[#FBCFE8] relative overflow-hidden">
              <div className="absolute -right-3 -top-3 text-[50px] opacity-10">🎯</div>
              <span className="text-[13px] font-extrabold text-[#E91E8A] tracking-widest uppercase">Result</span>
              <p className="text-[16px] text-[#111] font-bold leading-[1.5] mt-2">
                클릭률 <strong className="text-[#E91E8A] underline decoration-2 underline-offset-4">11.8% → 37.6% (3.2배)</strong><br />
                전환율 <strong className="text-[#E91E8A] underline decoration-2 underline-offset-4">10.5% → 15.2% (+44%)</strong><br />
                <span className="text-[12px] text-gray-400 font-medium">SEG3 최고 전환율 18.1%</span>
              </p>
            </div>
          </div>

          {/* ── 판단 2: 고객 신뢰 기반 UX 설계 ── */}
          <div className="flex-1 flex flex-col pl-10">
            <div className="flex items-center gap-3.5 mb-6">
              <span className="w-9 h-9 rounded-xl bg-[#FDF2F8] text-[#E91E8A] flex items-center justify-center font-black text-[18px]">2</span>
              <h3 className="text-[22px] font-extrabold text-[#111] tracking-tight">고객 신뢰 기반 UX 설계 전략</h3>
            </div>

            {/* 상황 → 전략 */}
            <div className="bg-[#fcfdff] rounded-[1.5rem] p-5 border border-[#FDF2F8] shadow-sm mb-5">
              <div className="flex items-start gap-4 mb-2">
                <span className="shrink-0 bg-gray-500 text-white text-[12px] font-bold px-3 py-1 rounded-lg tracking-widest mt-0.5 w-[50px] text-center">상황</span>
                <div className="text-[13px] text-gray-600 font-medium leading-[1.6]">
                  <p className="font-bold text-[#111] mb-1">업셀 UX 원칙</p>
                  <p>"배너 형태의 마케팅 광고를 지양해야 합니다"</p>
                  <p>"요금상품은 쇼핑처럼 둘러보고 가입할 수 있어야 합니다"</p>
                  <p>"최대한, 그보다 더의 <strong className="text-[#111]">단순함</strong>이 필요합니다"</p>
                </div>
              </div>

              <div className="flex ml-[26px] h-6 relative my-1">
                <div className="w-px h-full border-l-2 border-dashed border-gray-300" />
                <div className="absolute left-[-8px] top-1/2 -translate-y-1/2 bg-white border border-gray-200 text-gray-400 w-[16px] h-[16px] rounded-full flex items-center justify-center">
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="shrink-0 bg-[#E91E8A] text-white text-[12px] font-bold px-3 py-1 rounded-lg tracking-widest mt-0.5 w-[50px] text-center shadow-sm shadow-pink-200">전략</span>
                <p className="text-[14px] text-[#111] font-bold leading-[1.6]">
                  <span className="bg-[#FDF2F8] px-1 text-[#E91E8A] rounded">바텀시트 UI</span>로 자연스럽게 제안 + 업셀 UX 원칙 5가지 수립
                </p>
              </div>
            </div>

            {/* UX 원칙 5가지 + 바텀시트 구조 */}
            <div className="flex gap-4 flex-1 min-h-0">

              {/* 원칙 5가지 */}
              <div className="flex-1">
                <h4 className="text-[13px] font-bold text-gray-400 mb-3 uppercase tracking-widest">UX 원칙 5가지</h4>
                <ul className="space-y-2">
                  {[
                    { n: '1', title: '고객 신뢰 우선', desc: '쿠폰 지양, 데이터 기반 합리적 추천' },
                    { n: '2', title: '방문 목적 방해 최소화', desc: '광고 팝업/배너 지양 → 바텀시트로 자연스럽게 제안' },
                    { n: '3', title: '추천 사유 명확화', desc: '"전월 10GB 사용, 선택한 8GB는 부족할 수 있어요"' },
                    { n: '4', title: '선택권 존중', desc: '추천/선택 양쪽 버튼 제공, 강요 느낌 제거' },
                    { n: '5', title: '긍정 경험 누적', desc: '지속적 긍정 경험으로 고객 신뢰 향상' },
                  ].map((p) => (
                    <li key={p.n} className="flex items-start gap-2.5 bg-[#F8FAFC] rounded-xl px-3 py-2 border border-gray-100">
                      <span className="w-5 h-5 rounded-full bg-[#E91E8A] text-white text-[10px] font-black flex items-center justify-center shrink-0 mt-0.5">{p.n}</span>
                      <div>
                        <span className="text-[12px] font-extrabold text-[#111]">{p.title}</span>
                        <span className="text-[11px] text-gray-400 font-medium ml-1.5">→ {p.desc}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              {/* 바텀시트 구조 */}
              <div className="w-[180px] shrink-0">
                <h4 className="text-[13px] font-bold text-gray-400 mb-3 uppercase tracking-widest">바텀시트 구조</h4>
                <div className="bg-white border border-gray-100 rounded-2xl p-3 shadow-sm flex flex-col gap-2">
                  {[
                    { step: '①', label: '헤드라인', desc: '"데이터가 부족할 수 있는 요금제에요!"' },
                    { step: '②', label: '사용량 시각화', desc: '전월 사용량 / 선택 요금제 제공량' },
                    { step: '③', label: '추천 요금제', desc: '가격, 데이터량, 혜택 표시' },
                    { step: '④', label: 'CTA 버튼 2개', desc: '추천 요금제로 변경 / 선택 요금제로 변경' },
                  ].map((b) => (
                    <div key={b.step} className="flex items-start gap-2 bg-[#FDF2F8] rounded-xl px-2.5 py-2">
                      <span className="text-[10px] font-black text-[#E91E8A] shrink-0 mt-0.5">{b.step}</span>
                      <div>
                        <p className="text-[10px] font-extrabold text-[#111]">{b.label}</p>
                        <p className="text-[10px] text-gray-400 font-medium leading-tight">{b.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Result */}
            <div className="mt-4 bg-[#FDF2F8] rounded-2xl p-5 border border-[#FBCFE8] relative overflow-hidden">
              <div className="absolute -right-3 -top-3 text-[50px] opacity-10">✅</div>
              <span className="text-[13px] font-extrabold text-[#E91E8A] tracking-widest uppercase">Result</span>
              <p className="text-[16px] text-[#111] font-bold leading-[1.5] mt-2">
                바텀시트 UX로 <strong className="text-[#E91E8A] underline decoration-2 underline-offset-4">광고 거부감 없는</strong> 자연스러운 업셀 경험 구현<br />
                <span className="text-[12px] text-gray-400 font-medium">→ 정규화 개발 승인의 UX 근거로 활용</span>
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* Page Number */}
      <div className="absolute bottom-8 right-12 text-gray-400 font-bold text-[14px] z-20">
        11 / 15
      </div>

    </section>
  );
}
