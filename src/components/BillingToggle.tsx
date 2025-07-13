import { Badge } from "@/components/ui/badge";

interface BillingToggleProps {
  isYearly: boolean;
  onToggle: (isYearly: boolean) => void;
  isDarkMode: boolean;
}

export default function BillingToggle({ isYearly, onToggle, isDarkMode }: BillingToggleProps) {
  return (
    <div className={`inline-flex items-center p-1 rounded-lg transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-100'
    }`}>
      <button
        onClick={() => onToggle(false)}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 ${
          !isYearly
            ? isDarkMode 
              ? 'bg-white text-black shadow-sm' 
              : 'bg-white text-black shadow-sm'
            : isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-black'
        }`}
      >
        Monthly
      </button>
      <button
        onClick={() => onToggle(true)}
        className={`px-4 py-2 text-sm font-medium rounded-md transition-all duration-200 relative ${
          isYearly
            ? isDarkMode 
              ? 'bg-white text-black shadow-sm' 
              : 'bg-white text-black shadow-sm'
            : isDarkMode
              ? 'text-gray-300 hover:text-white'
              : 'text-gray-600 hover:text-black'
        }`}
      >
        Yearly
        <Badge className="absolute -top-3 -right-3 bg-[#ef6000] text-white text-xs px-1.5 py-0.5 shadow-lg z-10 whitespace-nowrap">
          10% OFF
        </Badge>
      </button>
    </div>
  );
} 