/* eslint-disable react/prop-types */
const FeatureCard = ({ title, description, featureImage }) => {
  return (
    <div className="bg-white border border-[#EDEDF0] shadow-md rounded-lg p-6 flex flex-col items-start">
      <h3 className="text-[#000000] font-inter font-bold text-2xl mb-4">
        {title}
      </h3>

      <p className="text-[#000000] font-inter text-start font-light text-lg mb-6">
        {description}
      </p>

      <div className="w-full flex justify-center">
        <img src={featureImage} alt={title} className="w-full max-w-lg" />
      </div>
    </div>
  );
};

export default FeatureCard;
