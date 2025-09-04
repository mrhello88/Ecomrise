import ImageBox from "../ImageBox";

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden flex justify-center">
      {/* Decorative Ellipse (anchored to full section corner) */}
      <div className="ellipse"></div>

      {/* <ImageBox position="-bottom-80 -right-5" /> */}
      <div className="w-full flex flex-col mt-32! md:mt-52! px-4! md:px-6! lg:px-10! xl:px-12!">
        {/* Ellipse 527 (decorative bg) */}
        <div
          className="absolute w-96! h-96! -ml-24! rounded-full bg-[rgba(171,154,255,0.1)] blur-3xl! z-0"
          style={{ filter: "blur(81.25px)" }}
        />

        {/* Main content container with left and right sides */}
        <div className="flex w-full flex-1 justify-center items-center flex-col md:flex-row">
          {/* Left side content */}
          <div className="w-full! md:w-1/2! lg:w-auto! lg:max-w-2xl! md:h-auto! lg:h-auto! z-10! flex items-center justify-center">
            {/* Content container with width constraint */}
            <div className="w-full! lg:max-w-xl! flex flex-col justify-center items-center md:items-start! lg:items-start!">
              {/* Small badge above headline */}
              <div className="!flex !items-center !justify-center rounded-full border border-[var(--primary-color)] w-64! h-9! md:w-48! md:h-8! lg:w-60! xl:w-64! lg:h-10! xl:h-11! ">
                <div className="w-full! h-full! flex items-center justify-center ">
                  <span className="text-base! md:text-sm! lg:text-sm! xl:text-base! leading-7! md:leading-6! lg:leading-7! xl:leading-8! font-semibold text-[var(--primary-color)] whitespace-nowrap">
                    keeping you ahead 24/7.
                  </span>
                </div>
              </div>

              {/* Headline */}
              <h1 className="text-3xl! sm:text-4xl! md:text-4xl! lg:text-5xl! xl:text-6xl! leading-tight! md:leading-tight! lg:leading-tight! tracking-tight! md:tracking-tight! lg:tracking-tight! font-medium text-[var(--tertiary-color)] mb-4! md:mb-4! lg:mb-5! text-center md:text-left!">
                Your AI Team for
                <br />
                <span className="text-[var(--primary-color)] font-bold">
                  E-commerce Growth
                </span>
              </h1>

              {/* Mobile image between headline and subcopy */}
              <div className="w-full! mx-auto block md:hidden mb-16!">
                <div className="relative w-full! h-auto rounded-3xl! overflow-visible">
                  <img
                    src="/image 18.png"
                    alt="hero-visual"
                    className="w-full! h-auto object-cover"
                  />
                  {/* Circular CTA over image (mobile) */}
                  <div className="absolute left-4! -bottom-12! w-28! h-28! opacity-100 z-20!">
                    <div className="absolute inset-0 rounded-full bg-[#3EB489] z-0" />
                    <div className="absolute left-6! top-6! w-16! h-16! rounded-full bg-[var(--quaternary-color)] z-10! flex items-center justify-center">
                      <img
                        src="/material-symbols_arrow-forward.svg"
                        alt="forward"
                        className="w-12! h-12!"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Subcopy with arrow line */}
              <div className="flex items-start w-full! lg:max-w-2xl! justify-center md:justify-start!">
                <img
                  src="/Arrow-1.svg"
                  alt="arrow"
                  className="w-10! h-2! md:w-9! lg:w-12! md:h-2! lg:h-2.5! mt-1! md:mt-2! mr-4!"
                />
                <p className="text-base! md:text-sm! lg:text-lg! leading-relaxed! font-medium text-[#7E8492] max-w-lg! md:w-full! lg:max-w-2xl! text-center lg:text-left!">
                  Whether it's a spike or a slip—Retailic AI agents surface what
                  matters and take action to keep you ahead
                </p>
              </div>

              {/* CTA button and avatars row */}
              <div className="flex items-center gap-1.5! h-12! md:h-13! lg:h-13! mt-8! md:mt-6! lg:mt-8!">
                <button className="w-48! md:w-44! lg:w-52! h-12! md:h-13! lg:h-13! rounded-full bg-[var(--primary-color)] text-[var(--quaternary-color)] font-bold text-sm! md:text-sm! lg:text-base! leading-6! shadow-lg! px-5! md:px-5! lg:px-6! py-3! md:py-3.5! lg:py-3.5! flex items-center justify-center gap-2! whitespace-nowrap hover:bg-[#0f47b3] hover:scale-105 hover:shadow-xl transition-all duration-300 active:scale-95">
                  Join Waiting List
                  <img
                    src="/hero-icon.svg"
                    alt="arrow"
                    className="w-4! h-4! md:w-3! lg:w-5! brightness-0 invert"
                  />
                </button>

                {/* Avatars group */}
                <div className="flex items-center relative">
                  <img
                    src="/Ellipse 44@2x.png"
                    alt="avatar-1"
                    className="w-10! h-10! rounded-full object-cover shadow-sm z-10!"
                  />
                  <img
                    src="/Ellipse 44@2x.png"
                    alt="avatar-2"
                    className="w-10! h-10! rounded-full object-cover -ml-3! shadow-sm z-20!"
                  />
                  <img
                    src="/Ellipse 44@2x.png"
                    alt="avatar-3"
                    className="w-10! h-10! rounded-full object-cover -ml-3! shadow-sm z-30!"
                  />
                  <img
                    src="/Ellipse 44@2x.png"
                    alt="avatar-4"
                    className="w-10! h-10! rounded-full object-cover -ml-3! shadow-sm z-40!"
                  />
                  {/* Plus sign placeholder */}
                  <div className="w-10! h-10! rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center -ml-3! shadow-sm z-50!">
                    <span className="text-[var(--primary-color)] text-base font-bold">
                      +
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right side image (desktop/tablet) */}
          <div className="w-full! md:w-1/2! lg:w-auto! lg:max-w-4xl! h-auto! md:h-auto! lg:h-auto! z-10! hidden md:block md:mt-0!">
            <div className="relative w-full! h-full! md:h-auto! lg:h-auto! rounded-3xl! overflow-hidden">
              <img
                src="/image 18.png"
                alt="hero-visual"
                className="w-full h-full"
              />
              {/* Desktop CTA moved out below (not overlay on desktop) */}
            </div>
          </div>
        </div>
        {/* Desktop/Tablet CTA at bottom (768px+) */}
        <div className="hidden md:flex items-center justify-center md:mt-2! lg:mt-4! md:mb-4! lg:mb-8!">
          <div className="relative w-32! h-32! opacity-100 z-20! lg:-ml-68! md:-ml-36!">
            <div className="absolute inset-0 rounded-full bg-[#3EB489] z-0" />
            <div className="absolute left-6! top-6! w-20! h-20! rounded-full bg-[var(--quaternary-color)] z-10! flex items-center justify-center">
              <img
                src="/material-symbols_arrow-forward.svg"
                alt="forward"
                className="w-12! h-12!"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
