const Footer = () => {
  return (
    <footer className="relative !w-full !py-20 !flex !flex-col !items-center">
      {/* Centered container matching other sections */}
      <div className="relative !w-full !max-w-[calc(80rem+10rem)] !mx-auto !px-4 sm:!px-6 lg:!px-8">
        {/* Main footer layout matching the image */}
        <div className="!flex !flex-col lg:!flex-row lg:!justify-between !items-start !gap-10 lg:!gap-16 !mb-16">
          {/* Left side - Newsletter signup */}
          <div className="!w-full lg:!w-2/3 !mb-8 lg:!mb-0">
            <h3 className="!text-center !text-2xl sm:!text-3xl !leading-snug !font-normal text-gray-800 !mb-6 sm:!mb-8">
              Join our newsletter for the{" "}
              <em className="italic font-normal">
                latest updates, pro design tips, and exclusive offers
              </em>{" "}
              — straight to your inbox.
            </h3>

            {/* Email input with button */}
            <div className="!mt-4 !w-full">
              <div className="!flex !items-center !w-full !border-b border-gray-400 focus-within:!border-[var(--primary-color)]">
                <input
                  type="email"
                  placeholder="Email Address"
                  aria-label="Email address"
                  className="!w-full !px-0 !py-4 !text-base !bg-transparent placeholder-gray-500 focus:outline-none"
                />
                <button className="!p-2" aria-label="Subscribe">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="#4F46E5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Right side - Navigation columns */}
          <div className="!w-full lg:!w-1/3 !flex justify-center">
            {/* Products column */}
            <div className="!basis-1/2 sm:!basis-auto lg:!basis-1/3 !flex !flex-col !items-center !text-center">
              <h4 className="!text-base sm:!text-lg !font-semibold text-gray-900 !mb-4 sm:!mb-6">
                Products
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    Anomaly
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    Analytics
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    Build
                  </a>
                </li>
              </ul>
            </div>

            {/* Resources column */}
            <div className="!basis-1/2 sm:!basis-auto lg:!basis-1/3 !flex !flex-col !items-center !text-center">
              <h4 className="!text-base sm:!text-lg !font-semibold text-gray-900 !mb-4 sm:!mb-6">
                Resources
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    Use cases
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Company column */}
            <div className="!basis-1/2 sm:!basis-auto lg:!basis-1/3 !flex !flex-col !items-center !text-center">
              <h4 className="!text-base sm:!text-lg !font-semibold text-gray-900 !mb-4 sm:!mb-6">
                Company
              </h4>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    About us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="!text-sm sm:!text-base text-gray-700 hover:text-[var(--primary-color)] transition-colors"
                  >
                    Contact us
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom section - Copyright and scroll to top */}
        <div className="!flex !flex-col sm:!flex-row !items-center !justify-between !gap-4 !pt-8">
          <p className="!text-sm text-gray-600 !text-right">
            Copyright © 2023 EcomRise. All rights reserved
          </p>

          {/* Scroll to top button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="!w-12 !h-12 !bg-[var(--primary-color)] !text-white !rounded-full !flex !items-center !justify-center hover:!bg-blue-700 transition-colors"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 19V5M12 5L5 12M12 5L19 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
