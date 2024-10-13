import { useState } from "react";
import FeaturesSection from "./FeaturesSection";
import { tabs } from "../constants/constants";

const TabButtons = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <div className="lg:w-full lg:flex lg:justify-between sm:justify-start overflow-x-auto space-x-4 mb-6 sm:px-0 scrollbar-hide">
        <div className="flex space-x-4 w-max lg:w-full lg:space-x-1">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`flex justify-center items-center lg:flex-1 border-2 rounded-md px-4 sm:px-8 py-2 transition duration-300 bg-white shadow-sm tracking-wider shrink-0 ${
                selectedTab.title === tab.title
                  ? "text-[#5F58DE] border-[#4B42F4] font-medium"
                  : "text-[#323544] border-[#EDEDF0] font-normal"
              }`}
            >
              <img
                src={
                  selectedTab.title === tab.title ? tab.selectedIcon : tab.icon
                }
                alt={tab.title}
                className="mr-2"
              />
              {tab.title}
            </button>
          ))}
        </div>
      </div>
      <div className="mt-4">
        <FeaturesSection
          title={selectedTab.tagline}
          features={selectedTab.features}
          featureImage={selectedTab.image}
        />
      </div>
    </div>
  );
};

export default TabButtons;
