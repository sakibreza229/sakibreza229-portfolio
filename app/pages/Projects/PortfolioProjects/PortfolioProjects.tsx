import { useState, useEffect } from "react";
import { HeadingPrimary } from "@/app/components/Headings";
import { portfolios } from "@/app/data/ProjectsData";
import PortfolioCard from "./PortfolioCard";
import { AnimatePresence } from "framer-motion";
import { Button } from "@nextui-org/react";

interface PortfolioItem {
  category: string;
  imgUrl: string;
  title: string;
  subtitle: string;
  description: string;
}

const PortfolioProjects = () => {
  const [visibleItems, setVisibleItems] = useState<number>(6);
  const [filteredPortfolio, setFilteredPortfolio] = useState<PortfolioItem[]>(portfolios);
  const [activeTab, setActiveTab] = useState<string>("all");

  const handleLoadMore = () => {
    setVisibleItems((prev) => prev + 3);
  };

  useEffect(() => {
    if (activeTab === "all") {
      setFilteredPortfolio(portfolios);
    } else {
      const filteredData = portfolios.filter((item) => item.category === activeTab);
      setFilteredPortfolio(filteredData);
    }
    setVisibleItems(6); // Reset visible items when tab changes
  }, [activeTab]);

  const tabs = [
    { id: "all", label: "All" },
    { id: "website", label: "Web" },
    { id: "application", label: "App" },
    { id: "design", label: "Design" },
  ];

  return (
    <section id="portfolio" className="section-container">
      <HeadingPrimary
        title="Portfolio"
        subtitle="Most Recent Works"
        context={
          <div className="flex justify-center md:justify-start gap-4 font-semibold text-primary">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`${
                  activeTab === tab.id ? "text-white bg-primary" : ""
                } px-3 py-1 rounded-lg transition-all`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
        }
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <AnimatePresence>
          {filteredPortfolio.slice(0, visibleItems).map((item, index) => (
            <PortfolioCard
              key={index}
              img={item.imgUrl}
              title={item.title}
              subtitle={item.subtitle}
              description={item.description}
            />
          ))}
        </AnimatePresence>
      </div>

      <div className="mt-8 text-center">
        {visibleItems < filteredPortfolio.length ? (
          <Button onPress={handleLoadMore} color="primary">
            Load More
          </Button>
        ) : (
          <p className="text-sm font-medium text-gray-600">
            Want to see more?{" "}
            <a href="#" className="text-primary hover:underline">
              Click here
            </a>{" "}
            to discover all my work. 📂
          </p>
        )}
      </div>
    </section>
  );
};

export default PortfolioProjects;