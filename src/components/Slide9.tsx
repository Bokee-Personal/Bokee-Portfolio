export default function Slide9() {
  return (
    <section className="w-full h-screen flex flex-col p-8 md:p-16 snap-start relative bg-white">
      <div className="flex justify-between text-sm text-gray-500 mb-8">
        <span className="font-bold text-gray-800">Project 02</span>
        <span>LG U+</span>
      </div>
      <div className="max-w-[1526px] mx-auto w-full flex-1 flex flex-col md:flex-row gap-12 items-center">
        {/* Left: Project Info */}
        <div className="flex-1">
          <div className="flex items-center gap-2 mb-4">
            <div className="w-8 h-8 bg-[#e6005c] rounded-full flex items-center justify-center text-white font-bold text-xs">LG</div>
            <span className="text-xl font-bold text-gray-800">LG U+</span>
          </div>
          <div className="inline-block bg-[#e6005c] text-white px-5 py-2 rounded-lg font-bold text-sm mb-4">
            ?�� ?�금???��?/?�운케????POC?�Validation?�Scale-up
          </div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
            ?�시�?고객 ?�이??기반<br/>
            개인???��? 캠페?�을 ?�계·검�?          </h1>
          <p className="text-gray-500 mb-8 text-sm">
            추천 ?�금???�릭�?3�?11.8%??5.2%), ?�환??44% 증�?(10.5%??5.2%) ?�성
          </p>
          <div className="grid grid-cols-[100px_1fr] gap-y-3 text-sm">
            <div className="text-gray-500">POC 기간</div>
            <div>2025.05.19~05.31 / ?�출 고객: 963�?/div>
            <div className="text-gray-500">?�과</div>
            <div>
              ??추천 ?�금???�릭�?3�?증�? (11.8% ??35.2%)<br/>
              ??추천 ?�금???�환??44% 증�? (10.5% ??15.2%)<br/>
              ??가??검�?�??��? 개선 범위 ?��?????            </div>
            <div className="text-gray-500">??��</div><div>기획 100% ?�당 (?�독 PM)</div>
            <div className="text-gray-500">?�용</div><div>Figma · Jira · Excel · Claude Artifacts</div>
            <div className="text-gray-500">기간</div><div>2025.01 ~ 2025.05</div>
          </div>
        </div>

        {/* Right: Phone Mockup */}
        <div className="flex-shrink-0 flex justify-center relative">
          <div className="w-[280px] h-[560px] bg-white rounded-[3rem] border-8 border-gray-800 overflow-hidden relative shadow-2xl">
            <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-3xl mx-16 z-20"></div>
            <div className="bg-black/50 absolute inset-0 z-10 flex items-center justify-center p-6">
              <div className="bg-white rounded-2xl w-full p-5 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-bold text-sm">김*?�님! ?�택???�금?�는<br/>?�이?��? 부족할 ???�어??/h3>
                  <button className="text-gray-400 text-xs">??/button>
                </div>
                <div className="bg-orange-50 text-orange-600 text-[10px] p-2 rounded mb-3 font-medium">
                  ! 지?�달 ?�용?�보??2.5GB 부족한 ?�금?��? ?�택?�어??                </div>
                <div className="bg-gray-50 rounded-xl p-3 text-center mb-3">
                  <p className="text-xs font-bold text-[#e6005c] mb-2">??4,000?�만 ???�면<br/>?�이?�는 10GB ??많아?�요</p>
                  <div className="flex justify-center items-end gap-6 h-24 mt-3">
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-gray-500 mb-1">?�택</span>
                      <div className="w-10 bg-gray-300 rounded-t-md" style={{height: '40px'}}></div>
                      <span className="text-[10px] mt-1">14GB</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="text-[9px] text-[#e6005c] font-bold mb-1">추천</span>
                      <div className="w-10 bg-[#e6005c] rounded-t-md" style={{height: '65px'}}></div>
                      <span className="text-[10px] mt-1 text-[#e6005c] font-bold">20GB</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-[#e6005c] text-white py-2.5 rounded-xl font-bold text-xs">추천 ?�금?�로 변경하�?/button>
                <button className="w-full text-gray-500 text-[10px] py-1.5 mt-1">?�니?? ?�택???�금?�로 변경할게요</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 text-gray-300 font-medium text-sm">
        09 / 16
      </div>
    </section>
  );
}
