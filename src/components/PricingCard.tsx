import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight } from "lucide-react";
import { PricingPlan } from "@/types/pricing";

interface PricingCardProps {
  plan: PricingPlan;
  index: number;
  isDarkMode: boolean;
  isYearly: boolean;
  hoveredPlan: number | null;
  onMouseEnter: (index: number) => void;
  onMouseLeave: () => void;
}

export default function PricingCard({
  plan,
  index,
  isDarkMode,
  isYearly,
  hoveredPlan,
  onMouseEnter,
  onMouseLeave
}: PricingCardProps) {
  const getDisplayPrice = () => {
    if (plan.monthlyPrice === null) return "Contact Us";
    if (plan.monthlyPrice === 0) return "$0";
    
    if (isYearly) {
      const yearlyPrice = plan.monthlyPrice * 12 * 0.9; // 10% discount
      return `$${Math.round(yearlyPrice)}`;
    } else {
      return `$${plan.monthlyPrice}`;
    }
  };

  const getMonthlyEquivalent = () => {
    if (plan.monthlyPrice === null || plan.monthlyPrice === 0) return null;
    if (isYearly) {
      const monthlyEquivalent = (plan.monthlyPrice * 12 * 0.9) / 12;
      return `$${Math.round(monthlyEquivalent)}/month`;
    }
    return null;
  };

  const getSavings = () => {
    if (plan.monthlyPrice === null || plan.monthlyPrice === 0) return null;
    if (isYearly) {
      const monthlyCost = plan.monthlyPrice * 12;
      const yearlyCost = plan.monthlyPrice * 12 * 0.9;
      const savings = monthlyCost - yearlyCost;
      return `Save $${Math.round(savings)}`;
    }
    return null;
  };

  return (
    <Card
      className={`relative transition-all duration-300 flex flex-col h-full ${
        hoveredPlan === index || plan.popular ? 'scale-105 shadow-2xl' : 'shadow-lg hover:shadow-xl'
      } ${
        plan.popular 
          ? 'ring-2 ring-[#ef6000] border-[#ef6000]' 
          : isDarkMode 
            ? 'border-gray-700' 
            : 'border-gray-200'
      } ${
        isDarkMode ? 'bg-gray-800' : 'bg-white'
      }`}
      onMouseEnter={() => onMouseEnter(index)}
      onMouseLeave={onMouseLeave}
    >
      {plan.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="bg-[#ef6000] text-white px-4 py-1 text-sm font-medium">
            <Star className="w-3 h-3 mr-1" />
            Most Popular
          </Badge>
        </div>
      )}

      <CardHeader className="text-center pb-4">
        <h3 className={`text-xl font-bold mb-2 transition-colors duration-300 ${
          isDarkMode ? 'text-white' : 'text-black'
        }`}>
          {plan.name}
        </h3>
        <div className="mb-2 flex items-center justify-center gap-2">
          <span className={`text-3xl font-bold transition-colors duration-300 ${
            isDarkMode ? 'text-white' : 'text-black'
          }`}>
            {getDisplayPrice()}
          </span>
          {plan.monthlyPrice !== null && plan.monthlyPrice !== 0 && (
            <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              /{isYearly ? 'year' : 'month'}
            </span>
          )}
          {plan.monthlyPrice === 0 && (
            <span className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              /month
            </span>
          )}
          {/* Savings badge next to price */}
          {isYearly && getSavings() && (
            <div className="bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold ml-2">
              Save ${Math.round((plan.monthlyPrice || 0) * 12 * 0.1)}
            </div>
          )}
        </div>
        {getMonthlyEquivalent() && (
          <div className={`text-sm transition-colors duration-300 ${
            isDarkMode ? 'text-gray-400' : 'text-gray-500'
          }`}>
            {getMonthlyEquivalent()}
          </div>
        )}
        <p className={`text-sm transition-colors duration-300 ${
          isDarkMode ? 'text-gray-300' : 'text-gray-600'
        }`}>
          {plan.description}
        </p>
      </CardHeader>

      <CardContent className="flex-1 flex flex-col">
        <div className="flex-1 space-y-6">
          {/* Key Metrics */}
          <div className="space-y-3">
            <div className={`p-3 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className={`text-sm mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Monthly Requests
              </div>
              <div className={`font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                {plan.requests}
              </div>
            </div>
            <div className={`p-3 rounded-lg transition-colors duration-300 ${
              isDarkMode ? 'bg-gray-700' : 'bg-gray-50'
            }`}>
              <div className={`text-sm mb-1 transition-colors duration-300 ${
                isDarkMode ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Throughput
              </div>
              <div className={`font-semibold transition-colors duration-300 ${
                isDarkMode ? 'text-white' : 'text-black'
              }`}>
                {plan.rps}
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-3">
            {plan.features.map((feature, featureIndex) => (
              <div key={featureIndex} className="flex items-start gap-3">
                <Check className="w-4 h-4 text-[#ef6000] mt-0.5 flex-shrink-0" />
                <span className={`text-sm transition-colors duration-300 ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button - Always at bottom */}
        <div className="mt-6">
          <Button
            className={`w-full transition-all duration-300 ${
              plan.popular
                ? 'border-white text-[#ef6000] hover:bg-[#ef6000] hover:text-white hover:border-[#ef6000]'
                : plan.buttonVariant === 'outline'
                ? `border-[#ef6000] text-[#ef6000] hover:bg-[#ef6000] hover:text-white ${
                    isDarkMode ? 'hover:border-[#ef6000]' : ''
                  }`
                : 'bg-[#ef6000] hover:bg-[#d55400] text-white'
            }`}
            variant={plan.popular ? 'outline' : plan.buttonVariant}
          >
            {plan.cta}
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}