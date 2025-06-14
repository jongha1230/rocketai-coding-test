interface SpeechBubbleProps {
  text: string;
  direction: "top" | "bottom";
  className?: string;
}

export default function SpeechBubble({
  text,
  direction,
  className,
}: SpeechBubbleProps) {
  const imageUrl =
    direction === "top"
      ? "/images/speech-bubble-top.png"
      : "/images/speech-bubble-bottom.png";

  const paddingClasses =
    direction === "top"
      ? "pt-[45px] pb-8 pl-10 pr-[41px]"
      : "pt-10 pb-[65px] px-6";

  return (
    <div className={className}>
      <div
        className={`w-full h-full flex items-center justify-center ${paddingClasses}`}
        style={{
          backgroundImage: `url(${imageUrl})`,
          backgroundSize: "100% 100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <p className="text-center whitespace-pre-line text-sm text-[#434343] leading-[1.6] tracking-[-0.025em]">
          {text}
        </p>
      </div>
    </div>
  );
}
