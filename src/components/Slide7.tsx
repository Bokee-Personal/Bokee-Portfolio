export default function Slide7() {
  return (
    <section className="w-full h-screen flex flex-col p-8 md:p-16 snap-start relative bg-[#f8f9fa]">
      <div className="flex justify-between text-sm text-gray-500 mb-8">
        <div className="flex gap-4">
          <span>Background</span><span>·</span><span>My Role</span><span>·</span><span>Solution</span><span>·</span><span className="font-bold text-gray-800">Impact</span>
        </div>
        <span>Project 01</span>
      </div>
      <div className="max-w-[1526px] mx-auto w-full flex-1 flex flex-col justify-center">
        <h2 className="text-2xl font-bold mb-10">Business Impact</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Impact 1 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 text-3xl font-bold">??/span>
              <h3 className="text-xl font-bold">VOC 60% ??30%�??�반 감소</h3>
            </div>
            <p className="text-sm text-gray-500 mb-2">?�평�?120�???60�?/p>
            <p className="text-sm text-gray-700">??고객 경험 개선 �?CS?� ?�무 부??50% 감소</p>
          </div>

          {/* Impact 2 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 text-3xl font-bold">??/span>
              <h3 className="text-xl font-bold">3개월 ??3�??�규 ?��? ?�입</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-2">
              <p>???��????�펜?�??(2,100?��?)</p>
              <p>???��????�레?�티지 (1,800?��?)</p>
              <p>???�화 ?�레???�원 (1,500?��?)</p>
            </div>
            <p className="text-sm text-gray-700">??비즈?�스 ?�장 마일?�톤 ?�성 �?B2B ?�주 ?�적 기여</p>
          </div>

          {/* Impact 3 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 text-3xl font-bold">??/span>
              <h3 className="text-xl font-bold">모바???�약�?32% 증�?</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-2">
              <p>??AS-IS: ?�평�??�약 건수 450�?/p>
              <p>??TO-BE: ?�평�??�약 건수 594�?/p>
            </div>
            <p className="text-sm text-gray-700">??커�??�티 ?�설 ?�성??�??�주�?만족???�상</p>
          </div>

          {/* Impact 4 */}
          <div className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-blue-600 text-3xl font-bold">??/span>
              <h3 className="text-xl font-bold">?�입 리드?�??92% ?�축</h3>
            </div>
            <div className="text-sm text-gray-600 space-y-1 mb-2">
              <p>??AS-IS: 21�??�설 ?�드코딩 (6개월 ?�요)</p>
              <p>??TO-BE: Admin ?�정 2??+ ?�스??2�?/p>
            </div>
            <p className="text-sm text-gray-700">???�규 ?��? ?�입 6개월 ??2주로 비즈?�스 ?�장 ?�도 가?�화</p>
          </div>
        </div>
      </div>
      <div className="absolute bottom-10 right-10 text-gray-300 font-medium text-sm">
        07 / 16
      </div>
    </section>
  );
}
