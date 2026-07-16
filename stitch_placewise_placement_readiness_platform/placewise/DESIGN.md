---
name: Placewise
colors:
  surface: '#f9f9ff'
  surface-dim: '#d3daea'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f0f3ff'
  surface-container: '#e7eefe'
  surface-container-high: '#e2e8f8'
  surface-container-highest: '#dce2f3'
  on-surface: '#151c27'
  on-surface-variant: '#464555'
  inverse-surface: '#2a313d'
  inverse-on-surface: '#ebf1ff'
  outline: '#777587'
  outline-variant: '#c7c4d8'
  surface-tint: '#4d44e3'
  primary: '#3525cd'
  on-primary: '#ffffff'
  primary-container: '#4f46e5'
  on-primary-container: '#dad7ff'
  inverse-primary: '#c3c0ff'
  secondary: '#4648d4'
  on-secondary: '#ffffff'
  secondary-container: '#6063ee'
  on-secondary-container: '#fffbff'
  tertiary: '#7e3000'
  on-tertiary: '#ffffff'
  tertiary-container: '#a44100'
  on-tertiary-container: '#ffd2be'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e2dfff'
  primary-fixed-dim: '#c3c0ff'
  on-primary-fixed: '#0f0069'
  on-primary-fixed-variant: '#3323cc'
  secondary-fixed: '#e1e0ff'
  secondary-fixed-dim: '#c0c1ff'
  on-secondary-fixed: '#07006c'
  on-secondary-fixed-variant: '#2f2ebe'
  tertiary-fixed: '#ffdbcc'
  tertiary-fixed-dim: '#ffb695'
  on-tertiary-fixed: '#351000'
  on-tertiary-fixed-variant: '#7b2f00'
  background: '#f9f9ff'
  on-background: '#151c27'
  surface-variant: '#dce2f3'
typography:
  headline-xl:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 30px
    fontWeight: '700'
    lineHeight: 38px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: 32px
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  headline-sm:
    fontFamily: Inter
    fontSize: 20px
    fontWeight: '600'
    lineHeight: 28px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  body-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '400'
    lineHeight: 20px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  container-max: 1280px
  gutter: 1.5rem
  margin-mobile: 1rem
  stack-sm: 0.5rem
  stack-md: 1rem
  stack-lg: 2rem
  inset-card: 1.5rem
---

## Brand & Style
The design system is built for a high-stakes educational environment where clarity and confidence are paramount. The brand personality is **Professional, Academic, and Encouraging**. It balances the rigor of career placement with the supportive nature of an AI mentor.

The aesthetic follows a **Modern Corporate** approach with a focus on **Tonal Layering**. It avoids unnecessary ornamentation, using generous whitespace and subtle elevation to guide students through complex data. The UI should feel like a premium productivity tool—fast, responsive, and organized.

## Colors
The palette is centered around a "Confident Indigo" primary color, signaling authority and intelligence. 

- **Primary (#4F46E5):** Used for primary actions, active navigation states, and brand-critical elements.
- **Surface & Background:** A clear distinction is made between the page background (#F9FAFB) and content cards (#FFFFFF) to create a natural hierarchy.
- **Status Colors:** Success (Green), Warning (Amber), and Danger (Red) are reserved for eligibility badges and readiness indicators. These should be used with a 10-15% opacity background for badges to maintain an approachable, soft look.

## Typography
This design system utilizes **Inter** exclusively to lean into its systematic, utilitarian nature. 

- **Hierarchy:** Use `headline-xl` for dashboard overviews and `headline-md` for card titles.
- **Readability:** Body text should maintain a 150% line-height to ensure students can digest long-form placement feedback without fatigue.
- **Labels:** Use the `label-sm` style with uppercase treatment for section headers in sidebars and badge text to create clear visual distinction from body copy.

## Layout & Spacing
The layout follows a **Fixed-Fluid hybrid grid**. The main content area is capped at 1280px to maintain line-length readability on ultra-wide monitors.

- **Grid:** 12-column layout for desktop with 24px (1.5rem) gutters.
- **Rhythm:** Spacing follows an 8px (0.5rem) linear scale. Use `stack-lg` to separate distinct logical sections and `stack-md` for elements within a group.
- **Mobile:** Transition to a single-column layout with 16px (1rem) side margins. Navigation should collapse into a bottom bar or a simplified hamburger menu.

## Elevation & Depth
This design system uses **Tonal Layers** supplemented by **Ambient Shadows** to define the z-axis.

- **Level 0 (Background):** #F9FAFB. No shadow.
- **Level 1 (Cards/Surface):** #FFFFFF. A very soft, diffused shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -2px rgba(0, 0, 0, 0.05)`.
- **Level 2 (Popovers/Modals):** #FFFFFF. High-elevation shadow with more spread to indicate temporary focus.
- **Outlines:** Use a 1px border of #E5E7EB on Level 1 elements to maintain crisp edges on high-brightness displays.

## Shapes
The shape language is friendly but structured. 

- **Default (8px / 0.5rem):** Standard inputs, buttons, and small UI widgets.
- **Large (16px / 1rem):** Primary containers, dashboard cards, and imagery. This provides the "rounded card" look requested.
- **Full (999px):** Status badges, chips, and pill-style toggle switches.

## Components
- **Buttons:**
  - **Primary:** Solid #4F46E5 background with White text. Subtle scale-down effect on click.
  - **Secondary (Ghost):** Transparent background with Indigo text and a subtle #EEF2FF hover state.
- **Eligibility Badges:** Pill-shaped with 10% opacity background of the status color (e.g., Green-100) and 100% opacity text (e.g., Green-700).
- **Cards:** White background, 1rem corner radius, and 1px light border. Use `inset-card` (1.5rem) for internal padding.
- **Data Visualization:**
  - **Radar Charts:** Use the Primary Indigo for the area fill (20% opacity) and a 2px Primary Indigo stroke for the perimeter.
  - **Heatmaps:** Use a monochromatic Indigo scale, where deeper shades represent higher readiness scores.
- **Input Fields:** 8px corner radius with a 1px #D1D5DB border. On focus, transition to a 2px Indigo border with a soft Indigo outer glow (box-shadow).