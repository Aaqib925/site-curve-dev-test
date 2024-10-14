/* eslint-disable react/prop-types */
import { useEffect } from "react";
import dropDown from "../assets/Menu/drop-down.svg";
import dropUp from "../assets/Menu/drop-up.svg";
import Button from "./Button";
import { Link } from "react-router-dom";

const Menu = ({ openDropdown, toggleDropdown, toggleMenu }) => {
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return (
    <div className="bg-[#040033] font-inter text-secondary font-medium text-xl mt-4 absolute left-0 right-0 w-full h-screen">
      <div className="flex flex-col">
        <DropdownMenu
          label="Features"
          toggleMenu={toggleMenu}
          isOpen={openDropdown === "features"}
          toggle={() => toggleDropdown("features")}
          items={[
            { href: "/feature1", label: "Feature 1" },
            { href: "/feature2", label: "Feature 2" },
          ]}
        />
        <Link
          to="/pricing"
          onClick={() => {
            toggleMenu();
          }}
          className="hover:text-gray-200 border-b border-[#373458] px-6 py-5"
        >
          Pricing
        </Link>
        <DropdownMenu
          label="Company"
          isOpen={openDropdown === "company"}
          toggleMenu={toggleMenu}
          toggle={() => toggleDropdown("company")}
          items={[
            { href: "/about", label: "About Us" },
            { href: "/careers", label: "Careers" },
          ]}
        />
        <DropdownMenu
          label="Resources"
          isOpen={openDropdown === "resources"}
          toggleMenu={toggleMenu}
          toggle={() => toggleDropdown("resources")}
          items={[
            { href: "/blog", label: "Blog" },
            { href: "/support", label: "Support" },
          ]}
        />
        <Link
          to="/enterprise"
          onClick={() => {
            toggleMenu();
          }}
          className="hover:text-gray-200 border-b border-[#373458] px-6 py-5"
        >
          Enterprise
        </Link>
        <Link
          to="/login"
          onClick={() => {
            toggleMenu();
          }}
          className="hover:text-gray-200 border-b border-[#373458] px-6 py-5"
        >
          Login
        </Link>
      </div>
      <div className="flex flex-wrap space-y-4 sm:space-y-0 sm:space-x-4 mx-6 mt-6">
        <Button
          buttonText="Create Landscape"
          styles="bg-primary text-white font-normal border-2 border-[#473eee] w-full sm:w-auto shadow-lg"
        />
        <Button
          buttonText="Discover Landscapes"
          styles="text-white font-normal bg-transparent border-[#4f4f4f] border-2 w-full sm:w-auto shadow-lg"
        />
      </div>
    </div>
  );
};

const DropdownMenu = ({ label, isOpen, toggle, items, toggleMenu }) => (
  <div className="relative">
    <button
      className={`flex justify-between items-center px-6 w-full text-left py-5 ${
        isOpen ? "text-white" : "text-secondary"
      } ${!isOpen ? "border-b border-[#373458]" : ""}`}
      onClick={toggle}
    >
      {label}
      <img
        src={isOpen ? dropUp : dropDown}
        alt="Drop Down"
        className="ml-2 w-4 h-4"
      />
    </button>
    {isOpen && (
      <div className="bg-transparent text-white p-2 rounded">
        {items.map((item, idx) => (
          <Link
            key={idx}
            to={item.href}
            onClick={() => {
              toggle();
              toggleMenu();
            }}
            className="block px-10 py-2 text-[18px] transition-colors"
          >
            {item.label}
          </Link>
        ))}
      </div>
    )}
  </div>
);

export default Menu;
