import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { CheckCircle, Users, BarChart3, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isProductsDropdownOpen, setIsProductsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);

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
  return (
    <nav className="!w-full !fixed !top-0 !left-0 !z-50 !h-32 !flex !justify-center">
      {/* Desktop View */}
      <div className="!hidden lg:!flex !justify-between !items-center !relative !z-10 !h-full px-4! md:px-6! lg:px-10! xl:px-12! !max-w-[calc(80rem+10rem)] !w-full">
        {/* Left side - Logo container */}
        <div className="!flex-1 !max-w-[665px] !h-16 !bg-[var(--quaternary-color)] !shadow-[0px_4px_21px_3px_rgba(0,0,0,0.04)] !rounded-[100px] !flex !items-center">
          {/* Logo and Navigation Links Container */}
          <div className="!w-full !h-4 !flex !items-center !px-5">
            {/* Logo */}
            <div className="!flex !items-center !ml-auto">
              <h1 className="!text-lg !text-[var(--primary-color)] !tracking-[3px] !font-semibold">
                AMPLYUP.AI
              </h1>
            </div>

            {/* Navigation Links Container */}
            <div className="!flex !items-center !gap-5 !ml-8 !mr-2 !w-full !max-w-[418px] !h-4">
              {/* Home */}
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center ${
                    isActive
                      ? "!text-[var(--tertiary-color)]"
                      : "!text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Products with Dropdown */}
              <div ref={dropdownRef} className="!relative !flex !flex-row !items-center !flex-none !order-1 !flex-grow-0">
                <button
                  onClick={() => setIsProductsDropdownOpen(!isProductsDropdownOpen)}
                  className="!flex !items-center !h-4 !gap-1 !font-medium !text-base !leading-[120%] !text-center !text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100 !bg-transparent !border-none !cursor-pointer"
                >
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
                  className={`!absolute !top-full !left-0 !mt-2 !bg-[var(--quaternary-color)] !rounded-lg !shadow-lg !border !border-gray-200 !transition-all !duration-300 !transform ${
                    isProductsDropdownOpen 
                      ? "!opacity-100 !scale-100 !translate-y-0" 
                      : "!opacity-0 !scale-95 !-translate-y-2 !pointer-events-none"
                  }`}
                  style={{ minWidth: "600px" }}
                >
                  <div className="!p-4 !grid !grid-cols-3 !gap-4">
                    {/* Product Item 1 */}
                    <div className="!flex !flex-col !p-4 !rounded-lg !hover:!bg-gray-50 !transition-colors !duration-200 !cursor-pointer !border !border-gray-200 !hover:!border-[var(--primary-color)]">
                      <div className="!flex !items-center !mb-3">
                        <div className="!w-10 !h-10 !bg-[var(--primary-color)] !rounded-lg !flex !items-center !justify-center !mr-3">
                          <CheckCircle className="!w-5 !h-5 !text-white" />
                        </div>
                        <h3 className="!text-sm !font-semibold !text-[var(--tertiary-color)]">Analytics Dashboard</h3>
                      </div>
                      <p className="!text-xs !text-gray-600 !leading-relaxed">
                        Advanced analytics and insights for your business performance tracking and decision making.
                      </p>
                    </div>
                    
                    {/* Product Item 2 */}
                    <div className="!flex !flex-col !p-4 !rounded-lg !hover:!bg-gray-50 !transition-colors !duration-200 !cursor-pointer !border !border-gray-200 !hover:!border-[var(--secondary-color)]">
                      <div className="!flex !items-center !mb-3">
                        <div className="!w-10 !h-10 !bg-[var(--secondary-color)] !rounded-lg !flex !items-center !justify-center !mr-3">
                          <Users className="!w-5 !h-5 !text-white" />
                        </div>
                        <h3 className="!text-sm !font-semibold !text-[var(--tertiary-color)]">User Management</h3>
                      </div>
                      <p className="!text-xs !text-gray-600 !leading-relaxed">
                        Comprehensive user management system with role-based access control and permissions.
                      </p>
                    </div>
                    
                    {/* Product Item 3 */}
                    <div className="!flex !flex-col !p-4 !rounded-lg !hover:!bg-gray-50 !transition-colors !duration-200 !cursor-pointer !border !border-gray-200 !hover:!border-[var(--primary-color)]">
                      <div className="!flex !items-center !mb-3">
                        <div className="!w-10 !h-10 !bg-[var(--primary-color)] !rounded-lg !flex !items-center !justify-center !mr-3">
                          <BarChart3 className="!w-5 !h-5 !text-white" />
                        </div>
                        <h3 className="!text-sm !font-semibold !text-[var(--tertiary-color)]">Data Visualization</h3>
                      </div>
                      <p className="!text-xs !text-gray-600 !leading-relaxed">
                        Interactive charts and graphs to visualize complex data sets and trends effectively.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Use Cases */}
              <NavLink
                to="#"
                className={({ isActive }) =>
                  `!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center ${
                    isActive
                      ? "!text-[var(--tertiary-color)]"
                      : "!text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100"
                  }`
                }
              >
                Use Cases
              </NavLink>

              {/* Blog */}
              <div className="!flex !flex-row !items-center !flex-none !order-3 !flex-grow-0">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center ${
                      isActive
                        ? "!text-[var(--tertiary-color)]"
                        : "!text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </div>

              {/* Contact Us */}
              <div className="!flex !flex-row !items-center !flex-none !order-4 !flex-grow-0">
                <NavLink
                  to="#"
                  className={({ isActive }) =>
                    `!flex !items-center !h-4 !font-medium !text-base !leading-[120%] !text-center ${
                      isActive
                        ? "!text-[var(--tertiary-color)]"
                        : "!text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100"
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        {/* Right side - Join Waiting List Button */}
        <div className="!ml-8">
          <button className="!bg-[var(--primary-color)] !text-[var(--quaternary-color)] !h-13 !w-48 !rounded-full !py-4 !px-6 !cursor-pointer !shadow-lg">
            Join Waiting List
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:!hidden !relative !z-10 !flex !justify-center !items-center !h-32 !px-4 !max-w-[calc(80rem-10rem)] !w-full">
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
            isMobileMenuOpen ? "!max-h-[320px] !opacity-100" : "!max-h-0 !opacity-0"
          }`}
        >
          <div className="!flex !flex-col">
            <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">Home</button>
            <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">Products</button>
            <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">Use Cases</button>
            <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100 !border-b !border-gray-100">Blog</button>
            <button className="!text-left !px-6 !py-4 !text-[var(--tertiary-color)] !opacity-70 hover:!opacity-100">Contact Us</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
