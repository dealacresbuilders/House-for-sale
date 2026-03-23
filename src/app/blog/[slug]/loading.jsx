export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-white to-orange-50">

      <div className="flex flex-col items-center gap-6">

        {/* 🔥 PREMIUM SPINNER */}
        <div className="relative flex items-center justify-center">

          {/* OUTER RING */}
          <div className="w-20 h-20 rounded-full border-4 border-orange-200"></div>

          {/* SPINNING RING */}
          <div className="absolute w-20 h-20 rounded-full border-4 border-transparent border-t-[#FF6500] border-r-orange-400 animate-spin"></div>

          {/* INNER PULSE */}
          <div className="absolute w-10 h-10 bg-[#FF6500]/10 rounded-full animate-ping"></div>

          {/* CENTER DOT */}
          <div className="absolute w-4 h-4 bg-[#FF6500] rounded-full shadow-lg"></div>

        </div>

        {/* 🔥 TEXT */}
        <div className="text-center space-y-1">
          <p className="text-[#FF6500] font-semibold tracking-wide">
            Loading Content
          </p>
          <p className="text-gray-500 text-sm animate-pulse">
            Please wait a moment...
          </p>
        </div>

      </div>

    </div>
  );
}