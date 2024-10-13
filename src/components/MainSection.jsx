import TabButtons from "./TabButtons";
import FeatureCard from "./FeatureCard";
import { featureCards } from "../constants/constants";

const MainSection = () => {
  return (
    <section
      className="py-16"
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

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featureCards.map((card, index) => (
            <FeatureCard
              key={index}
              title={card.title}
              description={card.description}
              featureImage={card.featureImage}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainSection;
