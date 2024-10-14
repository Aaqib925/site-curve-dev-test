import TabButtons from "./TabButtons";
import FeatureCard from "./FeatureCard";
import arrow1 from "../assets/MainSection/arrow1.svg";
import arrow2 from "../assets/MainSection/arrow2.svg";
import { featureData } from "../constants/constants";

const MainSection = () => {
  return (
    <section
      className="py-16 relative"
      style={{
        background: "linear-gradient(#E2E1FC 20%, #F8F8FF 100%)",
      }}
    >
      <div className="container mx-auto text-center px-4 sm:px-0">
        <h2 className="text-[#21215B] font-inter font-bold text-[32px] sm:text-[48px] leading-tight mb-2 max-w-xl sm:max-w-4xl mx-auto">
          Gain an advantage over your competitors with next-level SEO
          intelligence
        </h2>

        <p className="text-[#2C2C7A] font-inter font-light text-[14px] sm:text-[16px] mb-10 max-w-l mx-auto">
          Click the tabs below to see what makes SiteCurve stand out from other
          SEO tools.
        </p>

        <TabButtons />

        <div className=" mt-6 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 relative">
          {featureData.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              featureImage={feature.featureImage}
            />
          ))}
          <img
            src={arrow1}
            alt="Arrow 1"
            className="hidden lg:block absolute top-[6%] right-[65%]"
          />
          <img
            src={arrow2}
            alt="Arrow 2"
            className="hidden lg:block absolute bottom-[3%] right-[29.5%]"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
