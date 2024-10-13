import TabButtons from "./TabButtons";
import featuresImage from "../assets/features-image.svg";
import featuresImage1 from "../assets/feature-image-1.svg";
import featuresImage2 from "../assets/feature-image-2.svg";
import featuresImage3 from "../assets/feature-image-3.svg";

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

        <img
          src={featuresImage}
          alt="Features Image"
          className="hidden sm:block mx-auto w-full sm:w-auto mt-10"
        />

        <div className="block sm:hidden mt-10 space-y-6">
          <img
            src={featuresImage1}
            alt="Feature Image 1"
            className="mx-auto w-full"
          />
          <img
            src={featuresImage2}
            alt="Feature Image 2"
            className="mx-auto w-full"
          />
          <img
            src={featuresImage3}
            alt="Feature Image 3"
            className="mx-auto w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default MainSection;
