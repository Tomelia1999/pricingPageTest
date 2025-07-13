import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

interface DarkModeToggleProps {
  isDarkMode: boolean;
  onToggle: () => void;
}

export default function DarkModeToggle({ isDarkMode, onToggle }: DarkModeToggleProps) {
  return (
    <div className="fixed top-6 right-6 z-50">
      <Button
        variant="outline"
        size="icon"
        onClick={onToggle}
        className={`transition-all duration-300 ${
          isDarkMode 
            ? 'bg-gray-800 border-gray-700 text-white hover:bg-gray-700' 
            : 'bg-white border-gray-200 text-black hover:bg-gray-50'
        }`}
      >
        {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
      </Button>
    </div>
  );
} 