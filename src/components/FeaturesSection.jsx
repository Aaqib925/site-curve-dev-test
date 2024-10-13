/* eslint-disable react/prop-types */
import Button from "./Button";
import checkCircleIcon from "../assets/Tabs/check-circle.svg";

const FeaturesSection = ({ title, features, featureImage }) => {
  return (
    <div className="bg-[#FCFCFC] border border-[#EDEDF0] shadow-md px-4 pt-6 lg:px-8 flex flex-col lg:flex-row justify-center items-start lg:items-center rounded-lg space-y-6 lg:space-y-0 lg:space-x-8 transition-all duration-500">
      <div className="flex-1 text-left">
        <h2 className="text-[#353A44] font-inter font-semibold text-2xl sm:text-4xl lg:text-4xl mb-4 lg:mb-12 leading-[1.3] max-w-md sm:max-w-lg">
          {title}
        </h2>
        <ul className="space-y-3 text-[#353A44]">
          {features.map((feature, index) => (
            <li
              key={index}
              className="flex items-center text-sm sm:text-md lg:text-lg font-inter font-light"
            >
              <img src={checkCircleIcon} alt="Check" className="mr-2" />
              {feature}
            </li>
          ))}
        </ul>

        <div className="mt-6 sm:w-auto">
          <Button
            buttonText="Create Landscape"
            styles="bg-primary text-white font-normal border-2 border-[#473eee] shadow-xl block sm:hidden w-full"
          />
          <Button
            buttonText="Get Started"
            styles="bg-primary text-white font-normal border-2 border-[#473eee] shadow-xl hidden sm:block"
          />
        </div>

        <p className="text-[#353A44] font-inter font-medium text-lg sm:text-md mt-3 text-left sm:hidden">
          ...or{" "}
          <span className="text-[#5F58DE] font-medium">
            discover landscapes
          </span>
        </p>
      </div>

      <div className="flex-1 lg:ml-8 lg:mt-0 mt-4 lg:flex lg:justify-end">
        <img
          src={featureImage}
          alt="Feature"
          className="w-full sm:w-3/4 lg:w-auto mx-auto"
        />
      </div>
    </div>
  );
};

export default FeaturesSection;
