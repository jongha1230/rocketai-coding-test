export default function SajuTable() {
  const sajuInfo = {
    name: "김로켓",
    date: "1980년 8월 27일 08:10",
  };

  const Cell = ({
    children,
    className = "",
  }: {
    children: React.ReactNode;
    className?: string;
  }) => <div className={`bg-white p-2 ${className}`}>{children}</div>;

  const LabelCell = ({ children }: { children: React.ReactNode }) => (
    <div className="bg-gray-100 p-2 flex items-center justify-center">
      {children}
    </div>
  );

  return (
    <div className="p-4 bg-[#F9FBFE]">
      <div className="text-center mb-4">
        <h3 className="text-xl font-bold">{sajuInfo.name}님의 사주</h3>
        <p className="text-base text-gray-500">{sajuInfo.date}</p>
      </div>

      <div className="grid grid-cols-[auto_1fr_1fr_1fr_1fr] gap-px text-center text-sm bg-gray-200 border border-gray-200">
        {/* Header Row */}
        <LabelCell>
          <></>
        </LabelCell>
        <div className="bg-gray-100 p-2 font-bold">時</div>
        <div className="bg-gray-100 p-2 font-bold">日</div>
        <div className="bg-gray-100 p-2 font-bold">月</div>
        <div className="bg-gray-100 p-2 font-bold">年</div>

        {/* 십성 Row 1 */}
        <LabelCell>
          十星
          <br />
          (삼성)
        </LabelCell>
        <Cell>
          傷官
          <br />
          <span className="text-xs">(상관)</span>
        </Cell>
        <Cell>
          比肩
          <br />
          <span className="text-xs">(비견)</span>
        </Cell>
        <Cell>
          傷官
          <br />
          <span className="text-xs">(상관)</span>
        </Cell>
        <Cell>
          傷官
          <br />
          <span className="text-xs">(상관)</span>
        </Cell>

        {/* 천간 Row */}
        <LabelCell>
          天干
          <br />
          (천간)
        </LabelCell>
        <Cell>
          <div className="bg-black text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            壬<span className="text-xs">陽水</span>
          </div>
        </Cell>
        <Cell>
          <div className="bg-red-600 text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            丁<span className="text-xs">陰火</span>
          </div>
        </Cell>
        <Cell>
          <div className="bg-black text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            癸<span className="text-xs">陰水</span>
          </div>
        </Cell>
        <Cell>
          <div className="bg-black text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            庚<span className="text-xs">陰水</span>
          </div>
        </Cell>

        {/* 지지 Row */}
        <LabelCell>
          地支
          <br />
          (지지)
        </LabelCell>
        <Cell>
          <div className="bg-teal-500 text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            寅<span className="text-xs">陽木</span>
          </div>
        </Cell>
        <Cell>
          <div className="bg-red-600 text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            巳<span className="text-xs">陰火</span>
          </div>
        </Cell>
        <Cell>
          <div className="bg-teal-500 text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            亥<span className="text-xs">陰水</span>
          </div>
        </Cell>
        <Cell>
          <div className="bg-gray-400 text-white p-2 rounded-lg mx-auto w-12 h-12 flex flex-col justify-center">
            酉<span className="text-xs">陰金</span>
          </div>
        </Cell>

        {/* 십성 Row 2 */}
        <LabelCell>
          十星
          <br />
          (십성)
        </LabelCell>
        <Cell>
          比肩
          <br />
          <span className="text-xs">(비견)</span>
        </Cell>
        <Cell>
          劫財
          <br />
          <span className="text-xs">(겁재)</span>
        </Cell>
        <Cell>
          食神
          <br />
          <span className="text-xs">(식신)</span>
        </Cell>
        <Cell>
          偏財
          <br />
          <span className="text-xs">(편재)</span>
        </Cell>

        {/* 십이운성 Row */}
        <LabelCell>
          十二運星
          <br />
          (십이운성)
        </LabelCell>
        <Cell>
          死<br />
          <span className="text-xs">(사)</span>
        </Cell>
        <Cell>
          帝旺
          <br />
          <span className="text-xs">(제왕)</span>
        </Cell>
        <Cell>
          胎<br />
          <span className="text-xs">(태)</span>
        </Cell>
        <Cell>
          長生
          <br />
          <span className="text-xs">(장생)</span>
        </Cell>

        {/* 십이신살 Row */}
        <LabelCell>
          十二神殺
          <br />
          (십이신살)
        </LabelCell>
        <Cell>
          劫殺
          <br />
          <span className="text-xs">(겁살)</span>
        </Cell>
        <Cell>
          地殺
          <br />
          <span className="text-xs">(지살)</span>
        </Cell>
        <Cell>
          驛馬殺
          <br />
          <span className="text-xs">(역마살)</span>
        </Cell>
        <Cell>
          將星殺
          <br />
          <span className="text-xs">(장성살)</span>
        </Cell>

        {/* 귀인 Row */}
        <LabelCell>
          貴人
          <br />
          (귀인)
        </LabelCell>
        <Cell className="col-span-2">(없음)</Cell>
        <Cell>
          天乙
          <br />
          <span className="text-xs">(천을귀인)</span>
        </Cell>
        <Cell>
          太極
          <br />
          <span className="text-xs">(태극귀인)</span>
          <br />
          文昌
          <br />
          <span className="text-xs">(문창귀인)</span>
        </Cell>
      </div>
    </div>
  );
}
