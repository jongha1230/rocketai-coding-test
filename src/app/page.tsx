import Image from "next/image";
import SajuTable from "./components/SajuTable";
import SpeechBubble from "./components/SpeechBubble";

export default function Home() {
  return (
    <main className="w-full max-w-[448px] mx-auto bg-[#BFAF6A]/15">
      <section className="relative w-full h-[752px]">
        <Image
          src="/images/bg-top.png"
          alt="상단 배경"
          width={448}
          height={652}
          className="absolute top-0 left-0 w-full h-[652px] object-cover"
        />

        <div className="absolute inset-0 z-10">
          <SpeechBubble
            direction="top"
            text={`이제 본격적으로\nOO님의 사주팔자를\n분석해볼 차례네요.`}
            className="absolute bottom-[20px] left-[24px] w-[85%] min-w-[195px] max-w-[215px] h-[139px]"
          />
        </div>
      </section>

      <section className="relative w-full h-[285px]">
        <Image
          src="/images/bg-mid.png"
          alt="중간 배경"
          fill
          className="absolute top-0 left-0 w-full h-full object-contain"
        />
      </section>

      <section className="relative w-full h-[410px]">
        <Image
          src="/images/bg-bottom.png"
          alt="하단 배경"
          fill
          className="absolute top-0 left-0 w-full h-full object-contain"
        />

        <div className="absolute inset-0 z-10">
          <SpeechBubble
            direction="bottom"
            text={`제가 OO님의 사주를\n 보기 쉽게 표로 정리했어요.`}
            className="absolute top-[-40px] left-[24px] w-[85%] min-w-[195px] max-w-[215px] h-[139px]"
          />
        </div>
      </section>

      <SajuTable />
    </main>
  );
}
