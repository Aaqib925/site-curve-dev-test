/* eslint-disable react/prop-types */
import arrowUp from "../assets/arrow-up.svg";
import arrowDown from "../assets/arrow-down.svg";
import infoIcon from "../assets/info.svg";

const StatsCard = ({ text, count, percent, arrowImage }) => {
  return (
    <div className="bg-[#373458] text-white px-4 py-1 rounded-[5px] flex flex-col justify-between items-start font-worksans text-md font-normal tracking-wider">
      <div className="flex items-center space-x-2">
        <p>{text}</p>
        <img src={infoIcon} alt="Info" className="pr-4" />
      </div>
      <div className="flex items-center space-x-2">
        <p className=" text-body-secondary">{count}</p>
        <img
          src={arrowImage === "success" ? arrowUp : arrowDown}
          alt={arrowImage === "success" ? "Increase" : "Decrease"}
        />
        <p
          className={`text-md ${
            arrowImage === "success" ? "text-green-500" : "text-red-500"
          }`}
        >
          {percent}%
        </p>
      </div>
    </div>
  );
};

export default StatsCard;
