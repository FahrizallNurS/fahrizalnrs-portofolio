interface DeviceFrameProps {
  type: "web" | "mobile";
  src: string;
  alt: string;
  className?: string;
}

export default function DeviceFrame({ type, src, alt, className = "" }: DeviceFrameProps) {
  if (type === "mobile") {
    return (
      <div className={`relative ${className}`}>
        {/* Tombol volume (kiri) */}
        <div className="absolute -left-[3px] top-[22%] w-[3px] h-8 bg-white rounded-l-sm z-0"></div>
        <div className="absolute -left-[3px] top-[32%] w-[3px] h-8 bg-white rounded-l-sm z-0"></div>

        {/* Tombol power (kanan) */}
        <div className="absolute -right-[3px] top-[26%] w-[3px] h-14 bg-white rounded-r-sm z-0"></div>

        {/* Body/bezel HP */}
        <div className="relative w-full h-full rounded-[2.5rem] border-[10px] border-white bg-[#171717] shadow-[6px_6px_0px_0px_#171717] overflow-hidden">
          {/* Dynamic Island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-[#171717] rounded-full z-10 border border-white/10"></div>

          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  }

  return (
    <div
      className={`relative rounded-xl border-[3px] border-white bg-[#171717] shadow-[6px_6px_0px_0px_#171717] overflow-hidden flex flex-col ${className}`}
    >
      <div className="flex items-center gap-1.5 px-4 py-2.5 bg-white/10 border-b-[3px] border-white shrink-0">
        <span className="w-2.5 h-2.5 rounded-full bg-white/60"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/60"></span>
        <span className="w-2.5 h-2.5 rounded-full bg-white/60"></span>
        <div className="ml-3 flex-1 h-4 rounded-full bg-white/10"></div>
      </div>
      <div className="flex-1 overflow-hidden">
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}