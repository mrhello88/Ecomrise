const SmartAgentBuilt = () => {
  return (
    <section className="relative w-full bg-white !py-16 md:!py-20 flex flex-col items-center">
      {/* Centered container */}
      <div className="w-full max-w-[calc(80rem+10rem)] !px-4 md:!px-6 lg:!px-10 xl:!px-16">
        {/* Main content container with background */}
        <div className="w-full features-gradient !rounded-[20px] md:rounded-3xl !px-6 !py-4 md:!px-10 lg:!px-12 md:!py-14 md:!h-[436px]">
          <div className="flex h-full flex-col md:flex-row items-center justify-center md:justify-between !gap-8">
            {/* Left Side - AI Logo/Icon */}
            <div className="flex-shrink-0 flex items-center justify-center">
              <img
                src="/fullogo.png"
                alt="AI E-commerce Logo"
                className="!w-60 !h-60 md:!w-64 md:!h-64 lg:!w-80 lg:!h-80 xl:!w-96 xl:!h-96 object-contain"
              />
            </div>

            {/* Right Side - Content */}
            <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left md:!ml-8">
              {/* Small subtitle */}
              <p className="text-gray-600   !font-normal !text-2xl !leading-8 md:!text-4xl md:!leading-12 tracking-normal !mb-3 md:!mb-4">
                Smarter Than Generic
              </p>

              {/* Main heading */}
              <h2 className="text-3xl md:text-4xl  leading-tight font-medium text-gray-800 !mb-4 md:!mb-6">
                <span className="text-[var(--primary-color)] font-bold">
                  AI — Built for E-commerce.
                </span>
              </h2>

              {/* Description */}
              <p className="text-gray-700 text-sm md:text-base leading-relaxed font-medium !mb-6 md:!mb-8 max-w-prose">
                Our AI agents are powered by machine learning models trained on
                millions of events. That means they don't just guess — they
                detect, recommend, and learn from patterns proven to impact
                growth.
              </p>

              {/* CTA Button */}
              <button className="bg-[var(--primary-color)] text-white !w-52 !rounded-full font-bold text-sm md:text-base !leading-6 flex items-center justify-center !gap-2.5 shadow-lg hover:shadow-xl transition-shadow !py-3.5 !px-6">
                Join Waiting List
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 12H19M19 12L12 5M19 12L12 19"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartAgentBuilt;
