import React from "react";

interface FAQProps {
  isDarkMode: boolean;
}

export default function FAQ({ isDarkMode }: FAQProps) {
  const faqs = [
    {
      question: "What happens if I exceed my monthly request limit?",
      answer: "Once you reach your monthly limit, requests will be throttled. You can upgrade your plan at any time to increase your limits immediately."
    },
    {
      question: "Can I change my plan anytime?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect immediately, and billing is prorated accordingly."
    },
    {
      question: "How does the yearly discount work?",
      answer: "When you choose yearly billing, you get 10% off the total annual cost. You pay upfront for the entire year and save money compared to monthly billing."
    },
    {
      question: "What's included in the Custom plan?",
      answer: "Our Custom plan is tailored to your specific needs with unlimited requests, dedicated support, and enterprise-grade features. Contact our sales team for a personalized quote."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className={`text-3xl font-bold text-center mb-12 transition-colors duration-300 ${
        isDarkMode ? 'text-white' : 'text-black'
      }`}>
        Frequently Asked Questions
      </h2>
      <div className="space-y-8">
        {faqs.map((faq, index) => (
          <div 
            key={index}
            className={`${
              index < faqs.length - 1 ? 'border-b pb-6' : ''
            } transition-colors duration-300 ${
              isDarkMode ? 'border-gray-700' : 'border-gray-200'
            }`}
          >
            <h3 className={`text-lg font-semibold mb-3 transition-colors duration-300 ${
              isDarkMode ? 'text-white' : 'text-black'
            }`}>
              {faq.question}
            </h3>
            <p className={`transition-colors duration-300 ${
              isDarkMode ? 'text-gray-300' : 'text-gray-600'
            }`}>
              {faq.answer}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
} 