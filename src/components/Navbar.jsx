import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="!w-full !fixed !top-0 !left-0 !z-50 !h-32">
      {/* Desktop View */}
      <div className="!hidden lg:!flex !justify-between !items-center !relative !z-10 !h-full !px-16 2xl:!px-32">
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
                to="/"
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
              <div className="!flex !flex-row !items-center !flex-none !order-1 !flex-grow-0">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `!flex !items-center !h-4 !gap-1 !font-medium !text-base !leading-[120%] !text-center ${
                      isActive
                        ? "!text-[var(--tertiary-color)]"
                        : "!text-[var(--tertiary-color)] !opacity-50 hover:!text-[var(--primary-color)] hover:!opacity-100"
                    }`
                  }
                >
                  <span>Products</span>
                  <img
                    src="/Arrow-Down3.svg"
                    alt="Products dropdown"
                    className="!w-4 !h-4"
                  />
                </NavLink>
              </div>

              {/* Use Cases */}
              <NavLink
                to="/use-cases"
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
                  to="/blog"
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
                  to="/contact"
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
      <div className="lg:!hidden !relative !z-10 !flex !justify-center !items-center !h-32 !px-4">
        {/* Mobile navbar container */}
        <div className="!relative !w-full !max-w-[376px] !h-14">
          {/* Rectangle 22798 */}
          <div className="!absolute !inset-0 !bg-[var(--quaternary-color)] !rounded-[100px] !shadow-[0px_4px_21px_3px_rgba(0,0,0,0.08)]" />

          {/* Group 1171274804 - logo */}
          <h1 className="!absolute !left-4 !right-32 !top-5 !h-3 !leading-3 !text-sm !font-bold !text-[var(--primary-color)] !tracking-[2px]">
            AMPLYUP.AI
          </h1>

          {/* Group 1171274808 - menu button */}
          <button className="!absolute !top-2 !right-2 !w-9 !h-9 !rounded-full !bg-[var(--primary-color)] !shadow-[0px_4px_16px_0px_#3838384D] !flex !items-center !justify-center !z-10">
            {/* Group 1171274807 - icon */}
            <img src="/menu.svg" alt="menu" className="!w-4 !h-3" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
