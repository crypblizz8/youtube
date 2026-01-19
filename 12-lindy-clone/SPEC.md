# Lindy Clone - Design Specification

## Overview

This document outlines the design specification for the Lindy.ai clone landing page. The goal is to create a clean, modern marketing page that showcases AI agent capabilities with a warm, approachable aesthetic.

---

## Design System

### Colors

```css
/* Primary Colors */
--lindy-blue: #2a66ff;           /* Primary brand blue for CTAs */
--lindy-blue-hover: #1d4ed8;     /* Button hover state */
--lindy-dark: #0f3547;           /* Primary text color */
--lindy-cream: #fcfbf8;          /* Light background */
--lindy-warm-cream: #fef9ec;     /* Feature card backgrounds */

/* Secondary Colors */
--text-secondary: #474a54;       /* Secondary text */
--text-subtle: #31505f;          /* Subtle text */
--border-light: #e7e7e7;         /* Light borders */
--border-subtle: #f1f5f9;        /* Very subtle borders */

/* Accent Colors */
--yellow-accent: #fdb913;        /* Yellow accent (feature highlights) */
--purple-accent: #8b5cf6;        /* Purple for support agents */
--green-accent: #22c55e;         /* Green for success states */
--orange-accent: #f97316;        /* Orange for marketing */
```

### Typography

```css
/* Font Family */
font-family: 'Manrope', 'Inter', system-ui, sans-serif;

/* Font Sizes (using clamp for fluid typography) */
--h1: clamp(2.5rem, 2.072rem + 2.14vw, 4rem);      /* 40px - 64px */
--h2: clamp(2rem, 1.858rem + 0.71vw, 2.5rem);      /* 32px - 40px */
--h3: clamp(1.5rem, 1.286rem + 1.07vw, 2rem);      /* 24px - 32px */
--h4: clamp(1.25rem, 1.143rem + 0.54vw, 1.5rem);   /* 20px - 24px */
--body: 1rem;                                       /* 16px */
--small: 0.875rem;                                  /* 14px */
--xs: 0.75rem;                                      /* 12px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
--font-extrabold: 800;

/* Line Heights */
--leading-tight: 1.1;
--leading-snug: 1.3;
--leading-normal: 1.5;
--leading-relaxed: 1.6;

/* Letter Spacing */
--tracking-tight: -0.02em;
--tracking-normal: 0;
--tracking-wide: 0.05em;
--tracking-wider: 0.1em;
```

### Spacing

```css
/* Based on 8px grid */
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.25rem;   /* 20px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
```

### Border Radius

```css
--radius-sm: 0.375rem;    /* 6px */
--radius-md: 0.5rem;      /* 8px */
--radius-lg: 0.75rem;     /* 12px */
--radius-xl: 1rem;        /* 16px */
--radius-2xl: 1.5rem;     /* 24px */
--radius-3xl: 2rem;       /* 32px */
--radius-full: 9999px;    /* Pill shape */
```

---

## Page Structure

The page consists of 5 main sections (simplified from the original):

```
┌─────────────────────────────────────┐
│           HEADER (fixed)            │
├─────────────────────────────────────┤
│           HERO SECTION              │
│   (with background image)           │
├─────────────────────────────────────┤
│          AGENTS SECTION             │
│   (tabbed interface showcase)       │
├─────────────────────────────────────┤
│         FEATURES SECTION            │
│   (feature cards grid)              │
├─────────────────────────────────────┤
│             FOOTER                  │
└─────────────────────────────────────┘
```

---

## Section Specifications

### 1. Header

**File:** `components/Header.tsx`

**Layout:**
- Fixed position at top
- Full width with max-width container (1280px)
- Height: 80px
- Semi-transparent background with backdrop blur

**Elements:**
- **Logo:** Icon + "Lindy" text
- **Navigation:** Product, Solutions, Enterprise, Pricing, Resources (with dropdown indicators)
- **CTAs:** "Log in" (text), "Talk to sales" (secondary button), "Try for free" (primary button)

**Mobile:**
- Hamburger menu
- Collapsible navigation drawer

**Styling:**
```css
/* Header container */
background: rgba(252, 251, 248, 0.8);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(231, 231, 231, 0.5);
```

**Important:** Remove the floating letter icons (G, in, S, N buttons) from the current implementation.

---

### 2. Hero Section

**File:** `components/Hero.tsx`

**Layout:**
- Full width section
- Padding: 192px top (to account for header), 128px bottom
- Background image from `/public/images/hero-bg.avif`
- Centered content with max-width 896px

