const Analytics = () => {
  return (
    <section className="relative w-full bg-white py-16! md:py-20! flex flex-col items-center">
      {/* Centered container matching other sections */}
      <div className="w-full max-w-[calc(80rem+10rem)] relative">
        {/* Header Section */}
        <div className="text-center mb-3! md:mb-6!">
          {/* Top subtitle */}
          <p className="text-[var(--primary-color)] text-base md:text-lg font-medium mb-4!">
            Our platform adapts to you.
          </p>

          {/* Main headline */}
          <h2 className="text-3xl! md:text-4xl! lg:text-5xl! xl:text-6xl! leading-[120%] font-medium text-[var(--tertiary-color)]">
            Meet Your{" "}
            <span className="block md:inline mt-3 md:mt-0 font-bold text-[var(--primary-color)]">
              AI Co-Workers
            </span>
          </h2>
        </div>

        {/* Carousel Section */}
        <div className="relative w-full">
          <div className="overflow-x-auto scrollbar-hide pb-3! md:pb-8!">
            <div className="flex gap-6! md:gap-10!">
              {/* Analytics Agent Card */}
              <div className="flex-shrink-0 w-[350px]! md:w-[1059px]! 2xl:w-auto h-[345px]! md:h-[486px]! 2xl:h-auto bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-[var(--primary-color)] relative overflow-hidden">
                {/* Feature Background */}
                <img
                  src="/Mobile-Mask-group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 block md:hidden"
                />
                <img
                  src="/Mask-Group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 hidden md:block"
                />

                {/* Additional overlay images (behind avatar) */}
                <div className="absolute inset-0 z-10">
                  {/* Left image, slightly above avatar center */}
                  <img
                    src="/Mask-Group-card-1-2.png"
                    alt="analytics-card-right"
                    className="absolute top-[18%] md:left-20 md:top-[30%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                  {/* Right image, slightly below avatar center */}
                  <img
                    src="/Mask-Group-card-1-1.png"
                    alt="analytics-card-left"
                    className="absolute -right-2 top-[27%] md:right-24 md:-top-[2%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                </div>
                {/* Avatar in Center */}
                <div className="absolute bottom-0 left-0 right-0 md:inset-0 flex items-center justify-center z-20">
                  <img
                    src="/illustratorAvtar.png"
                    alt="Illustrator Avatar"
                    className="w-[265px] h-[253px] md:w-full md:h-full object-contain"
                  />
                </div>

                {/* Content Overlay - Heading and Description */}
                <div className="absolute top-4 left-0 right-0 md:top-8 md:left-8 md:right-auto flex flex-col items-center md:items-start z-20 px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-3">
                    Analytics Agent
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs">
                    Ask, explore, view key reports, and build custom dashboards
                    that fit your store.
                  </p>
                </div>
              </div>
              {/* Analytics Agent Card (duplicate 1) */}
              <div className="flex-shrink-0 w-[350px]! md:w-[1059px]! 2xl:w-auto h-[345px]! md:h-[486px]! 2xl:h-auto bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-[var(--primary-color)] relative overflow-hidden">
                {/* Feature Background */}
                <img
                  src="/Mobile-Mask-group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 block md:hidden"
                />
                <img
                  src="/Mask-Group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 hidden md:block"
                />
                {/* Additional overlay images (behind avatar) */}
                <div className="absolute inset-0 z-10">
                  <img
                    src="/Mask-Group-card-1-2.png"
                    alt="analytics-card-right"
                    className="absolute top-[18%] md:left-20 md:top-[30%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                  <img
                    src="/Mask-Group-card-1-1.png"
                    alt="analytics-card-left"
                    className="absolute -right-2 top-[27%] md:right-24 md:-top-[2%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                </div>
                {/* Avatar in Center */}
                <div className="absolute bottom-0 left-0 right-0 md:inset-0 flex items-center justify-center z-20">
                  <img
                    src="/illustratorAvtar.png"
                    alt="Illustrator Avatar"
                    className="w-[265px] h-[253px] md:w-full md:h-full object-contain"
                  />
                </div>
                {/* Content Overlay - Heading and Description */}
                <div className="absolute top-4 left-0 right-0 md:top-8 md:left-8 md:right-auto flex flex-col items-center md:items-start z-20 px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-3">
                    Analytics Agent
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs">
                    Ask, explore, view key reports, and build custom dashboards
                    that fit your store.
                  </p>
                </div>
              </div>
              {/* Analytics Agent Card (duplicate 2) */}
              <div className="flex-shrink-0 w-[350px]! md:w-[1059px]! h-[345px]! md:h-[486px]! 2xl:h-auto bg-gradient-to-br from-blue-50 to-white rounded-3xl border-2 border-[var(--primary-color)] relative overflow-hidden">
                {/* Feature Background */}
                <img
                  src="/Mobile-Mask-group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 block md:hidden"
                />
                <img
                  src="/Mask-Group-Analytics-Card.png"
                  alt="Feature Background"
                  className="absolute bottom-0 w-full object-contain z-0 hidden md:block"
                />
                {/* Additional overlay images (behind avatar) */}
                <div className="absolute inset-0 z-10">
                  <img
                    src="/Mask-Group-card-1-2.png"
                    alt="analytics-card-right"
                    className="absolute top-[18%] md:left-20 md:top-[30%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                  <img
                    src="/Mask-Group-card-1-1.png"
                    alt="analytics-card-left"
                    className="absolute -right-2 top-[27%] md:right-24 md:-top-[2%] w-1/2 md:w-1/3 h-auto object-contain"
                  />
                </div>
                {/* Avatar in Center */}
                <div className="absolute bottom-0 left-0 right-0 md:inset-0 flex items-center justify-center z-20">
                  <img
                    src="/illustratorAvtar.png"
                    alt="Illustrator Avatar"
                    className="w-[265px] h-[253px] md:w-full md:h-full object-contain"
                  />
                </div>
                {/* Content Overlay - Heading and Description */}
                <div className="absolute top-4 left-0 right-0 md:top-8 md:left-8 md:right-auto flex flex-col items-center md:items-start z-20 px-4 md:px-0 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[var(--primary-color)] mb-3">
                    Analytics Agent
                  </h3>
                  <p className="text-sm md:text-base text-gray-700 leading-relaxed max-w-xs">
                    Ask, explore, view key reports, and build custom dashboards
                    that fit your store.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="text-center">
          <p className="text-base md:text-lg italic text-[#7E8492]">
            This is what makes us different—our platform adapts to you.
          </p>
        </div>
      </div>

      {/* Decorative Background Elements
      <div className="absolute top-16 md:top-20 left-16 md:left-20 w-48 md:w-64 h-48 md:h-64 opacity-10 -z-10">
        <div className="absolute w-36 md:w-48 h-36 md:h-48 border border-blue-200 rounded-full transform rotate-12"></div>
        <div className="absolute w-40 md:w-56 h-40 md:h-56 border border-purple-200 rounded-full transform rotate-45 top-2 md:top-4 left-2 md:left-4"></div>
      </div> */}
    </section>
  );
};

export default Analytics;
