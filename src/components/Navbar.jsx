import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowLeft, Rocket, Building, Building2 } from "lucide-react";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showMobileProducts, setShowMobileProducts] = useState(false);
  const dropdownRef = useRef(null);
  const hoverTimeoutRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProductsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle hover for desktop dropdown
  const handleMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    setIsProductsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setIsProductsDropdownOpen(false);
    }, 100);
  };

  const handleMobileProductsClick = () => {
    setShowMobileProducts(true);
  };

  const handleMobileBackClick = () => {
    setShowMobileProducts(false);
  };

  return (
    <nav className="!w-full !fixed !top-0 !left-0 !z-50 !h-32 !flex !justify-center">
      {/* Desktop View */}
      <div className="!hidden lg:!flex !justify-between !items-center !relative !z-10 !h-full px-4! md:px-6! lg:px-10! xl:px-12! !max-w-[calc(80rem+10rem)] !w-full">
        {/* Left side - Logo container */}
        <div className="!flex-1 !max-w-[665px] !h-16 !bg-[var(--quaternary-color)] !shadow-[0px_4px_21px_3px_rgba(0,0,0,0.04)] !rounded-[100px] !flex !items-center">
          {/* Logo and Navigation Links Container */}
          <div className="!w-full !h-4 !flex !items-center !px-5">
            {/* Logo */}
            <div className="!flex !items-center">
              <h1 className="!text-lg !text-[var(--primary-color)] !tracking-[3px] !font-semibold">
                AMPLYUP.AI
              </h1>
            </div>

            {/* Navigation Links Container */}
            <div className="!flex !items-center justify-center !gap-5 !ml-8 !w-full !h-4">
              {/* Home */}
              <a
                href="#"
                className="!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center !text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100 !no-underline"
              >
                Home
              </a>

              {/* Products with Hover Dropdown */}
              <div
                ref={dropdownRef}
                className="!relative !flex !flex-row !items-center !flex-none !order-1 !flex-grow-0"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <button className="!flex !items-center !h-4 !gap-1 !font-medium !text-base !leading-[120%] !text-center !text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100 !bg-transparent !border-none !cursor-pointer">
                  <span>Products</span>
                  <img
                    src="/Arrow-Down3.svg"
                    alt="Products dropdown"
                    className={`!w-4 !h-4 !transition-transform !duration-300 ${
                      isProductsDropdownOpen ? "!rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Dropdown Menu */}
                <div
                  className={`!absolute !top-full !left-1/2 !transform !-translate-x-1/2 !mt-4 !bg-white !rounded-2xl !shadow-2xl !border !border-gray-100 !transition-all !duration-200 ${
                    isProductsDropdownOpen
                      ? "!opacity-100 !scale-100 !translate-y-0"
                      : "!opacity-0 !scale-95 !-translate-y-2 !pointer-events-none"
                  }`}
                  style={{ width: "780px" }}
                >
                  <div className="!p-8">
                    <div className="!grid !grid-cols-3 !gap-6">
                      {/* Product Item 1 - Startups */}
                      <div className="!flex !flex-col !p-6 !rounded-xl !hover:!bg-gray-50 !transition-all !duration-200 !cursor-pointer !border !border-transparent hover:!border-cyan-200 !group">
                        <div className="!w-10 !h-10 !bg-gradient-to-br !from-cyan-400 !to-cyan-500 !rounded-xl !flex !items-center !justify-center !mb-4 !group-hover:!scale-105 !transition-transform">
                          <Rocket className="!w-5 !h-5 !text-white" />
                        </div>
                        <h3 className="!text-lg !font-bold !text-[var(--tertiary-color)] !mb-3">
                          Startups
                        </h3>
                        <p className="!text-sm !text-gray-600 !leading-relaxed">
                          Hire Ava to manage your entire outbound operation,
                          keeping your team lean and efficient.
                        </p>
                      </div>

                      {/* Product Item 2 - Midmarket */}
                      <div className="!flex !flex-col !p-6 !rounded-xl !hover:!bg-gray-50 !transition-all !duration-200 !cursor-pointer !border !border-transparent hover:!border-pink-200 !group">
                        <div className="!w-10 !h-10 !bg-gradient-to-br !from-pink-400 !to-pink-500 !rounded-xl !flex !items-center !justify-center !mb-4 !group-hover:!scale-105 !transition-transform">
                          <Building className="!w-5 !h-5 !text-white" />
                        </div>
                        <h3 className="!text-lg !font-bold !text-[var(--tertiary-color)] !mb-3">
                          Midmarket
                        </h3>
                        <p className="!text-sm !text-gray-600 !leading-relaxed">
                          Streamline your existing outbound workflow by
                          automating 80% of manual tasks.
                        </p>
                      </div>

                      {/* Product Item 3 - Enterprise */}
                      <div className="!flex !flex-col !p-6 !rounded-xl !hover:!bg-gray-50 !transition-all !duration-200 !cursor-pointer !border !border-transparent hover:!border-purple-200 !group">
                        <div className="!w-10 !h-10 !bg-gradient-to-br !from-purple-400 !to-purple-500 !rounded-xl !flex !items-center !justify-center !mb-4 !group-hover:!scale-105 !transition-transform">
                          <Building2 className="!w-5 !h-5 !text-white" />
                        </div>
                        <h3 className="!text-lg !font-bold !text-[var(--tertiary-color)] !mb-3">
                          Enterprise
                        </h3>
                        <p className="!text-sm !text-gray-600 !leading-relaxed">
                          Equip your team with top-tier tools for each stage of
                          the outbound cycle, including an AI colleague to keep
                          everything on track.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <a
                href="#"
                className="!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center !text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100 !no-underline"
              >
                Use Cases
              </a>

              {/* Blog */}
              <div className="!flex !flex-row !items-center !flex-none !order-3 !flex-grow-0">
                <a
                  href="#"
                  className="!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center !text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100 !no-underline"
                >
                  Blog
                </a>
              </div>

              {/* Contact Us */}
              <div className="!flex !flex-row !items-center !flex-none !order-4 !flex-grow-0">
                <a
                  href="#"
                  className="!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center !text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100 !no-underline"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Join Waiting List Button */}
        <div className="!ml-8 flex justify-center items-center">
          <button className="!bg-[var(--primary-color)] !text-[var(--quaternary-color)] !h-13 !w-48 !rounded-full !py-4 !px-6 !cursor-pointer !shadow-lg flex justify-center items-center hover:!bg-[#0f47b3] hover:!scale-105 hover:!shadow-xl !transition-all !duration-300 active:!scale-95">
            Join Waiting List
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:!hidden !relative !z-10 !flex !justify-center !items-center !h-32 !px-4 !max-w-[calc(80rem-10rem)] !w-full">
        {!showMobileProducts ? (
          <>
            {/* Mobile navbar container */}
            <div className="!relative !w-full !max-w-[376px] !h-14">
              {/* Rectangle 22798 */}
              <div className="!absolute !inset-0 !bg-[var(--quaternary-color)] !rounded-[100px] !shadow-[0px_4px_21px_3px_rgba(0,0,0,0.08)]" />

              {/* Group 1171274804 - logo */}
              <h1 className="!absolute !left-4 !right-32 !top-5 !h-3 !leading-3 !text-sm !font-bold !text-[var(--primary-color)] !tracking-[2px]">
                AMPLYUP.AI
              </h1>

              {/* Group 1171274808 - menu button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
                className="!absolute !top-2 !right-2 !w-9 !h-9 !rounded-full !bg-[var(--primary-color)] !shadow-[0px_4px_16px_0px_#3838384D] !flex !items-center !justify-center !z-10"
              >
                {isMobileMenuOpen ? (
                  <X className="!w-5 !h-5 !text-white" />
                ) : (
                  <Menu className="!w-5 !h-5 !text-white" />
                )}
              </button>
            </div>

            {/* Mobile slide-down menu */}
            <div
              className={`!absolute !top-[96px] !left-0 !right-0 !mx-auto !w-full !max-w-[376px] !bg-[var(--quaternary-color)] !rounded-2xl !shadow-lg !overflow-hidden !transition-all !duration-300 ${
                isMobileMenuOpen
                  ? "!max-h-[320px] !opacity-100"
                  : "!max-h-0 !opacity-0"
              }`}
            >
              <div className="!flex !flex-col">
                <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">
                  Home
                </button>
                <button
                  onClick={handleMobileProductsClick}
                  className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100"
                >
                  Products
                </button>
                <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">
                  Use Cases
                </button>
                <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">
                  Blog
                </button>
                <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100">
                  Contact Us
                </button>
              </div>
            </div>
          </>
        ) : null}
      </div>

      {/* Mobile Products Detail View - Full Screen Overlay */}
      {showMobileProducts && (
        <div className="!fixed !top-0 !left-0 !right-0 !bottom-0 !w-full !h-full !bg-white !z-[9999] !overflow-y-auto lg:!hidden">
          {/* Top navbar with logo and close button */}
          <div className="!relative !w-full !max-w-[376px] !h-14 !mx-auto !mt-4">
            {/* Rectangle 22798 */}
            <div className="!absolute !inset-0 !bg-[var(--quaternary-color)] !rounded-[100px] !shadow-[0px_4px_21px_3px_rgba(0,0,0,0.08)]" />

            {/* Group 1171274804 - logo */}
            <h1 className="!absolute !left-4 !right-32 !top-5 !h-3 !leading-3 !text-sm !font-bold !text-[var(--primary-color)] !tracking-[2px]">
              AMPLYUP.AI
            </h1>

            {/* Close button */}
            <button
              onClick={handleMobileBackClick}
              aria-label="Close menu"
              className="!absolute !top-2 !right-2 !w-9 !h-9 !rounded-full !bg-[var(--primary-color)] !shadow-[0px_4px_16px_0px_#3838384D] !flex !items-center !justify-center !z-10"
            >
              <X className="!w-5 !h-5 !text-white" />
            </button>
          </div>

          {/* Back button below navbar */}
          <div className="!px-6 !mt-6">
            <button
              onClick={handleMobileBackClick}
              className="!flex !items-center !gap-2 !text-[var(--tertiary-color)] !mb-6"
            >
              <ArrowLeft className="!w-5 !h-5" />
              <span className="!text-lg !font-medium">Back</span>
            </button>
          </div>

          {/* Products List */}
          <div className="!px-6 !space-y-4 !pb-8">
            {/* Startups */}
            <div className="!p-6 !bg-[var(--quaternary-color)] !rounded-2xl !shadow-sm">
              <div className="!flex !items-center !gap-3 !mb-3">
                <div className="!w-8 !h-8 !bg-gradient-to-br !from-cyan-400 !to-cyan-500 !rounded-lg !flex !items-center !justify-center">
                  <Rocket className="!w-4 !h-4 !text-white" />
                </div>
                <h3 className="!text-lg !font-semibold !text-[var(--tertiary-color)]">
                  Startups
                </h3>
              </div>
              <p className="!text-gray-600 !leading-relaxed">
                Hire Ava to manage your entire outbound operation, keeping your
                team lean and efficient.
              </p>
            </div>

            {/* Midmarket */}
            <div className="!p-6 !bg-[var(--quaternary-color)] !rounded-2xl !shadow-sm">
              <div className="!flex !items-center !gap-3 !mb-3">
                <div className="!w-8 !h-8 !bg-gradient-to-br !from-pink-400 !to-pink-500 !rounded-lg !flex !items-center !justify-center">
                  <Building className="!w-4 !h-4 !text-white" />
                </div>
                <h3 className="!text-lg !font-semibold !text-[var(--tertiary-color)]">
                  Midmarket
                </h3>
              </div>
              <p className="!text-gray-600 !leading-relaxed">
                Streamline your existing outbound workflow by automating 80% of
                manual tasks.
              </p>
            </div>

            {/* Enterprise */}
            <div className="!p-6 !bg-[var(--quaternary-color)] !rounded-2xl !shadow-sm">
              <div className="!flex !items-center !gap-3 !mb-3">
                <div className="!w-8 !h-8 !bg-gradient-to-br !from-purple-400 !to-purple-500 !rounded-lg !flex !items-center !justify-center">
                  <Building2 className="!w-4 !h-4 !text-white" />
                </div>
                <h3 className="!text-lg !font-semibold !text-[var(--tertiary-color)]">
                  Enterprise
                </h3>
              </div>
              <p className="!text-gray-600 !leading-relaxed">
                Equip your team with top-tier tools for each stage of the
                outbound cycle, including an AI colleague to keep everything on
                track.
              </p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
