import { useState } from "react";
import DarkModeToggle from "@/components/DarkModeToggle";
import Header from "@/components/Header";
import PricingCard from "@/components/PricingCard";
import ImportantNotes from "@/components/DetailedPricingTable";
import FAQ from "@/components/FAQ";
import ContactCTA from "@/components/ContactCTA";
import { basePlans } from "@/plans";

export default function Pricing() {
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isYearly, setIsYearly] = useState(true); // Default to yearly

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDarkMode ? 'bg-[#0c121a]' : 'bg-white'}`}>
      <DarkModeToggle 
        isDarkMode={isDarkMode} 
        onToggle={() => setIsDarkMode(!isDarkMode)} 
      />

      {/* Pricing Section with different background */}
      <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-[#0c121a]' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <Header 
            isDarkMode={isDarkMode}
            isYearly={isYearly}
            onBillingToggle={setIsYearly}
          />

          {/* Pricing Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-16 items-start">
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

          {/* Important Notes */}
          <ImportantNotes isDarkMode={isDarkMode} />
        </div>
      </div>

      {/* FAQ and Contact Section with enhanced background */}
      <div className={`transition-colors duration-300 ${isDarkMode ? 'bg-gray-900' : 'bg-slate-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <FAQ isDarkMode={isDarkMode} />
          
          <ContactCTA isDarkMode={isDarkMode} />
        </div>
      </div>
    </div>
  );
}