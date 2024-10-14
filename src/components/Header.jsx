import { useState } from "react";
import Logo from "../assets/logo.png";
import dropDown from "../assets/Menu/drop-down.svg";
import crossIcon from "../assets/Menu/cross-icon.svg";
import menuIcon from "../assets/Menu/menu-icon.svg";
import Button from "./Button";
import StatsCardCarousel from "./StatsCardCarousel";
import Menu from "./Menu";
import { Link } from "react-router-dom";

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDropdown = (dropdown) => {
    setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  const closeDropdown = () => {
    setOpenDropdown(null);
  };

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const handleBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      closeDropdown();
    }
  };

  return (
    <nav className="bg-[#040033] py-4 sticky top-0 z-50 shadow-xl">
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/">
          <img src={Logo} width={190} height={40} alt="Site Curve" />
        </Link>

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
                <Link
                  to="/feature1"
                  onClick={closeDropdown}
                  className="block px-4 py-1 text-sm whitespace-nowrap hover:text-[#4B42F4] transition-colors"
                >
                  Feature 1
                </Link>
                <Link
                  to="/feature2"
                  onClick={closeDropdown}
                  className="block px-4 py-1 text-sm whitespace-nowrap hover:text-[#4B42F4] transition-colors"
                >
                  Feature 2
                </Link>
              </div>
            )}
          </div>

          <Link to="/pricing" className="hover:text-white transition-colors">
            Pricing
          </Link>

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
                <Link
                  to="/about"
                  onClick={closeDropdown}
                  className="block px-4 py-1 text-sm whitespace-nowrap hover:text-[#4B42F4] transition-colors"
                >
                  About Us
                </Link>
                <Link
                  to="/careers"
                  onClick={closeDropdown}
                  className="block px-4 py-1 text-sm whitespace-nowrap hover:text-[#4B42F4] transition-colors"
                >
                  Careers
                </Link>
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
                <Link
                  to="/blog"
                  onClick={closeDropdown}
                  className="block px-4 py-1 text-sm whitespace-nowrap hover:text-[#4B42F4] transition-colors"
                >
                  Blog
                </Link>
                <Link
                  to="/support"
                  onClick={closeDropdown}
                  className="block px-4 py-1 text-sm whitespace-nowrap hover:text-[#4B42F4] transition-colors"
                >
                  Support
                </Link>
              </div>
            )}
          </div>

          <Link to="/enterprise" className="hover:text-white transition-colors">
            Enterprise
          </Link>
          <Link to="/login" className="hover:text-white transition-colors">
            Login
          </Link>
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
        <Menu
          openDropdown={openDropdown}
          toggleDropdown={toggleDropdown}
          toggleMenu={toggleMenu}
        />
      )}

      {openDropdown && (
        <div
          className="fixed inset-0 backdrop"
          onClick={handleBackdropClick}
        />
      )}
    </nav>
  );
};

export default Header;
