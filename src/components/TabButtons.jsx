import { useState } from "react";
import winnersLosersIcon from "../assets/winners-losers-icon.svg";
import leaderboardsIcon from "../assets/leaderboards-icon.svg";
import newEntrantsIcon from "../assets/new-entrants-icon.svg";
import uniqueMetricsIcon from "../assets/unique-metrics-icon.svg";
import portfoliosIcon from "../assets/portfolios-icon.svg";
import winnersLosersSelectedIcon from "../assets/winners-losers-selected-icon.svg";
import leaderboardsSelectedIcon from "../assets/leaderboards-selected-icon.svg";
import newEntrantsSelectedIcon from "../assets/new-entrants-selected-icon.svg";
import uniqueMetricsSelectedIcon from "../assets/unique-metrics-selected-icon.svg";
import portfoliosSelectedIcon from "../assets/portfolios-selected-icon.svg";
import winnersLosersImage from "../assets/winners-losers-img.svg";
import leaderboardsImage from "../assets/leaderboards-img.svg";
import newEntrantsImage from "../assets/new-entrants-img.svg";
import uniqueMetricsImage from "../assets/unique-metrics-img.svg";
import portfoliosImage from "../assets/portfolios-img.svg";

const tabs = [
  {
    title: "Winners & Losers",
    icon: winnersLosersIcon,
    selectedIcon: winnersLosersSelectedIcon,
    image: winnersLosersImage,
  },
  {
    title: "Leaderboards",
    icon: leaderboardsIcon,
    selectedIcon: leaderboardsSelectedIcon,
    image: leaderboardsImage,
  },
  {
    title: "New Entrants",
    icon: newEntrantsIcon,
    selectedIcon: newEntrantsSelectedIcon,
    image: newEntrantsImage,
  },
  {
    title: "Unique SEO Metrics",
    icon: uniqueMetricsIcon,
    selectedIcon: uniqueMetricsSelectedIcon,
    image: uniqueMetricsImage,
  },
  {
    title: "Portfolios",
    icon: portfoliosIcon,
    selectedIcon: portfoliosSelectedIcon,
    image: portfoliosImage,
  },
];

const TabButtons = () => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  return (
    <div>
      <div className="flex lg:justify-center sm:justify-start overflow-x-auto space-x-4 mb-6 sm:px-0 scrollbar-hide">
        <div className="flex space-x-4 w-max">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setSelectedTab(tab)}
              className={`flex items-center border-2 rounded-md px-4 sm:px-8 py-2 transition duration-300 bg-white shadow-sm tracking-wider shrink-0 ${
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
        <img
          src={selectedTab.image}
          alt={selectedTab.title}
          className="mx-auto w-full sm:w-auto"
        />
      </div>
    </div>
  );
};

export default TabButtons;
