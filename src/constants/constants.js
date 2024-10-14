import winnersLosersIcon from "../assets/Tabs/winners-losers-icon.svg";
import leaderboardsIcon from "../assets/Tabs/leaderboards-icon.svg";
import newEntrantsIcon from "../assets/Tabs/new-entrants-icon.svg";
import uniqueMetricsIcon from "../assets/Tabs/unique-metrics-icon.svg";
import portfoliosIcon from "../assets/Tabs/portfolios-icon.svg";
import winnersLosersSelectedIcon from "../assets/Tabs/winners-losers-selected-icon.svg";
import leaderboardsSelectedIcon from "../assets/Tabs/leaderboards-selected-icon.svg";
import newEntrantsSelectedIcon from "../assets/Tabs/new-entrants-selected-icon.svg";
import uniqueMetricsSelectedIcon from "../assets/Tabs/unique-metrics-selected-icon.svg";
import portfoliosSelectedIcon from "../assets/Tabs/portfolios-selected-icon.svg";
import winnersLosersImage from "../assets/Tabs/winners-losers-img.png";
import leaderboardsImage from "../assets/Tabs/leaderboards-img.png";
import newEntrantsImage from "../assets/Tabs/new-entrants-img.png";
import uniqueMetricsImage from "../assets/Tabs/unique-metrics-img.png";
import portfoliosImage from "../assets/Tabs/portfolios-img.png";
import featuresImage1 from "../assets/MainSection/feature-image-1.svg";
import featuresImage2 from "../assets/MainSection/feature-image-2.svg";
import featuresImage3 from "../assets/MainSection/feature-image-3.svg";


export const tabs = [
    {
        title: "Winners & Losers",
        tagline: "See which websites are winning and losing rank on your keywords",
        icon: winnersLosersIcon,
        selectedIcon: winnersLosersSelectedIcon,
        image: winnersLosersImage,
        features: [
            "View the biggest rank movers over custom time periods",
            "Sort by share of voice, curve, volatility scores",
            "Analyze shifts in specific categories and niches",
        ],
    },
    {
        title: "Leaderboards",
        tagline:
            "See the market leaders for your niche, website type, and business model.",
        icon: leaderboardsIcon,
        selectedIcon: leaderboardsSelectedIcon,
        image: leaderboardsImage,
        features: [
            "View top performers by category, niche, site type",
            "Compare leaders across different SEO metrics",
            "Identify dominant websites for your specific landscape",
        ],
    },
    {
        title: "New Entrants",
        tagline: "Track new entrants and emerging competitors in real-time",
        icon: newEntrantsIcon,
        selectedIcon: newEntrantsSelectedIcon,
        image: newEntrantsImage,
        features: [
            "Discover emerging competitors entering your SEO space",
            "Analyze how new entrants impact your rankings",
            "See which niches are becoming increasingly competitive",
        ],
    },
    {
        title: "Unique SEO Metrics",
        tagline: "Leverage unique SEO metrics to separate signal from noise",
        icon: uniqueMetricsIcon,
        selectedIcon: uniqueMetricsSelectedIcon,
        image: uniqueMetricsImage,
        features: [
            "Share of voice to track market share",
            "Volatility score to measure rank shifts",
            "Google score to evaluate Google presence",
            "Curve score to highlight outperformers",
        ],
    },
    {
        title: "Portfolios",
        tagline: "Create portfolios to monitor websites, categories, and more",
        icon: portfoliosIcon,
        selectedIcon: portfoliosSelectedIcon,
        image: portfoliosImage,
        features: [
            "Monitor domains or individual URLs in one place",
            "Track search visibility across entire categories",
            "Understand how rankings shift across locations",
        ],
    },
];

export const statsData = [
    { text: "citi.com", count: "4.2M", percent: "52", arrowImage: "success" },
    { text: "amazon.com", count: "2.1M", percent: "34", arrowImage: "error" },
    { text: "netflix.com", count: "1.5M", percent: "25", arrowImage: "success" },
    { text: "apple.com", count: "3.8M", percent: "47", arrowImage: "success" },
    { text: "google.com", count: "2.5M", percent: "40", arrowImage: "error" },
    { text: "facebook.com", count: "1.9M", percent: "55", arrowImage: "success" },
    { text: "twitter.com", count: "3.0M", percent: "33", arrowImage: "error" },
    { text: "microsoft.com", count: "2.8M", percent: "28", arrowImage: "success" },
    { text: "adobe.com", count: "4.5M", percent: "60", arrowImage: "success" },
    { text: "linkedin.com", count: "1.2M", percent: "12", arrowImage: "error" },
    { text: "walmart.com", count: "3.3M", percent: "45", arrowImage: "success" },
    { text: "ebay.com", count: "2.4M", percent: "30", arrowImage: "error" },
    { text: "paypal.com", count: "1.6M", percent: "20", arrowImage: "success" },
    { text: "spotify.com", count: "3.9M", percent: "50", arrowImage: "success" },
    { text: "uber.com", count: "2.2M", percent: "35", arrowImage: "error" },
    { text: "airbnb.com", count: "4.0M", percent: "53", arrowImage: "success" },
];


export const featureData = [
    {
      title: "Add keywords or websites",
      description:
        "Get started by importing your keywords or websites alongside your preferred device, language, and location.",
      featureImage: featuresImage1,
    },
    {
      title: "Build landscape",
      description:
        "SiteCurve uses AI to categorize all keywords and websites in the search results to build your custom SEO landscape.",
      featureImage: featuresImage2,
    },
    {
      title: "Uncover insights",
      description:
        "SiteCurve pulls fresh rank data, giving you an automated, up-to-date view of winning and losing websites each day.",
      featureImage: featuresImage3,
    },
  ];
