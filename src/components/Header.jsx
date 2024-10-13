import { useState } from "react";
import Logo from "../assets/logo.png";
import dropDown from "../assets/drop-down.svg";
import Button from "./Button";
import StatsCard from "./StatsCard";
import statsData from "../constants/statsData";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <nav className="bg-[#040033] py-4 relative shadow-custom z-10">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/">
          <img src={Logo} width={190} height={40} alt="Site Curve" />
        </a>

        <div className="hidden md:flex justify-center items-center space-x-6 tracking-wider text-secondary font-inter ml-6 relative z-20">
          {/* Features Dropdown */}
          <div className="relative">
            <button
              className="flex items-center focus:outline-none hover:text-white transition-colors"
              onClick={() => toggleDropdown("features")}
            >
              Features
              <img src={dropDown} alt="Drop Down" className="ml-2" />
            </button>
            {openDropdown === "features" && (
              <div className="absolute top-10 left-0 bg-white text-black p-2 rounded shadow-lg z-50">
                <a
                  href="/"
                  className="block px-10 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                >
                  Feature 1
                </a>
              </div>
            )}
          </div>

          <a href="/pricing" className="hover:text-white transition-colors">
            Pricing
          </a>

          <div className="relative">
            <button
              className="flex items-center focus:outline-none hover:text-white transition-colors"
              onClick={() => toggleDropdown("company")}
            >
              Company
              <img src={dropDown} alt="Drop Down" className="ml-2" />
            </button>
            {openDropdown === "company" && (
              <div className="absolute top-10 left-0 bg-white text-black p-2 rounded shadow-lg z-50">
                <a
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                >
                  About Us
                </a>
                <a
                  href="/careers"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                >
                  Careers
                </a>
              </div>
            )}
          </div>

          <div className="relative">
            <button
              className="flex items-center focus:outline-none hover:text-white transition-colors"
              onClick={() => toggleDropdown("resources")}
            >
              Resources
              <img src={dropDown} alt="Drop Down" className="ml-2" />
            </button>
            {openDropdown === "resources" && (
              <div className="absolute top-10 left-0 bg-white text-black p-2 rounded shadow-lg z-50">
                <a
                  href="/blog"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                >
                  Blog
                </a>
                <a
                  href="/support"
                  className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                >
                  Support
                </a>
              </div>
            )}
          </div>

          <a href="/enterprise" className="hover:text-white transition-colors">
            Enterprise
          </a>
          <a href="/login" className="hover:text-white transition-colors">
            Login
          </a>
        </div>

        <div className="hidden lg:flex space-x-4 ml-6">
          <Button
            buttonText="Create Landscape"
            styles="bg-primary text-white font-normal border-2 border-[#473eee]"
          />

          <Button
            buttonText="Discover Landscapes"
            styles="text-white font-normal bg-transparent border-white border-2"
          />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      <div className="mt-6 stats-wrapper w-screen z-0">
        <div className="flex animate-slide">
          <div className="flex space-x-1">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                text={stat.text}
                count={stat.count}
                percent={stat.percent}
                arrowImage={stat.arrowImage}
              />
            ))}
          </div>
          <div className="flex space-x-1 ml-1">
            {statsData.map((stat, index) => (
              <StatsCard
                key={`duplicate-${index}`}
                text={stat.text}
                count={stat.count}
                percent={stat.percent}
                arrowImage={stat.arrowImage}
              />
            ))}
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="bg-[#040033] text-white p-4 mt-4 absolute left-0 right-0">
          <div className="flex flex-col space-y-2">
            {/* Features Dropdown */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleDropdown("features")}
              >
                Features
                <img src={dropDown} alt="Drop Down" className="ml-2" />
              </button>
              {openDropdown === "features" && (
                <div className="bg-transparent text-white p-2 rounded shadow-lg">
                  <a
                    href="/"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                  >
                    Feature 1
                  </a>
                </div>
              )}
            </div>
            <div className="border-b border-gray-600 my-2" />
            <a href="/pricing" className="hover:text-gray-200">
              Pricing
            </a>
            <div className="border-b border-gray-600 my-2" />
            {/* Company Dropdown */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleDropdown("company")}
              >
                Company
                <img src={dropDown} alt="Drop Down" className="ml-2" />
              </button>
              {openDropdown === "company" && (
                <div className="bg-transparent text-white p-2 rounded shadow-lg">
                  <a
                    href="/about"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                  >
                    About Us
                  </a>
                  <a
                    href="/careers"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                  >
                    Careers
                  </a>
                </div>
              )}
            </div>
            <div className="border-b border-gray-600 my-2" />
            {/* Resources Dropdown */}
            <div className="relative">
              <button
                className="flex justify-between items-center w-full text-left"
                onClick={() => toggleDropdown("resources")}
              >
                Resources
                <img src={dropDown} alt="Drop Down" className="ml-2" />
              </button>
              {openDropdown === "resources" && (
                <div className="bg-transparent text-white p-2 rounded shadow-lg">
                  <a
                    href="/blog"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                  >
                    Blog
                  </a>
                  <a
                    href="/support"
                    className="block px-4 py-2 hover:bg-gray-200 hover:text-[#4B42F4] transition-colors"
                  >
                    Support
                  </a>
                </div>
              )}
            </div>
            <div className="border-b border-gray-600 my-2" />
            <a href="/enterprise" className="hover:text-gray-200">
              Enterprise
            </a>
            <div className="border-b border-gray-600 my-2" />
            <a href="/login" className="hover:text-gray-200">
              Login
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
