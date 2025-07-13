# System Patterns

## How The System Is Built
- React functional component with hooks for state management
- TypeScript for type safety
- Tailwind CSS for styling with utility-first approach
- Modular component structure for reusability

## Key Technical Decisions
- Use React hooks (useState) for component state
- Implement responsive design with Tailwind CSS breakpoints
- Use template literals for dynamic className generation
- Separate pricing logic into helper functions
- Use Lucide React for consistent iconography

## Architecture Patterns
- Single Page Application (SPA) structure
- Component-based architecture
- State management with React hooks
- CSS-in-JS approach using Tailwind classes
- Responsive-first design philosophy

## Component Structure
```
PricingPage/
├── State Management (useState hooks)
├── Helper Functions (pricing calculations)
├── UI Components
│   ├── Dark Mode Toggle
│   ├── Pricing Cards Grid
│   ├── Billing Toggle
│   ├── FAQ Section
│   └── Contact CTA
└── Styling (Tailwind CSS)
```

## Data Flow
1. User interactions trigger state updates
2. State changes trigger re-renders
3. Helper functions calculate derived values
4. UI updates reflect new state 