**Background:**
```css
background-image: url('/images/hero-bg.avif');
background-size: cover;
background-position: center top;
background-repeat: no-repeat;
/* Fallback gradient */
background-color: linear-gradient(180deg, #FAF5EB 0%, #FFFFFF 100%);
```

**Elements:**

1. **Headline:**
   - Text: "Meet your first AI employee"
   - Font: 56px-72px (fluid), extra bold
   - Color: --lindy-dark (#0f3547)
   - Letter spacing: -0.02em

2. **Subheadline:**
   - Text: "Lindy is the simplest way for businesses to create, manage, and share agents. Now with just a prompt."
   - Font: 18px-20px, normal weight
   - Color: --text-secondary
   - Max-width: 640px

3. **Prompt Input:**
   - White pill-shaped container with shadow
   - Glow effect on hover (gradient border)
   - Placeholder: "How can I help? Describe your agent and I'll build it."
   - Submit button: Blue circular button with arrow icon

4. **Suggestion Tags:**
   - Horizontal row of pill buttons, wrapping on mobile
   - Each tag has: icon + text
   - Tags: "Personal website", "Customer Support", "Outbound Sales Calls", "Lead gen", "Meeting Recorder", "LinkedIn outreach"
   - Hover: slight elevation and border color change

**No floating icons** - Remove the decorative floating letter buttons.

---

### 3. Agents Section

**File:** `components/AgentsSection.tsx`

**Reference:** `design_one.html`, `design_two.html`

**Layout:**
- Full width with max-width 1280px container
- Padding: 96px vertical, 24px horizontal
- Section header + tabbed showcase card

**Section Header:**
- Badge: Icon + "AGENTS" text in pill shape
- Headline: "Build, scale, and manage your entire AI workforce with one platform."
- Font: 48px-56px, bold
- Max-width: 640px

**Tabbed Showcase Card:**
- White rounded container (border-radius: 24px)
- Border: 1px solid --border-light
- Box shadow: large, subtle

**Tab Navigation (4 tabs):**
| Tab | Icon | Label | Description |
|-----|------|-------|-------------|
| Support | headphones | Support | Handle tickets autonomously |
| Sales | trending-up | Sales | Convert more leads |
| Marketing | megaphone | Marketing | Accelerate campaign execution |
| Operations | cog | Operations | Turn documents into insights |

**Tab Styling:**
- Grid layout: 4 equal columns
- Each tab: left-aligned, padded, border-right separator
- Active tab: white background, blue bottom border, darker text
- Inactive tab: gray background, muted text

**Tab Content Area:**
- Background: Light blue tint (#F8F9FF)
- Padding: 48px

**Agent Card Header:**
- Icon badge (colored background)
- Agent name (e.g., "Support Agent")
- Description
- CTA button: "Try for free" (blue, rounded)

**Two-Column Layout:**
1. **Left: Workflow Diagram**
   - Vertical flow of steps connected by arrows
   - Each step: white card with icon + text
   - Example steps: Receive ticket → Analyze → Search knowledge base → Write response → Resolve

2. **Right: Chat UI Mockup**
   - Simulated chat widget
   - Header bar with agent name
   - Message bubbles (AI + User)
   - Input field at bottom

---

### 4. Features Section

**File:** `components/FeaturesSection.tsx`

**Reference:** `design_three.html`

**Layout:**
- Full width with max-width 1280px container
- Padding: 96px vertical
- Warm cream gradient background

**Section Header:**
- Badge: Icon + "FEATURES" text
- Headline: "Everything you need to put AI to work across your entire org."
- Font: 48px-56px, extra bold
- Max-width: 768px

**Feature Cards Grid:**

**Row 1 (2 columns):**

| Card | Visual | Title | Description |
|------|--------|-------|-------------|
| No-code agent builder | Browser mockup with workflow blocks | No-code agent builder | Remarkably easy to use, incredibly powerful agents. |
| Centralized management | Concentric rings with Build/Test/Deploy | Centralized management | For training and deploying agents across your organization. |

**Row 2 (3 columns):**

| Card | Visual | Title | Description |
|------|--------|-------|-------------|
| Access controls | Toggle switch UI mockup | Robust access controls | Control agent access and edit rights precisely. |
| Computer use | Desktop with cursor | Computer use | Giving agents their own virtual machine and tools. |
| Phone agent | Phone UI with call interface | Phone agent | State-of-the-art AI voice agent for calling. |

**Row 3 (7:5 ratio):**

| Card | Visual | Title | Description |
|------|--------|-------|-------------|
| Prompt to agent | Search bar input | Prompt to agent magic | Build complex internal apps and custom agents with just a prompt. |
| Template library | Grid of template cards | Template library | 50+ pre-built agents for common workflows. |

**Card Styling:**
```css
/* Feature card */
background-color: #FEF9EC;
border-radius: 32px;
border: 1px solid rgba(254, 232, 200, 0.5);
padding: 32px-40px;
transition: transform 0.3s, box-shadow 0.3s;

/* Hover state */
transform: translateY(-4px);
box-shadow: 0 12px 24px -10px rgba(253, 185, 19, 0.15);
```

**Bottom CTA Bar:**
- Border top separator
- Left: "Explore all 50+ templates" badge with sparkle icon
- Right: "Get started with a template" link with arrow

---

### 5. Footer

**File:** `components/Footer.tsx`

**Layout:**
- Full width with max-width 1280px container
- Two-part structure: CTA section + Footer links

**CTA Section:**
- Background: Can be white or dark variant
- Headline: "Ready to automate?"
- Subtext: "Start building your AI workforce today."
- Two buttons: "Get Started" (primary), "Contact Sales" (secondary)

**Footer Links:**
- Left: Copyright text
- Right: Privacy Policy, Terms of Service, Twitter links
- Text: Small, gray, with hover states

**Styling:**
```css
/* Footer */
border-top: 1px solid #f1f5f9;
padding: 80px 24px 40px;
```

---

## Components to Update

Based on the simplified structure, update `page.tsx`:

```tsx
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AgentsSection from "@/components/AgentsSection";
import FeaturesSection from "@/components/FeaturesSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <AgentsSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
```

**Components to remove from page:**
- `AgentDemo` (replaced by AgentsSection)
- `HowItWorks`
- `LogoCloud`
- `PlatformFeatures` (replaced by FeaturesSection)
- `Integrations`
- `Enterprise`
- `CustomerStories`
- `Resources`
- `CTA` (moved into Footer)

---

## Animation & Interactions

### Hover Effects
- Buttons: Slight scale (1.02) + shadow increase
- Cards: translateY(-4px) + shadow
- Links: Color transition

### Transitions
```css
transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
```

### Tab Switching
- Opacity transition for content panels
- Immediate tab highlight change

### Float Animation (for mockup elements)
```css
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}
animation: float 5s ease-in-out infinite;
```

---

## Responsive Breakpoints

```css
/* Mobile first approach */
sm: 640px   /* Small tablets */
md: 768px   /* Tablets */
lg: 1024px  /* Small desktops */
xl: 1280px  /* Large desktops */
2xl: 1536px /* Extra large screens */
```

### Mobile Considerations
- Header: Collapsible hamburger menu
- Hero: Stack vertically, reduce padding
- Agents: Single column, simplified tab navigation
- Features: Single column card stack
- Footer: Stacked layout

---

## Assets Required

### Images
- `/public/images/hero-bg.avif` - Hero background image (provided)

### Icons (using Lucide React)
- `Command` - Logo
- `ChevronDown` - Dropdown indicators
- `Menu`, `X` - Mobile menu
- `ArrowUp`, `ArrowRight`, `ArrowDown` - Directional
- `Headphones`, `TrendingUp`, `Megaphone`, `Cog` - Agent tabs
- `LifeBuoy`, `Bot`, `Mail`, `Search`, `Database`, `CheckCircle` - Workflow
- `Zap`, `Monitor`, `Phone`, `LayoutGrid`, `FileText`, `Sparkles` - Features
- `Play`, `Mic`, `Volume2`, `Pause` - Media controls

---

## Implementation Priority

1. **Phase 1:** Header + Hero (foundation)
2. **Phase 2:** Agents Section (main showcase)
3. **Phase 3:** Features Section (value props)
4. **Phase 4:** Footer (wrap up)
5. **Phase 5:** Polish (animations, responsive)

---

## Tailwind Config Updates

Ensure `tailwind.config.ts` includes:

```typescript
theme: {
  extend: {
    colors: {
      'lindy-blue': '#2a66ff',
      'lindy-dark': '#0f3547',
      'lindy-cream': '#fcfbf8',
      'lindy-warm': '#fef9ec',
    },
    fontFamily: {
      sans: ['Manrope', 'Inter', 'system-ui', 'sans-serif'],
    },
    borderRadius: {
      '4xl': '2rem',
    },
  },
}
```
