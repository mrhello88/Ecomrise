import ImageBox from "../ImageBox";

export default function Features() {
  return (
    <section className="relative w-full flex items-center justify-center">
      {/* Reusable ImageBox component */}
      <ImageBox position="-top-80 right-0" />
      {/* Green color decorative element */}
      <img
        src="/green-color-right-side.png"
        alt="green decorative element"
        className="absolute right-0 top-1/3 transform -translate-y-1/2 w-auto h-auto object-contain pointer-events-none z-100 hidden sm:hidden md:block"
      />
      {/* Left side decorative element */}
      <img
        src="/elipse-star-left-side.png"
        alt="left side decorative element"
        className="absolute left-0 top-1/3 transform -translate-y-1/2 w-auto h-auto object-contain pointer-events-none z-100 hidden sm:hidden md:block"
      />
      {/* Centered inner wrapper matching desired width */}
      <div className="w-full px-4! max-w-[calc(80rem+10rem)] flex flex-col items-center md:px-6! lg:px-10! xl:px-16! mt-20!">
        {/* Header Section - using flexbox instead of absolute positioning */}
        <div className="w-full">
          {/* Before & After - Top left */}
          <h3 className="w-full font-bold text-xl md:text-2xl lg:text-3xl text-[#4357E0] leading-[120%] tracking-[0px] text-center md:text-left">
            Before & After
          </h3>

          {/* Main content row */}
          <div className="flex flex-col md:flex-row justify-center md:justify-between items-center md:items-start text-center md:text-left">
            {/* Main Heading */}
            <h2 className="text-[#111111] w-full md:w-2/3 font-medium text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[120%] tracking-[0px]">
              How{" "}
              <span className="font-bold text-3xl md:text-4xl lg:text-5xl xl:text-[56px] leading-[120%] tracking-[0px] text-[var(--primary-color)]">
                EcomRise
              </span>
              <br />
              Changes the Game
            </h2>

            {/* Description - right aligned */}
            <p className="self-end font-medium text-base md:text-lg lg:text-xl leading-8 text-[#7E8492] w-full md:w-1/3">
              Level up your Growth: Powerful tools for analysis, generation, and
              optimization.
            </p>
          </div>
        </div>

        {/* Before & After Cards - using flexbox and margin instead of absolute positioning */}
        <div className="w-full gap-4! md:gap-7! p-4! md:p-8! flex flex-col md:flex-row justify-center z-10! mt-8! rounded-2xl features-gradient backdrop-blur-[15px]">
          {/* Before Card */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-md rounded-3xl relative overflow-hidden border border-white/20 shadow-xl">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/40 to-white/60 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-full pt-5! px-5!">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-emerald-600 mb-4">
                  Before
                </h3>
                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#111111] mb-3 leading-tight">
                  Struggling with fragmented tools & hidden issues
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Data scattered across apps, hours wasted, no alerts when
                  problems arise.
                </p>
              </div>
              {/* Illustration from public/card-1.svg + card-1.png overlay */}
              <div className="relative mt-8! w-full overflow-hidden rounded-2xl flex items-center justify-center">
                {/* Base SVG */}
                <img
                  src="/card-1.svg"
                  alt="before-illustration-base"
                  className="w-full h-full object-contain"
                />
                {/* PNG placed on the card (overlayed/centered) */}
                <img
                  src="/card-1.png"
                  alt="before-illustration-detail"
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] object-contain pointer-events-none"
                />
              </div>
            </div>
          </div>

          {/* After Card */}
          <div className="w-full md:w-1/2 bg-white/80 backdrop-blur-md rounded-3xl relative overflow-hidden border border-white/20 shadow-xl p-5!">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/40 to-white/60 backdrop-blur-sm rounded-3xl"></div>
            <div className="relative z-10">
              <div className="w-full">
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-emerald-600 mb-4">
                  After
                </h3>
                <h4 className="text-lg md:text-xl lg:text-2xl font-semibold text-[#111111] mb-3 leading-tight">
                  Always-on AI agents working for you
                </h4>
                <p className="text-gray-600 text-sm md:text-base">
                  Centralized dashboards, intelligent alerts, and smart
                  suggestions running 24/7.
                </p>
              </div>
              {/* Illustration from public/card-2.svg + 6 overlay images */}
              <div className="relative mt-12! w-full overflow-hidden rounded-2xl flex items-center justify-center">
                {/* Base SVG */}
                <img
                  src="/card-2.svg"
                  alt="after-illustration-base"
                  className="w-full h-full object-contain"
                />

                {/* 6 overlay images with absolute positioning */}
                <img
                  src="/card-2/image-1.png"
                  alt="overlay-image-1"
                  className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                  style={{ top: "13%", left: "22%" }}
                />
                {/* <img
                  src="/card-2/image-2.png"
                  alt="overlay-image-2"
                  className="absolute w-[60px] h-[60px] object-contain"
                  style={{ top: '30%', right: '20%' }}
                /> */}
                <img
                  src="/card-2/image-3.png"
                  alt="overlay-image-3"
                  className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                  style={{ top: "40%", left: "40%" }}
                />
                <img
                  src="/card-2/image-4.png"
                  alt="overlay-image-4"
                  className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                  style={{ bottom: "20%", right: "10%" }}
                />
                <img
                  src="/card-2/image-5.png"
                  alt="overlay-image-5"
                  className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                  style={{ top: "15%", left: "61.5%" }}
                />
                <img
                  src="/card-2/image-6.png"
                  alt="overlay-image-6"
                  className="absolute w-[40px] h-[40px] md:w-[50px] md:h-[50px] lg:w-[60px] lg:h-[60px] object-contain"
                  style={{ bottom: "25%", left: "10%" }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Background Elements - Behind content, right side
      <div className="absolute top-0 right-0 w-96 h-96 opacity-20 -z-10">
        <div className="absolute w-72 h-72 border border-purple-300 rounded-full transform rotate-12 top-8 right-24"></div>
        <div className="absolute w-80 h-80 border border-purple-200 rounded-full transform rotate-45 top-12 right-20"></div>
        <div className="absolute top-20 right-32 w-3 h-3 bg-purple-300 transform rotate-45"></div>
      </div> */}
    </section>
  );
}
