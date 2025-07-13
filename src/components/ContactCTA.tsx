import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface ContactCTAProps {
  isDarkMode: boolean;
}

export default function ContactCTA({ isDarkMode }: ContactCTAProps) {
  return (
    <div className={`text-center mt-16 p-8 rounded-2xl transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-800' : 'bg-gray-50'
    }`}>
      <h3 className={`text-2xl font-bold mb-4 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>
        Need help choosing the right plan?
      </h3>
      <p className={`mb-6 max-w-xl mx-auto transition-colors duration-300 ${
        isDarkMode ? 'text-gray-300' : 'text-gray-600'
      }`}>
        Our team is here to help you find the perfect solution for your business needs.
      </p>
      <Button className="bg-[#ef6000] hover:bg-[#d55400] text-white">
        Contact Sales Team
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  );
} 