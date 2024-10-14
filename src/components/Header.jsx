import { useState } from "react";
import Logo from "../assets/logo.png";
import dropDown from "../assets/Menu/drop-down.svg";
import crossIcon from "../assets/Menu/cross-icon.svg";
import menuIcon from "../assets/Menu/menu-icon.svg";
import Button from "./Button";
import StatsCardCarousel from "./StatsCardCarousel";
import Menu from "./Menu";

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
    <nav className="bg-[#040033] py-4 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        <a href="/">
          <img src={Logo} width={190} height={40} alt="Site Curve" />
        </a>

        <div className="hidden md:flex justify-center items-center space-x-6 tracking-wider text-secondary font-inter ml-6 relative z-20">
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
            styles="bg-primary text-white font-normal border-2 border-[#473eee] shadow-xl"
          />

          <Button
            buttonText="Discover Landscapes"
            styles="text-white font-normal bg-transparent border-white border-2 shadow-xl"
          />
        </div>

        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {menuOpen ? (
              <img src={crossIcon} alt="Cross Icon" />
            ) : (
              <img src={menuIcon} alt="Menu Icon" />
            )}
          </button>
        </div>
      </div>

      <StatsCardCarousel />

      {menuOpen && (
        <Menu openDropdown={openDropdown} toggleDropdown={toggleDropdown} />
      )}
    </nav>
  );
};

export default Header;
