import StatsCard from "./StatsCard";
import { statsData } from "../constants/constants";

const StatsCardCarousel = () => {
  return (
    <div className="mt-6 stats-wrapper w-screen z-0">
      <div className="flex animate-slide">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex space-x-1 ml-1">
            {statsData.map((stat, index) => (
              <StatsCard
                key={`${i}-${index}`}
                text={stat.text}
                count={stat.count}
                percent={stat.percent}
                arrowImage={stat.arrowImage}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsCardCarousel;
