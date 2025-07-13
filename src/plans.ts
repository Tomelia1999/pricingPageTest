import { PricingPlan } from "./types/pricing";

export const basePlans: PricingPlan[] = [
    {
      name: "Free",
      monthlyPrice: 0,
      description: "Perfect for getting started",
      requests: "5M Monthly Requests",
      rps: "25 RPS",
      features: [
        "5M monthly requests included",
        "25 requests per second",
        "Community support",
        "Standard documentation"
      ],
      cta: "Get Started",
      popular: false,
      buttonVariant: "outline"
    },
    {
      name: "Starter",
      monthlyPrice: 99,
      description: "Best for small projects",
      requests: "25M Monthly Requests",
      rps: "100 RPS",
      features: [
        "25M monthly requests included",
        "100 requests per second",
        "Archive/Trace/Debug/WSS",
        "Dedicated support channel"
      ],
      cta: "Choose Plan",
      popular: false,
      buttonVariant: "outline"
    },
    {
      name: "Growth",
      monthlyPrice: 199,
      description: "Best for growing businesses",
      requests: "75M Monthly Requests",
      rps: "250 RPS",
      features: [
        "75M monthly requests included",
        "250 requests per second",
        "Archive/Trace/Debug/WSS",
        "Dedicated support channel"
      ],
      cta: "Choose Plan",
      popular: true,
      buttonVariant: "default"
    },
    {
      name: "Scale",
      monthlyPrice: 599,
      description: "For high-volume applications",
      requests: "250M Monthly Requests",
      rps: "500 RPS",
      features: [
        "250M monthly requests included",
        "500 requests per second",
        "Archive/Trace/Debug/WSS",
        "Dedicated support channel"
      ],
      cta: "Choose Plan",
      popular: false,
      buttonVariant: "outline"
    },
    {
      name: "Enterprise",
      monthlyPrice: null,
      description: "Tailored for enterprise needs",
      requests: "250M+ Monthly Requests",
      rps: "Unlimited RPS",
      features: [
        "250M+ monthly requests",
        "Unlimited requests per second",
        "Custom chains",
        "Enterprise support"
      ],
      cta: "Contact Us",
      popular: false,
      buttonVariant: "outline"
    }
  ];

// Detailed pricing data for the comprehensive table
export const detailedPlans = [
  {
    name: "Free",
    price: "—",
    annualPrice: "—",
    monthlyCalls: "5M",
    rateLimit: "25 RPS",
    pricePerMillion: "—",
    overagePerMillion: "—",
    features: [
      "No Archive/Debug/Trace/WSS",
      "Community support"
    ]
  },
  {
    name: "Starter",
    price: "$99/mo",
    annualPrice: "$89/month (10% off)",
    monthlyCalls: "25M",
    rateLimit: "100 RPS",
    pricePerMillion: "$4.0",
    overagePerMillion: "$10",
    features: [
      "Archive/Trace/Debug/WSS",
      "Dedicated support channel"
    ]
  },
  {
    name: "Growth",
    price: "$199/mo",
    annualPrice: "$179/month (10% off)",
    monthlyCalls: "75M",
    rateLimit: "250 RPS",
    pricePerMillion: "$2.66",
    overagePerMillion: "$6",
    features: [
      "Archive/Trace/Debug/WSS",
      "Dedicated support channel"
    ]
  },
  {
    name: "Scale",
    price: "$599/mo",
    annualPrice: "$499/month (17% off)",
    monthlyCalls: "250M",
    rateLimit: "500 RPS",
    pricePerMillion: "$2.40",
    overagePerMillion: "$4",
    features: [
      "Archive/Trace/Debug/WSS",
      "Dedicated support channel"
    ]
  },
  {
    name: "Enterprise",
    price: "Custom",
    annualPrice: "Custom",
    monthlyCalls: "250M+",
    rateLimit: "Unlimited RPS",
    pricePerMillion: "$2.40↓",
    overagePerMillion: "$2.40",
    features: [
      "Custom chains",
      "Enterprise support"
    ]
  }
];