export interface PricingPlan {
  name: string;
  monthlyPrice: number | null;
  description: string;
  requests: string;
  rps: string;
  features: string[];
  cta: string;
  popular: boolean;
  buttonVariant: "default" | "outline";
} 