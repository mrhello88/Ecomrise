import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full fixed top-0 left-0 z-50 h-[120px]">
      {/* Desktop View */}
      <div className="hidden xl:flex justify-between items-center relative z-10">
        {/* Left side - Logo container */}
        <div className="absolute w-[665px] h-[65px] left-[61px] top-[46px] bg-[var(--quaternary-color)] shadow-[0px_4px_21px_3px_rgba(0,0,0,0.04)] rounded-[100px] xl:left-[61px] 2xl:left-[120px]">
          {/* Logo and Navigation Links Container */}
          <div className="absolute top-[25px] left-[21px] w-[615px] h-[15px] flex items-center">
            {/* Logo */}
            <div className="absolute flex items-center right-[39.38]">
              <h1 className="text-[18px] text-[var(--primary-color)] tracking-[3px] font-semibold">
                AMPLYUP.AI
              </h1>
            </div>

            {/* Navigation Links Container */}
            <div className="absolute left-[218px] right-[29px] w-[418px] h-[14px] flex items-center gap-[20px]">
              {/* Home */}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `flex items-center h-[14px] font-medium text-[16px] leading-[120%] text-center ${
                    isActive
                      ? "text-[var(--tertiary-color)]"
                      : "text-[var(--tertiary-color)] opacity-50 hover:text-[var(--primary-color)] hover:opacity-100"
                  }`
                }
              >
                Home
              </NavLink>

              {/* Products with Dropdown */}
              <div className="flex flex-row items-center flex-none order-1 flex-grow-0">
                <NavLink
                  to="/products"
                  className={({ isActive }) =>
                    `flex items-center h-[14px] gap-[4px] font-medium text-[16px] leading-[120%] text-center ${
                      isActive
                        ? "text-[var(--tertiary-color)]"
                        : "text-[var(--tertiary-color)] opacity-50 hover:text-[var(--primary-color)] hover:opacity-100"
                    }`
                  }
                >
                  <span>Products</span>
                  <img
                    src="/Arrow-Down3.svg"
                    alt="Products dropdown"
                    className="w-[14px] h-[14px]"
                  />
                </NavLink>
              </div>

              {/* Use Cases */}
              <NavLink
                to="/use-cases"
                className={({ isActive }) =>
                  `flex items-center h-[14px] font-medium text-[16px] leading-[120%] text-center ${
                    isActive
                      ? "text-[var(--tertiary-color)]"
                      : "text-[var(--tertiary-color)] opacity-50 hover:text-[var(--primary-color)] hover:opacity-100"
                  }`
                }
              >
                Use Cases
              </NavLink>

              {/* Blog */}
              <div className="flex flex-row items-center flex-none order-3 flex-grow-0">
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `flex items-center h-[14px] font-medium text-[16px] leading-[120%] text-center ${
                      isActive
                        ? "text-[var(--tertiary-color)]"
                        : "text-[var(--tertiary-color)] opacity-50 hover:text-[var(--primary-color)] hover:opacity-100"
                    }`
                  }
                >
                  Blog
                </NavLink>
              </div>

              {/* Contact Us */}
              <div className="flex flex-row items-center flex-none order-4 flex-grow-0">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `flex items-center h-[14px] font-medium text-[16px] leading-[120%] text-center ${
                      isActive
                        ? "text-[var(--tertiary-color)]"
                        : "text-[var(--tertiary-color)] opacity-50 hover:text-[var(--primary-color)] hover:opacity-100"
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
        <div className="absolute right-[80px] top-[46px] xl:right-[80px] 2xl:right-[120px]">
          <button className="bg-[var(--primary-color)] text-[var(--quaternary-color)] h-[52px] w-[192px] rounded-full py-[14px] px-[24px] cursor-pointer shadow-lg">
            Join Waiting List
          </button>
        </div>
      </div>

      {/* Mobile View */}
      <div className="xl:hidden relative z-10 flex justify-center items-center h-[120px] px-[13px]">
        {/* Mobile navbar container */}
        <div className="relative w-full max-w-[376px] h-[53px]">
          {/* Rectangle 22798 */}
          <div className="absolute inset-0 bg-[var(--quaternary-color)] rounded-[100px] shadow-[0px_4px_21px_3px_rgba(0,0,0,0.08)]" />

          {/* Group 1171274804 - logo */}
          <h1 className="absolute left-[17.12px] right-[230.41px] top-[20.39px] h-[12.23px] leading-[12.23px] text-[14px] font-bold text-[var(--primary-color)] tracking-[2px]">
            AMPLYUP.AI
          </h1>

          {/* Group 1171274808 - menu button */}
          <button className="absolute top-[9px] right-[9px] w-[35px] h-[35px] rounded-full bg-[var(--primary-color)] shadow-[0px_4px_16px_0px_#3838384D] flex items-center justify-center z-10">
            {/* Group 1171274807 - icon */}
            <img src="/menu.svg" alt="menu" className="w-[16px] h-[12px]" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
