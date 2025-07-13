# Pricing Page Overview

This page serves as a clear and comprehensive pricing display for a service offering, designed with a clean, minimalist aesthetic. It presents four distinct tiers, provides flexible billing options, and includes user-friendly features like dark mode and a detailed FAQ section.

## Core Functionalities:

1.  **Pricing Tiers:**
    *   **"Free"**: A no-cost option with 5 Million Monthly Requests and 20 RPS.
    *   **"Growth"**: A mid-tier plan priced at $199/month (or equivalent yearly), offering 75 Million Monthly Requests and 150 RPS. This tier is highlighted as "Most Popular."
    *   **"Scale"**: A higher-tier plan at $599/month (or equivalent yearly), providing 250 Million Monthly Requests and 300 RPS.
    *   **"Custom"**: A flexible enterprise solution with "Contact Us" pricing, offering Custom Monthly Requests and Unlimited RPS.
    *   Each tier clearly lists its key features, including request limits and throughput.

2.  **Monthly/Yearly Billing Toggle:**
    *   A prominent toggle allows users to switch between monthly and yearly payment options.
    *   **Default:** The page defaults to `Yearly` billing, clearly indicating a `10% OFF` discount for annual commitment.
    *   **Discount Calculation:** For paid plans, selecting "Yearly" calculates the price as `monthlyPrice * 12 * 0.9` (10% off the annual total).
    *   **Savings Highlight:** When `Yearly` is selected, a badge dynamically appears on each applicable plan, showing the amount saved (e.g., "Save $238").
    *   **Price Display:** Prices are updated dynamically to reflect the chosen billing period (e.g., "$199/month" vs. "$2149/year"). For yearly plans, the equivalent monthly cost (e.g., "$179/month") is also displayed for clarity.

3.  **Dark Mode Toggle:**
    *   A discrete toggle button (Sun/Moon icon) located in the top-right corner allows users to switch between light and dark themes.
    *   **Dark Mode Background:** The dark mode background is set to `#0c121a` (a deep dark blue).
    *   All text, card backgrounds, and other UI elements smoothly transition to appropriate contrasting colors in dark mode, maintaining readability and aesthetic appeal.

## Design & Aesthetics:

*   **Overall Style:** Clean and minimalist, focusing on clarity and ease of use.
*   **Color Palette:**
    *   **Primary Background:** `white` in light mode, `#0c121a` (deep dark blue) in dark mode.
    *   **Accent Color:** `#ef6000` (a vibrant orange/red) is used strategically for:
        *   "Most Popular" badge.
        *   Checkmark icons next to features.
        *   Primary CTA buttons.
        *   Highlighting elements like the yearly discount badge and the border of the "Most Popular" plan.
    *   **Text Colors:** `black` and `gray-600/700` in light mode, `white`, `gray-300/400` in dark mode, ensuring good contrast.
    *   **Card Backgrounds:** `white` in light mode, `gray-800` for cards in dark mode. `gray-50` and `gray-700` for key metric blocks within cards.
*   **Hover Effects:** Cards feature subtle `scale-105` and shadow transitions on hover, adding an interactive touch.
*   **Typography:** Clear and legible sans-serif fonts are used for headings and body text, maintaining a professional look.

## Page Structure:

*   **Header Section:** A prominent title ("Simple, Transparent Pricing") and a descriptive subtitle.
*   **Pricing Grid:** The main section displaying the four pricing cards in a responsive grid layout (1 column on mobile, 2 on tablet, 4 on desktop).
*   **FAQ Section:** A dedicated area addressing common questions about billing, plan changes, and the custom plan.
*   **Contact Call to Action:** A final section encouraging users to contact the sales team if they need assistance in choosing a plan, featuring a prominent button.

## Responsiveness:

The layout is fully responsive, adapting seamlessly to various screen sizes (mobile, tablet, and desktop) ensuring an optimal viewing experience for all users.