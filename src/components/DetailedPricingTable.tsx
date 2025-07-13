interface ImportantNotesProps {
  isDarkMode: boolean;
}

export default function ImportantNotes({ isDarkMode }: ImportantNotesProps) {
  return (
    <div className="mt-16">
      {/* Important Notes */}
      <div className={`p-6 rounded-lg ${isDarkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
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
  );
} 