import cardIcon from "../assets/HeroSection/card-icon.svg";
import searchIcon from "../assets/HeroSection/search-icon.svg";
import heroSectionImageWithArrows from "../assets/HeroSection/hero-section-image1.svg";
import heroSectionImageWithoutArrows from "../assets/HeroSection/hero-section-image2.svg";
import heroSectionBg from "../assets/HeroSection/hero-section-bg-img.svg";
import Button from "./Button";

const HeroSection = () => {
  return (
    <section
      className="bg-[#F8F8FF] py-16"
      style={{
        backgroundImage: `url(${heroSectionBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container mx-auto text-center px-4 sm:px-0">
        <h1 className="text-body-text font-inter font-extrabold text-[40px] sm:text-[65px] leading-[1.1] mb-6 max-w-2xl sm:max-w-4xl mx-auto">
          Discover Who&apos;s Winning and Losing in SEO and Why
        </h1>

        <p className="text-[#353A44] font-inter font-light text-[18px] sm:text-[20px] max-w-2xl mx-auto mb-8">
          Spot winning and losing websites across your competitive landscape in
          different niches, website types, and business models.
        </p>

        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4 mb-4">
          <button className="text-lg rounded-[6px] transition duration-300 ease-in-out tracking-wide bg-primary text-white px-6 py-3 font-normal border-2 border-[#473eee] shadow-xl">
            Create Landscape - <span className="font-bold">It&apos;s Free</span>
          </button>
          <Button
            buttonText="Schedule Demo"
            styles="bg-white text-[#212330] border-2 border-[#ECEFF4] px-6 py-3 font-medium shadow-xl"
          />
        </div>

        <p className="text-[#5F6575] font-inter font-normal mb-10 flex justify-center items-center tracking-wider">
          <img src={cardIcon} alt="Card Icon" className="mr-2" /> No Credit Card
          Required
        </p>

        <div className="mb-5">
          <img
            src={heroSectionImageWithArrows}
            alt="Hero Section"
            className="hidden md:block mx-auto w-full md:w-auto"
          />
          <img
            src={heroSectionImageWithoutArrows}
            alt="Hero Section"
            className="block md:hidden mx-auto w-full md:w-auto"
          />
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center text-center tracking-wide">
          <div className="flex items-center mb-1 sm:mb-0">
            <img src={searchIcon} alt="Search Icon" className="mr-2" />
            <p className="text-[#000000] font-worksans font-normal text-[14px] sm:text-[16px] mr-1">
              Discover existing landscapes:
            </p>
          </div>
          <p className="text-primary font-inter font-normal text-[14px] sm:text-[16px]">
            Real Estate Agents, Credit Cards, Lawyers
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
