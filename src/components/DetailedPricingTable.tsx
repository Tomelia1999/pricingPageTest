import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { detailedPlans } from "@/plans";

interface DetailedPricingTableProps {
  isDarkMode: boolean;
}

export default function DetailedPricingTable({ isDarkMode }: DetailedPricingTableProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`group flex items-center justify-center mx-auto text-2xl font-bold transition-colors duration-300 hover:text-[#ef6000] ${
            isDarkMode ? 'text-white' : 'text-gray-900'
          }`}
        >
          <span>Detailed Pricing Comparison</span>
          <div className="ml-3 transition-transform duration-300">
            {isExpanded ? (
              <ChevronUp className="w-6 h-6 text-[#ef6000]" />
            ) : (
              <ChevronDown className="w-6 h-6 text-[#ef6000]" />
            )}
          </div>
        </button>
        <p className={`text-lg mt-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
          {isExpanded ? 'Complete breakdown of all plans and features' : 'Click to see complete breakdown of all plans and features'}
        </p>
      </div>

      <div className={`transition-all duration-500 ease-in-out ${
        isExpanded ? 'opacity-100 max-h-none' : 'opacity-0 max-h-0 overflow-hidden'
      }`}>
        <div className="overflow-x-auto">
          <table className={`w-full border-collapse ${isDarkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-lg`}>
            <thead>
              <tr className={`${isDarkMode ? 'bg-gray-700' : 'bg-gray-50'}`}>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Plan
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Monthly Price
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Annual Price
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Monthly Calls
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Rate Limit
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  $/M
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Overage $/M
                </th>
                <th className={`px-6 py-4 text-left text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                  Features
                </th>
              </tr>
            </thead>
            <tbody>
              {detailedPlans.map((plan, index) => (
                <tr 
                  key={plan.name} 
                  className={`${isDarkMode ? 'hover:bg-gray-700' : 'hover:bg-gray-50'} transition-colors duration-200`}
                >
                  <td className={`px-6 py-4 text-sm font-medium ${isDarkMode ? 'text-white' : 'text-gray-900'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {plan.name === "Growth" ? (
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${isDarkMode ? 'bg-blue-900 text-blue-200' : 'bg-blue-100 text-blue-800'} mr-2`}>
                        Popular
                      </span>
                    ) : null}
                    <span className={plan.name === "Scale" || plan.name === "Enterprise" ? 'font-bold' : ''}>
                      {plan.name}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <span className={plan.name === "Starter" || plan.name === "Growth" || plan.name === "Scale" ? 'font-bold' : ''}>
                      {plan.price}
                    </span>
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {plan.annualPrice}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {plan.monthlyCalls}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {plan.rateLimit}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {plan.pricePerMillion}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    {plan.overagePerMillion}
                  </td>
                  <td className={`px-6 py-4 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} border-b ${isDarkMode ? 'border-gray-600' : 'border-gray-200'}`}>
                    <ul className="space-y-1">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-xs">
                          <span className="w-1 h-1 bg-current rounded-full mr-2 flex-shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Important Notes */}
        <div className={`mt-8 p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
          <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>
            Important Notes
          </h4>
          <ul className={`space-y-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-600'}`}>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-current rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <strong>Archive / Trace / Debug calls = 2 Requests</strong>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-current rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <strong>Enable auto upgrade to avoid overage fees</strong>
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-current rounded-full mr-2 mt-2 flex-shrink-0"></span>
              <strong>Annual pre-pay:</strong> Save 10-17% on annual plans
            </li>
            <li className="flex items-start">
              <span className="w-1 h-1 bg-current rounded-full mr-2 mt-2 flex-shrink-0"></span>
              Credit & Crypto payments coming soon!
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
} 