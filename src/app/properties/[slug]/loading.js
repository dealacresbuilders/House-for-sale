// app/properties/[slug]/loading.js

export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-orange-50">
      
      <div className="flex flex-col items-center gap-6">

        {/* Premium Dual Ring Spinner */}
        <div className="relative w-16 h-16">

          {/* Outer Soft Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-orange-200"></div>

          {/* Spinning Brand Ring */}
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-[#FF6500] border-r-orange-400 animate-spin"></div>

          {/* Inner Glow Dot */}
          <div className="absolute inset-4 bg-[#FF6500] rounded-full animate-pulse shadow-lg shadow-orange-300/50"></div>

        </div>

        {/* Main Text */}
        <p className="text-[#FF6500] font-semibold text-lg tracking-wide">
          Loading Property Details...
        </p>

        {/* Sub Text */}
        <p className="text-sm text-gray-500 text-center max-w-xs">
          Please wait while we fetch premium property information for you.
        </p>

      </div>
    </div>
  );
}