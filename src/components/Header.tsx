import React from "react";
import BillingToggle from "./BillingToggle";

interface HeaderProps {
  isDarkMode: boolean;
  isYearly: boolean;
  onBillingToggle: (isYearly: boolean) => void;
}

export default function Header({ isDarkMode, isYearly, onBillingToggle }: HeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className={`text-4xl md:text-5xl font-bold mb-4 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>
        Simple, Transparent Pricing
      </h1>
      <p className={`text-xl max-w-2xl mx-auto mb-8 transition-colors duration-300 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Choose the perfect plan for your needs. Scale as you grow with our flexible pricing options.
      </p>

      <BillingToggle 
        isYearly={isYearly}
        onToggle={onBillingToggle}
        isDarkMode={isDarkMode}
      />
    </div>
  );
} 