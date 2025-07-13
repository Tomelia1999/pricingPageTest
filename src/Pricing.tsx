import { useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import DetailedPricingTable from "@/components/DetailedPricingTable";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import { basePlans } from "@/plans";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isYearly, setIsYearly] = useState(true); // Default to yearly

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0c121a]' : 'bg-white'}`}>
      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        onToggle={() => setIsDarkMode(!isDarkMode)} 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <Header 
          isDarkMode={isDarkMode}
          isYearly={isYearly}
          onBillingToggle={setIsYearly}
        />

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16">
          {basePlans.map((plan, index) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              index={index}
              isDarkMode={isDarkMode}
              isYearly={isYearly}
              hoveredPlan={hoveredPlan}
              onMouseEnter={setHoveredPlan}
              onMouseLeave={() => setHoveredPlan(null)}
            />
          ))}
        </div>

        {/* Detailed Pricing Table */}
        <DetailedPricingTable isDarkMode={isDarkMode} />

        <FAQ isDarkMode={isDarkMode} />

        <ContactCTA isDarkMode={isDarkMode} />
      </div>
    </div>
  );
}